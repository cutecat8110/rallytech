<script setup lang="ts">
import { computed } from 'vue'

type SectionIntroTone = 'light' | 'dark'
type SectionIntroAlign = 'start' | 'center'
type SectionIntroDensity = 'compact' | 'default' | 'spacious'
type SectionIntroTitleTag = 'h1' | 'h2' | 'h3'

const props = withDefaults(
  defineProps<{
    kicker?: string
    title: string
    description?: string
    tone?: SectionIntroTone
    align?: SectionIntroAlign
    density?: SectionIntroDensity
    titleTag?: SectionIntroTitleTag
  }>(),
  {
    kicker: undefined,
    description: undefined,
    tone: 'light',
    align: 'start',
    density: 'default',
    titleTag: 'h2'
  }
)

const rootClass = computed(() => [
  `shared-section-intro--tone-${props.tone}`,
  `shared-section-intro--align-${props.align}`,
  `shared-section-intro--density-${props.density}`
])
</script>

<template>
  <div class="shared-section-intro" :class="rootClass">
    <p
      v-if="props.kicker"
      class="shared-section-intro__kicker type-sys-kicker uppercase"
    >
      {{ props.kicker }}
    </p>

    <component
      :is="props.titleTag"
      class="shared-section-intro__title type-sys-headline-l"
    >
      {{ props.title }}
    </component>

    <p
      v-if="props.description"
      class="shared-section-intro__description type-sys-body-m"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
.shared-section-intro {
  --section-intro-kicker-color: var(--color-primary-700);
  --section-intro-title-color: var(--color-neutral-900);
  --section-intro-description-color: var(--color-neutral-700);
  --section-intro-title-gap: 0.8rem;
  --section-intro-description-gap: 1rem;

  width: 100%;
  max-width: min(100%, 38rem);
}

.shared-section-intro--tone-dark {
  --section-intro-kicker-color: var(--color-primary-300);
  --section-intro-title-color: var(--color-white);
  --section-intro-description-color: rgb(255 255 255 / 0.78);
}

.shared-section-intro--density-compact {
  --section-intro-title-gap: 0.65rem;
  --section-intro-description-gap: 0.8rem;
}

.shared-section-intro--density-spacious {
  --section-intro-title-gap: 0.95rem;
  --section-intro-description-gap: 1.2rem;
}

.shared-section-intro--align-center {
  margin-inline: auto;
  text-align: center;
}

.shared-section-intro--align-start {
  text-align: left;
}

.shared-section-intro__kicker {
  display: inline-flex;
  align-items: center;
  color: var(--section-intro-kicker-color);
}

.shared-section-intro__title {
  margin: 0;
  color: var(--section-intro-title-color);
  text-wrap: balance;
}

.shared-section-intro__kicker + .shared-section-intro__title {
  margin-top: var(--section-intro-title-gap);
}

.shared-section-intro__description {
  max-width: 34rem;
  margin-top: var(--section-intro-description-gap);
  color: var(--section-intro-description-color);
  text-wrap: pretty;
}

.shared-section-intro--align-center .shared-section-intro__description {
  margin-inline: auto;
}

@media (max-width: 767px) {
  .shared-section-intro {
    max-width: 100%;
  }
}
</style>
