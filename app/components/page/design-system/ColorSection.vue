<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { ColorGroup, PaletteKey, Swatch } from './types'

// 色階：50~950
const paletteShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

// 色票：背景 class
const paletteBackgroundClasses: Record<PaletteKey, readonly string[]> = {
  primary: [
    'bg-primary-50',
    'bg-primary-100',
    'bg-primary-200',
    'bg-primary-300',
    'bg-primary-400',
    'bg-primary-500',
    'bg-primary-600',
    'bg-primary-700',
    'bg-primary-800',
    'bg-primary-900',
    'bg-primary-950'
  ],
  secondary: [
    'bg-secondary-50',
    'bg-secondary-100',
    'bg-secondary-200',
    'bg-secondary-300',
    'bg-secondary-400',
    'bg-secondary-500',
    'bg-secondary-600',
    'bg-secondary-700',
    'bg-secondary-800',
    'bg-secondary-900',
    'bg-secondary-950'
  ],
  accent: [
    'bg-accent-50',
    'bg-accent-100',
    'bg-accent-200',
    'bg-accent-300',
    'bg-accent-400',
    'bg-accent-500',
    'bg-accent-600',
    'bg-accent-700',
    'bg-accent-800',
    'bg-accent-900',
    'bg-accent-950'
  ],
  neutral: [
    'bg-neutral-50',
    'bg-neutral-100',
    'bg-neutral-200',
    'bg-neutral-300',
    'bg-neutral-400',
    'bg-neutral-500',
    'bg-neutral-600',
    'bg-neutral-700',
    'bg-neutral-800',
    'bg-neutral-900',
    'bg-neutral-950'
  ],
  success: [
    'bg-success-50',
    'bg-success-100',
    'bg-success-200',
    'bg-success-300',
    'bg-success-400',
    'bg-success-500',
    'bg-success-600',
    'bg-success-700',
    'bg-success-800',
    'bg-success-900',
    'bg-success-950'
  ],
  info: [
    'bg-info-50',
    'bg-info-100',
    'bg-info-200',
    'bg-info-300',
    'bg-info-400',
    'bg-info-500',
    'bg-info-600',
    'bg-info-700',
    'bg-info-800',
    'bg-info-900',
    'bg-info-950'
  ],
  warning: [
    'bg-warning-50',
    'bg-warning-100',
    'bg-warning-200',
    'bg-warning-300',
    'bg-warning-400',
    'bg-warning-500',
    'bg-warning-600',
    'bg-warning-700',
    'bg-warning-800',
    'bg-warning-900',
    'bg-warning-950'
  ],
  danger: [
    'bg-danger-50',
    'bg-danger-100',
    'bg-danger-200',
    'bg-danger-300',
    'bg-danger-400',
    'bg-danger-500',
    'bg-danger-600',
    'bg-danger-700',
    'bg-danger-800',
    'bg-danger-900',
    'bg-danger-950'
  ]
}

// 色票：Hex 值
const paletteHexValues: Record<PaletteKey, readonly string[]> = {
  primary: [
    '#e9faf7',
    '#cdf5ee',
    '#a1ebdf',
    '#70dfcd',
    '#4bcfb9',
    '#30bba5',
    '#249f8d',
    '#1f7f72',
    '#1d665d',
    '#1b554d',
    '#0a302c'
  ],
  secondary: [
    '#eff4f4',
    '#e3eaeb',
    '#cbd7d9',
    '#aabec2',
    '#87a3a9',
    '#68838a',
    '#516a72',
    '#3f545c',
    '#303f47',
    '#223038',
    '#0a1216'
  ],
  accent: [
    '#faf6ef',
    '#f2e8d8',
    '#e4d0b2',
    '#d4b387',
    '#c09262',
    '#a98657',
    '#8f6d46',
    '#735439',
    '#614634',
    '#533d31',
    '#2d1f17'
  ],
  neutral: [
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#9f9fa9',
    '#71717b',
    '#52525c',
    '#3f3f47',
    '#27272a',
    '#18181b',
    '#09090b'
  ],
  success: [
    '#eefaf6',
    '#d8f1e8',
    '#b5e3d3',
    '#85d0b8',
    '#52b894',
    '#369a78',
    '#2a8566',
    '#236a53',
    '#1f5544',
    '#1a4739',
    '#0c281f'
  ],
  info: [
    '#ecf3ff',
    '#dbe8ff',
    '#bfd4ff',
    '#93b6ff',
    '#5f90ff',
    '#3a6df5',
    '#1e4fbf',
    '#193f98',
    '#18367d',
    '#1a3168',
    '#101a3f'
  ],
  warning: [
    '#f7f3ec',
    '#ebdfcc',
    '#d8c1a1',
    '#c49f72',
    '#ad824d',
    '#9a6a30',
    '#865827',
    '#6c4622',
    '#583a21',
    '#4b321f',
    '#2b1c11'
  ],
  danger: [
    '#fdf2f4',
    '#fbe7eb',
    '#f6cfda',
    '#efabc0',
    '#e27d9e',
    '#c24555',
    '#a73948',
    '#893140',
    '#732d3a',
    '#622a33',
    '#3a131d'
  ]
}

// 色票：組合資料
function createSwatches(key: PaletteKey): Swatch[] {
  const backgroundClasses = paletteBackgroundClasses[key]
  const hexValues = paletteHexValues[key]

  return paletteShades.map((shade, index) => ({
    key,
    shade,
    bgClass: backgroundClasses[index] ?? 'bg-neutral-100',
    hex: hexValues[index] ?? '#000000',
    textClass: shade >= 600 ? 'text-white' : 'text-neutral-950'
  }))
}

function isSecondaryLowPriority(swatch: Swatch): boolean {
  return swatch.key === 'secondary' && swatch.shade <= 400
}

function isSecondaryPreferred(swatch: Swatch): boolean {
  return swatch.key === 'secondary' && swatch.shade >= 700
}

// 色票：語意分組
const colorGroups: ColorGroup[] = [
  {
    name: 'Primary',
    usage: '主操作、核心行動按鈕',
    swatches: createSwatches('primary')
  },
  {
    name: 'Secondary',
    usage: '深色容器與層次背景（建議 700-950；50-400 為低優先）',
    swatches: createSwatches('secondary')
  },
  {
    name: 'Accent',
    usage: '銅色低頻點綴與品牌亮點',
    swatches: createSwatches('accent')
  },
  {
    name: 'Neutral',
    usage: '文字、邊框、表面骨架',
    swatches: createSwatches('neutral')
  },
  {
    name: 'Success',
    usage: '完成與成功回饋',
    swatches: createSwatches('success')
  },
  {
    name: 'Info',
    usage: '資訊提示與低亮藍灰層次',
    swatches: createSwatches('info')
  },
  {
    name: 'Warning',
    usage: '提醒與待處理狀態',
    swatches: createSwatches('warning')
  },
  {
    name: 'Danger',
    usage: '錯誤、刪除與破壞性操作',
    swatches: createSwatches('danger')
  }
]

// 色彩：治理規則
const colorLockRules = [
  '深色骨架以 Secondary 700-950 為主，背景優先用 900/950。',
  'Primary 承接主要行動按鈕，白字按鈕預設使用 primary-700。',
  'Info 僅作資訊提示與低亮藍灰層次，不做大面積主視覺。',
  'Accent 維持低頻使用，保留在品牌點綴與局部強調。'
] as const
</script>

<template>
  <section
    id="foundation-color"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader
        eyebrow="Foundations"
        title="Color 色彩"
        description="以語意角色分組顯示，並完整列出各色階 token 與 hex 值。"
      />

      <article class="border-primary-600 border-l-4 bg-neutral-50 px-5 py-5">
        <p class="type-sys-label-s text-primary-700 tracking-widest uppercase">
          RALLY-COLOR-LOCK-v1
        </p>
        <h3 class="type-sys-title-l mt-3 text-neutral-950">色彩治理核心規則</h3>
        <ul class="mt-4 grid gap-2 md:grid-cols-2">
          <li
            v-for="rule in colorLockRules"
            :key="rule"
            class="type-sys-body-s rounded-sm border border-neutral-200 bg-white px-3 py-2 text-neutral-700"
          >
            {{ rule }}
          </li>
        </ul>
      </article>

      <div class="stack-sys-24">
        <article
          v-for="group in colorGroups"
          :key="group.name"
          class="border-t border-neutral-200 pt-8 first:border-t-0 first:pt-0"
        >
          <div class="stack-sys-8">
            <p class="type-sys-title-l text-neutral-900">
              {{ group.name }}
            </p>
            <p class="type-sys-body-s text-neutral-700">
              {{ group.usage }}
            </p>
          </div>

          <div class="mt-5 grid gap-3 md:grid-cols-4 xl:grid-cols-11">
            <div
              v-for="swatch in group.swatches"
              :key="`${group.name}-${swatch.shade}`"
              class="overflow-hidden rounded-sm border border-neutral-200"
              :class="[isSecondaryLowPriority(swatch) ? 'opacity-70' : '']"
            >
              <div
                class="flex min-h-24 items-end p-3"
                :class="[
                  swatch.bgClass,
                  swatch.textClass,
                  isSecondaryPreferred(swatch)
                    ? 'ring-1 ring-white/30 ring-inset'
                    : ''
                ]"
              >
                <span class="type-sys-label-s">{{ swatch.shade }}</span>
              </div>
              <div class="border-t border-neutral-200 bg-white px-3 py-2">
                <p class="type-sys-label-s text-neutral-900">
                  {{ swatch.key }}-{{ swatch.shade }}
                </p>
                <p class="type-sys-label-s mt-1 text-neutral-500">
                  {{ swatch.hex }}
                </p>
                <p
                  v-if="isSecondaryPreferred(swatch)"
                  class="type-sys-label-s text-primary-700 mt-1"
                >
                  建議深色容器
                </p>
                <p
                  v-else-if="isSecondaryLowPriority(swatch)"
                  class="type-sys-label-s mt-1 text-neutral-500"
                >
                  低優先
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
