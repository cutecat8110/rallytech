<script setup lang="ts">
import { computed } from 'vue'
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'
import ServiceDetailBlocksRenderer from '~/components/page/services/ServiceDetailBlocksRenderer.vue'
import ServiceDetailSidebar from '~/components/page/services/ServiceDetailSidebar.vue'

const props = defineProps<{
  service: ServiceCatalogItemMessages
  detailPage: ServiceDetailPageMessages
}>()

const messages = useRallyMessages()

const isDenseMobileService = computed(() =>
  ['ie-services', 'plc-dcs-programming-and-migration'].includes(
    props.service.slug
  )
)
</script>

<template>
  <section class="services-sys-detail-stage section-sys-shell">
    <div class="page-sys-shell">
      <div
        class="services-sys-detail-shell"
        :class="{
          'services-sys-detail-shell--dense-mobile': isDenseMobileService
        }"
      >
        <ServiceDetailSidebar
          :service="props.service"
          :heading="props.detailPage.sidebar.servicesHeading"
        />

        <div class="services-sys-detail-shell__main">
          <section class="services-sys-detail-intro">
            <div class="services-sys-detail-intro__band">
              <div
                v-if="props.detailPage.heroFocusItems.length"
                class="services-sys-detail-focus-strip"
              >
                <p
                  class="type-sys-kicker services-sys-detail-focus-strip__label"
                >
                  {{ messages.servicesPage.detailFocusLabel }}
                </p>

                <div class="services-sys-detail-focus-strip__list">
                  <span
                    v-for="item in props.detailPage.heroFocusItems"
                    :key="item"
                    class="services-sys-detail-focus-strip__chip type-sys-label-s"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <div
                v-if="props.detailPage.introParagraphs.length"
                class="services-sys-detail-intro__copy"
              >
                <p
                  v-for="(paragraph, index) in props.detailPage.introParagraphs"
                  :key="paragraph"
                  :class="
                    index === 0
                      ? 'type-sys-body-m services-sys-detail-intro__lead'
                      : 'type-sys-body-s services-sys-detail-intro__support'
                  "
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </section>

          <ServiceDetailBlocksRenderer :blocks="props.detailPage.blocks" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-stage {
  background: linear-gradient(
    180deg,
    rgb(249 247 241 / 1) 0%,
    rgb(255 255 255 / 1) 18%,
    rgb(247 245 239 / 1) 100%
  );
}

.services-sys-detail-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.85rem;
}

.services-sys-detail-shell__main {
  min-width: 0;
}

.services-sys-detail-intro {
  padding-block: clamp(1.35rem, 2vw, 1.9rem);
  border-block: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-intro__band {
  display: grid;
  gap: 1.25rem;
}

.services-sys-detail-focus-strip {
  display: grid;
  gap: 0.75rem;
  align-content: start;
}

.services-sys-detail-focus-strip__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-detail-focus-strip__list {
  display: grid;
  gap: 0.45rem;
}

.services-sys-detail-focus-strip__chip {
  display: block;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  color: var(--color-text-secondary);
}

.services-sys-detail-intro__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
}

.services-sys-detail-intro__lead {
  color: var(--color-text-primary);
  line-height: 1.74;
  letter-spacing: -0.012em;
  text-wrap: pretty;
}

.services-sys-detail-intro__support {
  color: var(--color-text-secondary);
  line-height: 1.74;
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-detail-shell--dense-mobile {
    gap: 1.15rem;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro {
    padding-block: 1rem;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro__band {
    gap: 0.9rem;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-focus-strip {
    gap: 0.55rem;
  }

  .services-sys-detail-shell--dense-mobile
    .services-sys-detail-focus-strip__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.8rem;
  }

  .services-sys-detail-shell--dense-mobile
    .services-sys-detail-focus-strip__chip {
    padding: 0;
    border-bottom: none;
  }

  .services-sys-detail-shell--dense-mobile
    .services-sys-detail-focus-strip__chip:not(:first-child)::before {
    content: '\00b7';
    margin-right: 0.45rem;
    color: var(--color-text-tertiary);
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro__copy {
    gap: 0.8rem;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro__lead {
    line-height: 1.62;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro__support {
    line-height: 1.68;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-sidebar__nav) {
    gap: 0.5rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-sidebar__link) {
    padding: 0.2rem 0 0.65rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-blocks) {
    gap: 2.55rem;
    margin-top: 2.2rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-block + .services-sys-detail-block) {
    padding-top: 1.8rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-block) {
    gap: 0.62rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-block__eyebrow) {
    font-size: 0.68rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-block__title) {
    margin-bottom: 0.85rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature) {
    gap: 1rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__media) {
    min-height: 12rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__copy) {
    gap: 0.7rem;
    margin-top: 0.6rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__highlights) {
    gap: 0.4rem 0.85rem;
    margin-top: 0.8rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-proof-strip__grid) {
    gap: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-proof-strip__item) {
    padding-top: 0.75rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.shared-point-list--variant-numbered) {
    gap: 1rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.shared-point-list--variant-numbered .shared-point-list__item) {
    grid-template-columns: 2rem minmax(0, 1fr);
    gap: 1.15rem;
    padding-top: 0.92rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(
      .shared-point-list--variant-numbered .shared-point-list__item:first-child
    ) {
    padding-top: 0;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.shared-point-list--variant-numbered .shared-point-list__copy) {
    gap: 0.62rem;
    margin-top: 0.55rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-card-grid) {
    gap: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-card-grid__item) {
    padding-top: 0.85rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-process-steps) {
    gap: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-process-steps__item) {
    padding-top: 0.82rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.shared-point-list--variant-tag) {
    gap: 0.4rem 0.7rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-quote) {
    padding-left: 1.05rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-summary) {
    padding-top: 0.9rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-closing) {
    padding-top: 0.9rem;
  }
}

@media (min-width: 1024px) {
  .services-sys-detail-shell {
    grid-template-columns: minmax(15rem, 17rem) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2.3rem, 3vw, 3.8rem);
  }

  .services-sys-detail-intro__band {
    grid-template-columns: minmax(12rem, 14rem) minmax(0, 1fr);
    gap: clamp(1.9rem, 3vw, 3rem);
    align-items: start;
  }
}
</style>
