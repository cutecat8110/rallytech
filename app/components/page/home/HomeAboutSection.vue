<script setup lang="ts">
const aboutPoints = [
  {
    icon: 'i-lucide-briefcase-business',
    title: '專業能力',
    description: '控制、儀控、試車驗收與現場協調以同一條交付路徑管理。'
  },
  {
    icon: 'i-lucide-cpu',
    title: '技術基礎',
    description: '以 SCADA、PLC / DCS、PI、Historian 與工業網路作為整合核心。'
  },
  {
    icon: 'i-lucide-handshake',
    title: '協作方式',
    description: '讓業主、廠商與現場團隊對齊在同一組專案重點上。'
  }
]
</script>

<template>
  <section id="about" class="section-sys-shell bg-white">
    <div class="page-sys-shell">
      <div
        class="grid items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20"
      >
        <article class="home-sys-about__copy max-w-lg">
          <p
            class="type-sys-label-m text-primary-700 uppercase tracking-[0.18em]"
          >
            About
          </p>
          <h2 class="type-sys-headline-l mt-4 text-neutral-900">
            值得信賴的儀控、控制與工業資料整合夥伴
          </h2>
          <p class="type-sys-body-m mt-5 max-w-[34rem] text-neutral-700">
            雷力科技協助工業團隊把儀控、控制系統、試車驗收與工廠資料整合成一條從啟動到交接都清楚可執行的交付路徑。
          </p>

          <div class="home-sys-about__points">
            <article
              v-for="point in aboutPoints"
              :key="point.title"
              class="home-sys-about__point"
            >
              <span class="home-sys-about__point-icon">
                <UIcon :name="point.icon" class="size-4.5" />
              </span>
              <div class="min-w-0">
                <p class="type-sys-title-m text-neutral-900">
                  {{ point.title }}
                </p>
                <p
                  class="home-sys-about__point-copy type-sys-body-s text-neutral-700"
                >
                  {{ point.description }}
                </p>
              </div>
            </article>
          </div>
        </article>

        <figure
          class="home-sys-about__media-composite justify-self-end"
          aria-label="現代高科技建築與設施立面雙圖組合"
        >
          <div class="home-sys-about__media-pane">
            <img
              src="/images/demo/home/about-glass-office-towers.jpg"
              alt="現代高科技商業大樓"
              class="home-sys-about__media-image home-sys-about__media-image--left"
            />
          </div>
          <div class="home-sys-about__media-pane">
            <img
              src="/images/demo/home/about-glass-facade-detail.jpg"
              alt="高科技建築玻璃立面細節"
              class="home-sys-about__media-image home-sys-about__media-image--right"
            />
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-about__copy {
  display: flex;
  flex-direction: column;
}

.home-sys-about__points {
  display: grid;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.home-sys-about__point {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.home-sys-about__point-icon {
  display: inline-flex;
  width: 2.125rem;
  height: 2.125rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

.home-sys-about__point-copy {
  max-width: 28rem;
  margin-top: 0.25rem;
}

.home-sys-about__media-composite {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(100%, 24.5rem);
  min-height: clamp(25rem, 39vw, 34rem);
  margin-inline: auto;
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.06);
  border-radius: 0 0 20rem 20rem;
  box-shadow: var(--shadow-1);
  background: rgb(255 255 255 / 0.98);
}

.home-sys-about__media-pane {
  position: relative;
  min-height: 100%;
}

.home-sys-about__media-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
}

.home-sys-about__media-image--left {
  object-position: 52% 6%;
}

.home-sys-about__media-image--right {
  object-position: 72% 42%;
}

@media (max-width: 767px) {
  .home-sys-about__media-composite {
    min-height: 22rem;
    width: min(100%, 18.25rem);
  }
}
</style>
