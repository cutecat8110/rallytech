<script setup lang="ts">
import { computed } from 'vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'

const props = defineProps<{
  source: 'home' | 'about'
}>()

const messages = useRallyMessages()

const processData = computed(() =>
  props.source === 'home'
    ? messages.value.home.process
    : messages.value.aboutPage.process
)

const processIcons = [
  'i-lucide-clipboard-list',
  'i-lucide-route',
  'i-lucide-cpu',
  'i-lucide-badge-check'
]

const processSteps = computed(() =>
  processData.value.steps.map((step, index) => ({
    ...step,
    icon: processIcons[index] ?? 'i-lucide-circle-check'
  }))
)
</script>

<template>
  <section id="process" class="section-sys-shell bg-white">
    <div class="page-sys-shell--wide">
      <SharedSectionIntro
        class="shared-sys-process__heading"
        :kicker="processData.kicker"
        :title="processData.title"
        tone="light"
        align="center"
        density="compact"
      />

      <div class="shared-sys-process__grid">
        <article
          v-for="step in processSteps"
          :key="step.number"
          class="shared-sys-process__step cursor-pointer"
        >
          <div class="shared-sys-process__orbit">
            <span class="shared-sys-process__icon">
              <UIcon :name="step.icon" class="size-8" />
            </span>
            <span class="shared-sys-process__number type-sys-label-m">
              {{ step.number }}
            </span>
          </div>
          <p
            class="shared-sys-process__label type-sys-title-m text-neutral-900"
          >
            {{ step.title }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shared-sys-process__heading {
  max-width: 32rem;
}

.shared-sys-process__grid {
  margin-top: 3rem;
  display: grid;
  gap: 2.25rem 1.5rem;
}

.shared-sys-process__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.shared-sys-process__step:hover {
  transform: translateY(-0.75rem);
}

.shared-sys-process__orbit {
  position: relative;
  display: grid;
  place-items: center;
  width: min(100%, 13.5rem);
  aspect-ratio: 1;
  border-radius: 999px;
  border: 1px solid rgb(15 23 42 / 0.06);
  background:
    radial-gradient(
      circle at 50% 38%,
      rgb(255 255 255 / 0.98),
      rgb(250 250 250 / 0.88)
    ),
    linear-gradient(180deg, rgb(248 250 252 / 1), rgb(255 255 255 / 1));
  box-shadow:
    inset 0 0 0 1rem rgb(255 255 255 / 0.72),
    0 1.25rem 2.5rem rgb(15 23 42 / 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.shared-sys-process__step:hover .shared-sys-process__orbit {
  box-shadow:
    inset 0 0 0 1rem rgb(255 255 255 / 0.9),
    0 1.75rem 3.5rem rgb(15 23 42 / 0.12);
  border-color: rgb(15 23 42 / 0.1);
}

.shared-sys-process__orbit::before {
  content: '';
  position: absolute;
  inset: 1.1rem;
  border-radius: 999px;
  border: 1px solid rgb(15 23 42 / 0.06);
}

.shared-sys-process__icon {
  display: inline-flex;
  width: 4.75rem;
  height: 4.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--color-secondary-700);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.shared-sys-process__step:hover .shared-sys-process__icon {
  color: var(--color-primary-600);
  transform: scale(1.1);
}

.shared-sys-process__number {
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.shared-sys-process__step:hover .shared-sys-process__number {
  background: var(--color-primary-600);
  transform: scale(1.05);
}

.shared-sys-process__label {
  max-width: 12ch;
  margin-top: 1.35rem;
  line-height: 1.18;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .shared-sys-process__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .shared-sys-process__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem 1.25rem;
  }

  .shared-sys-process__step:not(:last-child)::after {
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
  .shared-sys-process__grid {
    margin-top: 2rem;
    gap: 0;
  }

  .shared-sys-process__step {
    display: grid;
    grid-template-columns: 4rem minmax(0, 1fr);
    align-items: center;
    gap: 1rem;
    padding-block: 0.95rem;
    border-top: 1px solid
      color-mix(
        in srgb,
        var(--color-secondary-950) 8%,
        var(--color-border-subtle)
      );
    text-align: left;
  }

  .shared-sys-process__step:first-child {
    border-top: none;
  }

  .shared-sys-process__step:hover {
    transform: none;
  }

  .shared-sys-process__orbit {
    width: 3.6rem;
    box-shadow:
      inset 0 0 0 0.35rem rgb(255 255 255 / 0.74),
      0 0.75rem 1.4rem rgb(15 23 42 / 0.06);
  }

  .shared-sys-process__orbit::before {
    inset: 0.5rem;
  }

  .shared-sys-process__icon {
    width: 2rem;
    height: 2rem;
  }

  .shared-sys-process__number {
    right: -0.4rem;
    bottom: -0.25rem;
    width: 1.7rem;
    height: 1.7rem;
    border-width: 0.16rem;
    box-shadow: 0 0.45rem 0.9rem rgb(15 23 42 / 0.14);
    font-size: 0.62rem;
  }

  .shared-sys-process__label {
    max-width: none;
    margin-top: 0;
  }
}
</style>
