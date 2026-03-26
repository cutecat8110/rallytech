<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { GridRule } from './types'

// 網格：欄數規則
const gridRules: GridRule[] = [
  { condition: '< 768', columns: '4 欄' },
  { condition: '>= 768', columns: '8 欄' },
  { condition: '>= 1024', columns: '12 欄' }
]
</script>

<template>
  <section
    id="layout-grid"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Layout" title="Grid 網格" />

      <div class="grid gap-8 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <div class="overflow-x-auto border border-neutral-200 bg-white">
          <table class="min-w-full text-left">
            <thead class="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th class="type-sys-label-m px-5 py-4 text-neutral-900">
                  條件
                </th>
                <th class="type-sys-label-m px-5 py-4 text-neutral-900">
                  欄數
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in gridRules"
                :key="row.condition"
                class="border-b border-neutral-200 last:border-0"
              >
                <td class="type-sys-body-s px-5 py-4 text-neutral-800">
                  {{ row.condition }}
                </td>
                <td class="type-sys-body-s px-5 py-4 text-neutral-800">
                  {{ row.columns }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="border border-neutral-200 bg-white p-5">
          <div class="stack-sys-16">
            <p class="type-sys-title-m text-neutral-900">Grid Preview</p>
            <div class="rounded-md border border-neutral-200 bg-neutral-50 p-3">
              <div
                class="grid grid-cols-4 gap-2 md:grid-cols-8 lg:grid-cols-12"
              >
                <div
                  v-for="column in 12"
                  :key="column"
                  class="bg-primary-200 h-8 rounded-xs"
                />
              </div>
            </div>
            <p class="type-sys-body-s text-neutral-700">
              4 / 8 / 12 欄依斷點切換，模組沿欄線排列。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
