<script setup lang="ts">
import { computed } from 'vue'
import { brandGhostButtonTheme } from '~/utils/button-themes'
import { enrichServiceCatalog } from '~/utils/services'

const messages = useRallyMessages()
const localePath = useLocalePath()

const serviceItems = computed(() =>
  enrichServiceCatalog(messages.value.servicesCatalog).map((item) => ({
    ...item,
    to: localePath(`/services/${item.slug}`)
  }))
)
</script>

<template>
  <section class="section-sys-shell bg-white">
    <div class="page-sys-shell">
      <div class="services-sys-grid">
        <article
          v-for="item in serviceItems"
          :key="item.slug"
          class="services-sys-card surface-sys-card surface-sys-card--interactive"
        >
          <div class="services-sys-card__header">
            <span class="services-sys-card__icon">
              <UIcon :name="item.icon" class="size-5" />
            </span>
            <h2 class="type-sys-title-l text-neutral-950">
              {{ item.shortLabel }}
            </h2>
          </div>

          <p class="type-sys-body-s mt-4 max-w-[18rem] text-neutral-700">
            {{ item.description }}
          </p>

          <UTheme :ui="brandGhostButtonTheme">
            <UButton
              :to="item.to"
              color="primary"
              variant="ghost"
              size="xs"
              :label="messages.servicesPage.cardCtaLabel"
              trailing-icon="i-ic-baseline-arrow-forward"
              class="mt-6 w-fit"
            />
          </UTheme>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-sys-grid {
  display: grid;
  gap: 1rem;
}

.services-sys-card {
  position: relative;
  overflow: hidden;
  min-height: 14rem;
  padding: 1.4rem;
  border-color: color-mix(
    in srgb,
    var(--color-secondary-950) 8%,
    var(--color-border-subtle)
  );
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.96) 0%,
      rgb(239 244 244 / 0.72) 100%
    ),
    var(--color-white);
}

.services-sys-card::before {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--color-primary-600) 0%,
    color-mix(in srgb, var(--color-primary-300) 70%, transparent) 100%
  );
}

.services-sys-card__header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.services-sys-card__icon {
  display: inline-flex;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  color: var(--color-primary-700);
  background: color-mix(
    in srgb,
    var(--color-primary-100) 82%,
    var(--color-white)
  );
}

@media (min-width: 768px) {
  .services-sys-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .services-sys-card {
    padding: 1.6rem;
  }
}

@media (min-width: 1280px) {
  .services-sys-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
