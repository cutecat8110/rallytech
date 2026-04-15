<script setup lang="ts">
const messages = useRallyMessages()
const {
  resolvedImage: primaryImage,
  handleImageError: handlePrimaryImageError
} = useAboutPageImageAsset('about-primary')
const {
  resolvedImage: detailImage,
  handleImageError: handleDetailImageError
} = useAboutPageImageAsset('about-detail')
</script>

<template>
  <section id="intro" class="section-sys-shell bg-white">
    <div class="page-sys-shell--wide">
      <div class="about-sys-intro__layout">
        <figure class="about-sys-intro__media">
          <div class="about-sys-intro__outline" aria-hidden="true" />
          <div class="about-sys-intro__stack about-sys-intro__stack--small">
            <img
              :src="detailImage.src"
              :alt="detailImage.alt || messages.aboutPage.hero.title"
              class="about-sys-intro__image about-sys-intro__image--small"
              @error="handleDetailImageError"
            />
          </div>
          <div class="about-sys-intro__stack about-sys-intro__stack--large">
            <img
              :src="primaryImage.src"
              :alt="primaryImage.alt || messages.aboutPage.intro.title"
              class="about-sys-intro__image about-sys-intro__image--large"
              @error="handlePrimaryImageError"
            />
          </div>
          <span class="about-sys-intro__accent" aria-hidden="true" />
        </figure>

        <article class="about-sys-intro__copy">
          <p
            v-if="messages.aboutPage.intro.kicker"
            class="about-sys-intro__kicker type-sys-label-m text-primary-700 uppercase"
          >
            {{ messages.aboutPage.intro.kicker }}
          </p>
          <h2 class="about-sys-intro__title type-sys-headline-l text-neutral-900">
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
          <div class="about-sys-intro__rule" aria-hidden="true" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-sys-intro__layout {
  display: grid;
  align-items: center;
  gap: clamp(2.5rem, 7vw, 5.5rem);
}

.about-sys-intro__copy {
  display: flex;
  flex-direction: column;
  max-width: 36rem;
}

.about-sys-intro__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 0.18em;
}

.about-sys-intro__kicker::before {
  content: '';
  display: inline-block;
  width: 0.16rem;
  height: 1.6rem;
  background: currentColor;
}

.about-sys-intro__title {
  margin-top: 1.5rem;
  max-width: 11ch;
  line-height: 1.08;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.about-sys-intro__body {
  margin-top: 1.8rem;
  display: grid;
  gap: 1.1rem;
}

.about-sys-intro__rule {
  width: 5.5rem;
  height: 0.2rem;
  margin-top: 2rem;
  background: linear-gradient(
    90deg,
    var(--color-secondary-700) 0%,
    color-mix(in srgb, var(--color-primary-400) 56%, white) 100%
  );
}

.about-sys-intro__media {
  position: relative;
  width: min(100%, 37rem);
  min-height: clamp(25rem, 40vw, 38rem);
  margin-inline: auto;
}

.about-sys-intro__outline {
  position: relative;
  width: min(42%, 12rem);
  height: min(36%, 10rem);
  margin-left: 33%;
  border: 0.18rem solid var(--color-secondary-700);
}

.about-sys-intro__stack {
  position: absolute;
  overflow: hidden;
  border-radius: 1rem;
  background: var(--color-neutral-100);
  box-shadow: 0 1.4rem 3rem rgb(15 23 42 / 0.14);
}

.about-sys-intro__stack--small {
  left: 0;
  bottom: 4rem;
  width: min(45%, 14rem);
  height: min(66%, 22rem);
}

.about-sys-intro__stack--large {
  right: 0;
  bottom: 0;
  width: min(64%, 23rem);
  height: min(72%, 25rem);
}

.about-sys-intro__stack--large::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgb(255 255 255 / 0.24);
  pointer-events: none;
}

.about-sys-intro__accent {
  position: absolute;
  left: 29%;
  bottom: 0;
  width: 0.42rem;
  height: clamp(3rem, 10vw, 4.5rem);
  background: var(--color-secondary-700);
  border-radius: 999px;
}

.about-sys-intro__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-sys-intro__image--small {
  object-position: 55% 50%;
}

.about-sys-intro__image--large {
  object-position: 50% 54%;
}

@media (min-width: 1024px) {
  .about-sys-intro__layout {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
  }
}

@media (max-width: 1023px) {
  .about-sys-intro__copy {
    max-width: 32rem;
    margin-inline: auto;
  }

  .about-sys-intro__title {
    max-width: none;
  }

  .about-sys-intro__media {
    min-height: 21rem;
    width: min(100%, 22rem);
  }

  .about-sys-intro__outline {
    width: 52%;
    height: 28%;
    margin-left: 22%;
  }

  .about-sys-intro__stack--small {
    width: 46%;
    height: 59%;
    bottom: 3.4rem;
  }

  .about-sys-intro__stack--large {
    width: 60%;
    height: 68%;
  }

  .about-sys-intro__accent {
    left: 24%;
    height: 3.6rem;
  }
}

@media (max-width: 639px) {
  .about-sys-intro__layout {
    gap: 2rem;
  }

  .about-sys-intro__media {
    min-height: 19rem;
    width: min(100%, 20rem);
  }

  .about-sys-intro__stack--small {
    bottom: 2.8rem;
  }

  .about-sys-intro__title {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
}
</style>
