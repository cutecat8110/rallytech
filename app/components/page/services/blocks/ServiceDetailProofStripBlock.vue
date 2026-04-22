<script setup lang="ts">
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedTextTileGrid from '~/components/shared/SharedTextTileGrid.vue'
import type { ServiceDetailProofStripBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailProofStripBlockMessages
  eyebrow?: string
}>()
</script>

<template>
  <section class="services-sys-detail-proof-strip">
    <SharedContentHeader
      v-if="block.title"
      class="services-sys-detail-proof-strip__title"
      :eyebrow="eyebrow"
      :title="block.title"
      tone="light"
      scale="block"
      density="compact"
      title-tag="h3"
    />

    <SharedTextTileGrid
      :items="block.items"
      columns="auto"
      tone="light"
      density="default"
    />
  </section>
</template>

<style scoped>
.services-sys-detail-proof-strip__title {
  margin-bottom: 1.35rem;
  max-width: 26rem;
}
</style>
