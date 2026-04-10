<script setup lang="ts">
import ContactPageShell from '~/components/page/contact/ContactPageShell.vue'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()

useSeoMeta({
  title: () => messages.value.contactPage.seo.title,
  description: () => messages.value.contactPage.seo.description,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <ContactPageShell />
</template>
