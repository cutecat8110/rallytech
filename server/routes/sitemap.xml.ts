import { SITE_URL } from '../../shared/seo'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <sitemap><loc>${SITE_URL}/page-sitemap.xml</loc></sitemap>`,
    '</sitemapindex>'
  ].join('\n')
})
