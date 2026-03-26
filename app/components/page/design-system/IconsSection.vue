<script setup lang="ts">
// cspell:words iconify
import SectionHeader from './SectionHeader.vue'
import type { IconSample } from './types'

const iconSamples: IconSample[] = [
  {
    label: 'Navigation',
    icon: 'i-ic-baseline-menu',
    usage: '主導覽與行動選單'
  },
  {
    label: 'Action',
    icon: 'i-ic-baseline-arrow-forward',
    usage: '行動導向與連結'
  },
  {
    label: 'Search',
    icon: 'i-ic-baseline-search',
    usage: '搜尋與查詢'
  },
  {
    label: 'Security',
    icon: 'i-ic-baseline-verified-user',
    usage: '安全與合規訊息'
  },
  {
    label: 'Energy',
    icon: 'i-ic-baseline-bolt',
    usage: '能源/效率主題'
  },
  {
    label: 'Alert',
    icon: 'i-ic-baseline-warning-amber',
    usage: '提醒與警示狀態'
  }
]
</script>

<template>
  <section
    id="foundation-icons"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Foundations" title="Icons 圖示" />

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in iconSamples"
          :key="item.label"
          class="flex items-center gap-4 border-b border-neutral-200 py-3"
        >
          <div class="bg-primary-100 ring-primary-200 rounded-sm p-2 ring-1">
            <UIcon :name="item.icon" class="text-primary-700 size-5" />
          </div>
          <div class="stack-sys-8">
            <p class="type-sys-title-m text-neutral-900">
              {{ item.label }}
            </p>
            <p class="type-sys-body-s text-neutral-600">
              {{ item.usage }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
