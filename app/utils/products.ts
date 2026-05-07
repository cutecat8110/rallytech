import type {
  ProductCatalogItemMessages,
  ProductSlug
} from '~~/i18n/locales/types'

export interface ProductContentImageMeta {
  id: string
  src: string
  alt: string
  objectPosition?: string
}

export interface ProductVisualMeta {
  slug: ProductSlug
  order: number
  icon: string
  heroImage: {
    src: string
    alt: string
    objectPosition?: string
  }
  detailFeatureImage: {
    src: string
    alt: string
    objectPosition?: string
  }
  contentImages?: ProductContentImageMeta[]
}

export const productVisualMeta = [
  {
    slug: 'wincc-oa',
    order: 1,
    icon: 'i-lucide-monitor-smartphone',
    heroImage: {
      src: '/images/placeholders/grayscale/hero.svg',
      alt: 'Control room operator reviewing industrial monitoring screens',
      objectPosition: 'center'
    },
    detailFeatureImage: {
      src: '/images/references/dmc/wincc-oa/dmc-wincc-oa-scada-hmi-platform.jpg',
      alt: 'SIMATIC WinCC OA SCADA and HMI platform reference image',
      objectPosition: 'center'
    },
    contentImages: [
      {
        id: 'partner-ecosystem',
        src: '/images/references/dmc/wincc-oa/dmc-wincc-oa-premium-solution-partner.jpg',
        alt: 'SIMATIC WinCC OA Premium Solution Partner reference badge',
        objectPosition: 'center'
      },
      {
        id: 'optional-extensions',
        src: '/images/references/dmc/wincc-oa/dmc-wincc-oa-optional-extensions.png',
        alt: 'WinCC OA optional extensions reference diagram',
        objectPosition: 'center'
      }
    ]
  },
  {
    slug: 'aveva',
    order: 2,
    icon: 'i-lucide-database-zap',
    heroImage: {
      src: '/images/placeholders/grayscale/hero.svg',
      alt: 'Industrial control room with operators monitoring production systems',
      objectPosition: 'center'
    },
    detailFeatureImage: {
      src: '/images/references/dmc/aveva/dmc-aveva-historian-client-web.png',
      alt: 'AVEVA Historian client web reference image',
      objectPosition: 'center'
    },
    contentImages: [
      {
        id: 'partner-ecosystem',
        src: '/images/references/dmc/aveva/dmc-aveva-certified-system-integrator.png',
        alt: 'AVEVA System Integrator badge reference image',
        objectPosition: 'center'
      }
    ]
  },
  {
    slug: 'siemens-plc',
    order: 3,
    icon: 'i-lucide-cpu',
    heroImage: {
      src: '/images/placeholders/grayscale/hero.svg',
      alt: 'Automation engineer working beside industrial PLC equipment',
      objectPosition: 'center'
    },
    detailFeatureImage: {
      src: '/images/references/dmc/siemens-plc/dmc-siemens-s7-1500-plc.jpg',
      alt: 'Siemens SIMATIC S7-1500 PLC reference image',
      objectPosition: 'center'
    },
    contentImages: [
      {
        id: 's7-1200',
        src: '/images/references/dmc/siemens-plc/dmc-siemens-s7-1200-plc.jpg',
        alt: 'Siemens SIMATIC S7-1200 PLC reference image',
        objectPosition: 'center'
      },
      {
        id: 'tia-portal',
        src: '/images/references/dmc/siemens-plc/dmc-siemens-tia-portal.jpg',
        alt: 'Siemens TIA Portal configuration reference image',
        objectPosition: 'center'
      },
      {
        id: 'pcs7',
        src: '/images/references/dmc/siemens-plc/dmc-siemens-pcs7-screenshot.jpg',
        alt: 'Siemens PCS7 reference screenshot',
        objectPosition: 'center'
      }
    ]
  }
] as const satisfies readonly ProductVisualMeta[]

const productSlugSet = new Set<ProductSlug>(
  productVisualMeta.map((item) => item.slug)
)

const productIconMap: Readonly<Record<ProductSlug, string>> =
  productVisualMeta.reduce(
    (accumulator, item) => {
      accumulator[item.slug] = item.icon

      return accumulator
    },
    {} as Record<ProductSlug, string>
  )

const productHeroImageMap: Readonly<
  Record<ProductSlug, ProductVisualMeta['heroImage']>
> = productVisualMeta.reduce(
  (accumulator, item) => {
    accumulator[item.slug] = item.heroImage

    return accumulator
  },
  {} as Record<ProductSlug, ProductVisualMeta['heroImage']>
)

const productDetailFeatureImageMap: Readonly<
  Record<ProductSlug, ProductVisualMeta['detailFeatureImage']>
> = productVisualMeta.reduce(
  (accumulator, item) => {
    accumulator[item.slug] = item.detailFeatureImage

    return accumulator
  },
  {} as Record<ProductSlug, ProductVisualMeta['detailFeatureImage']>
)

const productContentImagesMap: Readonly<
  Partial<Record<ProductSlug, NonNullable<ProductVisualMeta['contentImages']>>>
> = productVisualMeta.reduce(
  (accumulator, item) => {
    if ('contentImages' in item && item.contentImages?.length) {
      accumulator[item.slug] = item.contentImages
    }

    return accumulator
  },
  {} as Partial<
    Record<ProductSlug, NonNullable<ProductVisualMeta['contentImages']>>
  >
)

const productOrderMap: Readonly<Record<ProductSlug, number>> =
  productVisualMeta.reduce(
    (accumulator, item) => {
      accumulator[item.slug] = item.order

      return accumulator
    },
    {} as Record<ProductSlug, number>
  )

export function isProductSlug(value: string): value is ProductSlug {
  return productSlugSet.has(value as ProductSlug)
}

export function getProductIcon(slug: ProductSlug) {
  return productIconMap[slug]
}

export function getProductHeroImage(slug: ProductSlug) {
  return productHeroImageMap[slug]
}

export function getProductDetailFeatureImage(slug: ProductSlug) {
  return productDetailFeatureImageMap[slug]
}

export function getProductContentImages(slug: ProductSlug) {
  return productContentImagesMap[slug] ?? []
}

export function getProductContentImage(slug: ProductSlug, imageId?: string) {
  if (!imageId) {
    return undefined
  }

  return productContentImagesMap[slug]?.find((image) => image.id === imageId)
}

export function getProductOrder(slug: ProductSlug) {
  return productOrderMap[slug]
}

export function enrichProductCatalog(
  items: readonly ProductCatalogItemMessages[]
) {
  return items.map((item) => ({
    ...item,
    icon: getProductIcon(item.slug),
    order: getProductOrder(item.slug)
  }))
}
