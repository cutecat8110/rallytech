<script setup lang="ts">
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'

const messages = useRallyMessages()
</script>

<template>
  <section
    class="section-sys-shell section-sys-shell--compact relative overflow-hidden bg-sys-rally-deep-gradient text-white"
  >
    <BrandBlockMotif
      class="services-sys-overview-hero__motif"
      variant="section"
      tone="dark"
    />

    <div class="page-sys-shell--wide relative z-10">
      <div class="content-sys-rail">
        <div class="services-sys-overview-hero__inner">
          <p class="type-sys-kicker text-primary-200 uppercase">
            {{ messages.servicesPage.hero.kicker }}
          </p>
          <h1 class="type-sys-display-m mt-4 text-white">
            {{ messages.servicesPage.hero.title }}
          </h1>
          <p
            v-if="messages.servicesPage.hero.description"
            class="type-sys-body-m mt-5 max-w-[40rem] text-white/78"
          >
            {{ messages.servicesPage.hero.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-overview-hero__inner {
  position: relative;
  min-height: clamp(16rem, 28vw, 19rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 46rem;
}

.services-sys-overview-hero__motif {
  --motif-position: absolute;

  position: absolute;
  top: clamp(2.25rem, 5vw, 4rem);
  right: clamp(1.25rem, 7vw, 8rem);
  z-index: 1;
}

@media (max-width: 767px) {
  .services-sys-overview-hero__motif {
    display: none;
  }
}
</style>
