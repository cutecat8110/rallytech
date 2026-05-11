# GEMINI.md

最後更新：2026-05-08

本文件是給 Gemini 或其他 AI agent 的相容性導覽，不再維護另一套完整 SOP。所有協作、文件治理、skills / MCP、驗證與回報規範，請以 [AGENTS.md](./AGENTS.md) 與 `docs/` 主檔為準。

## 必讀入口

1. [AGENTS.md](./AGENTS.md)
2. [docs/README.md](./docs/README.md)
3. [docs/project/README.md](./docs/project/README.md)
4. [docs/project/04-協作與交付規範.md](./docs/project/04-協作與交付規範.md)
5. [docs/design/README.md](./docs/design/README.md)
6. [docs/references/README.md](./docs/references/README.md)

## 專案摘要

- 專案：雷力科技企業官網重構。
- 目標：清楚呈現服務能力、建立信任、提升聯絡轉換。
- 技術基線：Nuxt 4、Vue 3、TypeScript、@nuxt/ui、Tailwind CSS 4。
- 語言策略：繁體中文優先，英文並列維護；`source` 只作 reference evidence。
- Reference strategy：參考站內容作為結構與 evidence 對照，正式決策回到 `docs/project/` 與 `docs/design/`。

## 工作原則

- 全程使用繁體中文。
- 先對齊目標、範圍與成功條件，再小步實作。
- 不擴張需求，不覆寫 manual-locked copy，不回滾使用者變更。
- 文件任務使用 `document-writer`。
- 前端任務必須使用 `nuxt-ui`，並依需要補 `nuxt`、`vue`、`frontend-skill` 或 `visual-qa-review`。
- Skills、MCP、plugin、Codex app capability 與 degraded claim，以 `docs/project/04` 為唯一詳細來源。

## 常用指令

```bash
npm install
npm run dev
npm run format:check
npm run lint
npm run guard:ui-buttons
npm run typecheck
npm run verify
```

文件任務至少執行 `npm run format:check`。若修改 `.ts`、`.vue`、config 或 scripts，需追加 lint / typecheck 與相關 guard。

## 重要邊界

- `docs/project/` 管專案策略、IA、服務命名、協作流程、skills / MCP policy、clone workflow 與文案節奏。
- `docs/design/` 管設計系統、Nuxt UI implementation、styling ownership、Vision-to-Code grammar。
- `docs/references/` 管 reference evidence、素材來源、異常紀錄與 prompt research appendix。
- `tools/codex-toolkit/` 是可重建模板，不是 live profile；私人狀態不進 git。
