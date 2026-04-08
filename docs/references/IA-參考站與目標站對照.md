# 參考站 IA 對照與製作順序

最後更新：2026-04-08
來源網址：https://pentagoneng.com/（multi-page reference）

## 文件目的

- 提供 references 的頁面編號、來源站到目標站的 IA 映射與製作順序。
- 讓任何角色都能先找到正確頁面，再進入 `source / en / zh-tw` 三層對照。

## 適用角色

- 管理、業務、老闆：快速確認某一頁應該看哪三份檔案。
- 設計、前端、PM：確認頁面順序、服務頁對照路徑與閱讀規則。
- AI agent：作為頁面編號與對照入口的唯一索引。

## 1. 來源站 IA 樹

- Home（首頁） (`/`)
- About（關於） (`/about-us/`)
- FAQ (`/faq/`)
- Services Overview（服務總覽） (`/services/`)
  - SCADA and HMI Graphics
  - I&E Services
  - PLC & DCS Programming and Migration
  - PI Server
  - Historians
  - Network Design
  - Remote Monitoring and Data
  - Alarm Monitoring
- One Touch Experience（一站式整合） (`/one-touch-experience/`)
- Contact（聯絡） (`/contact/`)

## 2. 目標站 IA 樹（製作順序）

- `00` 首頁
- `01` 關於我們
- `03` 服務總覽
- `服務 01 ~ 08` 服務內頁
- `04` 一站式整合
- `05` 聯絡我們
- `02` FAQ（輔助頁）

## 3. 對照入口

- 首頁（`00`）：`source/00-首頁.md` / `en/00-首頁.md` / `zh-tw/00-首頁.md`
- 關於我們（`01`）：`source/pages/01-about.md` / `en/pages/01-about.md` / `zh-tw/pages/01-關於我們.md`
- FAQ（`02`）：`source/pages/02-faq.md` / `en/pages/02-faq.md` / `zh-tw/pages/02-常見問題.md`
- 服務總覽（`03`）：`source/pages/03-services-overview.md` / `en/pages/03-services-overview.md` / `zh-tw/pages/03-服務總覽.md`
- 一站式整合（`04`）：`source/pages/04-one-touch-experience.md` / `en/pages/04-one-touch-experience.md` / `zh-tw/pages/04-一站式整合.md`
- 聯絡我們（`05`）：`source/pages/05-contact.md` / `en/pages/05-contact.md` / `zh-tw/pages/05-聯絡我們.md`

補充：

- `source` 是 reference evidence layer，只保留參考站可見原文與 anomaly 事實。
- `en / zh-tw` 是 Rally Technology public-copy layer，回寫時要優先對齊 `i18n/locales/*` 與 [`../project/02-網站資訊架構與頁面藍圖.md`](../project/02-網站資訊架構與頁面藍圖.md)、[`../project/03-服務架構與命名決策.md`](../project/03-服務架構與命名決策.md)。

## 4. 服務頁對照入口

- `01` SCADA and HMI Graphics：`source/services/01-scada-and-hmi-graphics.md` / `en/services/01-scada-and-hmi-graphics.md` / `zh-tw/services/01-scada-and-hmi-graphics.md`
- `02` I&E Services：`source/services/02-ie-services.md` / `en/services/02-ie-services.md` / `zh-tw/services/02-ie-services.md`
- `03` PLC & DCS Programming and Migration：`source/services/03-plc-dcs-programming-and-migration.md` / `en/services/03-plc-dcs-programming-and-migration.md` / `zh-tw/services/03-plc-dcs-programming-and-migration.md`
- `04` PI Server：`source/services/04-pi-server.md` / `en/services/04-pi-server.md` / `zh-tw/services/04-pi-server.md`
- `05` Historians：`source/services/05-historians.md` / `en/services/05-historians.md` / `zh-tw/services/05-historians.md`
- `06` Network Design：`source/services/06-network-design.md` / `en/services/06-network-design.md` / `zh-tw/services/06-network-design.md`
- `07` Remote Monitoring and Data：`source/services/07-remote-monitoring-and-data.md` / `en/services/07-remote-monitoring-and-data.md` / `zh-tw/services/07-remote-monitoring-and-data.md`
- `08` Alarm Monitoring：`source/services/08-alarm-monitoring.md` / `en/services/08-alarm-monitoring.md` / `zh-tw/services/08-alarm-monitoring.md`

## 5. 區塊化對照規則

- 每頁先看 `Block Map` / `區塊總覽`，確認畫面有哪些區塊。
- 同一個區塊在三層的順序固定一致，不調換位置。
- `source` 先讀原始可見文字；`en` 再看我方英文改寫；`zh-tw` 最後看繁中與台灣 B2B 語感調整版。
- `en / zh-tw` 的頁首、服務卡片、sidebar 與 CTA 命名，以現行官方多語系與服務命名決策為準，不直接承接 source 的舊導覽與舊 footer 假設。
- 第三次校正起，`source` 以 live site full-page screenshot 與畫面可見文字為準，不把 hidden DOM 或破圖 placeholder 直接當成原文。
- 當頁是否保留 `Notes` / `備註`，以是否真的需要人工判讀為準，不強制每頁都有。

## 6. 共同判讀原則

- `shared-layout` / `共用版型`：首頁完整保留共用版型；服務頁 sidebar 等頁內共用結構則保留在各自頁面。
- `residual` / `模板殘留`：可見但可疑或待刪的模板內容，三層都保留供判讀。
- 異常集中檔：[source-anomalies.md](./source-anomalies.md)
- 服務正式命名以 [`../project/03-服務架構與命名決策.md`](../project/03-服務架構與命名決策.md) 為準。
