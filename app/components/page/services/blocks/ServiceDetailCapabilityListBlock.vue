<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceDetailCapabilityListBlockMessages } from '~~/i18n/locales/types'
import SharedPointList from '~/components/shared/SharedPointList.vue'

const props = defineProps<{
  block: ServiceDetailCapabilityListBlockMessages
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
    <h3
      v-if="block.title"
      class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
    >
      {{ block.title }}
    </h3>

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
