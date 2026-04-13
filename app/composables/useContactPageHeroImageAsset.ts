import { computed } from 'vue'
import {
  getContactPageHeroImageEntry,
  type ContactPageHeroImageAsset
} from '~/utils/contact-page-image-registry'

export function useContactPageHeroImageAsset() {
  const entry = computed(() => getContactPageHeroImageEntry())
  const resolvedImage = computed<ContactPageHeroImageAsset>(() => entry.value)

  function handleImageError() {
    return
  }

  return {
    entry,
    handleImageError,
    resolvedImage
  }
}
