import { computed, watch } from 'vue'
import {
  homePageImageRegistry,
  type HomePageImageSourceKey
} from '~/utils/home-page-image-registry'
import {
  servicePageImageRegistry,
  servicesOverviewHeroRegistry
} from '~/utils/service-page-image-registry'

const HOME_PAGE_IMAGE_COOKIE = 'rallytech-home-page-image-mode'

function collectHomeLatestCandidates() {
  return [
    homePageImageRegistry['home-hero'].latestCandidate,
    homePageImageRegistry['about-primary'].latestCandidate,
    homePageImageRegistry['about-detail'].latestCandidate,
    homePageImageRegistry['services-surface'].latestCandidate,
    homePageImageRegistry['ote-background'].latestCandidate,
    homePageImageRegistry['mission-square'].states.mission?.latestCandidate,
    homePageImageRegistry['mission-square'].states['join-us']?.latestCandidate,
    homePageImageRegistry['mission-cutout'].latestCandidate,
    homePageImageRegistry['connector-image'].latestCandidate
  ]
}

function collectServiceLatestCandidates() {
  return [
    servicesOverviewHeroRegistry.latestCandidate,
    ...Object.values(servicePageImageRegistry).flatMap((roleRegistry) =>
      Object.values(roleRegistry).map((entry) => entry.latestCandidate)
    )
  ]
}

export function useHomePageImageMode() {
  const preferredMode = useCookie<HomePageImageSourceKey>(
    HOME_PAGE_IMAGE_COOKIE,
    {
      default: () => 'nano',
      sameSite: 'lax'
    }
  )

  const hasAnyLatestCandidate = computed(() =>
    [
      ...collectHomeLatestCandidates(),
      ...collectServiceLatestCandidates()
    ].some((candidate) => candidate !== null)
  )
  const isImageToggleVisible = computed(() => true)

  const activeMode = computed<HomePageImageSourceKey>(() => {
    return preferredMode.value === 'nano' && hasAnyLatestCandidate.value
      ? 'nano'
      : 'stock'
  })

  const isNanoEnabled = computed({
    get: () => activeMode.value === 'nano',
    set: (enabled: boolean) => {
      preferredMode.value =
        enabled && hasAnyLatestCandidate.value ? 'nano' : 'stock'
    }
  })

  watch(
    hasAnyLatestCandidate,
    (available) => {
      if (!available && preferredMode.value === 'nano') {
        preferredMode.value = 'stock'
      }
    },
    { immediate: true }
  )

  function setPreferredMode(mode: HomePageImageSourceKey) {
    preferredMode.value =
      mode === 'nano' && hasAnyLatestCandidate.value ? 'nano' : 'stock'
  }

  return {
    activeMode,
    hasAnyLatestCandidate,
    isDevToggleVisible: isImageToggleVisible,
    isImageToggleVisible,
    isNanoEnabled,
    preferredMode,
    setPreferredMode
  }
}
