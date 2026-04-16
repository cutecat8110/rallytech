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
    class="services-sys-detail-hero text-neutral-950"
    variant="page"
    shell="default"
    content-align="start"
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
      <p
        v-if="service.englishTitle"
        class="type-sys-label-s services-sys-detail-hero__kicker"
      >
        {{ service.englishTitle }}
      </p>

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
  background: linear-gradient(
    180deg,
    rgb(249 247 241 / 1) 0%,
    rgb(246 243 235 / 1) 100%
  );
}

.services-sys-detail-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.82) contrast(0.98) brightness(0.94);
}

.services-sys-detail-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      96deg,
      rgb(249 247 241 / 0.98) 0%,
      rgb(249 247 241 / 0.94) 20%,
      rgb(249 247 241 / 0.68) 44%,
      rgb(249 247 241 / 0.14) 74%,
      rgb(249 247 241 / 0.34) 100%
    ),
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.34) 0%,
      rgb(255 255 255 / 0.06) 24%,
      rgb(247 244 236 / 0.12) 74%,
      rgb(244 240 232 / 0.66) 100%
    );
}

.services-sys-detail-hero__content {
  max-width: 34rem;
}

.services-sys-detail-hero__kicker {
  color: rgb(77 87 92 / 0.74);
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.services-sys-detail-hero__title {
  max-width: 12ch;
  margin: 0.55rem 0 0;
  color: var(--color-secondary-950);
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.services-sys-detail-hero__description {
  max-width: 28rem;
  margin: 0.75rem 0 0;
  color: rgb(28 36 40 / 0.7);
  line-height: 1.68;
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-detail-hero__content {
    max-width: 22rem;
  }

  .services-sys-detail-hero__title {
    max-width: 10.5ch;
  }

  .services-sys-detail-hero__description {
    max-width: 21rem;
    margin-top: 0.65rem;
  }

  .services-sys-detail-hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgb(249 247 241 / 0.92) 0%,
        rgb(249 247 241 / 0.7) 24%,
        rgb(249 247 241 / 0.48) 58%,
        rgb(244 240 232 / 0.78) 100%
      ),
      linear-gradient(
        90deg,
        rgb(249 247 241 / 0.72) 0%,
        rgb(249 247 241 / 0.2) 52%,
        rgb(249 247 241 / 0.62) 100%
      );
  }
}
</style>
