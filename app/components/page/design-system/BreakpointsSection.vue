<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { Breakpoint } from './types'

// 斷點：尺寸規則
const breakpoints: Breakpoint[] = [
  { width: '375 / 640', device: '手機', padding: '16px' },
  { width: '768 / 1024', device: '平板', padding: '40px' },
  { width: '1280 / 1920', device: '筆電 / 桌機', padding: '80px' }
]
</script>

<template>
  <section
    id="layout-breakpoints"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Layout" title="Breakpoints 斷點" />

      <div class="overflow-x-auto border border-neutral-200 bg-white">
        <table class="min-w-full text-left">
          <thead class="border-b border-neutral-200 bg-neutral-50">
            <tr>
              <th class="type-sys-label-m px-5 py-4 text-neutral-900">
                裝置寬度
              </th>
              <th class="type-sys-label-m px-5 py-4 text-neutral-900">
                裝置類型
              </th>
              <th class="type-sys-label-m px-5 py-4 text-neutral-900">
                左右留白
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="row in breakpoints"
              :key="row.width"
              class="border-b border-neutral-200 last:border-0"
            >
              <td class="type-sys-body-s px-5 py-4 text-neutral-800">
                {{ row.width }}
              </td>
              <td class="type-sys-body-s px-5 py-4 text-neutral-800">
                {{ row.device }}
              </td>
              <td class="type-sys-body-s px-5 py-4 text-neutral-800">
                {{ row.padding }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
