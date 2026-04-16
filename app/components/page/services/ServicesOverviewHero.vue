<script setup lang="ts">
import PageHeroShell from '~/components/shared/PageHeroShell.vue'

const messages = useRallyMessages()
const { resolvedImage, handleImageError } = useServicesOverviewHeroImageAsset()
</script>

<template>
  <PageHeroShell
    class="services-sys-overview-hero text-neutral-950"
    variant="page"
    shell="wide"
    content-align="start"
  >
    <template #media>
      <img
        :src="resolvedImage.src"
        :alt="resolvedImage.alt"
        class="services-sys-overview-hero__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        decoding="async"
        @error="handleImageError"
      />
    </template>

    <template #overlay>
      <div class="services-sys-overview-hero__overlay" />
    </template>

    <div class="services-sys-overview-hero__content">
      <p
        v-if="messages.servicesPage.hero.kicker"
        class="type-sys-kicker services-sys-overview-hero__kicker"
      >
        {{ messages.servicesPage.hero.kicker }}
      </p>

      <h1 class="type-sys-display-l services-sys-overview-hero__title">
        {{ messages.servicesPage.hero.title }}
      </h1>

      <p
        v-if="messages.servicesPage.hero.description"
        class="type-sys-body-m services-sys-overview-hero__description"
      >
        {{ messages.servicesPage.hero.description }}
      </p>
    </div>
  </PageHeroShell>
</template>

<style scoped>
.services-sys-overview-hero {
  background: linear-gradient(
    180deg,
    rgb(249 247 241 / 1) 0%,
    rgb(248 246 240 / 1) 44%,
    rgb(244 241 233 / 1) 100%
  );
}

.services-sys-overview-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.78) contrast(0.96) brightness(0.92);
}

.services-sys-overview-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      96deg,
      rgb(249 247 241 / 0.98) 0%,
      rgb(249 247 241 / 0.95) 22%,
      rgb(249 247 241 / 0.72) 46%,
      rgb(249 247 241 / 0.16) 74%,
      rgb(249 247 241 / 0.4) 100%
    ),
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.48) 0%,
      rgb(255 255 255 / 0.08) 24%,
      rgb(248 246 240 / 0.12) 74%,
      rgb(243 239 231 / 0.62) 100%
    ),
    radial-gradient(circle at 78% 18%, rgb(255 255 255 / 0.2), transparent 28%);
}

.services-sys-overview-hero__content {
  max-width: 38rem;
}

.services-sys-overview-hero__kicker {
  color: rgb(77 87 92 / 0.82);
  text-transform: uppercase;
}

.services-sys-overview-hero__title {
  max-width: 13ch;
  margin: 0.65rem 0 0;
  color: var(--color-secondary-950);
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.services-sys-overview-hero__description {
  max-width: 31rem;
  margin: 0.85rem 0 0;
  color: rgb(28 36 40 / 0.72);
  line-height: 1.72;
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-overview-hero__content {
    max-width: 22rem;
  }

  .services-sys-overview-hero__title {
    max-width: 10.2ch;
  }

  .services-sys-overview-hero__description {
    max-width: 21rem;
    margin-top: 0.7rem;
  }

  .services-sys-overview-hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgb(249 247 241 / 0.92) 0%,
        rgb(249 247 241 / 0.72) 24%,
        rgb(249 247 241 / 0.52) 60%,
        rgb(243 239 231 / 0.78) 100%
      ),
      linear-gradient(
        90deg,
        rgb(249 247 241 / 0.78) 0%,
        rgb(249 247 241 / 0.26) 50%,
        rgb(249 247 241 / 0.68) 100%
      );
  }
}
</style>
