<script setup lang="ts">
import { computed } from 'vue'
import type {
  ProductCatalogItemMessages,
  ProductDetailPageMessages
} from '~~/i18n/locales/types'
import ProductDetailHero from '~/components/page/products/ProductDetailHero.vue'
import ProductDetailPageShell from '~/components/page/products/ProductDetailPageShell.vue'
import { isProductSlug } from '~/utils/products'
import { SITE_NAME, createBreadcrumbSchema, withSiteUrl } from '~~/shared/seo'

definePageMeta({
  layout: 'frontend',
  validate: (route) => {
    const value = route.params.slug
    const slug = Array.isArray(value) ? value[0] : value

    return typeof slug === 'string' && isProductSlug(slug)
  }
})

const route = useRoute()
const messages = useRallyMessages()
const { locale } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => {
  const value = route.params.slug

  return Array.isArray(value) ? value[0] : value
})

const resolvedProduct = computed<ProductCatalogItemMessages | null>(() => {
  const value = slug.value

  if (!value || !isProductSlug(value)) {
    return null
  }

  return (
    messages.value.productsCatalog.find((item) => item.slug === value) ?? null
  )
})

const resolvedDetailPage = computed<ProductDetailPageMessages | null>(() => {
  const product = resolvedProduct.value

  if (!product) {
    return null
  }

  return messages.value.productDetailPages[product.slug] ?? null
})

if (!resolvedProduct.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

if (!resolvedDetailPage.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product detail not found'
  })
}

const product = computed(
  () => resolvedProduct.value as ProductCatalogItemMessages
)

const detailPage = computed(
  () => resolvedDetailPage.value as ProductDetailPageMessages
)

const productPath = computed(() =>
  localePath(`/products/${product.value.slug}`)
)
const productOgImage = computed(() => withSiteUrl(product.value.badge.src))

useSeoMeta({
  title: () => detailPage.value.seo.title,
  description: () => detailPage.value.seo.description,
  ogTitle: () => detailPage.value.seo.title,
  ogDescription: () => detailPage.value.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: () => productOgImage.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => detailPage.value.seo.title,
  twitterDescription: () => detailPage.value.seo.description,
  twitterImage: () => productOgImage.value,
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
      path: localePath('/products')
    },
    {
      name: product.value.shortLabel,
      path: productPath.value
    }
  ])
)

useHead(() => ({
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'product-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          }
        ]
}))
</script>

<template>
  <div v-if="product && detailPage">
    <ProductDetailHero :product="product" />
    <ProductDetailPageShell :product="product" :detail-page="detailPage" />
  </div>
</template>
