[CmdletBinding()]
param(
    [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\\..\\..")).Path,
    [string]$CodexHome = (Join-Path $env:USERPROFILE ".codex"),
    [string]$UserHome = $env:USERPROFILE,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

$ToolkitRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$SkillsSource = Join-Path $ToolkitRoot "skills"
$RulesSource = Join-Path $ToolkitRoot "rules\\default.rules"
$ConfigTemplate = Join-Path $ToolkitRoot "templates\\config.windows.toml"
$EnvironmentTemplate = Join-Path $ToolkitRoot "project\\environment.toml"
$RepoEnvironmentTarget = Join-Path $RepoRoot ".codex\\environments\\environment.toml"
$OldUserHome = "C:\\Users\\Hao.Wang"
$OldRepoRoot = "C:\\Users\\Hao.Wang\\Documents\\git\\rallytech"
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupRoot = Join-Path $CodexHome "backups\\toolkit-install-$Timestamp"

function Write-Step {
    param([string]$Message)
    Write-Host "==> $Message"
}

function Invoke-Action {
    param(
        [string]$Description,
        [scriptblock]$Script
    )

    if ($DryRun) {
        Write-Host "[DryRun] $Description"
        return
    }

    Write-Host $Description
    & $Script
}

function Ensure-Directory {
    param([string]$Path)

    Invoke-Action "Ensure directory: $Path" {
        $null = New-Item -ItemType Directory -Force -Path $Path
    }
}

function Backup-FileIfExists {
    param(
        [string]$SourcePath,
        [string]$RelativeDestination
    )

    if (-not (Test-Path -LiteralPath $SourcePath)) {
        return
    }

    $destination = Join-Path $BackupRoot $RelativeDestination
    $destinationDirectory = Split-Path -Parent $destination
    Ensure-Directory -Path $destinationDirectory
    Invoke-Action "Backup file: $SourcePath -> $destination" {
        Copy-Item -LiteralPath $SourcePath -Destination $destination -Force
    }
}

function Backup-DirectoryIfExists {
    param(
        [string]$SourcePath,
        [string]$RelativeDestination
    )

    if (-not (Test-Path -LiteralPath $SourcePath)) {
        return
    }

    $destination = Join-Path $BackupRoot $RelativeDestination
    Ensure-Directory -Path (Split-Path -Parent $destination)
    Invoke-Action "Backup directory: $SourcePath -> $destination" {
        if (Test-Path -LiteralPath $destination) {
            Remove-Item -LiteralPath $destination -Recurse -Force
        }
        Copy-Item -LiteralPath $SourcePath -Destination $destination -Recurse -Force
    }
}

function Get-RewrittenContent {
    param([string]$Content)

    $contentWithRepoPath = [regex]::Replace(
        $Content,
        [regex]::Escape($OldRepoRoot),
        [System.Text.RegularExpressions.MatchEvaluator]{ param($Match) $RepoRoot },
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )

    return [regex]::Replace(
        $contentWithRepoPath,
        [regex]::Escape($OldUserHome),
        [System.Text.RegularExpressions.MatchEvaluator]{ param($Match) $UserHome },
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )
}

function Read-Utf8NoBomFile {
    param([string]$Path)

    $utf8 = New-Object System.Text.UTF8Encoding($false, $true)
    return [System.IO.File]::ReadAllText($Path, $utf8)
}

function Write-Utf8NoBomFile {
    param(
        [string]$Path,
        [string]$Content
    )

    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Content, $utf8NoBom)
}

function Write-ProcessedFile {
    param(
        [string]$SourcePath,
        [string]$DestinationPath,
        [switch]$TreatAsTemplate
    )

    $rawContent = Read-Utf8NoBomFile -Path $SourcePath

    if ($TreatAsTemplate) {
        $processedContent = $rawContent.Replace("{{REPO_ROOT}}", $RepoRoot).Replace("{{USER_HOME}}", $UserHome)
    }
    else {
        $processedContent = Get-RewrittenContent -Content $rawContent
    }

    Ensure-Directory -Path (Split-Path -Parent $DestinationPath)
    Invoke-Action "Write file: $DestinationPath" {
        Write-Utf8NoBomFile -Path $DestinationPath -Content $processedContent
    }
}

Write-Step "Preparing Codex toolkit install"
Write-Host "RepoRoot: $RepoRoot"
Write-Host "CodexHome: $CodexHome"
Write-Host "UserHome: $UserHome"

Ensure-Directory -Path $CodexHome
Ensure-Directory -Path (Join-Path $CodexHome "skills")
Ensure-Directory -Path (Join-Path $CodexHome "rules")
Ensure-Directory -Path (Split-Path -Parent $RepoEnvironmentTarget)

Write-Step "Backing up existing profile files"
Backup-FileIfExists -SourcePath (Join-Path $CodexHome "config.toml") -RelativeDestination "config.toml"
Backup-FileIfExists -SourcePath (Join-Path $CodexHome "rules\\default.rules") -RelativeDestination "rules\\default.rules"
Backup-DirectoryIfExists -SourcePath (Join-Path $CodexHome "skills") -RelativeDestination "skills"
Backup-FileIfExists -SourcePath $RepoEnvironmentTarget -RelativeDestination "repo-environment\\environment.toml"

Write-Step "Installing vendored custom skills"
$SkillDirectories = Get-ChildItem -LiteralPath $SkillsSource -Directory
foreach ($SkillDirectory in $SkillDirectories) {
    $destination = Join-Path (Join-Path $CodexHome "skills") $SkillDirectory.Name
    Invoke-Action "Mirror skill: $($SkillDirectory.Name)" {
        if (Test-Path -LiteralPath $destination) {
            Remove-Item -LiteralPath $destination -Recurse -Force
        }
        Copy-Item -LiteralPath $SkillDirectory.FullName -Destination $destination -Recurse -Force
    }
}

Write-Step "Writing rules, config, and repo-local environment"
Write-ProcessedFile -SourcePath $RulesSource -DestinationPath (Join-Path $CodexHome "rules\\default.rules")
Write-ProcessedFile -SourcePath $ConfigTemplate -DestinationPath (Join-Path $CodexHome "config.toml") -TreatAsTemplate
Write-ProcessedFile -SourcePath $EnvironmentTemplate -DestinationPath $RepoEnvironmentTarget

Write-Step "Completed"
if ($DryRun) {
    Write-Host "Dry run finished. No files were modified."
}
else {
    Write-Host "Codex toolkit install finished successfully."
    Write-Host "Backup location: $BackupRoot"
}
