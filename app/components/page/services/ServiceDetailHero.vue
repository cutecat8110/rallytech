<script setup lang="ts">
import type { ServiceCatalogItemMessages } from '~~/i18n/locales/types'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'

const props = defineProps<{
  service: ServiceCatalogItemMessages
}>()
const { resolvedImage, handleImageError } = useServicePageImageAsset(
  props.service.slug,
  'detail-hero'
)
</script>

<template>
  <PageHeroShell
    class="services-sys-detail-hero"
    variant="page"
    shell="default"
    content-align="center"
  >
    <template #media>
      <img
        :src="resolvedImage.src"
        :alt="resolvedImage.alt"
        class="services-sys-detail-hero__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        decoding="async"
        @error="handleImageError"
      />
    </template>

    <SharedPageHeroTitle :title="service.shortLabel" />
  </PageHeroShell>
</template>

<style scoped>
.services-sys-detail-hero__image {
  object-position: center;
}
</style>
