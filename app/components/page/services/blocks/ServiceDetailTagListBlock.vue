<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceDetailTagListBlockMessages } from '~~/i18n/locales/types'
import SharedPointList from '~/components/shared/SharedPointList.vue'

const props = defineProps<{
  block: ServiceDetailTagListBlockMessages
}>()

const tagItems = computed(() =>
  props.block.items.map((label) => ({
    label
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
