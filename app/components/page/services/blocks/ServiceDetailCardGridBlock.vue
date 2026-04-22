<script setup lang="ts">
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedTextTileGrid from '~/components/shared/SharedTextTileGrid.vue'
import type { ServiceDetailCardGridBlockMessages } from '~~/i18n/locales/types'

const props = defineProps<{
  block: ServiceDetailCardGridBlockMessages
  eyebrow?: string
}>()
</script>

<template>
  <section>
    <SharedContentHeader
      v-if="block.title"
      class="services-sys-detail-block__title"
      :eyebrow="props.eyebrow"
      :title="block.title"
      tone="light"
      scale="block"
      density="compact"
      title-tag="h3"
    />

    <SharedTextTileGrid
      class="services-sys-detail-card-grid"
      :items="block.items"
      :columns="props.block.columns ?? 'auto'"
      tone="light"
      density="default"
    />
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}
</style>
