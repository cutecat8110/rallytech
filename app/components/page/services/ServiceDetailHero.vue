<script setup lang="ts">
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'

const props = defineProps<{
  service: ServiceCatalogItemMessages
  detailPage: ServiceDetailPageMessages
}>()

const heroSummary = computed(
  () => props.service.description || props.detailPage.introParagraphs[0] || ''
)
const { resolvedImage, handleImageError } = useServicePageImageAsset(
  props.service.slug,
  'detail-hero'
)
</script>

<template>
  <section class="services-sys-detail-hero relative overflow-hidden text-white">
    <div class="services-sys-detail-hero__media" aria-hidden="true">
      <img
        :src="resolvedImage.src"
        :alt="resolvedImage.alt"
        class="services-sys-detail-hero__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        decoding="async"
        @error="handleImageError"
      />
      <div class="services-sys-detail-hero__overlay" />
    </div>

    <div class="page-sys-shell relative z-10">
      <div class="services-sys-detail-hero__layout">
        <div class="services-sys-detail-hero__content">
          <p class="type-sys-kicker services-sys-detail-hero__kicker">
            {{ service.shortLabel }}
          </p>

          <h1 class="type-sys-display-m services-sys-detail-hero__title">
            {{ detailPage.heroTitle }}
          </h1>

          <p
            v-if="heroSummary"
            class="type-sys-body-m services-sys-detail-hero__description"
          >
            {{ heroSummary }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-hero {
  background: var(--color-secondary-950);
  padding-block: clamp(0.6rem, 1.6vw, 1rem);
}

.services-sys-detail-hero__media {
  position: absolute;
  inset: 0;
}

.services-sys-detail-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.98) contrast(1.06) brightness(0.84);
}

.services-sys-detail-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 18%, rgb(48 187 165 / 0.12), transparent 30%),
    radial-gradient(
      circle at 50% 48%,
      rgb(255 255 255 / 0.06),
      transparent 26%
    ),
    linear-gradient(
      180deg,
      rgb(4 9 13 / 0.78) 0%,
      rgb(7 14 18 / 0.28) 26%,
      rgb(7 14 18 / 0.3) 56%,
      rgb(4 9 13 / 0.82) 100%
    ),
    linear-gradient(
      90deg,
      rgb(4 9 13 / 0.62) 0%,
      rgb(7 14 18 / 0.18) 24%,
      rgb(7 14 18 / 0.18) 76%,
      rgb(4 9 13 / 0.62) 100%
    );
}

.services-sys-detail-hero__layout {
  position: relative;
  display: flex;
  min-height: clamp(12.5rem, 15vw, 15.75rem);
  align-items: center;
  justify-content: center;
  padding-block: clamp(0.95rem, 1.6vw, 1.25rem);
}

.services-sys-detail-hero__content {
  max-width: 50rem;
  margin-inline: auto;
  text-align: center;
}

.services-sys-detail-hero__kicker {
  color: var(--color-primary-200);
  text-transform: uppercase;
}

.services-sys-detail-hero__title {
  max-width: 24ch;
  margin: 0.65rem auto 0;
  color: var(--color-white);
  line-height: 1.08;
  letter-spacing: -0.028em;
  text-shadow: 0 10px 28px rgb(0 0 0 / 0.28);
  text-wrap: balance;
}

.services-sys-detail-hero__description {
  max-width: 38rem;
  margin: 0.72rem auto 0;
  color: rgb(255 255 255 / 0.82);
  text-shadow: 0 6px 20px rgb(0 0 0 / 0.22);
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-detail-hero {
    padding-block: 0.55rem 0.85rem;
  }

  .services-sys-detail-hero__layout {
    min-height: 12.75rem;
  }

  .services-sys-detail-hero__title {
    max-width: 17ch;
  }

  .services-sys-detail-hero__description {
    max-width: 30rem;
  }
}
</style>
