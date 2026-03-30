# 參考站 IA 對照與製作順序

- 最後更新：2026-03-30
- 來源站點：https://pentagoneng.com/

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

- 首頁
- 關於我們
- 服務總覽
- 8 項服務內頁
- 一站式整合
- 聯絡我們
- FAQ（輔助頁）

## 2.1 P0 優先對照順序（跨部門先看）

1. 首頁（`00`）
2. 服務總覽（`03`）
3. 一站式整合（`04`）
4. 聯絡我們（`05`）

## 2.2 每頁對照入口（先找編號再開檔）

- 首頁（`00`）：`source/00-首頁.md` / `en/00-首頁.md` / `zh-tw/00-首頁.md`
- 服務總覽（`03`）：`source/pages/03-services-overview.md` / `en/pages/03-services-overview.md` / `zh-tw/pages/03-服務總覽.md`
- 一站式整合（`04`）：`source/pages/04-one-touch-experience.md` / `en/pages/04-one-touch-experience.md` / `zh-tw/pages/04-一站式整合.md`
- 聯絡我們（`05`）：`source/pages/05-contact.md` / `en/pages/05-contact.md` / `zh-tw/pages/05-聯絡我們.md`

## 3. 頁面對照表（通用頁）

| 目標頁面   | 來源層（source）                          | 英文層（en）                          | 中文層（zh-tw）                | 製作優先級 |
| ---------- | ----------------------------------------- | ------------------------------------- | ------------------------------ | ---------- |
| 首頁       | `source/00-首頁.md`                       | `en/00-首頁.md`                       | `zh-tw/00-首頁.md`             | P0         |
| 關於我們   | `source/pages/01-about.md`                | `en/pages/01-about.md`                | `zh-tw/pages/01-關於我們.md`   | P2         |
| FAQ        | `source/pages/02-faq.md`                  | `en/pages/02-faq.md`                  | `zh-tw/pages/02-常見問題.md`   | P2         |
| 服務總覽   | `source/pages/03-services-overview.md`    | `en/pages/03-services-overview.md`    | `zh-tw/pages/03-服務總覽.md`   | P0         |
| 一站式整合 | `source/pages/04-one-touch-experience.md` | `en/pages/04-one-touch-experience.md` | `zh-tw/pages/04-一站式整合.md` | P0         |
| 聯絡我們   | `source/pages/05-contact.md`              | `en/pages/05-contact.md`              | `zh-tw/pages/05-聯絡我們.md`   | P0         |

## 4. 頁面對照表（服務頁）

| 目標頁面                            | 來源層（source）                                          | 英文層（en）                                          | 中文層（zh-tw）                                          | 製作優先級 |
| ----------------------------------- | --------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------- | ---------- |
| SCADA and HMI Graphics              | `source/services/01-scada-and-hmi-graphics.md`            | `en/services/01-scada-and-hmi-graphics.md`            | `zh-tw/services/01-scada-and-hmi-graphics.md`            | P1         |
| I&E Services                        | `source/services/02-ie-services.md`                       | `en/services/02-ie-services.md`                       | `zh-tw/services/02-ie-services.md`                       | P1         |
| PLC & DCS Programming and Migration | `source/services/03-plc-dcs-programming-and-migration.md` | `en/services/03-plc-dcs-programming-and-migration.md` | `zh-tw/services/03-plc-dcs-programming-and-migration.md` | P1         |
| PI Server                           | `source/services/04-pi-server.md`                         | `en/services/04-pi-server.md`                         | `zh-tw/services/04-pi-server.md`                         | P1         |
| Historians                          | `source/services/05-historians.md`                        | `en/services/05-historians.md`                        | `zh-tw/services/05-historians.md`                        | P1         |
| Network Design                      | `source/services/06-network-design.md`                    | `en/services/06-network-design.md`                    | `zh-tw/services/06-network-design.md`                    | P1         |
| Remote Monitoring and Data          | `source/services/07-remote-monitoring-and-data.md`        | `en/services/07-remote-monitoring-and-data.md`        | `zh-tw/services/07-remote-monitoring-and-data.md`        | P1         |
| Alarm Monitoring                    | `source/services/08-alarm-monitoring.md`                  | `en/services/08-alarm-monitoring.md`                  | `zh-tw/services/08-alarm-monitoring.md`                  | P1         |

## 5. 來源異常（製作時要避開）

- 首頁年份敘事矛盾（`since 2010` 與 `Founded in 2022` 同頁出現）。
- 首頁服務卡內容錯置（`Network Design` 與 `Historians` 描述對調）。
- 首頁拼字錯誤（`Vibration Analysise`）。
- 多頁混入模板殘留（Construction / Our Blog / Apartment Design / ... / lorem ipsum）。

## 6. 不納入正式網站內容

- Construction 模板區塊
- Blog teaser 模板區塊
- Apartment Design 模板卡片
- 外部模板人物卡與無法驗證職稱
