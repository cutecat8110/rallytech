<script setup lang="ts">
import PageHeroShell from '~/components/shared/PageHeroShell.vue'

const messages = useRallyMessages()
const { resolvedImage, handleImageError } = useServicesOverviewHeroImageAsset()
</script>

<template>
  <PageHeroShell
    class="services-sys-overview-hero text-white"
    variant="page"
    shell="wide"
    content-align="center"
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
    color-mix(in srgb, var(--color-secondary-950) 92%, black) 0%,
    var(--color-secondary-950) 100%
  );
}

.services-sys-overview-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.86) contrast(1.06) brightness(0.58);
}

.services-sys-overview-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      100deg,
      rgb(4 10 14 / 0.96) 0%,
      rgb(5 11 15 / 0.9) 18%,
      rgb(7 14 18 / 0.72) 46%,
      rgb(7 14 18 / 0.56) 68%,
      rgb(4 10 14 / 0.84) 100%
    ),
    linear-gradient(
      180deg,
      rgb(4 10 14 / 0.18) 0%,
      rgb(4 10 14 / 0.04) 22%,
      rgb(4 10 14 / 0.36) 76%,
      rgb(4 10 14 / 0.88) 100%
    ),
    radial-gradient(circle at 78% 22%, rgb(48 187 165 / 0.1), transparent 26%);
}

.services-sys-overview-hero__content {
  max-width: 44rem;
  margin-inline: auto;
  text-align: center;
}

.services-sys-overview-hero__kicker {
  color: rgb(191 243 234 / 0.9);
  text-transform: uppercase;
}

.services-sys-overview-hero__title {
  max-width: 16ch;
  margin: 0.8rem auto 0;
  color: var(--color-white);
  line-height: 1.03;
  letter-spacing: -0.026em;
  text-shadow: 0 14px 30px rgb(0 0 0 / 0.28);
  text-wrap: balance;
}

.services-sys-overview-hero__description {
  max-width: 38rem;
  margin: 1rem auto 0;
  color: rgb(255 255 255 / 0.84);
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-overview-hero__title {
    max-width: 11.5ch;
    line-height: 1.04;
  }

  .services-sys-overview-hero__description {
    max-width: 32rem;
  }
}
</style>
