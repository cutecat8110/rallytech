<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceDetailCardGridBlockMessages } from '~~/i18n/locales/types'

const props = defineProps<{
  block: ServiceDetailCardGridBlockMessages
}>()

const gridClassName = computed(() =>
  props.block.columns === 3
    ? 'services-sys-detail-card-grid--three'
    : 'services-sys-detail-card-grid--two'
)
</script>

<template>
  <section>
    <h3
      v-if="block.title"
      class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
    >
      {{ block.title }}
    </h3>

    <div class="services-sys-detail-card-grid" :class="gridClassName">
      <article
        v-for="item in block.items"
        :key="item.title"
        class="services-sys-detail-card-grid__item"
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
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

.services-sys-detail-card-grid {
  display: grid;
  gap: 1rem 1.3rem;
}

.services-sys-detail-card-grid__item {
  padding-top: 0.95rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

@media (min-width: 768px) {
  .services-sys-detail-card-grid--two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services-sys-detail-card-grid__item {
    padding-top: 1rem;
  }
}

@media (min-width: 1024px) {
  .services-sys-detail-card-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
