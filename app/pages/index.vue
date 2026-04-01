<script setup lang="ts">
// 首頁：區塊組裝
import HomeHeroSection from '~/components/page/home/HomeHeroSection.vue'
import HomeAboutSection from '~/components/page/home/HomeAboutSection.vue'
import HomeServicesSection from '~/components/page/home/HomeServicesSection.vue'
import HomeProcessSection from '~/components/page/home/HomeProcessSection.vue'
import HomeCapabilitySection from '~/components/page/home/HomeCapabilitySection.vue'
import HomeMissionSection from '~/components/page/home/HomeMissionSection.vue'
import HomeContactMainActionSection from '~/components/page/home/HomeContactMainActionSection.vue'

// Layout：frontend
definePageMeta({
  layout: 'frontend'
})

// SEO：首頁
useSeoMeta({
  title: '雷力科技 Rally Technology',
  description:
    '雷力科技提供工業自動化整合、控制系統、資料平台與一站式導入支援，協助專案從規劃到交接維持清楚可執行的交付節奏。'
})
</script>

<template>
  <div>
    <!-- Hero 區塊 -->
    <HomeHeroSection />

    <!-- About 區塊 -->
    <HomeAboutSection />

    <!-- Services 區塊 -->
    <HomeServicesSection />

    <!-- Process 區塊 -->
    <HomeProcessSection />

    <!-- Capability 區塊 -->
    <HomeCapabilitySection />

    <!-- Mission 區塊 -->
    <HomeMissionSection />

    <!-- Final CTA 區塊 -->
    <HomeContactMainActionSection />
  </div>
</template>
