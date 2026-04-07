<script setup lang="ts">
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'

const messages = useRallyMessages()
const { resolvedImage: heroImage, handleImageError: handleHeroImageError } =
  useHomePageImageAsset('home-hero')
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden bg-sys-rally-hero-industrial text-white"
  >
    <div class="home-sys-hero__media" aria-hidden="true">
      <img
        :src="heroImage.src"
        :alt="heroImage.alt || messages.home.hero.imageAlt"
        class="home-sys-hero__image"
        @error="handleHeroImageError"
      />
      <div class="home-sys-hero__overlay" />
    </div>

    <BrandBlockMotif class="home-sys-hero__motif" variant="hero" tone="dark" />

    <div class="page-sys-shell--wide relative z-10">
      <div class="content-sys-rail home-sys-hero__content">
        <div class="home-sys-hero__inner">
          <p class="type-sys-kicker text-primary-200 uppercase">
            {{ messages.home.hero.kicker }}
          </p>
          <h1 class="type-sys-display-l mt-4 text-white">
            {{ messages.home.hero.title }}
          </h1>
          <p
            v-if="messages.home.hero.description"
            class="type-sys-body-m mt-4 max-w-[38rem] text-white/78 md:mx-auto"
          >
            {{ messages.home.hero.description }}
          </p>

          <div class="mt-7 flex justify-center">
            <UButton
              to="#services"
              color="primary"
              variant="solid"
              size="xl"
              :label="messages.home.hero.ctaLabel"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-hero__media {
  position: absolute;
  inset: 0;
}

.home-sys-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.9) contrast(1.04);
}

.home-sys-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 34%, rgb(60 132 255 / 0.16), transparent 24%),
    radial-gradient(circle at 76% 22%, rgb(48 187 165 / 0.2), transparent 30%),
    linear-gradient(
      180deg,
      rgb(10 18 22 / 0.54) 0%,
      rgb(10 18 22 / 0.46) 28%,
      rgb(10 18 22 / 0.74) 62%,
      rgb(10 18 22 / 0.9) 100%
    ),
    linear-gradient(
      90deg,
      rgb(7 12 16 / 0.92) 0%,
      rgb(7 12 16 / 0.54) 42%,
      rgb(7 12 16 / 0.54) 58%,
      rgb(7 12 16 / 0.92) 100%
    );
}

.home-sys-hero__motif {
  --motif-position: absolute;

  position: absolute;
  top: clamp(4.5rem, 12vw, 7.25rem);
  left: clamp(1.25rem, 8vw, 8.25rem);
  z-index: 2;
}

.home-sys-hero__content {
  display: flex;
  min-height: clamp(31rem, calc(100svh - 6.5rem), 41rem);
  align-items: center;
  justify-content: center;
  padding-block: clamp(3.75rem, 6vw, 5.5rem);
}

.home-sys-hero__inner {
  max-width: 48rem;
  margin-inline: auto;
  text-align: center;
}

@media (max-width: 767px) {
  .home-sys-hero__motif {
    display: none;
  }
}
</style>
