<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { TypographySample } from './types'

type TypographyGroup = {
  name: string
  description: string
  samples: TypographySample[]
}

const tokenSamples: TypographySample[] = [
  {
    token: 'Display / XL',
    className: 'type-sys-display-xl',
    text: 'Rally Technology',
    usage: '首屏主標 / 700'
  },
  {
    token: 'Display / L',
    className: 'type-sys-display-l',
    text: 'Industrial Intelligence',
    usage: '品牌段落主標 / 700'
  },
  {
    token: 'Display / M',
    className: 'type-sys-display-m',
    text: 'Energy & Automation',
    usage: '中型視覺標題 / 700'
  },
  {
    token: 'Headline / L',
    className: 'type-sys-headline-l',
    text: '頁面主標題',
    usage: '頁面 H1 / H2 / 700'
  },
  {
    token: 'Headline / M',
    className: 'type-sys-headline-m',
    text: '區塊主標題',
    usage: '區塊標題 / 700'
  },
  {
    token: 'Headline / S',
    className: 'type-sys-headline-s',
    text: '區塊短標題',
    usage: '卡片群組標題 / 700'
  },
  {
    token: 'Title / L',
    className: 'type-sys-title-l',
    text: '模組標題',
    usage: '模組層級標題 / 600'
  },
  {
    token: 'Title / M',
    className: 'type-sys-title-m',
    text: '卡片標題',
    usage: '次層級標題 / 600'
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
  },
  {
    token: 'Nav',
    className: 'type-sys-nav',
    text: 'Services / About / Contact',
    usage: 'Header / topbar / 小型導覽 / 600'
  },
  {
    token: 'Kicker',
    className: 'type-sys-kicker uppercase',
    text: 'TURNKEY AUTOMATION DELIVERY',
    usage: '英文 eyebrow / overline / 600'
  }
]

const bilingualSamples: TypographyGroup[] = [
  {
    name: '中文 Only',
    description: '保留中文大標的穩定重量與正文可讀性，不用全域加粗換銳利感。',
    samples: [
      {
        token: 'Display / L',
        className: 'type-sys-display-l',
        text: '工業自動化交付，為可靠運轉而設計',
        usage: '大型中文主標維持 700，避免過黑或擁擠'
      },
      {
        token: 'Headline / M',
        className: 'type-sys-headline-m',
        text: '支援工業自動化專案的整合型服務',
        usage: '區塊標題維持清楚層級'
      },
      {
        token: 'Body / M',
        className: 'type-sys-body-m',
        text: '串接控制系統、工廠資料與現場執行，支撐現代工業專案。',
        usage: '正文維持 400，優先可讀性'
      }
    ]
  },
  {
    name: 'English Only',
    description:
      '在單一家族下用 600 與收斂 tracking 建立技術感，不直接複製雙字體策略。',
    samples: [
      {
        token: 'Kicker',
        className: 'type-sys-kicker uppercase',
        text: 'TURNKEY AUTOMATION DELIVERY',
        usage: '英文 eyebrow tracking 控制在 0.10em 左右'
      },
      {
        token: 'Nav',
        className: 'type-sys-nav uppercase',
        text: 'OUR SERVICES',
        usage: '導覽與小型資訊層改用獨立 nav token'
      },
      {
        token: 'Accent Heading',
        className: 'type-sys-headline-m typography-section__accent-heading',
        text: 'Engineering + Design Experts',
        usage: '英文字-only heading 以區塊內 600 + 微 tracking 提升辨識度'
      }
    ]
  },
  {
    name: 'Mixed Script + Acronym',
    description: '讓 acronym 與中文標題更有骨架，但不把整站都推向更黑的字重。',
    samples: [
      {
        token: 'Title / M 600',
        className: 'type-sys-title-m',
        text: 'SCADA / HMI 圖控',
        usage: 'mixed-script 卡片標題改用 600'
      },
      {
        token: 'Title / L 600',
        className: 'type-sys-title-l',
        text: 'PI Server 資料治理',
        usage: '模組標題承接技術名詞與中文說明'
      },
      {
        token: 'Body / S',
        className: 'type-sys-body-s',
        text: '透過 PLC / DCS、PI Server 與 Historian 串接現場資料。',
        usage: '內文仍維持 400，避免中英混排過黑'
      }
    ]
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
        description="用 token 與雙語樣本展示字體角色、字重分工與中英混排節奏。"
      />

      <div class="border-y border-neutral-200">
        <div
          v-for="sample in tokenSamples"
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

      <div class="grid gap-6 xl:grid-cols-3">
        <article
          v-for="group in bilingualSamples"
          :key="group.name"
          class="rounded-[var(--radius-lg)] border border-neutral-200 bg-neutral-50 p-6"
        >
          <div class="space-y-2">
            <p class="type-sys-nav uppercase text-primary-700">
              {{ group.name }}
            </p>
            <p class="type-sys-body-s text-neutral-600">
              {{ group.description }}
            </p>
          </div>

          <div class="mt-5 space-y-5">
            <div
              v-for="sample in group.samples"
              :key="`${group.name}-${sample.token}`"
              class="space-y-2 border-t border-neutral-200 pt-5 first:border-t-0 first:pt-0"
            >
              <p
                class="type-sys-label-s uppercase tracking-[0.08em] text-neutral-500"
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
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typography-section__accent-heading {
  letter-spacing: 0.012em;
  font-weight: 600;
}
</style>
