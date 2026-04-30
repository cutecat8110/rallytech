import type {
  ProductCatalogItemMessages,
  ProductSlug
} from '~~/i18n/locales/types'

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
}

export const productVisualMeta = [
  {
    slug: 'wincc-oa',
    order: 1,
    icon: 'i-lucide-monitor-smartphone',
    heroImage: {
      src: '/images/stock/services/scada-hmi-graphics/detail-hero-control-room-operator.jpg',
      alt: 'Control room operator reviewing industrial monitoring screens',
      objectPosition: 'center'
    },
    detailFeatureImage: {
      src: '/images/stock/services/scada-hmi-graphics/industrial-hmi-operator-tablet.jpg',
      alt: 'Engineer using an industrial HMI tablet beside control equipment',
      objectPosition: 'center'
    }
  },
  {
    slug: 'aveva',
    order: 2,
    icon: 'i-lucide-database-zap',
    heroImage: {
      src: '/images/stock/services/scada-hmi-graphics/detail-hero-control-room-operator.jpg',
      alt: 'Industrial control room with operators monitoring production systems',
      objectPosition: 'center'
    },
    detailFeatureImage: {
      src: '/images/stock/services/historians/detail-hero-engineer-data-screens.jpg',
      alt: 'Engineer reviewing operations data on industrial display screens',
      objectPosition: 'center'
    }
  },
  {
    slug: 'siemens-plc',
    order: 3,
    icon: 'i-lucide-cpu',
    heroImage: {
      src: '/images/stock/services/plc-dcs-programming-and-migration/detail-hero-automation-engineer-laptop.jpg',
      alt: 'Automation engineer working beside industrial PLC equipment',
      objectPosition: 'center'
    },
    detailFeatureImage: {
      src: '/images/stock/services/plc-dcs-programming-and-migration/control-system-engineer-laptop.jpg',
      alt: 'Control system engineer reviewing PLC logic on a laptop',
      objectPosition: 'center'
    }
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
