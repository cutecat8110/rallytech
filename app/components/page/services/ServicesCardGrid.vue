<script setup lang="ts">
import { computed } from 'vue'
import { enrichServiceCatalog } from '~/utils/services'
import { getServicePageImageEntry } from '~/utils/service-page-image-registry'

const messages = useRallyMessages()
const localePath = useLocalePath()

const serviceItems = computed(() =>
  enrichServiceCatalog(messages.value.servicesCatalog).map((item) => ({
    ...item,
    image: getServicePageImageEntry(item.slug, 'overview-card'),
    to: localePath(`/services/${item.slug}`)
  }))
)
</script>

<template>
  <section class="services-sys-overview-grid section-sys-shell">
    <div class="page-sys-shell--wide">
      <div class="services-sys-overview-grid__rail">
        <div class="services-sys-grid">
          <NuxtLink
            v-for="item in serviceItems"
            :key="item.slug"
            :to="item.to"
            class="services-sys-card"
          >
            <div class="services-sys-card__media">
              <img
                :src="item.image.src"
                :alt="item.image.alt"
                class="services-sys-card__image"
                :style="{ objectPosition: item.image.objectPosition }"
                decoding="async"
              />
              <div class="services-sys-card__media-overlay" />
            </div>

            <div class="services-sys-card__body">
              <div class="services-sys-card__meta" aria-hidden="true">
                <span class="services-sys-card__icon">
                  <UIcon :name="item.icon" class="size-5" />
                </span>
                <p class="type-sys-label-s services-sys-card__eyebrow">
                  {{ item.englishTitle }}
                </p>
              </div>

              <div class="services-sys-card__main">
                <h2 class="type-sys-headline-s services-sys-card__title">
                  {{ item.shortLabel }}
                </h2>

                <p class="type-sys-body-s services-sys-card__description">
                  {{ item.description }}
                </p>

                <span class="services-sys-card__cta type-sys-label-s">
                  <span>{{ messages.servicesPage.cardCtaLabel }}</span>
                  <UIcon
                    name="i-ic-baseline-arrow-forward"
                    class="services-sys-card__cta-icon size-4"
                  />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-overview-grid {
  position: relative;
  z-index: 1;
  padding-block: clamp(2rem, 4vw, 3rem) clamp(2.35rem, 4.4vw, 3.65rem);
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 1) 0%,
    rgb(248 250 251 / 1) 66%,
    rgb(243 246 247 / 1) 100%
  );
}

.services-sys-overview-grid__rail {
  width: 100%;
  max-width: 75rem;
  margin-inline: auto;
}

.services-sys-overview-grid::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgb(10 18 22 / 0.08) 14%,
    rgb(10 18 22 / 0.08) 86%,
    transparent 100%
  );
}

.services-sys-grid {
  display: grid;
  gap: 0.85rem;
}

.services-sys-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgb(10 18 22 / 0.08);
  border-radius: 0;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.985) 0%,
      rgb(248 250 251 / 0.97) 100%
    ),
    linear-gradient(145deg, rgb(255 255 255 / 1) 0%, rgb(243 246 247 / 1) 100%);
  box-shadow:
    0 8px 20px rgb(6 20 27 / 0.045),
    0 3px 8px rgb(6 20 27 / 0.022);
  text-decoration: none;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.services-sys-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgb(10 18 22 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgb(10 18 22 / 0.03) 1px, transparent 1px);
  background-size:
    100% 3.1rem,
    3.1rem 100%;
  opacity: 0.2;
  pointer-events: none;
}

.services-sys-card:hover {
  transform: translateY(-2px);
  border-color: rgb(10 18 22 / 0.1);
  box-shadow:
    0 11px 24px rgb(6 20 27 / 0.06),
    0 4px 10px rgb(6 20 27 / 0.026);
}

.services-sys-card:focus-visible {
  outline: none;
  border-color: rgb(10 18 22 / 0.1);
  box-shadow:
    0 0 0 2px rgb(161 235 223 / 0.24),
    0 11px 24px rgb(6 20 27 / 0.06),
    0 4px 10px rgb(6 20 27 / 0.026);
}

.services-sys-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: color-mix(in srgb, var(--color-secondary-100) 88%, white);
}

.services-sys-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.02) brightness(0.96);
}

.services-sys-card__media-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.08) 0%,
      rgb(255 255 255 / 0.02) 28%,
      rgb(10 18 22 / 0.1) 100%
    ),
    linear-gradient(
      90deg,
      rgb(10 18 22 / 0.04) 0%,
      transparent 32%,
      transparent 68%,
      rgb(10 18 22 / 0.09) 100%
    );
}

.services-sys-card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.58rem;
  padding: 0.82rem 0.82rem 0.76rem;
}

.services-sys-card__meta {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.5rem;
}

.services-sys-card__icon {
  display: inline-flex;
  width: 1.7rem;
  height: 1.7rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(10 18 22 / 0.08);
  color: var(--color-primary-700);
  background: rgb(255 255 255 / 0.9);
  box-shadow: inset 0 0 0 1px rgb(10 18 22 / 0.03);
}

.services-sys-card__eyebrow {
  min-width: 0;
  color: rgb(10 18 22 / 0.36);
  letter-spacing: 0.11em;
  text-transform: uppercase;
  line-height: 1.15;
  overflow-wrap: anywhere;
  font-size: 0.62rem;
}

.services-sys-card__main {
  display: flex;
  min-width: 0;
  flex-direction: column;
  flex: 1;
}

.services-sys-card__title {
  color: var(--color-secondary-950);
  line-height: 1.06;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.services-sys-card__description {
  max-width: none;
  margin-top: 0.34rem;
  color: var(--color-text-secondary);
  line-height: 1.46;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.services-sys-card__cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-end;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 0.5rem;
  color: var(--color-primary-700);
  transition:
    color 180ms ease,
    gap 180ms ease,
    transform 180ms ease;
}

.services-sys-card__cta-icon {
  flex-shrink: 0;
}

.services-sys-card:hover .services-sys-card__cta,
.services-sys-card:focus-visible .services-sys-card__cta {
  gap: 0.48rem;
  color: var(--color-primary-800);
  transform: translateX(2px);
}

@media (min-width: 768px) {
  .services-sys-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.92rem;
  }

  .services-sys-card__media {
    aspect-ratio: 4 / 3;
  }
}

@media (min-width: 1280px) {
  .services-sys-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.88rem;
  }

  .services-sys-card {
    min-height: 100%;
  }

  .services-sys-card__media {
    aspect-ratio: 4 / 3;
  }

  .services-sys-card__media-overlay {
    background:
      linear-gradient(
        180deg,
        rgb(255 255 255 / 0.06) 0%,
        rgb(255 255 255 / 0.02) 22%,
        rgb(10 18 22 / 0.1) 100%
      ),
      linear-gradient(
        90deg,
        rgb(10 18 22 / 0.03) 0%,
        transparent 30%,
        rgb(10 18 22 / 0.1) 100%
      );
  }

  .services-sys-card__body {
    gap: 0.54rem;
    padding: 0.78rem 0.78rem 0.72rem;
  }

  .services-sys-card__title {
    max-width: none;
  }
}

@media (max-width: 767px) {
  .services-sys-grid {
    gap: 0.85rem;
  }

  .services-sys-card__media {
    aspect-ratio: 16 / 10;
  }

  .services-sys-card__cta {
    align-self: flex-end;
  }
}
</style>
