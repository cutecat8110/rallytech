<script setup lang="ts">
// 價值卡：對齊 Pentagon 首頁文案
const advantageItems = [
  {
    title: '1. 專業能力',
    description:
      '由具備現場經驗的工程團隊提供技術判斷與執行能力，確保專案各階段穩定推進。',
    icon: 'i-ic-round-precision-manufacturing'
  },
  {
    title: '2. 先進技術',
    description:
      '導入新技術與整合能力，包含 IoT 與資安應用，協助客戶提升系統效能與可擴充性。',
    icon: 'i-ic-round-memory'
  },
  {
    title: '3. 策略夥伴',
    description: '結合產業夥伴與研究資源，提供兼具前瞻性與可落地性的工程方案。',
    icon: 'i-ic-round-handshake'
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-secondary-900 py-16 text-white">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary-400/20 to-transparent"
    />

    <div class="page-sys-shell relative">
      <div class="mx-auto max-w-6xl">
        <h2 class="type-sys-display-m text-center text-white">
          工業自動化與儀控整合的專業團隊
        </h2>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article
            v-for="item in advantageItems"
            :key="item.title"
            class="shadow-sys-sm rounded-2xl border border-white/12 bg-white/6 p-6"
          >
            <div
              class="flex size-11 items-center justify-center rounded-full bg-primary-500/25"
            >
              <UIcon :name="item.icon" class="size-6 text-primary-200" />
            </div>
            <h3 class="type-sys-headline-s mt-4 text-white">
              {{ item.title }}
            </h3>
            <p class="type-sys-body-s mt-3 leading-7 text-white/82">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
