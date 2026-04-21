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
  <section id="about" class="section-sys-shell bg-white">
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
            class="home-sys-about__points"
            :items="aboutPoints"
            variant="icon"
            tone="light"
          />
        </article>

        <SharedMediaPair
          class="home-sys-about__media-composite justify-self-center lg:justify-self-start"
          variant="compact"
          :back-image="aboutBackImage"
          :front-image="aboutFrontImage"
          :aria-label="messages.home.about.mediaLabel"
          @back-error="handleAboutDetailError"
          @front-error="handleAboutPrimaryError"
        >
          <template #decor>
            <BrandBlockMotif
              class="home-sys-about__motif"
              variant="media"
              tone="light"
            />
          </template>
        </SharedMediaPair>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-about__copy {
  display: flex;
  flex-direction: column;
}

.home-sys-about__intro {
  max-width: 34rem;
}

.home-sys-about__points {
  margin-top: 1.75rem;
}

.home-sys-about__media-composite {
  margin-inline: auto;
}

@media (min-width: 1024px) {
  .home-sys-about__media-composite {
    margin-inline: 0;
  }
}
</style>
