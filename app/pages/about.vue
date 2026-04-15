<script setup lang="ts">
import AboutHeroSection from '~/components/page/about/AboutHeroSection.vue'
import AboutIntroSection from '~/components/page/about/AboutIntroSection.vue'
import AboutCapabilitySection from '~/components/page/about/AboutCapabilitySection.vue'
import AboutProcessSection from '~/components/page/about/AboutProcessSection.vue'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()

useSeoMeta({
  title: () => messages.value.aboutPage.seo.title,
  description: () => messages.value.aboutPage.seo.description,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <main>
    <AboutHeroSection />
    <AboutIntroSection />
    <AboutCapabilitySection />
    <AboutProcessSection />
  </main>
</template>
