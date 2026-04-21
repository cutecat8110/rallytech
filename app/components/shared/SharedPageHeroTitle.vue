<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h1
    class="shared-page-hero-title type-sys-display-l page-hero-shell__heading"
  >
    {{ title }}
  </h1>
</template>
