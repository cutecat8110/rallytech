<script setup lang="ts">
import { computed } from 'vue'

type SharedTextStackTone = 'light' | 'dark'
type SharedTextStackSize = 'sm' | 'md'
type SharedTextStackDensity = 'compact' | 'default'

const props = withDefaults(
  defineProps<{
    paragraphs: string[]
    tone?: SharedTextStackTone
    size?: SharedTextStackSize
    density?: SharedTextStackDensity
    leadFirst?: boolean
  }>(),
  {
    tone: 'light',
    size: 'md',
    density: 'default',
    leadFirst: false
  }
)

const rootClass = computed(() => [
  `shared-text-stack--tone-${props.tone}`,
  `shared-text-stack--size-${props.size}`,
  `shared-text-stack--density-${props.density}`,
  {
    'shared-text-stack--lead-first': props.leadFirst
  }
])

function getParagraphClass(index: number) {
  if (props.leadFirst && index === 0) {
    return 'type-sys-body-m shared-text-stack__paragraph--lead'
  }

  return props.size === 'md' ? 'type-sys-body-m' : 'type-sys-body-s'
}
</script>

<template>
  <div
    v-if="props.paragraphs.length"
    class="shared-text-stack"
    :class="rootClass"
  >
    <p
      v-for="(paragraph, index) in props.paragraphs"
      :key="paragraph"
      class="shared-text-stack__paragraph"
      :class="getParagraphClass(index)"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<style scoped>
.shared-text-stack {
  --shared-text-stack-gap: 1rem;
  --shared-text-stack-color: var(--color-text-secondary);
  --shared-text-stack-lead-color: var(--color-text-primary);

  display: flex;
  flex-direction: column;
  gap: var(--shared-text-stack-gap);
  min-width: 0;
  color: var(--shared-text-stack-color);
}

.shared-text-stack--tone-dark {
  --shared-text-stack-color: rgb(255 255 255 / 0.78);
  --shared-text-stack-lead-color: var(--color-white);
}

.shared-text-stack--density-compact {
  --shared-text-stack-gap: 0.72rem;
}

.shared-text-stack__paragraph {
  margin: 0;
  color: inherit;
  text-wrap: pretty;
}

.shared-text-stack--size-md .shared-text-stack__paragraph {
  line-height: 1.68;
}

.shared-text-stack--size-sm .shared-text-stack__paragraph {
  line-height: 1.64;
}

.shared-text-stack__paragraph--lead {
  color: var(--shared-text-stack-lead-color);
  line-height: 1.74;
  letter-spacing: -0.012em;
}
</style>
