<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  getDesiredServiceImageSource,
  resolveServiceImageAsset
} from '~/composables/useServicePageImageAsset'
import { enrichServiceCatalog } from '~/utils/services'
import { getServicePageImageEntry } from '~/utils/service-page-image-registry'

const messages = useRallyMessages()
const localePath = useLocalePath()
const { activeMode } = useHomePageImageMode()
const failedNanoCandidates = ref<Record<string, true>>({})

function resetFailedNanoCandidates() {
  failedNanoCandidates.value = {}
}

function handleCardImageError(imageKey: string, canFallbackFromNano: boolean) {
  if (!canFallbackFromNano) {
    return
  }

  failedNanoCandidates.value = {
    ...failedNanoCandidates.value,
    [imageKey]: true
  }
}

watch(() => activeMode.value, resetFailedNanoCandidates)

const serviceItems = computed(() =>
  enrichServiceCatalog(messages.value.servicesCatalog).map((item) => {
    const imageEntry = getServicePageImageEntry(item.slug, 'overview-card')
    const desiredNanoSource = getDesiredServiceImageSource(
      imageEntry,
      activeMode.value
    )
    const imageKey = desiredNanoSource?.candidateId ?? `${item.slug}-stock`

    return {
      ...item,
      image: resolveServiceImageAsset(
        imageEntry,
        activeMode.value,
        Boolean(failedNanoCandidates.value[imageKey])
      ),
      imageKey,
      to: localePath(`/services/${item.slug}`),
      usesNanoCandidate: desiredNanoSource !== null
    }
  })
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
            class="services-sys-listing"
          >
            <div class="services-sys-listing__media">
              <img
                :src="item.image.src"
                :alt="item.image.alt"
                class="services-sys-listing__image"
                :style="{ objectPosition: item.image.objectPosition }"
                decoding="async"
                @error="
                  handleCardImageError(item.imageKey, item.usesNanoCandidate)
                "
              />
              <div class="services-sys-listing__media-overlay" />
            </div>

            <div class="services-sys-listing__body">
              <p class="type-sys-label-s services-sys-listing__eyebrow">
                {{ item.englishTitle }}
              </p>

              <h2 class="type-sys-headline-s services-sys-listing__title">
                {{ item.shortLabel }}
              </h2>

              <p class="type-sys-body-s services-sys-listing__description">
                {{ item.description }}
              </p>

              <span class="services-sys-listing__cta type-sys-label-s">
                <span>{{ messages.servicesPage.cardCtaLabel }}</span>
                <UIcon
                  name="i-ic-baseline-arrow-forward"
                  class="services-sys-listing__cta-icon size-4"
                />
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-overview-grid {
  padding-block: clamp(2.6rem, 5vw, 4.4rem) clamp(3.2rem, 5vw, 4.8rem);
  background: linear-gradient(
    180deg,
    rgb(249 247 241 / 1) 0%,
    rgb(255 255 255 / 1) 28%,
    rgb(247 245 239 / 1) 100%
  );
}

.services-sys-overview-grid__rail {
  width: 100%;
  max-width: 80rem;
  margin-inline: auto;
}

.services-sys-grid {
  display: grid;
  gap: clamp(2rem, 4vw, 3rem) clamp(1.8rem, 3vw, 2.75rem);
}

.services-sys-listing {
  display: grid;
  gap: 1rem;
  align-content: start;
  padding-top: 1.35rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  text-decoration: none;
}

.services-sys-listing__media {
  position: relative;
  overflow: hidden;
  border-radius: clamp(1rem, 2vw, 1.55rem);
  aspect-ratio: 4 / 3;
  background: color-mix(in srgb, var(--color-secondary-100) 84%, white);
}

.services-sys-listing__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.82) contrast(0.98) brightness(0.98);
  transition: transform 260ms ease;
}

.services-sys-listing__media-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.2) 0%,
      rgb(255 255 255 / 0.05) 32%,
      rgb(32 38 42 / 0.14) 100%
    ),
    linear-gradient(
      140deg,
      rgb(255 255 255 / 0.04) 0%,
      transparent 54%,
      rgb(255 255 255 / 0.08) 100%
    );
}

.services-sys-listing__body {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.services-sys-listing__eyebrow {
  color: rgb(77 87 92 / 0.74);
  letter-spacing: 0.11em;
  text-transform: uppercase;
  line-height: 1.15;
  font-size: 0.64rem;
}

.services-sys-listing__title {
  color: var(--color-secondary-950);
  line-height: 1.08;
  max-width: 17ch;
  text-wrap: balance;
}

.services-sys-listing__description {
  max-width: 31rem;
  margin-top: 0.2rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  text-wrap: pretty;
}

.services-sys-listing__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.55rem;
  color: rgb(42 56 61 / 0.74);
  transition:
    color 180ms ease,
    gap 180ms ease,
    transform 180ms ease;
}

.services-sys-listing__cta-icon {
  flex-shrink: 0;
}

.services-sys-listing:hover .services-sys-listing__image,
.services-sys-listing:focus-visible .services-sys-listing__image {
  transform: scale(1.02);
}

.services-sys-listing:hover .services-sys-listing__title,
.services-sys-listing:focus-visible .services-sys-listing__title {
  color: color-mix(
    in srgb,
    var(--color-primary-800) 26%,
    var(--color-secondary-950)
  );
}

.services-sys-listing:hover .services-sys-listing__cta,
.services-sys-listing:focus-visible .services-sys-listing__cta {
  gap: 0.48rem;
  color: var(--color-secondary-950);
}

.services-sys-listing:focus-visible {
  outline: none;
}

.services-sys-listing:focus-visible .services-sys-listing__media {
  box-shadow: 0 0 0 2px rgb(178 214 207 / 0.42);
}

@media (min-width: 768px) {
  .services-sys-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services-sys-grid > :nth-child(-n + 2) {
    border-top: none;
    padding-top: 0;
  }

  .services-sys-grid > :nth-child(2n) {
    margin-top: clamp(1.35rem, 3vw, 2.8rem);
  }

  .services-sys-listing__body {
    max-width: 33rem;
  }
}

@media (min-width: 1280px) {
  .services-sys-listing__media {
    aspect-ratio: 16 / 11;
  }
}

@media (max-width: 767px) {
  .services-sys-grid > :first-child {
    border-top: none;
    padding-top: 0;
  }

  .services-sys-listing__media {
    aspect-ratio: 16 / 10;
  }

  .services-sys-listing__title {
    max-width: 14ch;
  }
}
</style>
