---
name: design-system-architect
description: 在 RallyTech 類型 Nuxt 4 + Vue 3 + @nuxt/ui 專案中，需要規劃或重整設計系統、semantic tokens、Nuxt UI bridge、styling ownership 與 promotion rule 時使用。特別適合任務涉及 `docs/design/01-03`、`app/assets/css/main.css`、`app/app.config.ts`、design-system governance、Nuxt UI mapping、SEO / RWD 邊界；若只是做單頁視覺方向，改用 `frontend-skill`。
---

# Design System Architect

## Overview

把設計系統任務先轉成 runtime truth、semantic map、ownership map、Nuxt UI mapping，再進入實作。

這個 skill 不負責單純做畫面好看；它負責判斷哪些規則屬於 token、哪些屬於 global theme、哪些屬於 block-level override、哪些必須留在 component local。

## Read Repo Truth First

在 RallyTech 類型的 repo 內，先讀這些檔案：

- `app/assets/css/main.css`
- `app/app.config.ts`
- `docs/design/01-設計系統規則總綱.md`
- `docs/design/02-AI切版與Preview維運規範.md`
- `docs/design/03-Vision-to-Code與Component-Driven規範.md`

如果任務同時是 clone / reference-led rebuild，再補讀：

- `docs/project/05-Reference-Clone工作流與降級規範.md`
- `docs/project/04-協作與交付規範.md`

## Workflow

1. 先辨識這次變更層級。
   - foundation / token
   - global component theme
   - block-level variation
   - component-local styling
2. 先確認 runtime truth。
   - 哪些值已在 `main.css`
   - 哪些值已在 `app.config.ts`
   - 哪些規則只是 docs 治理，不是 runtime
3. 再定 semantic map。
   - `primary / secondary / neutral`
   - status colors
   - typography, radius, layout shell
4. 再定 ownership map。
   - Layer 1: `main.css`
   - Layer 2: `app.config.ts`
   - Layer 3: `<UTheme>` / `:ui`
   - Layer 4: component local class / local `<style scoped>`
5. 最後才定 implementation contract。
   - token substitution
   - Nuxt UI mapping
   - promotion / keep-local decision
   - QA checklist

## Required Output

每次規劃至少輸出：

- `Objective`
- `Runtime truth`
- `Semantic map`
- `Ownership map`
- `Nuxt UI mapping`
- `Promotion decision`
- `QA checklist`

如果任務是 clone / screenshot-to-code，另外補：

- `Reference truth`
- `Allowed modernization`
- `Token substitution`

## Guardrails

- 先用 semantic-first，不先散落 raw hex。
- 不把單一 section 的 geometry、crop、overlay 直接升成全域 token。
- 能用 `app.config.ts → <UTheme> → :ui → local style` 解決，就不要反向把 block grammar 堆回 `main.css`。
- `UButton` 的 `color=\"primary\" + variant=\"solid\"` 要維持白字。
- SEO、RWD、可讀性與互動可達性，屬於設計系統規劃的驗收範圍，不是最後才補。

## Routing Rules

- 如果任務重點是 reference artifact 與 fidelity boundary，先交給 `reference-clone-architect`。
- 如果任務重點是高階決策、範圍切分與設計取捨，先交給 `uiux-pm-collaboration`。
- 如果任務重點是美感、構圖與視覺方向，交給 `frontend-skill`。
- 如果任務開始進入 Nuxt UI / Vue 落地，交給 `nuxt-ui`、`nuxt`、`vue`。

## Load These References When Needed

- `references/rallytech-design-workflow.md`
  用於理解本 skill 如何對接 `docs/design/01-03` 與 runtime files。
- `references/rallytech-output-contract.md`
  用於快速套用輸出格式。
- `references/rallytech-promotion-cases.md`
  用於判斷規則應提升還是留在 local。

## Output Expectation

結束時要讓後續實作者不需要自己猜：

- 哪個值屬於 token
- 哪個規則要放哪一層
- 哪些 Nuxt UI 元件要被覆寫
- 哪些區塊只能 local 解決
- 要用什麼驗證它沒有破壞首頁、`/design-system`、SEO 與 RWD
