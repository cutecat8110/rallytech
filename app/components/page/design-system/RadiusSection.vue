<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { RadiusToken } from './types'

// 圓角：token 對照
const radiusTokens: RadiusToken[] = [
  {
    token: 'XS',
    value: '2px',
    previewClass: 'rounded-xs',
    usage: '細微圓角元件'
  },
  {
    token: 'S',
    value: '4px',
    previewClass: 'rounded-sm',
    usage: '輸入與小按鈕'
  },
  {
    token: 'M',
    value: '8px',
    previewClass: 'rounded-md',
    usage: '標準容器與卡片'
  },
  { token: 'L', value: '12px', previewClass: 'rounded-lg', usage: '大型容器' },
  {
    token: 'XL',
    value: '16px',
    previewClass: 'rounded-xl',
    usage: '主視覺容器'
  },
  {
    token: 'Full',
    value: '999px',
    previewClass: 'rounded-full',
    usage: 'Pill / Badge'
  }
]
</script>

<template>
  <section
    id="foundation-radius"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Foundations" title="Radius 圓角" />

      <div class="overflow-x-auto border border-neutral-200 bg-white">
        <table class="min-w-full text-left">
          <thead class="border-b border-neutral-200 bg-neutral-50">
            <tr>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Token</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">
                Preview
              </th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Value</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">用途</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="token in radiusTokens"
              :key="token.token"
              class="border-b border-neutral-200 last:border-b-0"
            >
              <td class="type-sys-body-s px-4 py-3 text-neutral-900">
                {{ token.token }}
              </td>
              <td class="px-4 py-3">
                <div
                  class="h-12 w-12 border border-neutral-300 bg-white"
                  :class="token.previewClass"
                />
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ token.value }}
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ token.usage }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
