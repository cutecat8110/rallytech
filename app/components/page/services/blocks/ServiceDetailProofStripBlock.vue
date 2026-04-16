<script setup lang="ts">
import type { ServiceDetailProofStripBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailProofStripBlockMessages
}>()
</script>

<template>
  <section class="services-sys-detail-proof-strip">
    <h3
      v-if="block.title"
      class="type-sys-headline-s services-sys-detail-proof-strip__title text-neutral-950"
    >
      {{ block.title }}
    </h3>

    <div class="services-sys-detail-proof-strip__grid">
      <article
        v-for="item in block.items"
        :key="item.title"
        class="services-sys-detail-proof-strip__item"
      >
        <h4 class="type-sys-title-l text-neutral-950">
          {{ item.title }}
        </h4>
        <p class="type-sys-body-s mt-3 text-neutral-700">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-proof-strip__title {
  margin-bottom: 1.35rem;
  max-width: 26rem;
}

.services-sys-detail-proof-strip__grid {
  display: grid;
  gap: 1rem 1.4rem;
}

.services-sys-detail-proof-strip__item {
  padding-top: 0.9rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

@media (min-width: 768px) {
  .services-sys-detail-proof-strip__grid {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1.15rem 1.4rem;
  }
}
</style>
