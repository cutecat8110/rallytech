<script setup lang="ts">
const aboutHighlights = [
  {
    label: '專業能力',
    description:
      '控制、儀控、試車驗收與現場協調以同一條交付路徑管理。'
  },
  {
    label: '技術基礎',
    description:
      '以 SCADA、PLC / DCS、PI、Historian 與工業網路作為整合核心。'
  },
  {
    label: '協作方式',
    description:
      '讓業主、廠商與現場團隊對齊在同一組專案重點與時程節點上。'
  }
]
</script>

<template>
  <section id="about" class="bg-neutral-50 section-sys-shell">
    <div class="page-sys-shell">
      <div class="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.05fr,0.95fr]">
        <article class="home-sys-reveal">
          <p class="type-sys-label-s text-primary-700 tracking-[0.18em] uppercase">
            工業控制整合團隊
          </p>
          <h2 class="type-sys-display-m mt-4 max-w-[12ch] text-neutral-950">
            值得信賴的儀控、控制與工業資料整合夥伴
          </h2>

          <p class="type-sys-body-m mt-6 max-w-2xl text-neutral-700">
            雷力科技協助工業團隊把儀控、控制系統、試車驗收與工廠資料整合成從啟動到交接都清楚可執行的交付路徑。
          </p>

          <p class="type-sys-body-m mt-5 max-w-2xl text-neutral-700">
            我們把技術規劃、現場執行與操作就緒整合在同一條節奏上，降低設計意圖與現場落地之間的落差。
          </p>

          <ul class="mt-8 grid gap-4">
            <li
              v-for="highlight in aboutHighlights"
              :key="highlight.label"
              class="border-t border-neutral-200 pt-4"
            >
              <p class="type-sys-title-m text-neutral-900">
                {{ highlight.label }}
              </p>
              <p class="type-sys-body-s mt-2 text-neutral-600">
                {{ highlight.description }}
              </p>
            </li>
          </ul>
        </article>

        <div class="home-sys-reveal home-sys-about-stage" data-reveal-delay="2">
          <div class="home-sys-about-frame" />

          <div class="home-sys-about-panel home-sys-about-panel--dark">
            <div class="home-sys-about-badge">Control Room</div>
          </div>

          <div class="home-sys-about-panel home-sys-about-panel--light">
            <div class="home-sys-about-badge home-sys-about-badge--dark">
              Field Network
            </div>
          </div>

          <div class="home-sys-about-mesh" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-about-stage {
  position: relative;
  min-height: 32rem;
}

.home-sys-about-frame {
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  background:
    radial-gradient(circle at 76% 18%, rgb(59 130 246 / 0.07), transparent 30%),
    linear-gradient(180deg, rgb(255 255 255 / 0.58), transparent 35%);
  opacity: 0.35;
}

.home-sys-about-panel {
  position: absolute;
  overflow: hidden;
  border-radius: 1.75rem;
  box-shadow: var(--shadow-3);
}

.home-sys-about-panel--dark {
  top: 0;
  right: 0;
  width: 76%;
  height: 74%;
  border: 1px solid rgb(255 255 255 / 0.42);
  background:
    linear-gradient(145deg, rgb(255 255 255 / 0.58), rgb(255 255 255 / 0.18)),
    linear-gradient(180deg, rgb(227 234 235 / 0.94), rgb(147 182 255 / 0.82));
}

.home-sys-about-panel--light {
  left: 0;
  bottom: 0;
  width: 54%;
  height: 44%;
  border: 1px solid rgb(63 84 92 / 0.16);
  background:
    linear-gradient(145deg, rgb(255 255 255 / 0.5), rgb(255 255 255 / 0.14)),
    linear-gradient(180deg, rgb(135 163 169 / 0.92), rgb(26 49 104 / 0.94));
}

.home-sys-about-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(transparent 65%, rgb(10 18 22 / 0.3)),
    linear-gradient(rgb(255 255 255 / 0.26) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.26) 1px, transparent 1px);
  background-size: auto, 2rem 2rem, 2rem 2rem;
}

.home-sys-about-badge {
  position: absolute;
  left: 1.2rem;
  bottom: 1rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.08);
  padding: 0.5rem 0.82rem;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: white;
}

.home-sys-about-badge--dark {
  background: rgb(255 255 255 / 0.72);
  color: rgb(34 48 56 / 0.78);
}

.home-sys-about-mesh {
  position: absolute;
  inset: auto 2rem 4rem auto;
  width: 11rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgb(161 235 223 / 0.82),
    rgb(161 235 223 / 0.08) 62%,
    transparent 64%
  );
  opacity: 0.75;
}

@media (max-width: 1023px) {
  .home-sys-about-stage {
    min-height: 26rem;
  }
}

@media (max-width: 767px) {
  .home-sys-about-stage {
    min-height: 23rem;
  }

  .home-sys-about-frame {
    inset-inline: 0.5rem;
  }

  .home-sys-about-panel--dark {
    width: 78%;
    height: 72%;
  }

  .home-sys-about-panel--light {
    width: 58%;
    height: 42%;
  }

  .home-sys-about-mesh {
    width: 6.5rem;
  }
}
</style>
