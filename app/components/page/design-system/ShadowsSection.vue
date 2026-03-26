<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { ShadowToken } from './types'

// 陰影：層級對照
const shadowTokens: ShadowToken[] = [
  {
    token: 'Shadow-1',
    usage: '貼地內容、輸入框、低層卡片',
    previewClass: 'shadow-sys-sm',
    value: '0px 1px 2px -1px / 0px 2px 4px / 0px 4px 10px'
  },
  {
    token: 'Shadow-2',
    usage: '互動卡片、下拉層、頁首滾動態',
    previewClass: 'shadow-sys-md',
    value: '0px 3px 8px -3px / 0px 6px 14px / 0px 10px 24px'
  },
  {
    token: 'Shadow-3',
    usage: 'Modal、Drawer、高層覆蓋',
    previewClass: 'shadow-sys-lg',
    value: '0px 6px 16px -6px / 0px 10px 24px / 0px 16px 40px'
  }
]
</script>

<template>
  <section
    id="foundation-shadows"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Foundations" title="Shadows 陰影" />

      <div class="grid gap-8 xl:grid-cols-3">
        <article
          v-for="token in shadowTokens"
          :key="token.token"
          class="border-t border-neutral-200 pt-6 first:border-l-0 first:pl-0 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-6"
        >
          <div class="stack-sys-16">
            <div
              class="rounded-md border border-neutral-200 bg-white p-6"
              :class="token.previewClass"
            >
              <p class="type-sys-label-s text-neutral-500">
                {{ token.token }}
              </p>
              <p class="type-sys-title-m mt-2 text-neutral-900">
                Shadow Preview
              </p>
            </div>
            <div class="stack-sys-8">
              <p class="type-sys-body-s text-neutral-700">
                {{ token.usage }}
              </p>
              <p class="type-sys-label-s text-neutral-500">
                {{ token.value }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
