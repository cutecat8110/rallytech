# AGENTS.md

本檔只負責本專案的 AI 協作 SOP。設計系統、Nuxt UI implementation、CSS ownership、reference clone artifact 與 AI image phase 的唯一詳細來源，請以 `docs/design/` 與 `docs/project/` 為準。

## 1. 文件目的與適用範圍

- 目的：統一協作流程、skill 選用、驗證順序與回報格式。
- 適用範圍：本 repo 內所有 AI 協作開發、文件調整與提交流程。
- 原則：先對齊目標與範圍，再以小步迭代實作，不一次擴張到未確認範圍。

## 2. 專案基線

- 技術棧：Nuxt 4、Vue 3、TypeScript、`@nuxt/ui`、Tailwind CSS 4
- 設計系統落點：`app/assets/css/main.css` + `app/app.config.ts`
- 專案定位：企業官網重構（服務說明、信任建立、聯絡轉換）
- 主要受眾：具工程、自動化、儀控、廠務或專案管理背景的專業客戶
- 主要語言：繁體中文優先，英文並列補齊

## 3. 規範來源與優先序

規範判斷順序如下：

1. 現有程式碼與執行結果
2. `docs/project/` 最新決策文件
3. `docs/design/` 設計系統與實作規範
4. 本檔（AGENTS）作為協作 SOP

補充：

- 設計系統 foundations、semantic-first、四層 ownership：以 `docs/design/01` 為準。
- Nuxt UI implementation order 與 local-vs-global 規則：以 `docs/design/02` 為準。
- Vision-to-Code artifact grammar：以 `docs/design/03` 為準。
- 本機 skills / MCP baseline 與 workflow matrix：以 `docs/project/04` 為準。
- Reference clone artifact、claim level、downgrade 與 AI image workflow：以 `docs/project/05` 為準。
- 若文件與現況程式碼衝突，以「現有程式碼 + 最新 docs 決策」交叉判斷，並在回報中明記取捨。

## 4. 優先參考文件

1. `docs/README.md`
2. `docs/project/README.md`
3. `docs/project/01-專案策略與基線總綱.md`
4. `docs/project/04-協作與交付規範.md`
5. `docs/project/05-Reference-Clone工作流與降級規範.md`
6. `docs/design/01-設計系統規則總綱.md`
7. `docs/design/02-AI切版與Preview維運規範.md`
8. `docs/design/03-Vision-to-Code與Component-Driven規範.md`

若任務涉及參考站對照、雙語文案或 AI 圖像研究，再補讀 `docs/references/README.md`。

## 5. 工作流程（SOP）

1. 啟動前
   - 先讀本檔與優先參考文件。
   - 先確認需求屬於已確認範圍，避免超範圍實作。
2. 規格對齊
   - 先確認目標、成功條件、範圍邊界與驗證方式。
   - 若任務屬於 reference clone / 高擬真重建，先依 `docs/project/05` 鎖定 artifact gate 與 claim level。
3. Skill 判斷
   - 每一輪對話都重新判斷 skill。
   - 前端 / 版面 / 產品需求任務，優先使用 `$uiux-pm-collaboration`。
   - 前端內容調整（`app/` 內頁面、元件、版型、樣式）必須包含 `$nuxt-ui`。
   - 文件任務優先使用 `$document-writer`；若內容涉及治理邊界，搭配 `$uiux-pm-collaboration`。
   - 參考站 clone / 高擬真重建任務，若環境可用，優先組合 `$reference-clone-architect + $uiux-pm-collaboration + $frontend-skill + $nuxt-ui`。
4. 實作
   - 依 `docs/design/01 / 02 / 03` 與 `docs/project/04 / 05` 的 owner 邊界實作。
   - 僅修改已確認範圍，不主動新增未確認區塊。
5. 驗證
   - 預設執行 `npm run lint` + `npm run typecheck`。
   - 若本輪涉及 `UButton` 內容結構，另加跑 `npm run guard:ui-buttons`。
   - 若本輪屬於 clone workflow，依 `docs/project/04 / 05` 補齊 preflight、capture 與 downgrade 驗證。
6. 回報
   - 說明變更內容、驗證結果、skill 使用情況、風險、假設與必要取捨。

## 6. Skill 使用規範（必須）

1. 每一輪對話都必須重新判斷 skill，不得沿用上一輪判斷。
2. 使用者明確點名 skill 時，必須優先使用該 skill。
3. 使用者未點名但任務與特定 skill 明確匹配時，必須主動使用對應 skill。
4. skill 不跨輪自動延續；除非使用者明確要求固定沿用。
5. 若 skill 不可用、內容缺失或與現況衝突，必須先說明原因，再採替代方案。
6. 回報時必須標記本輪使用的 skill 與用途；若未使用需給出可追蹤理由。
7. 前端內容調整當輪若無法使用 `$nuxt-ui`，必須停止實作並回報阻礙、影響與待決策項，不得直接 fallback。
8. 若 `$uiux-pm-collaboration` 不可用，仍需執行等價的 Objective / Constraints / Options / Recommendation / Decision 對齊流程，並在回報中標註 fallback。

## 7. 驗證規範

- 一般開發預設執行：`npm run lint` + `npm run typecheck`
- 若本輪涉及 `UButton` 內容結構，需額外執行：`npm run guard:ui-buttons`
- 若本輪屬於 clone / screenshot-to-code / URL clone，依 `docs/project/04 / 05` 決定是否執行：
  - `npm run workflow:clone:preflight`
  - `npm run capture:local:home` 或其他 capture 驗證
- 文件任務至少執行：`npm run format:check`
- 只有在需求明確要求、或發布前驗證時才執行：`npm run build`

## 8. 回報格式（必須）

回報至少包含：

- 變更摘要
- 驗證結果
- Skill 使用情況
- 風險、假設與後續建議（如有）

前端與 clone 任務另需補充：

- `Objective`
- `Constraints`
- `Options`
- `Recommendation`
- `Decision`
- 設計合規清單：
  - IA 一致性
  - Nuxt UI First
  - token / 色彩規範
  - 主按鈕白字規範
  - RWD 響應式檢查
  - 文案語氣一致性

## 9. Commit / PR 最低門檻

唯一詳細來源：`docs/project/04-協作與交付規範.md`

最低執行門檻：

1. Commit 與 PR Title 使用：`<type>(<scope>): <subject>`
2. `type` 使用英文，`subject` 使用中文。
3. Breaking change 使用 `type(scope)!: subject`，且 body / footer 含 `BREAKING CHANGE: ...`
4. 提交前檢查順序固定為：
   - `npm run format:check`
   - `npm run lint`
   - `npm run guard:ui-buttons`
   - `npm run typecheck`
5. 任一檢查失敗即中止提交，不允許使用 `--no-verify`。

## 10. 協作注意事項

1. 工作樹可能包含使用者尚未提交的變更，禁止回滾與任意覆蓋無關檔案。
2. 未經確認不得擴張需求範圍；若需新增區塊，先取得明確確認。
3. 若規範與現況衝突，需在回報中清楚記錄採用依據與取捨理由。
4. `AGENTS.md` 是協作 SOP，不是設計系統、Nuxt UI 細則、clone artifact 或 AI image phase 主檔；遇到 owner 邊界問題時，請回到 `docs/design/` 與 `docs/project/`。
