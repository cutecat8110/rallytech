<script setup lang="ts">
import { computed } from 'vue'

type SharedPointListVariant = 'icon' | 'check' | 'numbered' | 'tag' | 'inline'
type SharedPointListTone = 'light' | 'dark'
type SharedPointListDensity = 'compact' | 'default'

interface SharedPointListItem {
  title?: string
  description?: string
  paragraphs?: string[]
  label?: string
  icon?: string
}

const props = withDefaults(
  defineProps<{
    items: SharedPointListItem[]
    variant?: SharedPointListVariant
    tone?: SharedPointListTone
    density?: SharedPointListDensity
  }>(),
  {
    variant: 'icon',
    tone: 'light',
    density: 'default'
  }
)

const rootClass = computed(() => [
  `shared-point-list--variant-${props.variant}`,
  `shared-point-list--tone-${props.tone}`,
  `shared-point-list--density-${props.density}`
])

const defaultIcon = computed(() =>
  props.variant === 'check' ? 'i-lucide-check' : 'i-lucide-check-circle'
)

const normalizedItems = computed(() =>
  props.items.map((item, index) => ({
    ...item,
    key: item.title ?? item.label ?? `${index}`,
    label: item.label ?? item.title ?? '',
    paragraphs: item.paragraphs ?? (item.description ? [item.description] : [])
  }))
)

function formatNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <ul class="shared-point-list" :class="rootClass">
    <li
      v-for="(item, index) in normalizedItems"
      :key="item.key"
      class="shared-point-list__item"
    >
      <template v-if="props.variant === 'tag'">
        <span class="shared-point-list__tag type-sys-label-s">
          {{ item.label }}
        </span>
      </template>

      <template v-else-if="props.variant === 'inline'">
        <span class="shared-point-list__inline-label type-sys-label-s">
          {{ item.label }}
        </span>
      </template>

      <template v-else>
        <span
          v-if="props.variant === 'icon' || props.variant === 'check'"
          class="shared-point-list__marker"
        >
          <UIcon
            :name="item.icon ?? defaultIcon"
            class="shared-point-list__marker-icon"
          />
        </span>

        <span
          v-else-if="props.variant === 'numbered'"
          class="shared-point-list__number type-sys-label-s"
        >
          {{ formatNumber(index) }}
        </span>

        <div class="shared-point-list__content">
          <p
            v-if="item.title"
            class="shared-point-list__title"
            :class="
              props.variant === 'numbered'
                ? 'type-sys-title-l'
                : 'type-sys-title-m'
            "
          >
            {{ item.title }}
          </p>

          <p
            v-else-if="item.label"
            class="shared-point-list__label type-sys-body-s"
          >
            {{ item.label }}
          </p>

          <div v-if="item.paragraphs.length" class="shared-point-list__copy">
            <p
              v-for="paragraph in item.paragraphs"
              :key="paragraph"
              class="type-sys-body-s"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </template>
    </li>
  </ul>
</template>

<style scoped>
.shared-point-list {
  --shared-point-list-gap: 0.9rem;
  --shared-point-list-title-color: var(--color-neutral-900);
  --shared-point-list-copy-color: var(--color-neutral-700);
  --shared-point-list-label-color: var(--color-neutral-700);
  --shared-point-list-marker-color: var(--color-primary-700);
  --shared-point-list-marker-bg: var(--color-primary-100);
  --shared-point-list-border-color: color-mix(
    in srgb,
    var(--color-secondary-950) 10%,
    var(--color-border-subtle)
  );

  display: grid;
  gap: var(--shared-point-list-gap);
  margin: 0;
  padding: 0;
  list-style: none;
}

.shared-point-list--tone-dark {
  --shared-point-list-title-color: var(--color-white);
  --shared-point-list-copy-color: rgb(255 255 255 / 0.82);
  --shared-point-list-label-color: rgb(255 255 255 / 0.95);
  --shared-point-list-marker-color: rgb(191 243 234 / 0.96);
  --shared-point-list-marker-bg: transparent;
  --shared-point-list-border-color: rgb(255 255 255 / 0.18);
}

.shared-point-list--variant-icon .shared-point-list__item {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.shared-point-list--variant-icon .shared-point-list__marker {
  display: inline-flex;
  width: 2.125rem;
  height: 2.125rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--shared-point-list-marker-bg);
  color: var(--shared-point-list-marker-color);
}

.shared-point-list__marker-icon {
  width: 1rem;
  height: 1rem;
}

.shared-point-list--variant-icon .shared-point-list__marker-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.shared-point-list--variant-check {
  --shared-point-list-gap: 0.85rem;
}

.shared-point-list--variant-check .shared-point-list__item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: 0.7rem;
  padding: 1rem 1.05rem;
  border: 1px solid var(--shared-point-list-border-color);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.12);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04);
  backdrop-filter: blur(10px);
}

.shared-point-list--variant-check .shared-point-list__marker {
  margin-top: 0.18rem;
  color: var(--shared-point-list-marker-color);
}

.shared-point-list--variant-numbered {
  --shared-point-list-gap: 1.2rem;
}

.shared-point-list--variant-numbered .shared-point-list__item {
  display: grid;
  grid-template-columns: 2.35rem minmax(0, 1fr);
  gap: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--shared-point-list-border-color);
}

.shared-point-list--variant-numbered .shared-point-list__item:first-child {
  padding-top: 0;
  border-top: none;
}

.shared-point-list__number {
  color: var(--color-text-tertiary);
  letter-spacing: 0.1em;
}

.shared-point-list--variant-tag {
  --shared-point-list-gap: 0.5rem 0.95rem;

  display: flex;
  flex-wrap: wrap;
}

.shared-point-list--variant-tag .shared-point-list__tag {
  display: inline-flex;
  align-items: center;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid
    color-mix(in srgb, var(--color-primary-200) 58%, var(--color-border-subtle));
  color: var(--color-text-secondary);
}

.shared-point-list--variant-inline {
  --shared-point-list-gap: 0.5rem 0.95rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.shared-point-list--variant-inline .shared-point-list__item {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  color: var(--shared-point-list-label-color);
}

.shared-point-list--variant-inline
  .shared-point-list__item:not(:first-child)::before {
  content: '\00b7';
  margin-right: 0.55rem;
  color: var(--color-text-tertiary);
}

.shared-point-list--tone-dark.shared-point-list--variant-inline
  .shared-point-list__item:not(:first-child)::before {
  color: rgb(255 255 255 / 0.45);
}

.shared-point-list__inline-label {
  min-width: 0;
  color: var(--shared-point-list-label-color);
  overflow-wrap: anywhere;
}

.shared-point-list__content {
  min-width: 0;
}

.shared-point-list__title {
  color: var(--shared-point-list-title-color);
}

.shared-point-list__label {
  min-width: 0;
  color: var(--shared-point-list-label-color);
  line-height: 1.65;
}

.shared-point-list__copy {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.6rem;
  color: var(--shared-point-list-copy-color);
}

.shared-point-list--variant-icon .shared-point-list__copy {
  max-width: 28rem;
  margin-top: 0.25rem;
}

.shared-point-list--variant-check .shared-point-list__copy {
  margin-top: 0;
}

.shared-point-list--density-compact {
  --shared-point-list-gap: 0.72rem;
}

.shared-point-list--density-compact.shared-point-list--variant-check {
  --shared-point-list-gap: 0.65rem;
}

.shared-point-list--density-compact.shared-point-list--variant-numbered {
  --shared-point-list-gap: 1rem;
}

.shared-point-list--density-compact.shared-point-list--variant-tag {
  --shared-point-list-gap: 0.4rem 0.7rem;
}

.shared-point-list--density-compact.shared-point-list--variant-inline {
  --shared-point-list-gap: 0.4rem 0.7rem;
}
</style>
