<script setup lang="ts">
import { computed } from 'vue'

const messages = useRallyMessages()
const { activeMode } = useHomePageImageMode()

// 每個步驟對應的 Slot State
const stepStates: Array<'01' | '02' | '03' | '04'> = ['01', '02', '03', '04']

const processSteps = computed(() =>
  messages.value.aboutPage.process.steps.map((step, index) => {
    const state = stepStates[index]
    const entry = getHomePageImageEntry('about-process-step', state)

    // 簡單的影像來源決策邏輯 (配合 Mode 切換)
    const imageSrc =
      activeMode.value === 'nano'
        ? (entry.liveNano?.src ?? entry.latestCandidate?.src ?? entry.stock.src)
        : entry.stock.src

    return {
      ...step,
      imageSrc
    }
  })
)
</script>

<template>
  <section id="process" class="section-sys-shell bg-white">
    <div class="page-sys-shell--wide">
      <div class="about-sys-process__heading text-center">
        <p
          v-if="messages.aboutPage.process.kicker"
          class="about-sys-process__kicker type-sys-kicker text-primary-700 uppercase"
        >
          {{ messages.aboutPage.process.kicker }}
        </p>
        <h2
          class="about-sys-process__title type-sys-headline-l text-neutral-900"
        >
          {{ messages.aboutPage.process.title }}
        </h2>
      </div>

      <div class="about-sys-process__grid">
        <article
          v-for="step in processSteps"
          :key="step.number"
          class="about-sys-process__step"
        >
          <div class="about-sys-process__orbit">
            <span class="about-sys-process__image-wrapper">
              <img
                :src="step.imageSrc"
                :alt="step.title"
                class="about-sys-process__image"
              />
            </span>
            <span class="about-sys-process__number type-sys-label-m">
              {{ step.number }}
            </span>
          </div>
          <p class="about-sys-process__label type-sys-title-m text-neutral-900">
            {{ step.title }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-sys-process__heading {
  max-width: 32rem;
  margin-inline: auto;
}

.about-sys-process__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}

.about-sys-process__kicker::before {
  content: '';
  display: inline-block;
  width: 0.16rem;
  height: 1.55rem;
  background: currentColor;
}

.about-sys-process__title {
  margin-top: 1.35rem;
}

.about-sys-process__grid {
  margin-top: 3rem;
  display: grid;
  gap: 2.25rem 1.5rem;
}

.about-sys-process__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.about-sys-process__orbit {
  position: relative;
  display: grid;
  place-items: center;
  width: min(100%, 13.5rem);
  aspect-ratio: 1;
  border-radius: 999px;
  border: 1px solid rgb(15 23 42 / 0.06);
  background: radial-gradient(
      circle at 50% 38%,
      rgb(255 255 255 / 0.98),
      rgb(250 250 250 / 0.88)
    ),
    linear-gradient(180deg, rgb(248 250 252 / 1), rgb(255 255 255 / 1));
  box-shadow:
    inset 0 0 0 1rem rgb(255 255 255 / 0.72),
    0 1.25rem 2.5rem rgb(15 23 42 / 0.06);
}

.about-sys-process__orbit::before {
  content: '';
  position: absolute;
  inset: 1.1rem;
  border-radius: 999px;
  border: 1px solid rgb(15 23 42 / 0.06);
}

.about-sys-process__image-wrapper {
  display: inline-flex;
  width: 6.5rem;
  height: 6.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.06);
  box-shadow: var(--shadow-1);
}

.about-sys-process__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-sys-process__number {
  position: absolute;
  right: 0.9rem;
  bottom: 0.8rem;
  display: inline-flex;
  width: 3.45rem;
  height: 3.45rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 0.28rem solid white;
  background: color-mix(in srgb, var(--color-secondary-950) 88%, black);
  color: white;
  box-shadow: 0 1rem 1.8rem rgb(15 23 42 / 0.16);
}


.about-sys-process__label {
  max-width: 12ch;
  margin-top: 1.35rem;
  line-height: 1.18;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .about-sys-process__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .about-sys-process__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem 1.25rem;
  }

  .about-sys-process__step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 5.5rem;
    right: -1rem;
    width: 2.3rem;
    height: 0.9rem;
    border-top: 2px solid rgb(148 163 184 / 0.42);
    border-right: 2px solid rgb(148 163 184 / 0.42);
    transform: skewX(-26deg);
    opacity: 0.85;
  }
}

@media (max-width: 767px) {
  .about-sys-process__orbit {
    width: min(100%, 12rem);
  }

  .about-sys-process__icon {
    width: 4rem;
    height: 4rem;
  }

  .about-sys-process__number {
    width: 3.2rem;
    height: 3.2rem;
  }
}
</style>
