<script setup lang="ts">
import { computed } from 'vue'
import OneTouchExperiencePage from '~/components/page/one-touch/OneTouchExperiencePage.vue'
import { SITE_NAME, createBreadcrumbSchema, withSiteUrl } from '~~/shared/seo'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()
const localePath = useLocalePath()
const oneTouchPath = computed(() => localePath('/one-touch-experience'))
const oneTouchOgImage = withSiteUrl(
  '/images/stock/services/remote-monitoring-and-data/remote-monitoring-control-room.jpg'
)

useSeoMeta({
  title: () => messages.value.oneTouchPage.seo.title,
  description: () => messages.value.oneTouchPage.seo.description,
  ogTitle: () => messages.value.oneTouchPage.seo.title,
  ogDescription: () => messages.value.oneTouchPage.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: oneTouchOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => messages.value.oneTouchPage.seo.title,
  twitterDescription: () => messages.value.oneTouchPage.seo.description,
  twitterImage: oneTouchOgImage,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})

const breadcrumbSchema = computed(() =>
  createBreadcrumbSchema([
    {
      name: locale.value === 'zh-tw' ? '首頁' : 'Home',
      path: localePath('/')
    },
    {
      name: messages.value.oneTouchPage.hero.title,
      path: oneTouchPath.value
    }
  ])
)

useHead(() => ({
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'one-touch-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          }
        ]
}))
</script>

<template>
  <OneTouchExperiencePage />
</template>
