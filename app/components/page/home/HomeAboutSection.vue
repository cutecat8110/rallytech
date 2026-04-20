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
          class="home-sys-about__media-composite justify-self-center"
          :aria-label="messages.home.about.mediaLabel"
        >
          <div class="home-sys-about__media-clip">
            <div
              class="home-sys-about__media-pane home-sys-about__media-pane--primary"
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
            <div
              class="home-sys-about__media-pane home-sys-about__media-pane--detail"
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
  width: min(100%, 36.5rem);
  min-height: clamp(22rem, 27vw, 27rem);
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
  left: 0;
  z-index: 2;
  width: 78%;
  height: 68%;
  border-radius: 1.1rem;
}

.home-sys-about__media-pane--detail {
  right: 0;
  bottom: clamp(0.5rem, 1vw, 0.75rem);
  z-index: 1;
  width: 44%;
  height: 38%;
  border-radius: 0.9rem;
  opacity: 0.88;
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
  bottom: clamp(0.35rem, 1vw, 0.7rem);
  left: clamp(-0.45rem, -0.7vw, -0.2rem);
  z-index: 3;
  transform: scale(0.6);
  transform-origin: bottom left;
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
    width: 100%;
    height: 64%;
    border-radius: 1rem;
  }

  .home-sys-about__media-pane--detail {
    bottom: 0;
    right: 0.5rem;
    width: 54%;
    height: 34%;
    border-radius: 0.85rem;
  }

  .home-sys-about__motif {
    bottom: 0.2rem;
    left: -0.1rem;
    transform: scale(0.48);
  }
}
</style>
