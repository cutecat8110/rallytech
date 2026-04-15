<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'page' | 'immersive'
    shell?: 'default' | 'wide'
    contentAlign?: 'start' | 'center'
  }>(),
  {
    variant: 'page',
    shell: 'default',
    contentAlign: 'center'
  }
)

const slots = useSlots()

const shellClass = computed(() =>
  props.shell === 'wide' ? 'page-sys-shell--wide' : 'page-sys-shell'
)
</script>

<template>
  <section
    class="page-hero-shell relative isolate overflow-hidden"
    :class="[
      `page-hero-shell--${props.variant}`,
      `page-hero-shell--align-${props.contentAlign}`
    ]"
  >
    <div v-if="slots.media" class="page-hero-shell__media" aria-hidden="true">
      <slot name="media" />
    </div>

    <div
      v-if="slots.overlay"
      class="page-hero-shell__overlay"
      aria-hidden="true"
    >
      <slot name="overlay" />
    </div>

    <div v-if="slots.decor" class="page-hero-shell__decor" aria-hidden="true">
      <slot name="decor" />
    </div>

    <div :class="shellClass" class="page-hero-shell__shell relative z-10">
      <div class="page-hero-shell__content">
        <div class="page-hero-shell__rail">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero-shell__media,
.page-hero-shell__overlay,
.page-hero-shell__decor {
  position: absolute;
  inset: 0;
}

.page-hero-shell__shell {
  position: relative;
  z-index: 1;
}

.page-hero-shell__content {
  display: flex;
  min-height: clamp(13rem, 28svh, 17.5rem);
  padding-block: clamp(1.1rem, 2.4vw, 1.8rem);
}

.page-hero-shell__rail {
  width: 100%;
}

.page-hero-shell--align-center .page-hero-shell__content {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.page-hero-shell--align-start .page-hero-shell__content {
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.page-hero-shell--immersive .page-hero-shell__content {
  min-height: clamp(32rem, 78svh, 44rem);
  padding-block: clamp(3.75rem, 6vw, 5.5rem);
}

@media (max-width: 767px) {
  .page-hero-shell--page .page-hero-shell__content {
    min-height: clamp(10rem, 22svh, 13rem);
    padding-block: 1.15rem;
  }
}
</style>
