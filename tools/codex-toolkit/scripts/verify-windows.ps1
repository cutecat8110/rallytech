[CmdletBinding()]
param(
    [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\\..\\..")).Path,
    [string]$CodexHome = (Join-Path $env:USERPROFILE ".codex")
)

$ErrorActionPreference = "Stop"

$ToolkitRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$ExpectedSkillsRoot = Join-Path $ToolkitRoot "skills"
$ConfigPath = Join-Path $CodexHome "config.toml"
$RulesPath = Join-Path $CodexHome "rules\\default.rules"
$EnvironmentPath = Join-Path $RepoRoot ".codex\\environments\\environment.toml"
$MinimumNodeVersion = [version]"24.14.0"
$MinimumNpmVersion = [version]"11.11.0"
$MinimumPythonVersion = [version]"3.14.3"
$Issues = New-Object System.Collections.Generic.List[string]

function Write-Step {
    param([string]$Message)
    Write-Host "==> $Message"
}

function Add-Issue {
    param([string]$Message)
    $Issues.Add($Message)
    Write-Warning $Message
}

function Add-Notice {
    param([string]$Message)
    Write-Warning $Message
}

function Get-NormalizedVersion {
    param([string]$RawValue)

    $match = [regex]::Match($RawValue, "([0-9]+(\.[0-9]+){1,3})")
    if (-not $match.Success) {
        return $null
    }

    $value = $match.Groups[1].Value
    $segments = $value.Split(".")
    while ($segments.Count -lt 4) {
        $segments += "0"
    }

    return [version]($segments -join ".")
}

function Test-VersionCommand {
    param(
        [string]$Name,
        [string]$Command,
        [version]$MinimumVersion
    )

    Write-Step "Checking $Name"

    if (-not (Get-Command $Command -ErrorAction SilentlyContinue)) {
        Add-Issue "$Name command is not available."
        return
    }

    $rawOutput = & $Command "--version" 2>&1
    $version = Get-NormalizedVersion -RawValue ($rawOutput | Out-String)

    if (-not $version) {
        Add-Issue "$Name version could not be parsed from: $rawOutput"
        return
    }

    Write-Host "$Name version: $version"
    if ($version -lt $MinimumVersion) {
        Add-Issue "$Name version $version is below required baseline $MinimumVersion."
    }
}

Write-Step "Checking toolchain versions"
Test-VersionCommand -Name "node" -Command "node" -MinimumVersion $MinimumNodeVersion
Test-VersionCommand -Name "npm" -Command "npm" -MinimumVersion $MinimumNpmVersion
Test-VersionCommand -Name "python" -Command "python" -MinimumVersion $MinimumPythonVersion

Write-Step "Checking npx"
if (-not (Get-Command "npx" -ErrorAction SilentlyContinue)) {
    Add-Issue "npx command is not available."
}
else {
    $npxVersion = & npx "--version" 2>&1
    Write-Host "npx version: $npxVersion"
}

Write-Step "Checking python package: mcp-server-fetch"
try {
    $pipShow = & python "-m" "pip" "show" "mcp-server-fetch" 2>&1
    if ($LASTEXITCODE -ne 0 -or -not ($pipShow | Out-String).Contains("Name: mcp-server-fetch")) {
        Add-Issue "python package mcp-server-fetch is not installed."
    }
    else {
        Write-Host ($pipShow | Out-String)
    }
}
catch {
    Add-Issue "Failed to query python package mcp-server-fetch: $($_.Exception.Message)"
}

Write-Step "Checking vendored custom skills"
$ExpectedSkillNames = Get-ChildItem -LiteralPath $ExpectedSkillsRoot -Directory | Select-Object -ExpandProperty Name
foreach ($SkillName in $ExpectedSkillNames) {
    $installedSkillPath = Join-Path $CodexHome "skills\\$SkillName"
    if (-not (Test-Path -LiteralPath $installedSkillPath)) {
        Add-Issue "Missing installed skill: $SkillName"
    }
}

Write-Step "Checking config.toml MCP entries"
if (-not (Test-Path -LiteralPath $ConfigPath)) {
    Add-Issue "Missing Codex config: $ConfigPath"
}
else {
    $configContent = Get-Content -LiteralPath $ConfigPath -Raw
    foreach ($mcpName in @("chrome-devtools", "playwright", "context7", "memory", "fetch")) {
        if (-not $configContent.Contains("[mcp_servers.$mcpName]")) {
            Add-Issue "Missing MCP config entry: $mcpName"
        }
    }
}

Write-Step "Checking raw rules references"
if (-not (Test-Path -LiteralPath $RulesPath)) {
    Add-Issue "Missing Codex rules file: $RulesPath"
}
else {
    $rulesContent = Get-Content -LiteralPath $RulesPath -Raw
    if ($rulesContent.Contains("commit-assistant")) {
        Add-Notice "default.rules still references commit-assistant. This toolkit keeps raw rules by design, so review that legacy rule on the new machine if the helper is not installed."
    }
}

Write-Step "Checking repo-local environment"
if (-not (Test-Path -LiteralPath $EnvironmentPath)) {
    Add-Issue "Missing repo-local environment file: $EnvironmentPath"
}

Write-Step "Running workflow preflight"
Push-Location $RepoRoot
try {
    & npm "run" "workflow:clone:preflight"
    if ($LASTEXITCODE -ne 0) {
        Add-Issue "npm run workflow:clone:preflight failed."
    }
}
catch {
    Add-Issue "Failed to run workflow:clone:preflight: $($_.Exception.Message)"
}
finally {
    Pop-Location
}

if ($Issues.Count -gt 0) {
    Write-Host ""
    Write-Host "Verification finished with issues:" -ForegroundColor Red
    foreach ($Issue in $Issues) {
        Write-Host "- $Issue" -ForegroundColor Red
    }
    exit 1
}

Write-Host ""
Write-Host "Verification finished successfully." -ForegroundColor Green
