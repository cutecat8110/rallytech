<script setup lang="ts">
import type { ServiceDetailCapabilityListBlockMessages } from '~~/i18n/locales/types'

defineProps<{
  block: ServiceDetailCapabilityListBlockMessages
}>()
</script>

<template>
  <section>
    <h3
      v-if="block.title"
      class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
    >
      {{ block.title }}
    </h3>

    <div class="services-sys-detail-capabilities">
      <article
        v-for="item in block.items"
        :key="item.title"
        class="services-sys-detail-capabilities__item"
      >
        <h4 class="type-sys-title-l text-neutral-950">
          {{ item.title }}
        </h4>
        <div
          v-if="item.paragraphs.length"
          class="services-sys-detail-capabilities__copy"
        >
          <p
            v-for="paragraph in item.paragraphs"
            :key="paragraph"
            class="type-sys-body-s text-neutral-700"
          >
            {{ paragraph }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-block__title {
  margin-bottom: 1.35rem;
}

.services-sys-detail-capabilities {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  counter-reset: capability-item;
}

.services-sys-detail-capabilities__item {
  position: relative;
  padding: 1rem 0 0 3.6rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-capabilities__item::before {
  content: counter(capability-item, decimal-leading-zero);
  position: absolute;
  top: 0.95rem;
  left: 0;
  color: var(--color-text-tertiary);
  font: var(--text-label-s);
  letter-spacing: 0.1em;
  counter-increment: capability-item;
}

.services-sys-detail-capabilities__item:first-child {
  padding-top: 0;
  border-top: none;
}

.services-sys-detail-capabilities__item:first-child::before {
  top: 0;
}

.services-sys-detail-capabilities__copy {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.6rem;
}

@media (min-width: 1024px) {
  .services-sys-detail-capabilities {
    max-width: 52rem;
  }
}
</style>
