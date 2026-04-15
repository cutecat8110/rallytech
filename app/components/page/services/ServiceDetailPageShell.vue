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
          <section class="services-sys-detail-intro surface-sys-card">
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
    color-mix(in srgb, var(--color-primary-50) 26%, var(--color-white)) 0%,
    var(--color-white) 14%,
    color-mix(in srgb, var(--color-secondary-50) 26%, var(--color-white)) 100%
  );
}

.services-sys-detail-shell {
  display: grid;
  gap: 1.6rem;
}

.services-sys-detail-shell__main {
  min-width: 0;
}

.services-sys-detail-intro {
  padding: clamp(1.3rem, 2vw, 1.7rem);
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-xl);
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(242 247 247 / 0.82) 100%
    ),
    var(--color-white);
  box-shadow: 0 18px 40px rgb(6 20 27 / 0.05);
}

.services-sys-detail-intro__band {
  display: grid;
  gap: 1.35rem;
}

.services-sys-detail-focus-strip {
  display: grid;
  gap: 0.95rem;
  align-content: start;
}

.services-sys-detail-focus-strip__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-detail-focus-strip__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.services-sys-detail-focus-strip__chip {
  display: inline-flex;
  align-items: center;
  min-height: 2.3rem;
  padding: 0.52rem 0.78rem;
  border: 1px solid
    color-mix(in srgb, var(--color-primary-300) 36%, var(--color-border-subtle));
  border-radius: var(--radius-full);
  color: var(--color-primary-800);
  background: rgb(255 255 255 / 0.92);
}

.services-sys-detail-intro__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
}

.services-sys-detail-intro__lead {
  color: var(--color-text-primary);
  line-height: 1.7;
  letter-spacing: -0.012em;
  text-wrap: pretty;
}

.services-sys-detail-intro__support {
  color: var(--color-text-secondary);
  line-height: 1.78;
  text-wrap: pretty;
}

@media (max-width: 767px) {
  .services-sys-detail-shell--dense-mobile {
    gap: 1.2rem;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro {
    padding: 1.05rem;
    border-radius: var(--radius-l);
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-intro__band {
    gap: 1rem;
  }

  .services-sys-detail-shell--dense-mobile .services-sys-detail-focus-strip {
    gap: 0.7rem;
  }

  .services-sys-detail-shell--dense-mobile
    .services-sys-detail-focus-strip__list {
    gap: 0.45rem;
  }

  .services-sys-detail-shell--dense-mobile
    .services-sys-detail-focus-strip__chip {
    min-height: 2.05rem;
    padding: 0.42rem 0.62rem;
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
    min-height: 2.7rem;
    padding: 0.68rem 0.84rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-blocks) {
    gap: 2.55rem;
    margin-top: 2.2rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-block + .services-sys-detail-block) {
    padding-top: 2rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-block) {
    gap: 0.7rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-block__eyebrow) {
    font-size: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-block__title) {
    margin-bottom: 0.95rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature) {
    gap: 1rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__media) {
    min-height: 13rem;
    border-radius: var(--radius-l);
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__copy) {
    gap: 0.72rem;
    margin-top: 0.7rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__highlights) {
    gap: 0.45rem;
    margin-top: 0.9rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-media-feature__highlight) {
    padding: 0.46rem 0.62rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-proof-strip__grid) {
    gap: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-proof-strip__item) {
    padding: 0.85rem 0.82rem 0.92rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-capabilities) {
    gap: 1rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-capabilities__item) {
    padding: 0.92rem 0 0 3.15rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-capabilities__item::before) {
    top: 0.86rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-capabilities__copy) {
    gap: 0.62rem;
    margin-top: 0.55rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-card-grid) {
    gap: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-card-grid__item) {
    padding: 0.95rem 0.92rem 1rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-process-steps) {
    gap: 0.72rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-process-steps__item) {
    padding: 0.92rem 0.96rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-tag-list) {
    gap: 0.55rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-tag-list__item) {
    min-height: 2.1rem;
    padding: 0.45rem 0.68rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-accordion) {
    padding-inline: 0.92rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-quote) {
    padding: 1.1rem 1rem 1rem 1.3rem;
  }

  .services-sys-detail-shell--dense-mobile
    :deep(.services-sys-detail-quote::before) {
    top: 0.5rem;
    left: 0.68rem;
    font-size: 2.35rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-summary) {
    padding: 1rem 1.05rem;
  }

  .services-sys-detail-shell--dense-mobile :deep(.services-sys-detail-closing) {
    padding-top: 0.9rem;
  }
}

@media (min-width: 1024px) {
  .services-sys-detail-shell {
    grid-template-columns: minmax(15rem, 17rem) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2rem, 3vw, 3.4rem);
  }

  .services-sys-detail-intro__band {
    grid-template-columns: minmax(14rem, 18rem) minmax(0, 1fr);
    gap: clamp(1.7rem, 2.8vw, 2.5rem);
    align-items: start;
  }
}
</style>
