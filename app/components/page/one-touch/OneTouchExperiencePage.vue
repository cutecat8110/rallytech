<script setup lang="ts">
import { computed } from 'vue'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'
import type {
  OneTouchModuleId,
  OneTouchModuleMessages
} from '~~/i18n/locales/types'

interface OneTouchImageAsset {
  src: string
  alt: string
  objectPosition: string
}

type OneTouchModuleWithImage = OneTouchModuleMessages & {
  image: OneTouchImageAsset
}

const messages = useRallyMessages()

const pageMessages = computed(() => messages.value.oneTouchPage)

const heroImage = {
  src: '/images/stock/services/overview/services-overview-hero-control-room.jpg',
  objectPosition: 'center 58%'
}

const moduleImages: Record<OneTouchModuleId, OneTouchImageAsset> = {
  'data-integration': {
    src: '/images/stock/services/remote-monitoring-and-data/remote-monitoring-control-room.jpg',
    alt: '控制室多螢幕監控畫面',
    objectPosition: 'center center'
  },
  'alarm-workflow': {
    src: '/images/stock/services/alarm-monitoring/overview-card-industrial-alarm-panel.jpg',
    alt: '工業告警與控制按鈕面板',
    objectPosition: 'center center'
  },
  'vibration-analysis': {
    src: '/images/stock/services/ie-services/instrument-control-panel-close-up.jpg',
    alt: '儀表與工業設備監測面板',
    objectPosition: 'center center'
  },
  'historian-deployment': {
    src: '/images/stock/services/historians/historian-server-rack-close-up.jpg',
    alt: '伺服器機櫃與資料連線設備',
    objectPosition: 'center center'
  },
  'utilities-integration': {
    src: '/images/stock/services/plc-dcs-programming-and-migration/overview-card-plc-control-cabinet.jpg',
    alt: '控制櫃內部接線與控制模組',
    objectPosition: 'center center'
  }
}

const modules = computed<OneTouchModuleWithImage[]>(() =>
  pageMessages.value.modules.map((item) => ({
    ...item,
    image: moduleImages[item.id]
  }))
)

function requireModule(index: number): OneTouchModuleWithImage {
  const item = modules.value[index]

  if (!item) {
    throw new Error(`Missing one-touch module at index ${index}.`)
  }

  return item
}

const firstModules = computed(() => modules.value.slice(0, 2))
const secondModules = computed(() => modules.value.slice(2))
const firstVisual = computed(() => ({
  main: requireModule(0).image,
  accent: requireModule(3).image
}))
const secondVisual = computed(() => ({
  main: requireModule(2).image,
  accent: requireModule(1).image
}))
</script>

<template>
  <div class="one-touch-page bg-white">
    <PageHeroShell
      class="one-touch-page__hero"
      variant="page"
      shell="wide"
      content-align="center"
    >
      <template #media>
        <img
          :src="heroImage.src"
          :alt="pageMessages.hero.imageAlt"
          class="one-touch-page__hero-image"
          :style="{ objectPosition: heroImage.objectPosition }"
          decoding="async"
        />
      </template>

      <template #overlay>
        <span class="one-touch-page__hero-overlay" />
      </template>

      <SharedPageHeroTitle :title="pageMessages.hero.title" />
    </PageHeroShell>

    <section
      class="one-touch-page__body-section one-touch-page__body-section--first"
    >
      <div class="page-sys-shell">
        <div class="one-touch-page__split">
          <figure class="one-touch-page__visual one-touch-page__visual--left">
            <div class="one-touch-page__visual-accent" aria-hidden="true">
              <img
                :src="firstVisual.accent.src"
                alt=""
                class="one-touch-page__visual-image"
                :style="{ objectPosition: firstVisual.accent.objectPosition }"
              />
            </div>
            <div class="one-touch-page__visual-main">
              <img
                :src="firstVisual.main.src"
                :alt="firstVisual.main.alt"
                class="one-touch-page__visual-image"
                :style="{ objectPosition: firstVisual.main.objectPosition }"
              />
            </div>
          </figure>

          <div class="one-touch-page__module-stack">
            <article
              v-for="item in firstModules"
              :key="item.id"
              class="one-touch-page__module"
            >
              <SharedContentHeader
                class="one-touch-page__module-header"
                :title="item.title"
                :subtitle="item.secondaryTitle"
                :description="item.description"
                tone="light"
                scale="module"
                density="compact"
                title-tag="h2"
              />
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="one-touch-page__body-section">
      <div class="page-sys-shell">
        <div class="one-touch-page__split one-touch-page__split--reverse">
          <div class="one-touch-page__module-stack">
            <article
              v-for="item in secondModules"
              :key="item.id"
              class="one-touch-page__module"
            >
              <SharedContentHeader
                class="one-touch-page__module-header"
                :title="item.title"
                :subtitle="item.secondaryTitle"
                :description="item.description"
                tone="light"
                scale="module"
                density="compact"
                title-tag="h2"
              />
            </article>
          </div>

          <figure class="one-touch-page__visual one-touch-page__visual--right">
            <div class="one-touch-page__visual-accent" aria-hidden="true">
              <img
                :src="secondVisual.accent.src"
                alt=""
                class="one-touch-page__visual-image"
                :style="{ objectPosition: secondVisual.accent.objectPosition }"
              />
            </div>
            <div class="one-touch-page__visual-main">
              <img
                :src="secondVisual.main.src"
                :alt="secondVisual.main.alt"
                class="one-touch-page__visual-image"
                :style="{ objectPosition: secondVisual.main.objectPosition }"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.one-touch-page {
  color: var(--color-text-primary);
}

.one-touch-page__hero-image {
  object-position: center;
  filter: saturate(0.82) contrast(1.08) brightness(0.78) !important;
  transform: scale(1.035) !important;
}

.one-touch-page__hero-overlay {
  position: absolute;
  inset: 0;
  display: block;
  background:
    linear-gradient(
      180deg,
      rgb(4 10 14 / 0.36) 0%,
      rgb(4 10 14 / 0.2) 45%,
      rgb(4 10 14 / 0.38) 100%
    ),
    linear-gradient(
      90deg,
      rgb(4 10 14 / 0.42) 0%,
      rgb(4 10 14 / 0.06) 48%,
      rgb(4 10 14 / 0.38) 100%
    ),
    linear-gradient(90deg, rgb(48 187 165 / 0.14) 0%, transparent 36%);
  pointer-events: none;
}

.one-touch-page__body-section {
  position: relative;
  background: var(--color-bg-page);
  padding-block: var(--layout-section-padding-default);
}

.one-touch-page__body-section--first {
  padding-block-start: var(--layout-section-padding-default);
}

.one-touch-page__split {
  display: grid;
  align-items: start;
  gap: 3rem;
}

.one-touch-page__module-stack {
  display: grid;
  gap: 2rem;
}

.one-touch-page__module {
  display: grid;
  max-width: 38rem;
  gap: 0.82rem;
}

.one-touch-page__module + .one-touch-page__module {
  padding-block-start: 1.8rem;
  border-block-start: 1px solid var(--color-border-subtle);
}

.one-touch-page__module-header {
  --shared-content-header-title-color: var(--color-secondary-950);
  --shared-content-header-description-color: var(--color-text-secondary);
  --shared-content-header-subtitle-gap: -0.1rem;
}

.one-touch-page__visual {
  position: relative;
  min-height: 36rem;
  margin: 0;
}

.one-touch-page__visual-main,
.one-touch-page__visual-accent {
  position: relative;
  overflow: hidden;
  background: var(--color-secondary-100);
  box-shadow: 0 1.5rem 3.5rem rgb(13 31 38 / 0.12);
}

.one-touch-page__visual-main {
  width: min(100%, 27.125rem);
  aspect-ratio: 434 / 575;
  border-radius: 10px 140px 10px 10px;
}

.one-touch-page__visual-accent {
  position: absolute;
  inset-block-start: 0;
  width: min(9rem, 29%);
  aspect-ratio: 158 / 575;
  border-radius: 10px 10px 100px 100px;
  opacity: 0.88;
  box-shadow: 0 1rem 2.2rem rgb(13 31 38 / 0.1);
}

.one-touch-page__visual--left .one-touch-page__visual-main {
  margin-inline-start: auto;
}

.one-touch-page__visual--left .one-touch-page__visual-accent {
  inset-inline-start: 0;
}

.one-touch-page__visual--right .one-touch-page__visual-accent {
  inset-inline-start: 0;
}

.one-touch-page__visual-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1023px) {
  .one-touch-page__body-section {
    padding-block: var(--layout-section-padding-default);
  }

  .one-touch-page__body-section--first {
    padding-block-start: var(--layout-section-padding-default);
  }

  .one-touch-page__split {
    gap: 2rem;
  }

  .one-touch-page__module-stack {
    gap: 1.75rem;
  }

  .one-touch-page__module + .one-touch-page__module {
    padding-block-start: 1.55rem;
  }

  .one-touch-page__visual {
    min-height: 0;
  }

  .one-touch-page__visual-accent {
    display: none;
  }

  .one-touch-page__visual-main {
    width: min(100%, 32rem);
    aspect-ratio: 434 / 575;
    border-radius: 10px 120px 10px 10px;
  }
}

@media (max-width: 767px) {
  .one-touch-page__body-section {
    padding-block: 3rem;
  }

  .one-touch-page__body-section--first {
    padding-block-start: 3rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .one-touch-page__visual-main {
    margin-inline: auto;
  }

  .one-touch-page__module {
    max-width: 44rem;
  }
}

@media (min-width: 1024px) {
  .one-touch-page__split {
    grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
    gap: clamp(3.5rem, 5vw, 5.4rem);
  }

  .one-touch-page__split--reverse {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .one-touch-page__visual--right .one-touch-page__visual-main {
    margin-inline-start: auto;
  }

  .one-touch-page__visual--right .one-touch-page__visual-accent {
    inset-inline-start: 0.4rem;
  }
}
</style>
