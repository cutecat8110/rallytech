<script setup lang="ts">
import { computed } from 'vue'
import { en, zh_tw } from '@nuxt/ui/locale'

const { locale } = useI18n()
const localeHead = useLocaleHead()

const uiLocale = computed(() => (locale.value === 'zh-tw' ? zh_tw : en))
const toaster = {
  position: 'top-right' as const
}
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
    (meta) => !String(meta.content ?? '').includes('/source')
  )
)

useHead(() => ({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs?.lang,
    dir: htmlDir.value
  },
  link: localeLinks.value,
  meta: [
    ...localeMeta.value,
    ...(locale.value === 'source'
      ? [{ name: 'robots', content: 'noindex,nofollow' }]
      : [])
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
