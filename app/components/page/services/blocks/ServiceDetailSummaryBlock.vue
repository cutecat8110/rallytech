<script setup lang="ts">
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'
import type { ServiceDetailSummaryBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailSummaryBlockMessages
  eyebrow?: string
}>()
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

    <SharedTextStack
      class="services-sys-detail-summary"
      :paragraphs="block.paragraphs"
      tone="light"
      size="md"
      density="compact"
    />
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

.services-sys-detail-summary {
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
