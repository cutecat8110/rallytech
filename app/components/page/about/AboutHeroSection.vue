<script setup lang="ts">
import PageHeroShell from '~/components/shared/PageHeroShell.vue'

const messages = useRallyMessages()
const { resolvedImage: heroImage, handleImageError: handleHeroImageError } =
  useAboutPageImageAsset('about-primary')
</script>

<template>
  <PageHeroShell
    class="about-sys-hero text-white"
    variant="page"
    shell="wide"
    content-align="center"
  >
    <template #media>
      <img
        :src="heroImage.src"
        :alt="heroImage.alt || messages.aboutPage.hero.title"
        class="about-sys-hero__image"
        @error="handleHeroImageError"
      />
    </template>

    <template #overlay>
      <div class="about-sys-hero__overlay" />
    </template>

    <div class="about-sys-hero__content">
      <h1 class="type-sys-display-l about-sys-hero__title">
        {{ messages.aboutPage.hero.title }}
      </h1>
    </div>
  </PageHeroShell>
</template>

<style scoped>
.about-sys-hero {
  position: relative;
  border-bottom: 1px solid rgb(255 255 255 / 0.08);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-secondary-950) 88%, black) 0%,
    var(--color-secondary-950) 100%
  );
}

.about-sys-hero :deep(.page-hero-shell__content) {
  min-height: clamp(13rem, 27svh, 17rem);
  padding-block: clamp(1.4rem, 3vw, 2rem);
}

.about-sys-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 62%;
  filter: saturate(0.8) contrast(1.01) brightness(0.54);
  opacity: 0.96;
  transform: scale(1.02);
}

.about-sys-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgb(4 10 14 / 0.88) 0%,
      rgb(6 13 18 / 0.5) 38%,
      rgb(5 12 17 / 0.72) 100%
    ),
    linear-gradient(
      90deg,
      rgb(4 10 14 / 0.16) 0%,
      rgb(4 10 14 / 0) 22%,
      rgb(4 10 14 / 0) 78%,
      rgb(4 10 14 / 0.22) 100%
    ),
    radial-gradient(circle at 50% 24%, rgb(48 187 165 / 0.12), transparent 28%);
}

.about-sys-hero__content {
  max-width: 36rem;
  margin-inline: auto;
  text-align: center;
}

.about-sys-hero__title {
  max-width: 10ch;
  margin-inline: auto;
  color: var(--color-white);
  line-height: 1.02;
  letter-spacing: -0.038em;
  text-shadow: 0 0.6rem 1.6rem rgb(4 10 14 / 0.3);
  text-wrap: balance;
}

@media (max-width: 767px) {
  .about-sys-hero :deep(.page-hero-shell__content) {
    min-height: 11.5rem;
    padding-block: 1.25rem;
  }

  .about-sys-hero__image {
    object-position: center 68%;
  }
}
</style>
