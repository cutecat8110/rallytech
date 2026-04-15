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
        class="services-sys-detail-card-grid__item surface-sys-card"
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
  gap: 1rem;
}

.services-sys-detail-card-grid__item {
  padding: 1.25rem 1.2rem 1.35rem;
  border-top: 2px solid
    color-mix(in srgb, var(--color-primary-500) 64%, transparent);
  background: rgb(255 255 255 / 0.96);
  box-shadow: none;
}

@media (min-width: 768px) {
  .services-sys-detail-card-grid--two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services-sys-detail-card-grid__item {
    padding: 1.35rem;
  }
}

@media (min-width: 1024px) {
  .services-sys-detail-card-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
