---
name: reference-clone-architect
description: 在 RallyTech 類型 reference clone 任務中，需要完整理解參考網站、整理 URL / screenshot / multi-page clone 輸入、建立 `Clone Brief → Capture Pack → Architecture Pack → Implementation Contract → Variation Brief`，並協調 Nuxt UI / Vue 落地、設計系統 token substitution、品牌變體、SEO / RWD 邊界與本地/參考站精準比對時使用。特別適合作為 clone 主工作流入口；若只做視覺 polish 或 compare review，改用 `frontend-skill` 或 `visual-qa-review`。
---

# Reference Clone Architect

## Overview

把 clone 任務視為 artifact-first workflow，而不是從 reference input 直接跳到最終程式碼。

這個 skill 是 RallyTech 技能系統的第一入口。它負責鎖定 reference truth、phase gate、claim labels、evidence gap 與交接介面，再把任務 route 到對應 specialist skills。

## Read Repo Truth First

先讀：

- `AGENTS.md`
- `docs/project/04-協作與交付規範.md`
- `docs/project/05-Reference-Clone工作流與降級規範.md`
- `docs/design/01-設計系統規則總綱.md`
- `docs/design/02-AI切版與Preview維運規範.md`
- `docs/design/03-Vision-to-Code與Component-Driven規範.md`
- `docs/references/README.md`

如果任務會進到 Phase 2 品牌變體，再補：

- `.agents/ai-image-context.md`
- `data/nano-banana/README.md`

## Inputs to Lock

開始前至少鎖定：

- `reference input`
- `page scope`
- `similarity target`
- `allowed modernization`
- `brand constraints`
- `defer list`

若輸入不完整，先補成 `Clone Brief`，不要直接往後推。

## Workflow Spine

### 1. Clone Brief

先鎖：

- `Reference truth`
- `Similarity target`
- `Allowed modernization`
- `Token substitution`
- `Defer list`

### 2. Capture Pack

補齊：

- desktop / tablet / mobile evidence
- block-level screenshots
- raw visible text
- interaction states
- media inventory
- evidence paths
- evidence gaps

### 3. Architecture Pack

拆出：

- `IA map`
- `Block map`
- `Component inventory`
- `Interaction inventory`
- `Style inventory`
- `Content inventory`

clone 任務需要的 IA / structure / block thinking，優先在這一層解決，不再把 `site-architecture` 當主鏈入口。

### 4. Implementation Contract

交付：

- `route / page assembly`
- `section ownership`
- `primitive / component mapping`
- `Nuxt UI mapping`
- `token substitution map`
- `asset plan`
- `style ownership map`
- `QA checklist`

### 5. Variation Brief

只有 fidelity pass 後才進入，輸出：

- brand direction
- copy rewrite intent
- AI image brief baseline
- protected fidelity boundary

## Routing Rules

- 決策對齊、範圍切分、tradeoff：`uiux-pm-collaboration`
- 設計系統、token、ownership、Nuxt UI bridge：`design-system-architect`
- 美感、構圖、受控 modernize：`frontend-skill`
- `source / en / zh-tw` 文案、rewrite brief、prompt brief：`b2b-website-copy-strategy`
- Phase 1 sourced visuals：`asset-sourcing-licensing`
- Phase 2 brand variation / AI image brief：`brand-variation-director`
- Nuxt UI / Nuxt / Vue / SEO implementation truth：`nuxt-ui`、`nuxt`、`vue`、`nuxt-seo`
- local/reference compare 與驗收：`visual-qa-review`
- browser evidence operation：`playwright-interactive`

## Capability and Claim Rules

- 先跑本機與當前 session 的 capability check。
- 缺少核心 fidelity 能力時，標記 `degraded-fidelity`。
- 需要 review trace 但缺 GitHub integration 時，標記 `degraded-review-trace`。
- 進入品牌變體但缺 image generation 時，標記 `degraded-variant`。
- anti-bot、lazy-load、third-party embed 造成看不到完整內容時，留下 `evidence gap`。

## Guardrails

- 不從 URL 或 screenshot 直接跳到 code。
- 不在 clone 結構未穩定前就先做 CRO / SEO / copy-polish。
- 不在缺 DOM / interaction truth 時宣稱 full-fidelity clone。
- 不把 Phase 2 品牌變體混進第一輪 fidelity 驗收。
- 不繞過 Nuxt UI / semantic-first / style ownership 規則去換速度。

## Output Expectation

結束時要讓另一個實作者能直接接手：

- 不需要補猜 block structure
- 不需要補猜 Nuxt UI mapping
- 不需要補猜 token substitution
- 不需要補猜 QA 標準與 claim level

## Load These References When Needed

- `references/rallytech-phase-artifacts.md`
  用於完整 artifact 欄位與輸出模板。
- `references/rallytech-parity-gates.md`
  用於 claim labels、downgrade 與 fallback 判準。
