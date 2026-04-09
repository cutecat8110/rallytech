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
        <div class="home-sys-ote__stage">
          <div class="home-sys-ote__layout">
            <article class="home-sys-ote__copy">
              <h2
                class="home-sys-ote__accent-heading type-sys-headline-l text-white"
              >
                {{ messages.home.oneTouch.title }}
              </h2>
              <p
                v-if="messages.home.oneTouch.description"
                class="home-sys-ote__description type-sys-body-m"
              >
                {{ messages.home.oneTouch.description }}
              </p>
              <UButton
                to="#contact"
                color="primary"
                variant="solid"
                size="lg"
                :label="messages.home.oneTouch.ctaLabel"
                class="home-sys-ote__action"
              />
            </article>

            <div class="home-sys-ote__list">
              <ul class="home-sys-ote__panel">
                <li
                  v-for="item in oneTouchItems"
                  :key="item"
                  class="home-sys-ote__row type-sys-body-s text-white/95"
                >
                  <UIcon name="i-lucide-check" class="home-sys-ote__row-icon" />
                  <span class="home-sys-ote__row-label">
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>
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
    radial-gradient(circle at 60% 18%, rgb(48 187 165 / 0.18), transparent 32%),
    linear-gradient(
      165deg,
      rgb(7 12 16 / 0.28) 0%,
      rgb(7 12 16 / 0.18) 44%,
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
    radial-gradient(
      circle at 60% 34%,
      rgb(255 255 255 / 0.04),
      transparent 26%
    ),
    linear-gradient(
      90deg,
      rgb(7 12 16 / 0.66) 0%,
      rgb(7 12 16 / 0.42) 20%,
      rgb(7 12 16 / 0.2) 52%,
      rgb(7 12 16 / 0.34) 78%,
      rgb(7 12 16 / 0.52) 100%
    ),
    linear-gradient(
      180deg,
      rgb(7 12 16 / 0.34) 0%,
      rgb(7 12 16 / 0.16) 38%,
      rgb(7 12 16 / 0.44) 100%
    );
}

.home-sys-ote__stage {
  width: 100%;
  max-width: 72rem;
  margin-inline: auto;
}

.home-sys-ote__layout {
  display: grid;
  align-items: center;
  gap: 1.85rem;
}

.home-sys-ote__copy {
  display: flex;
  width: min(100%, 21.75rem);
  flex-direction: column;
  align-items: flex-start;
  margin-inline: auto;
}

.home-sys-ote__description {
  max-width: 20.5rem;
  margin-top: 1rem;
  color: rgb(255 255 255 / 0.8);
}

.home-sys-ote__action {
  margin-top: 1.25rem;
}

.home-sys-ote__list {
  width: min(100%, 33rem);
  margin-inline: auto;
}

.home-sys-ote__panel {
  display: grid;
  gap: 0.85rem;
}

.home-sys-ote__accent-heading {
  letter-spacing: 0.012em;
  font-weight: 600;
}

.home-sys-ote__row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: 0.7rem;
  border: 1px solid rgb(255 255 255 / 0.18);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.12);
  padding: 1rem 1.05rem;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04);
  backdrop-filter: blur(10px);
}

.home-sys-ote__row-icon {
  margin-top: 0.18rem;
  flex-shrink: 0;
  color: rgb(191 243 234 / 0.96);
  font-size: 1rem;
}

.home-sys-ote__row-label {
  min-width: 0;
  line-height: 1.65;
}

@media (min-width: 768px) {
  .home-sys-ote__layout {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(2.75rem, 4.8vw, 4rem);
  }

  .home-sys-ote__copy {
    justify-self: start;
    margin-inline: 0;
  }

  .home-sys-ote__list {
    justify-self: end;
    margin-inline: 0;
  }
}
</style>
