---
name: form-cro
description: 在 RallyTech 類型網站任務中，需要優化 contact form、lead form、demo request、application form 或其他非 signup 表單的轉換表現時使用。特別適合頁面結構與 CTA flow 已穩定後檢查欄位、摩擦、錯誤狀態與提交路徑；若頁面本體仍未定，先回到 `reference-clone-architect` 或 `page-cro`。
---

# Form CRO

把 form CRO 當成已穩定頁面上的轉換微調，而不是重新設計整頁。

這個 skill 是 page-level workflow 之後的 secondary specialist。它只處理欄位、摩擦、錯誤狀態、提交路徑與 form trust，不重新決定 page hierarchy 或 hero strategy。

## 概要

- 重點是降低表單摩擦，不是把表單變複雜。
- 先判斷哪些欄位真的必要，再談文案、排列與互動。
- 所有建議都要對應到更高完成率、更低疑慮或更清楚的下一步。

## 何時使用

- 頁面結構、CTA flow 與表單位置已穩定。
- 需要評估欄位數量、欄位順序、必填邏輯、error state 或 mobile submit friction。
- 需要把表單設計轉成可執行的 audit 與修正建議。

## 不適合的情境

- 首頁或服務頁本身還沒定稿：先回到 `reference-clone-architect` 或 `page-cro`
- 還在決定 CTA strategy：先用 `page-cro`
- 需要追蹤方案或 event validation：搭配 `analytics-tracking`

## 先確認的輸入

1. `Form type`
   `contact`、`lead capture`、`demo request`、`application`、`quote request` 等。
2. `Submission goal`
   送出後要發生什麼，誰接手，多久回應。
3. `Current friction`
   欄位數、放棄點、device split、error hotspots。
4. `Business constraints`
   哪些欄位真的必填、哪些是法規或內部流程要求。
5. `Context files`
   若存在 `.agents/product-marketing-context.md` 或舊版 `.claude/product-marketing-context.md`，先讀再問。

## RallyTech Form Friction Model

1. `Value vs effort`
   使用者感受到的價值，必須高於他現在要付出的填寫成本。
2. `Field cost`
   每個欄位都在消耗完成率；沒有明確用途的欄位先懷疑。
3. `Cognitive load`
   標籤、順序、分組、預設值、錯誤提示都會影響理解成本。
4. `Trust`
   CTA 附近的 assurance、隱私提示、回覆時間與下一步要清楚。
5. `Recovery`
   使用者出錯後，能否快速理解問題並繼續完成。
6. `Mobile fit`
   keyboard type、tap target、sticky CTA 與欄位高度都要顧到。

詳細欄位與版型判準請讀：
- [Field Patterns](C:\Users\Hao.Wang\.codex\skills\form-cro\references\rallytech-form-field-patterns.md)
- [Experiment Ideas](C:\Users\Hao.Wang\.codex\skills\form-cro\references\rallytech-form-experiments.md)

## 工作流程

1. 先確認表單的商業目的與送出後流程。
2. 審核欄位清單：哪些必填、哪些應延後、哪些應刪除。
3. 審核 flow：欄位順序、單欄/雙欄、多步驟是否真的必要。
4. 審核 state：預設值、validation、error message、loading、success state。
5. 審核 trust：privacy、response expectation、CTA copy、proof proximity。
6. 產出最小可行修正方案，再補 A/B test ideas。

## 輸出契約

預設輸出應包含：

- `Form audit`
  issue、impact、fix、priority
- `Recommended form design`
  required fields、optional fields、field order、CTA copy、state notes
- `Open constraints`
  法規、內部流程、tracking 需求
- `Test ideas`
  只列與目前問題直接相關的 3-5 個假設

## 路由規則

- 表單所在頁面訊息順序有問題：改用 `page-cro`
- 任務其實是 reference-led page rebuild：改用 `reference-clone-architect`
- 要補 measurement contract、submit event、field-level analytics：搭配 `analytics-tracking`

## 需要時再讀的 References

- [Field Patterns](C:\Users\Hao.Wang\.codex\skills\form-cro\references\rallytech-form-field-patterns.md)
- [Experiment Ideas](C:\Users\Hao.Wang\.codex\skills\form-cro\references\rallytech-form-experiments.md)
