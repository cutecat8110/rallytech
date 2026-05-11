# AGENTS.md

最後更新：2026-05-08

本檔是 RallyTech AI 協作短版憲章。細節以 [docs/README.md](./docs/README.md)、[docs/project/README.md](./docs/project/README.md)、[docs/design/README.md](./docs/design/README.md) 與 [docs/project/04-協作與交付規範.md](./docs/project/04-協作與交付規範.md) 為準。

## 核心原則

- 全程使用繁體中文。
- 先對齊目標、範圍、成功條件，再小步實作。
- 不擴張需求，不覆寫 manual-locked 文案，不回滾使用者變更。
- 若文件、程式碼與使用者最新要求衝突，先回報取捨，不自行放大修改範圍。

## 技術基線

- Nuxt 4、Vue 3、TypeScript、@nuxt/ui、Tailwind CSS 4。
- 執行期樣式真相以 `app/assets/css/main.css` 與 `app/app.config.ts` 為準。
- 專案治理、設計治理與 reference evidence 分別以 `docs/project/`、`docs/design/`、`docs/references/` 為準。

## Skill 與工具

- 每輪任務都重新判斷需要的 skill。
- 文件任務使用 `document-writer`。
- 前端、頁面、元件、版型、樣式、RWD 或互動任務必須使用 `nuxt-ui`，並依任務補 `nuxt`、`vue`、`frontend-skill`、`visual-qa-review` 或其他 specialist skill。
- Skills、MCP、plugin、Codex app 能力與 capability gate 的詳細規範，以 [docs/project/04-協作與交付規範.md](./docs/project/04-協作與交付規範.md) 為唯一詳細來源。

## UI/UX Review

處理頁面、元件、版型、樣式、RWD 或互動前，需以資深 UI/UX Designer 視角檢查：

- 視覺層級、IA、間距、對齊、字級行高、色彩對比。
- affordance、狀態、文案、可及性、系統一致性。
- 是否避免工程師排版、過度局部覆寫或與設計系統平行發展。

發現 UI/UX 風險時，不直接大改。先回報：

```text
UI/UX Review：
- 觀察
- 建議
- 層級：必改 / 建議 / 可討論
- 需要確認的取捨
```

## 驗證與回報

- 文件任務至少執行 `npm run format:check`。
- 前端或程式碼任務預設執行 `npm run lint`、`npm run guard:ui-buttons`、`npm run typecheck`；若涉及 clone / fidelity，再補對應 browser evidence 或 capture script。
- 回報必須包含摘要、驗證、使用的 skill、風險 / 假設。
