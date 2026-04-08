import type {
  ServiceCatalogItemMessages,
  ServiceSlug
} from '~~/i18n/locales/types'

export interface ServiceVisualMeta {
  slug: ServiceSlug
  icon: string
}

export const serviceVisualMeta = [
  { slug: 'scada-hmi-graphics', icon: 'i-lucide-monitor-smartphone' },
  { slug: 'ie-services', icon: 'i-lucide-briefcase-business' },
  { slug: 'plc-dcs-programming-and-migration', icon: 'i-lucide-cpu' },
  { slug: 'pi-server', icon: 'i-lucide-database-zap' },
  { slug: 'historians', icon: 'i-lucide-database' },
  { slug: 'network-design', icon: 'i-lucide-network' },
  { slug: 'remote-monitoring-and-data', icon: 'i-lucide-radio-tower' },
  { slug: 'alarm-monitoring', icon: 'i-lucide-bell-ring' }
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

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugSet.has(value as ServiceSlug)
}

export function getServiceIcon(slug: ServiceSlug) {
  return serviceIconMap[slug]
}

export function enrichServiceCatalog(
  items: readonly ServiceCatalogItemMessages[]
) {
  return items.map((item) => ({
    ...item,
    icon: getServiceIcon(item.slug)
  }))
}
