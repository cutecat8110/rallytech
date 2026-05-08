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
  display: grid;
  gap: 1rem;
  padding: clamp(1rem, 3.4vw, 1.35rem);
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 8%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-md);
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.9),
      color-mix(in srgb, var(--color-secondary-50) 54%, white)
    ),
    var(--color-white);
}

.services-sys-detail-sidebar__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.services-sys-detail-sidebar__nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
  overflow: visible;
}

.services-sys-detail-sidebar__link {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 3rem;
  align-items: center;
  padding: 0.8rem 0.9rem;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 9%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  background: color-mix(in srgb, var(--color-secondary-50) 52%, white);
  line-height: 1.38;
  overflow-wrap: anywhere;
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease,
    opacity 180ms ease;
}

.services-sys-detail-sidebar__link span {
  min-width: 0;
}

.services-sys-detail-sidebar__link::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  right: 0.85rem;
  bottom: 0.45rem;
  height: 2px;
  border-radius: var(--radius-xs);
  background: transparent;
  transition: background-color 180ms ease;
}

.services-sys-detail-sidebar__link:hover {
  border-color: color-mix(
    in srgb,
    var(--color-primary-500) 26%,
    var(--color-border-subtle)
  );
  color: var(--color-secondary-950);
  background: color-mix(in srgb, var(--color-primary-50) 64%, white);
}

.services-sys-detail-sidebar__link:focus-visible {
  outline: 2px solid
    color-mix(in srgb, var(--color-primary-400) 48%, transparent);
  outline-offset: 2px;
  color: var(--color-secondary-950);
}

.services-sys-detail-sidebar__link--active {
  border-color: color-mix(
    in srgb,
    var(--color-primary-500) 34%,
    var(--color-border-subtle)
  );
  color: var(--color-secondary-950);
  background:
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--color-primary-100) 72%, white),
      color-mix(in srgb, var(--color-primary-50) 62%, white)
    ),
    var(--color-white);
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

@media (min-width: 640px) and (max-width: 1023px) {
  .services-sys-detail-sidebar__nav {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.7rem;
  }
}

@media (min-width: 1024px) {
  .services-sys-detail-sidebar {
    position: sticky;
    top: calc(var(--layout-header-m) + 1.5rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    border: none;
    border-radius: 0;
    background: transparent;
  }

  .services-sys-detail-sidebar__nav {
    display: flex;
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
    min-height: 0;
    padding: 0.38rem 0 0.38rem 0.25rem;
    border: none;
    border-radius: 0;
    background: transparent;
    overflow-wrap: normal;
  }

  .services-sys-detail-sidebar__link::after {
    left: calc(-1rem - 1px);
    right: auto;
    top: 0.15rem;
    bottom: 0.15rem;
    width: 2px;
    height: auto;
    border-radius: var(--radius-xs);
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
