<script setup lang="ts">
// Layout：frontend
import FrontendFooter from '~/components/layout/FrontendFooter.vue'
import FrontendHeader from '~/components/layout/FrontendHeader.vue'
</script>

<template>
  <div class="bg-sys-page min-h-screen overflow-x-hidden text-neutral-900">
    <!-- Header -->
    <FrontendHeader />

    <!-- Main -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <FrontendFooter />
  </div>
</template>
