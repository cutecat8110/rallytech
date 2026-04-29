<script setup lang="ts">
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedTextTileGrid from '~/components/shared/SharedTextTileGrid.vue'
import type { ServiceDetailProofStripBlockMessages } from '~~/i18n/locales/types'

const props = defineProps<{
  block: ServiceDetailProofStripBlockMessages
  eyebrow?: string
}>()
</script>

<template>
  <section
    class="services-sys-detail-proof-strip"
    :class="`services-sys-detail-proof-strip--${block.tone ?? 'light'}`"
  >
    <SharedContentHeader
      v-if="block.title"
      class="services-sys-detail-proof-strip__title"
      :eyebrow="eyebrow"
      :title="block.title"
      :tone="props.block.tone ?? 'light'"
      scale="block"
      density="compact"
      title-tag="h3"
    />

    <SharedTextTileGrid
      :items="block.items"
      columns="auto"
      :tone="props.block.tone ?? 'light'"
      density="default"
    />
  </section>
</template>

<style scoped>
.services-sys-detail-proof-strip--dark {
  padding: clamp(1.35rem, 2.4vw, 2rem);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(135deg, rgb(10 41 55 / 0.98), rgb(17 74 80 / 0.96)),
    var(--color-secondary-950);
  box-shadow: var(--shadow-lg);
}

.services-sys-detail-proof-strip__title {
  margin-bottom: 1.35rem;
  max-width: 26rem;
}
</style>
