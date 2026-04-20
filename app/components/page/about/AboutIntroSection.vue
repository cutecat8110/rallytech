<script setup lang="ts">
const messages = useRallyMessages()
const {
  resolvedImage: primaryImage,
  handleImageError: handlePrimaryImageError
} = useAboutPageImageAsset('about-primary')
const { resolvedImage: detailImage, handleImageError: handleDetailImageError } =
  useAboutPageImageAsset('about-detail')
</script>

<template>
  <section id="intro" class="section-sys-shell bg-white">
    <div class="page-sys-shell--wide">
      <div class="about-sys-intro__layout">
        <figure class="about-sys-intro__media">
          <!-- 現代化錯位藝廊佈局 -->
          <div class="about-sys-intro__gallery">
            <div class="about-sys-intro__frame about-sys-intro__frame--primary">
              <img
                :src="detailImage.src"
                :alt="detailImage.alt || messages.aboutPage.hero.title"
                class="about-sys-intro__image about-sys-intro__image--primary"
                @error="handleDetailImageError"
              />
            </div>
            <div
              class="about-sys-intro__frame about-sys-intro__frame--secondary"
            >
              <img
                :src="primaryImage.src"
                :alt="primaryImage.alt || messages.aboutPage.intro.title"
                class="about-sys-intro__image about-sys-intro__image--secondary"
                @error="handlePrimaryImageError"
              />
            </div>
          </div>
        </figure>

        <article class="about-sys-intro__copy">
          <p
            v-if="messages.aboutPage.intro.kicker"
            class="about-sys-intro__kicker type-sys-kicker text-primary-700"
          >
            {{ messages.aboutPage.intro.kicker }}
          </p>
          <h2
            class="about-sys-intro__title type-sys-headline-l text-neutral-900"
          >
            {{ messages.aboutPage.intro.title }}
          </h2>
          <div class="about-sys-intro__body">
            <p
              v-for="(paragraph, index) in messages.aboutPage.intro.paragraphs"
              :key="index"
              class="type-sys-body-m text-neutral-700"
            >
              {{ paragraph }}
            </p>
          </div>
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

.about-sys-intro__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.about-sys-intro__kicker::before {
  content: '';
  display: inline-block;
  width: 0.12rem;
  height: 1.4rem;
  background: currentColor;
}

.about-sys-intro__title {
  margin-top: 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.about-sys-intro__body {
  margin-top: 2rem;
  display: grid;
  gap: 1.25rem;
}

/* 現代化錯位藝廊樣式 */
.about-sys-intro__media {
  position: relative;
  display: flex;
  justify-content: center;
}

.about-sys-intro__gallery {
  position: relative;
  width: 100%;
  max-width: 38rem;
  aspect-ratio: 4 / 3.05;
}

.about-sys-intro__frame {
  position: absolute;
  overflow: hidden;
  border-radius: 1.5rem;
  background: var(--color-neutral-100);
  border: 1px solid rgb(0 0 0 / 0.05);
  box-shadow: 0 2rem 4rem -1rem rgb(15 23 42 / 0.12);
}

.about-sys-intro__frame--primary {
  top: 0;
  right: 0;
  width: 73%;
  height: 80%;
  z-index: 1;
}

.about-sys-intro__frame--secondary {
  bottom: 0;
  left: 0;
  width: 66%;
  height: 58%;
  z-index: 2;
  box-shadow: 0 2.5rem 5rem -1.25rem rgb(15 23 42 / 0.18);
}

.about-sys-intro__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-sys-intro__image--primary {
  object-position: 50% 50%;
}

.about-sys-intro__image--secondary {
  object-position: 0% 46%;
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

  .about-sys-intro__gallery {
    max-width: 28rem;
    margin-inline: auto;
  }
}

@media (max-width: 639px) {
  .about-sys-intro__layout {
    gap: 2.5rem;
  }

  .about-sys-intro__gallery {
    max-width: 22.5rem;
    aspect-ratio: 4 / 3.15;
  }

  .about-sys-intro__frame {
    border-radius: 1rem;
  }

  .about-sys-intro__frame--primary {
    width: 73%;
    height: 76%;
  }

  .about-sys-intro__frame--secondary {
    width: 72%;
    height: 56%;
  }

  .about-sys-intro__title {
    font-size: clamp(2rem, 8.5vw, 2.5rem);
  }
}
</style>
