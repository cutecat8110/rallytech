<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceDetailMediaFeatureBlockMessages } from '~~/i18n/locales/types'

const props = defineProps<{
  block: ServiceDetailMediaFeatureBlockMessages
}>()

const { resolvedImage, handleImageError } = useServicePageImageAsset(
  props.block.mediaSlot,
  'detail-feature'
)

const blockClassName = computed(
  () => `services-sys-detail-media-feature--${props.block.layout}`
)
</script>

<template>
  <section class="services-sys-detail-media-feature" :class="blockClassName">
    <div class="services-sys-detail-media-feature__media surface-sys-card">
      <img
        :src="resolvedImage.src"
        :alt="block.imageAlt || resolvedImage.alt"
        class="services-sys-detail-media-feature__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        @error="handleImageError"
      />
    </div>

    <div class="services-sys-detail-media-feature__body">
      <h3 class="type-sys-headline-s text-neutral-950">
        {{ block.title }}
      </h3>

      <div class="services-sys-detail-media-feature__copy">
        <p
          v-for="paragraph in block.paragraphs"
          :key="paragraph"
          class="type-sys-body-s text-neutral-700"
        >
          {{ paragraph }}
        </p>
      </div>

      <div
        v-if="block.highlights.length"
        class="services-sys-detail-media-feature__highlights"
      >
        <span
          v-for="highlight in block.highlights"
          :key="highlight"
          class="services-sys-detail-media-feature__highlight type-sys-label-s"
        >
          {{ highlight }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-media-feature {
  display: grid;
  gap: 1.6rem;
}

.services-sys-detail-media-feature__media {
  min-height: clamp(18rem, 34vw, 23rem);
  padding: 0;
  overflow: hidden;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 42px rgb(6 20 27 / 0.08);
}

.services-sys-detail-media-feature__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
}

.services-sys-detail-media-feature__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 35rem;
  padding-block: 0.2rem;
}

.services-sys-detail-media-feature__copy {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 0.85rem;
}

.services-sys-detail-media-feature__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-top: 1.2rem;
}

.services-sys-detail-media-feature__highlight {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.75rem;
  border: 1px solid
    color-mix(in srgb, var(--color-primary-200) 52%, var(--color-border-subtle));
  color: var(--color-primary-800);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 84%,
    var(--color-white)
  );
}

@media (min-width: 768px) {
  .services-sys-detail-media-feature {
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
    gap: clamp(1.9rem, 3vw, 2.6rem);
    align-items: center;
  }

  .services-sys-detail-media-feature--image-left
    .services-sys-detail-media-feature__media {
    order: 0;
  }

  .services-sys-detail-media-feature--image-left
    .services-sys-detail-media-feature__body {
    order: 1;
  }

  .services-sys-detail-media-feature--image-right
    .services-sys-detail-media-feature__media {
    order: 1;
  }

  .services-sys-detail-media-feature--image-right
    .services-sys-detail-media-feature__body {
    order: 0;
  }
}
</style>
