<script setup lang="ts">
import { computed } from 'vue'
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'

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
</script>

<template>
  <section id="about" class="section-sys-shell bg-white">
    <div class="page-sys-shell">
      <div
        class="grid items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20"
      >
        <article class="home-sys-about__copy max-w-lg">
          <p
            v-if="messages.home.about.kicker"
            class="type-sys-label-m text-primary-700 uppercase tracking-[0.18em]"
          >
            {{ messages.home.about.kicker }}
          </p>
          <h2 class="type-sys-headline-l mt-4 text-neutral-900">
            {{ messages.home.about.title }}
          </h2>
          <p class="type-sys-body-m mt-5 max-w-[34rem] text-neutral-700">
            {{ messages.home.about.description }}
          </p>

          <div class="home-sys-about__points">
            <article
              v-for="point in aboutPoints"
              :key="point.title"
              class="home-sys-about__point"
            >
              <span class="home-sys-about__point-icon">
                <UIcon :name="point.icon" class="size-4.5" />
              </span>
              <div class="min-w-0">
                <p class="type-sys-title-m text-neutral-900">
                  {{ point.title }}
                </p>
                <p
                  class="home-sys-about__point-copy type-sys-body-s text-neutral-700"
                >
                  {{ point.description }}
                </p>
              </div>
            </article>
          </div>
        </article>

        <figure
          class="home-sys-about__media-composite justify-self-end"
          :aria-label="messages.home.about.mediaLabel"
        >
          <div class="home-sys-about__media-clip">
            <div class="home-sys-about__media-pane">
              <img
                :src="aboutPrimaryImage.src"
                :alt="
                  aboutPrimaryImage.alt || messages.home.about.primaryImageAlt
                "
                class="home-sys-about__media-image home-sys-about__media-image--left"
                @error="handleAboutPrimaryError"
              />
            </div>
            <div class="home-sys-about__media-pane">
              <img
                :src="aboutDetailImage.src"
                :alt="
                  aboutDetailImage.alt || messages.home.about.detailImageAlt
                "
                class="home-sys-about__media-image home-sys-about__media-image--right"
                @error="handleAboutDetailError"
              />
            </div>
          </div>
          <BrandBlockMotif
            class="home-sys-about__motif"
            variant="media"
            tone="light"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-about__copy {
  display: flex;
  flex-direction: column;
}

.home-sys-about__points {
  display: grid;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.home-sys-about__point {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.home-sys-about__point-icon {
  display: inline-flex;
  width: 2.125rem;
  height: 2.125rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

.home-sys-about__point-copy {
  max-width: 28rem;
  margin-top: 0.25rem;
}

.home-sys-about__media-composite {
  position: relative;
  width: min(100%, 24.5rem);
  min-height: clamp(25rem, 39vw, 34rem);
  margin-inline: auto;
}

.home-sys-about__media-clip {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.06);
  border-radius: 0 0 20rem 20rem;
  box-shadow: var(--shadow-1);
  background: rgb(255 255 255 / 0.98);
}

.home-sys-about__media-pane {
  position: relative;
  min-height: 100%;
}

.home-sys-about__media-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
}

.home-sys-about__media-image--left {
  object-position: 52% 6%;
}

.home-sys-about__media-image--right {
  object-position: 72% 42%;
}

.home-sys-about__motif {
  --motif-position: absolute;

  position: absolute;
  bottom: clamp(1.3rem, 2.8vw, 1.75rem);
  left: clamp(-1rem, -1.4vw, -0.65rem);
  z-index: 2;
  transform: scale(0.88);
  transform-origin: bottom left;
}

@media (max-width: 767px) {
  .home-sys-about__media-composite {
    min-height: 22rem;
    width: min(100%, 18.25rem);
  }

  .home-sys-about__motif {
    bottom: 1.15rem;
    left: -0.8rem;
    transform: scale(0.68);
  }
}
</style>
