---
name: brand-variation-director
description: 在 RallyTech 類型 reference clone 任務中，需要於 fidelity pass 之後規劃品牌變體、AI 圖像 brief、copy delta、視覺方向與 acceptance note 時使用。特別適合保留 reference hierarchy、做 Phase 2 差異化與串接 `.agents/ai-image-context.md`、`docs/references/Nano-Banana-*`、`data/nano-banana/`；若 fidelity 還沒鎖定，先回到 `reference-clone-architect`。
---

# Brand Variation Director

## Overview

把品牌變體任務先收斂成 protected fidelity boundary、variation direction、image role plan、copy delta 與 acceptance note，再進入設計或生圖。

這個 skill 只處理 Phase 2 品牌變體，不負責 Phase 1 reference truth capture。

## Preconditions

開始前先確認：

- `Clone Brief`、`Capture Pack`、`Architecture Pack`、`Implementation Contract` 已存在
- fidelity pass 已被接受，或至少已明確鎖定不再變動的 block order / hierarchy
- 若要做 AI 圖像，已能指出對應的 `image role`

如果以上任一項不成立，先回到 `reference-clone-architect`，不要直接開始做品牌差異化。

## Read Truth In This Order

1. `docs/project/05-Reference-Clone工作流與降級規範.md`
2. `.agents/ai-image-context.md`
3. `docs/references/README.md`
4. `docs/references/Nano-Banana-提示詞與生成流程.md`
5. `docs/references/Nano-Banana-提示詞模式附錄.md`
6. `data/nano-banana/README.md`
7. 目前 page/component implementation 與 capture evidence

## Workflow

1. 先鎖 protected fidelity boundary。
   - block order
   - section rhythm
   - CTA hierarchy
   - reference hierarchy
2. 再選 variation axis。
   - brand mood
   - typography energy
   - image direction
   - copy delta
   - interaction polish
3. 再定 image role plan。
   - 哪些 role 保持 sourced visuals
   - 哪些 role 可進 Phase 2 AI image
   - 每個 role 的 `prompt brief`、`source-of-truth note`、`acceptance note`
4. 再定 copy delta。
   - 哪些文案只做 tone shift
   - 哪些文案可以更有品牌辨識度
   - 哪些 proof / CTA 不可因變體而失真
5. 最後輸出 variation brief。
   - direction
   - constraints
   - image plan
   - copy plan
   - QA / acceptance

## Required Output

每次至少輸出：

- `Protected fidelity boundary`
- `Variation direction`
- `Image role plan`
- `Prompt brief`
- `Copy delta intent`
- `Acceptance note`

若任務要交給生圖或後續實作者，另外補：

- `asset source plan`
- `component impact`
- `QA handoff`

## Guardrails

- 不在 fidelity 還沒穩定前做品牌變體。
- 不用品牌化當理由去改掉 reference hierarchy。
- 不把 AI 圖像當成 reference truth capture 的替代品。
- 不把 prompt text、candidate history、manifest state 塞回 skill 本體；這些放在 `data/nano-banana/`。
- 圖像要服務頁面、headline safe area 與 B2B 信任，不做純風格炫技。

## Routing Rules

- Phase 1 sourced visuals：交給 `asset-sourcing-licensing`
- AI 圖像生成或編修：交給 `imagegen`
- 品牌視覺 direction：交給 `frontend-skill`
- `source / en / zh-tw` 文案改稿：交給 `b2b-website-copy-strategy`
- 變體完成後的 fidelity / responsive compare：交給 `visual-qa-review`

## Load These References When Needed

- `references/rallytech-variation-brief-template.md`
  用於快速產出 Phase 2 brief。
- `references/rallytech-ai-image-phase-checklist.md`
  用於 image role、prompt brief、acceptance note 檢查。
- `references/rallytech-copy-delta-guidelines.md`
  用於控制 tone shift 與品牌差異，不讓 copy 失真。

## Output Expectation

結束時要讓後續執行者能清楚知道：

- 哪些東西不能動
- 哪些地方允許品牌差異化
- 每張圖像各自承擔什麼角色
- 哪些文案只是校準，哪些文案是有意識的品牌升級
