<script setup lang="ts">
import { computed } from 'vue'
import type {
  ProductCatalogItemMessages,
  ProductDetailBlockMessages,
  ProductDetailCapabilityListBlockMessages
} from '~~/i18n/locales/types'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPointList from '~/components/shared/SharedPointList.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'
import SharedTextTileGrid from '~/components/shared/SharedTextTileGrid.vue'
import {
  type ProductContentImageMeta,
  getProductContentImage,
  getProductDetailFeatureImage
} from '~/utils/products'

const props = defineProps<{
  product: ProductCatalogItemMessages
  blocks: ProductDetailBlockMessages[]
}>()

const detailFeatureImage = computed(() =>
  getProductDetailFeatureImage(props.product.slug)
)

function getRenderedBlockEyebrow(block: ProductDetailBlockMessages) {
  if (block.eyebrow === false || block.eyebrow === undefined) {
    return undefined
  }

  const eyebrow = block.eyebrow.trim()
  const title =
    'title' in block && typeof block.title === 'string'
      ? block.title.trim()
      : ''

  return eyebrow && eyebrow !== title ? eyebrow : undefined
}

function getInlineItems(items: string[]) {
  return items.map((label) => ({ label }))
}

function getCapabilityItems(block: ProductDetailCapabilityListBlockMessages) {
  return block.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs ?? (item.description ? [item.description] : [])
  }))
}

function getBlockMediaItems(block: ProductDetailBlockMessages) {
  const imageIds = block.mediaIds ?? (block.mediaId ? [block.mediaId] : [])

  return imageIds
    .map((imageId) => getProductContentImage(props.product.slug, imageId))
    .filter((image): image is ProductContentImageMeta => image !== undefined)
}

function hasBlockMedia(block: ProductDetailBlockMessages) {
  return getBlockMediaItems(block).length > 0
}
</script>

<template>
  <div
    v-if="props.blocks.length"
    v-motion-group="{
      children: '.products-sys-detail-block',
      preset: 'fade-up',
      stagger: 0.06,
      distance: 24,
      start: 'top 82%'
    }"
    class="products-sys-detail-blocks"
  >
    <section
      v-for="(block, index) in props.blocks"
      :key="`${block.type}-${index}`"
      class="products-sys-detail-block"
      :class="[
        `products-sys-detail-block--${block.type}`,
        hasBlockMedia(block)
          ? `products-sys-detail-block--media-${block.mediaPlacement ?? 'after'}`
          : undefined
      ]"
    >
      <div
        v-if="block.type === 'platform-overview'"
        class="products-sys-detail-platform"
      >
        <div
          v-motion-parallax="{
            yPercent: 5,
            scale: 1.025,
            scrub: 0.85,
            desktopOnly: true
          }"
          class="products-sys-detail-platform__media"
        >
          <img
            :src="detailFeatureImage.src"
            :alt="detailFeatureImage.alt"
            class="products-sys-detail-platform__image"
            :style="{
              objectPosition: detailFeatureImage.objectPosition ?? 'center'
            }"
            decoding="async"
          />
        </div>

        <div class="products-sys-detail-platform__body">
          <SharedContentHeader
            :eyebrow="getRenderedBlockEyebrow(block)"
            :title="block.title"
            tone="light"
            scale="block"
            density="compact"
            title-tag="h3"
          />

          <SharedTextStack
            class="products-sys-detail-platform__copy"
            :paragraphs="block.paragraphs"
            tone="light"
            size="sm"
            density="compact"
          />

          <SharedPointList
            v-if="block.highlights.length"
            class="products-sys-detail-platform__highlights"
            :items="getInlineItems(block.highlights)"
            variant="inline"
            tone="light"
            density="compact"
          />
        </div>
      </div>

      <section
        v-else-if="block.type === 'proof-strip'"
        class="products-sys-detail-proof-strip"
        :class="`products-sys-detail-proof-strip--${block.tone ?? 'light'}`"
      >
        <SharedContentHeader
          v-if="block.title"
          class="products-sys-detail-block__title"
          :eyebrow="getRenderedBlockEyebrow(block)"
          :title="block.title"
          :tone="block.tone ?? 'light'"
          scale="block"
          density="compact"
          title-tag="h3"
        />

        <SharedTextTileGrid
          :items="block.items"
          columns="auto"
          :tone="block.tone ?? 'light'"
          density="default"
        />
      </section>

      <section v-else-if="block.type === 'capability-list'">
        <SharedContentHeader
          v-if="block.title"
          class="products-sys-detail-block__title"
          :eyebrow="getRenderedBlockEyebrow(block)"
          :title="block.title"
          tone="light"
          scale="block"
          density="compact"
          title-tag="h3"
        />

        <SharedPointList
          class="products-sys-detail-capabilities"
          :items="getCapabilityItems(block)"
          variant="numbered"
          tone="light"
        />
      </section>

      <section v-else-if="block.type === 'card-grid'">
        <SharedContentHeader
          v-if="block.title"
          class="products-sys-detail-block__title"
          :eyebrow="getRenderedBlockEyebrow(block)"
          :title="block.title"
          tone="light"
          scale="block"
          density="compact"
          title-tag="h3"
        />

        <SharedTextTileGrid
          class="products-sys-detail-card-grid"
          :items="block.items"
          :columns="block.columns ?? 'auto'"
          tone="light"
          density="default"
        />
      </section>

      <section v-else-if="block.type === 'tag-list'">
        <SharedContentHeader
          v-if="block.title"
          class="products-sys-detail-block__title"
          :eyebrow="getRenderedBlockEyebrow(block)"
          :title="block.title"
          tone="light"
          scale="block"
          density="compact"
          title-tag="h3"
        />

        <SharedPointList
          :items="getInlineItems(block.items)"
          variant="tag"
          tone="light"
          density="compact"
        />
      </section>

      <section v-else-if="block.type === 'process-steps'">
        <SharedContentHeader
          v-if="block.title"
          class="products-sys-detail-block__title"
          :eyebrow="getRenderedBlockEyebrow(block)"
          :title="block.title"
          tone="light"
          scale="block"
          density="compact"
          title-tag="h3"
        />

        <div
          v-motion-group="{
            children: '.products-sys-detail-process-steps__item',
            preset: 'fade-up',
            stagger: 0.08,
            distance: 18
          }"
          class="products-sys-detail-process-steps"
        >
          <article
            v-for="(item, stepIndex) in block.items"
            :key="`${item.stepLabel ?? stepIndex}-${item.title}`"
            class="products-sys-detail-process-steps__item"
          >
            <p class="type-sys-kicker text-primary-700 uppercase">
              {{ item.stepLabel ?? String(stepIndex + 1).padStart(2, '0') }}
            </p>
            <SharedContentHeader
              class="products-sys-detail-process-steps__content"
              :title="item.title"
              :description="item.description"
              tone="light"
              scale="item"
              density="compact"
              title-tag="h4"
            />
          </article>
        </div>
      </section>

      <section
        v-else-if="block.type === 'closing-note'"
        class="products-sys-detail-closing"
      >
        <SharedTextStack
          :paragraphs="block.paragraphs"
          tone="light"
          size="md"
          density="compact"
          lead-first
        />
      </section>

      <figure
        v-if="block.type !== 'platform-overview' && hasBlockMedia(block)"
        v-motion-parallax="{
          yPercent: 4,
          scale: 1.015,
          scrub: 0.9,
          desktopOnly: true
        }"
        class="products-sys-detail-block-media"
        :class="{
          'products-sys-detail-block-media--grid':
            getBlockMediaItems(block).length > 1
        }"
      >
        <img
          v-for="image in getBlockMediaItems(block)"
          :key="image.id"
          :src="image.src"
          :alt="image.alt"
          class="products-sys-detail-block-media__image"
          :style="{ objectPosition: image.objectPosition ?? 'center' }"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  </div>
</template>

<style scoped>
.products-sys-detail-blocks {
  display: flex;
  flex-direction: column;
  gap: clamp(4.2rem, 5.4vw, 6rem);
  margin-top: 0;
}

.products-sys-detail-block {
  display: grid;
  gap: 0.85rem;
}

.products-sys-detail-block + .products-sys-detail-block {
  padding-top: clamp(1.25rem, 2.2vw, 1.75rem);
}

.products-sys-detail-block--capability-list,
.products-sys-detail-block--card-grid,
.products-sys-detail-block--tag-list,
.products-sys-detail-block--process-steps,
.products-sys-detail-block--closing-note {
  max-width: 52rem;
}

.products-sys-detail-block--media-after,
.products-sys-detail-block--media-side {
  max-width: 58rem;
}

.products-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

.products-sys-detail-platform {
  display: grid;
  gap: 1.35rem;
}

.products-sys-detail-platform__media {
  position: relative;
  min-height: clamp(15rem, 28vw, 20rem);
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-secondary-100) 78%, white);
}

.products-sys-detail-platform__image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.84) contrast(0.98) brightness(0.98);
}

.products-sys-detail-platform__body {
  display: flex;
  min-width: 0;
  max-width: 34rem;
  flex-direction: column;
  justify-content: center;
}

.products-sys-detail-platform__copy {
  margin-top: 0.7rem;
}

.products-sys-detail-platform__highlights {
  margin-top: 1rem;
}

.products-sys-detail-proof-strip--dark {
  padding: clamp(1.35rem, 2.4vw, 2rem);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(135deg, rgb(10 41 55 / 0.98), rgb(17 74 80 / 0.96)),
    var(--color-secondary-950);
  box-shadow: var(--shadow-lg);
}

.products-sys-detail-block-media {
  margin: clamp(0.35rem, 1vw, 0.8rem) 0 0;
  overflow: hidden;
  background: transparent;
}

.products-sys-detail-block-media__image {
  display: block;
  width: 100%;
  max-height: clamp(11rem, 20vw, 16rem);
  object-fit: contain;
  object-position: center;
}

.products-sys-detail-block-media--grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
  gap: clamp(0.85rem, 1.8vw, 1.2rem);
}

.products-sys-detail-block-media--grid .products-sys-detail-block-media__image {
  aspect-ratio: 16 / 10;
  height: 100%;
  max-height: none;
  object-fit: cover;
  border-radius: var(--radius-md);
}

.products-sys-detail-capabilities {
  max-width: 52rem;
}

.products-sys-detail-process-steps {
  display: grid;
  gap: 1rem 1.3rem;
}

.products-sys-detail-process-steps__item {
  padding-top: 0.95rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

.products-sys-detail-process-steps__content {
  margin-top: 0.75rem;
}

.products-sys-detail-closing {
  padding-top: 0.9rem;
}

@media (min-width: 768px) {
  .products-sys-detail-platform {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: clamp(2.2rem, 3.4vw, 3.2rem);
    align-items: center;
  }

  .products-sys-detail-process-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .products-sys-detail-block--media-side {
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.7fr);
    gap: clamp(1.8rem, 3vw, 2.8rem);
    align-items: center;
  }

  .products-sys-detail-block--media-side > section {
    min-width: 0;
  }

  .products-sys-detail-block--media-side .products-sys-detail-block-media {
    align-self: center;
  }
}

@media (max-width: 767px) {
  .products-sys-detail-blocks {
    gap: 3.1rem;
  }

  .products-sys-detail-block + .products-sys-detail-block {
    padding-top: 1.7rem;
  }

  .products-sys-detail-platform__media {
    min-height: 12rem;
  }
}
</style>
