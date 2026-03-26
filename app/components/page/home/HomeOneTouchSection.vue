<script setup lang="ts">
// One Touch：清單資料
const oneTouchItems = [
  '資料整合',
  'Call-Out 系統整合與試車導入',
  '振動分析',
  '本地 / 雲端 Historian 部署',
  '場域管理系統整合'
]
</script>

<template>
  <section
    id="one-touch-experience"
    class="bg-sys-rally-deep-gradient section-sys-shell relative overflow-hidden text-white"
  >
    <!-- 背景光暈 -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="bg-info-800/8 absolute -right-12 bottom-6 h-56 w-56 rounded-full blur-3xl"
      />
    </div>

    <div
      class="page-sys-shell relative grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:items-start"
    >
      <!-- 左欄敘事 -->
      <div>
        <p class="type-sys-label-s tracking-widest text-white/62 uppercase">
          一站式整合
        </p>
        <h2 class="type-sys-headline-l mt-3 max-w-3xl text-white">
          一站式整合服務，降低跨系統導入與協作成本
        </h2>
        <p class="type-sys-body-m mt-5 max-w-2xl text-white/82">
          聚焦跨設備、跨平台與跨團隊的整合需求，協助客戶以更有效率的方式完成導入、資料串接與後續擴充。
        </p>

        <UButton
          to="#"
          color="primary"
          variant="solid"
          class="type-sys-label-m mt-8 rounded-full px-5 py-3"
        >
          進一步了解
        </UButton>
      </div>

      <!-- 能力清單 -->
      <ol class="stack-sys-16">
        <li
          v-for="item in oneTouchItems"
          :key="item"
          class="shadow-sys-md border-secondary-600/40 bg-secondary-800/75 rounded-md border px-4 py-3"
        >
          <p class="type-sys-body-s text-white/88">
            {{ item }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
