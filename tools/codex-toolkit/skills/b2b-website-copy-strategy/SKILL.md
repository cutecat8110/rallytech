---
name: b2b-website-copy-strategy
description: 在 RallyTech 類型工業 B2B 網站任務中，需要把 `source → en → zh-tw` 參考文案、頁面訊息與 CTA 結構轉成可上線 copy 時使用。特別適合服務頁、首頁、proof 區塊、rewrite brief、prompt brief 與 page message stack；若只是逐句潤稿，改用 `copy-editing`。
---

# B2B Website Copy Strategy

## Overview

把可見參考文案、專案事實與頁面任務，轉成可信、雙語、可落地的 B2B 網站文字。

這個 skill 是 RallyTech 類型網站的主要 copy specialist。它不只負責改稿，也負責把 copy intent 轉成更準確的 rewrite brief、prompt brief 與 page message stack。

## Truth Order

先看：

1. `docs/project/01-專案策略與基線總綱.md`
2. `docs/project/02-網站資訊架構與頁面藍圖.md`
3. `docs/project/03-服務架構與命名決策.md`
4. `docs/references/source/*`
5. `docs/references/en/*`
6. `docs/references/zh-tw/*`
7. 目前 implementation 與已確認公司資訊

不要捏造年份、客戶名、案量、認證、服務成果或聯絡資訊。

## Workflow

1. 先鎖 page job。
   - home
   - service page
   - about
   - one-stop integration
   - contact / FAQ
2. 先維持 block order 與 source mapping。
   - 在 clone structure 還沒穩定前，不要先大幅改寫結構。
3. 先寫 English，再寫 `zh-tw`。
   - `en` 要是 launch-ready company copy
   - `zh-tw` 要是台灣 B2B 官網語感
4. 每個 block 至少交付：
   - H1 / heading
   - support line
   - proof / capability line
   - CTA
5. 若任務要進一步交給設計、實作或生圖，補成：
   - `rewrite brief`
   - `prompt brief`
   - `copy delta intent`

## Prompt Precision Rules

當任務不是直接交付頁面 copy，而是要提高提示詞或 brief 精準率時：

- 先講 page job，不先講文風形容詞
- 先講 audience、proof、CTA，再講 tone
- 先講不能亂動的 reference / service truth，再講可 modernize 的部分
- 把 vague marketing adjectives 轉成具體頁面責任、訊號與限制

詳細寫法看 `references/rallytech-prompt-precision.md`。

## Copy Sensitivity Rules

改稿時優先檢查：

- 讀者能否在 5 秒內理解重點
- benefit 是否比 feature 更清楚
- proof 是否足夠支撐 claim
- CTA 是否和頁面 job 對齊
- 中英雙語的術語是否一致

詳細檢查表看 `references/rallytech-copy-sensitivity-checks.md`。

## Guardrails

- 在 clone 早期，先穩定 block mapping，不先追求大幅創意改寫。
- 保留工業自動化、工程整合、I&E、PI System 等必要術語。
- 避免 agency 腔、過度行銷口號與未被證實的 superiority claims。
- `zh-tw` 優先使用台灣 B2B 官網常見語氣，不做直譯腔。

## Routing Rules

- clone artifact / fidelity boundary：`reference-clone-architect`
- 高風險 scope / 決策：`uiux-pm-collaboration`
- 視覺方向與版面：`frontend-skill`
- 品牌差異化與 AI image brief：`brand-variation-director`

## Load These References When Needed

- `references/rallytech-page-templates.md`
- `references/rallytech-tone-rules.md`
- `references/rallytech-prompt-precision.md`
- `references/rallytech-copy-sensitivity-checks.md`
