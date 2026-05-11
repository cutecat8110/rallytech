# 文件總覽

最後更新：2026-05-08

## 文件目的

- 建立 `docs/` 的單一入口，說明 `project / design / references` 三大分區的用途、owner 邊界與閱讀順序。
- 讓管理、設計、工程與 AI agent 快速找到正確主檔，不在多份文件間重複定義同一件事。
- 將文件真相來源、skills 使用原則、MCP / plugin task-activated policy 與 Codex toolkit 邊界串成一致閱讀鏈。

## 文件治理地圖

- [project/README.md](./project/README.md)
  管專案決策、IA、服務命名、協作流程、skills / MCP / capability gate、reference clone workflow、AI image phase gate 與新 thread kickoff。
- [design/README.md](./design/README.md)
  管設計系統、Nuxt UI implementation、styling ownership、Vision-to-Code grammar、button / radius governance。
- [references/README.md](./references/README.md)
  管 reference evidence、`source / en / zh-tw` 對照、素材來源、異常索引與 prompt research appendix。

## 適用角色

- 管理、業務、老闆：先看專案策略、頁面範圍、服務命名、轉換與交付邊界。
- 設計、前端、PM：先取得 project 決策，再依 design governance 與 references evidence 落地。
- AI agent：先讀本入口，再依任務進入 project / design / references 的 owner 文件。

## 新 Thread 閱讀順序

1. [../AGENTS.md](../AGENTS.md)
2. [project/README.md](./project/README.md)
3. [project/04-協作與交付規範.md](./project/04-協作與交付規範.md)
4. [design/README.md](./design/README.md)
5. [references/README.md](./references/README.md)

補充：

- 開新 thread 或重新對齊工具能力時，先看 [project/README.md](./project/README.md) 的 kickoff 入口。
- 若任務涉及 skills、MCP、plugins、Codex app capability、驗證或回報格式，以 [project/04-協作與交付規範.md](./project/04-協作與交付規範.md) 為唯一詳細來源。
- `references` 是對照工作台與 research appendix，不是 workflow owner。

## 單一真實來源

- 專案策略、IA、服務清單、頁面範圍：以 `docs/project/01 / 02 / 03` 為準。
- 協作流程、skills / MCP policy、capability gate、驗證與回報：以 `docs/project/04` 為準。
- Reference clone、downgrade、AI image phase gate：以 `docs/project/05` 為準。
- 整站文案節奏、manual-locked copy 邊界、section job：以 `docs/project/08` 為準。
- 設計系統、Nuxt UI implementation、styling ownership：以 `docs/design/` 為準。
- 參考站可見文字、雙語改寫稿、素材來源與 prompt research appendix：以 `docs/references/` 為準。
- 執行期樣式真實值：以 `app/assets/css/main.css` 與 `app/app.config.ts` 為準。
- Codex toolkit 搬機、non-system custom skills 與 repo-local environment template：以 `tools/codex-toolkit/README.md` 為準。

## 變更應回寫哪裡

- 產品策略、受眾、頁面範圍變更：先改 `docs/project/01 / 02`。
- 服務命名、服務數量、服務對照變更：先改 `docs/project/03`。
- skills、MCP、plugin、驗證、claim label、toolkit policy 變更：先改 `docs/project/04`，再同步 `tools/codex-toolkit/README.md`。
- clone artifact 或 AI image workflow 變更：先改 `docs/project/05`。
- 文案節奏、section job、manual-locked copy 邊界變更：先改 `docs/project/08`。
- 設計 token、Nuxt UI 覆寫、component grammar 變更：先改 `docs/design/01 / 02 / 03`。
- reference evidence、素材來源、prompt research 變更：改 `docs/references/` 對應文件。

## 維護邊界

- 一個事實只在一份主檔維護；其他文件只做引用、導覽或對照。
- `project/README` 是新 thread 的最快入口，但不取代 `project/04 / 05` 的詳細 owner 身分。
- `references` 不回寫成產品與 workflow 主決策來源。
- 全部內部連結使用相對路徑，避免本機絕對路徑失效。
- 若文件與現況程式碼衝突，以現況程式碼與最新 owner 文件交叉判斷後，再回寫文件。
