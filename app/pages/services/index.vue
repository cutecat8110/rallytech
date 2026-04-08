<script setup lang="ts">
import ServicesCardGrid from '~/components/page/services/ServicesCardGrid.vue'
import ServicesOverviewHero from '~/components/page/services/ServicesOverviewHero.vue'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()

useSeoMeta({
  title: () => messages.value.servicesPage.seo.title,
  description: () => messages.value.servicesPage.seo.description,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <div>
    <ServicesOverviewHero />
    <ServicesCardGrid />
  </div>
</template>
