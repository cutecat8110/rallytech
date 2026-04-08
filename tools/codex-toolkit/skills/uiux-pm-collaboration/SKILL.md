---
name: uiux-pm-collaboration
description: 在 RallyTech 類型高風險前端、產品、clone、設計系統與品牌變體任務中，需要先對齊目標、成功條件、範圍切分、取捨、artifact 邊界與決策，再逐步進入實作時使用。特別適合不該直接跳到整頁交付或一次產出全部答案的情境；若 scope 已完全鎖定且只剩 implementation，改用對應 specialist。
---

# UIUX PM Collaboration

## Overview

先做決策，再做實作。這個 skill 的責任是把高風險任務拆成可以被確認的決策節點，避免一開始就用大量畫面或 code 把方向鎖死。

## Default Working Style

- 先重述目標與本輪 scope。
- 先講清楚成功條件與限制。
- 提供具體 options，而不是抽象 brainstorming。
- 給明確 recommendation，不把決策全丟回使用者。
- 每一輪結尾整理 `已決策 / 待決策 / 刻意延後`。

## Required Output

討論階段固定輸出：

- `Objective`
- `Constraints`
- `Options`
- `Recommendation`
- `Decision`

如果任務是 clone / reference-led rebuild，另外固定補：

- `Reference truth`
- `Similarity target`
- `Allowed modernization`
- `Token substitution`
- `Defer list`

## Decision Rules

### 先停下來對齊的情況

- scope 從單一 section 突然跳到整站
- 任務和既有設計系統衝突
- reference fidelity 與品牌變體邊界不清楚
- 使用者要求的結果會影響 routing、artifact 或 implementation order

### 可以直接前進的情況

- 只是既有決策的局部延伸
- 不會改變 artifact 鏈
- 不會改變 Nuxt UI / design-system / copy / QA 的 owner 邊界

## Collaboration Flow

1. 先鎖本輪最小可交付單位。
   - section
   - page
   - artifact
   - design-system decision
2. 再列 2-3 個真正有差異的 options。
3. 明確指出每個 option 的 tradeoff。
4. 給建議方案與理由。
5. 若需要，才把任務 route 到 specialist skill。

## Routing Rules

- clone artifact 與 phase gate：`reference-clone-architect`
- 設計系統與 ownership：`design-system-architect`
- 視覺美感與構圖：`frontend-skill`
- 文案與 rewrite brief：`b2b-website-copy-strategy`
- 品牌變體與 AI image brief：`brand-variation-director`
- implementation truth：`nuxt-ui`、`nuxt`、`vue`、`nuxt-seo`
- 驗收 compare：`visual-qa-review`

## Guardrails

- 除非使用者明確要求，不直接一次輸出 end-to-end 整頁方案。
- 不把 options 寫成其實沒有差異的假選項。
- 不把 artifact 邊界含糊帶過。
- 不在 reference 還沒鎖定前就先談大幅品牌變體。

## Output Expectation

使用這個 skill 的回合，重點是把後續工作做成：

- 可決策
- 可交接
- 可驗證

而不是把所有內容一次做完。
