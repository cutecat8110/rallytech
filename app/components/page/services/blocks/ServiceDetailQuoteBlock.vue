<script setup lang="ts">
import type { ServiceDetailQuoteBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailQuoteBlockMessages
}>()
</script>

<template>
  <blockquote class="services-sys-detail-quote surface-sys-card">
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
  position: relative;
  padding: 1.5rem 1.45rem 1.35rem 1.8rem;
  border-left: 3px solid var(--color-primary-600);
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 0.98) 0%,
    rgb(240 246 246 / 0.84) 100%
  );
  box-shadow: 0 18px 36px rgb(6 20 27 / 0.05);
}

.services-sys-detail-quote::before {
  content: '“';
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  color: color-mix(in srgb, var(--color-primary-600) 28%, transparent);
  font-size: 3rem;
  line-height: 1;
}

.services-sys-detail-quote p {
  position: relative;
  z-index: 1;
  max-width: 40rem;
}

.services-sys-detail-quote__attribution {
  margin-top: 1rem;
  color: var(--color-text-tertiary);
}

@media (min-width: 768px) {
  .services-sys-detail-quote {
    padding: 1.8rem 1.8rem 1.6rem 2.2rem;
  }
}
</style>
