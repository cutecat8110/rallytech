<script setup lang="ts">
const capabilityStats = [
  { value: '8 項', label: '核心服務線' },
  { value: '單一窗口', label: '整合協調' },
  { value: '24 / 7', label: '告警回應準備' },
  { value: '跨平台', label: '資料與控制串接' }
]

const capabilityItems = [
  { label: '資料整合', english: 'Data Integration' },
  {
    label: '告警通報系統整合與試車',
    english: 'Call-Out System Integration and Commissioning'
  },
  { label: '振動分析', english: 'Vibration Analysis' },
  {
    label: '本地 / 雲端歷史資料部署',
    english: 'Local/Cloud Historians Deployment'
  },
  {
    label: '糞污管理系統整合',
    english: 'Manure Management System Integration'
  }
]
</script>

<template>
  <section
    id="one-touch-experience"
    class="bg-sys-rally-secondary-surface section-sys-shell text-white"
  >
    <div class="page-sys-shell">
      <div
        class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start"
      >
        <div class="home-sys-reveal">
          <div class="home-sys-capability-stats">
            <article
              v-for="item in capabilityStats"
              :key="item.label"
              class="home-sys-capability-stat"
            >
              <p class="type-sys-display-m text-white">{{ item.value }}</p>
              <p class="type-sys-body-s mt-2 text-white/64">
                {{ item.label }}
              </p>
            </article>
          </div>
        </div>

        <div class="home-sys-reveal" data-reveal-delay="2">
          <p
            class="type-sys-label-s text-primary-200 tracking-[0.18em] uppercase"
          >
            一站式整合模組
          </p>
          <h2 class="type-sys-display-m mt-4 max-w-[12ch] text-white">
            把資料、告警、部署與現場試車放進同一條回應路徑
          </h2>
          <p class="type-sys-body-m mt-5 max-w-2xl text-white/72">
            這一段承接原型裡的 One-Touch Experience
            節奏，但改寫成更符合雷力科技的整合敘事：先建立系統可見性，再把通知、部署與現場導入收斂進同一條工程邏輯。
          </p>

          <UButton
            to="/#contact"
            color="neutral"
            variant="outline"
            class="type-sys-label-m mt-8 bg-white/10 text-white ring-white/24 hover:bg-white/14 hover:text-white"
            :ui="{ base: 'hover:translate-y-0' }"
          >
            建立第一個對話窗口
          </UButton>

          <ul class="mt-8 grid gap-4">
            <li
              v-for="item in capabilityItems"
              :key="item.label"
              class="home-sys-capability-item"
            >
              <p class="type-sys-body-s">
                {{ item.label }}｜{{ item.english }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-capability-stats {
  display: grid;
  gap: 1px;
  overflow: hidden;
  border-radius: 1.75rem;
  background: rgb(255 255 255 / 0.1);
}

.home-sys-capability-stat {
  display: grid;
  min-height: 12rem;
  align-content: end;
  background: rgb(255 255 255 / 0.05);
  padding: 1.5rem;
}

.home-sys-capability-item {
  position: relative;
  padding-left: 1.5rem;
  color: rgb(255 255 255 / 0.86);
}

.home-sys-capability-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62rem;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: rgb(161 235 223);
  box-shadow: 0 0 0 0.3rem rgb(161 235 223 / 0.14);
}

@media (min-width: 640px) {
  .home-sys-capability-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
