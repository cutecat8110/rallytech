<script setup lang="ts">
// cspell:words iconify
import type { Topic } from './types'

const foundationTopics: Topic[] = [
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
    description: '公開站 CTA taxonomy 與 internal-only 邊界'
  },
  {
    id: 'foundation-space',
    icon: 'i-ic-baseline-straighten',
    title: 'Space 間距',
    description: 'Space-4 到 Space-128 節奏'
  }
]

const layoutTopics: Topic[] = [
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
</script>

<template>
  <section
    class="section-sys-shell--compact border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell grid gap-10 xl:grid-cols-2">
      <div>
        <p class="type-sys-title-l text-neutral-900">Foundations 基礎</p>
        <ul
          class="mt-4 divide-y divide-neutral-200 border-y border-neutral-200"
        >
          <li
            v-for="item in foundationTopics"
            :key="item.id"
            class="flex items-start gap-3 py-4"
          >
            <UIcon :name="item.icon" class="text-primary-600 mt-0.5 size-4" />
            <div class="stack-sys-8">
              <p class="type-sys-title-m text-neutral-900">
                {{ item.title }}
              </p>
              <p class="type-sys-body-s text-neutral-600">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <p class="type-sys-title-l text-neutral-900">Layout 佈局</p>
        <ul
          class="mt-4 divide-y divide-neutral-200 border-y border-neutral-200"
        >
          <li
            v-for="item in layoutTopics"
            :key="item.id"
            class="flex items-start gap-3 py-4"
          >
            <UIcon :name="item.icon" class="text-primary-600 mt-0.5 size-4" />
            <div class="stack-sys-8">
              <p class="type-sys-title-m text-neutral-900">
                {{ item.title }}
              </p>
              <p class="type-sys-body-s text-neutral-600">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
