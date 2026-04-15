import { computed, ref, watch } from 'vue'
import type { ServiceSlug } from '~~/i18n/locales/types'
import {
  getServicePageImageEntry,
  getServicesOverviewHeroImageEntry,
  type ServiceImageRole,
  type BaseServicePageImageAsset,
  type ServiceImageSlotRegistry,
  type ServicesOverviewHeroRegistry
} from '~/utils/service-page-image-registry'

type ServiceImageEntry = ServiceImageSlotRegistry | ServicesOverviewHeroRegistry

export function getDesiredServiceImageSource(
  entry: ServiceImageEntry,
  mode: 'stock' | 'nano'
) {
  if (mode !== 'nano') {
    return null
  }

  return entry.latestCandidate ?? entry.liveNano
}

export function resolveServiceImageAsset(
  entry: ServiceImageEntry,
  mode: 'stock' | 'nano',
  didNanoLoadFail = false
): BaseServicePageImageAsset {
  const desiredNanoSource = getDesiredServiceImageSource(entry, mode)

  if (desiredNanoSource && !didNanoLoadFail) {
    return desiredNanoSource
  }

  return entry.stock.src
    ? entry.stock
    : (entry.liveNano ?? entry.latestCandidate ?? entry.stock)
}

/**
 * Service 頁面專用的圖像資產載入 Composable。
 * 支援 Nano Banana 候選圖預覽邏輯。
 */
export function useServicePageImageAsset(
  slug: ServiceSlug,
  role: ServiceImageRole
) {
  const { activeMode } = useHomePageImageMode()
  const didNanoLoadFail = ref(false)

  const entry = computed<ServiceImageSlotRegistry>(() =>
    getServicePageImageEntry(slug, role)
  )

  const desiredNanoSource = computed(() =>
    getDesiredServiceImageSource(entry.value, activeMode.value)
  )

  const resolvedImage = computed<BaseServicePageImageAsset>(() =>
    resolveServiceImageAsset(
      entry.value,
      activeMode.value,
      didNanoLoadFail.value
    )
  )

  watch(
    () => desiredNanoSource.value?.src ?? null,
    (src, _previous, onCleanup) => {
      didNanoLoadFail.value = false

      if (!import.meta.client || !src) {
        return
      }

      let cancelled = false
      const image = new Image()

      image.onload = () => {
        if (!cancelled) {
          didNanoLoadFail.value = false
        }
      }

      image.onerror = () => {
        if (!cancelled) {
          didNanoLoadFail.value = true
        }
      }

      image.src = src

      onCleanup(() => {
        cancelled = true
        image.onload = null
        image.onerror = null
      })
    },
    { immediate: true }
  )

  function handleImageError() {
    if (!desiredNanoSource.value) {
      return
    }

    didNanoLoadFail.value = true
  }

  return {
    entry,
    handleImageError,
    resolvedImage,
    isUsingNanoSource: computed(
      () => desiredNanoSource.value !== null && !didNanoLoadFail.value
    )
  }
}

export function useServicesOverviewHeroImageAsset() {
  const { activeMode } = useHomePageImageMode()
  const didNanoLoadFail = ref(false)

  const entry = computed<ServicesOverviewHeroRegistry>(() =>
    getServicesOverviewHeroImageEntry()
  )

  const desiredNanoSource = computed(() =>
    getDesiredServiceImageSource(entry.value, activeMode.value)
  )

  const resolvedImage = computed<BaseServicePageImageAsset>(() =>
    resolveServiceImageAsset(
      entry.value,
      activeMode.value,
      didNanoLoadFail.value
    )
  )

  watch(
    () => desiredNanoSource.value?.src ?? null,
    (src, _previous, onCleanup) => {
      didNanoLoadFail.value = false

      if (!import.meta.client || !src) {
        return
      }

      let cancelled = false
      const image = new Image()

      image.onload = () => {
        if (!cancelled) {
          didNanoLoadFail.value = false
        }
      }

      image.onerror = () => {
        if (!cancelled) {
          didNanoLoadFail.value = true
        }
      }

      image.src = src

      onCleanup(() => {
        cancelled = true
        image.onload = null
        image.onerror = null
      })
    },
    { immediate: true }
  )

  function handleImageError() {
    if (!desiredNanoSource.value) {
      return
    }

    didNanoLoadFail.value = true
  }

  return {
    entry,
    handleImageError,
    resolvedImage,
    isUsingNanoSource: computed(
      () => desiredNanoSource.value !== null && !didNanoLoadFail.value
    )
  }
}
