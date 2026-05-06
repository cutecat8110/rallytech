<script setup lang="ts">
import { computed } from 'vue'
import SharedActionLink from '~/components/shared/SharedActionLink.vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import { enrichProductCatalog } from '~/utils/products'

const messages = useRallyMessages()
const localePath = useLocalePath()

const productItems = computed(() =>
  enrichProductCatalog(messages.value.productsCatalog).map((item) => ({
    ...item,
    to: localePath(`/products/${item.slug}`)
  }))
)
</script>

<template>
  <section class="products-sys-overview-grid section-sys-shell">
    <div class="page-sys-shell--wide">
      <div class="products-sys-overview-grid__rail">
        <SharedSectionIntro
          class="products-sys-overview-grid__intro"
          :kicker="messages.productsPage.intro.kicker"
          :title="messages.productsPage.intro.title"
          :description="messages.productsPage.intro.description"
          tone="light"
          align="start"
          density="compact"
        />

        <div class="products-sys-grid">
          <NuxtLink
            v-for="item in productItems"
            :key="item.slug"
            :to="item.to"
            class="products-sys-listing"
          >
            <div class="products-sys-listing__badge-frame">
              <img
                :src="item.badge.src"
                :alt="item.badge.alt"
                class="products-sys-listing__badge"
                decoding="async"
              />
            </div>

            <div class="products-sys-listing__body">
              <SharedContentHeader
                class="products-sys-listing__content-header"
                :eyebrow="item.categoryLabel"
                :title="item.shortLabel"
                :description="item.description"
                tone="light"
                scale="item"
                density="compact"
                title-tag="h2"
              />

              <SharedActionLink
                class="products-sys-listing__cta"
                :label="messages.productsPage.cardCtaLabel"
                tone="light"
                size="sm"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-sys-overview-grid {
  padding-block: var(--layout-section-padding-default);
  background: var(--color-white);
}

.products-sys-overview-grid__rail {
  width: 100%;
  max-width: 82rem;
  margin-inline: auto;
}

.products-sys-overview-grid__intro {
  max-width: 43rem;
  margin-bottom: clamp(2.25rem, 4vw, 3.4rem);
}

.products-sys-grid {
  display: grid;
  gap: clamp(1.35rem, 2.7vw, 2rem);
}

.products-sys-listing {
  display: grid;
  gap: 1.1rem;
  align-content: start;
  padding: clamp(1rem, 2vw, 1.25rem);
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  border-radius: var(--radius-lg);
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.94),
      color-mix(in srgb, var(--color-secondary-50) 52%, white)
    ),
    var(--color-white);
  text-decoration: none;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.products-sys-listing__badge-frame {
  display: flex;
  min-height: 10.25rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1.125rem;
  border: 1px solid rgb(10 18 22 / 0.08);
  border-radius: var(--radius-md);
  background:
    radial-gradient(circle at 78% 18%, rgb(48 187 165 / 0.12), transparent 34%),
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-secondary-50) 72%, white),
      white
    );
}

.products-sys-listing__badge {
  display: block;
  width: min(17rem, 82%);
  max-height: 6.25rem;
  height: auto;
  object-fit: contain;
}

.products-sys-listing__body {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.55rem;
}

.products-sys-listing__content-header {
  --shared-content-header-eyebrow-color: rgb(77 87 92 / 0.74);
  --shared-content-header-title-color: var(--color-secondary-950);
  --shared-content-header-description-color: var(--color-text-secondary);
}

.products-sys-listing__content-header :deep(.shared-content-header__title) {
  max-width: 15ch;
}

.products-sys-listing__content-header :deep(.shared-content-header__eyebrow) {
  line-height: 1.15;
  font-size: 0.64rem;
  letter-spacing: 0.11em;
}

.products-sys-listing__content-header
  :deep(.shared-content-header__description) {
  line-height: 1.65;
}

.products-sys-listing__cta {
  margin-top: 0.55rem;
  --shared-action-link-color: rgb(42 56 61 / 0.74);
}

.products-sys-listing:hover,
.products-sys-listing:focus-visible {
  border-color: color-mix(
    in srgb,
    var(--color-primary-500) 24%,
    var(--color-border-subtle)
  );
  box-shadow: 0 16px 36px rgb(6 20 27 / 0.08);
  transform: translateY(-2px);
}

.products-sys-listing:hover .products-sys-listing__content-header,
.products-sys-listing:focus-visible .products-sys-listing__content-header {
  --shared-content-header-title-color: color-mix(
    in srgb,
    var(--color-primary-800) 26%,
    var(--color-secondary-950)
  );
}

.products-sys-listing:hover .products-sys-listing__cta,
.products-sys-listing:focus-visible .products-sys-listing__cta {
  --shared-action-link-color: var(--color-secondary-950);
}

.products-sys-listing:focus-visible {
  outline: 2px solid
    color-mix(in srgb, var(--color-primary-400) 48%, transparent);
  outline-offset: 3px;
}

@media (min-width: 768px) {
  .products-sys-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .products-sys-listing__badge-frame {
    min-height: clamp(9rem, 14vw, 11rem);
  }
}

@media (max-width: 767px) {
  .products-sys-listing__badge-frame {
    min-height: 9rem;
  }
}
</style>
