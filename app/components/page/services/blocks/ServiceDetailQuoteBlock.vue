<script setup lang="ts">
import type { ServiceDetailQuoteBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailQuoteBlockMessages
}>()
</script>

<template>
  <blockquote class="services-sys-detail-quote">
    <p class="type-sys-headline-s text-white">
      {{ block.quote }}
    </p>
    <footer class="type-sys-label-s mt-5 text-white/74">
      {{ block.attribution }}
    </footer>
  </blockquote>
</template>

<style scoped>
.services-sys-detail-quote {
  padding: 1.65rem;
  border-radius: var(--radius-l);
  background:
    radial-gradient(circle at 86% 12%, rgb(48 187 165 / 0.18), transparent 42%),
    linear-gradient(
      148deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 58%,
      var(--color-secondary-800) 100%
    );
}

@media (min-width: 768px) {
  .services-sys-detail-quote {
    padding: 2.2rem;
  }
}
</style>
