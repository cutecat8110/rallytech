<script setup lang="ts">
const processSteps = [
  {
    index: '01',
    title: '需求對齊',
    description: '釐清控制目標、風險邊界、既有架構與現場限制。'
  },
  {
    index: '02',
    title: '技術規劃',
    description: '把介面、訊號策略、切換順序與文件需求提早定義。'
  },
  {
    index: '03',
    title: '分階段實作',
    description: '將程式、整合、試車與現場支援視為同一個交付系統。'
  },
  {
    index: '04',
    title: '驗證與交接',
    description: '以教育訓練、驗證與後續維運安排完成收斂。'
  }
]
</script>

<template>
  <section id="process" class="bg-neutral-50 section-sys-shell">
    <div class="page-sys-shell">
      <div class="mx-auto max-w-6xl">
        <div class="home-sys-reveal max-w-3xl">
          <p
            class="type-sys-label-s text-primary-700 tracking-[0.18em] uppercase"
          >
            交付流程
          </p>
          <h2 class="type-sys-display-m mt-4 max-w-[13ch] text-neutral-950">
            從需求對齊到驗證交接，維持同一條工程節奏
          </h2>
          <p class="type-sys-body-m mt-5 max-w-2xl text-neutral-700">
            讓業主、工程、現場與維運窗口看見相同的專案狀態，降低交接與上線階段的資訊落差。
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="step in processSteps"
            :key="step.index"
            class="home-sys-process-step home-sys-reveal"
          >
            <p class="type-sys-label-s text-primary-700">{{ step.index }}</p>
            <h3 class="type-sys-headline-s mt-4 text-neutral-950">
              {{ step.title }}
            </h3>
            <p class="type-sys-body-s mt-3 text-neutral-600">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-process-step {
  border-top: 1px solid rgb(228 228 231);
  padding-top: 1.2rem;
}
</style>
