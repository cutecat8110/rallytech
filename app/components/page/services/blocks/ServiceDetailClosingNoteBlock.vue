<script setup lang="ts">
import type { ServiceDetailClosingNoteBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailClosingNoteBlockMessages
}>()
</script>

<template>
  <section class="services-sys-detail-closing">
    <p
      v-for="paragraph in block.paragraphs"
      :key="paragraph"
      class="type-sys-headline-s text-neutral-950"
    >
      {{ paragraph }}
    </p>
  </section>
</template>

<style scoped>
.services-sys-detail-closing {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 44rem;
  padding-top: 1.25rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}
</style>
