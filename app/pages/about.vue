<script setup lang="ts">
import { computed } from 'vue'
import AboutCapabilitySection from '~/components/page/about/AboutCapabilitySection.vue'
import AboutHeroSection from '~/components/page/about/AboutHeroSection.vue'
import AboutIntroSection from '~/components/page/about/AboutIntroSection.vue'
import AboutPartnerSection from '~/components/page/about/AboutPartnerSection.vue'
import { SITE_NAME, createBreadcrumbSchema, withSiteUrl } from '~~/shared/seo'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()
const localePath = useLocalePath()
const aboutPath = computed(() => localePath('/about'))
const aboutOgImage = withSiteUrl(
  '/images/company/office/rallytech-office-logo-wall.jpg'
)

useSeoMeta({
  title: () => messages.value.aboutPage.seo.title,
  description: () => messages.value.aboutPage.seo.description,
  ogTitle: () => messages.value.aboutPage.seo.title,
  ogDescription: () => messages.value.aboutPage.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: aboutOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => messages.value.aboutPage.seo.title,
  twitterDescription: () => messages.value.aboutPage.seo.description,
  twitterImage: aboutOgImage,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})

const breadcrumbSchema = computed(() =>
  createBreadcrumbSchema([
    {
      name: locale.value === 'zh-tw' ? '首頁' : 'Home',
      path: localePath('/')
    },
    {
      name: messages.value.aboutPage.hero.title,
      path: aboutPath.value
    }
  ])
)

useHead(() => ({
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'about-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          }
        ]
}))
</script>

<template>
  <main>
    <AboutHeroSection />
    <AboutIntroSection />
    <AboutCapabilitySection />
    <AboutPartnerSection />
  </main>
</template>
