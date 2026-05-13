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

        <div
          v-motion-group="{
            children: '.products-sys-listing',
            preset: 'fade-up',
            stagger: 0.07,
            distance: 24,
            start: 'top 78%'
          }"
          class="products-sys-grid"
        >
          <NuxtLink
            v-for="item in productItems"
            :key="item.slug"
            :to="item.to"
            class="products-sys-listing"
          >
            <div
              v-motion-reveal="{
                preset: 'scale-soft',
                distance: 12,
                duration: 0.62,
                start: 'top 84%'
              }"
              class="products-sys-listing__badge-frame"
            >
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
  max-width: 80rem;
  margin-inline: auto;
}

.products-sys-overview-grid__intro {
  max-width: 42rem;
  margin-bottom: clamp(2.25rem, 4vw, 3.4rem);
}

.products-sys-grid {
  display: grid;
  gap: clamp(2.2rem, 4vw, 3.25rem) clamp(1.9rem, 3vw, 2.9rem);
}

.products-sys-listing {
  display: grid;
  gap: 1rem;
  align-content: start;
  padding-top: 1.35rem;
  border-top: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary-950) 10%,
      var(--color-border-subtle)
    );
  text-decoration: none;
}

.products-sys-listing__badge-frame {
  position: relative;
  display: flex;
  aspect-ratio: 4 / 3;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: clamp(1.2rem, 2.4vw, 1.7rem);
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-secondary-100) 84%, white);
}

.products-sys-listing__badge-frame::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.2) 0%,
      rgb(255 255 255 / 0.05) 32%,
      rgb(32 38 42 / 0.14) 100%
    ),
    linear-gradient(
      140deg,
      rgb(255 255 255 / 0.04) 0%,
      transparent 54%,
      rgb(255 255 255 / 0.08) 100%
    );
}

.products-sys-listing__badge {
  display: block;
  width: min(17rem, 82%);
  max-height: 6.25rem;
  height: auto;
  object-fit: contain;
  transition: transform 260ms ease;
}

.products-sys-listing__body {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.55rem;
}

.products-sys-listing__content-header {
  max-width: 31rem;
  --shared-content-header-eyebrow-color: rgb(77 87 92 / 0.74);
  --shared-content-header-title-color: var(--color-secondary-950);
  --shared-content-header-description-color: var(--color-text-secondary);
}

.products-sys-listing__content-header :deep(.shared-content-header__title) {
  max-width: 17ch;
}

.products-sys-listing__content-header :deep(.shared-content-header__eyebrow) {
  line-height: 1.15;
  font-size: 0.64rem;
  letter-spacing: 0.11em;
}

.products-sys-listing__content-header
  :deep(.shared-content-header__description) {
  max-width: 31rem;
  line-height: 1.65;
}

.products-sys-listing__cta {
  margin-top: 0.55rem;
  --shared-action-link-color: rgb(42 56 61 / 0.74);
}

.products-sys-listing:hover .products-sys-listing__badge,
.products-sys-listing:focus-visible .products-sys-listing__badge {
  transform: scale(1.02);
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
  outline: none;
}

.products-sys-listing:focus-visible .products-sys-listing__badge-frame {
  box-shadow: 0 0 0 2px rgb(178 214 207 / 0.42);
}

@media (min-width: 768px) {
  .products-sys-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .products-sys-grid > :nth-child(-n + 2) {
    border-top: none;
    padding-top: 0;
  }

  .products-sys-listing__body {
    max-width: 33rem;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .products-sys-listing__badge-frame {
    height: clamp(12rem, 24vw, 15rem);
    aspect-ratio: auto;
  }
}

@media (min-width: 1280px) {
  .products-sys-overview-grid__rail {
    max-width: 96rem;
  }

  .products-sys-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.7rem, 3vw, 2.4rem) clamp(1.25rem, 2vw, 2rem);
  }

  .products-sys-grid > * {
    margin-top: 0;
  }

  .products-sys-grid > :nth-child(2n) {
    margin-top: 0;
  }

  .products-sys-grid > :nth-child(-n + 3) {
    border-top: none;
    padding-top: 0;
  }

  .products-sys-listing__badge-frame {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 767px) {
  .products-sys-grid > :first-child {
    border-top: none;
    padding-top: 0;
  }

  .products-sys-listing__badge-frame {
    aspect-ratio: 16 / 10;
  }

  .products-sys-listing__content-header :deep(.shared-content-header__title) {
    max-width: 14ch;
  }
}
</style>
