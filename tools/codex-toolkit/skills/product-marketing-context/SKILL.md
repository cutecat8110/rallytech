---
name: product-marketing-context
description: 在 RallyTech 類型 repo 中，需要建立或更新可重用的 product marketing context、positioning、ICP、audience 與 message foundation 文件時使用。特別適合現有 docs 不足、需要跨技能共用市場背景時；若 repo 既有 project docs 已足夠支撐當前任務，優先直接使用那些 docs。
---

# Product Marketing Context

把 product marketing context 當成可重用的市場與定位底稿，而不是每次任務都必須先做的入口文件。

在 RallyTech 這種已有 `docs/project/` 與頁面事實的 repo 裡，這個 skill 是 optional wrapper。只有當既有文件不足以支撐多輪協作、雙語 copy 或跨技能共用時，才建立或更新 context 文件。

## 概要

- 這個 skill 產出的是可復用底稿，不是單次頁面草稿。
- 優先補齊 audience、pain、positioning、objections、customer language 與 proof。
- 如果 repo 現有文件已足夠，不要為了形式再做一份 context。

## 儲存位置

- 主檔：`.agents/product-marketing-context.md`
- 舊版相容：`.claude/product-marketing-context.md`

若只找到舊版路徑，更新時應提醒可以搬到 `.agents/`。

## 何時使用

- 多個 skill 都需要共用 audience / positioning / customer language
- 頁面文案反覆改來改去，根本問題是底層 message foundation 不清楚
- repo 現有 docs 太碎，無法快速支撐 copy、branding 與 CRO 討論

## 何時不要用

- 任務只是單頁 copy rewrite：改用 `b2b-website-copy-strategy`
- 任務只是 line editing：改用 `copy-editing`
- `docs/project/` 與當前頁面事實已經足夠：直接用那些 truth，不要另開 wrapper

## 工作流程

1. 先檢查 `.agents/product-marketing-context.md` 是否已存在。
2. 若已存在，只更新這次真的缺的 sections，不重做整份文件。
3. 若不存在，優先用 repo truth 自動起草 V1，再請使用者校正，而不是從空白開始。
4. 蒐集缺口時，優先追 verbatim customer language 與真實 objections。
5. 完成後更新日期，並清楚標示哪些段落是 repo truth、哪些是待驗證推論。

## 先確認的輸入

1. 產品或服務的一句話說法
2. 主要受眾與決策者
3. 主要 use case / jobs to be done
4. 現有替代方案與常見 objections
5. 可用的 proof：案例、數字、客戶、testimonial

詳細 section list 與問題提示請讀：
- [Context Sections](C:\Users\Hao.Wang\.codex\skills\product-marketing-context\references\rallytech-context-sections.md)

## 輸出契約

完成版 context 至少要覆蓋：

- `Product overview`
- `Target audience`
- `Problems and pain points`
- `Differentiation`
- `Objections and anti-persona`
- `Customer language`
- `Brand voice`
- `Proof points`
- `Goals`

完整模板請用：
- [Context Template](C:\Users\Hao.Wang\.codex\skills\product-marketing-context\references\rallytech-context-template.md)

## Guardrails

- 不要憑空發明 competitor facts、customer quotes 或 metrics。
- 若某段內容只是推論，必須標成待驗證。
- 不要把 page-specific copy 塞進這份文件。
- 不要讓這份文件凌駕於 `docs/project/` 與目前 live truth。

## 路由規則

- 要把 context 變成頁面 copy：改用 `b2b-website-copy-strategy`
- 要先對齊 scope / decision / artifact boundary：改用 `uiux-pm-collaboration`
- 若 repo 既有 docs 已能回答問題，直接使用它們，不必啟動本 skill

## 需要時再讀的 References

- [Context Sections](C:\Users\Hao.Wang\.codex\skills\product-marketing-context\references\rallytech-context-sections.md)
- [Context Template](C:\Users\Hao.Wang\.codex\skills\product-marketing-context\references\rallytech-context-template.md)
