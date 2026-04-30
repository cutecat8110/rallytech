<script setup lang="ts">
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'

const messages = useRallyMessages()
</script>

<template>
  <PageHeroShell
    class="products-sys-overview-hero"
    variant="page"
    shell="wide"
    content-align="center"
  >
    <template #media>
      <img
        src="/images/stock/services/scada-hmi-graphics/detail-hero-control-room-operator.jpg"
        alt=""
        class="products-sys-overview-hero__image"
        decoding="async"
      />
    </template>

    <SharedPageHeroTitle :title="messages.productsPage.hero.title" />
  </PageHeroShell>
</template>

<style scoped>
.products-sys-overview-hero__image {
  object-position: center center;
}
</style>
