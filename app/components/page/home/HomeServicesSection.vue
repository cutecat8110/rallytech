<script setup lang="ts">
import { brandGhostButtonTheme } from '~/utils/button-themes'

const serviceItems = [
  {
    icon: 'i-lucide-monitor-smartphone',
    title: 'SCADA / HMI 圖控',
    description: '建立可監看、可操作、可追溯的監控介面。'
  },
  {
    icon: 'i-lucide-briefcase-business',
    title: '儀電整合',
    description: '支援 FAT、SAT、試車驗收與現場故障排除。'
  },
  {
    icon: 'i-lucide-cpu',
    title: 'PLC / DCS 程式與搬遷',
    description: '提供控制邏輯開發、搬遷規劃與分階段切換支援。'
  },
  {
    icon: 'i-lucide-database-zap',
    title: 'PI Server',
    description: '建立即時資料採集、監看與跨系統整合基礎。'
  },
  {
    icon: 'i-lucide-database',
    title: 'Historians',
    description: '支援長期資料保存、趨勢分析與追溯需求。'
  },
  {
    icon: 'i-lucide-network',
    title: '工業網路設計',
    description: '規劃穩定、可維護且具擴充性的工業通訊網路。'
  },
  {
    icon: 'i-lucide-radio-tower',
    title: '遠端監控與資料備援',
    description: '強化跨據點監看、資料持續性與備援能力。'
  },
  {
    icon: 'i-lucide-bell-ring',
    title: '告警監控',
    description: '建立告警分級、通知邏輯與應變流程。'
  }
]
</script>

<template>
  <section
    id="services"
    class="section-sys-shell relative overflow-hidden bg-sys-rally-services-surface text-white"
  >
    <div class="page-sys-shell--wide">
      <div class="content-sys-rail">
        <div class="mx-auto max-w-[38rem] text-center">
          <p class="type-sys-kicker text-primary-300 uppercase">
            Our Services
          </p>
          <h2 class="type-sys-headline-l mt-3 text-white">
            支援工業自動化專案的整合型服務
          </h2>
        </div>

        <div class="home-sys-services__grid">
          <article
            v-for="item in serviceItems"
            :key="item.title"
            class="home-sys-services__column"
          >
            <span class="home-sys-services__icon">
              <UIcon :name="item.icon" class="size-4.5" />
            </span>

            <h3 class="home-sys-services__title type-sys-title-m text-white">
              {{ item.title }}
            </h3>
            <p
              class="home-sys-services__copy type-sys-body-s flex-1 text-white/72"
            >
              {{ item.description }}
            </p>

            <UTheme :ui="brandGhostButtonTheme">
              <UButton
                to="#contact"
                color="primary"
                variant="ghost"
                size="xs"
                label="了解更多"
                class="home-sys-services__action w-fit"
              />
            </UTheme>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-sys-rally-services-surface {
  background:
    linear-gradient(180deg, rgb(4 9 14 / 0.68) 0%, rgb(4 9 14 / 0.9) 100%),
    radial-gradient(circle at 78% 20%, rgb(48 187 165 / 0.08), transparent 26%),
    url('/images/demo/home/services-industrial-panel-bg.jpg') 72% center / cover
      no-repeat,
    linear-gradient(145deg, rgb(255 255 255 / 0.02), rgb(255 255 255 / 0) 38%),
    repeating-linear-gradient(
      -34deg,
      rgb(255 255 255 / 0.015) 0,
      rgb(255 255 255 / 0.015) 18px,
      transparent 18px,
      transparent 44px
    ),
    linear-gradient(
      165deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 60%,
      var(--color-secondary-800) 100%
    );
  background-blend-mode: normal, screen, soft-light, normal, normal, normal;
}

.home-sys-services__grid {
  margin-top: 2.35rem;
  display: grid;
  gap: 2rem 1.75rem;
}

.home-sys-services__column {
  display: flex;
  min-height: 11.5rem;
  flex-direction: column;
  padding-top: 1rem;
  border-top: 1px solid rgb(255 255 255 / 0.14);
}

.home-sys-services__icon {
  display: inline-flex;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: rgb(161 235 223 / 0.94);
  background: rgb(255 255 255 / 0.03);
}

.home-sys-services__title {
  margin-top: 0.95rem;
}

.home-sys-services__copy {
  max-width: 17rem;
  margin-top: 0.65rem;
}

.home-sys-services__action {
  margin-top: 0.95rem;
}

@media (min-width: 768px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 2.25rem;
  }
}

@media (min-width: 1280px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2.25rem 2rem;
  }
}
</style>
