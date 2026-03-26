<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { SpaceToken } from './types'

// 間距：token 對照
const spaceTokens: SpaceToken[] = [
  { token: 'Space-4', value: '4px', widthClass: 'w-1', usage: '最小元素間距' },
  { token: 'Space-8', value: '8px', widthClass: 'w-2', usage: '緊密元件間距' },
  { token: 'Space-12', value: '12px', widthClass: 'w-3', usage: '高密度場景' },
  {
    token: 'Space-16',
    value: '16px',
    widthClass: 'w-4',
    usage: '基準間距尺度'
  },
  { token: 'Space-24', value: '24px', widthClass: 'w-6', usage: '群組間距' },
  { token: 'Space-40', value: '40px', widthClass: 'w-10', usage: '區塊分段' },
  { token: 'Space-80', value: '80px', widthClass: 'w-20', usage: '大型留白' },
  {
    token: 'Space-128',
    value: '128px',
    widthClass: 'w-32',
    usage: '首屏級留白'
  }
]
</script>

<template>
  <section
    id="foundation-space"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Foundations" title="Space 間距" />

      <div class="divide-y divide-neutral-200 border-y border-neutral-200">
        <div
          v-for="token in spaceTokens"
          :key="token.token"
          class="grid gap-4 py-4 md:grid-cols-[150px_minmax(0,1fr)_80px_minmax(0,1fr)] md:items-center"
        >
          <p class="type-sys-title-m text-neutral-900">
            {{ token.token }}
          </p>
          <div
            class="bg-primary-500 h-3 rounded-full"
            :class="token.widthClass"
          />
          <p class="type-sys-body-s text-neutral-700">
            {{ token.value }}
          </p>
          <p class="type-sys-body-s text-neutral-600">
            {{ token.usage }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
