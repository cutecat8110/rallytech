<script setup lang="ts">
import { computed } from 'vue'

const { resolvedImage: oneTouchBackgroundImage } =
  useHomePageImageAsset('ote-background')

const oneTouchBackgroundStyle = computed(() => ({
  '--home-ote-background-image': `url('${oneTouchBackgroundImage.value.src}')`
}))

const messages = useRallyMessages()
const oneTouchItems = computed(() => messages.value.home.oneTouch.items)
</script>

<template>
  <section
    id="one-touch-experience"
    class="section-sys-shell relative overflow-hidden bg-sys-rally-ote-surface text-white"
    :style="oneTouchBackgroundStyle"
  >
    <div class="page-sys-shell--wide relative z-10">
      <div class="content-sys-rail">
        <div class="home-sys-ote__layout">
          <article class="max-w-lg">
            <h2
              class="home-sys-ote__accent-heading type-sys-headline-l text-white"
            >
              {{ messages.home.oneTouch.title }}
            </h2>
            <UButton
              to="#contact"
              color="primary"
              variant="solid"
              size="lg"
              :label="messages.home.oneTouch.ctaLabel"
              class="mt-7"
            />
          </article>

          <div class="relative xl:ml-auto xl:w-[min(31rem,100%)]">
            <ul class="home-sys-ote__panel">
              <li
                v-for="item in oneTouchItems"
                :key="item"
                class="home-sys-ote__row type-sys-body-s text-white/95"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-sys-rally-ote-surface {
  isolation: isolate;
  background:
    radial-gradient(circle at 74% 18%, rgb(48 187 165 / 0.22), transparent 32%),
    linear-gradient(
      160deg,
      rgb(7 12 16 / 0.24) 0%,
      rgb(7 12 16 / 0.14) 42%,
      rgb(7 12 16 / 0.28) 100%
    ),
    var(--home-ote-background-image) center / cover no-repeat,
    linear-gradient(
      160deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 66%,
      var(--color-secondary-700) 100%
    );
  background-blend-mode: screen, normal, normal, normal;
}

.bg-sys-rally-ote-surface::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(
      90deg,
      rgb(7 12 16 / 0.84) 0%,
      rgb(7 12 16 / 0.72) 30%,
      rgb(7 12 16 / 0.42) 58%,
      rgb(7 12 16 / 0.18) 100%
    ),
    linear-gradient(
      180deg,
      rgb(7 12 16 / 0.32) 0%,
      rgb(7 12 16 / 0.16) 38%,
      rgb(7 12 16 / 0.44) 100%
    );
}

.home-sys-ote__layout {
  display: grid;
  align-items: center;
  gap: 2.25rem;
}

.home-sys-ote__panel {
  display: grid;
  gap: 0.75rem;
}

.home-sys-ote__accent-heading {
  letter-spacing: 0.012em;
  font-weight: 600;
}

.home-sys-ote__row {
  border: 1px solid rgb(255 255 255 / 0.18);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.11);
  padding: 0.95rem 1rem;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04);
  backdrop-filter: blur(10px);
}

@media (min-width: 768px) {
  .home-sys-ote__layout {
    grid-template-columns: minmax(0, 0.68fr) minmax(0, 1.32fr);
    gap: 2.75rem;
  }
}
</style>
