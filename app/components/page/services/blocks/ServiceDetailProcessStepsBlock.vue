<script setup lang="ts">
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import type { ServiceDetailProcessStepsBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailProcessStepsBlockMessages
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

    <div class="services-sys-detail-process-steps">
      <article
        v-for="item in block.items"
        :key="`${item.stepLabel}-${item.title}`"
        class="services-sys-detail-process-steps__item"
      >
        <p class="type-sys-kicker text-primary-700 uppercase">
          {{ item.stepLabel }}
        </p>
        <SharedContentHeader
          class="services-sys-detail-process-steps__content"
          :title="item.title"
          :description="item.description"
          tone="light"
          scale="item"
          density="compact"
          title-tag="h4"
        />
      </article>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

.services-sys-detail-process-steps {
  display: grid;
  gap: 1rem 1.3rem;
}

.services-sys-detail-process-steps__item {
  padding-top: 0.95rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-process-steps__content {
  margin-top: 0.75rem;
}

@media (min-width: 768px) {
  .services-sys-detail-process-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
