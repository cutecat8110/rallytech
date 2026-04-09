<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceCatalogItemMessages } from '~~/i18n/locales/types'
import { enrichServiceCatalog } from '~/utils/services'

const props = defineProps<{
  service: ServiceCatalogItemMessages
  heading: string
}>()

const messages = useRallyMessages()
const localePath = useLocalePath()

const serviceItems = computed(() =>
  enrichServiceCatalog(messages.value.servicesCatalog).map((item) => ({
    ...item,
    isCurrent: item.slug === props.service.slug,
    to: localePath(`/services/${item.slug}`)
  }))
)
</script>

<template>
  <nav class="services-sys-detail-sidebar" :aria-label="heading">
    <p class="type-sys-label-s services-sys-detail-sidebar__label">
      {{ heading }}
    </p>

    <div class="services-sys-detail-sidebar__nav">
      <template v-for="item in serviceItems" :key="item.slug">
        <span
          v-if="item.isCurrent"
          class="services-sys-detail-sidebar__link services-sys-detail-sidebar__link--active"
          aria-current="page"
        >
          <span class="services-sys-detail-sidebar__order type-sys-label-s">
            {{ String(item.order).padStart(2, '0') }}
          </span>
          <UIcon :name="item.icon" class="size-4" />
          <span>{{ item.shortLabel }}</span>
        </span>

        <NuxtLink
          v-else
          :to="item.to"
          class="services-sys-detail-sidebar__link"
        >
          <span class="services-sys-detail-sidebar__order type-sys-label-s">
            {{ String(item.order).padStart(2, '0') }}
          </span>
          <UIcon :name="item.icon" class="size-4" />
          <span>{{ item.shortLabel }}</span>
        </NuxtLink>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.services-sys-detail-sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.services-sys-detail-sidebar__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-detail-sidebar__nav {
  display: flex;
  gap: 0.75rem;
  padding-bottom: 0.2rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.services-sys-detail-sidebar__nav::-webkit-scrollbar {
  display: none;
}

.services-sys-detail-sidebar__link {
  display: inline-grid;
  flex: 0 0 auto;
  grid-template-columns: auto auto minmax(0, 1fr);
  align-items: center;
  gap: 0.65rem;
  min-height: 2.95rem;
  padding: 0.78rem 0.95rem;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 8%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  background: rgb(255 255 255 / 0.94);
  box-shadow: 0 12px 30px rgb(6 20 27 / 0.04);
  transition:
    color 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.services-sys-detail-sidebar__link:hover {
  color: var(--color-primary-700);
  border-color: color-mix(
    in srgb,
    var(--color-primary-200) 60%,
    var(--color-border-subtle)
  );
  background: rgb(255 255 255 / 1);
  box-shadow: 0 16px 34px rgb(6 20 27 / 0.08);
  transform: translateY(-1px);
}

.services-sys-detail-sidebar__link--active {
  color: var(--color-secondary-950);
  border-color: color-mix(
    in srgb,
    var(--color-primary-300) 58%,
    var(--color-border-subtle)
  );
  background: linear-gradient(
    120deg,
    color-mix(in srgb, var(--color-primary-50) 92%, var(--color-white)) 0%,
    color-mix(in srgb, var(--color-secondary-50) 65%, var(--color-white)) 100%
  );
}

.services-sys-detail-sidebar__order {
  color: var(--color-text-tertiary);
  letter-spacing: 0.08em;
}

@media (min-width: 1024px) {
  .services-sys-detail-sidebar {
    position: sticky;
    top: calc(var(--layout-header-m) + 1.5rem);
    gap: 1rem;
  }

  .services-sys-detail-sidebar__nav {
    flex-direction: column;
    gap: 0.55rem;
    overflow: visible;
  }

  .services-sys-detail-sidebar__link {
    width: 100%;
    border-radius: var(--radius-l);
    box-shadow: none;
  }
}
</style>
