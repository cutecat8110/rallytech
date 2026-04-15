# 專案文件入口

最後更新：2026-04-15

## 文件目的

- 提供官網重構的決策入口，讓不同角色知道先讀哪一份主檔。
- 把策略、IA、服務命名、協作規範、clone workflow、品牌素材與整站 copy system 收成單一入口。

## 適用角色

- 管理、業務、老闆：快速掌握專案方向、頁面範圍與交付邊界。
- 設計、前端、PM：依序取得可直接落地的決策基準。
- AI agent：以這些主檔作為 `docs/project/` 的主要決策鏈。

## 目前共識摘要

- 專案定位：雷力科技企業官網重構，核心目標是清楚呈現服務能力、建立信任並提升聯絡轉換。
- 第一輪 IA：首頁、關於我們、服務總覽、8 項服務內頁、一站式整合、聯絡我們；FAQ 為輔助頁。
- 服務策略：第一輪承接參考站 8 項服務，不先做大幅重組；正式命名以 `03` 為準。
- 文案策略：`source -> en -> zh-tw` 三層同步；`source` 只保留 evidence，`en / zh-tw` 為 Rally Technology 對外文案。
- 品牌策略：先用可驗證素材補強品牌、proof 與 page job，再逐步提升差異化與品牌感。

## Thread Kickoff 快速入口

### 核心 owner docs

- 協作 SOP：[`../../AGENTS.md`](../../AGENTS.md)
- 專案策略與基線：[`./01-專案策略與基線總綱.md`](./01-專案策略與基線總綱.md)
- IA 與頁面藍圖：[`./02-網站資訊架構與頁面藍圖.md`](./02-網站資訊架構與頁面藍圖.md)
- 服務架構與命名：[`./03-服務架構與命名決策.md`](./03-服務架構與命名決策.md)
- 協作與交付規範：[`./04-協作與交付規範.md`](./04-協作與交付規範.md)
- Reference clone 與降級規範：[`./05-Reference-Clone工作流與降級規範.md`](./05-Reference-Clone工作流與降級規範.md)

### 設計與 implementation owner docs

- 設計系統 foundations：[`../design/01-設計系統規則總綱.md`](../design/01-設計系統規則總綱.md)
- Nuxt UI implementation order：[`../design/02-AI切版與Preview維運規範.md`](../design/02-AI切版與Preview維運規範.md)
- Vision-to-Code grammar：[`../design/03-Vision-to-Code與Component-Driven規範.md`](../design/03-Vision-to-Code與Component-Driven規範.md)

### Reference 與研究入口

- references 對照導覽：[`../references/README.md`](../references/README.md)
- 長期 AI image guardrails：[`../../.agents/ai-image-context.md`](../../.agents/ai-image-context.md)
- 可執行 AI image artifacts：[`../../data/nano-banana/README.md`](../../data/nano-banana/README.md)

## 先讀哪幾份

1. [01-專案策略與基線總綱.md](./01-專案策略與基線總綱.md)
2. [02-網站資訊架構與頁面藍圖.md](./02-網站資訊架構與頁面藍圖.md)
3. [03-服務架構與命名決策.md](./03-服務架構與命名決策.md)
4. [04-協作與交付規範.md](./04-協作與交付規範.md)
5. [05-Reference-Clone工作流與降級規範.md](./05-Reference-Clone工作流與降級規範.md)

## 各檔分工

- `01`：專案定位、受眾、語言策略、目前共識與範圍邊界。
- `02`：網站 IA、頁面角色、首頁區塊藍圖與一站式整合承接項目。
- `03`：8 項服務主清單、中英文命名規則與舊站映射。
- `04`：skills / MCP baseline、workflow、QA、commit/PR 規範與 capability gate。
- `05`：reference clone workflow、artifact 介面、downgrade 規則與 AI image phase。

## 補充文件

- [06-品牌素材缺口與補強清單.md](./06-品牌素材缺口與補強清單.md)
  用於區分 `copy issue` 與 `source-material issue`，並整理後續需要回收的品牌、信任與 proof 素材。
- [07-外部品牌素材研究與內容生產規劃.md](./07-外部品牌素材研究與內容生產規劃.md)
  用於整理舊官網、官方對接頁、公司公開資料與內容生產路線，支援後續品牌與 proof 補強。
- [08-整站文案節奏與區塊分工規範.md](./08-整站文案節奏與區塊分工規範.md)
  用於定義整站 page job、section job、重複限制、proof 使用層級與雙語節奏規則，支援首頁、about、services、contact 與 service detail 的一致化改稿。

## 維護邊界

- 不在多份檔案重複定義服務主清單、IA 或提交格式。
- 產品策略變更先改 `01 / 02 / 03`；workflow / baseline / capability gate 變更先改 `04 / 05`。
- 整站文案節奏與 section job 變更先改 `08`，再回寫 locale 與 references。
- `references` 只負責對照與研究附錄，不回寫成產品與 workflow 主決策來源。
