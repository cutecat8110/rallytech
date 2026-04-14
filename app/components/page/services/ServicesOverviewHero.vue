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
      <div class="services-sys-overview-hero__grid" />
      <div class="services-sys-overview-hero__glow" />
    </div>

    <div class="page-sys-shell--wide relative z-10">
      <div class="services-sys-overview-hero__layout">
        <div class="services-sys-overview-hero__rail">
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
    </div>
  </section>
</template>

<style scoped>
.services-sys-overview-hero {
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-secondary-950) 92%, black) 0%,
    var(--color-secondary-950) 100%
  );
  padding-block: clamp(0.72rem, 1.1vw, 0.92rem) clamp(1.55rem, 2.7vw, 2.15rem);
}

.services-sys-overview-hero__media {
  position: absolute;
  inset: 0;
}

.services-sys-overview-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.08) brightness(0.62);
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
      rgb(4 10 14 / 0.2) 0%,
      rgb(4 10 14 / 0.04) 22%,
      rgb(4 10 14 / 0.42) 76%,
      rgb(4 10 14 / 0.92) 100%
    ),
    radial-gradient(circle at 78% 22%, rgb(48 187 165 / 0.18), transparent 30%),
    radial-gradient(circle at 24% 26%, rgb(255 255 255 / 0.06), transparent 26%);
}

.services-sys-overview-hero__grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px);
  background-size:
    100% 4.5rem,
    4.5rem 100%;
  mask-image: linear-gradient(
    180deg,
    transparent 0%,
    rgb(0 0 0 / 0.55) 18%,
    black 56%,
    transparent 100%
  );
  opacity: 0.28;
}

.services-sys-overview-hero__glow {
  position: absolute;
  inset: auto 50% 10%;
  width: min(32rem, 44vw);
  height: min(12rem, 20vw);
  background: radial-gradient(
    circle,
    rgb(48 187 165 / 0.18) 0%,
    rgb(48 187 165 / 0.08) 42%,
    transparent 78%
  );
  filter: blur(18px);
  transform: translateX(-50%);
}

.services-sys-overview-hero__layout {
  position: relative;
  display: flex;
  min-height: clamp(11.6rem, 14vw, 13.25rem);
  align-items: end;
  justify-content: center;
  padding-block: clamp(0.4rem, 0.9vw, 0.7rem) 0;
}

.services-sys-overview-hero__rail {
  width: 100%;
  max-width: 48rem;
  margin-inline: auto;
}

.services-sys-overview-hero__content {
  max-width: 48rem;
  text-align: center;
}

.services-sys-overview-hero__kicker {
  display: inline-flex;
  color: var(--color-primary-200);
  text-transform: uppercase;
}

.services-sys-overview-hero__title {
  max-width: 16.25ch;
  margin: 0.55rem auto 0;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-shadow: 0 14px 30px rgb(0 0 0 / 0.28);
  text-wrap: balance;
}

.services-sys-overview-hero__description {
  max-width: 39rem;
  margin: 0.72rem auto 0;
  color: rgb(255 255 255 / 0.82);
  text-shadow: 0 6px 18px rgb(0 0 0 / 0.2);
  text-wrap: pretty;
}

@media (min-width: 1280px) {
  .services-sys-overview-hero {
    padding-bottom: clamp(1.85rem, 2.8vw, 2.4rem);
  }
}

@media (max-width: 767px) {
  .services-sys-overview-hero {
    padding-block: 0.68rem 1.6rem;
  }

  .services-sys-overview-hero__layout {
    min-height: 11.75rem;
  }

  .services-sys-overview-hero__title {
    max-width: 10.9ch;
    line-height: 1.04;
  }

  .services-sys-overview-hero__description {
    max-width: 26rem;
    margin-top: 0.68rem;
  }
}
</style>
