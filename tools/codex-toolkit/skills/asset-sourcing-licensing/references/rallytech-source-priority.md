# RallyTech Source Priority

## Priority Order

1. Unsplash API
2. Pexels API
3. Pixabay API

## Required Environment Variables

- `UNSPLASH_ACCESS_KEY`
- `PEXELS_API_KEY`
- `PIXABAY_API_KEY`

## Usage Notes

### Unsplash

- Use the official API.
- Follow API guidelines, including download tracking.
- Keep the asset page URL and photographer name in the sourcing log.

### Pexels

- Use the official API with the authorization header.
- Keep the original asset page URL and photographer attribution.

### Pixabay

- Use the official API key.
- Keep the source page URL and selected file variant.

## Minimum Sourcing Record

- page or block target
- chosen keyword
- source site
- creator
- asset page URL
- download URL
- filename suggestion
- licensing note

## Helper Script

- `scripts/fetch-stock-candidates.mjs` searches one provider or falls back across providers.
- Example: `node scripts/fetch-stock-candidates.mjs --query "industrial control room" --provider auto --per-page 6`
