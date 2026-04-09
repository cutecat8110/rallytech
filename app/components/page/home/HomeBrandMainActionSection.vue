<script setup lang="ts">
import { computed, ref } from 'vue'
import type { HomePageImageStateKey } from '~/utils/home-page-image-registry'

const messages = useRallyMessages()
const missionStates = computed(() => messages.value.home.mission.tabs)
const activeMission = ref<HomePageImageStateKey>('mission')
const {
  resolvedImage: missionSquareImage,
  handleImageError: handleMissionSquareError
} = useHomePageImageAsset('mission-square', activeMission)
const {
  resolvedImage: missionCutoutImage,
  handleImageError: handleMissionCutoutError
} = useHomePageImageAsset('mission-cutout')

const missionItems = computed(() =>
  missionStates.value.map(({ label, value }) => ({
    label,
    value
  }))
)

const activeMissionState = computed(
  () =>
    missionStates.value.find((state) => state.value === activeMission.value) ??
    missionStates.value[0]!
)

const missionTabsUi = {
  root: 'w-fit',
  list: 'inline-flex rounded-none border border-neutral-200 bg-white p-1 shadow-[var(--shadow-1)]',
  indicator: 'rounded-none bg-primary-700 shadow-none',
  trigger:
    'min-w-[7.25rem] cursor-pointer justify-center rounded-none px-4 py-2 type-sys-label-s text-neutral-600 transition-colors disabled:cursor-not-allowed aria-disabled:cursor-not-allowed data-[state=active]:text-white',
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
                {{ messages.home.mission.heading }}
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
                  :src="missionSquareImage.src"
                  :alt="missionSquareImage.alt || activeMissionState.imageAlt"
                  class="home-sys-media-frame__image home-sys-media-frame__image--focus-center"
                  @error="handleMissionSquareError"
                />
                <div
                  class="home-sys-media-frame__overlay home-sys-media-frame__overlay--light"
                />
              </figure>

              <div class="home-sys-mission__state-copy max-w-xl">
                <div class="home-sys-mission__state-body">
                  <h3
                    class="home-sys-mission__state-title type-sys-title-l text-neutral-900"
                  >
                    {{ activeMissionState.title }}
                  </h3>
                  <p class="type-sys-body-m text-neutral-700">
                    {{ activeMissionState.description }}
                  </p>
                </div>
                <UButton
                  to="#contact"
                  color="primary"
                  variant="solid"
                  size="lg"
                  :label="activeMissionState.ctaLabel"
                />
              </div>
            </div>
          </article>

          <div class="home-sys-mission__figure" aria-hidden="true">
            <div class="home-sys-mission__figure-glow" />
            <img
              :src="missionCutoutImage.src"
              alt=""
              class="home-sys-mission__cutout"
              @error="handleMissionCutoutError"
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

.home-sys-mission__state-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.home-sys-mission__state-body {
  display: grid;
  gap: 0.75rem;
}

.home-sys-mission__state-title {
  letter-spacing: 0.01em;
  font-weight: 600;
}

.home-sys-mission__state-media {
  width: min(100%, 9rem);
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
    grid-template-columns: minmax(0, 11rem) minmax(0, 1fr);
    align-items: end;
    column-gap: 1.5rem;
  }

  .home-sys-mission__state-copy {
    min-height: 13rem;
    justify-content: space-between;
  }

  .home-sys-mission__state-media {
    width: 100%;
    max-width: 11rem;
    align-self: end;
  }
}

@media (min-width: 1280px) {
  .home-sys-mission__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 3.25rem;
  }
}
</style>
