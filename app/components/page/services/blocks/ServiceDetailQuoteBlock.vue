<script setup lang="ts">
import type { ServiceDetailQuoteBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailQuoteBlockMessages
}>()
</script>

<template>
  <blockquote class="services-sys-detail-quote">
    <p class="type-sys-headline-s text-neutral-950">
      {{ block.quote }}
    </p>
    <footer class="type-sys-label-s services-sys-detail-quote__attribution">
      {{ block.attribution }}
    </footer>
  </blockquote>
</template>

<style scoped>
.services-sys-detail-quote {
  padding-left: 1.35rem;
  border-left: 2px solid
    color-mix(in srgb, var(--color-primary-400) 58%, var(--color-border-subtle));
}

.services-sys-detail-quote p {
  max-width: 40rem;
}

.services-sys-detail-quote__attribution {
  margin-top: 0.9rem;
  color: var(--color-text-tertiary);
}

@media (min-width: 768px) {
  .services-sys-detail-quote {
    padding-left: 1.65rem;
  }
}
</style>
