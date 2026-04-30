<script setup lang="ts">
import type {
  ProductCatalogItemMessages,
  ProductDetailPageMessages
} from '~~/i18n/locales/types'
import ProductDetailBlocksRenderer from '~/components/page/products/ProductDetailBlocksRenderer.vue'
import ProductDetailSidebar from '~/components/page/products/ProductDetailSidebar.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'

const props = defineProps<{
  product: ProductCatalogItemMessages
  detailPage: ProductDetailPageMessages
}>()
</script>

<template>
  <section class="products-sys-detail-stage section-sys-shell">
    <div class="page-sys-shell">
      <div class="products-sys-detail-shell">
        <ProductDetailSidebar
          class="products-sys-detail-shell__sidebar"
          :product="props.product"
          :heading="props.detailPage.sidebar.productsHeading"
        />

        <div class="products-sys-detail-shell__main">
          <SharedTextStack
            v-if="props.detailPage.introParagraphs.length"
            class="products-sys-detail-main-lead"
            :paragraphs="props.detailPage.introParagraphs"
            tone="light"
            size="md"
            density="compact"
            lead-first
          />

          <ProductDetailBlocksRenderer
            :product="props.product"
            :blocks="props.detailPage.blocks"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-sys-detail-stage {
  background: var(--color-white);
}

.products-sys-detail-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.15rem;
}

.products-sys-detail-shell__main {
  min-width: 0;
}

.products-sys-detail-main-lead {
  width: min(100%, 56rem);
  margin-bottom: clamp(2.1rem, 3.4vw, 3.3rem);
}

@media (max-width: 1023px) {
  .products-sys-detail-shell {
    gap: clamp(3rem, 9vw, 4.2rem);
  }

  .products-sys-detail-shell__main {
    order: 1;
  }

  .products-sys-detail-shell__sidebar {
    order: 2;
  }

  .products-sys-detail-main-lead {
    margin-bottom: clamp(2rem, 7vw, 2.8rem);
  }
}

@media (min-width: 1024px) {
  .products-sys-detail-shell {
    grid-template-columns: minmax(15rem, 17rem) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2.3rem, 3vw, 3.8rem);
  }
}
</style>
