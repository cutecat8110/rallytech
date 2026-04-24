<script setup lang="ts">
import { computed } from 'vue'
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'
import ServiceDetailHero from '~/components/page/services/ServiceDetailHero.vue'
import ServiceDetailPageShell from '~/components/page/services/ServiceDetailPageShell.vue'
import { getServicePageImageEntry } from '~/utils/service-page-image-registry'
import { isServiceSlug } from '~/utils/services'
import {
  SITE_NAME,
  createBreadcrumbSchema,
  createServiceSchema,
  withSiteUrl
} from '~~/shared/seo'

definePageMeta({
  layout: 'frontend',
  validate: (route) => {
    const value = route.params.slug
    const slug = Array.isArray(value) ? value[0] : value

    return typeof slug === 'string' && isServiceSlug(slug)
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

const resolvedService = computed<ServiceCatalogItemMessages | null>(() => {
  const value = slug.value

  if (!value || !isServiceSlug(value)) {
    return null
  }

  const serviceEntry =
    messages.value.servicesCatalog.find((item) => item.slug === value) ?? null

  return serviceEntry
})

const resolvedDetailPage = computed<ServiceDetailPageMessages | null>(() => {
  const service = resolvedService.value

  if (!service) {
    return null
  }

  return messages.value.serviceDetailPages[service.slug] ?? null
})

if (!resolvedService.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found'
  })
}

if (!resolvedDetailPage.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service detail not found'
  })
}

const service = computed(
  () => resolvedService.value as ServiceCatalogItemMessages
)

const detailPage = computed(
  () => resolvedDetailPage.value as ServiceDetailPageMessages
)

const servicePath = computed(() =>
  localePath(`/services/${service.value.slug}`)
)
const serviceOgImage = computed(() =>
  withSiteUrl(
    getServicePageImageEntry(service.value.slug, 'detail-hero').stock.src
  )
)

useSeoMeta({
  title: () => detailPage.value.seo.title,
  description: () => detailPage.value.seo.description,
  ogTitle: () => detailPage.value.seo.title,
  ogDescription: () => detailPage.value.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: () => serviceOgImage.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => detailPage.value.seo.title,
  twitterDescription: () => detailPage.value.seo.description,
  twitterImage: () => serviceOgImage.value,
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
      path: localePath('/services')
    },
    {
      name: service.value.shortLabel,
      path: servicePath.value
    }
  ])
)

const serviceSchema = computed(() =>
  createServiceSchema(
    service.value.formalTitle,
    detailPage.value.seo.description,
    servicePath.value,
    messages.value.company.displayName
  )
)

useHead(() => ({
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'service-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          },
          {
            key: 'service-schema',
            type: 'application/ld+json',
            children: JSON.stringify(serviceSchema.value)
          }
        ]
}))
</script>

<template>
  <div v-if="service && detailPage">
    <ServiceDetailHero :service="service" />
    <ServiceDetailPageShell :service="service" :detail-page="detailPage" />
  </div>
</template>
