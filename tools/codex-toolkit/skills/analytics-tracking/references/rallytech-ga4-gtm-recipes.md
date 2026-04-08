# RallyTech GA4 / GTM Recipes

Use these patterns when turning the contract into instrumentation.

## Direct GA4

Use direct `gtag` only when the implementation is simple and ownership is clear.

```javascript
gtag("event", "cta_primary_clicked", {
  cta_label: "Contact Us",
  cta_location: "hero",
  page_type: "homepage"
});
```

## dataLayer First

Prefer this when GTM owns tag delivery:

```javascript
dataLayer.push({
  event: "contact_form_submitted",
  form_name: "contact",
  page_type: "service",
  submit_state: "success"
});
```

## When To Use Which

- Direct GA4: fewer moving parts, implementation-owned analytics
- GTM/dataLayer: marketing or analytics team needs flexible tag management

Read these existing references for deeper implementation detail:

- [rallytech-ga4-implementation.md](rallytech-ga4-implementation.md)
- [rallytech-gtm-implementation.md](rallytech-gtm-implementation.md)
