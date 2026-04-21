<script setup lang="ts">
import { computed } from 'vue'
import SharedPointList from '~/components/shared/SharedPointList.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'

const { resolvedImage: oneTouchBackgroundImage } =
  useHomePageImageAsset('ote-background')

const oneTouchBackgroundStyle = computed(() => ({
  '--home-ote-background-image': `url('${oneTouchBackgroundImage.value.src}')`
}))

const messages = useRallyMessages()
const localePath = useLocalePath()
const oneTouchItems = computed(() =>
  messages.value.home.oneTouch.items.map((label) => ({ label }))
)
const oneTouchPath = computed(() => localePath('/one-touch-experience'))
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
              <SharedSectionIntro
                class="home-sys-ote__intro"
                :title="messages.home.oneTouch.title"
                :description="messages.home.oneTouch.description"
                tone="dark"
                align="start"
                density="default"
              />

              <div class="home-sys-ote__action-wrap">
                <UButton
                  :to="oneTouchPath"
                  color="primary"
                  variant="solid"
                  size="lg"
                  :label="messages.home.oneTouch.ctaLabel"
                  class="home-sys-ote__action"
                />
              </div>
            </article>

            <div class="home-sys-ote__list">
              <SharedPointList
                class="home-sys-ote__panel"
                :items="oneTouchItems"
                variant="check"
                tone="dark"
              />
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
  max-width: 64rem;
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
  gap: 1.25rem;
  margin-inline: auto;
}

.home-sys-ote__action-wrap {
  width: 100%;
}

.home-sys-ote__intro {
  max-width: 20.75rem;
}

.home-sys-ote__list {
  width: min(100%, 28.5rem);
  margin-inline: auto;
}

@media (min-width: 768px) {
  .home-sys-ote__layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(2.25rem, 4vw, 2.5rem);
  }

  .home-sys-ote__copy {
    gap: 1.5rem;
    justify-self: start;
    margin-inline: 0;
  }

  .home-sys-ote__list {
    justify-self: start;
    margin-inline: 0;
  }
}
</style>
