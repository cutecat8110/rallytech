# Codex Toolkit

最後更新：2026-05-08

`tools/codex-toolkit/` 是本專案內版控的 Codex 搬機工具包。它保存可共享、可重建的設定與內容，讓新 Windows 電腦可以從 repo 還原 non-system custom skills、rules 與 repo-local environment。

這個 toolkit 是 baseline template，不是 live profile。`auth.json`、`sessions/`、`memories/`、`history.jsonl` 這類私人狀態只能由匯出腳本輸出到 repo 外，不進 git。

Skills / MCP / plugin 的專案政策以 [../../docs/project/04-協作與交付規範.md](../../docs/project/04-協作與交付規範.md) 為唯一詳細來源。

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

repo 內保存：

- 全部非 `.system` 的 custom skills。
- `rules/default.rules` 的 raw legacy rules artifact。
- Windows 用的 `config.toml` template。
- repo-local `.codex/environments/environment.toml` template。
- 安裝、驗證與私人備份腳本。

repo 內不保存：

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

`.system` skills 由 Codex 安裝提供，不 vendoring 進 repo。

## Task-Activated MCP Policy

Codex 5.5 類型工作流之後，本 toolkit 不再把 `chrome-devtools`、`playwright`、`context7`、`memory`、`fetch` 當成新機預設常駐 MCP。

原則：

- 需要第三方 connector、MCP、plugin 或 app 時，依任務啟用。
- 使用前先確認目前 session 已提供、已授權、已載入。
- 回報時標記 evidence 來源，例如 Computer Use、Playwright capture、DevTools、static inspection、official docs 或 web source。
- 若能力只存在於歷史 config，不視為目前可用 capability。

## 新機前置安裝

先在新機準備下列環境：

1. 安裝 Codex Desktop。
2. 安裝 Node.js 與 npm。基線版本為 `Node v24.14.0`、`npm 11.11.0`。
3. 安裝 Python。基線版本為 `Python 3.14.3`。
4. 安裝 Google Chrome。
5. 確認 Codex Desktop 已登入，並可使用目前 session 提供的 Computer Use / in-app browser / apps / plugins。

## 還原流程

1. Clone 本 repo 到新機。
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

- 複製 `skills/` 到 `%USERPROFILE%\.codex\skills`。
- 複製 `rules/default.rules` 到 `%USERPROFILE%\.codex\rules`。
- 以 `templates/config.windows.toml` 產生 `%USERPROFILE%\.codex\config.toml`。
- 寫入 repo-local `.codex/environments/environment.toml`。
- 把舊機絕對路徑改寫成新機的 `UserHome` 與 `RepoRoot`。
- 在 `%USERPROFILE%\.codex\backups\toolkit-install-<timestamp>` 建立覆蓋前備份。

若只想先看要做哪些變更，可以先跑 dry run：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\install-windows.ps1 -DryRun
```

## 驗證流程

執行驗證腳本：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\verify-windows.ps1
```

驗證腳本會檢查：

- `node` / `npm` / `python` 是否可用，且版本不低於目前基線。
- `npx` 是否可用。
- `%USERPROFILE%\.codex\skills` 是否有完整 vendored non-system custom skills。
- `%USERPROFILE%\.codex\config.toml` 是否仍殘留舊版常駐 MCP 設定。
- `%USERPROFILE%\.codex\rules\default.rules` 是否存在，並提示 legacy helper references。
- repo-local `.codex/environments/environment.toml` 是否存在。
- `npm run workflow:clone:preflight` 是否可通過。

## 私人備份流程

私人狀態不進版控。若要搬機，可以在舊機執行：

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\codex-toolkit\scripts\export-private-backup.ps1
```

預設輸出會放到 `Documents\codex-migration\<timestamp>\`，並包含：

- `live-profile/`：可人工檢查、可手動還原的私人資料。
- `cold-backup.zip`：整個 `%USERPROFILE%\.codex` 的回滾保險。

建議做法：

1. 先用 repo 內 toolkit 還原 custom skills、rules 與 repo-local environment。
2. 再視需要從 `live-profile/` 挑選性搬入私人資料。
3. `auth.json` 優先保留做備份，新機仍建議重新登入。

## 維護原則

- 新增或調整 custom skills 後，同步更新 `tools/codex-toolkit/skills/`。
- 調整 feature flags 或 task-activated MCP policy 後，同步更新 `templates/config.windows.toml` 與 `docs/project/04`。
- 調整 repo-local Codex environment 後，同步更新 `project/environment.toml`。
- `rules/default.rules` 目前保留 raw legacy rules artifact；本文件不清理實際 prefix rules，避免改動使用者環境授權行為。
- 若 `default.rules` 仍有歷史本機工具或舊 skill 路徑，`verify-windows.ps1` 會提出 warning，方便在新機上決定是否保留或清理。
