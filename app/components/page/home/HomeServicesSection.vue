<script setup lang="ts">
const serviceItems = [
  {
    index: '01',
    title: 'SCADA / HMI 圖控',
    english: 'SCADA and HMI Graphics',
    description: '建立可監看、可操作、可追溯的監控介面。'
  },
  {
    index: '02',
    title: '儀電整合',
    english: 'I&E Services',
    description: '支援 FAT、SAT、試車驗收與現場故障排除。'
  },
  {
    index: '03',
    title: 'PLC / DCS 程式與搬遷',
    english: 'PLC & DCS Programming and Migration',
    description: '提供控制邏輯開發、搬遷規劃與分階段切換支援。'
  },
  {
    index: '04',
    title: 'PI Server',
    english: 'PI Server',
    description: '建立即時資料採集、監看與跨系統整合基礎。'
  },
  {
    index: '05',
    title: 'Historians',
    english: 'Historians',
    description: '支援長期資料保存、趨勢分析與追溯需求。'
  },
  {
    index: '06',
    title: '工業網路設計',
    english: 'Network Design',
    description: '規劃穩定、可維護且具擴充性的工業通訊網路。'
  },
  {
    index: '07',
    title: '遠端監控與資料備援',
    english: 'Remote Monitoring and Data',
    description: '強化跨據點監看、資料持續性與備援能力。'
  },
  {
    index: '08',
    title: '告警監控',
    english: 'Alarm Monitoring',
    description: '建立告警分級、通知邏輯與應變流程。'
  }
]
</script>

<template>
  <section
    id="services"
    class="bg-sys-rally-dark-surface section-sys-shell text-white"
  >
    <div class="page-sys-shell">
      <div class="mx-auto max-w-6xl">
        <div class="home-sys-reveal max-w-3xl">
          <p
            class="type-sys-label-s text-primary-200 tracking-[0.18em] uppercase"
          >
            服務項目
          </p>
          <h2 class="type-sys-display-m mt-4 max-w-[13ch] text-white">
            支援工業自動化專案的整合型服務
          </h2>
          <p class="type-sys-body-m mt-5 max-w-2xl text-white/72">
            以控制、資料、網路與告警協調為主軸，將現場執行與長期維運需求一起納入設計與導入節奏。
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in serviceItems"
            :key="item.index"
            class="home-sys-reveal home-sys-service-card"
          >
            <span class="type-sys-label-s mb-8 text-primary-200">{{
              item.index
            }}</span>
            <h3 class="type-sys-headline-s text-white">
              {{ item.title }}
            </h3>
            <p class="type-sys-label-s mt-2 text-white/44">
              {{ item.english }}
            </p>
            <p class="type-sys-body-s mt-4 flex-1 text-white/74">
              {{ item.description }}
            </p>

            <UButton
              to="/#contact"
              color="neutral"
              variant="ghost"
              class="home-sys-service-link type-sys-label-s mt-5 w-fit px-0 text-primary-200 hover:bg-transparent hover:text-white"
              trailing-icon="i-ic-baseline-arrow-forward"
              :ui="{ base: 'hover:translate-y-0', trailingIcon: 'size-4' }"
            >
              聯絡洽詢
            </UButton>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-service-card {
  display: flex;
  min-height: 14.5rem;
  height: 100%;
  flex-direction: column;
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: 1.35rem;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.06), transparent 45%),
    rgb(255 255 255 / 0.03);
  padding: 1.35rem;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;
}

.home-sys-service-card:hover {
  transform: translateY(-4px);
  border-color: rgb(161 235 223 / 0.42);
  background:
    linear-gradient(180deg, rgb(48 187 165 / 0.12), transparent 45%),
    rgb(255 255 255 / 0.05);
}

.home-sys-service-link {
  text-underline-offset: 0.3em;
}
</style>
