<script setup lang="ts">
import { computed } from 'vue'
import SharedMediaPair from '~/components/shared/SharedMediaPair.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'

const messages = useRallyMessages()
const {
  resolvedImage: primaryImage,
  handleImageError: handlePrimaryImageError
} = useAboutPageImageAsset('about-primary')
const { resolvedImage: detailImage, handleImageError: handleDetailImageError } =
  useAboutPageImageAsset('about-detail')

const introBackImage = computed(() => ({
  src: detailImage.value.src,
  alt: detailImage.value.alt || messages.value.aboutPage.hero.title,
  objectPosition: '50% 50%'
}))

const introFrontImage = computed(() => ({
  src: primaryImage.value.src,
  alt: primaryImage.value.alt || messages.value.aboutPage.intro.title,
  objectPosition: '0% 46%'
}))
</script>

<template>
  <section id="intro" class="section-sys-shell bg-white">
    <div class="page-sys-shell--wide">
      <div class="about-sys-intro__layout">
        <SharedMediaPair
          class="about-sys-intro__media"
          variant="editorial"
          :back-image="introBackImage"
          :front-image="introFrontImage"
          :aria-label="messages.aboutPage.intro.title"
          @back-error="handleDetailImageError"
          @front-error="handlePrimaryImageError"
        />

        <article class="about-sys-intro__copy">
          <SharedSectionIntro
            class="about-sys-intro__section-intro"
            :kicker="messages.aboutPage.intro.kicker"
            :title="messages.aboutPage.intro.title"
            tone="light"
            align="start"
            density="spacious"
          />
          <SharedTextStack
            class="about-sys-intro__body"
            :paragraphs="messages.aboutPage.intro.paragraphs"
            tone="light"
            size="md"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-sys-intro__layout {
  display: grid;
  align-items: center;
  gap: clamp(3rem, 8vw, 6rem);
}

.about-sys-intro__copy {
  display: flex;
  flex-direction: column;
  max-width: 34rem;
}

.about-sys-intro__section-intro {
  max-width: 34rem;
}

.about-sys-intro__body {
  margin-top: 2rem;
}

.about-sys-intro__media {
  width: 100%;
  justify-self: center;
}

@media (min-width: 1024px) {
  .about-sys-intro__layout {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  }
}

@media (max-width: 1023px) {
  .about-sys-intro__copy {
    margin-inline: auto;
    text-align: center;
    align-items: center;
  }
}

@media (max-width: 639px) {
  .about-sys-intro__layout {
    gap: 2.5rem;
  }

  .about-sys-intro__section-intro {
    max-width: 22rem;
  }
}
</style>
