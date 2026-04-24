import type {
  ServiceCatalogItemMessages,
  ServiceSlug
} from '~~/i18n/locales/types'

export interface ServiceVisualMeta {
  slug: ServiceSlug
  order: number
  icon: string
}

export const serviceVisualMeta = [
  {
    slug: 'scada-hmi-graphics',
    order: 1,
    icon: 'i-lucide-monitor-smartphone'
  },
  { slug: 'ie-services', order: 2, icon: 'i-lucide-briefcase-business' },
  {
    slug: 'plc-dcs-programming-and-migration',
    order: 3,
    icon: 'i-lucide-cpu'
  },
  { slug: 'pi-server', order: 4, icon: 'i-lucide-database-zap' },
  { slug: 'historians', order: 5, icon: 'i-lucide-database' },
  { slug: 'it-infrastructure', order: 6, icon: 'i-lucide-server' },
  { slug: 'cybersecurity-network', order: 7, icon: 'i-lucide-shield-check' },
  { slug: 'network-design', order: 8, icon: 'i-lucide-network' },
  { slug: 'offshore-wind-operations', order: 9, icon: 'i-lucide-wind' },
  {
    slug: 'remote-monitoring-and-data',
    order: 10,
    icon: 'i-lucide-radio-tower'
  },
  { slug: 'alarm-monitoring', order: 11, icon: 'i-lucide-bell-ring' },
  { slug: 'web-development', order: 12, icon: 'i-lucide-code-xml' }
] as const satisfies readonly ServiceVisualMeta[]

const serviceSlugSet = new Set<ServiceSlug>(
  serviceVisualMeta.map((item) => item.slug)
)

const serviceIconMap: Readonly<Record<ServiceSlug, string>> =
  serviceVisualMeta.reduce(
    (accumulator, item) => {
      accumulator[item.slug] = item.icon

      return accumulator
    },
    {} as Record<ServiceSlug, string>
  )

const serviceOrderMap: Readonly<Record<ServiceSlug, number>> =
  serviceVisualMeta.reduce(
    (accumulator, item) => {
      accumulator[item.slug] = item.order

      return accumulator
    },
    {} as Record<ServiceSlug, number>
  )

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugSet.has(value as ServiceSlug)
}

export function getServiceIcon(slug: ServiceSlug) {
  return serviceIconMap[slug]
}

export function getServiceOrder(slug: ServiceSlug) {
  return serviceOrderMap[slug]
}

export function enrichServiceCatalog(
  items: readonly ServiceCatalogItemMessages[]
) {
  return items.map((item) => ({
    ...item,
    icon: getServiceIcon(item.slug),
    order: getServiceOrder(item.slug)
  }))
}
