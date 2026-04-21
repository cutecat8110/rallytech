<script setup lang="ts">
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'

const messages = useRallyMessages()
const { resolvedImage, handleImageError } = useServicesOverviewHeroImageAsset()
</script>

<template>
  <PageHeroShell
    class="services-sys-overview-hero"
    variant="page"
    shell="wide"
    content-align="center"
  >
    <template #media>
      <img
        :src="resolvedImage.src"
        :alt="resolvedImage.alt"
        class="services-sys-overview-hero__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        decoding="async"
        @error="handleImageError"
      />
    </template>

    <SharedPageHeroTitle :title="messages.servicesPage.hero.title" />
  </PageHeroShell>
</template>

<style scoped>
.services-sys-overview-hero__image {
  object-position: center;
}
</style>
