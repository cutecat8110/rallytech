<script setup lang="ts">
import HomeAboutSection from '~/components/page/home/HomeAboutSection.vue'
import HomeBrandMainActionSection from '~/components/page/home/HomeBrandMainActionSection.vue'
import HomeHeroSection from '~/components/page/home/HomeHeroSection.vue'
import HomeOneTouchSection from '~/components/page/home/HomeOneTouchSection.vue'
import HomeServicesSection from '~/components/page/home/HomeServicesSection.vue'
import SharedProcessSection from '~/components/shared/SharedProcessSection.vue'
import { SITE_NAME, withSiteUrl } from '~~/shared/seo'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()
const homeOgImage = withSiteUrl(
  '/images/stock/home/hero-simulator-control-room.jpg'
)

useSeoMeta({
  title: () => messages.value.home.seo.title,
  description: () => messages.value.home.seo.description,
  ogTitle: () => messages.value.home.seo.title,
  ogDescription: () => messages.value.home.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: homeOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => messages.value.home.seo.title,
  twitterDescription: () => messages.value.home.seo.description,
  twitterImage: homeOgImage,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeServicesSection />
    <SharedProcessSection source="home" />
    <HomeOneTouchSection />
    <HomeBrandMainActionSection />
  </div>
</template>
