---
name: schema-markup
description: 在 RallyTech 類型 Nuxt 網站中，需要新增、修正、驗證或優化 schema markup / structured data 時使用。特別適合 JSON-LD、schema.org、FAQ schema、breadcrumb schema、organization schema、rich results 驗證與 post-implementation schema handoff；前提是 structure、visible content 與 breadcrumb logic 已穩定，若是 broader SEO 診斷，改用 `seo-audit`。
---

# Schema Markup

把 schema markup 當成 Nuxt 網站的 structured-data implementation specialist，而不是 rich results 願望清單。

這個 skill 的責任是決定哪些 schema 真正有用、如何和 visible content 對齊、以及怎麼乾淨地交付 implementation 與 validation；不要替頁面發明它沒有的意義。

## When To Use This

Use this after these are stable:

- page structure
- visible headings and copy
- breadcrumb logic
- ownership of metadata or schema injection

Typical use cases:

- add organization and website schema to a company site
- add breadcrumb schema once page hierarchy is stable
- add FAQ schema when real visible FAQ content exists
- review existing JSON-LD after a Nuxt implementation

If page structure is still moving, route back first:

- `reference-clone-architect` for reference-driven hierarchy
- `site-architecture` for explicit breadcrumb or page-tree decisions
- `nuxt-seo` for the implementation layer once schema intent is decided

## RallyTech Schema Priority

Default priority order:

1. `Organization`
2. `WebSite`
3. service-like page schema only if the page clearly supports it
4. `FAQPage` when the FAQ is visible and real
5. `BreadcrumbList`

Do not chase rich-result types just because they exist in schema.org. Start with what improves understanding of the actual site.

Use [references/rallytech-schema-priority.md](references/rallytech-schema-priority.md) for decision details.

## Core Rules

### Visible-Content Alignment

Schema must match what a user can actually see on the page.

Do not add:

- fake FAQ entries
- invented reviews
- service claims that the page body does not support
- breadcrumb items that do not match the live hierarchy

### JSON-LD First

Prefer JSON-LD because it is easier to review, validate, and keep aligned with Nuxt SEO tooling.

### Stable Ownership

Before writing markup, decide where ownership lives:

- `nuxt-seo` or schema-org integration
- page-level head configuration
- reusable app-level organization or website schema

## Inputs To Confirm

Before implementation, confirm:

- page type or site-wide scope
- visible content available to support the schema
- whether JSON-LD already exists
- who owns metadata and head output
- whether the goal is richer search appearance, knowledge signals, or cleaner machine understanding

## Workflow

1. Confirm the page meaning from visible content.
2. Choose the minimum viable schema types.
3. Decide whether one node or an `@graph` is cleaner.
4. Draft JSON-LD with only real supported properties.
5. Validate the result.
6. Hand back implementation notes and follow-up checks.

Use [references/rallytech-jsonld-patterns.md](references/rallytech-jsonld-patterns.md) when you need implementation patterns.

## Output Contract

Return:

- chosen schema types
- why each type is justified
- JSON-LD payload
- where it should be implemented
- how it should be validated
- any missing content or hierarchy blockers

Keep the answer implementation-ready instead of returning a generic list of schema.org types.

## Validation Path

Always validate with:

- rendered DOM inspection when needed
- Google Rich Results Test
- Schema.org Validator

Also confirm:

- values are fully qualified and normalized
- breadcrumb URLs are canonical
- FAQ content matches visible content
- organization details match site-wide truth

Use [references/rallytech-validation-and-rich-results.md](references/rallytech-validation-and-rich-results.md) for the full checklist.

## Routing

- `nuxt-seo`: actual implementation path in Nuxt
- `seo-audit`: broader SEO review or launch signoff
- `site-architecture`: breadcrumb or hierarchy planning

## References

- [references/rallytech-schema-priority.md](references/rallytech-schema-priority.md)
- [references/rallytech-jsonld-patterns.md](references/rallytech-jsonld-patterns.md)
- [references/rallytech-validation-and-rich-results.md](references/rallytech-validation-and-rich-results.md)
- [references/rallytech-schema-examples.md](references/rallytech-schema-examples.md)
