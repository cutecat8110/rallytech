---
name: analytics-tracking
description: 在 RallyTech 類型網站已接近完成後，需要規劃、驗證或稽核 GA4 / GTM measurement contract、CTA 追蹤、contact form 追蹤、conversion tracking、event tracking、analytics QA 或 post-launch measurement 時使用。特別適合 structure、copy 與 implementation 已穩定後，定義 event names、parameters、validation 與 PII guardrails；若頁面策略仍未定，先回到 `reference-clone-architect`、`page-cro` 或 `form-cro`。
---

# Analytics Tracking

把 analytics 當成 implementation 完成後的 measurement contract，而不是另一輪頁面策略討論。

這個 skill 的責任是定義要量什麼、怎麼命名、怎麼驗證，以及哪些資料不能送；它不應重新打開 page hierarchy、CTA strategy 或 form design 的決策。

## When To Use This

Use this skill when the page already has stable:

- structure
- CTA flow
- visible labels
- form fields
- implementation ownership

Typical RallyTech use cases:

- define CTA and contact-form tracking after launch-ready UI exists
- create a measurement contract for a cloned or redesigned page
- verify whether GA4 or GTM implementation matches the intended conversions
- audit whether events are firing cleanly without duplicates or PII leakage

If structure or fidelity is still moving, route back first:

- `reference-clone-architect` for clone hierarchy or page-flow drift
- `page-cro` for page-level conversion decisions
- `form-cro` for form friction or field-level optimization

## Core Principle

Track decisions, not vanity.

Every event in the contract should answer one of these questions:

- did the user reach the intended CTA?
- did the user attempt or complete contact intent?
- which proof or service interaction mattered?
- which channel or entry path led to the action?

## RallyTech Conversion Objects

Start from these common objects:

- primary CTA clicks
- secondary CTA clicks
- contact form start
- contact form submit success
- service inquiry selection or service-card click
- proof interactions such as case-study, certification, or trust-logo engagement
- outbound contact actions such as phone, email, LINE, map, or calendar links

Only add deeper interaction events if they support a real decision.

## Inputs To Confirm

Before writing the contract, confirm:

- page or flow being measured
- current CTA labels and placement
- form names and success states
- analytics transport choice: direct GA4, GTM, or dataLayer-first
- privacy constraints and whether personal data appears in form fields or query params

If labels are likely to change, define stable event names and keep the changing text in parameters.

## Measurement Contract

Default output shape:

```text
Object | Event name | Trigger | Parameters | Destination | Conversion? | Validation note
```

Example:

```text
Primary CTA | cta_primary_clicked | click on hero CTA | cta_label, cta_location, page_type | GA4 via GTM | candidate | verify once on desktop and mobile
```

For a fuller template, read [references/rallytech-measurement-contract.md](references/rallytech-measurement-contract.md).

## Workflow

1. Freeze the page surface that will be measured.
2. Map visible conversion objects to event names.
3. Define the minimum useful parameters.
4. Decide whether each event is:
   - informational only
   - funnel support
   - conversion candidate
5. Choose implementation path:
   - direct `gtag`
   - GTM trigger/tag
   - dataLayer push feeding GTM
6. Write validation steps before implementation is declared done.

## Naming And Parameter Guardrails

- Use stable object-action event names such as `cta_primary_clicked` or `contact_form_submitted`.
- Keep page labels, CTA copy, and campaign details in parameters when they may change.
- Prefer a small parameter set that the team will actually maintain.
- Avoid duplicating fields already available automatically unless you need a normalized value.

For detailed naming patterns and examples, use:

- [references/rallytech-event-library.md](references/rallytech-event-library.md)
- [references/rallytech-ga4-gtm-recipes.md](references/rallytech-ga4-gtm-recipes.md)

## Privacy And Validation Guardrails

Never intentionally send:

- full names
- email addresses
- phone numbers
- free-text message contents
- any other direct PII

Always validate:

- event fires exactly once
- parameters are populated correctly
- desktop and mobile behavior match
- form success state is captured instead of only button click
- no duplicate pageview or conversion events appear

Use [references/rallytech-validation-checklist.md](references/rallytech-validation-checklist.md) for the full pass.

## Implementation Routing

- Use existing detailed implementation notes when the transport layer matters:
  - [references/rallytech-ga4-implementation.md](references/rallytech-ga4-implementation.md)
  - [references/rallytech-gtm-implementation.md](references/rallytech-gtm-implementation.md)
- Route back to `reference-clone-architect` if the tracked object itself is not stable.
- Route to `page-cro` or `form-cro` if the measurement request is actually asking for conversion redesign rather than instrumentation.

## Reporting Contract

Return:

- scope measured
- conversion objects
- finalized event names
- parameter list
- implementation path
- validation plan
- risks or open decisions

Keep the output implementation-ready. Do not bury the answer in generic analytics theory.
