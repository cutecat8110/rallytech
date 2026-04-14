<script setup lang="ts">
import type { ServiceDetailAccordionBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailAccordionBlockMessages
}>()

function getAccordionItems(block: ServiceDetailAccordionBlockMessages) {
  return block.items.map((item) => ({
    label: item.title,
    value: item.title,
    content: item.paragraphs?.join(' ') ?? ''
  }))
}

const accordionUi = {
  item: 'border-b border-default py-0',
  header: 'w-full',
  trigger: [
    'type-sys-title-l',
    'w-full py-4 text-left text-neutral-950',
    'hover:text-primary-700 focus-visible:text-primary-700'
  ].join(' '),
  label: 'flex-1 text-left',
  trailingIcon: 'text-neutral-500',
  content: 'pb-0',
  body: 'type-sys-body-s pb-4 text-neutral-700'
} as const
</script>

<template>
  <section>
    <h3
      v-if="block.title"
      class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
    >
      {{ block.title }}
    </h3>

    <div class="services-sys-detail-accordion surface-sys-card">
      <UAccordion :items="getAccordionItems(block)" :ui="accordionUi" />
    </div>

    <p v-if="block.note" class="type-sys-body-s mt-3 text-neutral-500">
      {{ block.note }}
    </p>
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.25rem;
}

.services-sys-detail-accordion {
  padding-inline: 1.2rem;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(241 246 246 / 0.8) 100%
    ),
    var(--color-white);
  box-shadow: 0 18px 44px rgb(6 20 27 / 0.05);
}
</style>
