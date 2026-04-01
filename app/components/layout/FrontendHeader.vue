<script setup lang="ts">
import { ref } from 'vue'
import {
  primaryNavItems,
  siteSupportLabel,
  topbarContactItems
} from './frontendSiteContent'

const isDrawerOpen = ref(false)
</script>

<template>
  <header class="relative z-50">
    <div class="border-b border-white/10 bg-primary-700 text-white">
      <div class="page-sys-shell">
        <div
          class="mx-auto flex max-w-6xl flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="type-sys-label-s tracking-[0.16em] text-white/60 uppercase">
            {{ siteSupportLabel }}
          </p>
          <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-0">
            <a
              v-for="item in topbarContactItems"
              :key="item.label"
              :href="item.href"
              class="type-sys-label-s inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white sm:px-4 sm:first:pl-0 sm:not-first:border-l sm:not-first:border-white/20"
            >
              <span class="text-white/44">{{ item.label }}</span>
              <span>{{ item.value }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sticky top-0 border-b border-neutral-200/80 bg-white/88 backdrop-blur-xl"
    >
      <div class="page-sys-shell">
        <div
          class="mx-auto flex h-20 max-w-6xl items-center justify-between gap-5"
        >
          <NuxtLink
            to="/"
            aria-label="雷力科技首頁"
            class="inline-flex items-center"
          >
            <img
              src="/images/brand/RallyTech_FullLogo.svg"
              alt="雷力科技"
              class="h-8 w-auto md:h-9"
            />
          </NuxtLink>

          <div class="hidden min-w-0 flex-1 justify-center lg:flex">
            <UNavigationMenu
              :items="primaryNavItems"
              color="neutral"
              variant="pill"
              class="justify-center"
            />
          </div>

          <div class="flex items-center gap-3">
            <UButton
              to="/#contact"
              color="neutral"
              variant="outline"
              class="type-sys-label-s hidden border-neutral-200/80 bg-white/72 px-5 py-2.5 md:inline-flex"
            >
              聯絡我們
            </UButton>

            <UDrawer
              v-model:open="isDrawerOpen"
              direction="right"
              inset
              :ui="{ content: 'w-full max-w-sm' }"
            >
              <UButton
                type="button"
                color="neutral"
                variant="outline"
                class="inline-flex size-11 items-center justify-center border-neutral-300/80 text-neutral-700 hover:bg-neutral-100 lg:hidden"
                aria-label="開啟選單"
              >
                <UIcon name="i-ic-baseline-menu" class="size-5" />
              </UButton>

              <template #title>首頁導覽</template>
              <template #description>
                直接跳到服務、交付方式與聯絡入口。
              </template>

              <template #body>
                <div class="flex flex-col gap-2">
                  <UButton
                    v-for="item in primaryNavItems"
                    :key="item.label"
                    :to="item.to"
                    color="neutral"
                    variant="ghost"
                    class="justify-between rounded-2xl px-4 py-4 text-left text-white hover:bg-white/6 hover:text-white"
                    @click="isDrawerOpen = false"
                  >
                    <span class="type-sys-title-m">{{ item.label }}</span>
                    <UIcon
                      name="i-ic-baseline-arrow-outward"
                      class="size-5 text-white/42"
                    />
                  </UButton>
                </div>
              </template>

              <template #footer>
                <UButton
                  to="/#contact"
                  block
                  color="primary"
                  variant="solid"
                  class="type-sys-label-m justify-center py-3 text-sys-inverse"
                  @click="isDrawerOpen = false"
                >
                  聯絡雷力科技
                </UButton>
              </template>
            </UDrawer>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
