---
name: copy-editing
description: 在 RallyTech 類型網站已有 draft copy 後，需要做 line editing、語氣校正、清晰度提升、句子修整或 copy sweep 時使用。特別適合已存在頁面策略與文案骨架後的潤稿、proofread 與 wording refinement；若任務是從零規劃頁面文案或雙語 message stack，改用 `b2b-website-copy-strategy`。
---

# Copy Editing

把 copy editing 當成既有文案的精修流程，而不是重做 page strategy。

這個 skill 是文案工作流裡的 secondary wrapper。它只在 draft、page role 與 message stack 已經穩定後啟用；如果連要講什麼都還沒鎖定，先回到 `b2b-website-copy-strategy`。

## 概要

- 目標是提升清晰度、語氣一致性、可讀性與 CTA 附近的說服力。
- 不要把 line editing 假裝成重新定位、重新規劃頁面或重新發明 proof。
- 任何大幅改寫都要標示理由，避免把原始意圖悄悄改掉。

## 何時使用

- 已有 draft copy，需要精修或 sweep。
- 頁面任務、目標讀者與 CTA 已經明確。
- 需要把 wording 修準，但不想重新打開整頁策略。

## 先確認的輸入

1. 這段 copy 的任務是什麼：說服、導流、解釋、建立信任，還是促成 CTA。
2. 讀者是誰，對產品或服務已知多少。
3. 哪些句子不能改掉原意，哪些句子可重寫。
4. 可用的 proof、數字、案例與限制有哪些。
5. 如果存在 `.agents/product-marketing-context.md` 或舊版 `.claude/product-marketing-context.md`，先讀再編。

## 七輪精修流程

依序跑七輪 sweep。每一輪只修一種問題，避免一邊改語氣一邊把證據改丟。

1. `Clarity`
   把不清楚、句型過重、主詞不明或需要背景知識才能懂的句子修順。
2. `Voice and Tone`
   檢查前後段落是否像同一家公司、同一個頁面在說話。
3. `So What`
   每個 feature、能力或主張都要回答「所以對讀者有什麼差別」。
4. `Prove It`
   找出需要證據的句子，補 proof 或降低誇大程度。
5. `Specificity`
   把空泛形容詞改成更具體的數字、時間、例子或可驗證描述。
6. `Heightened Emotion`
   讓痛點、風險、轉變與期待更有感，但不要變成操弄。
7. `Zero Risk`
   在 CTA 附近清掉疑慮、補上信任與下一步說明。

詳細判準請讀：
- [Seven Sweeps](C:\Users\Hao.Wang\.codex\skills\copy-editing\references\rallytech-seven-sweeps.md)
- [Copy Checklist](C:\Users\Hao.Wang\.codex\skills\copy-editing\references\rallytech-copy-checklist.md)

## 工作流程

1. 先標出不可改動的主張、法務限制、關鍵術語與 proof。
2. 讀完整段 copy，不急著重寫，先判斷目前最傷的問題在哪一輪。
3. 依 sweep 順序給出修改建議，不要把所有建議混成一坨。
4. 對於高風險改動，明確寫出「原句問題 / 建議改法 / 原因」。
5. 完成後再跑一次快速檢查，確認沒有因為精修破壞原始訊息。

## 輸出契約

預設輸出應包含：

- `Edited copy`
- `Top issues fixed`
- `High-risk claims to verify`
- `Open questions`

若使用者要逐句修訂，保留原句與改寫句的對照；若只是要精修方向，則交付可執行的 rewrite notes。

## 路由規則

- 如果頁面訊息、段落順序或雙語 message stack 還沒定：改用 `b2b-website-copy-strategy`
- 如果問題已經超出 wording，進入 CTA flow、proof placement 或 page-level friction：改用 `page-cro`
- 如果連 audience、positioning 或客戶語言都還不夠清楚：先補 `product-marketing-context`

## 需要時再讀的 References

- [Seven Sweeps](C:\Users\Hao.Wang\.codex\skills\copy-editing\references\rallytech-seven-sweeps.md)
- [Copy Checklist](C:\Users\Hao.Wang\.codex\skills\copy-editing\references\rallytech-copy-checklist.md)
- [Plain English Alternatives](C:\Users\Hao.Wang\.codex\skills\copy-editing\references\rallytech-plain-english-alternatives.md)
