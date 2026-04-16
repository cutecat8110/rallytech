<script setup lang="ts">
import type { ServiceDetailSummaryBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailSummaryBlockMessages
}>()
</script>

<template>
  <section>
    <h3
      v-if="block.title"
      class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
    >
      {{ block.title }}
    </h3>

    <div class="services-sys-detail-summary">
      <p
        v-for="paragraph in block.paragraphs"
        :key="paragraph"
        class="type-sys-body-m text-neutral-700"
      >
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

.services-sys-detail-summary {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  max-width: 48rem;
  padding-top: 1rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}
</style>
