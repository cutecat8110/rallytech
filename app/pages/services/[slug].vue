<script setup lang="ts">
import { computed } from 'vue'
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'
import ServiceDetailHero from '~/components/page/services/ServiceDetailHero.vue'
import ServiceDetailPageShell from '~/components/page/services/ServiceDetailPageShell.vue'
import { isServiceSlug } from '~/utils/services'

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

useSeoMeta({
  title: () => detailPage.value?.seo.title,
  description: () => detailPage.value?.seo.description,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <div v-if="service && detailPage">
    <ServiceDetailHero :service="service" :detail-page="detailPage" />
    <ServiceDetailPageShell :service="service" :detail-page="detailPage" />
  </div>
</template>
