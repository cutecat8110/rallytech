---
name: site-architecture
description: 在 RallyTech 類型網站任務中，需要規劃或重整 page hierarchy、navigation、URL structure、breadcrumbs 與 internal linking 時使用。特別適合獨立 IA planning、visual sitemap 與 page relationship 設計；若任務從 reference site 出發，優先用 `reference-clone-architect`。
---

# Site Architecture

把 site architecture 當成獨立的 IA planning skill，而不是 reference clone 主入口。

這個 skill 的責任是把 page hierarchy、navigation、URL structure、breadcrumbs 與 internal linking 規劃清楚；如果任務明確從 reference site 出發，應由 `reference-clone-architect` 先鎖定 artifact truth。

## 概要

- 預設目標是讓使用者與搜尋引擎都更容易理解網站結構。
- 優先輸出可實作的 hierarchy，而不是抽象 sitemap 概念。
- 不要因為 IA planning 就重開整個品牌或 page copy 討論。

## 何時使用

- 新站需要建立 page tree、nav 與 URL 規則
- 舊站需要 restructure，並處理 redirect / breadcrumb / orphan page 問題
- 需要把站點層級轉成 ASCII tree、Mermaid sitemap 與 URL map

## 先確認的輸入

1. `Business context`
   公司做什麼、主要受眾是誰、網站主要目標是什麼。
2. `Current state`
   新站或改站，現在哪裡壞掉，是否有必須保留的 URL。
3. `Site type`
   SaaS、內容站、企業官網、docs、hybrid 等。
4. `Content inventory`
   已有頁面、計畫頁面、最重要頁面與未來擴張。

若存在 `.agents/product-marketing-context.md` 或舊版 `.claude/product-marketing-context.md`，先讀再做 hierarchy。

## 核心設計規則

1. `Flat first`
   能用 2-3 層解決就不要做 4 層。
2. `Readable URLs`
   URL 要可讀、可預測、與 hierarchy 對齊。
3. `Breadcrumb alignment`
   breadcrumb 盡量鏡像 URL path。
4. `No orphan pages`
   重要頁面都要有可追蹤的 internal links。
5. `Nav discipline`
   header 不要塞爆；需要更多細節時用 dropdown、footer 或 section nav。

更完整的 patterns 請讀：
- [Site Type Templates](C:\Users\Hao.Wang\.codex\skills\site-architecture\references\rallytech-site-type-templates.md)
- [Navigation Patterns](C:\Users\Hao.Wang\.codex\skills\site-architecture\references\rallytech-navigation-patterns.md)
- [Mermaid Templates](C:\Users\Hao.Wang\.codex\skills\site-architecture\references\rallytech-mermaid-templates.md)

## 工作流程

1. 先確認站點類型、主要受眾與最重要任務。
2. 產出 page hierarchy，先定主 section，再定 L2 / L3。
3. 定義 header、footer、breadcrumb 與 section nav 的分工。
4. 定義 URL pattern、redirect constraints 與 breadcrumb 對齊。
5. 補 internal linking plan，找出 orphan page 與 hub-and-spoke 機會。
6. 交付 ASCII tree、Mermaid sitemap、URL map 與 nav spec。

## 輸出契約

預設輸出應包含：

- `Page hierarchy`
  ASCII tree + 主要 URL
- `Visual sitemap`
  Mermaid `graph TD`
- `URL map`
  page / URL / parent / nav location / priority
- `Navigation spec`
  header、footer、breadcrumb、section nav
- `Internal linking plan`
  hub pages、cross-links、orphan risks

## 路由規則

- 任務是 reference-led clone：改用 `reference-clone-architect`
- 任務是 page-level conversion：改用 `page-cro`
- 任務是 breadcrumb / site navigation schema：搭配 `schema-markup`
- 任務是 crawlability / indexing 診斷：搭配 `seo-audit`

## 需要時再讀的 References

- [Site Type Templates](C:\Users\Hao.Wang\.codex\skills\site-architecture\references\rallytech-site-type-templates.md)
- [Navigation Patterns](C:\Users\Hao.Wang\.codex\skills\site-architecture\references\rallytech-navigation-patterns.md)
- [Mermaid Templates](C:\Users\Hao.Wang\.codex\skills\site-architecture\references\rallytech-mermaid-templates.md)
