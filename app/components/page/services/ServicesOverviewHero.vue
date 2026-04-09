<script setup lang="ts">
const messages = useRallyMessages()
const { resolvedImage, handleImageError } = useServicesOverviewHeroImageAsset()
</script>

<template>
  <section
    class="services-sys-overview-hero relative overflow-hidden text-white"
  >
    <div class="services-sys-overview-hero__media" aria-hidden="true">
      <img
        :src="resolvedImage.src"
        :alt="resolvedImage.alt"
        class="services-sys-overview-hero__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        decoding="async"
        @error="handleImageError"
      />
      <div class="services-sys-overview-hero__overlay" />
    </div>

    <div class="page-sys-shell--wide relative z-10">
      <div class="services-sys-overview-hero__layout">
        <div class="services-sys-overview-hero__content">
          <p class="type-sys-kicker services-sys-overview-hero__kicker">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-overview-hero {
  background: var(--color-secondary-950);
  padding-block: clamp(0.8rem, 2vw, 1.25rem);
}

.services-sys-overview-hero__media {
  position: absolute;
  inset: 0;
}

.services-sys-overview-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.98) contrast(1.08) brightness(0.86);
}

.services-sys-overview-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 16%, rgb(48 187 165 / 0.16), transparent 30%),
    radial-gradient(
      circle at 50% 48%,
      rgb(255 255 255 / 0.07),
      transparent 28%
    ),
    linear-gradient(
      180deg,
      rgb(4 9 13 / 0.72) 0%,
      rgb(7 14 18 / 0.28) 24%,
      rgb(7 14 18 / 0.28) 56%,
      rgb(4 9 13 / 0.78) 100%
    ),
    linear-gradient(
      90deg,
      rgb(4 9 13 / 0.58) 0%,
      rgb(7 14 18 / 0.18) 22%,
      rgb(7 14 18 / 0.18) 78%,
      rgb(4 9 13 / 0.58) 100%
    );
}

.services-sys-overview-hero__layout {
  position: relative;
  display: grid;
  align-items: center;
  min-height: clamp(16rem, 19vw, 18.5rem);
  padding-block: clamp(1rem, 1.8vw, 1.3rem);
}

.services-sys-overview-hero__content {
  max-width: 48rem;
  margin-inline: auto;
  text-align: center;
}

.services-sys-overview-hero__kicker {
  color: var(--color-primary-200);
  text-transform: uppercase;
}

.services-sys-overview-hero__title {
  max-width: 22ch;
  margin: 0.7rem auto 0;
  color: var(--color-white);
  line-height: 1.08;
  letter-spacing: -0.028em;
  text-shadow: 0 10px 28px rgb(0 0 0 / 0.28);
  text-wrap: balance;
}

.services-sys-overview-hero__description {
  max-width: 40rem;
  margin: 0.72rem auto 0;
  color: rgb(255 255 255 / 0.84);
  text-shadow: 0 6px 20px rgb(0 0 0 / 0.22);
  text-wrap: pretty;
}

@media (min-width: 1024px) {
  .services-sys-overview-hero__layout {
    min-height: clamp(16.75rem, 19vw, 19rem);
  }
}

@media (max-width: 767px) {
  .services-sys-overview-hero {
    padding-block: 0.75rem 1rem;
  }

  .services-sys-overview-hero__layout {
    min-height: 15rem;
  }

  .services-sys-overview-hero__title {
    max-width: 16ch;
  }

  .services-sys-overview-hero__description {
    max-width: 28rem;
  }
}
</style>
