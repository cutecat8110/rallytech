<script setup lang="ts">
import { computed } from 'vue'
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'
import SharedMediaPair from '~/components/shared/SharedMediaPair.vue'
import SharedPointList from '~/components/shared/SharedPointList.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'

const {
  resolvedImage: aboutPrimaryImage,
  handleImageError: handleAboutPrimaryError
} = useHomePageImageAsset('about-primary')
const {
  resolvedImage: aboutDetailImage,
  handleImageError: handleAboutDetailError
} = useHomePageImageAsset('about-detail')

const messages = useRallyMessages()
const aboutPointIcons = [
  'i-lucide-briefcase-business',
  'i-lucide-cpu',
  'i-lucide-handshake'
]

const aboutPoints = computed(() =>
  messages.value.home.about.points.map((point, index) => ({
    ...point,
    icon: aboutPointIcons[index] ?? 'i-lucide-check-circle'
  }))
)

const aboutBackImage = computed(() => ({
  src: aboutDetailImage.value.src,
  alt: aboutDetailImage.value.alt || messages.value.home.about.detailImageAlt,
  objectPosition: '50% 50%'
}))

const aboutFrontImage = computed(() => ({
  src: aboutPrimaryImage.value.src,
  alt: aboutPrimaryImage.value.alt || messages.value.home.about.primaryImageAlt,
  objectPosition: '0% 46%'
}))
</script>

<template>
  <section id="about" class="home-sys-about section-sys-shell bg-white">
    <BrandBlockMotif
      v-motion-parallax="{ yPercent: -6, scrub: 1, desktopOnly: true }"
      class="home-sys-about__motif"
      variant="media"
      tone="light"
    />

    <div class="page-sys-shell">
      <div
        class="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16"
      >
        <article class="home-sys-about__copy max-w-lg">
          <SharedSectionIntro
            class="home-sys-about__intro"
            :kicker="messages.home.about.kicker"
            :title="messages.home.about.title"
            :description="messages.home.about.description"
            tone="light"
            align="start"
            density="spacious"
          />

          <SharedPointList
            v-motion-reveal="{
              preset: 'fade-up',
              distance: 18,
              duration: 0.7,
              delay: 0.04
            }"
            class="home-sys-about__points"
            :items="aboutPoints"
            variant="icon"
            tone="light"
          />
        </article>

        <SharedMediaPair
          class="home-sys-about__media-composite justify-self-center lg:justify-self-start"
          variant="compact"
          tone="light"
          :back-image="aboutBackImage"
          :front-image="aboutFrontImage"
          :aria-label="messages.home.about.mediaLabel"
          @back-error="handleAboutDetailError"
          @front-error="handleAboutPrimaryError"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-about {
  position: relative;
  overflow-x: clip;
  padding-top: clamp(4.5rem, 7vw, 6rem);
  background:
    linear-gradient(90deg, rgb(10 18 22 / 0.045) 0, transparent 1px)
      calc(50% - min(50vw, 42.5rem)) 0 / clamp(11rem, 16vw, 16.5rem) 100%
      no-repeat,
    linear-gradient(180deg, rgb(248 250 251 / 0.96), rgb(255 255 255 / 1));
}

.home-sys-about__copy {
  display: flex;
  flex-direction: column;
}

.home-sys-about > .page-sys-shell {
  position: relative;
  z-index: 2;
}

.home-sys-about__intro {
  max-width: 34rem;
}

.home-sys-about__points {
  --shared-point-list-marker-color: color-mix(
    in srgb,
    var(--color-primary-800) 76%,
    var(--color-secondary-950)
  );
  --shared-point-list-marker-bg: color-mix(
    in srgb,
    var(--color-primary-500) 10%,
    transparent
  );

  margin-top: 1.75rem;
}

.home-sys-about__points :deep(.shared-point-list__marker) {
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--color-primary-700) 18%, transparent);
}

.home-sys-about__media-composite {
  margin-inline: auto;
  margin-top: 0.25rem;
}

.home-sys-about__motif {
  --motif-position: absolute;

  position: absolute;
  top: auto;
  right: clamp(1.5rem, 4vw, 5.25rem);
  bottom: clamp(4.5rem, 7vw, 6rem);
  z-index: 1;
}

.home-sys-about__motif :deep(.brand-block-motif__block--primary) {
  left: 0.45rem;
}

.home-sys-about__motif :deep(.brand-block-motif__block--secondary) {
  left: 4.65rem;
  width: 1.55rem;
  height: 1.55rem;
}

.home-sys-about__motif :deep(.brand-block-motif__block--highlight) {
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-secondary-950) 9%, transparent),
    0 0.45rem 0.9rem
      color-mix(in srgb, var(--color-secondary-950) 12%, transparent);
}

@media (max-width: 1023px) {
  .home-sys-about__copy {
    width: min(100%, 38rem);
    max-width: none;
    margin-inline: auto;
  }

  .home-sys-about__intro {
    max-width: 38rem;
  }

  .home-sys-about__intro :deep(.shared-section-intro__description) {
    max-width: 38rem;
  }

  .home-sys-about__media-composite {
    width: min(100%, 38rem);
  }

  .home-sys-about__motif {
    top: auto;
    right: clamp(1.5rem, 4vw, 3rem);
    bottom: clamp(4.75rem, 7vw, 5.5rem);
    transform: scale(0.88);
    transform-origin: right top;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .home-sys-about__intro {
    margin-inline: auto;
    text-align: center;
  }

  .home-sys-about__intro :deep(.shared-section-intro__description) {
    margin-inline: auto;
  }
}

@media (min-width: 1024px) {
  .home-sys-about__media-composite {
    justify-self: center;
    margin-inline: 0;
    margin-top: 0;
  }
}

@media (max-width: 767px) {
  .home-sys-about {
    padding-top: 3.75rem;
  }

  .home-sys-about__media-composite {
    display: none;
  }

  .home-sys-about__motif {
    display: none;
  }
}
</style>
