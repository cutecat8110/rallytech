# Commit 規則與格式

最後更新：2026-03-26

## 目的

- 統一 commit 訊息格式，讓歷史可快速掃讀與追蹤。
- 對齊 PR title 與 squash merge 的主分支歷史品質。
- 建立「幫我 commit」時的固定檢查流程。

## 1. Commit 訊息格式（Conventional Lite）

格式：

```text
<type>(<scope>): <subject>
```

- `scope` 可選，但建議填寫。
- 語言策略：`type` 使用英文；`subject` 使用中文。

### type 白名單

- `feat`
- `fix`
- `refactor`
- `docs`
- `style`
- `test`
- `chore`
- `ci`
- `build`
- `perf`
- `revert`

### scope 建議字典（目錄導向）

- `app`
- `pages`
- `components`
- `layouts`
- `styles`
- `docs`
- `assets`
- `deps`
- `tooling`
- `config`
- `ci`

## 2. Subject 規則

- 最多 50 字（以字元計）。
- 不得以 `。`、`.`、`!`、`！` 結尾。
- 直接描述本次變更意圖，避免空泛描述。

## 3. Breaking Change 規則

格式：

```text
type(scope)!: subject
```

且 body 或 footer 必須包含：

```text
BREAKING CHANGE: <說明內容>
```

## 4. Issue 關聯

- 非強制。
- 如需關聯，於 footer 使用 `Refs:` 或 `Closes:`。

## 5. 提交前檢查（固定順序）

1. `pnpm exec prettier --check .`
2. `pnpm lint`
3. `pnpm typecheck`

補充：

- 若尚未安裝 Prettier，先執行 `pnpm add -D prettier` 再檢查。
- 任一檢查失敗即中止提交，不允許跳過檢查（不使用 `--no-verify`）。

## 6. PR 與 Squash 規範

- PR Title 必須符合與 commit 相同格式：
  `<type>(<scope>): <subject>`
- 採 `Atomic + Squash`：
  - 開發中可有多筆原子 commit。
  - 合併到主分支時，使用 PR Title 作為 squash commit 主旨。
- 細節放在 PR 描述，不把長文塞進 commit 主旨。

## 7. 例子

```text
feat(pages): 新增首頁服務區塊導覽連結
fix(components): 修正主按鈕白字在 hover 狀態失效
docs(docs): 補上服務架構決策與內容對照
refactor(layouts): 拆分前後台共用殼層樣式
```

Breaking change：

```text
refactor(config)!: 調整環境變數命名規則

BREAKING CHANGE: 舊的 NUXT_PUBLIC_API_URL 改為 NUXT_PUBLIC_BASE_API_URL
```
