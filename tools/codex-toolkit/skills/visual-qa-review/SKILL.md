---
name: visual-qa-review
description: 在 RallyTech 類型網站任務中，需要做 reference/local compare、visual hierarchy QA、responsive evidence review、CTA clarity 審查或 brand-variant consistency review 時使用。特別適合以 screenshot、local page、Figma direction 或 implementation evidence 做精準 compare；若需要實際抓 evidence，搭配 `playwright-interactive`。
---

# Visual QA Review

## Overview

這個 skill 的目標不是做主觀審美評論，而是把本地頁面、reference evidence 與已確認方向做成精準、可行動的 compare review。

## Establish Truth First

優先使用：

- rendered local page
- reference capture
- approved design direction
- interaction evidence

如果需要 state truth，優先用 `playwright` 或 `chrome-devtools`，不要從 code 猜。

## Review Order

1. information hierarchy
2. layout rhythm and spacing
3. typography and copy fit
4. CTA hierarchy and button logic
5. trust signals
6. motion and interaction states
7. responsive behavior
8. brand-variant consistency

## Compare Dimensions

當任務屬於 clone / branded variant，固定 review：

- `layout fidelity`
- `hierarchy`
- `spacing`
- `CTA`
- `responsive`
- `brand-variant consistency`

如果是有意識的 modernize，必須把「允許的現代化」與「真正的 fidelity regression」分開寫。

## Evidence Rules

- 每個 finding 都要能指出 block / component / viewport。
- 若缺 reference state 或 local evidence，直接標註 `evidence gap`。
- desktop 與 mobile 都是必查項，不只看單一 screenshot。
- 若需要重現狀態，route 到 `playwright-interactive` 補證據。

## Output Format

回報時固定輸出：

- `Findings`
- `Evidence`
- `Open questions or assumptions`
- `Recommended fixes`

finding 內至少寫：

- severity
- target block / component
- issue
- why it matters
- recommended fix

## Routing Rules

- clone artifact 與 claim level：`reference-clone-architect`
- 視覺方向與 modernize intent：`frontend-skill`
- interactive evidence capture：`playwright-interactive`

## Load These References When Needed

- `references/rallytech-compare-checklist.md`
- `references/rallytech-evidence-output-template.md`
- `references/rallytech-fidelity-failure-modes.md`
- `references/rallytech-review-checklist.md`
- `references/rallytech-finding-template.md`
