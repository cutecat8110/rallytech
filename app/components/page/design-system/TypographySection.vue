<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { TypographySample } from './types'

// 字體：樣本資料
const typographySamples: TypographySample[] = [
  {
    token: 'Display / XL',
    className: 'type-sys-display-xl',
    text: 'Rally Technology',
    usage: '首屏主標'
  },
  {
    token: 'Display / L',
    className: 'type-sys-display-l',
    text: 'Industrial Intelligence',
    usage: '品牌段落主標'
  },
  {
    token: 'Display / M',
    className: 'type-sys-display-m',
    text: 'Energy & Automation',
    usage: '中型視覺標題'
  },
  {
    token: 'Headline / L',
    className: 'type-sys-headline-l',
    text: '頁面主標題',
    usage: '頁面 H1 / H2'
  },
  {
    token: 'Headline / M',
    className: 'type-sys-headline-m',
    text: '區塊主標題',
    usage: '區塊標題'
  },
  {
    token: 'Headline / S',
    className: 'type-sys-headline-s',
    text: '區塊短標題',
    usage: '卡片群組標題'
  },
  {
    token: 'Title / L',
    className: 'type-sys-title-l',
    text: '模組標題',
    usage: '模組層級標題'
  },
  {
    token: 'Title / M',
    className: 'type-sys-title-m',
    text: '卡片標題',
    usage: '次層級標題'
  },
  {
    token: 'Body / M',
    className: 'type-sys-body-m',
    text: '這是一般內文，建議作為主要段落閱讀文字。',
    usage: '主要敘述文字'
  },
  {
    token: 'Body / S',
    className: 'type-sys-body-s',
    text: '這是次要內文，適合輔助說明或補充訊息。',
    usage: '次要敘述文字'
  },
  {
    token: 'Label / M',
    className: 'type-sys-label-m',
    text: 'BUTTON LABEL',
    usage: '按鈕與欄位標籤'
  },
  {
    token: 'Label / S',
    className: 'type-sys-label-s',
    text: 'FIELD LABEL',
    usage: '輔助標籤'
  }
]
</script>

<template>
  <section
    id="foundation-typography"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader
        eyebrow="Foundations"
        title="Typography 字體"
        description="用 token 層級展示字體角色與使用情境。"
      />

      <div class="border-y border-neutral-200">
        <div
          v-for="sample in typographySamples"
          :key="sample.token"
          class="grid gap-4 border-b border-neutral-200 py-6 last:border-b-0 md:grid-cols-[200px_minmax(0,1fr)_180px] md:items-center"
        >
          <p
            class="type-sys-label-s text-primary-700 tracking-[0.08em] uppercase"
          >
            {{ sample.token }}
          </p>
          <p :class="[sample.className, 'text-neutral-950']">
            {{ sample.text }}
          </p>
          <p class="type-sys-body-s text-neutral-600">
            {{ sample.usage }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
