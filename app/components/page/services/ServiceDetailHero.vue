<script setup lang="ts">
import type { ServiceCatalogItemMessages } from '~~/i18n/locales/types'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'

const props = defineProps<{
  service: ServiceCatalogItemMessages
}>()
const { resolvedImage, handleImageError } = useServicePageImageAsset(
  props.service.slug,
  'detail-hero'
)
</script>

<template>
  <PageHeroShell
    class="services-sys-detail-hero text-white"
    variant="page"
    shell="default"
    content-align="center"
  >
    <template #media>
      <img
        :src="resolvedImage.src"
        :alt="resolvedImage.alt"
        class="services-sys-detail-hero__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        decoding="async"
        @error="handleImageError"
      />
    </template>

    <template #overlay>
      <div class="services-sys-detail-hero__overlay" />
    </template>

    <div class="services-sys-detail-hero__content">
      <h1 class="type-sys-display-l services-sys-detail-hero__title">
        {{ service.shortLabel }}
      </h1>

      <p class="type-sys-body-m services-sys-detail-hero__description">
        {{ service.description }}
      </p>
    </div>
  </PageHeroShell>
</template>

<style scoped>
.services-sys-detail-hero {
  background: var(--color-secondary-950);
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

.services-sys-detail-hero__content {
  max-width: 44rem;
  margin-inline: auto;
  text-align: center;
}

.services-sys-detail-hero__title {
  max-width: 14ch;
  margin: 0 auto;
  color: var(--color-white);
  line-height: 1.03;
  letter-spacing: -0.026em;
  text-shadow: 0 10px 28px rgb(0 0 0 / 0.28);
  text-wrap: balance;
}

.services-sys-detail-hero__description {
  max-width: 34rem;
  margin: 1rem auto 0;
  color: rgb(255 255 255 / 0.82);
  line-height: 1.65;
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-detail-hero__title {
    max-width: 10.2ch;
  }

  .services-sys-detail-hero__description {
    max-width: 22rem;
    margin-top: 0.8rem;
  }
}
</style>
