<script setup lang="ts">
import { computed } from 'vue'

// 導覽：主選單
const headerNavItems = [
  { label: '關於我們', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '一站式整合', href: '#one-touch-experience' }
]

// 語系：選項
const headerLanguageOptions = [
  { code: 'zh-TW', label: '繁中', href: '/?lang=zh-TW', isCurrent: true },
  { code: 'en', label: 'EN', href: '/?lang=en' }
]

// 語系：目前值
const currentLanguage = computed(
  () =>
    headerLanguageOptions.find((option) => option.isCurrent) ??
    headerLanguageOptions[0]
)
</script>

<template>
  <header
    class="shadow-sys-sm sticky top-0 z-50 border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell">
      <div class="flex h-16 items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink
          to="/"
          aria-label="雷力科技首頁"
          class="inline-flex items-center"
        >
          <img
            src="/images/brand/RallyTech_Logo_TextOnly.svg"
            alt="雷力科技"
            class="h-7 w-auto md:h-8"
          />
        </NuxtLink>

        <!-- 桌機導覽 -->
        <nav class="hidden items-center gap-6 lg:flex">
          <NuxtLink
            v-for="item in headerNavItems"
            :key="item.label"
            :to="item.href"
            class="type-sys-label-s hover:text-primary-700 text-neutral-700 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <!-- 語系切換 -->
          <UPopover :content="{ side: 'bottom', align: 'end', sideOffset: 10 }">
            <UButton
              type="button"
              color="neutral"
              variant="ghost"
              class="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-neutral-600 transition-colors hover:bg-neutral-100/80 hover:text-neutral-900"
              aria-label="切換語系"
            >
              <UIcon
                name="i-ic-baseline-language"
                class="size-4 text-neutral-500 transition-colors group-hover:text-neutral-700"
              />
              <span class="type-sys-label-s text-current">
                {{ currentLanguage?.label ?? '語系' }}
              </span>
              <UIcon
                name="i-ic-baseline-keyboard-arrow-down"
                class="size-4 text-neutral-500 transition-colors group-hover:text-neutral-700"
              />
            </UButton>

            <!-- 語系清單 -->
            <template #content>
              <div
                class="shadow-sys-md w-36 rounded-md border border-neutral-200 bg-white p-1"
              >
                <UButton
                  v-for="option in headerLanguageOptions"
                  :key="option.code"
                  :to="option.href"
                  :aria-current="option.isCurrent ? 'page' : undefined"
                  :color="option.isCurrent ? 'primary' : 'neutral'"
                  :variant="option.isCurrent ? 'solid' : 'ghost'"
                  class="w-full justify-between rounded-sm px-3 py-2"
                >
                  <span class="type-sys-label-s font-medium">{{
                    option.label
                  }}</span>
                  <UIcon
                    v-if="option.isCurrent"
                    name="i-ic-baseline-check"
                    class="size-4 text-white/90"
                  />
                </UButton>
              </div>
            </template>
          </UPopover>

          <!-- Header 聯絡按鈕 -->
          <UButton
            to="#contact"
            color="primary"
            variant="solid"
            class="type-sys-label-s text-sys-inverse hidden rounded-full px-4 py-2 md:inline-flex"
          >
            聯絡我們
          </UButton>

          <!-- 手機選單 -->
          <UButton
            type="button"
            color="neutral"
            variant="outline"
            class="inline-flex size-9 items-center justify-center rounded-sm border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
            aria-label="開啟選單"
          >
            <UIcon name="i-ic-baseline-menu" class="size-5" />
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>
