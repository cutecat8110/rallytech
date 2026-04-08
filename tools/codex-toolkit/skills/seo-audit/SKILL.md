---
name: seo-audit
description: 在 RallyTech 類型 Nuxt 網站中，需要做 SEO audit、technical SEO review、crawlability check、metadata review、indexing diagnosis、RWD / SEO signoff 或 post-implementation 搜尋診斷時使用。特別適合 structure 與 implementation 已穩定後，檢查 robots、sitemap、canonical、content hierarchy、internal links、performance 與 crawlability；若要補 structured data，改用 `schema-markup`。
---

# SEO Audit

把 SEO audit 當成 implementation 後的 signoff 與診斷流程，而不是另一輪網站重規劃。

這個 skill 的責任是找出最影響 crawlability、metadata、content hierarchy 與 performance 的問題，並把修正交接清楚；沒有證據時，不要臨時發明新 sitemap 或新 page tree。

## When To Use This

Use this after these are mostly stable:

- page hierarchy
- implemented URLs
- visible page copy
- metadata ownership
- responsive layout

Typical use cases:

- pre-launch SEO and RWD signoff for a Nuxt site
- diagnose why a page is not indexing or ranking
- audit technical SEO after a clone or redesign
- verify that metadata, crawlability, and internal linking match the intended information hierarchy

If the page structure itself is still undecided, route first:

- `reference-clone-architect` for reference-led structure drift
- `site-architecture` for deliberate IA or navigation planning
- `nuxt-seo` for implementation decisions once the audit findings are clear

## Audit Order

Always audit in this order:

1. crawlability
2. page hierarchy and indexable URL shape
3. metadata and canonicals
4. content and heading structure
5. internal links and breadcrumb logic
6. performance and RWD
7. structured-data handoff

This keeps the audit aligned with real launch blockers instead of generic SEO trivia.

## Schema Detection Limitation

Do not report "no schema found" from static HTML inspection alone.

Browser-rendered JSON-LD may not appear in basic fetch output. To verify schema:

- inspect rendered DOM in a browser
- use Google Rich Results Test
- use a crawler that renders JavaScript

If schema review is a real part of the task, route to `schema-markup`.

## Inputs To Confirm

Before auditing, confirm:

- site or page scope
- production URL or preview URL
- whether the audit is pre-launch or post-launch
- whether Search Console, analytics, or crawl exports exist
- whether the main concern is indexing, ranking, metadata, or mobile performance

## RallyTech-First Checks

### 1. Crawlability

Check:

- `robots.txt`
- sitemap accessibility
- canonicalized indexable URLs
- preview or staging leakage
- accidental `noindex` or auth gating

Use [references/rallytech-crawlability-and-indexation.md](references/rallytech-crawlability-and-indexation.md) when you need a deeper pass.

### 2. Page Hierarchy

Check whether homepage, services, proof pages, about/contact, and supporting pages match the intended hierarchy. For clone work, compare SEO-facing hierarchy against the accepted artifact pack instead of improvising a new sitemap mid-audit.

### 3. Metadata

Check:

- unique title tags
- meta descriptions that match page intent
- canonical correctness
- Open Graph basics if the page is meant to be shared
- language and locale signals when bilingual pages exist

### 4. Content And Headings

Check:

- one clear H1 per page
- heading order matches block hierarchy
- service or proof claims are visible in the body, not only in meta tags
- bilingual or translated copy does not create duplicated or mismatched intent

Use [references/rallytech-content-and-heading-checks.md](references/rallytech-content-and-heading-checks.md) if this becomes the main problem area.

### 5. Internal Links

Check:

- nav and footer expose key pages
- service pages link to relevant proof or contact paths
- breadcrumbs reflect the actual hierarchy
- important pages are not buried behind only one CTA path

### 6. Performance And RWD

Check:

- major layout shifts
- oversized media
- blocking scripts or CSS
- viewport issues
- mobile readability and tap-target quality

Use [references/rallytech-performance-rwd-checks.md](references/rallytech-performance-rwd-checks.md) for detailed review prompts.

## Audit Output Contract

Return findings in this shape:

- scope
- highest-severity blockers
- important warnings
- pages or templates affected
- recommended owner or follow-up route
- verification method used

Keep findings concrete:

- what is wrong
- where it appears
- why it matters
- what skill or implementation layer should fix it

For a fuller checklist, use [references/rallytech-audit-checklist.md](references/rallytech-audit-checklist.md).

## Routing

- `nuxt-seo`: metadata, sitemap, robots, canonical, OG, schema-org implementation decisions
- `schema-markup`: structured-data implementation or validation
- `site-architecture`: deliberate page-tree or breadcrumb redesign
- `reference-clone-architect`: clone hierarchy mismatch affecting SEO truth

Keep audit findings separate from implementation details. Diagnose first, then hand off cleanly.

## Optional Appendix

If the user specifically asks about AI-generated or low-trust copy patterns, use [references/rallytech-ai-writing-detection.md](references/rallytech-ai-writing-detection.md) as an appendix, not the main audit path.
