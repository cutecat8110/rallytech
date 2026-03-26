<script setup lang="ts">
// Process：四階段
const processSteps = [
  '01 需求盤點',
  '02 規劃設計',
  '03 導入執行',
  '04 驗證優化'
]

// Stats：指標區
const statsItems = [
  { value: '15k', label: '客戶' },
  { value: '78+', label: '據點' },
  { value: '3k', label: '員工' },
  { value: '8+', label: '國家' }
]

// OTE：一站式體驗
const oneTouchItems = [
  '資料整合',
  'Call-Out 系統整合與試車導入',
  '振動分析',
  '本地 / 雲端 Historian 部署',
  '場域管理系統整合'
]
</script>

<template>
  <section class="bg-neutral-100 section-sys-shell">
    <div class="page-sys-shell">
      <div class="mx-auto max-w-6xl text-center">
        <h2 class="type-sys-display-m text-neutral-600">專案流程</h2>

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="item in processSteps"
            :key="item"
            class="shadow-sys-sm rounded-2xl border border-neutral-300 bg-white p-6"
          >
            <p class="type-sys-headline-s text-neutral-700">
              {{ item }}
            </p>
          </article>
        </div>
      </div>

      <div
        class="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <article
          v-for="item in statsItems"
          :key="item.label"
          class="rounded-2xl border border-primary-300 bg-primary-50 p-5 text-center"
        >
          <p class="type-sys-display-s text-primary-700">
            {{ item.value }}
          </p>
          <p class="type-sys-title-m mt-2 text-primary-700">
            {{ item.label }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <section
    id="one-touch-experience"
    class="relative overflow-hidden bg-secondary-900 py-20 text-white"
  >
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700"
      />
      <div
        class="absolute top-[-14%] right-[-8%] h-80 w-80 rounded-full bg-primary-500/22 blur-3xl"
      />
    </div>

    <div class="page-sys-shell relative z-10">
      <div class="grid items-start gap-10 lg:grid-cols-[0.95fr,1.05fr]">
        <article>
          <h2 class="type-sys-display-m text-white">一站式整合服務</h2>
          <p class="type-sys-body-m mt-6 max-w-[32ch] leading-9 text-white/82">
            從工程規劃、現場導入到長期維運支持，提供單一窗口的整合服務流程。
          </p>
          <UButton
            to="#contact"
            color="primary"
            variant="solid"
            class="type-sys-label-m mt-8 rounded-full px-8 text-sys-inverse"
          >
            進一步了解
          </UButton>
        </article>

        <ul class="grid gap-3">
          <li
            v-for="item in oneTouchItems"
            :key="item"
            class="rounded-xl border border-white/14 bg-white/8 px-5 py-4"
          >
            <p class="type-sys-title-m text-white/90">
              {{ item }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
