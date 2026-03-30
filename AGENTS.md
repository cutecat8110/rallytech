# AGENTS.md

本檔提供本專案的 AI coding agent 協作 SOP。進行任何修改前，先閱讀本檔與 `docs/` 相關文件。

## 1. 文件目的與適用範圍

- 目的：將專案協作規範、實作準則、驗證流程與提交規範整合為單一可執行 SOP。
- 適用範圍：本 repo 內所有 AI 協作開發、文件調整與提交流程。
- 原則：先對齊目標與範圍，再以小步迭代實作，不一次擴張到未確認範圍。

## 2. 專案定位與語言策略

- 技術棧：Nuxt 4、Vue 3、TypeScript、`@nuxt/ui`、Tailwind CSS 4
- 樣式核心：`app/assets/css/main.css`（design tokens、utility、語意樣式）
- 專案定位：企業官網重構（服務說明、信任建立、聯絡轉換）
- 主要受眾：具工程、自動化、儀控、廠務或專案管理背景的專業客戶
- 主要語言：繁體中文優先，英文並列補齊（非英文單語先行）

## 3. 規範來源與優先序

規範判斷順序如下：

1. 現有程式碼與執行結果（含 `app/assets/css/main.css` 的 token 實作）
2. `docs/project/` 最新決策文件
3. `docs/design/` 設計規則與色彩治理文件
4. 本檔（AGENTS）作為執行 SOP 與協作約束

若規範文件與現況程式碼不一致，以「現有程式碼 + 最新 docs 決策」交叉判斷，並在 PR/回報中註明取捨。

## 4. 優先參考文件

1. `docs/project/01-專案基線.md`
2. `docs/project/02-網站資訊架構.md`
3. `docs/project/03-網站資訊架構-設計簡版.md`
4. `docs/project/04-服務架構決策.md`
5. `docs/design/01-設計規則整理.md`
6. `docs/design/02-AI切版規則.md`
7. `docs/design/04-色彩定版與治理.md`
8. `docs/project/06-Commit-規則與格式.md`

## 5. 目錄導覽

- `app/pages/`：路由頁面
- `app/components/layout/`：前台版型相關元件
- `app/components/page/**`：頁面區塊元件
- `app/layouts/`：layout 入口（frontend/backend）
- `app/assets/css/main.css`：全域設計 token 與樣式工具
- `docs/project/`：專案基線、IA、服務架構與提交規範
- `docs/design/`：設計規則、AI 切版規範、色彩治理

## 6. 常用指令

- 安裝依賴：`pnpm install`
- 本機開發：`pnpm dev`
- Lint：`pnpm lint`
- 型別檢查：`pnpm typecheck`
- Production build：`pnpm build`
- Build preview：`pnpm preview`
- 視覺驗證開發站：`pnpm exec nuxt dev --host 127.0.0.1 --port 3000`

## 7. 工作流程（SOP）

1. 啟動前
   - 先讀本檔與「優先參考文件」。
   - 先確認本次需求屬於已確認範圍，避免超範圍實作。
2. 規格對齊
   - 先確認目標、成功條件、範圍邊界與驗證方式。
   - 若需求未明確，先補齊必要條件再開始改動。
3. Skill 判斷
   - 每一輪對話都重新判斷 skill（見第 8 節）。
   - 前端/版面需求優先使用 `$uiux-pm-collaboration`；若不可用，改走第 9.4 節等價 UIUX 審視 Gate。
   - 在回報中標記本輪使用的 skill 與用途。
4. 實作
   - 依 Nuxt UI First 與分層覆寫原則實作（見第 9 節）。
   - 僅修改已確認範圍，不主動新增未確認區塊。
5. 驗證
   - 預設執行 `pnpm lint` + `pnpm typecheck`（見第 10 節）。
6. 回報
   - 說明變更內容、驗證結果、Skill 使用情況、UIUX 審視結果與必要取捨。

## 8. Skill 使用規範（嚴格必須）

1. 每一輪對話都必須重新判斷是否使用 skill，不得沿用上一輪判斷。
2. 使用者明確點名 skill（例如 `$nuxt-ui`）時，必須優先使用該 skill。
3. 使用者未點名但任務與特定 skill 明確匹配時，必須主動使用對應 skill。
4. skill 不跨輪自動延續；除非使用者明確要求固定沿用。
5. 若 skill 不可用、內容缺失或與現況衝突，必須先說明原因，再採替代方案。
6. 回報時必須標記本輪使用的 skill 與用途；若未使用需給出可追蹤理由。
7. 同時匹配多個 skill 時，選擇最小必要集合，並說明採用順序與分工。
8. 前端/版面/產品需求任務，必須優先使用 `$uiux-pm-collaboration`（若環境可用）。
9. 若 `$uiux-pm-collaboration` 不可用，仍必須執行第 9.4 節 UIUX 審視 Gate，並在回報標註 fallback。

情境處置（必須覆蓋）：

- 點名 skill：直接使用指定 skill，並在回報中標記。
- 未點名但明確匹配：主動使用 skill，並說明匹配依據。
- skill 不可用：先說明阻礙，再採替代流程並揭露影響。
- 前端任務 + skill 可用：使用 `$uiux-pm-collaboration`，並附 UIUX 審視結論。
- 前端任務 + skill 不可用：執行第 9.4 節等價 checklist，並標示 fallback。

## 9. 前端實作規範（Nuxt UI + Token 優先）

### 9.1 Nuxt UI First

1. 優先使用 Nuxt UI 互動元件；可覆寫就不要手刻替代。
2. 覆寫層級固定為：全域（`app.config.ts`）→ 頁面/區塊（`<UTheme>`）→ 單點例外（`:ui`/`class`）。
3. 只有在 Nuxt UI 無對應能力時才可自製 UI，且需在元件以中文註釋說明原因與限制。
4. 不得為了短期方便，改用原生 `button/input/select/dialog` 重做 Nuxt UI 可覆蓋能力。

### 9.2 色彩與樣式

1. 先用語意 token，再選色階；禁止在頁面直接寫散落 hex。
2. 頁面層優先使用 token class；不在 template 直接寫 `var(--...)`。
3. `Primary` 主要用於核心互動與主要行動按鈕。
4. 主要行動按鈕（白字）預設：`bg-primary-700 hover:bg-primary-600 active:bg-primary-800`。
5. `UButton` 使用 `color="primary" + variant="solid"` 時，文字需維持白字。
6. `Secondary` 用於深色容器與版面重心；頁面骨架優先 `700-950`（主背景優先 `900/950`）。
7. `Secondary` 的 `50-400` 僅低頻輔助，不作常規頁面底色。
8. `Info`、`Accent` 低頻使用；狀態色僅表達狀態，不兼任品牌主色。

### 9.3 結構、註釋與型別

1. 註釋以中文說明「目的與意圖」，避免只重述程式碼字面。
2. 頁面層以組裝區塊為主，區塊內容優先就地放在元件內。
3. `app/content` 預設不使用於少量頁面文案；僅在高複用且有必要時才評估抽離。
4. 型別策略採推論優先與就近定義；跨模組共用或 API 契約才抽離共用型別。
5. 避免 `!important`（含 Tailwind `!` 前綴）；若必要使用，需加中文註釋說明原因。
6. 禁止使用高優先級全域連結字色 reset（例如 `a { color: inherit; }`）覆蓋 Nuxt UI 行為。
7. 僅實作已確認範圍，不主動新增未確認區塊。

### 9.4 UIUX 審視 Gate（前端任務必做）

前端任務在實作前必須輸出：

- `Objective`
- `Constraints`
- `Options`
- `Recommendation`
- `Decision`

實作回報必須附設計合規清單：

- IA 一致性
- Nuxt UI First
- token/色彩規範
- 主按鈕白字規範
- RWD 響應式檢查
- 文案語氣一致性

若 `$uiux-pm-collaboration` 不可用，仍需完成同等審視項目，並標註 fallback。

## 10. 驗證規範

- 一般開發預設執行：`pnpm lint` + `pnpm typecheck`
- 只有在需求明確要求、或發布前驗證時才執行：`pnpm build`
- 視覺驗證時，建議啟動：
  `pnpm exec nuxt dev --host 127.0.0.1 --port 3000`
- 若需比對參考站與本機實際渲染，優先以瀏覽器實查，不只靠程式碼推測

## 11. Commit / PR 規範（引用為主）

- 唯一詳細來源：`docs/project/06-Commit-規則與格式.md`
- 本節只保留最低執行門檻；白名單、範例與細節以 `docs/project/06-Commit-規則與格式.md` 為準。

### 11.1 最低執行門檻（必須）

1. Commit 與 PR Title 必須使用：
   `<type>(<scope>): <subject>`
2. `type` 使用英文、`subject` 使用中文。
3. Breaking change 必須使用 `type(scope)!: subject`，且 body/footer 含 `BREAKING CHANGE: <說明內容>`。
4. 提交前檢查順序固定為：
   - `pnpm exec prettier --check .`
   - `pnpm lint`
   - `pnpm typecheck`
5. 任一檢查失敗即中止提交，不允許使用 `--no-verify` 跳過檢查。
6. 合併策略採 `Atomic + Squash`，合併主分支時以 PR Title 作為 squash commit 主旨。

## 12. 協作注意事項

1. 目前工作樹可能包含使用者尚未提交的變更，禁止回滾與任意覆蓋無關檔案。
2. 未經確認不得擴張需求範圍；若需新增區塊，先取得明確確認。
3. 若規範與現況衝突，需在回報中清楚記錄採用依據與取捨理由。
4. 回報內容至少包含：變更摘要、驗證結果、Skill 使用情況、風險與後續建議（如有）。
5. UIUX 流程的單一真實來源為本檔（AGENTS）；不依賴 repo 內 `docs/skills/**` 檔案是否存在。
