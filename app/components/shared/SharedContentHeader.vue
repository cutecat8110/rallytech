<script setup lang="ts">
import { computed } from 'vue'

type SharedContentHeaderTone = 'light' | 'dark'
type SharedContentHeaderAlign = 'start' | 'center'
type SharedContentHeaderScale = 'module' | 'block' | 'item' | 'closing'
type SharedContentHeaderDensity = 'compact' | 'default'
type SharedContentHeaderTitleTag = 'h2' | 'h3' | 'h4'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    description?: string
    tone?: SharedContentHeaderTone
    align?: SharedContentHeaderAlign
    scale?: SharedContentHeaderScale
    density?: SharedContentHeaderDensity
    titleTag?: SharedContentHeaderTitleTag
    titleId?: string
  }>(),
  {
    eyebrow: undefined,
    subtitle: undefined,
    description: undefined,
    tone: 'light',
    align: 'start',
    scale: 'block',
    density: 'default',
    titleTag: 'h3',
    titleId: undefined
  }
)

const rootClass = computed(() => [
  `shared-content-header--tone-${props.tone}`,
  `shared-content-header--align-${props.align}`,
  `shared-content-header--scale-${props.scale}`,
  `shared-content-header--density-${props.density}`
])

const titleClass = computed(() => {
  if (props.scale === 'closing') {
    return 'type-sys-display-m'
  }

  if (props.scale === 'module') {
    return 'type-sys-headline-l'
  }

  if (props.scale === 'item') {
    return 'type-sys-title-l'
  }

  return 'type-sys-headline-s'
})

const descriptionClass = computed(() =>
  props.scale === 'module' || props.scale === 'closing'
    ? 'type-sys-body-m'
    : 'type-sys-body-s'
)
</script>

<template>
  <div class="shared-content-header" :class="rootClass">
    <p
      v-if="props.eyebrow"
      class="shared-content-header__eyebrow type-sys-label-s"
    >
      {{ props.eyebrow }}
    </p>

    <component
      :is="props.titleTag"
      :id="props.titleId"
      class="shared-content-header__title"
      :class="titleClass"
    >
      {{ props.title }}
    </component>

    <p
      v-if="props.subtitle"
      class="shared-content-header__subtitle type-sys-title-m"
    >
      {{ props.subtitle }}
    </p>

    <p
      v-if="props.description"
      class="shared-content-header__description"
      :class="descriptionClass"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
.shared-content-header {
  --shared-content-header-eyebrow-color: var(--color-text-muted);
  --shared-content-header-title-color: var(--color-neutral-950);
  --shared-content-header-subtitle-color: color-mix(
    in srgb,
    var(--color-secondary-950) 56%,
    var(--color-primary-700)
  );
  --shared-content-header-description-color: var(--color-text-secondary);
  --shared-content-header-gap: 0.65rem;
  --shared-content-header-eyebrow-gap: 0.55rem;
  --shared-content-header-subtitle-gap: 0.22rem;
  --shared-content-header-description-gap: 0.68rem;

  display: grid;
  gap: 0;
  min-width: 0;
}

.shared-content-header--tone-dark {
  --shared-content-header-eyebrow-color: rgb(255 255 255 / 0.64);
  --shared-content-header-title-color: var(--color-white);
  --shared-content-header-subtitle-color: rgb(191 243 234 / 0.92);
  --shared-content-header-description-color: rgb(255 255 255 / 0.78);
}

.shared-content-header--density-compact {
  --shared-content-header-gap: 0.5rem;
  --shared-content-header-eyebrow-gap: 0.42rem;
  --shared-content-header-subtitle-gap: 0.18rem;
  --shared-content-header-description-gap: 0.5rem;
}

.shared-content-header--align-center {
  justify-items: center;
  text-align: center;
}

.shared-content-header__eyebrow {
  margin: 0 0 var(--shared-content-header-eyebrow-gap);
  color: var(--shared-content-header-eyebrow-color);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.shared-content-header__title {
  margin: 0;
  color: var(--shared-content-header-title-color);
  text-wrap: balance;
}

.shared-content-header--scale-module .shared-content-header__title {
  line-height: 1.12;
}

.shared-content-header--scale-closing .shared-content-header__title {
  max-width: 12ch;
  font-size: clamp(2rem, 4vw, var(--type-display-l-font-size));
  line-height: 1;
  letter-spacing: var(--type-display-l-letter-spacing);
}

.shared-content-header__subtitle {
  margin: var(--shared-content-header-subtitle-gap) 0 0;
  color: var(--shared-content-header-subtitle-color);
  line-height: 1.2;
}

.shared-content-header__description {
  max-width: 34rem;
  margin: var(--shared-content-header-description-gap) 0 0;
  color: var(--shared-content-header-description-color);
  text-wrap: pretty;
}

.shared-content-header--align-center .shared-content-header__description {
  margin-inline: auto;
}
</style>
