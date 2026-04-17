<script setup lang="ts">
// 首頁：區塊組裝
import HomeHeroSection from '~/components/page/home/HomeHeroSection.vue'
import HomeAboutSection from '~/components/page/home/HomeAboutSection.vue'
import HomeServicesSection from '~/components/page/home/HomeServicesSection.vue'
import SharedProcessSection from '~/components/shared/SharedProcessSection.vue'
import HomeOneTouchSection from '~/components/page/home/HomeOneTouchSection.vue'
import HomeBrandMainActionSection from '~/components/page/home/HomeBrandMainActionSection.vue'

// Layout：frontend
definePageMeta({
  layout: 'frontend'
})

const messages = useRallyMessages()
const { locale } = useI18n()

// SEO：首頁
useSeoMeta({
  title: () => messages.value.home.seo.title,
  description: () => messages.value.home.seo.description,
  robots: () => (locale.value === 'source' ? 'noindex,nofollow' : undefined)
})
</script>

<template>
  <div>
    <!-- 區塊 03：主視覺 -->
    <HomeHeroSection />

    <!-- 區塊 04：公司介紹 -->
    <HomeAboutSection />

    <!-- 區塊 05：服務總覽 -->
    <HomeServicesSection />

    <!-- 區塊 06：交付流程 -->
    <SharedProcessSection source="home" />

    <!-- 區塊 07：一站式整合導覽 -->
    <HomeOneTouchSection />

    <!-- 區塊 08：使命與合作邀請 -->
    <HomeBrandMainActionSection />
  </div>
</template>
