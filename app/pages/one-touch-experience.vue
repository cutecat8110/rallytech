<script setup lang="ts">
import OneTouchExperiencePage from '~/components/page/one-touch/OneTouchExperiencePage.vue'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()

useSeoMeta({
  title: () => messages.value.oneTouchPage.seo.title,
  description: () => messages.value.oneTouchPage.seo.description,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <OneTouchExperiencePage />
</template>
