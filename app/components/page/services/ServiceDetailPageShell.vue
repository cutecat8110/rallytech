<script setup lang="ts">
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'
import ServiceDetailBlocksRenderer from '~/components/page/services/ServiceDetailBlocksRenderer.vue'
import ServiceDetailSidebar from '~/components/page/services/ServiceDetailSidebar.vue'

defineProps<{
  service: ServiceCatalogItemMessages
  detailPage: ServiceDetailPageMessages
}>()

const messages = useRallyMessages()
</script>

<template>
  <section class="services-sys-detail-stage section-sys-shell">
    <div class="page-sys-shell">
      <div class="services-sys-detail-shell">
        <ServiceDetailSidebar
          :service="service"
          :heading="detailPage.sidebar.servicesHeading"
        />

        <div class="services-sys-detail-shell__main">
          <section class="services-sys-detail-intro">
            <div
              v-if="detailPage.heroFocusItems.length"
              class="services-sys-detail-focus-strip"
            >
              <p
                class="type-sys-label-s services-sys-detail-focus-strip__label"
              >
                {{ messages.servicesPage.detailFocusLabel }}
              </p>

              <div class="services-sys-detail-focus-strip__list">
                <span
                  v-for="item in detailPage.heroFocusItems"
                  :key="item"
                  class="services-sys-detail-focus-strip__chip type-sys-label-s"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <div
              v-if="detailPage.introParagraphs.length"
              class="services-sys-detail-intro__copy"
            >
              <p
                v-for="paragraph in detailPage.introParagraphs"
                :key="paragraph"
                class="type-sys-body-m text-neutral-700"
              >
                {{ paragraph }}
              </p>
            </div>
          </section>

          <ServiceDetailBlocksRenderer :blocks="detailPage.blocks" />
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
  display: grid;
  gap: 1.35rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-focus-strip {
  display: grid;
  gap: 0.85rem;
}

.services-sys-detail-focus-strip__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-detail-focus-strip__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.services-sys-detail-focus-strip__chip {
  display: inline-flex;
  align-items: center;
  min-height: 2.4rem;
  padding: 0.55rem 0.82rem;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-full);
  color: var(--color-secondary-950);
  background: rgb(255 255 255 / 0.9);
}

.services-sys-detail-intro__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 48rem;
}

@media (min-width: 1024px) {
  .services-sys-detail-shell {
    grid-template-columns: minmax(15rem, 17rem) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2rem, 3vw, 3.4rem);
  }
}
</style>
