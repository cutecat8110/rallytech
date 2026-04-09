<script setup lang="ts">
import { computed } from 'vue'
import { getServicePageImageEntry } from '~/utils/service-page-image-registry'
import { enrichServiceCatalog } from '~/utils/services'

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
    <div class="page-sys-shell">
      <div class="services-sys-grid">
        <article
          v-for="item in serviceItems"
          :key="item.slug"
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

            <div class="services-sys-card__topline">
              <span class="services-sys-card__index type-sys-label-s">
                {{ String(item.order).padStart(2, '0') }}
              </span>
              <span class="services-sys-card__icon">
                <UIcon :name="item.icon" class="size-5" />
              </span>
            </div>
          </div>

          <div class="services-sys-card__body">
            <div class="services-sys-card__header">
              <p class="type-sys-label-s services-sys-card__eyebrow">
                {{ item.englishTitle }}
              </p>
              <h2 class="type-sys-headline-s text-neutral-950">
                {{ item.shortLabel }}
              </h2>
            </div>

            <p class="type-sys-body-s services-sys-card__description">
              {{ item.description }}
            </p>

            <NuxtLink
              :to="item.to"
              class="services-sys-card__cta type-sys-label-s"
            >
              <span>{{ messages.servicesPage.cardCtaLabel }}</span>
              <UIcon name="i-ic-baseline-arrow-forward" class="size-4" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-overview-grid {
  position: relative;
  z-index: 2;
  margin-top: clamp(-2.75rem, -4vw, -1.5rem);
  padding-top: clamp(1.25rem, 3vw, 2rem);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-primary-50) 26%, var(--color-white)) 0%,
    var(--color-white) 100%
  );
}

.services-sys-grid {
  display: grid;
  gap: 1rem;
}

.services-sys-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 21.5rem;
  padding: 0;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 6%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-xl);
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.99) 0%,
      rgb(245 248 248 / 0.84) 100%
    ),
    var(--color-white);
  box-shadow: 0 18px 42px rgb(6 20 27 / 0.06);
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;
}

.services-sys-card:hover {
  border-color: color-mix(
    in srgb,
    var(--color-primary-200) 56%,
    var(--color-border-subtle)
  );
  box-shadow: 0 24px 52px rgb(6 20 27 / 0.1);
  transform: translateY(-4px);
}

.services-sys-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: color-mix(in srgb, var(--color-secondary-950) 14%, transparent);
}

.services-sys-card__media::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 42%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgb(8 18 25 / 0.08) 58%,
    rgb(8 18 25 / 0.48) 100%
  );
}

.services-sys-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
}

.services-sys-card__topline {
  position: absolute;
  inset: 0.95rem 0.95rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  z-index: 1;
}

.services-sys-card__index {
  min-height: 2rem;
  padding: 0.38rem 0.65rem;
  border-radius: var(--radius-full);
  color: rgb(255 255 255 / 0.72);
  letter-spacing: 0.12em;
  background: rgb(6 18 23 / 0.44);
  backdrop-filter: blur(10px);
}

.services-sys-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.4rem 1.45rem 1.5rem;
}

.services-sys-card__header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.services-sys-card__eyebrow {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-card__icon {
  display: inline-flex;
  width: 2.4rem;
  height: 2.4rem;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  color: var(--color-white);
  background: rgb(6 18 23 / 0.48);
  backdrop-filter: blur(10px);
}

.services-sys-card__description {
  margin-top: 0.95rem;
  color: var(--color-text-secondary);
}

.services-sys-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 1.8rem;
  color: var(--color-primary-700);
  letter-spacing: 0.04em;
  transition:
    color 180ms ease,
    gap 180ms ease;
}

.services-sys-card__cta:hover {
  gap: 0.5rem;
  color: var(--color-primary-800);
}

@media (min-width: 768px) {
  .services-sys-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.35rem;
  }

  .services-sys-card {
    min-height: 22.5rem;
  }

  .services-sys-card__body {
    padding: 1.55rem 1.55rem 1.65rem;
  }
}

@media (min-width: 1280px) {
  .services-sys-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: stretch;
  }
}
</style>
