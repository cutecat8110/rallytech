<script setup lang="ts">
import { computed } from 'vue'

const messages = useRallyMessages()
const { activeMode } = useHomePageImageMode()

// 每個步驟對應的 Slot State
const stepStates: Array<'01' | '02' | '03' | '04'> = ['01', '02', '03', '04']

const processSteps = computed(() =>
  messages.value.home.process.steps.map((step, index) => {
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
    <div class="page-sys-shell">
      <div class="text-center">
        <p
          v-if="messages.home.process.kicker"
          class="type-sys-kicker text-primary-700 uppercase"
        >
          {{ messages.home.process.kicker }}
        </p>
        <h2 class="type-sys-headline-l mt-4 text-neutral-900">
          {{ messages.home.process.title }}
        </h2>
      </div>

      <div class="home-sys-process__grid">
        <article
          v-for="step in processSteps"
          :key="step.number"
          class="home-sys-process__step"
        >
          <span class="home-sys-process__image-wrapper">
            <img
              :src="step.imageSrc"
              :alt="step.title"
              class="home-sys-process__image"
            />
          </span>
          <p class="home-sys-process__number type-sys-label-m text-primary-700">
            {{ step.number }}
          </p>
          <p class="home-sys-process__title type-sys-title-m text-neutral-900">
            {{ step.title }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-process__grid {
  margin-top: 2.35rem;
  display: grid;
  gap: 1.75rem;
}

.home-sys-process__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.home-sys-process__image-wrapper {
  display: inline-flex;
  width: 4.5rem;
  height: 4.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--color-primary-200);
  background: var(--color-neutral-50);
  box-shadow: var(--shadow-1);
}

.home-sys-process__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-sys-process__number {
  margin-top: 1rem;
}

.home-sys-process__title {
  margin-top: 0.35rem;
}

@media (min-width: 768px) {
  .home-sys-process__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .home-sys-process__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
