<script setup lang="ts">
import { computed } from 'vue'
import type { ProductCatalogItemMessages } from '~~/i18n/locales/types'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'
import { getProductHeroImage } from '~/utils/products'

const props = defineProps<{
  product: ProductCatalogItemMessages
}>()

const heroImage = computed(() => getProductHeroImage(props.product.slug))
</script>

<template>
  <PageHeroShell
    class="products-sys-detail-hero"
    variant="page"
    shell="default"
    content-align="center"
  >
    <template #media>
      <img
        :src="heroImage.src"
        :alt="heroImage.alt"
        class="products-sys-detail-hero__image"
        :style="{ objectPosition: heroImage.objectPosition ?? 'center' }"
        decoding="async"
      />
    </template>

    <SharedPageHeroTitle :title="product.shortLabel" />
  </PageHeroShell>
</template>

<style scoped>
.products-sys-detail-hero__image {
  object-position: center;
}
</style>
