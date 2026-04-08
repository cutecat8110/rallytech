<script setup lang="ts">
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'

defineProps<{
  service: ServiceCatalogItemMessages
  detailPage: ServiceDetailPageMessages
}>()
</script>

<template>
  <section
    class="section-sys-shell section-sys-shell--hero relative overflow-hidden bg-sys-rally-dark-surface text-white"
  >
    <BrandBlockMotif
      class="services-sys-detail-hero__motif"
      variant="hero"
      tone="dark"
    />

    <div class="page-sys-shell relative z-10">
      <div class="services-sys-detail-hero__inner">
        <p class="type-sys-kicker text-primary-200 uppercase">
          {{ service.shortLabel }}
        </p>
        <h1 class="type-sys-display-m mt-4 max-w-[48rem] text-white">
          {{ detailPage.heroTitle }}
        </h1>
        <p
          v-if="service.description"
          class="type-sys-body-m mt-6 max-w-[38rem] text-white/78"
        >
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-detail-hero__inner {
  position: relative;
  min-height: clamp(18rem, 34vw, 23rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 52rem;
}

.services-sys-detail-hero__motif {
  --motif-position: absolute;

  position: absolute;
  top: clamp(3rem, 8vw, 5.5rem);
  right: clamp(1.25rem, 8vw, 8rem);
  z-index: 1;
}

@media (max-width: 767px) {
  .services-sys-detail-hero__motif {
    display: none;
  }
}
</style>
