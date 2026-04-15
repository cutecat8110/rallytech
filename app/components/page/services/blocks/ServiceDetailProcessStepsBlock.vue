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
  margin-bottom: 1.35rem;
}

.services-sys-detail-process-steps {
  display: grid;
  gap: 1rem;
}

.services-sys-detail-process-steps__item {
  padding: 1.1rem 1.15rem;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 8%,
      var(--color-border-subtle)
    );
  border-top: 2px solid
    color-mix(in srgb, var(--color-primary-500) 68%, transparent);
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(243 248 248 / 0.82) 100%
    ),
    var(--color-white);
  box-shadow: none;
}

@media (min-width: 768px) {
  .services-sys-detail-process-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
