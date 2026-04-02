# Reference Clone工作流與降級規範

最後更新：2026-04-02

## 文件目的

- 定義 reference clone / screenshot-to-code / URL clone 任務的標準輸入、artifact、gate 與 downgrade 規則。
- 作為本專案 clone artifact 鏈、claim labels 與 AI image workflow 的唯一詳細來源。

## 適用角色

- PM：確認 clone 任務的範圍、相似度、品牌化邊界與 phase gate。
- 設計：確認畫面真相、元件語法、品牌變體與 fidelity boundary。
- 前端：依 artifact 將 reference 轉成 Nuxt UI 與 token-based implementation contract。
- AI agent：在 URL clone、image clone、multi-page clone 任務中，禁止直接從參考輸入跳到最終程式碼。

## 1. 標準輸入類型

### URL clone

最少輸入：

- `reference URL`
- `page scope`
- `similarity target`
- `allowed modernization`

### Image clone

最少輸入：

- `screenshot` 或 `hero crop`
- `target page or section`
- `clone goal`

限制：

- 先輸出 `style inventory`、`token substitution`、`component skeleton`
- 沒有 URL / DOM truth 時，不直接產生大段整頁 code

### Multi-page clone

最少輸入：

- `reference URL set`
- `target IA`
- `shared layout scope`
- `priority pages`

## 2. Session preflight 與 claim labels

開始前建議執行：

```bash
npm run workflow:clone:preflight
```

說明：

- preflight 驗證的是本機 baseline，不等於當前 session 一定可用。
- 真正開始前，仍需在當前 thread 檢查工具清單。
- 任一核心 fidelity 能力缺失時，必須在回報中標記 downgrade。

標準 claim labels：

- `same.new-class-ready`
- `degraded-fidelity`
- `degraded-review-trace`
- `degraded-variant`

## 3. 五段 Artifact 鏈

### 1. Clone Brief

輸入：

- `reference input`
- `page scope`
- `similarity target`
- `allowed modernization`
- `brand constraints`
- `defer list`

輸出：

- `Reference truth`
- `Similarity target`
- `Allowed modernization`
- `Token substitution`
- `Defer list`

Gate：沒有 `Clone Brief` 不進入 capture。

### 2. Capture Pack

輸出：

- `desktop / tablet / mobile` screenshots
- block-level screenshots
- raw visible text
- interaction states
- media inventory
- asset anomalies
- evidence paths

Gate：沒有 evidence path 或 interaction note，不進入 architecture。

### 3. Architecture Pack

輸出：

- `IA map`
- `Block map`
- `Component inventory`
- `Layout grammar`
- `Style inventory`
- `Content inventory`
- `Interaction inventory`

Gate：沒有 inventory，不進入 implementation。

### 4. Implementation Contract

輸出：

- `route / page assembly`
- `section ownership`
- `primitive / component mapping`
- `Nuxt UI mapping`
- `token substitution map`
- `asset plan`
- `style ownership map`
- `QA checklist`

Gate：沒有 implementation contract，不進入程式實作。

### 5. Variation Brief

輸出：

- 品牌差異方向
- copy rewrite intent
- image prompt baseline
- CRO / SEO / analytics improvements
- 受保護的 fidelity boundary

規則：

- 只能在 fidelity pass 驗收後進入
- 不可先破壞 block order、reference hierarchy、主要互動節奏

## 4. AI image workflow

### Phase 1：來源圖與 fidelity

- 優先使用 source / licensed visuals
- 先對齊 `image role`、構圖與 layout fidelity
- 不把 AI 生圖混進第一輪 clone 驗收
- sourcing / licensing 與後續 AI 變體需分開記錄

### Phase 2：品牌變體

- 使用 `imagegen`、Nano 或其他 AI 圖像流程做品牌差異化
- 每張 AI 圖都必須補齊：
  - `image role`
  - `prompt brief`
  - `source-of-truth note`
  - `acceptance note`

規則：

- Phase 2 只能在 fidelity pass 後進入。
- AI 生圖不取代 reference truth capture。
- 長期圖像 guardrails 放在 `.agents/ai-image-context.md`。
- active brief / prompt / manifest 與 candidate history 放在 `data/nano-banana/`，並採 slot-aware scaffold。
- AI 圖像 prompt research、recipe 與迭代筆記可放在 `docs/references/`，但 workflow owner 仍是本檔。

### AI image metadata 解釋

- `image role`：這張圖在頁面中的功能，例如 hero、connector、mission square 或 OTE background
- `prompt brief`：本輪生成或編修所依據的簡短提示詞摘要
- `source-of-truth note`：這張圖要忠實承接的 reference 構圖、情緒、角色或裁切依據
- `acceptance note`：本輪何時算可接受，例如「構圖與 reference 同類型、張力到位、無品牌衝突」

## 5. URL / Image / Multi-page 的專用要求

### URL clone

- 以瀏覽器 truth capture 為主，不只靠 raw HTML
- 需納入 scroll reveal、sticky、accordion、tab、form、hover 等互動後狀態
- 遇到 anti-bot、lazy-load 或登入牆時，必須留下 `evidence gap`

### Image clone

- 先拆 `layout shell`、`section hierarchy`、`style inventory`
- 若無法確認互動與 DOM 結構，必須將 claim 限縮為 screenshot-level clone
- image clone 的第一輪輸出是 component skeleton，不是最終整頁實作

### Multi-page clone

- 先做 IA map，再分 shared layout 與 page-specific blocks
- header、footer、shared CTA、shared proof strip 必須單獨建 inventory
- 先鎖首頁與代表性內頁，再擴至整站

## 6. Failure modes 與 downgrade 規則

- 缺少 `chrome-devtools`、`playwright`、`context7` 或 `fetch` 任一核心能力：標記 `degraded-fidelity`
- 任務需要 PR review / diff trace，但當前 session 缺少 `github` integration：標記 `degraded-review-trace`
- 缺少 image generation：不阻塞 fidelity pass；若任務已進入品牌變體階段則標記 `degraded-variant`
- 遇到 anti-bot / lazy-load / third-party embed 導致看不到完整內容：保留 `evidence gap`
- 若 clone 結構尚未穩定就先啟用 CRO / SEO / copy-polish：視為流程違規

## 7. 驗收門檻

- 本地頁面需對應 reference 的 block order、主要互動與主要 media rhythm
- `Architecture Pack` 與 `Implementation Contract` 必須可交接，不讓後續實作者補猜結構
- `Nuxt UI mapping`、`token substitution`、`style ownership map`、`QA checklist` 必須明確
- 品牌化變體必須保留 reference hierarchy，只能改品牌語氣、圖像方向與現代化處理

## 8. 依賴文件

- 本機 baseline 與 workflow matrix：[`./04-協作與交付規範.md`](./04-協作與交付規範.md)
- 設計系統總綱：[`../design/01-設計系統規則總綱.md`](../design/01-設計系統規則總綱.md)
- Nuxt UI 實作層級：[`../design/02-AI切版與Preview維運規範.md`](../design/02-AI切版與Preview維運規範.md)
- Vision-to-Code 規範：[`../design/03-Vision-to-Code與Component-Driven規範.md`](../design/03-Vision-to-Code與Component-Driven規範.md)
- 長期 AI 圖像 context：[`../../.agents/ai-image-context.md`](../../.agents/ai-image-context.md)
- AI image executable artifacts：[`../../data/nano-banana/README.md`](../../data/nano-banana/README.md)
- references 導覽：[`../references/README.md`](../references/README.md)
