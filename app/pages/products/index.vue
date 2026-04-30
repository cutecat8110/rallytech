<script setup lang="ts">
import { computed } from 'vue'
import ProductsCardGrid from '~/components/page/products/ProductsCardGrid.vue'
import ProductsOverviewHero from '~/components/page/products/ProductsOverviewHero.vue'
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
const productsPath = computed(() => localePath('/products'))
const productsOgImage = withSiteUrl(
  '/images/stock/services/scada-hmi-graphics/detail-hero-control-room-operator.jpg'
)

useSeoMeta({
  title: () => messages.value.productsPage.seo.title,
  description: () => messages.value.productsPage.seo.description,
  ogTitle: () => messages.value.productsPage.seo.title,
  ogDescription: () => messages.value.productsPage.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: productsOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => messages.value.productsPage.seo.title,
  twitterDescription: () => messages.value.productsPage.seo.description,
  twitterImage: productsOgImage,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})

const breadcrumbSchema = computed(() =>
  createBreadcrumbSchema([
    {
      name: locale.value === 'zh-tw' ? '首頁' : 'Home',
      path: localePath('/')
    },
    {
      name: messages.value.productsPage.hero.title,
      path: productsPath.value
    }
  ])
)

const productsItemListSchema = computed(() =>
  createItemListSchema(
    messages.value.productsPage.hero.title,
    messages.value.productsCatalog.map((item) => ({
      name: item.formalTitle,
      path: localePath(`/products/${item.slug}`),
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
            key: 'products-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          },
          {
            key: 'products-item-list-schema',
            type: 'application/ld+json',
            children: JSON.stringify(productsItemListSchema.value)
          }
        ]
}))
</script>

<template>
  <div>
    <ProductsOverviewHero />
    <ProductsCardGrid />
  </div>
</template>
