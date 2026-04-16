<script setup lang="ts">
import type { ServiceDetailTagListBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailTagListBlockMessages
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

    <div class="services-sys-detail-tag-list">
      <span
        v-for="item in block.items"
        :key="item"
        class="services-sys-detail-tag-list__item type-sys-label-s"
      >
        {{ item }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.25rem;
}

.services-sys-detail-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.95rem;
}

.services-sys-detail-tag-list__item {
  display: inline-flex;
  align-items: center;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid
    color-mix(in srgb, var(--color-primary-200) 58%, var(--color-border-subtle));
  color: var(--color-text-secondary);
}
</style>
