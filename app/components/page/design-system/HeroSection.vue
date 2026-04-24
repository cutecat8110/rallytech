<script setup lang="ts">
// cspell:words iconify
import { contrastSolidLightButtonTheme } from '~/utils/button-themes'
import type { Topic } from './types'

const previewRoute = '/design-system'
const colorLockVersion = 'RALLY-COLOR-LOCK-v1'

const quickLinks: Topic[] = [
  {
    id: 'foundation-color',
    icon: 'i-ic-baseline-palette',
    title: 'Color 色彩',
    description: '語意角色與完整色階'
  },
  {
    id: 'foundation-typography',
    icon: 'i-ic-baseline-text-fields',
    title: 'Typography 字體',
    description: 'Display / Headline / Title / Body / Label'
  },
  {
    id: 'foundation-icons',
    icon: 'i-ic-baseline-auto-awesome',
    title: 'Icons 圖示',
    description: '代表性 icon 與使用情境'
  },
  {
    id: 'foundation-radius',
    icon: 'i-ic-baseline-circle',
    title: 'Radius 圓角',
    description: 'XS 到 Full 的半徑系統'
  },
  {
    id: 'foundation-shadows',
    icon: 'i-ic-baseline-layers',
    title: 'Shadows 陰影',
    description: 'Shadow-1 / 2 / 3 層級'
  },
  {
    id: 'foundation-buttons',
    icon: 'i-ic-baseline-smart-button',
    title: 'Buttons 按鈕',
    description: '公開站 CTA taxonomy 與 internal-only preview'
  },
  {
    id: 'foundation-space',
    icon: 'i-ic-baseline-straighten',
    title: 'Space 間距',
    description: 'Space-4 到 Space-128 節奏'
  },
  {
    id: 'layout-breakpoints',
    icon: 'i-ic-baseline-devices',
    title: 'Breakpoints 斷點',
    description: '裝置寬度與左右留白'
  },
  {
    id: 'layout-grid',
    icon: 'i-ic-baseline-grid-view',
    title: 'Grid 網格',
    description: '4 / 8 / 12 欄佈局規則'
  },
  {
    id: 'layout-header',
    icon: 'i-ic-baseline-web-asset',
    title: 'Header Height 頁首高度',
    description: 'XL / L / M / Sub Nav / Admin'
  }
]

const designPrinciples = [
  '語意優先：先定角色，再選色階',
  'Nuxt UI 三層：app/app.config.ts → UTheme → 元件 :ui/class',
  '色彩鎖定：深色骨架統一使用 Secondary 700-950',
  '公開站按鈕只保留 5 種 archetype，internal-only 變體不上 production'
] as const
</script>

<template>
  <section
    class="section-sys-shell--hero bg-sys-rally-hero border-b border-white/10 text-white"
  >
    <div class="page-sys-shell stack-sys-40">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <p
          class="type-sys-label-s inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 tracking-widest text-white/90 uppercase"
        >
          {{ colorLockVersion }}
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <p class="type-sys-label-s text-white/70">
            Route: {{ previewRoute }}
          </p>
          <NuxtLink
            to="/design-system-color-lab"
            class="type-sys-label-s inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-white transition-colors hover:bg-white/20"
          >
            Color Lab
          </NuxtLink>
        </div>
      </div>

      <div
        class="grid gap-12 xl:grid-cols-[minmax(0,1.35fr)_minmax(18rem,1fr)]"
      >
        <div class="stack-sys-24">
          <div class="stack-sys-16">
            <h1
              class="type-sys-display-m md:type-sys-display-l xl:type-sys-display-xl max-w-5xl text-white"
            >
              RallyTech 設計系統
            </h1>
            <p class="type-sys-body-m max-w-3xl text-white/80">
              這頁是目前定版規劃的活體基準，集中對齊色彩、字體、間距與佈局規則。
              深色骨架、科技青綠主色與低頻點綴的使用邏輯，都在這裡直接驗證。
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="item in quickLinks"
              :key="item.id"
              :href="`#${item.id}`"
              class="type-sys-label-s hover:border-primary-300 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <UIcon :name="item.icon" class="text-primary-300 size-4" />
              <span>{{ item.title }}</span>
            </a>
          </div>
        </div>

        <div
          class="shadow-sys-md rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
        >
          <div class="stack-sys-16">
            <p class="type-sys-title-l text-white">Snapshot</p>
            <ul class="type-sys-body-s space-y-2 text-white/80">
              <li v-for="item in designPrinciples" :key="item">• {{ item }}</li>
            </ul>
            <div class="grid gap-3 sm:grid-cols-2">
              <UButton
                color="primary"
                variant="solid"
                block
                label="Primary solid"
              />
              <UTheme :ui="contrastSolidLightButtonTheme">
                <UButton
                  block
                  color="neutral"
                  variant="solid"
                  label="Contrast solid"
                />
              </UTheme>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
