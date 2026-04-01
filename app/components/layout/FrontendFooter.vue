<script setup lang="ts">
import { ref } from 'vue'
import {
  footerContactItems,
  footerNavItems,
  siteFooterTagline,
  siteSummary
} from './frontendSiteContent'

const newsletterEmail = ref('')
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="bg-secondary-950 text-white">
    <div class="page-sys-shell pb-8 pt-10">
      <div class="mx-auto max-w-6xl">
        <div
          class="grid gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,1.05fr)_minmax(16rem,0.8fr)]"
        >
          <div class="space-y-5">
            <p
              class="type-sys-label-s tracking-[0.18em] text-primary-300 uppercase"
            >
              雷力科技
            </p>
            <NuxtLink
              to="/"
              aria-label="雷力科技首頁"
              class="inline-flex w-fit items-center"
            >
              <img
                src="/images/brand/RallyTech_FullLogo_White.svg"
                alt="雷力科技"
                class="h-9 w-auto"
              />
            </NuxtLink>
            <p class="type-sys-body-s max-w-md text-white/72">
              {{ siteSummary }}
            </p>
            <nav class="flex flex-wrap gap-4 pt-2">
              <NuxtLink
                v-for="item in footerNavItems"
                :key="item.label"
                :to="item.to"
                class="type-sys-label-s text-white/68 transition-colors hover:text-primary-300"
              >
                {{ item.label }}
              </NuxtLink>
            </nav>
          </div>

          <div class="space-y-4">
            <p
              class="type-sys-label-s tracking-[0.18em] text-white/48 uppercase"
            >
              更新資訊
            </p>
            <form class="space-y-3" @submit.prevent>
              <label
                class="type-sys-title-m block text-white"
                for="footer-updates"
              >
                取得專案與服務更新
              </label>
              <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
                <UInput
                  id="footer-updates"
                  v-model="newsletterEmail"
                  type="email"
                  placeholder="輸入工作信箱"
                />
                <UButton
                  type="submit"
                  color="neutral"
                  variant="outline"
                  class="bg-white text-secondary-950 hover:bg-white"
                  :ui="{ base: 'hover:translate-y-0' }"
                >
                  送出
                </UButton>
              </div>
              <p class="type-sys-body-s text-white/54">
                首頁展示用更新入口，暫未串接後端訂閱流程。
              </p>
            </form>
          </div>

          <div class="space-y-4">
            <h3 class="type-sys-title-m text-white">聯絡資訊</h3>
            <div class="grid gap-4">
              <div
                v-for="item in footerContactItems"
                :key="item.label"
                class="space-y-1"
              >
                <p
                  class="type-sys-label-s tracking-[0.1em] text-white/42 uppercase"
                >
                  {{ item.label }}
                </p>
                <a
                  v-if="item.href"
                  :href="item.href"
                  class="type-sys-body-m block text-white/78 transition-colors hover:text-white"
                >
                  {{ item.value }}
                </a>
                <p v-else class="type-sys-body-m text-white/78">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col gap-3 py-5 text-white/48 md:flex-row md:items-center md:justify-between"
        >
          <p class="type-sys-label-s">
            © {{ currentYear }} Rally Technology. All rights reserved.
          </p>
          <p class="type-sys-label-s">
            {{ siteFooterTagline }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
