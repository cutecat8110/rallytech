# 專案文件入口

最後更新：2026-04-02

## 文件目的

- 提供官網重建的決策入口，讓不同角色知道先讀哪份主檔。
- 把策略、IA、服務決策、本機 baseline 與 clone workflow 收斂成單一決策鏈。

## 適用角色

- 管理、業務、老闆：快速掌握專案方向、頁面範圍與交付邊界。
- 設計、前端、PM：依序取得可直接落地的決策基準。
- AI agent：以這 5 份主檔作為 `docs/project/` 的唯一主入口。

## 目前共識摘要

- 專案定位：雷力科技企業官網重構，核心目標是清楚呈現服務能力、建立信任並提升聯絡轉換。
- 第一輪 IA：首頁、關於我們、服務總覽、8 項服務內頁、一站式整合、聯絡我們，FAQ 為輔助頁。
- 服務策略：第一輪承接參考站 8 項服務，不先做大幅重組；命名以 `03` 為唯一維護位置。
- 視覺策略：先承接參考站可見內容與頁面骨架，再回到雷力科技設計系統做視覺與互動變體。
- 內容策略：`source -> en -> zh-tw` 三層同步；`source` 保留可見原文，`en / zh-tw` 改成我方公司稿。
- 本機 baseline：`chrome-devtools + playwright + context7 + fetch` 為 core，`memory` 為 enabled optional，`github` 不在本機 config。
- clone 策略：採 architecture-first；先完成 `Clone Brief → Capture Pack → Architecture Pack → Implementation Contract`，再進入品牌化變體。
- AI image 策略：Phase 1 先做來源圖與 fidelity，Phase 2 才進入 `imagegen / Nano` 品牌變體。

## Thread Kickoff 入口

這一段是新 thread 的最快入口。先用 30 秒看懂本機能力與 owner map，再用 checklist 決定這輪該怎麼開始。

### 30 秒 Kickoff Card

#### Current local baseline

- Core MCP：`chrome-devtools`、`playwright`、`context7`、`fetch`
- Enabled optional MCP：`memory`
- Not in local config：`github`、`figma`
- Feature baseline：`js_repl = true`

#### Core skills

- 前端 / 產品對齊：`uiux-pm-collaboration`
- Reference clone / 高擬真重建：`reference-clone-architect`、`frontend-skill`
- Nuxt 落地：`nuxt-ui`、`nuxt`、`vue`
- 視覺驗證：`visual-qa-review`
- 文案與來源圖：`b2b-website-copy-strategy`、`asset-sourcing-licensing`

#### Conditional layer

- `playwright-interactive`：當前 session 真的有互動式 browser 能力時才算 active
- `imagegen`：fidelity pass 後的 Phase 2 品牌變體
- `github`：session 或 connector 提供 review / diff trace 時
- `figma`：設計 mapping、moodboard 或設計協作任務時

#### Workflow spine

`Clone Brief → Capture Pack → Architecture Pack → Implementation Contract → Variation Brief`

規則：

- 前四段用來建立 fidelity 與 implementation truth。
- `Variation Brief` 只能在 fidelity pass 後進入。

#### AI image phase gate

- Phase 1：source / licensed visuals + fidelity
- Phase 2：`imagegen` / Nano 品牌變體
- 長期圖像 guardrails：[`../../.agents/ai-image-context.md`](../../.agents/ai-image-context.md)
- 可執行 brief / prompt / manifest：[`../../data/nano-banana/README.md`](../../data/nano-banana/README.md)

#### Source-of-truth map

- 協作 SOP：[`../../AGENTS.md`](../../AGENTS.md)
- Design system foundations / ownership matrix：[`../design/01-設計系統規則總綱.md`](../design/01-設計系統規則總綱.md)
- Nuxt UI implementation order：[`../design/02-AI切版與Preview維運規範.md`](../design/02-AI切版與Preview維運規範.md)
- Vision-to-Code grammar：[`../design/03-Vision-to-Code與Component-Driven規範.md`](../design/03-Vision-to-Code與Component-Driven規範.md)
- Local baseline + skills/MCP/workflow matrix：[`./04-協作與交付規範.md`](./04-協作與交付規範.md)
- Reference clone + AI image workflow：[`./05-Reference-Clone工作流與降級規範.md`](./05-Reference-Clone工作流與降級規範.md)
- Long-lived AI image guardrails：[`../../.agents/ai-image-context.md`](../../.agents/ai-image-context.md)
- Executable AI image artifacts：[`../../data/nano-banana/README.md`](../../data/nano-banana/README.md)
- Reference workspace + Nano research appendix：[`../references/README.md`](../references/README.md)

### Thread Kickoff Checklist

1. 先判斷這輪任務類型：
   - 前端 / 版面
   - Reference clone / 高擬真重建
   - 文案 / 雙語改稿
   - 文件 / 治理
   - AI image / 品牌變體
2. 再選最小 skill 組合：
   - 前端 / 版面：`uiux-pm-collaboration + nuxt-ui`
   - Clone：`reference-clone-architect + uiux-pm-collaboration + frontend-skill + nuxt-ui`
   - 文案：`b2b-website-copy-strategy`
   - 文件：`document-writer`
   - AI image：Phase 1 先 `asset-sourcing-licensing`，Phase 2 再看 `imagegen`
3. 再檢查 capability gate：
   - 哪些工具屬於 core baseline
   - 哪些屬於 enabled optional
   - 哪些屬於 session-conditional
4. 再確認 owner doc：
   - SOP 問題看 `AGENTS`
   - foundations / ownership 看 `design/01`
   - Nuxt UI implementation 看 `design/02`
   - Vision-to-Code artifact 看 `design/03`
   - baseline / skills / MCP / capability gate 看 `project/04`
   - clone / AI image workflow 看 `project/05`
   - reference text / appendix / Nano research 看 `references`
5. 最後鎖回報內容：
   - `goal`
   - `phase`
   - `claim level`
   - `validation`

### Guardrails

- `github` 不在本機 baseline；只有任務真的需要 review trace 且 session 有提供時才列入 active。
- `playwright-interactive` 只有當前 session 真有互動式 browser 能力時才列入 active。
- `imagegen / Nano` 預設屬於 Phase 2，不進第一輪 fidelity 驗收。

### Do Not Start Until

- 不確定 owner doc 時，不開始 implementation。
- 不確定 phase 時，不把 AI image 混進 fidelity。
- 不確定 skill availability 時，不先假設 conditional layer 可用。

## 先讀哪幾份

1. [01-專案策略與基線總綱.md](./01-專案策略與基線總綱.md)
2. [02-網站資訊架構與頁面藍圖.md](./02-網站資訊架構與頁面藍圖.md)
3. [03-服務架構與命名決策.md](./03-服務架構與命名決策.md)
4. [04-協作與交付規範.md](./04-協作與交付規範.md)
5. [05-Reference-Clone工作流與降級規範.md](./05-Reference-Clone工作流與降級規範.md)

## 各檔分工

- `01`：專案定位、受眾、語言策略、目前共識、範圍與本機 baseline 邊界。
- `02`：網站 IA、頁面角色、首頁區塊藍圖與一站式整合承接項目。
- `03`：8 項服務主清單、中文英文命名規則與舊站映射。
- `04`：本機 skills / MCP baseline、workflow layers、QA、commit/PR 規範與 capability gate。
- `05`：reference clone workflow、artifact 介面、downgrade 規則與 AI image phase。

## 維護邊界

- 不在多份檔案重複定義服務主清單、IA 或提交格式。
- 產品策略變更先改 `01 / 02 / 03`，workflow / baseline / capability gate 變更先改 `04 / 05`。
- `references` 只負責對照與研究附錄，不回寫成產品與 workflow 主決策來源。
