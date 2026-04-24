<script setup lang="ts">
import { computed } from 'vue'
import ServicesCardGrid from '~/components/page/services/ServicesCardGrid.vue'
import ServicesContextSections from '~/components/page/services/ServicesContextSections.vue'
import ServicesOverviewHero from '~/components/page/services/ServicesOverviewHero.vue'
import {
  SITE_NAME,
  createBreadcrumbSchema,
  createItemListSchema,
  withSiteUrl
} from '~~/shared/seo'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()
const localePath = useLocalePath()
const servicesPath = computed(() => localePath('/services'))
const servicesOgImage = withSiteUrl(
  '/images/stock/services/overview/services-overview-hero-control-room.jpg'
)

useSeoMeta({
  title: () => messages.value.servicesPage.seo.title,
  description: () => messages.value.servicesPage.seo.description,
  ogTitle: () => messages.value.servicesPage.seo.title,
  ogDescription: () => messages.value.servicesPage.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: servicesOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => messages.value.servicesPage.seo.title,
  twitterDescription: () => messages.value.servicesPage.seo.description,
  twitterImage: servicesOgImage,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})

const breadcrumbSchema = computed(() =>
  createBreadcrumbSchema([
    {
      name: locale.value === 'zh-tw' ? '首頁' : 'Home',
      path: localePath('/')
    },
    {
      name: messages.value.servicesPage.hero.title,
      path: servicesPath.value
    }
  ])
)

const servicesItemListSchema = computed(() =>
  createItemListSchema(
    messages.value.servicesPage.hero.title,
    messages.value.servicesCatalog.map((item) => ({
      name: item.formalTitle,
      path: localePath(`/services/${item.slug}`),
      description: item.description
    }))
  )
)

useHead(() => ({
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'services-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          },
          {
            key: 'services-item-list-schema',
            type: 'application/ld+json',
            children: JSON.stringify(servicesItemListSchema.value)
          }
        ]
}))
</script>

<template>
  <div>
    <ServicesOverviewHero />
    <ServicesCardGrid />
    <ServicesContextSections />
  </div>
</template>
