/* eslint-disable @stylistic/quote-props */
import type { PublicLocaleCode, ServiceSlug } from '../i18n/locales/types'

export const SITE_URL = 'https://www.rallytech.com.tw'
export const SITE_NAME = 'Rally Technology'

export const PUBLIC_SITE_LOCALES = [
  {
    code: 'zh-tw',
    language: 'zh-TW',
    ogLocale: 'zh_TW'
  },
  {
    code: 'en',
    language: 'en-US',
    ogLocale: 'en_US'
  }
] as const

export const PUBLIC_PAGE_PATHS = [
  '/',
  '/about',
  '/services',
  '/one-touch-experience',
  '/contact'
] as const

export const PUBLIC_SERVICE_SLUGS = [
  'scada-hmi-graphics',
  'ie-services',
  'plc-dcs-programming-and-migration',
  'pi-server',
  'historians',
  'it-infrastructure',
  'cybersecurity-network',
  'network-design',
  'offshore-wind-operations',
  'remote-monitoring-and-data',
  'alarm-monitoring',
  'web-development'
] as const satisfies readonly ServiceSlug[]

function normalizePath(path: string) {
  if (!path) {
    return '/'
  }

  return path.startsWith('/') ? path : `/${path}`
}

export function isPublicLocaleCode(code: string): code is PublicLocaleCode {
  return PUBLIC_SITE_LOCALES.some((entry) => entry.code === code)
}

export function getPublicLocaleEntry(code: string) {
  return (
    PUBLIC_SITE_LOCALES.find((entry) => entry.code === code) ??
    PUBLIC_SITE_LOCALES[0]
  )
}

export function getLocalizedPath(locale: PublicLocaleCode, path: string) {
  const normalizedPath = normalizePath(path)

  if (locale === 'en') {
    return normalizedPath === '/' ? '/en' : `/en${normalizedPath}`
  }

  return normalizedPath
}

export function withSiteUrl(path: string) {
  return new URL(normalizePath(path), SITE_URL).toString()
}

export function createBreadcrumbSchema(
  items: Array<{
    name: string
    path: string
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: withSiteUrl(item.path)
    }))
  }
}

export function createItemListSchema(
  name: string,
  items: Array<{
    name: string
    path: string
    description?: string
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: withSiteUrl(item.path),
      name: item.name,
      ...(item.description ? { description: item.description } : {})
    }))
  }
}

export function createServiceSchema(
  name: string,
  description: string,
  path: string,
  providerName: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url: withSiteUrl(path),
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: SITE_URL
    }
  }
}

export function createSiteGraph(input: {
  locale: PublicLocaleCode
  organizationName: string
  alternateNames: string[]
  description: string
  telephone: string
  email: string
  address: string
  addressEnglish: string
}) {
  const addressValue =
    input.locale === 'zh-tw' ? input.address : input.addressEnglish

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: input.organizationName,
        alternateName: input.alternateNames.filter(Boolean),
        url: SITE_URL,
        logo: withSiteUrl('/images/brand/RallyTech_FullLogo.svg'),
        description: input.description,
        foundingDate: '2014',
        email: input.email,
        telephone: input.telephone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: addressValue,
          addressCountry: 'TW'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: input.email,
          telephone: input.telephone,
          availableLanguage: PUBLIC_SITE_LOCALES.map((entry) => entry.language)
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: input.description,
        inLanguage: PUBLIC_SITE_LOCALES.map((entry) => entry.language),
        publisher: {
          '@id': `${SITE_URL}/#organization`
        },
        audience: {
          '@type': 'Audience',
          geographicArea: {
            '@type': 'Country',
            name: 'Taiwan'
          }
        },
        availableLanguage: PUBLIC_SITE_LOCALES.map((entry) => entry.language),
        isAccessibleForFree: true,
        encodingFormat: 'text/html',
        image: withSiteUrl('/images/brand/RallyTech_FullLogo.svg'),
        provider: {
          '@id': `${SITE_URL}/#organization`
        },
        about: {
          '@id': `${SITE_URL}/#organization`
        }
      }
    ]
  }
}
