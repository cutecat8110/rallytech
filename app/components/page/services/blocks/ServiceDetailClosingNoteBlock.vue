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
  gap: 0.9rem;
  padding: 1.35rem 1.5rem;
  border-left: 3px solid var(--color-primary-600);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 78%,
    var(--color-white)
  );
}
</style>
