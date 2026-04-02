# 文件總覽

最後更新：2026-04-02

## 文件目的

- 建立 `docs/` 的單一入口，說明 `project / design / references` 三大分區的用途與閱讀順序。
- 讓管理、設計、工程與 AI agent 都能快速找到正確主檔，不在多份文件間來回猜測。

## 適用角色

- 管理、業務、老闆：先看專案策略、workflow baseline 與參考站對照方式。
- 設計、前端、PM：依序取得策略、design governance 與 reference workspace 基準。
- AI agent：以這份入口判斷要先讀哪一組主檔，再進入實作或文件維護。

## 建議閱讀順序

1. [project/README.md](./project/README.md)
2. [design/README.md](./design/README.md)
3. [references/README.md](./references/README.md)

補充：

- 開新 thread 或重新對齊工具能力時，先看 [project/README.md](./project/README.md) 的 `Thread Kickoff 入口`。
- `references` 仍是對照工作台與 research appendix，不是 workflow owner。

## 三大分區分工

- [project/README.md](./project/README.md)
  專案定位、IA、服務命名、skills/MCP baseline、reference clone workflow、AI image phase gate 與新 thread 快速總覽。
- [design/README.md](./design/README.md)
  design system foundations、Nuxt UI implementation rules、Vision-to-Code grammar。
- [references/README.md](./references/README.md)
  參考站 `source / en / zh-tw` 對照工作台、異常索引與 Nano prompt research appendix。

## 單一真實來源

- 專案策略、IA、服務清單與 workflow baseline：以 `docs/project/` 為準。
- 設計系統、Nuxt UI implementation 與 styling ownership：以 `docs/design/` 為準。
- 參考站可見文字、雙語改寫稿、異常紀錄與 AI prompt research appendix：以 `docs/references/` 為準。
- 執行期樣式真實值：以 `app/assets/css/main.css` 與 `app/app.config.ts` 為準。

## 維護邊界

- 一個事實只在一份主檔維護；其他文件只做引用、導覽或對照。
- `project/05` 是 reference clone 與 AI image workflow 的主檔；`references` 不再承擔流程 owner。
- `project/README` 是新 thread 的最快入口，但不取代 `project/04 / 05` 的詳細 owner 身分。
- `references` 是對照工作台與研究附錄，不直接取代 `project` 的產品與 workflow 決策。
- 全部內部連結使用相對路徑，避免本機絕對路徑失效。
- 若文件與現況程式碼衝突，以現況程式碼與最新主檔交叉判斷後再回寫文件。
