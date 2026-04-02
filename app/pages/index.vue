<script setup lang="ts">
// 首頁：區塊組裝
import HomeHeroSection from '~/components/page/home/HomeHeroSection.vue'
import HomeAboutSection from '~/components/page/home/HomeAboutSection.vue'
import HomeServicesSection from '~/components/page/home/HomeServicesSection.vue'
import HomeProcessSection from '~/components/page/home/HomeProcessSection.vue'
import HomeOneTouchSection from '~/components/page/home/HomeOneTouchSection.vue'
import HomeBrandMainActionSection from '~/components/page/home/HomeBrandMainActionSection.vue'

// Layout：frontend
definePageMeta({
  layout: 'frontend'
})

// SEO：首頁
useSeoMeta({
  title: '雷力科技 Rally Technology',
  description:
    '工業自動化交付，串接控制系統、工廠資料與現場執行，支撐現代工業專案。'
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
    <HomeProcessSection />

    <!-- 區塊 07：一站式整合導覽 -->
    <HomeOneTouchSection />

    <!-- 區塊 08：使命與合作邀請 -->
    <HomeBrandMainActionSection />
  </div>
</template>
