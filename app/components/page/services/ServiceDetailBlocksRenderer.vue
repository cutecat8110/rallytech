<script setup lang="ts">
import type { ServiceDetailBlockMessages } from '~~/i18n/locales/types'
import ServiceDetailAccordionBlock from '~/components/page/services/blocks/ServiceDetailAccordionBlock.vue'
import ServiceDetailCapabilityListBlock from '~/components/page/services/blocks/ServiceDetailCapabilityListBlock.vue'
import ServiceDetailCardGridBlock from '~/components/page/services/blocks/ServiceDetailCardGridBlock.vue'
import ServiceDetailClosingNoteBlock from '~/components/page/services/blocks/ServiceDetailClosingNoteBlock.vue'
import ServiceDetailMediaFeatureBlock from '~/components/page/services/blocks/ServiceDetailMediaFeatureBlock.vue'
import ServiceDetailProcessStepsBlock from '~/components/page/services/blocks/ServiceDetailProcessStepsBlock.vue'
import ServiceDetailProofStripBlock from '~/components/page/services/blocks/ServiceDetailProofStripBlock.vue'
import ServiceDetailQuoteBlock from '~/components/page/services/blocks/ServiceDetailQuoteBlock.vue'
import ServiceDetailSummaryBlock from '~/components/page/services/blocks/ServiceDetailSummaryBlock.vue'
import ServiceDetailTagListBlock from '~/components/page/services/blocks/ServiceDetailTagListBlock.vue'

defineProps<{
  blocks: ServiceDetailBlockMessages[]
}>()
</script>

<template>
  <div v-if="blocks.length" class="services-sys-detail-blocks">
    <section
      v-for="(block, index) in blocks"
      :key="`${block.type}-${index}`"
      class="services-sys-detail-block"
      :class="`services-sys-detail-block--${block.type}`"
    >
      <ServiceDetailMediaFeatureBlock
        v-if="block.type === 'media-feature'"
        :block="block"
      />

      <ServiceDetailProofStripBlock
        v-else-if="block.type === 'proof-strip'"
        :block="block"
      />

      <ServiceDetailCapabilityListBlock
        v-else-if="block.type === 'capability-list'"
        :block="block"
      />

      <ServiceDetailCardGridBlock
        v-else-if="block.type === 'card-grid'"
        :block="block"
      />

      <ServiceDetailQuoteBlock
        v-else-if="block.type === 'quote'"
        :block="block"
      />

      <ServiceDetailSummaryBlock
        v-else-if="block.type === 'summary'"
        :block="block"
      />

      <ServiceDetailTagListBlock
        v-else-if="block.type === 'tag-list'"
        :block="block"
      />

      <ServiceDetailAccordionBlock
        v-else-if="block.type === 'accordion'"
        :block="block"
      />

      <ServiceDetailProcessStepsBlock
        v-else-if="block.type === 'process-steps'"
        :block="block"
      />

      <ServiceDetailClosingNoteBlock
        v-else-if="block.type === 'closing-note'"
        :block="block"
      />
    </section>
  </div>
</template>

<style scoped>
.services-sys-detail-blocks {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2.75rem;
}
</style>
