# 文件總覽

最後更新：2026-03-31

## 文件目的

- 建立 `docs/` 的單一入口，說明 `project / design / references` 三大分區的用途與閱讀順序。
- 讓管理、設計、工程與 AI agent 都能快速找到正確主檔，不在多份文件間來回猜測。

## 適用角色

- 管理、業務、老闆：先看專案策略與參考站對照方式。
- 設計、前端、PM：依序取得策略、設計系統與 references 對照基準。
- AI agent：以這份入口判斷要先讀哪一組主檔，再進入實作或文件維護。

## 建議閱讀順序

1. [project/README.md](./project/README.md)
2. [design/README.md](./design/README.md)
3. [references/README.md](./references/README.md)

## 三大分區分工

- [project/README.md](./project/README.md)
  專案定位、IA、服務命名決策、工具基線與交付規範。
- [design/README.md](./design/README.md)
  設計系統、Nuxt UI 落地、AI 切版流程與 preview 維運規則。
- [references/README.md](./references/README.md)
  參考站 `source / en / zh-tw` 三層對照稿、IA 對照入口與異常索引。

## 單一真實來源

- 專案策略、IA、服務清單與協作規範：以 `docs/project/` 為準。
- 設計 token、色彩、字體與 Nuxt UI 落地規則：以 `docs/design/` 為準。
- 參考站可見文字、雙語改寫稿與異常紀錄：以 `docs/references/` 為準。
- 執行期樣式真實值：以 `app/assets/css/main.css` 為準。

## 維護邊界

- 一個事實只在一份主檔維護；其他文件只做引用、導覽或對照。
- `references` 是對照工作台，不直接取代 `project` 的產品決策。
- 全部內部連結使用相對路徑，避免本機絕對路徑失效。
- 若文件與現況程式碼衝突，以現況程式碼與最新主檔交叉判斷後再回寫文件。
