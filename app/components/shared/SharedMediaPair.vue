<script setup lang="ts">
import { computed } from 'vue'

type SharedMediaPairVariant = 'compact' | 'editorial'
type SharedMediaPairTone = 'light' | 'dark'

interface SharedMediaPairImage {
  src: string
  alt: string
  objectPosition?: string
}

const props = withDefaults(
  defineProps<{
    backImage: SharedMediaPairImage
    frontImage: SharedMediaPairImage
    variant?: SharedMediaPairVariant
    tone?: SharedMediaPairTone
    ariaLabel?: string
  }>(),
  {
    variant: 'compact',
    tone: 'light',
    ariaLabel: undefined
  }
)

const emit = defineEmits<{
  backError: [event: Event]
  frontError: [event: Event]
}>()

const rootClass = computed(() => [
  `shared-media-pair--${props.variant}`,
  `shared-media-pair--tone-${props.tone}`
])

const backImageStyle = computed(() => ({
  objectPosition: props.backImage.objectPosition ?? 'center'
}))

const frontImageStyle = computed(() => ({
  objectPosition: props.frontImage.objectPosition ?? 'center'
}))
</script>

<template>
  <figure
    v-motion-reveal="{ preset: 'scale-soft', distance: 22, duration: 0.82 }"
    class="shared-media-pair"
    :class="rootClass"
    :aria-label="ariaLabel"
  >
    <div class="shared-media-pair__clip">
      <div
        v-motion-parallax="{ yPercent: -5, scrub: 0.9, desktopOnly: true }"
        class="shared-media-pair__frame shared-media-pair__frame--back"
      >
        <img
          :src="backImage.src"
          :alt="backImage.alt"
          class="shared-media-pair__image"
          :style="backImageStyle"
          @error="emit('backError', $event)"
        />
      </div>

      <div
        v-motion-parallax="{ yPercent: 7, scrub: 0.9, desktopOnly: true }"
        class="shared-media-pair__frame shared-media-pair__frame--front"
      >
        <img
          :src="frontImage.src"
          :alt="frontImage.alt"
          class="shared-media-pair__image"
          :style="frontImageStyle"
          @error="emit('frontError', $event)"
        />
      </div>
    </div>

    <div v-if="$slots.decor" class="shared-media-pair__decor">
      <slot name="decor" />
    </div>
  </figure>
</template>

<style scoped>
.shared-media-pair {
  --shared-media-pair-frame-border: rgb(15 23 42 / 0.08);
  --shared-media-pair-frame-surface: rgb(255 255 255 / 0.98);
  --shared-media-pair-frame-shadow: 0 1.6rem 3.4rem -1.35rem rgb(15 23 42 / 0.2);
  --shared-media-pair-front-shadow: 0 1.9rem 3.8rem -1.3rem rgb(15 23 42 / 0.22);
  --shared-media-pair-corner-line: color-mix(
    in srgb,
    var(--color-primary-500) 48%,
    transparent
  );
  position: relative;
  isolation: isolate;
  width: 100%;
  margin: 0;
}

.shared-media-pair--tone-dark {
  --shared-media-pair-frame-border: rgb(255 255 255 / 0.16);
  --shared-media-pair-frame-surface: rgb(9 18 24 / 0.68);
  --shared-media-pair-frame-shadow: 0 1.5rem 3.5rem -1.4rem rgb(0 0 0 / 0.48);
  --shared-media-pair-front-shadow: 0 2rem 4rem -1.5rem rgb(0 0 0 / 0.56);
  --shared-media-pair-corner-line: color-mix(
    in srgb,
    var(--color-primary-300) 62%,
    transparent
  );
}

.shared-media-pair__clip {
  position: absolute;
  inset: 0;
  overflow: visible;
}

.shared-media-pair__frame {
  position: absolute;
  overflow: hidden;
  border: 1px solid var(--shared-media-pair-frame-border);
  background: var(--shared-media-pair-frame-surface);
  box-shadow: var(--shared-media-pair-frame-shadow);
}

.shared-media-pair__frame::before,
.shared-media-pair__frame::after {
  content: '';
  position: absolute;
  z-index: 2;
  pointer-events: none;
}

.shared-media-pair__frame::before {
  top: -1px;
  left: 0.85rem;
  width: 2.5rem;
  height: 1px;
  background: var(--shared-media-pair-corner-line);
}

.shared-media-pair__frame::after {
  top: 0.85rem;
  left: -1px;
  width: 1px;
  height: 2.5rem;
  background: var(--shared-media-pair-corner-line);
}

.shared-media-pair__frame--back {
  z-index: 1;
}

.shared-media-pair__frame--front {
  z-index: 2;
}

.shared-media-pair__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shared-media-pair--tone-dark .shared-media-pair__image {
  filter: saturate(0.98) contrast(1.02);
}

.shared-media-pair__decor {
  position: absolute;
  z-index: 3;
}

.shared-media-pair--compact {
  width: min(100%, 35rem);
  min-height: clamp(21.5rem, 25vw, 24rem);
}

.shared-media-pair--compact .shared-media-pair__frame--back {
  top: clamp(0.1rem, 0.5vw, 0.35rem);
  right: clamp(0.1rem, 0.65vw, 0.45rem);
  width: 64%;
  height: 60%;
  border-radius: var(--radius-xl);
}

.shared-media-pair--compact .shared-media-pair__frame--front {
  bottom: clamp(1.75rem, 2.2vw, 2.1rem);
  left: 0;
  width: 80%;
  height: 68%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shared-media-pair-front-shadow);
}

.shared-media-pair--compact .shared-media-pair__decor {
  right: 0;
  bottom: -0.15rem;
  transform: scale(0.88);
  transform-origin: right bottom;
}

.shared-media-pair--editorial {
  max-width: 35rem;
  aspect-ratio: 4 / 2.96;
}

.shared-media-pair--editorial .shared-media-pair__frame--back {
  top: 0;
  right: 0;
  width: 72%;
  height: 76%;
  border-radius: var(--radius-xl);
}

.shared-media-pair--editorial .shared-media-pair__frame--front {
  bottom: 0.8rem;
  left: 0;
  width: 67%;
  height: 56%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shared-media-pair-front-shadow);
}

@media (min-width: 1024px) {
  .shared-media-pair--compact {
    width: min(100%, 34.75rem);
  }
}

@media (max-width: 1023px) {
  .shared-media-pair--editorial {
    max-width: 27rem;
    margin-inline: auto;
  }
}

@media (max-width: 767px) {
  .shared-media-pair--compact {
    width: min(100%, 20.75rem);
    min-height: 18.9rem;
  }

  .shared-media-pair--compact .shared-media-pair__frame {
    box-shadow: 0 1.15rem 2.35rem -1rem rgb(15 23 42 / 0.18);
  }

  .shared-media-pair--compact .shared-media-pair__frame--back {
    top: 0.1rem;
    right: 2.6rem;
    width: 62%;
    height: 55%;
    border-radius: var(--radius-xl);
  }

  .shared-media-pair--compact .shared-media-pair__frame--front {
    bottom: 1.25rem;
    left: 0;
    width: 79%;
    height: 61%;
    border-radius: var(--radius-lg);
  }

  .shared-media-pair--compact .shared-media-pair__decor {
    right: 2.55rem;
    bottom: 0.35rem;
    transform: scale(0.68);
    transform-origin: right bottom;
  }
}

@media (max-width: 639px) {
  .shared-media-pair--editorial {
    max-width: 22.25rem;
    aspect-ratio: 4 / 2.85;
  }

  .shared-media-pair--editorial .shared-media-pair__frame {
    border-radius: var(--radius-xl);
  }

  .shared-media-pair--editorial .shared-media-pair__frame--back {
    width: 72%;
    height: 72%;
  }

  .shared-media-pair--editorial .shared-media-pair__frame--front {
    bottom: 0.6rem;
    width: 72%;
    height: 54%;
  }
}
</style>
