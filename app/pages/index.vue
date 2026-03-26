<script setup lang="ts">
// 首頁：區塊組裝
import HomeHeroSection from '~/components/page/home/HomeHeroSection.vue'
import HomeAboutSection from '~/components/page/home/HomeAboutSection.vue'
import HomeAdvantagesSection from '~/components/page/home/HomeAdvantagesSection.vue'
import HomeServicesSection from '~/components/page/home/HomeServicesSection.vue'
import HomeProcessSection from '~/components/page/home/HomeProcessSection.vue'
import HomeContactMainActionSection from '~/components/page/home/HomeContactMainActionSection.vue'

// Layout：frontend
definePageMeta({
  layout: 'frontend'
})

// SEO：首頁
useSeoMeta({
  title: '雷力科技 Rally Technology',
  description: '雷力科技提供工業自動化整合、控制系統與資料平台的專業解決方案。'
})
</script>

<template>
  <div>
    <!-- Hero 區塊 -->
    <HomeHeroSection />

    <!-- About 區塊 -->
    <HomeAboutSection />

    <!-- Advantages 區塊 -->
    <HomeAdvantagesSection />

    <!-- Services 區塊 -->
    <HomeServicesSection />

    <!-- Clients 區塊 -->
    <HomeProcessSection />

    <!-- Messages 區塊 -->
    <HomeContactMainActionSection />
  </div>
</template>
