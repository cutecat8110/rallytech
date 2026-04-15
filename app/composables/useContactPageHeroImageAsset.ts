import { computed, ref, watch, type Ref } from 'vue'
import {
  getContactPageHeroImageEntry,
  type ContactPageHeroImageAsset,
  type ContactPageImageSlotRegistry
} from '~/utils/contact-page-image-registry'

/**
 * Contact 頁面專用的圖像資產載入 Composable。
 * 支援 Nano Banana 候選圖預覽邏輯與 stock 回退。
 */
export function useContactPageHeroImageAsset(): {
  desiredNanoSource: Readonly<Ref<ContactPageHeroImageAsset | null>>
  entry: Readonly<Ref<ContactPageImageSlotRegistry>>
  handleImageError: () => void
  isUsingNanoSource: Readonly<Ref<boolean>>
  resolvedImage: Readonly<Ref<ContactPageHeroImageAsset>>
} {
  const { activeMode } = useHomePageImageMode()
  const didNanoLoadFail = ref(false)

  const entry = computed(() => getContactPageHeroImageEntry())

  const desiredNanoSource = computed(() => {
    if (activeMode.value !== 'nano') {
      return null
    }

    return entry.value.latestCandidate ?? entry.value.liveNano
  })

  const resolvedImage = computed(() => {
    if (desiredNanoSource.value && !didNanoLoadFail.value) {
      return desiredNanoSource.value
    }

    const fallbackImage =
      entry.value.liveNano ?? entry.value.latestCandidate ?? entry.value.stock

    return entry.value.stock.src ? entry.value.stock : fallbackImage
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
