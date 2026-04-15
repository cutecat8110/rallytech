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

const { locale } = useI18n()

function getBlockEyebrow(blockType: ServiceDetailBlockMessages['type']) {
  const labelMap = new Map<ServiceDetailBlockMessages['type'], string>(
    locale.value === 'zh-tw'
      ? [
          ['media-feature', '服務概觀'],
          ['proof-strip', '重點項目'],
          ['capability-list', '承接內容與做法'],
          ['card-grid', '實務焦點'],
          ['quote', '實務觀點'],
          ['summary', '導入時機'],
          ['tag-list', '相關主題'],
          ['accordion', '規劃補充'],
          ['process-steps', '實施節點'],
          ['closing-note', '時機提醒']
        ]
      : [
          ['media-feature', 'Service Overview'],
          ['proof-strip', 'Key Priorities'],
          ['capability-list', 'Scope and Method'],
          ['card-grid', 'Applied Focus'],
          ['quote', 'Field Perspective'],
          ['summary', 'Timing Considerations'],
          ['tag-list', 'Related Topics'],
          ['accordion', 'Planning Notes'],
          ['process-steps', 'Implementation Flow'],
          ['closing-note', 'Timing Reminder']
        ]
  )

  return labelMap.get(blockType) ?? ''
}
</script>

<template>
  <div v-if="blocks.length" class="services-sys-detail-blocks">
    <section
      v-for="(block, index) in blocks"
      :key="`${block.type}-${index}`"
      class="services-sys-detail-block"
      :class="`services-sys-detail-block--${block.type}`"
    >
      <p class="type-sys-kicker services-sys-detail-block__eyebrow">
        {{ getBlockEyebrow(block.type) }}
      </p>

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
  gap: clamp(3.3rem, 4.5vw, 4.6rem);
  margin-top: clamp(3rem, 4vw, 3.8rem);
}

.services-sys-detail-block {
  display: grid;
  gap: 0.95rem;
}

.services-sys-detail-block + .services-sys-detail-block {
  padding-top: clamp(2.6rem, 3.5vw, 3.2rem);
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 8%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-block__eyebrow {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
