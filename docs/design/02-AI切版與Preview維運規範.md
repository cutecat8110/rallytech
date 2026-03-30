# AI切版與Preview維運規範

最後更新：2026-03-27

## 文件目的

- 定義 AI / 前端在 Nuxt 專案中的落地流程。
- 整合切版規則與 `/design-system` 展示頁維運規格。

## 1. Nuxt UI First 與覆寫層級

原則：

1. 能用 Nuxt UI 就不用手刻互動元件
2. 覆寫順序固定：
   - `app.config.ts`（全域）
   - `<UTheme :ui=\"...\">`（頁面 / 區塊）
   - 元件 `:ui` / `class`（單點例外）
3. 若必須自製 UI，需在元件以中文註釋說明原因與限制

## 2. 切版執行流程

1. 先確認需求範圍與頁面角色（先讀 `project/`）
2. 先選語意 token，再選具體色階與樣式
3. 頁面層優先用 token class，不直接寫 `var(--...)` 與散落 hex
4. 完成後執行 `pnpm lint` + `pnpm typecheck`

## 3. 強制規則與禁止事項

- `UButton` 使用 `primary + solid` 時文字必須維持白字
- 不在 `app.config.ts` 寫 route 條件樣式
- 不將頁面特例硬塞進全域設定
- 不使用高優先級全域 `a { color: inherit; }` 類 reset
- 避免 `!important`；若必要使用需寫明原因

## 4. `/design-system` Preview 維運規格

用途：

- 作為 tokens 與 Nuxt UI 實作的一致性展示頁
- 作為色彩定版與版面節奏的回歸檢查錨點

建議內容架構：

1. Hero（版本、快速導覽、架構摘要）
2. Overview（Foundations / Layout 導覽）
3. Foundations（Color、Typography、Icons、Radius、Shadows、Space）
4. Layout（Breakpoints、Grid、Header Height）

維運要求：

- 若調整 token 或展示結構，需同步更新 `design` 主檔與對應頁面實作
- 維持 `noindex, nofollow`（內部預覽用途）

## 5. 驗證清單

- 視覺語意是否符合 `01-設計系統規則總綱`
- 深色骨架與白色內容區塊對比是否清楚
- 響應式斷點下是否維持閱讀節奏
- 互動元件是否遵循 Nuxt UI First

## 6. 依賴文件

- 設計規則總綱：[`01-設計系統規則總綱.md`](./01-設計系統規則總綱.md)
