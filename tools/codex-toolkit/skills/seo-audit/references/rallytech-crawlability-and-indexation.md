# RallyTech Crawlability And Indexation

Check these first because they can nullify the rest of the audit.

## Must Check

- `robots.txt` allows the important pages
- XML sitemap exists and points to canonical URLs
- canonical tags are present and consistent
- preview domains are not indexable if they should stay private
- no accidental `noindex`, redirect loops, or soft-404 behavior

## Useful Evidence

- fetched `robots.txt`
- sitemap URL list
- page source or rendered DOM for canonical and robots meta
- Search Console or crawler exports if available

If failures here are severe, report them before discussing content quality.
