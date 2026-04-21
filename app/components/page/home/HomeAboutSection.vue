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
        class="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16"
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
          class="home-sys-about__media-composite justify-self-center lg:justify-self-start"
          :aria-label="messages.home.about.mediaLabel"
        >
          <div class="home-sys-about__media-clip">
            <div
              class="home-sys-about__media-pane home-sys-about__media-pane--primary"
            >
              <img
                :src="aboutDetailImage.src"
                :alt="
                  aboutDetailImage.alt || messages.home.about.detailImageAlt
                "
                class="home-sys-about__media-image home-sys-about__media-image--detail"
                @error="handleAboutDetailError"
              />
            </div>
            <div
              class="home-sys-about__media-pane home-sys-about__media-pane--detail"
            >
              <img
                :src="aboutPrimaryImage.src"
                :alt="
                  aboutPrimaryImage.alt || messages.home.about.primaryImageAlt
                "
                class="home-sys-about__media-image home-sys-about__media-image--primary"
                @error="handleAboutPrimaryError"
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
  isolation: isolate;
  width: min(100%, 34.75rem);
  min-height: clamp(21rem, 25vw, 25.5rem);
  margin-inline: auto;
}

.home-sys-about__media-clip {
  position: absolute;
  inset: 0;
  overflow: visible;
}

.home-sys-about__media-pane {
  position: absolute;
  min-height: 0;
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.08);
  background: rgb(255 255 255 / 0.98);
  box-shadow: 0 2rem 4.5rem -1.75rem rgb(15 23 42 / 0.22);
}

.home-sys-about__media-pane--primary {
  top: clamp(0.4rem, 1vw, 0.8rem);
  right: 0;
  z-index: 1;
  width: 74%;
  height: 62%;
  border-radius: 1.1rem;
}

.home-sys-about__media-pane--detail {
  left: 0;
  bottom: clamp(0.5rem, 1vw, 0.75rem);
  z-index: 2;
  width: 66%;
  height: 56%;
  border-radius: 0.9rem;
  opacity: 1;
}

.home-sys-about__media-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-sys-about__media-image--primary {
  object-position: 0% 46%;
}

.home-sys-about__media-image--detail {
  object-position: 50% 50%;
}

.home-sys-about__motif {
  --motif-position: absolute;

  position: absolute;
  right: -0.5rem;
  bottom: -0.25rem;
  z-index: 3;
  transform: none;
  transform-origin: bottom left;
}

@media (min-width: 1024px) {
  .home-sys-about__media-composite {
    width: min(100%, 33.75rem);
    margin-inline: 0;
  }
}

@media (max-width: 767px) {
  .home-sys-about__media-composite {
    width: min(100%, 19.75rem);
    min-height: 20.75rem;
  }

  .home-sys-about__media-pane {
    box-shadow: 0 1.5rem 3rem -1.25rem rgb(15 23 42 / 0.22);
  }

  .home-sys-about__media-pane--primary {
    width: 94%;
    height: 60%;
    border-radius: 1rem;
  }

  .home-sys-about__media-pane--detail {
    bottom: 0;
    left: 0;
    width: 84%;
    height: 48%;
    border-radius: 0.85rem;
  }

  .home-sys-about__motif {
    right: -0.25rem;
    bottom: -0.2rem;
    transform: none;
  }
}
</style>
