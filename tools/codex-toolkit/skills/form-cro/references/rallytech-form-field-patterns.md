# Field Patterns

## 常見欄位判準

### Email

- 優先單欄位，不做 email confirmation
- 要有合理 keyboard type 與 inline validation
- 拼字修正若可做，優先做

### Name

- 不一定要拆 first / last name
- 若只為了聯絡與辨識，單一 `Name` 通常更低摩擦

### Phone

- 沒有明確使用理由就不要設必填
- 若必填，要說明為什麼需要
- 手機上要處理格式與國碼

### Company / Organization

- 沒有真的參與 routing 或 follow-up，就不要先問
- 能 enrichment 的資訊，盡量不要搶在表單前面問

### Message / Comments

- 若不是必要 qualification，應考慮 optional
- 給使用者簡短提示，不要把 placeholder 當 label

## 版型判準

- 預設單欄優先
- 多欄只留給短、成對且高度相關的欄位
- 欄位順序由低摩擦到高摩擦
- CTA 與隱私保證盡量靠近最後一步

## State 判準

- validation 要明確，但不要一邊輸入一邊過度打斷
- error message 要靠近欄位，且不要清空既有輸入
- success state 要說清楚接下來會發生什麼
