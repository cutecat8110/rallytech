<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { HeaderHeight } from './types'

// 頁首：高度規則
const headerHeights: HeaderHeight[] = [
  { token: 'XL', value: '128px', usage: '首屏大型頁首', barClass: 'h-32' },
  { token: 'L', value: '80px', usage: '多入口頁首', barClass: 'h-20' },
  { token: 'M', value: '64px', usage: '標準前台頁首', barClass: 'h-16' },
  { token: 'Sub Nav', value: '48px', usage: '子選單導覽', barClass: 'h-12' },
  { token: 'Admin', value: '56px', usage: '後台工具列', barClass: 'h-14' }
]
</script>

<template>
  <section id="layout-header" class="section-sys-shell bg-white">
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Layout" title="Header Height 頁首高度" />

      <div class="divide-y divide-neutral-200 border-y border-neutral-200">
        <div
          v-for="item in headerHeights"
          :key="item.token"
          class="grid gap-4 py-4 md:grid-cols-[120px_minmax(0,1fr)_80px_minmax(0,1fr)] md:items-center"
        >
          <p class="type-sys-title-m text-neutral-900">
            {{ item.token }}
          </p>
          <div
            class="bg-secondary-900 w-full max-w-xs rounded-sm"
            :class="item.barClass"
          />
          <p class="type-sys-body-s text-neutral-700">
            {{ item.value }}
          </p>
          <p class="type-sys-label-s text-neutral-500">
            {{ item.usage }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
