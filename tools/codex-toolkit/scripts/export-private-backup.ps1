[CmdletBinding()]
param(
    [string]$CodexHome = (Join-Path $env:USERPROFILE ".codex"),
    [string]$OutputRoot = (Join-Path ([Environment]::GetFolderPath("MyDocuments")) ("codex-migration\\" + (Get-Date -Format "yyyyMMdd-HHmmss")))
)

$ErrorActionPreference = "Stop"

$LiveProfileRoot = Join-Path $OutputRoot "live-profile"
$ColdBackupPath = Join-Path $OutputRoot "cold-backup.zip"
$ManifestPath = Join-Path $OutputRoot "backup-manifest.txt"
$PrivateItems = @(
    "auth.json",
    "memories",
    "sessions",
    "history.jsonl",
    "session_index.jsonl"
)

function Write-Step {
    param([string]$Message)
    Write-Host "==> $Message"
}

function Write-Utf8NoBomFile {
    param(
        [string]$Path,
        [string[]]$Lines
    )

    $content = [string]::Join([Environment]::NewLine, $Lines)
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $content, $utf8NoBom)
}

Write-Step "Preparing output directories"
$null = New-Item -ItemType Directory -Force -Path $OutputRoot, $LiveProfileRoot

Write-Step "Exporting live-profile items"
foreach ($Item in $PrivateItems) {
    $source = Join-Path $CodexHome $Item
    $destination = Join-Path $LiveProfileRoot $Item

    if (-not (Test-Path -LiteralPath $source)) {
        Write-Warning "Skip missing item: $source"
        continue
    }

    if ((Get-Item -LiteralPath $source) -is [System.IO.DirectoryInfo]) {
        if (Test-Path -LiteralPath $destination) {
            Remove-Item -LiteralPath $destination -Recurse -Force
        }
        Copy-Item -LiteralPath $source -Destination $destination -Recurse -Force
    }
    else {
        $destinationDirectory = Split-Path -Parent $destination
        $null = New-Item -ItemType Directory -Force -Path $destinationDirectory
        Copy-Item -LiteralPath $source -Destination $destination -Force
    }
}

Write-Step "Writing backup manifest"
$manifest = @(
    "Codex private backup manifest",
    "Created: $(Get-Date -Format s)",
    "CodexHome: $CodexHome",
    "",
    "live-profile includes:",
    "- auth.json",
    "- memories/",
    "- sessions/",
    "- history.jsonl",
    "- session_index.jsonl",
    "",
    "cold-backup.zip contains the whole .codex profile as a rollback safety copy.",
    "Do not use cache, log, vendor_imports, .sandbox*, state_*.sqlite*, or logs_*.sqlite* as the primary restore source."
)
Write-Utf8NoBomFile -Path $ManifestPath -Lines $manifest

Write-Step "Creating cold-backup.zip"
if (Test-Path -LiteralPath $ColdBackupPath) {
    Remove-Item -LiteralPath $ColdBackupPath -Force
}
Compress-Archive -LiteralPath $CodexHome -DestinationPath $ColdBackupPath -Force

Write-Step "Completed"
Write-Host "Output root: $OutputRoot"
Write-Host "Live profile: $LiveProfileRoot"
Write-Host "Cold backup: $ColdBackupPath"
