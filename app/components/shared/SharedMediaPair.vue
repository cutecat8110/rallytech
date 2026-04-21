<script setup lang="ts">
import { computed } from 'vue'

type SharedMediaPairVariant = 'compact' | 'editorial'

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
    ariaLabel?: string
  }>(),
  {
    variant: 'compact',
    ariaLabel: undefined
  }
)

const emit = defineEmits<{
  backError: [event: Event]
  frontError: [event: Event]
}>()

const rootClass = computed(() => `shared-media-pair--${props.variant}`)

const backImageStyle = computed(() => ({
  objectPosition: props.backImage.objectPosition ?? 'center'
}))

const frontImageStyle = computed(() => ({
  objectPosition: props.frontImage.objectPosition ?? 'center'
}))
</script>

<template>
  <figure class="shared-media-pair" :class="rootClass" :aria-label="ariaLabel">
    <div class="shared-media-pair__clip">
      <div class="shared-media-pair__frame shared-media-pair__frame--back">
        <img
          :src="backImage.src"
          :alt="backImage.alt"
          class="shared-media-pair__image"
          :style="backImageStyle"
          @error="emit('backError', $event)"
        />
      </div>

      <div class="shared-media-pair__frame shared-media-pair__frame--front">
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
  position: relative;
  isolation: isolate;
  width: 100%;
  margin: 0;
}

.shared-media-pair__clip {
  position: absolute;
  inset: 0;
  overflow: visible;
}

.shared-media-pair__frame {
  position: absolute;
  overflow: hidden;
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

.shared-media-pair__decor {
  position: absolute;
  z-index: 3;
}

.shared-media-pair--compact {
  width: min(100%, 34.75rem);
  min-height: clamp(21rem, 25vw, 25.5rem);
}

.shared-media-pair--compact .shared-media-pair__frame {
  border: 1px solid rgb(15 23 42 / 0.08);
  background: rgb(255 255 255 / 0.98);
  box-shadow: 0 2rem 4.5rem -1.75rem rgb(15 23 42 / 0.22);
}

.shared-media-pair--compact .shared-media-pair__frame--back {
  top: clamp(0.4rem, 1vw, 0.8rem);
  right: 0;
  width: 74%;
  height: 62%;
  border-radius: 1.1rem;
}

.shared-media-pair--compact .shared-media-pair__frame--front {
  bottom: clamp(0.5rem, 1vw, 0.75rem);
  left: 0;
  width: 66%;
  height: 56%;
  border-radius: 0.9rem;
}

.shared-media-pair--compact .shared-media-pair__decor {
  right: -0.5rem;
  bottom: -0.25rem;
}

.shared-media-pair--editorial {
  max-width: 38rem;
  aspect-ratio: 4 / 3.05;
}

.shared-media-pair--editorial .shared-media-pair__frame {
  border: 1px solid rgb(0 0 0 / 0.05);
  border-radius: 1.5rem;
  background: var(--color-neutral-100);
  box-shadow: 0 2rem 4rem -1rem rgb(15 23 42 / 0.12);
}

.shared-media-pair--editorial .shared-media-pair__frame--back {
  top: 0;
  right: 0;
  width: 73%;
  height: 80%;
}

.shared-media-pair--editorial .shared-media-pair__frame--front {
  bottom: 0;
  left: 0;
  width: 66%;
  height: 58%;
  box-shadow: 0 2.5rem 5rem -1.25rem rgb(15 23 42 / 0.18);
}

@media (min-width: 1024px) {
  .shared-media-pair--compact {
    width: min(100%, 33.75rem);
  }
}

@media (max-width: 1023px) {
  .shared-media-pair--editorial {
    max-width: 28rem;
    margin-inline: auto;
  }
}

@media (max-width: 767px) {
  .shared-media-pair--compact {
    width: min(100%, 19.75rem);
    min-height: 20.75rem;
  }

  .shared-media-pair--compact .shared-media-pair__frame {
    box-shadow: 0 1.5rem 3rem -1.25rem rgb(15 23 42 / 0.22);
  }

  .shared-media-pair--compact .shared-media-pair__frame--back {
    width: 94%;
    height: 60%;
    border-radius: 1rem;
  }

  .shared-media-pair--compact .shared-media-pair__frame--front {
    bottom: 0;
    left: 0;
    width: 84%;
    height: 48%;
    border-radius: 0.85rem;
  }

  .shared-media-pair--compact .shared-media-pair__decor {
    right: -0.25rem;
    bottom: -0.2rem;
  }
}

@media (max-width: 639px) {
  .shared-media-pair--editorial {
    max-width: 22.5rem;
    aspect-ratio: 4 / 3.15;
  }

  .shared-media-pair--editorial .shared-media-pair__frame {
    border-radius: 1rem;
  }

  .shared-media-pair--editorial .shared-media-pair__frame--back {
    width: 73%;
    height: 76%;
  }

  .shared-media-pair--editorial .shared-media-pair__frame--front {
    width: 72%;
    height: 56%;
  }
}
</style>
