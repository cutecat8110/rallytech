<script setup lang="ts">
// 服務：對齊 docs/references/pentagon/首頁文案整理.md
const serviceItems = [
  {
    title: 'SCADA 與 HMI 圖控',
    description:
      '提供 SCADA / HMI 圖控設計與監控畫面建置，提升現場可視化與操作效率。',
    tone: 'primary'
  },
  {
    title: 'I&E 服務',
    description: '提供儀控與電氣工程服務，涵蓋 FAT / SAT 支援與現場問題排除。',
    tone: 'secondary'
  },
  {
    title: 'PLC / DCS 程式開發與系統移轉',
    description: '提供 PLC / DCS 控制程式開發、升級與系統移轉服務。',
    tone: 'neutral'
  },
  {
    title: 'PI Server',
    description: '協助建置 PI 資料平台，提升資料整合與應用效率。',
    tone: 'primary'
  },
  {
    title: 'Network Design',
    description: '規劃工業通訊網路架構，強化系統穩定性與通訊效率。',
    tone: 'secondary'
  },
  {
    title: 'Historians',
    description: '建置 Historian 歷史資料系統，提升資料留存與應用價值。',
    tone: 'neutral'
  },
  {
    title: 'Remote Monitoring and Data',
    description: '建置遠端監控與資料備援機制，提升營運可靠度。',
    tone: 'primary'
  },
  {
    title: 'Alarm Monitoring',
    description: '透過告警監控機制，提升場域安全與即時應變能力。',
    tone: 'secondary'
  }
]
</script>

<template>
  <section id="services" class="bg-neutral-100 section-sys-shell">
    <div class="page-sys-shell">
      <div class="text-center">
        <p
          class="type-sys-label-m tracking-[0.16em] text-primary-700 uppercase"
        >
          我們的服務
        </p>
        <h2 class="type-sys-display-m mt-4 text-neutral-600">
          提供完整的工業自動化整合服務
        </h2>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="item in serviceItems"
          :key="item.title"
          class="shadow-sys-sm overflow-hidden rounded-2xl border border-neutral-300 bg-white"
        >
          <div
            :class="{
              'from-primary-700 to-primary-500': item.tone === 'primary',
              'from-secondary-800 to-secondary-600': item.tone === 'secondary',
              'from-neutral-600 to-neutral-500': item.tone === 'neutral'
            }"
            class="h-28 bg-gradient-to-br"
          />

          <div class="p-5">
            <h3 class="type-sys-headline-s text-neutral-700">
              {{ item.title }}
            </h3>
            <p
              class="type-sys-body-s mt-3 min-h-[5.5rem] leading-7 text-neutral-600"
            >
              {{ item.description }}
            </p>

            <UButton
              to="#contact"
              color="primary"
              variant="ghost"
              class="type-sys-label-s mt-4 px-0 text-primary-700 hover:text-primary-600"
            >
              閱讀更多
            </UButton>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
