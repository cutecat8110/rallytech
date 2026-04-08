#!/usr/bin/env node

const providerAliases = new Set(['auto', 'unsplash', 'pexels', 'pixabay'])

function parseArgs(argv) {
  const args = { provider: 'auto', perPage: 6 }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--query') args.query = argv[++i]
    else if (arg === '--provider') args.provider = argv[++i]
    else if (arg === '--per-page') args.perPage = Number(argv[++i])
  }
  return args
}

function assertArgs(args) {
  if (!args.query || !args.query.trim()) {
    throw new Error('Missing required --query value.')
  }
  if (!providerAliases.has(args.provider)) {
    throw new Error(`Unsupported provider: ${args.provider}`)
  }
  if (!Number.isFinite(args.perPage) || args.perPage < 1 || args.perPage > 30) {
    throw new Error('--per-page must be between 1 and 30.')
  }
}

function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48)
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options)
  if (!response.ok) {
    const body = await response.text()
    throw new Error(`HTTP ${response.status} for ${url}\n${body.slice(0, 300)}`)
  }
  return response.json()
}

async function searchUnsplash(query, perPage) {
  const key = process.env.UNSPLASH_ACCESS_KEY
  if (!key) return []
  const url = new URL('https://api.unsplash.com/search/photos')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(perPage))
  const data = await fetchJson(url, {
    headers: {
      Authorization: `Client-ID ${key}`
    }
  })
  return (data.results || []).map((item) => ({
    provider: 'unsplash',
    query,
    id: item.id,
    photographer: item.user?.name || '',
    sourcePageUrl: item.links?.html || '',
    previewUrl: item.urls?.small || item.urls?.thumb || '',
    downloadUrl: item.links?.download_location || item.links?.download || '',
    useNote: 'Use the official download tracking URL before final download.',
    filenameSuggestion: `${slugify(query)}-unsplash-${item.id}.jpg`
  }))
}

async function searchPexels(query, perPage) {
  const key = process.env.PEXELS_API_KEY
  if (!key) return []
  const url = new URL('https://api.pexels.com/v1/search')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(perPage))
  const data = await fetchJson(url, {
    headers: {
      Authorization: key
    }
  })
  return (data.photos || []).map((item) => ({
    provider: 'pexels',
    query,
    id: String(item.id),
    photographer: item.photographer || '',
    sourcePageUrl: item.url || '',
    previewUrl: item.src?.medium || item.src?.small || '',
    downloadUrl: item.src?.original || item.src?.large2x || '',
    useNote: 'Keep the photographer name and source URL in the sourcing log.',
    filenameSuggestion: `${slugify(query)}-pexels-${item.id}.jpg`
  }))
}

async function searchPixabay(query, perPage) {
  const key = process.env.PIXABAY_API_KEY
  if (!key) return []
  const url = new URL('https://pixabay.com/api/')
  url.searchParams.set('key', key)
  url.searchParams.set('q', query)
  url.searchParams.set('image_type', 'photo')
  url.searchParams.set('per_page', String(perPage))
  const data = await fetchJson(url)
  return (data.hits || []).map((item) => ({
    provider: 'pixabay',
    query,
    id: String(item.id),
    photographer: item.user || '',
    sourcePageUrl: item.pageURL || '',
    previewUrl: item.webformatURL || item.previewURL || '',
    downloadUrl: item.largeImageURL || item.fullHDURL || item.imageURL || '',
    useNote: 'Keep the source page URL and selected image variant in the sourcing log.',
    filenameSuggestion: `${slugify(query)}-pixabay-${item.id}.jpg`
  }))
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  assertArgs(args)

  const providers = args.provider === 'auto'
    ? ['unsplash', 'pexels', 'pixabay']
    : [args.provider]

  const results = []
  for (const provider of providers) {
    if (provider === 'unsplash') results.push(...await searchUnsplash(args.query, args.perPage))
    if (provider === 'pexels') results.push(...await searchPexels(args.query, args.perPage))
    if (provider === 'pixabay') results.push(...await searchPixabay(args.query, args.perPage))
    if (results.length > 0 && args.provider === 'auto') break
  }

  if (results.length === 0) {
    console.error('No results found. Check API keys or try another query.')
    process.exit(1)
  }

  console.log(JSON.stringify({
    query: args.query,
    provider: args.provider,
    count: results.length,
    results
  }, null, 2))
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
