import {
  computed,
  ref,
  toValue,
  watch,
  type MaybeRefOrGetter,
  type Ref
} from 'vue'
import {
  getHomePageImageEntry,
  type HomePageImageAsset,
  type HomePageImageSlotKey,
  type HomePageImageStateKey,
  type HomePageSingleImageSlotKey,
  type HomePageImageSlotRegistry
} from '~/utils/home-page-image-registry'

export function useHomePageImageAsset(slot: HomePageSingleImageSlotKey): {
  desiredNanoSource: Readonly<Ref<HomePageImageAsset | null>>
  entry: Readonly<Ref<HomePageImageSlotRegistry>>
  handleImageError: () => void
  isUsingNanoSource: Readonly<Ref<boolean>>
  resolvedImage: Readonly<Ref<HomePageImageAsset>>
}
export function useHomePageImageAsset(
  slot: 'mission-square',
  state: MaybeRefOrGetter<HomePageImageStateKey>
): {
  desiredNanoSource: Readonly<Ref<HomePageImageAsset | null>>
  entry: Readonly<Ref<HomePageImageSlotRegistry>>
  handleImageError: () => void
  isUsingNanoSource: Readonly<Ref<boolean>>
  resolvedImage: Readonly<Ref<HomePageImageAsset>>
}
export function useHomePageImageAsset(
  slot: HomePageImageSlotKey,
  state?: MaybeRefOrGetter<HomePageImageStateKey>
) {
  const { activeMode } = useHomePageImageMode()
  const didNanoLoadFail = ref(false)

  const entry = computed(() => {
    if (slot === 'mission-square') {
      return getHomePageImageEntry(
        'mission-square',
        toValue(state) ?? 'mission'
      )
    }

    return getHomePageImageEntry(slot as HomePageSingleImageSlotKey)
  })

  const desiredNanoSource = computed(() => {
    if (import.meta.dev) {
      if (activeMode.value !== 'nano') {
        return null
      }

      return entry.value.latestCandidate
    }

    if (entry.value.liveSource === 'nano') {
      return entry.value.liveNano
    }

    return null
  })

  const resolvedImage = computed(() => {
    if (desiredNanoSource.value && !didNanoLoadFail.value) {
      return desiredNanoSource.value
    }

    return entry.value.stock
  })

  const isUsingNanoSource = computed(
    () => desiredNanoSource.value !== null && !didNanoLoadFail.value
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
    desiredNanoSource,
    entry,
    handleImageError,
    isUsingNanoSource,
    resolvedImage
  }
}
