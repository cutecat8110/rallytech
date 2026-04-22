<script setup lang="ts">
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import type { ServiceDetailAccordionBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailAccordionBlockMessages
  eyebrow?: string
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
    <SharedContentHeader
      v-if="block.title"
      class="services-sys-detail-block__title"
      :eyebrow="eyebrow"
      :title="block.title"
      tone="light"
      scale="block"
      density="compact"
      title-tag="h3"
    />

    <div class="services-sys-detail-accordion">
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
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}
</style>
