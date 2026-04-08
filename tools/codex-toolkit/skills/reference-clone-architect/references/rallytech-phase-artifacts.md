# RallyTech Phase Artifacts

Use these templates when the repo does not already define a stricter artifact format.

## Clone Brief

- `Reference input`: URL, screenshot, or reference file set
- `Page scope`: single page, homepage + inner page, or multi-page
- `Reference truth`: what must be copied faithfully
- `Similarity target`: what counts as success for the fidelity pass
- `Allowed modernization`: what can be cleaned up without breaking fidelity
- `Token substitution`: which colors, type, radius, and component rules must return to the local design system
- `Brand constraints`: what must remain company-specific
- `Defer list`: what is explicitly not part of this round

## Capture Pack

- `Evidence paths`: screenshot files, capture summaries, notes, and raw sources
- `Viewport set`: desktop, tablet, mobile
- `Block captures`: per-block screenshots when available
- `Visible text`: raw text grouped by block
- `Interaction states`: nav, accordion, tab, hover, form, sticky, or reveal states
- `Media inventory`: hero, section images, icons, logos, video placeholders
- `Asset anomalies`: broken images, template leftovers, anti-bot gaps, or lazy-load uncertainty

## Architecture Pack

- `IA map`: pages and shared layout surfaces
- `Block map`: ordered sections for the current page
- `Component inventory`: sections, clusters, primitives, and repeated patterns
- `Layout grammar`: shells, rails, columns, spacing rhythm, and breakpoint behavior
- `Style inventory`: surfaces, type scale, borders, radius, shadows, overlays, imagery treatment
- `Content inventory`: message stack, CTA stack, proof stack, and residual content
- `Interaction inventory`: behaviors that affect structure or state

## Implementation Contract

- `Route / page assembly`: route, page entrypoint, and section order
- `Section ownership`: which component owns which block
- `Primitive / component mapping`: local primitives and Nuxt UI components to use
- `Nuxt UI mapping`: buttons, inputs, tabs, accordions, overlays, or form components
- `Token substitution map`: what goes through `main.css`, `app.config.ts`, `<UTheme>`, or local class utilities
- `Asset plan`: sourced image, generated image, or placeholder strategy
- `QA checklist`: viewport, interaction, copy, and design-system checks

## Variation Brief

- `Variant goal`: what differentiates the brand version
- `Allowed changes`: palette, type tone, imagery, proof emphasis, CTA emphasis, copy tone
- `Protected fidelity boundary`: what block order, hierarchy, and interactions cannot change
- `Copy rewrite intent`: what message depth or trust layer is being improved
- `Image prompt baseline`: starting prompt or source direction for generated/supporting visuals
- `CRO / SEO / analytics layer`: only after fidelity lock
