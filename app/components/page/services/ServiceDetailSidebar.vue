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
          <span>{{ item.shortLabel }}</span>
        </span>

        <NuxtLink
          v-else
          :to="item.to"
          class="services-sys-detail-sidebar__link"
        >
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
  gap: 0.75rem;
}

.services-sys-detail-sidebar__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-detail-sidebar__nav {
  display: flex;
  gap: 1rem;
  padding-bottom: 0.15rem;
  overflow-x: auto;
  border-bottom: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 8%,
      var(--color-border-subtle)
    );
  scrollbar-width: none;
}

.services-sys-detail-sidebar__nav::-webkit-scrollbar {
  display: none;
}

.services-sys-detail-sidebar__link {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 0.25rem 0 0.8rem;
  color: var(--color-text-secondary);
  background: transparent;
  transition:
    color 180ms ease,
    opacity 180ms ease;
}

.services-sys-detail-sidebar__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 1px;
  background: transparent;
  transition: background-color 180ms ease;
}

.services-sys-detail-sidebar__link:hover {
  color: var(--color-secondary-950);
}

.services-sys-detail-sidebar__link:focus-visible {
  outline: none;
  color: var(--color-secondary-950);
}

.services-sys-detail-sidebar__link--active {
  color: var(--color-secondary-950);
}

.services-sys-detail-sidebar__link:hover::after,
.services-sys-detail-sidebar__link:focus-visible::after,
.services-sys-detail-sidebar__link--active::after {
  background: color-mix(
    in srgb,
    var(--color-primary-500) 58%,
    var(--color-secondary-950)
  );
}

@media (min-width: 1024px) {
  .services-sys-detail-sidebar {
    position: sticky;
    top: calc(var(--layout-header-m) + 1.5rem);
    gap: 1rem;
  }

  .services-sys-detail-sidebar__nav {
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 0 0 1rem;
    border-bottom: none;
    border-left: 1px solid
      color-mix(
        in srgb,
        var(--color-secondary-950) 10%,
        var(--color-border-subtle)
      );
    overflow: visible;
  }

  .services-sys-detail-sidebar__link {
    width: 100%;
    padding: 0.38rem 0 0.38rem 0.25rem;
  }

  .services-sys-detail-sidebar__link::after {
    left: calc(-1rem - 1px);
    right: auto;
    top: 0.15rem;
    bottom: 0.15rem;
    width: 2px;
    height: auto;
  }

  .services-sys-detail-sidebar__link:hover::after,
  .services-sys-detail-sidebar__link:focus-visible::after,
  .services-sys-detail-sidebar__link--active::after {
    background: color-mix(
      in srgb,
      var(--color-primary-500) 60%,
      var(--color-secondary-950)
    );
  }
}
</style>
