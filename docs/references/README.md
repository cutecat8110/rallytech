# references 對照導覽

最後更新：2026-04-02
來源網址：https://pentagoneng.com/（multi-page reference）

## 文件目的

- 提供 `source / en / zh-tw` 三層 references 的統一閱讀方式。
- 讓管理、業務、設計、工程與 AI agent 都能直接看懂參考站怎麼對照，並知道改稿時應該看哪一層。

## 適用角色

- 管理、業務、老闆：快速理解這頁在參考站出現了哪些區塊與文字。
- 設計、前端、PM：依同一組 block 對照文案、區塊與互動資訊。
- AI agent：維持 `source / en / zh-tw` 的區塊順序、命名與對照邏輯一致。

## 三層檔案（固定）

- `source/*`：參考站可見原文基準稿，保留原句、typo、矛盾與模板殘留。
- `en/*`：依同一區塊改寫成 Rally Technology 英文稿，替換公司名與聯絡資料。
- `zh-tw/*`：依同一區塊改寫成台灣 B2B 官網語感的繁中稿，並使用全中文結構標題。

## 擷取基準

- `source` 內容以 `MCP + desktop viewport + full-page scroll` 為基準整理。
- 任何滾動到位才顯示的區塊，也算進當頁可見內容。
- 本輪文件重整不重新做全站 MCP 擷取；若需重新校正內容，以同一基準進行。

## 先怎麼讀

1. 先看 [IA-參考站與目標站對照.md](./IA-參考站與目標站對照.md) 找頁面編號。
2. 依同編號同時開 `source`、`en`、`zh-tw` 三份檔。
3. 先看 `Block Map` / `區塊總覽`，確認這一頁有哪些區塊。
4. 依畫面順序對照同一個區塊，先讀 `source` 原文，再改 `en` 與 `zh-tw`。

若任務是首頁高擬真重構，再補看：

5. [首頁視覺真相與殘留判讀.md](./首頁視覺真相與殘留判讀.md)
6. 執行 `npm run capture:reference:home` 與 `npm run capture:local:home`，以完整載入截圖做反覆對照。

## AI 圖像研究附錄

AI 圖像流程的正式 owner 是 [`../project/05-Reference-Clone工作流與降級規範.md`](../project/05-Reference-Clone工作流與降級規範.md)。

本資料夾只保留研究附錄與 prompt appendix：

- [首頁媒體素材來源.md](./首頁媒體素材來源.md)
  用於記錄 source / licensed visuals 的來源、授權與 local filename。
- [Nano-Banana-提示詞與生成流程.md](./Nano-Banana-提示詞與生成流程.md)
  用於 AI 圖像提示詞優化、研究來源分級、候選圖判讀與 promotion 前檢查。
- [Nano-Banana-提示詞模式附錄.md](./Nano-Banana-提示詞模式附錄.md)
  用於挑選可重用 recipe、建立 `recipe_ids`、對應失敗模式與下一輪 prompt 迭代。

規則：

- `references` 可以保存 prompt research、對照筆記與候選圖判讀。
- `references` 不保存 execution state，例如 active brief、active prompt、manifest 或 candidate history。
- 真正的 canonical path 在 [`../../data/nano-banana/README.md`](../../data/nano-banana/README.md)：
  - `../../data/nano-banana/briefs/`
  - `../../data/nano-banana/prompts/`
  - `../../data/nano-banana/manifests/`
- 長期圖像 guardrails 在 [`../../.agents/ai-image-context.md`](../../.agents/ai-image-context.md)。
- 真正的 phase gate、claim labels、acceptance metadata 仍以 `project/05` 為準。
- 不把 Nano / imagegen research appendix 當成 clone workflow 主檔。

## 區塊結構（固定）

- `source` 與 `en`：
  - `## Block Map`
  - `## Block xx ... [role]`
- `zh-tw`：
  - `## 區塊總覽`
  - `## 區塊 xx ... [角色]`

每個區塊下方直接列出可見文字 bullets。只有在需要提醒異常、模板殘留、重複 CTA 或人工判讀時，才補 `### Notes` / `### 備註`。

## 區塊角色標記

- `source / en`
  - `[core]`：頁面主內容或主要訊息區塊
  - `[shared-layout]`：共用版型區塊
  - `[residual]`：可見但待判讀的模板殘留或錯置內容
- `zh-tw`
  - `[主內容]`
  - `[共用版型]`
  - `[模板殘留]`

## 區塊保留規則

- `00-首頁`：完整保留 top contact、main nav、hero、about、services、process、OTE、footer 等共用可見區塊。
- 其他頁：不重複首頁共用 header / footer；只保留該頁自己的 hero、主內容、sidebar、form、module、service cards 等可見內容。
- 所有可見模板殘留都保留在三層，並標記為 `residual` / `模板殘留`，供管理與設計判斷刪留。

## 維護邊界

- `source` 不改寫、不摘要、不美化，只記錄參考站目前可見文字。
- `en` 與 `zh-tw` 必須維持和 `source` 相同的 block 名稱與順序。
- `zh-tw` 的 H1 採「中文主標 + 英文副標」。
- 跨頁異常統一查看 [source-anomalies.md](./source-anomalies.md)；頁面可見殘留內容則直接留在各頁 block 內。
