<script setup lang="ts">
import { computed } from 'vue'
import type { ProductCatalogItemMessages } from '~~/i18n/locales/types'
import { enrichProductCatalog } from '~/utils/products'

const props = defineProps<{
  product: ProductCatalogItemMessages
  heading: string
}>()

const messages = useRallyMessages()
const localePath = useLocalePath()

const productItems = computed(() =>
  enrichProductCatalog(messages.value.productsCatalog).map((item) => ({
    ...item,
    isCurrent: item.slug === props.product.slug,
    to: localePath(`/products/${item.slug}`)
  }))
)
</script>

<template>
  <nav class="products-sys-detail-sidebar" :aria-label="heading">
    <p class="type-sys-label-s products-sys-detail-sidebar__label">
      {{ heading }}
    </p>

    <div class="products-sys-detail-sidebar__nav">
      <template v-for="item in productItems" :key="item.slug">
        <span
          v-if="item.isCurrent"
          class="products-sys-detail-sidebar__link products-sys-detail-sidebar__link--active"
          aria-current="page"
        >
          <span class="products-sys-detail-sidebar__icon">
            <UIcon :name="item.icon" class="size-4" />
          </span>
          <span>{{ item.shortLabel }}</span>
        </span>

        <NuxtLink
          v-else
          :to="item.to"
          class="products-sys-detail-sidebar__link"
        >
          <span class="products-sys-detail-sidebar__icon">
            <UIcon :name="item.icon" class="size-4" />
          </span>
          <span>{{ item.shortLabel }}</span>
        </NuxtLink>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.products-sys-detail-sidebar {
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

.products-sys-detail-sidebar__label {
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.products-sys-detail-sidebar__nav {
  display: grid;
  gap: 0.65rem;
}

.products-sys-detail-sidebar__link {
  position: relative;
  display: grid;
  min-width: 0;
  min-height: 3rem;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.65rem;
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
    color 180ms ease;
}

.products-sys-detail-sidebar__icon {
  display: inline-flex;
  width: 1.85rem;
  height: 1.85rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(10 18 22 / 0.08);
  border-radius: var(--radius-md);
  color: var(--color-primary-700);
  background: rgb(255 255 255 / 0.86);
}

.products-sys-detail-sidebar__link:hover {
  border-color: color-mix(
    in srgb,
    var(--color-primary-500) 26%,
    var(--color-border-subtle)
  );
  color: var(--color-secondary-950);
  background: color-mix(in srgb, var(--color-primary-50) 64%, white);
}

.products-sys-detail-sidebar__link:focus-visible {
  outline: 2px solid
    color-mix(in srgb, var(--color-primary-400) 48%, transparent);
  outline-offset: 2px;
  color: var(--color-secondary-950);
}

.products-sys-detail-sidebar__link--active {
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

@media (min-width: 640px) and (max-width: 1023px) {
  .products-sys-detail-sidebar__nav {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.7rem;
  }
}

@media (min-width: 1024px) {
  .products-sys-detail-sidebar {
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

  .products-sys-detail-sidebar__nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 0 0 1rem;
    border-left: 1px solid
      color-mix(
        in srgb,
        var(--color-secondary-950) 10%,
        var(--color-border-subtle)
      );
  }

  .products-sys-detail-sidebar__link {
    width: 100%;
    min-height: 0;
    padding: 0.42rem 0 0.42rem 0.25rem;
    border: none;
    border-radius: 0;
    background: transparent;
    overflow-wrap: normal;
  }

  .products-sys-detail-sidebar__icon {
    display: none;
  }

  .products-sys-detail-sidebar__link::after {
    content: '';
    position: absolute;
    left: calc(-1rem - 1px);
    top: 0.15rem;
    bottom: 0.15rem;
    width: 2px;
    border-radius: var(--radius-full);
    background: transparent;
    transition: background-color 180ms ease;
  }

  .products-sys-detail-sidebar__link:hover::after,
  .products-sys-detail-sidebar__link:focus-visible::after,
  .products-sys-detail-sidebar__link--active::after {
    background: color-mix(
      in srgb,
      var(--color-primary-500) 60%,
      var(--color-secondary-950)
    );
  }
}
</style>
