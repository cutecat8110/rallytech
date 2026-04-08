<script setup lang="ts">
import { computed } from 'vue'
import type {
  ServiceCatalogItemMessages,
  ServiceDetailPageMessages
} from '~~/i18n/locales/types'
import { enrichServiceCatalog } from '~/utils/services'

const props = defineProps<{
  service: ServiceCatalogItemMessages
  detailPage: ServiceDetailPageMessages
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

const contactPath = computed(() => `${localePath('/')}#contact`)
</script>

<template>
  <aside class="services-sys-detail-sidebar">
    <section class="services-sys-detail-sidebar__panel surface-sys-card">
      <p class="type-sys-label-s text-neutral-500">
        {{ detailPage.sidebar.servicesHeading }}
      </p>

      <nav class="services-sys-detail-sidebar__nav" aria-label="Service links">
        <template v-for="item in serviceItems" :key="item.slug">
          <span
            v-if="item.isCurrent"
            class="services-sys-detail-sidebar__link services-sys-detail-sidebar__link--active"
            aria-current="page"
          >
            <UIcon :name="item.icon" class="size-4" />
            <span>{{ item.shortLabel }}</span>
          </span>

          <NuxtLink
            v-else
            :to="item.to"
            class="services-sys-detail-sidebar__link"
          >
            <UIcon :name="item.icon" class="size-4" />
            <span>{{ item.shortLabel }}</span>
          </NuxtLink>
        </template>
      </nav>
    </section>

    <section class="services-sys-detail-sidebar__panel surface-sys-card">
      <p class="type-sys-label-s text-neutral-500">
        {{ detailPage.sidebar.contactHeading }}
      </p>

      <div class="services-sys-detail-sidebar__contact">
        <a
          :href="messages.company.phoneHref"
          class="type-sys-title-l text-neutral-950 transition-colors hover:text-primary-700"
        >
          {{ messages.company.phoneDisplay }}
        </a>
        <a
          :href="messages.company.emailHref"
          class="type-sys-body-s text-neutral-700 transition-colors hover:text-primary-700"
        >
          {{ messages.company.email }}
        </a>
      </div>

      <UButton
        :to="contactPath"
        color="primary"
        variant="solid"
        size="sm"
        :label="messages.nav.contactCta"
        class="mt-5 w-full justify-center"
      />
    </section>
  </aside>
</template>

<style scoped>
.services-sys-detail-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.services-sys-detail-sidebar__panel {
  padding: 1.25rem;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(239 244 244 / 0.86) 100%
    ),
    var(--color-white);
}

.services-sys-detail-sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 1rem;
}

.services-sys-detail-sidebar__link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 0.875rem;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  background: transparent;
  transition:
    color 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;
}

.services-sys-detail-sidebar__link:hover {
  color: var(--color-primary-700);
  border-color: color-mix(
    in srgb,
    var(--color-primary-200) 60%,
    var(--color-border-subtle)
  );
  background: color-mix(
    in srgb,
    var(--color-primary-50) 70%,
    var(--color-white)
  );
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

.services-sys-detail-sidebar__contact {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .services-sys-detail-sidebar {
    position: sticky;
    top: calc(var(--layout-header-m) + 1.5rem);
  }
}
</style>
