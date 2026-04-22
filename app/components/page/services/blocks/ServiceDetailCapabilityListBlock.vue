<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceDetailCapabilityListBlockMessages } from '~~/i18n/locales/types'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPointList from '~/components/shared/SharedPointList.vue'

const props = defineProps<{
  block: ServiceDetailCapabilityListBlockMessages
  eyebrow?: string
}>()

const capabilityItems = computed(() =>
  props.block.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs
  }))
)
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

    <SharedPointList
      class="services-sys-detail-capabilities"
      :items="capabilityItems"
      variant="numbered"
      tone="light"
    />
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

@media (min-width: 1024px) {
  .services-sys-detail-capabilities {
    max-width: 52rem;
  }
}
</style>
