<script setup lang="ts">
import { computed, ref } from 'vue'

const missionStates = [
  {
    value: 'mission',
    label: 'Our Mission',
    title: '把專案複雜度轉成穩定可維運的系統',
    description:
      '雷力科技協助客戶建立更容易操作、維護與延伸的自動化環境，讓控制、資料與現場執行能在同一條節奏上推進。',
    ctaLabel: '了解我們的使命',
    image: '/images/demo/home/mission-tab-mission.jpg',
    imageAlt: '工程師於控制盤前檢視與調整工業設備'
  },
  {
    value: 'join-us',
    label: 'Join Us!',
    title: '與雷力合作，把系統整合、現場交付與長期運維放進同一個團隊視角',
    description:
      '我們用跨域協作、清楚分工與現場導向的交付方式，讓客戶、承包商與操作端都能在同一個專案重點上對齊。',
    ctaLabel: '展開合作對話',
    image: '/images/demo/home/hero-simulator-control-room.jpg',
    imageAlt: '控制室團隊在多螢幕環境中監看與協作'
  }
] as const

const activeMission = ref<(typeof missionStates)[number]['value']>('mission')

const missionItems = missionStates.map(({ label, value }) => ({
  label,
  value
}))

const activeMissionState = computed(
  () =>
    missionStates.find((state) => state.value === activeMission.value) ??
    missionStates[0]
)

const missionTabsUi = {
  root: 'w-fit',
  list: 'inline-flex rounded-full border border-neutral-200 bg-white p-1 shadow-[var(--shadow-1)]',
  indicator: 'bg-primary-700 rounded-full shadow-none',
  trigger:
    'min-w-[7.25rem] justify-center rounded-full px-4 py-2 type-sys-label-s text-neutral-600 transition-colors data-[state=active]:text-white',
  label: 'tracking-[0.08em] uppercase'
} as const
</script>

<template>
  <section id="mission" class="section-sys-shell home-sys-mission">
    <div class="page-sys-shell--wide">
      <div class="content-sys-rail">
        <div class="home-sys-mission__layout">
          <article class="home-sys-mission__copy">
            <div class="home-sys-mission__heading max-w-xl">
              <h2
                class="home-sys-mission__accent-heading type-sys-headline-l text-neutral-900"
              >
                Unlock Your Potential with Rally Technology
              </h2>
            </div>

            <UTabs
              v-model="activeMission"
              :items="missionItems"
              :content="false"
              color="primary"
              variant="pill"
              size="sm"
              :ui="missionTabsUi"
            />

            <div class="home-sys-mission__state">
              <figure
                class="home-sys-mission__state-media home-sys-media-frame home-sys-media-frame--light home-sys-media-frame--square home-sys-media-frame--trapezoid"
              >
                <img
                  :src="activeMissionState.image"
                  :alt="activeMissionState.imageAlt"
                  class="home-sys-media-frame__image home-sys-media-frame__image--focus-center"
                />
                <div
                  class="home-sys-media-frame__overlay home-sys-media-frame__overlay--light"
                />
              </figure>

              <div class="max-w-xl">
                <h3 class="type-sys-headline-m text-neutral-900">
                  {{ activeMissionState.title }}
                </h3>
                <p class="type-sys-body-m mt-3 text-neutral-700">
                  {{ activeMissionState.description }}
                </p>
                <UButton
                  to="#contact"
                  color="primary"
                  variant="solid"
                  size="lg"
                  :label="activeMissionState.ctaLabel"
                  class="mt-5"
                />
              </div>
            </div>
          </article>

          <div class="home-sys-mission__figure" aria-hidden="true">
            <div class="home-sys-mission__figure-glow" />
            <img
              src="/images/demo/home/mission-engineer-cutout.jpg"
              alt=""
              class="home-sys-mission__cutout"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-mission {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 18%, rgb(48 187 165 / 0.12), transparent 24%),
    linear-gradient(180deg, rgb(255 255 255 / 0.96), rgb(245 247 248 / 0.94));
}

.home-sys-mission__layout {
  display: grid;
  align-items: center;
  gap: 2rem;
}

.home-sys-mission__copy {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.home-sys-mission__heading {
  max-width: 36rem;
}

.home-sys-mission__accent-heading {
  letter-spacing: 0.012em;
  font-weight: 600;
}

.home-sys-mission__state {
  display: grid;
  gap: 1rem;
}

.home-sys-mission__state-media {
  width: min(100%, 8rem);
  aspect-ratio: 1;
}

.home-sys-media-frame--light {
  border: 1px solid rgb(34 48 56 / 0.12);
  background: rgb(255 255 255 / 0.96);
}

.home-sys-media-frame--square {
  aspect-ratio: 1;
  min-height: auto;
  border-radius: var(--radius-lg);
}

.home-sys-media-frame--trapezoid {
  clip-path: var(--home-media-mask-trapezoid);
}

.home-sys-media-frame__image--focus-center {
  object-position: center;
}

.home-sys-media-frame__overlay--light {
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.02) 0%,
      rgb(255 255 255 / 0.1) 36%,
      rgb(10 18 22 / 0.14) 100%
    ),
    radial-gradient(circle at 72% 18%, rgb(48 187 165 / 0.14), transparent 26%);
}

.home-sys-mission__figure {
  position: relative;
  min-height: clamp(21rem, 34vw, 29rem);
  width: min(100%, 29rem);
  justify-self: end;
}

.home-sys-mission__cutout {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 44% center;
  filter: saturate(0.92) contrast(1.03);
  clip-path: polygon(18% 0, 100% 0, 100% 90%, 84% 100%, 0 100%, 0 14%);
  -webkit-mask-image:
    linear-gradient(to left, black 88%, transparent 100%),
    linear-gradient(to top, black 92%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image:
    linear-gradient(to left, black 88%, transparent 100%),
    linear-gradient(to top, black 92%, transparent 100%);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

.home-sys-mission__figure-glow {
  position: absolute;
  inset: 22% 2% 6% 24%;
  border-radius: 999px;
  background: radial-gradient(circle, rgb(48 187 165 / 0.18), transparent 68%);
  filter: blur(18px);
  pointer-events: none;
}

@media (max-width: 767px) {
  .home-sys-mission__state {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .home-sys-mission__state {
    grid-template-columns: minmax(0, 8.5rem) minmax(0, 1fr);
    align-items: end;
  }
}

@media (min-width: 1280px) {
  .home-sys-mission__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 3.25rem;
  }
}
</style>
