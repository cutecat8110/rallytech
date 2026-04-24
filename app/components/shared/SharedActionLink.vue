<script setup lang="ts">
import { computed } from 'vue'

type SharedActionLinkTone = 'light' | 'dark'
type SharedActionLinkSize = 'sm' | 'md'

const props = withDefaults(
  defineProps<{
    label: string
    tone?: SharedActionLinkTone
    size?: SharedActionLinkSize
    icon?: string
  }>(),
  {
    tone: 'light',
    size: 'sm',
    icon: 'i-ic-baseline-arrow-forward'
  }
)

const rootClass = computed(() => [
  `shared-action-link--tone-${props.tone}`,
  `shared-action-link--size-${props.size}`
])

const textClass = computed(() =>
  props.size === 'md' ? 'type-sys-label-m' : 'type-sys-label-s'
)
</script>

<template>
  <span class="shared-action-link" :class="[rootClass, textClass]">
    <span>{{ props.label }}</span>
    <UIcon :name="props.icon" class="shared-action-link__icon" />
  </span>
</template>

<style scoped>
.shared-action-link {
  --shared-action-link-color: var(--color-text-secondary);
  --shared-action-link-gap: 0.35rem;
  --shared-action-link-icon-size: 1rem;

  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: var(--shared-action-link-gap);
  color: var(--shared-action-link-color);
  transition: color 180ms ease;
}

.shared-action-link--tone-dark {
  --shared-action-link-color: rgb(191 243 234 / 0.92);
}

.shared-action-link--size-sm {
  --shared-action-link-icon-size: 1rem;
}

.shared-action-link--size-md {
  --shared-action-link-icon-size: 1.125rem;
}

.shared-action-link__icon {
  width: var(--shared-action-link-icon-size);
  height: var(--shared-action-link-icon-size);
  flex-shrink: 0;
  transition: color 180ms ease;
}
</style>
