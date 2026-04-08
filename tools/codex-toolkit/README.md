# Codex Toolkit

`tools/codex-toolkit/` 是本專案內版控的 Codex 搬機工具包。它保存可共享、可重建的設定與內容，讓我們在新 Windows 電腦上可以從 repo 還原 custom skills、MCP 設定、rules 與 repo-local environment。

這個 toolkit 不保存完整個人 profile。`auth.json`、`sessions/`、`memories/`、`history.jsonl` 這類私人狀態仍由匯出腳本輸出到 repo 外，不進 git。

## 內容結構

```text
tools/codex-toolkit/
├─ README.md
├─ project/
│  └─ environment.toml
├─ rules/
│  └─ default.rules
├─ scripts/
│  ├─ export-private-backup.ps1
│  ├─ install-windows.ps1
│  └─ verify-windows.ps1
├─ skills/
│  └─ ...all non-system custom skills
└─ templates/
   └─ config.windows.toml
```

## 版控邊界

repo 內只保存以下內容：

- 全部非 `.system` 的 custom skills
- `default.rules` 原始內容
- Windows 用的 `config.toml` template
- repo-local `.codex/environments/environment.toml` template
- 安裝、驗證與私人備份腳本

repo 內不保存以下內容：

- `auth.json`
- `memories/`
- `sessions/`
- `history.jsonl`
- `session_index.jsonl`
- `.sandbox*`
- `cache`
- `log`
- `vendor_imports`
- `state_*.sqlite*`
- `logs_*.sqlite*`

## 新機前置安裝

先在新機準備下列環境：

1. 安裝 Codex Desktop。
2. 安裝 Node.js 與 npm。基線版本為 `Node v24.14.0`、`npm 11.11.0`。
3. 安裝 Python。基線版本為 `Python 3.14.3`。
4. 安裝 Google Chrome。
5. 安裝 fetch MCP 依賴：

```powershell
python -m pip install mcp-server-fetch
```

## 還原流程

1. clone 本 repo 到新機。
2. 先啟動一次 Codex Desktop，讓 `%USERPROFILE%\.codex` 自動建立。
3. 在 repo root 執行安裝腳本：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\install-windows.ps1
```

如果新機的使用者名稱或 repo 路徑和舊機不同，可以明確指定：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\install-windows.ps1 `
  -RepoRoot "D:\workspace\rallytech" `
  -UserHome "C:\Users\NewUser"
```

腳本會自動：

- 複製 `skills/` 到 `%USERPROFILE%\.codex\skills`
- 複製 `rules/default.rules` 到 `%USERPROFILE%\.codex\rules`
- 以 `templates/config.windows.toml` 產生 `%USERPROFILE%\.codex\config.toml`
- 寫入 repo-local `.codex/environments/environment.toml`
- 把舊機的絕對路徑改寫成新機的 `UserHome` 與 `RepoRoot`
- 在 `%USERPROFILE%\.codex\backups\toolkit-install-<timestamp>` 建立覆蓋前備份

若只想先看要做哪些變更，可以先跑 dry run：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\install-windows.ps1 -DryRun
```

## 驗證流程

1. 開啟 Chrome remote debugging：

```powershell
chrome.exe --remote-debugging-port=9222
```

2. 執行驗證腳本：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\verify-windows.ps1
```

驗證腳本會檢查：

- `node` / `npm` / `python` 是否可用，且版本不低於目前基線
- `python -m pip show mcp-server-fetch`
- `npx`
- `%USERPROFILE%\.codex\skills` 是否有完整 vendored skills
- `%USERPROFILE%\.codex\config.toml` 是否含 5 個 MCP server 設定
- repo-local `.codex/environments/environment.toml` 是否存在
- `npm run workflow:clone:preflight` 是否可通過

## 私人備份流程

私人狀態不進版控。若要搬機，可以在舊機執行：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\export-private-backup.ps1
```

預設輸出會放到 `Documents\codex-migration\<timestamp>\`，並包含：

- `live-profile/`：可人工檢查、可手動還原的私人資料
- `cold-backup.zip`：整個 `%USERPROFILE%\.codex` 的回滾保險

建議做法：

1. 先用 repo 內 toolkit 還原 custom skills、MCP 與 rules。
2. 再視需要從 `live-profile/` 挑選性搬入私人資料。
3. `auth.json` 優先保留做備份，新機仍建議重新登入。

## 維護原則

- 新增或調整 custom skills 後，記得同步更新 `tools/codex-toolkit/skills/`。
- 調整 MCP baseline 或 feature flags 後，記得同步更新 `templates/config.windows.toml`。
- 調整 repo-local Codex environment 後，記得同步更新 `project/environment.toml`。
- `.system` skills 由 Codex 安裝提供，不 vendoring 進 repo。
- `rules/default.rules` 目前採 raw 帶入策略。若其中仍有歷史本機工具或舊 skill 路徑，verify script 會提出 warning，方便在新機上決定是否保留或清理。
