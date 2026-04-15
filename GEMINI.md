# GEMINI.md

本文件為參與雷力科技官網重建專案的 AI Agent 提供核心背景、技術規範與協作指令。

## 1. 專案概觀

- **專案目的**：重建雷力科技企業官網，清楚呈現服務能力、建立信任並提升聯絡轉換率。
- **技術基線**：Nuxt 4, Vue 3, TypeScript, Nuxt UI (v3/v4), Tailwind CSS 4。
- **專案特性**：
  - **B2B 定位**：受眾為工程、自動化、儀控、廠務等專業領域客戶。
  - **Reference Clone 工作流**：以參考站 (`pentagoneng.com`) 為結構基準，同時套用本專案設計系統 token。
  - **三層語系策略**：`zh-tw` (首要)、`en` 以及 `source` (參考站原文，僅供 QA 對照)。
  - **AI 資產維運**：使用 "Nano-Banana" 流程進行 AI 圖像生成與素材管理。

## 2. 技術架構

- `app/`：Nuxt 應用程式主目錄。
  - `components/`：UI 元件，遵循 Nuxt UI 規範。
  - `pages/`：網站頁面與路由。
  - `layouts/`：共用版型 (`frontend.vue`, `backend.vue`)。
  - `assets/css/`：以 Tailwind CSS 4 為基礎的全域樣式。
  - `composables/` & `utils/`：圖像註冊、i18n 邏輯與服務資料處理。
- `docs/`：專案治理與設計規範的唯一真理來源 (實作前必讀)。
- `i18n/`：`i18n/locales/` 下的語系翻譯檔。
- `data/`：AI 圖像生成之 manifest、catalog 與提示詞。
- `scripts/`：i18n 稽核、圖像推廣與頁面擷取等自動化腳本。

## 3. 開發流程與規範

### 基礎指令
- **安裝**：`npm install`
- **開發環境**：`npm run dev`
- **建置與預覽**：`npm run build` && `npm run preview`
- **提交流程前驗證 (PR 前必做)**：`npm run verify`
  - 包含 `format:check`, `lint`, `guard:ui-buttons`, `typecheck`。

### AI 協作 SOP (`AGENTS.md`)
AI Agent 必須嚴格遵守 `AGENTS.md` 定義的流程：
1. **研究優先**：實作前必先閱讀 `docs/` 下的對應文件。
2. **Skill 判定**：每一輪對話需重新評估所需的專門 Skill。
3. **強制驗證**：修改後必須執行 `npm run lint` 與 `npm run typecheck`。
4. **回報格式**：必須包含 Objective, Constraints, Options, Recommendation, Decision 與設計合規清單。

### 設計與實作細則
- **Nuxt UI First**：優先選用 `@nuxt/ui` 元件，避免自行實作。
- **CSS Ownership**：遵循 `docs/design/01` 定義的四層 ownership 規則。
- **按鈕規範**：主按鈕 (Primary Button) 必須使用白字 (由 `npm run guard:ui-buttons` 驗證)。
- **RWD 響應式**：所有實作必須同時驗證 Desktop 與 Mobile 表現。

## 4. 重要參考文件

- **協作 SOP**：`AGENTS.md`
- **專案策略**：`docs/project/01-專案策略與基線總綱.md`
- **設計系統**：`docs/design/01-設計系統規則總綱.md`
- **交付規範**：`docs/project/04-協作與交付規範.md`
- **Clone 工作流**：`docs/project/05-Reference-Clone工作流與降級規範.md`

## 5. 提交與貢獻規範

- **Commit Message**：採用 `<type>(<scope>): <subject>`。
  - 範例：`feat(ui): 實作首頁 Hero 區塊`。
  - `type` 使用英文，`subject` 使用繁體中文。
- **禁止繞過驗證**：禁止使用 `--no-verify`，所有檢查失敗皆不可提交。
- **範圍控制**：僅修改任務請求範圍內的檔案，避免無關的重構。
