# AGENTS.md

本檔提供本專案的 AI coding agent 協作準則。進行任何修改前，先閱讀本檔與 `docs/` 相關文件。

## 專案概覽

- 技術棧：Nuxt 4、Vue 3、TypeScript、`@nuxt/ui`、Tailwind CSS 4
- 樣式核心：`app/assets/css/main.css`（design tokens、utility、語意樣式）
- 主要語言：繁體中文優先，英文並列補齊
- 專案定位：企業官網重構（服務說明、信任建立、聯絡轉換）

## 常用指令

- 安裝依賴：`pnpm install`
- 本機開發：`pnpm dev`
- Lint：`pnpm lint`
- 型別檢查：`pnpm typecheck`
- Production build：`pnpm build`
- Build preview：`pnpm preview`

## 驗證流程

- 一般開發預設執行：`pnpm lint` + `pnpm typecheck`
- 只有在需求明確要求、或發布前驗證時才執行：`pnpm build`
- 需做視覺驗證時，建議使用：
  `npx nuxt dev --host 127.0.0.1 --port 3000`

## 目錄導覽

- `app/pages/`：路由頁面
- `app/components/layout/`：前台版型相關元件
- `app/components/page/**`：頁面區塊元件
- `app/layouts/`：layout 入口（frontend/backend）
- `app/assets/css/main.css`：全域設計 token 與樣式工具
- `docs/project/`：專案基線、IA、服務架構決策
- `docs/design/`：設計規則、AI 切版規範、色彩治理

## 實作規範

- Nuxt UI First：
  優先使用 Nuxt UI 互動元件；可覆寫就不要手刻替代。
- 覆寫層級：
  全域（`app.config.ts`，若存在）→ 頁面/區塊（`<UTheme>`）→ 單點例外（`:ui`/`class`）。
- 設計 token 優先：
  優先使用既有語意 class 與 token，不在頁面直接硬寫色票與臨時規則。
- 主按鈕規則：
  `primary + solid` 維持白字，避免覆蓋成深色字。
- 註釋規則：
  Vue 檔案中的註釋以中文說明「目的與意圖」，避免只重述程式碼字面。
- 範圍控管：
  僅實作已確認範圍，不主動新增未確認區塊。
- 型別策略：
  先採推論與就近定義；跨模組共用或 API 契約再抽離共用型別。

## 優先參考文件

1. `docs/project/01-專案基線.md`
2. `docs/project/02-網站資訊架構.md`
3. `docs/project/03-網站資訊架構-設計簡版.md`
4. `docs/project/04-服務架構決策.md`
5. `docs/design/01-設計規則整理.md`
6. `docs/design/02-AI切版規則.md`
7. `docs/design/04-色彩定版與治理.md`

## 協作注意事項

- 目前工作樹可能包含使用者尚未提交的變更，禁止回滾與任意覆蓋無關檔案。
- 若規範文件與現況程式碼不一致，以「現有程式碼 + 最新 docs 決策」交叉判斷，並在 PR/回報中註明取捨。
