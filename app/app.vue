<script setup lang="ts">
import { computed } from 'vue'
import { en, zh_tw } from '@nuxt/ui/locale'
import {
  PUBLIC_SITE_LOCALES,
  createSiteGraph,
  getPublicLocaleEntry,
  isPublicLocaleCode
} from '~~/shared/seo'

const { locale } = useI18n()
const localeHead = useLocaleHead()
const messages = useRallyMessages()

const uiLocale = computed(() => (locale.value === 'zh-tw' ? zh_tw : en))
const toaster = {
  position: 'top-right' as const
}
const currentPublicLocale = computed(() =>
  isPublicLocaleCode(locale.value) ? locale.value : 'en'
)
const htmlDir = computed(() => {
  const dir = localeHead.value.htmlAttrs?.dir

  return dir === 'ltr' || dir === 'rtl' || dir === 'auto' ? dir : undefined
})

const localeLinks = computed(() =>
  (localeHead.value.link ?? []).filter(
    (link) => !String(link.href ?? '').includes('/source')
  )
)

const localeMeta = computed(() =>
  (localeHead.value.meta ?? []).filter(
    (meta) =>
      !String(meta.content ?? '').includes('/source') &&
      !['og:locale', 'og:locale:alternate'].includes(
        String(meta.property ?? '')
      )
  )
)

const publicLocaleMeta = computed(() => {
  if (locale.value === 'source') {
    return []
  }

  const currentLocaleEntry = getPublicLocaleEntry(currentPublicLocale.value)

  return [
    {
      property: 'og:locale',
      content: currentLocaleEntry.ogLocale
    },
    ...PUBLIC_SITE_LOCALES.filter(
      (entry) => entry.code !== currentPublicLocale.value
    ).map((entry) => ({
      property: 'og:locale:alternate',
      content: entry.ogLocale
    }))
  ]
})

const siteSchema = computed(() =>
  createSiteGraph({
    locale: currentPublicLocale.value,
    organizationName: messages.value.company.displayName,
    alternateNames: [
      messages.value.company.legalName,
      messages.value.company.englishName,
      messages.value.company.chineseName
    ],
    description: messages.value.home.seo.description,
    telephone: messages.value.company.phoneDisplay,
    email: messages.value.company.email,
    address: messages.value.company.address,
    addressEnglish: messages.value.company.addressEnglish
  })
)

useHead(() => ({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs?.lang,
    dir: htmlDir.value
  },
  link: localeLinks.value,
  meta: [
    ...localeMeta.value,
    ...publicLocaleMeta.value,
    ...(locale.value === 'source'
      ? [{ name: 'robots', content: 'noindex,nofollow' }]
      : [])
  ],
  script:
    locale.value === 'source'
      ? []
      : [
          {
            key: 'site-schema',
            type: 'application/ld+json',
            children: JSON.stringify(siteSchema.value)
          }
        ]
}))
</script>

<template>
  <UApp :locale="uiLocale" :toaster="toaster">
    <!-- 輔助：路由朗讀 -->
    <NuxtRouteAnnouncer />

    <!-- 版型入口 -->
    <NuxtLayout>
      <!-- 頁面內容 -->
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
