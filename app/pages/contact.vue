<script setup lang="ts">
import { computed } from 'vue'
import ContactPageShell from '~/components/page/contact/ContactPageShell.vue'
import { SITE_NAME, createBreadcrumbSchema, withSiteUrl } from '~~/shared/seo'

definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()
const localePath = useLocalePath()
const contactPath = computed(() => localePath('/contact'))
const contactOgImage = withSiteUrl(
  '/images/stock/contact/contact-hero-control-room-team.jpg'
)

useSeoMeta({
  title: () => messages.value.contactPage.seo.title,
  description: () => messages.value.contactPage.seo.description,
  ogTitle: () => messages.value.contactPage.seo.title,
  ogDescription: () => messages.value.contactPage.seo.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: contactOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => messages.value.contactPage.seo.title,
  twitterDescription: () => messages.value.contactPage.seo.description,
  twitterImage: contactOgImage,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})

const breadcrumbSchema = computed(() =>
  createBreadcrumbSchema([
    {
      name: locale.value === 'zh-tw' ? '首頁' : 'Home',
      path: localePath('/')
    },
    {
      name: messages.value.contactPage.hero.title,
      path: contactPath.value
    }
  ])
)

useHead(() => ({
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'contact-breadcrumb-schema',
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbSchema.value)
          }
        ]
}))
</script>

<template>
  <ContactPageShell />
</template>
