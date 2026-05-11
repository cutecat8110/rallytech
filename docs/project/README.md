# 專案文件入口

最後更新：2026-05-08

## 文件目的

- 提供 RallyTech 官網重構的決策入口，讓管理、PM、設計、工程與 AI agent 知道先讀哪一份主檔。
- 收斂專案策略、IA、服務命名、協作規範、clone workflow、品牌素材與整站 copy system。
- 作為 skills / MCP / capability gate 與 Codex toolkit 共識的 kickoff 入口；詳細矩陣仍由 `04` 維護。

## 目前共識摘要

- 專案定位：雷力科技企業官網重構，核心目標是清楚呈現服務能力、建立信任並提升聯絡轉換。
- 第一輪 IA：首頁、關於我們、服務總覽、服務內頁、一站式整合、聯絡我們；FAQ 為輔助頁。
- 服務策略：正式服務清單與命名以 `03` 為唯一維護位置。
- 文案策略：`source -> en -> zh-tw` 三層同步；`source` 保留 evidence，`en / zh-tw` 為 Rally Technology 對外文案。
- 品牌策略：先用可驗證素材補強品牌、proof 與 page job，再逐步提升差異化與品牌感。
- 工具策略：Computer Use / in-app browser first；Playwright / capture script second；DevTools / DOM precise only；MCP / plugin 採 task-activated policy。

## Thread Kickoff 快速入口

### 核心 owner docs

- 協作短版憲章：[`../../AGENTS.md`](../../AGENTS.md)
- 全站文件總入口：[`../README.md`](../README.md)
- 專案策略與基線：[`./01-專案策略與基線總綱.md`](./01-專案策略與基線總綱.md)
- IA 與頁面藍圖：[`./02-網站資訊架構與頁面藍圖.md`](./02-網站資訊架構與頁面藍圖.md)
- 服務架構與命名：[`./03-服務架構與命名決策.md`](./03-服務架構與命名決策.md)
- 協作與交付規範：[`./04-協作與交付規範.md`](./04-協作與交付規範.md)
- Reference clone 與降級規範：[`./05-Reference-Clone工作流與降級規範.md`](./05-Reference-Clone工作流與降級規範.md)

### Skills / MCP 快速入口

- Skills、MCP、plugins、Codex app capability、claim labels、驗證與回報：[`./04-協作與交付規範.md`](./04-協作與交付規範.md)
- Repo-tracked Codex toolkit：[`../../tools/codex-toolkit/README.md`](../../tools/codex-toolkit/README.md)
- Toolkit 安裝腳本：[`../../tools/codex-toolkit/scripts/install-windows.ps1`](../../tools/codex-toolkit/scripts/install-windows.ps1)
- Toolkit 驗證腳本：[`../../tools/codex-toolkit/scripts/verify-windows.ps1`](../../tools/codex-toolkit/scripts/verify-windows.ps1)

### 設計與 implementation owner docs

- 設計文件入口：[`../design/README.md`](../design/README.md)
- 設計系統 foundations：[`../design/01-設計系統規則總綱.md`](../design/01-設計系統規則總綱.md)
- Nuxt UI implementation order：[`../design/02-AI切版與Preview維運規範.md`](../design/02-AI切版與Preview維運規範.md)
- Vision-to-Code grammar：[`../design/03-Vision-to-Code與Component-Driven規範.md`](../design/03-Vision-to-Code與Component-Driven規範.md)

### Reference 與研究入口

- references 對照導覽：[`../references/README.md`](../references/README.md)
- 長期 AI image guardrails：[`../../.agents/ai-image-context.md`](../../.agents/ai-image-context.md)
- 可執行 AI image artifacts：[`../../data/nano-banana/README.md`](../../data/nano-banana/README.md)

## 主決策文件

- `01`：專案定位、受眾、語言策略、目前共識與範圍邊界。
- `02`：網站 IA、頁面角色、首頁區塊藍圖與一站式整合承接項目。
- `03`：服務主清單、中英文命名規則與舊站映射。
- `04`：skills / MCP / plugin policy、workflow、QA、commit / PR 規範與 capability gate。
- `05`：reference clone workflow、artifact 介面、downgrade 規則與 AI image phase gate。
- `06`：品牌素材缺口、可驗證素材、copy issue / source-material issue 判定。
- `07`：外部品牌素材研究、來源分級、內容生產路線與品牌 boilerplate。
- `08`：整站文案節奏、section job、proof 使用層級與 manual-locked copy 邊界。

## QA / 報告文件

- `09`：整站 UI/UX 一致性 QA、設計系統風險、建議修正批次與 residual risk。
- `10`：服務總覽服務卡截圖 QA、RWD evidence、修正紀錄與剩餘風險。

QA / 報告文件記錄某一輪的 evidence 與判斷，不取代 `01-08` 的主決策文件。

## 維護邊界

- 不在多份檔案重複定義服務主清單、IA、提交格式或 skills / MCP policy。
- 產品策略變更先改 `01 / 02 / 03`。
- Workflow、baseline、capability gate、skills / MCP policy 變更先改 `04`。
- Reference clone、downgrade 與 AI image workflow 變更先改 `05`。
- 整站文案節奏與 section job 變更先改 `08`，再回寫 locale 與 references。
- `references` 只負責對照與研究附錄，不回寫成產品與 workflow 主決策來源。
