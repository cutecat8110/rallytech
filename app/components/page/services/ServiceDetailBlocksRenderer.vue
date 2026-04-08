<script setup lang="ts">
import type {
  ServiceDetailAccordionBlockMessages,
  ServiceDetailBlockMessages
} from '~~/i18n/locales/types'

defineProps<{
  blocks: ServiceDetailBlockMessages[]
}>()

function getAccordionItems(block: ServiceDetailAccordionBlockMessages) {
  return block.items.map((item) => ({
    label: item.title,
    value: item.title,
    content: item.paragraphs?.join(' ') ?? ''
  }))
}

const accordionUi = {
  item: 'border-b border-default py-0',
  header: 'w-full',
  trigger: [
    'type-sys-title-l',
    'w-full py-4 text-left text-neutral-950',
    'hover:text-primary-700 focus-visible:text-primary-700'
  ].join(' '),
  label: 'flex-1 text-left',
  trailingIcon: 'text-neutral-500',
  content: 'pb-0',
  body: 'type-sys-body-s pb-4 text-neutral-700'
} as const
</script>

<template>
  <div v-if="blocks.length" class="services-sys-detail-blocks">
    <section
      v-for="(block, index) in blocks"
      :key="`${block.type}-${index}`"
      class="services-sys-detail-block"
      :class="`services-sys-detail-block--${block.type}`"
    >
      <template v-if="block.type === 'capability-list'">
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
      </template>

      <template v-else-if="block.type === 'card-grid'">
        <h3
          v-if="block.title"
          class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
        >
          {{ block.title }}
        </h3>

        <div class="services-sys-detail-card-grid">
          <article
            v-for="item in block.items"
            :key="item.title"
            class="services-sys-detail-card-grid__item surface-sys-card"
          >
            <h4 class="type-sys-title-l text-neutral-950">
              {{ item.title }}
            </h4>
            <p class="type-sys-body-s mt-3 text-neutral-700">
              {{ item.description }}
            </p>
          </article>
        </div>
      </template>

      <template v-else-if="block.type === 'quote'">
        <blockquote class="services-sys-detail-quote">
          <p class="type-sys-headline-s text-white">
            {{ block.quote }}
          </p>
          <footer class="type-sys-label-s mt-5 text-white/74">
            {{ block.attribution }}
          </footer>
        </blockquote>
      </template>

      <template v-else-if="block.type === 'summary'">
        <h3
          v-if="block.title"
          class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
        >
          {{ block.title }}
        </h3>

        <div class="services-sys-detail-summary">
          <p
            v-for="paragraph in block.paragraphs"
            :key="paragraph"
            class="type-sys-body-m text-neutral-700"
          >
            {{ paragraph }}
          </p>
        </div>
      </template>

      <template v-else-if="block.type === 'tag-list'">
        <h3
          v-if="block.title"
          class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
        >
          {{ block.title }}
        </h3>

        <div class="services-sys-detail-tag-list">
          <span
            v-for="item in block.items"
            :key="item"
            class="services-sys-detail-tag-list__item type-sys-label-s"
          >
            {{ item }}
          </span>
        </div>
      </template>

      <template v-else-if="block.type === 'accordion'">
        <h3
          v-if="block.title"
          class="type-sys-headline-s services-sys-detail-block__title text-neutral-950"
        >
          {{ block.title }}
        </h3>

        <div class="services-sys-detail-accordion surface-sys-card">
          <UAccordion :items="getAccordionItems(block)" :ui="accordionUi" />
        </div>

        <p v-if="block.note" class="type-sys-body-s mt-3 text-neutral-500">
          {{ block.note }}
        </p>
      </template>

      <template v-else-if="block.type === 'closing-note'">
        <div class="services-sys-detail-closing">
          <p
            v-for="paragraph in block.paragraphs"
            :key="paragraph"
            class="type-sys-headline-s text-neutral-950"
          >
            {{ paragraph }}
          </p>
        </div>
      </template>
    </section>
  </div>
</template>

<style scoped>
.services-sys-detail-blocks {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2.5rem;
}

.services-sys-detail-block__title {
  margin-bottom: 1.25rem;
}

.services-sys-detail-capabilities {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.services-sys-detail-capabilities__item {
  padding-top: 1.25rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-capabilities__item:first-child {
  padding-top: 0;
  border-top: none;
}

.services-sys-detail-capabilities__copy {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.625rem;
}

.services-sys-detail-card-grid {
  display: grid;
  gap: 1rem;
}

.services-sys-detail-card-grid__item {
  padding: 1.2rem;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(239 244 244 / 0.76) 100%
    ),
    var(--color-white);
}

.services-sys-detail-quote {
  padding: 1.5rem;
  border-radius: var(--radius-l);
  background:
    radial-gradient(circle at 86% 12%, rgb(48 187 165 / 0.18), transparent 42%),
    linear-gradient(
      148deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 58%,
      var(--color-secondary-800) 100%
    );
}

.services-sys-detail-summary {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.services-sys-detail-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.services-sys-detail-tag-list__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0.875rem;
  border: 1px solid
    color-mix(in srgb, var(--color-primary-200) 58%, var(--color-border-subtle));
  border-radius: var(--radius-full);
  color: var(--color-primary-800);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 82%,
    var(--color-white)
  );
}

.services-sys-detail-accordion {
  padding-inline: 1rem;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(239 244 244 / 0.68) 100%
    ),
    var(--color-white);
}

.services-sys-detail-closing {
  padding: 1.35rem 1.5rem;
  border-left: 3px solid var(--color-primary-600);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 78%,
    var(--color-white)
  );
}

@media (min-width: 768px) {
  .services-sys-detail-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services-sys-detail-card-grid__item {
    padding: 1.35rem;
  }

  .services-sys-detail-quote {
    padding: 2rem;
  }
}
</style>
