<script setup lang="ts">
import { computed, ref } from 'vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import type { HomePageImageStateKey } from '~/utils/home-page-image-registry'

const messages = useRallyMessages()
const localePath = useLocalePath()
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
  root: 'w-full xl:w-fit',
  list: 'grid w-full grid-cols-2 rounded-sm border border-neutral-200 bg-white p-1 shadow-none xl:inline-flex xl:w-auto',
  indicator: 'rounded-sm bg-primary-700 shadow-none',
  trigger:
    'min-w-0 cursor-pointer justify-center rounded-sm px-2 py-2 type-sys-label-s text-center text-neutral-600 transition-colors disabled:cursor-not-allowed aria-disabled:cursor-not-allowed data-[state=active]:text-white xl:min-w-[7.25rem] xl:px-4',
  label:
    'whitespace-normal leading-snug tracking-[0.06em] uppercase xl:whitespace-nowrap xl:tracking-[0.08em]'
} as const
</script>

<template>
  <section id="mission" class="section-sys-shell home-sys-mission">
    <div class="page-sys-shell--wide">
      <div class="content-sys-rail">
        <div class="home-sys-mission__layout">
          <article class="home-sys-mission__copy">
            <SharedSectionIntro
              class="home-sys-mission__intro"
              :title="messages.home.mission.heading"
              tone="light"
              align="start"
              density="compact"
            />

            <UTabs
              v-model="activeMission"
              :items="missionItems"
              :content="false"
              color="primary"
              variant="pill"
              size="sm"
              class="home-sys-mission__tabs"
              :ui="missionTabsUi"
            />

            <div class="home-sys-mission__state">
              <div class="home-sys-mission__state-copy max-w-xl">
                <SharedContentHeader
                  class="home-sys-mission__state-body"
                  :title="activeMissionState.title"
                  :description="activeMissionState.description"
                  tone="light"
                  scale="item"
                  title-tag="h3"
                />
                <UButton
                  :to="localePath('/contact')"
                  color="primary"
                  variant="solid"
                  size="lg"
                  :label="activeMissionState.ctaLabel"
                />
              </div>

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
    linear-gradient(90deg, rgb(10 18 22 / 0.045) 0, transparent 1px)
      calc(50% - min(50vw, 42rem)) 0 / clamp(10rem, 15vw, 15rem) 100% no-repeat,
    linear-gradient(180deg, rgb(248 250 251 / 0.98), rgb(255 255 255 / 1));
}

.home-sys-mission__layout {
  display: grid;
  align-items: start;
  gap: clamp(2rem, 3.2vw, 3rem);
}

.home-sys-mission__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.home-sys-mission__intro {
  max-width: 36rem;
}

.home-sys-mission__tabs {
  align-self: flex-start;
}

.home-sys-mission__state {
  display: grid;
  gap: 1rem;
}

.home-sys-mission__state-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.home-sys-mission__state-body {
  display: grid;
  gap: 0.7rem;
}

.home-sys-mission__state-body {
  --shared-content-header-title-color: var(--color-neutral-900);
  --shared-content-header-description-color: var(--color-neutral-700);
}

.home-sys-mission__tabs :deep([role='tab']:not([data-state='active']):hover),
.home-sys-mission__tabs
  :deep([role='tab']:not([data-state='active']):focus-visible) {
  color: var(--color-primary-950);
}

.home-sys-mission__state-media {
  width: min(100%, 9rem);
  aspect-ratio: 1;
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.62),
    0 14px 28px rgb(10 18 22 / 0.08);
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
  border-radius: 0;
  clip-path: polygon(11% 0, 100% 0, 100% 89%, 89% 100%, 0 100%, 0 11%);
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
  width: min(100%, 26.5rem);
  justify-self: center;
}

.home-sys-mission__figure::before {
  position: absolute;
  inset: clamp(0.55rem, 1.2vw, 0.85rem) clamp(0.5rem, 1vw, 0.75rem)
    clamp(0.45rem, 1vw, 0.7rem) clamp(0.65rem, 1.35vw, 1rem);
  z-index: 0;
  border: 1px solid rgb(34 48 56 / 0.1);
  background:
    linear-gradient(135deg, rgb(255 255 255 / 0.8), rgb(255 255 255 / 0.2)),
    linear-gradient(180deg, rgb(48 187 165 / 0.08), transparent 58%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.72),
    0 20px 44px rgb(10 18 22 / 0.09);
  clip-path: polygon(9% 0, 100% 0, 100% 90%, 89% 100%, 0 100%, 0 9%);
  content: '';
}

.home-sys-mission__cutout {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 46% center;
  filter: saturate(0.92) contrast(1.03);
  clip-path: polygon(11% 0, 100% 0, 100% 91%, 89% 100%, 0 100%, 0 11%);
  -webkit-mask-image:
    linear-gradient(to left, black 94%, rgb(0 0 0 / 0.72) 100%),
    linear-gradient(to top, black 96%, rgb(0 0 0 / 0.82) 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image:
    linear-gradient(to left, black 94%, rgb(0 0 0 / 0.72) 100%),
    linear-gradient(to top, black 96%, rgb(0 0 0 / 0.82) 100%);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

.home-sys-mission__figure-glow {
  position: absolute;
  inset: 17% 3% 4% 20%;
  z-index: 0;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 58% 42%, rgb(48 187 165 / 0.2), transparent 58%),
    radial-gradient(circle at 78% 72%, rgb(10 18 22 / 0.1), transparent 64%);
  filter: blur(16px);
  pointer-events: none;
}

@media (max-width: 767px) {
  .home-sys-mission__copy {
    gap: 1.05rem;
  }

  .home-sys-mission__state {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    gap: 1.05rem;
  }

  .home-sys-mission__state-media {
    width: 100%;
    max-width: none;
    aspect-ratio: 16 / 7;
    clip-path: none;
  }

  .home-sys-mission__state-copy {
    gap: 0.9rem;
    max-width: 34rem;
  }

  .home-sys-mission__state-body {
    gap: 0.5rem;
  }

  .home-sys-mission__figure {
    display: none;
  }

  .home-sys-mission__figure::before {
    inset: 0.5rem 0.45rem 0.45rem 0.55rem;
    clip-path: polygon(8% 0, 100% 0, 100% 91%, 90% 100%, 0 100%, 0 8%);
  }

  .home-sys-mission__cutout {
    object-position: 50% 39%;
    clip-path: polygon(9% 0, 100% 0, 100% 92%, 90% 100%, 0 100%, 0 9%);
  }
}

@media (min-width: 768px) {
  .home-sys-mission__copy {
    gap: 1.1rem;
  }

  .home-sys-mission__state {
    grid-template-columns: minmax(0, 11rem) minmax(0, 1fr);
    align-items: start;
    column-gap: 1.5rem;
    row-gap: 1rem;
  }

  .home-sys-mission__state-copy {
    gap: 1.15rem;
  }

  .home-sys-mission__state-media {
    width: 100%;
    max-width: 11rem;
    align-self: start;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .home-sys-mission__layout {
    gap: clamp(1.55rem, 2.4vw, 2rem);
  }

  .home-sys-mission__copy {
    gap: 1.15rem;
  }

  .home-sys-mission__state {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;
  }

  .home-sys-mission__state-copy {
    max-width: 42rem;
  }

  .home-sys-mission__state-media {
    max-width: none;
    aspect-ratio: 21 / 8;
    clip-path: none;
  }

  .home-sys-mission__figure {
    display: none;
  }

  .home-sys-mission__cutout {
    object-position: 50% 43%;
  }
}

@media (min-width: 1280px) {
  .home-sys-mission__layout {
    grid-template-columns: minmax(0, 36rem) minmax(0, 1fr);
    gap: clamp(3.5rem, 5vw, 6rem);
  }

  .home-sys-mission__copy {
    min-height: clamp(21rem, 34vw, 29rem);
    justify-self: start;
  }

  .home-sys-mission__state {
    margin-top: auto;
    grid-template-columns: minmax(0, 11rem) minmax(0, 1fr);
    align-items: end;
    column-gap: 1.65rem;
    row-gap: 1rem;
  }

  .home-sys-mission__state-copy {
    order: 2;
    align-self: end;
  }

  .home-sys-mission__state-media {
    order: 1;
    width: 100%;
    max-width: 11rem;
    align-self: end;
    aspect-ratio: 1;
    clip-path: polygon(11% 0, 100% 0, 100% 89%, 89% 100%, 0 100%, 0 11%);
  }

  .home-sys-mission__figure {
    display: block;
    justify-self: end;
    width: min(100%, 28rem);
  }
}
</style>
