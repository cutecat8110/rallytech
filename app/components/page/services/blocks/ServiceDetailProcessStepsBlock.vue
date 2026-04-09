<script setup lang="ts">
import type { ServiceDetailProcessStepsBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailProcessStepsBlockMessages
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

    <div class="services-sys-detail-process-steps">
      <article
        v-for="item in block.items"
        :key="`${item.stepLabel}-${item.title}`"
        class="services-sys-detail-process-steps__item"
      >
        <p class="type-sys-kicker text-primary-700 uppercase">
          {{ item.stepLabel }}
        </p>
        <h4 class="type-sys-title-l mt-3 text-neutral-950">
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
.services-sys-detail-block__title {
  margin-bottom: 1.25rem;
}

.services-sys-detail-process-steps {
  display: grid;
  gap: 1rem;
}

.services-sys-detail-process-steps__item {
  padding: 1.1rem 1.15rem;
  border-left: 2px solid var(--color-primary-500);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 76%,
    var(--color-white)
  );
  box-shadow: 0 18px 38px rgb(6 20 27 / 0.04);
}

@media (min-width: 768px) {
  .services-sys-detail-process-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
