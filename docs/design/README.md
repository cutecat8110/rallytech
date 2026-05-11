# 設計文件入口

最後更新：2026-05-08

## 文件目的

- 提供設計系統與前端落地的閱讀入口，讓設計、前端與 AI agent 使用同一套規則。
- 把 foundations、Nuxt UI implementation、Vision-to-Code artifact grammar、button / radius governance 分成清楚 owner。
- 明確區分 design governance 與 skills / MCP / 驗證 policy；後者回到 `docs/project/04`。

## 適用角色

- 設計：確認品牌語意、色彩、字體、radius、layout foundations 與公開站元件語氣。
- 前端：確認 token 使用方式、Nuxt UI 覆寫順序、styling ownership 與 artifact grammar。
- AI agent：確認 `docs/design/` 的 owner 邊界，不重複解讀同一條規則。

## 先讀哪幾份

1. [01-設計系統規則總綱.md](./01-設計系統規則總綱.md)
2. [02-AI切版與Preview維運規範.md](./02-AI切版與Preview維運規範.md)
3. [03-Vision-to-Code與Component-Driven規範.md](./03-Vision-to-Code與Component-Driven規範.md)

按鈕與 radius 治理補充：

4. [04-公開站按鈕治理矩陣.md](./04-公開站按鈕治理矩陣.md)
5. [05-公開站Radius治理矩陣.md](./05-公開站Radius治理矩陣.md)

若任務涉及 skills、MCP、plugins、Codex app capability、驗證順序或回報格式，回到 [../project/04-協作與交付規範.md](../project/04-協作與交付規範.md)。

## 各檔分工

- `01`：design system foundations、semantic-first、四層 ownership、promotion rule。
- `02`：Nuxt UI implementation order、`app/app.config.ts` / `<UTheme>` / `:ui` / local style 的用法與 preview 驗證。
- `03`：Vision-to-Code grammar、Architecture Pack / Implementation Contract 欄位與 component-driven 拆解順序。
- `04`：公開站按鈕 taxonomy、size ladder、section mapping 與 internal-only 邊界。
- `05`：公開站 radius 階層、surface mapping、brand narrative geometry 與 QA 規則。
- `tokens/*.json`：設計數值鏡像與對照資料，不作執行期真實值。

## Runtime Truth

- `tokens/*.json` 只保留設計數值鏡像與內部對照用途。
- 執行期真實值以 `app/assets/css/main.css` 與 `app/app.config.ts` 為準。
- 若 token 與前台實作不一致，應先修正 owner 主檔與程式碼，再更新鏡像檔。

## 維護邊界

- 基礎原則、semantic vars、ownership matrix 改 `01`。
- Nuxt UI 覆寫順序、`app.config.ts` / `<UTheme>` / `:ui` / local style 的實作規範改 `02`。
- Vision-to-Code、artifact grammar 與 component inventory 改 `03`。
- Button 或 radius 治理變更改 `04 / 05`。
- 若設計策略變更影響產品結構、IA、服務命名、workflow 或驗證，需回到 `docs/project/` 同步更新。
