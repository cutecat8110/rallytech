<script setup lang="ts">
import SharedTextStack from '~/components/shared/SharedTextStack.vue'
import type { ServiceDetailClosingNoteBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailClosingNoteBlockMessages
}>()
</script>

<template>
  <section class="services-sys-detail-closing">
    <SharedTextStack
      :paragraphs="block.paragraphs"
      tone="light"
      size="md"
      density="compact"
      lead-first
    />
  </section>
</template>

<style scoped>
.services-sys-detail-closing {
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
