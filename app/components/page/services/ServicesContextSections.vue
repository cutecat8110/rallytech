<script setup lang="ts">
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import SharedTextTileGrid from '~/components/shared/SharedTextTileGrid.vue'

const messages = useRallyMessages()
</script>

<template>
  <section class="services-sys-contexts section-sys-shell">
    <div class="page-sys-shell--wide">
      <div class="services-sys-contexts__stack">
        <div class="services-sys-contexts__block">
          <SharedSectionIntro
            :kicker="messages.servicesPage.contextsSection.kicker"
            :title="messages.servicesPage.contextsSection.title"
            :description="messages.servicesPage.contextsSection.description"
            tone="light"
            align="start"
            density="compact"
          />

          <SharedTextTileGrid
            class="services-sys-contexts__grid"
            :items="messages.servicesPage.contextsSection.items"
            :columns="3"
            tone="light"
            density="compact"
            title-tag="h3"
          />
        </div>

        <div class="services-sys-contexts__block">
          <SharedSectionIntro
            :kicker="messages.servicesPage.technologySection.kicker"
            :title="messages.servicesPage.technologySection.title"
            :description="messages.servicesPage.technologySection.description"
            tone="light"
            align="start"
            density="compact"
          />

          <SharedTextTileGrid
            class="services-sys-contexts__grid"
            :items="messages.servicesPage.technologySection.items"
            :columns="3"
            tone="light"
            density="compact"
            title-tag="h3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-contexts {
  background: color-mix(in srgb, var(--color-secondary-50) 68%, white);
  padding-block: var(--layout-section-padding-default);
}

.services-sys-contexts__stack {
  display: grid;
  gap: clamp(3.2rem, 5vw, 5.2rem);
}

.services-sys-contexts__block {
  display: grid;
  gap: clamp(1.6rem, 3vw, 2.35rem);
}

.services-sys-contexts__grid :deep(.shared-text-tile-grid__item) {
  background: rgb(255 255 255 / 0.78);
  padding: 1rem 1rem 0;
  border-radius: var(--radius-lg);
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 9%,
      var(--color-border-subtle)
    );
}

@media (max-width: 767px) {
  .services-sys-contexts__grid :deep(.shared-text-tile-grid__item) {
    padding: 0.9rem 0.9rem 0;
  }
}
</style>
