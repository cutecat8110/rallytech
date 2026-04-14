import { computed } from 'vue'
import type { ServiceSlug } from '~~/i18n/locales/types'
import {
  getServicePageImageEntry,
  getServicesOverviewHeroImageEntry,
  type ServiceImageRole,
  type ServiceRoleImageAsset,
  type ServicesOverviewHeroImageAsset
} from '~/utils/service-page-image-registry'

export function useServicePageImageAsset(
  slug: ServiceSlug,
  role: ServiceImageRole
) {
  const entry = computed(() => getServicePageImageEntry(slug, role))
  const resolvedImage = computed<ServiceRoleImageAsset>(() => entry.value)

  function handleImageError() {
    return
  }

  return {
    entry,
    handleImageError,
    resolvedImage
  }
}

export function useServicesOverviewHeroImageAsset() {
  const entry = computed(() => getServicesOverviewHeroImageEntry())
  const resolvedImage = computed<ServicesOverviewHeroImageAsset>(
    () => entry.value
  )

  function handleImageError() {
    return
  }

  return {
    entry,
    handleImageError,
    resolvedImage
  }
}
