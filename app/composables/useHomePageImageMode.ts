import { computed, watch } from 'vue'
import {
  homePageImageRegistry,
  type HomePageImageSourceKey
} from '~/utils/home-page-image-registry'

const HOME_PAGE_IMAGE_COOKIE = 'rallytech-home-page-image-mode'

function collectLatestCandidates() {
  return [
    homePageImageRegistry['home-hero'].latestCandidate,
    homePageImageRegistry['about-primary'].latestCandidate,
    homePageImageRegistry['about-detail'].latestCandidate,
    homePageImageRegistry['services-surface'].latestCandidate,
    homePageImageRegistry['ote-background'].latestCandidate,
    homePageImageRegistry['mission-square'].states.mission.latestCandidate,
    homePageImageRegistry['mission-square'].states['join-us'].latestCandidate,
    homePageImageRegistry['mission-cutout'].latestCandidate,
    homePageImageRegistry['connector-image'].latestCandidate
  ]
}

export function useHomePageImageMode() {
  const route = useRoute()
  const preferredMode = useCookie<HomePageImageSourceKey>(
    HOME_PAGE_IMAGE_COOKIE,
    {
      default: () => 'stock',
      sameSite: 'lax'
    }
  )

  const normalizedPath = computed(() => route.path.replace(/\/$/, '') || '/')
  const isHomepage = computed(() =>
    ['/', '/en', '/source'].includes(normalizedPath.value)
  )
  const hasAnyLatestCandidate = computed(() =>
    collectLatestCandidates().some((candidate) => candidate !== null)
  )
  const isDevToggleVisible = computed(() => import.meta.dev && isHomepage.value)

  const activeMode = computed<HomePageImageSourceKey>(() => {
    if (!import.meta.dev || !isHomepage.value) {
      return 'stock'
    }

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
    isDevToggleVisible,
    isHomepage,
    isNanoEnabled,
    preferredMode,
    setPreferredMode
  }
}
