<script setup lang="ts">
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'

const messages = useRallyMessages()
const { resolvedImage: heroImage, handleImageError: handleHeroImageError } =
  useAboutPageImageAsset('about-hero')
</script>

<template>
  <PageHeroShell
    class="about-sys-hero"
    variant="page"
    shell="wide"
    content-align="center"
  >
    <template #media>
      <img
        :src="heroImage.src"
        :alt="heroImage.alt || messages.aboutPage.hero.title"
        class="about-sys-hero__image"
        @error="handleHeroImageError"
      />
    </template>

    <SharedPageHeroTitle :title="messages.aboutPage.hero.title" />
  </PageHeroShell>
</template>

<style scoped>
.about-sys-hero__image {
  object-position: center 52%;
}

@media (max-width: 767px) {
  .about-sys-hero__image {
    object-position: center 50%;
  }
}
</style>
