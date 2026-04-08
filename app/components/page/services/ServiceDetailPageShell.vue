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
</script>

<template>
  <section class="section-sys-shell bg-white">
    <div class="page-sys-shell">
      <div class="services-sys-detail-shell">
        <div class="services-sys-detail-shell__main">
          <section class="services-sys-detail-intro">
            <p class="type-sys-kicker text-primary-700 uppercase">
              {{ service.shortLabel }}
            </p>
            <h2 class="type-sys-headline-l mt-4 text-neutral-950">
              {{ detailPage.heroTitle }}
            </h2>

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

        <ServiceDetailSidebar :service="service" :detail-page="detailPage" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-shell {
  display: grid;
  gap: 2rem;
}

.services-sys-detail-shell__main {
  min-width: 0;
}

.services-sys-detail-intro {
  padding-bottom: 1.75rem;
  border-bottom: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 12%,
      var(--color-border-subtle)
    );
}

.services-sys-detail-intro__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .services-sys-detail-shell {
    grid-template-columns: minmax(0, 1fr) minmax(17rem, 20rem);
    align-items: start;
    gap: 2.5rem;
  }
}
</style>
