import { computed, watch } from 'vue'
import {
  homeHeroImageRegistry,
  type HomeHeroImageSourceKey
} from '~/utils/home-hero-image-registry'

const HOME_HERO_IMAGE_COOKIE = 'rallytech-home-hero-mode'

export function useHomeHeroImageMode() {
  const preferredMode = useCookie<HomeHeroImageSourceKey>(
    HOME_HERO_IMAGE_COOKIE,
    {
      default: () => homeHeroImageRegistry.liveSource,
      sameSite: 'lax'
    }
  )

  const hasLatestCandidate = computed(
    () => homeHeroImageRegistry.latestCandidate !== null
  )
  const hasLiveNano = computed(() => homeHeroImageRegistry.liveNano !== null)
  const isDevToggleVisible = import.meta.dev

  const activeMode = computed<HomeHeroImageSourceKey>(() => {
    const fallbackMode =
      homeHeroImageRegistry.liveSource === 'nano' && hasLiveNano.value
        ? 'nano'
        : 'stock'

    if (!import.meta.dev) {
      return fallbackMode
    }

    return preferredMode.value === 'nano' && hasLatestCandidate.value
      ? 'nano'
      : 'stock'
  })

  const isNanoEnabled = computed({
    get: () => activeMode.value === 'nano',
    set: (enabled: boolean) => {
      preferredMode.value =
        enabled && hasLatestCandidate.value ? 'nano' : 'stock'
    }
  })

  watch(
    hasLatestCandidate,
    (available) => {
      if (!available && preferredMode.value === 'nano') {
        preferredMode.value = 'stock'
      }
    },
    { immediate: true }
  )

  function setPreferredMode(mode: HomeHeroImageSourceKey) {
    preferredMode.value =
      mode === 'nano' && hasLatestCandidate.value ? 'nano' : 'stock'
  }

  return {
    activeMode,
    hasLatestCandidate,
    hasLiveNano,
    isDevToggleVisible,
    isNanoEnabled,
    preferredMode,
    setPreferredMode
  }
}
