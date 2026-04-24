<script setup lang="ts">
import { computed } from 'vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPointList from '~/components/shared/SharedPointList.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'
import type { ServiceDetailMediaFeatureBlockMessages } from '~~/i18n/locales/types'

const props = defineProps<{
  block: ServiceDetailMediaFeatureBlockMessages
  eyebrow?: string
}>()

const { resolvedImage, handleImageError } = useServicePageImageAsset(
  props.block.mediaSlot,
  'detail-feature'
)

const blockClassName = computed(
  () => `services-sys-detail-media-feature--${props.block.layout}`
)

const highlightItems = computed(() =>
  props.block.highlights.map((label) => ({ label }))
)
</script>

<template>
  <section class="services-sys-detail-media-feature" :class="blockClassName">
    <div class="services-sys-detail-media-feature__media">
      <img
        :src="resolvedImage.src"
        :alt="block.imageAlt || resolvedImage.alt"
        class="services-sys-detail-media-feature__image"
        :style="{ objectPosition: resolvedImage.objectPosition }"
        @error="handleImageError"
      />
    </div>

    <div class="services-sys-detail-media-feature__body">
      <SharedContentHeader
        :eyebrow="props.eyebrow"
        :title="block.title"
        tone="light"
        scale="block"
        density="compact"
        title-tag="h3"
      />

      <SharedTextStack
        class="services-sys-detail-media-feature__copy"
        :paragraphs="block.paragraphs"
        tone="light"
        size="sm"
        density="compact"
      />

      <SharedPointList
        v-if="highlightItems.length"
        class="services-sys-detail-media-feature__highlights"
        :items="highlightItems"
        variant="inline"
        tone="light"
        density="compact"
      />
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-media-feature {
  display: grid;
  gap: 1.35rem;
}

.services-sys-detail-media-feature__media {
  position: relative;
  min-height: clamp(18rem, 34vw, 23rem);
  overflow: hidden;
  border-radius: clamp(1.1rem, 2vw, 1.6rem);
  background: color-mix(in srgb, var(--color-secondary-100) 78%, white);
}

.services-sys-detail-media-feature__image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.84) contrast(0.98) brightness(0.98);
}

.services-sys-detail-media-feature__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 33rem;
}

.services-sys-detail-media-feature__copy {
  margin-top: 0.7rem;
}

.services-sys-detail-media-feature__highlights {
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .services-sys-detail-media-feature {
    grid-template-columns: minmax(0, 1.14fr) minmax(0, 0.86fr);
    gap: clamp(2.2rem, 3.4vw, 3.2rem);
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
