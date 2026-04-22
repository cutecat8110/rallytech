<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceDetailTagListBlockMessages } from '~~/i18n/locales/types'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPointList from '~/components/shared/SharedPointList.vue'

const props = defineProps<{
  block: ServiceDetailTagListBlockMessages
  eyebrow?: string
}>()

const tagItems = computed(() =>
  props.block.items.map((label) => ({
    label
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
      class="services-sys-detail-tag-list"
      :items="tagItems"
      variant="tag"
      tone="light"
    />
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.25rem;
}
</style>
