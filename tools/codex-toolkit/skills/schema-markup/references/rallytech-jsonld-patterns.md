# RallyTech JSON-LD Patterns

Use JSON-LD as the default format.

## Single Node

Best when one type cleanly represents the page:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example",
  "url": "https://example.com"
}
```

## Graph

Use `@graph` when organization, website, breadcrumb, or FAQ data should be emitted together.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "name": "Example" },
    { "@type": "WebSite", "name": "Example" }
  ]
}
```

Keep payloads readable and avoid unsupported or invented fields.
