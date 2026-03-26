<script setup lang="ts">
// 章節標題元件
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
  }>(),
  {
    description: undefined
  }
)
</script>

<template>
  <div class="stack-sys-8">
    <p class="type-sys-label-s text-primary-700 tracking-widest uppercase">
      {{ eyebrow }}
    </p>
    <h2 class="type-sys-headline-m md:type-sys-headline-l text-neutral-950">
      {{ title }}
    </h2>
    <p v-if="description" class="type-sys-body-m max-w-2xl text-neutral-700">
      {{ description }}
    </p>
  </div>
</template>
