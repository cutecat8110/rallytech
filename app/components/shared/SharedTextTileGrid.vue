<script setup lang="ts">
import { computed } from 'vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'

type SharedTextTileGridColumns = 2 | 3 | 'auto'
type SharedTextTileGridTone = 'light' | 'dark'
type SharedTextTileGridDensity = 'compact' | 'default'
type SharedTextTileGridTitleTag = 'h3' | 'h4'

interface SharedTextTileGridItem {
  title: string
  description?: string
  paragraphs?: string[]
}

const props = withDefaults(
  defineProps<{
    items: SharedTextTileGridItem[]
    columns?: SharedTextTileGridColumns
    tone?: SharedTextTileGridTone
    density?: SharedTextTileGridDensity
    titleTag?: SharedTextTileGridTitleTag
  }>(),
  {
    columns: 'auto',
    tone: 'light',
    density: 'default',
    titleTag: 'h4'
  }
)

const rootClass = computed(() => [
  `shared-text-tile-grid--columns-${props.columns}`,
  `shared-text-tile-grid--tone-${props.tone}`,
  `shared-text-tile-grid--density-${props.density}`
])

const normalizedItems = computed(() =>
  props.items.map((item) => ({
    ...item,
    paragraphs: item.paragraphs ?? (item.description ? [item.description] : [])
  }))
)
</script>

<template>
  <div class="shared-text-tile-grid" :class="rootClass">
    <article
      v-for="item in normalizedItems"
      :key="item.title"
      class="shared-text-tile-grid__item"
    >
      <SharedContentHeader
        :title="item.title"
        :tone="props.tone"
        scale="item"
        density="compact"
        :title-tag="props.titleTag"
      />

      <SharedTextStack
        v-if="item.paragraphs.length"
        class="shared-text-tile-grid__copy"
        :paragraphs="item.paragraphs"
        :tone="props.tone"
        size="sm"
        density="compact"
      />
    </article>
  </div>
</template>

<style scoped>
.shared-text-tile-grid {
  --shared-text-tile-grid-gap: 1rem 1.4rem;
  --shared-text-tile-grid-item-padding: 0.95rem;
  --shared-text-tile-grid-border-color: color-mix(
    in srgb,
    var(--color-secondary-950) 10%,
    var(--color-border-subtle)
  );

  display: grid;
  gap: var(--shared-text-tile-grid-gap);
  min-width: 0;
}

.shared-text-tile-grid--tone-dark {
  --shared-text-tile-grid-border-color: rgb(255 255 255 / 0.18);
}

.shared-text-tile-grid--density-compact {
  --shared-text-tile-grid-gap: 0.8rem 1.15rem;
  --shared-text-tile-grid-item-padding: 0.85rem;
}

.shared-text-tile-grid__item {
  min-width: 0;
  padding-top: var(--shared-text-tile-grid-item-padding);
  border-top: 1px solid var(--shared-text-tile-grid-border-color);
}

.shared-text-tile-grid__copy {
  margin-top: 0.55rem;
}

@media (min-width: 768px) {
  .shared-text-tile-grid--columns-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .shared-text-tile-grid--columns-auto {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
}

@media (min-width: 1024px) {
  .shared-text-tile-grid--columns-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
