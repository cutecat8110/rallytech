<script setup lang="ts">
// 設計系統：區塊組裝
import HeroSection from '~/components/page/design-system/HeroSection.vue'
import OverviewSection from '~/components/page/design-system/OverviewSection.vue'
import ColorSection from '~/components/page/design-system/ColorSection.vue'
import TypographySection from '~/components/page/design-system/TypographySection.vue'
import IconsSection from '~/components/page/design-system/IconsSection.vue'
import RadiusSection from '~/components/page/design-system/RadiusSection.vue'
import ShadowsSection from '~/components/page/design-system/ShadowsSection.vue'
import SpaceSection from '~/components/page/design-system/SpaceSection.vue'
import BreakpointsSection from '~/components/page/design-system/BreakpointsSection.vue'
import GridSection from '~/components/page/design-system/GridSection.vue'
import HeaderSection from '~/components/page/design-system/HeaderSection.vue'

// Layout：backend
definePageMeta({
  layout: 'backend'
})

// SEO：內部頁
useSeoMeta({
  title: 'Design System / RallyTech',
  description:
    'RallyTech 設計系統活體展示頁，集中檢視色彩、字體、間距、圓角與版面規則。',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <div class="bg-secondary-900 min-h-screen overflow-x-hidden text-neutral-900">
    <!-- Hero 區塊 -->
    <HeroSection />

    <!-- Overview 區塊 -->
    <section class="section-sys-shell--compact bg-secondary-900">
      <div class="page-sys-shell">
        <div
          class="shadow-sys-lg overflow-hidden rounded-lg border border-white/15 bg-white"
        >
          <OverviewSection />
        </div>
      </div>
    </section>

    <!-- Foundations 區塊 -->
    <section class="section-sys-shell--compact bg-secondary-900">
      <div class="page-sys-shell">
        <div class="rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
          <div class="bg-primary-500 h-1.5 w-14 rounded-full" />
          <div class="stack-sys-8 mt-5">
            <p
              class="type-sys-label-s text-primary-300 tracking-widest uppercase"
            >
              Foundations
            </p>
            <h2 class="type-sys-headline-l md:type-sys-display-m text-white">
              基礎系統
            </h2>
            <p class="type-sys-body-s max-w-3xl text-white/75">
              色彩、字體、圖示、圓角、陰影與間距，統一以 token 規則為準。
            </p>
          </div>
        </div>

        <div
          class="shadow-sys-lg mt-10 overflow-hidden rounded-lg border border-white/15 bg-white"
        >
          <ColorSection />
          <TypographySection />
          <IconsSection />
          <RadiusSection />
          <ShadowsSection />
          <SpaceSection />
        </div>
      </div>
    </section>

    <!-- Layout 區塊 -->
    <section class="section-sys-shell bg-secondary-900">
      <div class="page-sys-shell">
        <div class="rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
          <div class="bg-primary-500 h-1.5 w-14 rounded-full" />
          <div class="stack-sys-8 mt-5">
            <p
              class="type-sys-label-s text-primary-300 tracking-widest uppercase"
            >
              Layout
            </p>
            <h2 class="type-sys-headline-l md:type-sys-display-m text-white">
              佈局系統
            </h2>
            <p class="type-sys-body-s max-w-3xl text-white/75">
              斷點、網格與頁首高度規則，提供跨頁一致的結構節奏。
            </p>
          </div>
        </div>

        <div
          class="shadow-sys-lg mt-10 overflow-hidden rounded-lg border border-white/15 bg-white"
        >
          <BreakpointsSection />
          <GridSection />
          <HeaderSection />
        </div>
      </div>
    </section>
  </div>
</template>
