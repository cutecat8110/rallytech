import {
  PUBLIC_PAGE_PATHS,
  PUBLIC_SERVICE_SLUGS,
  PUBLIC_SITE_LOCALES,
  getLocalizedPath,
  withSiteUrl
} from '../../shared/seo'

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')

  const urls = [
    ...PUBLIC_SITE_LOCALES.flatMap((locale) =>
      PUBLIC_PAGE_PATHS.map((path) =>
        withSiteUrl(getLocalizedPath(locale.code, path))
      )
    ),
    ...PUBLIC_SITE_LOCALES.flatMap((locale) =>
      PUBLIC_SERVICE_SLUGS.map((slug) =>
        withSiteUrl(getLocalizedPath(locale.code, `/services/${slug}`))
      )
    )
  ]

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`),
    '</urlset>'
  ].join('\n')
})
