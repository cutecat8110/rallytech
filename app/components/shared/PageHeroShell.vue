<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'page' | 'immersive'
    shell?: 'default' | 'wide'
    contentAlign?: 'start' | 'center'
    tone?: 'brand-dark' | 'none'
  }>(),
  {
    variant: 'page',
    shell: 'default',
    contentAlign: 'center',
    tone: 'brand-dark'
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
      `page-hero-shell--align-${props.contentAlign}`,
      `page-hero-shell--tone-${props.tone}`
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

.page-hero-shell--tone-brand-dark {
  background:
    radial-gradient(circle at 78% 18%, rgb(48 187 165 / 0.16), transparent 34%),
    linear-gradient(
      148deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 62%,
      var(--color-secondary-800) 100%
    );
  border-bottom: 1px solid rgb(255 255 255 / 0.08);
  color: var(--color-white);
}

.page-hero-shell--tone-brand-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      180deg,
      rgb(4 10 14 / 0.54) 0%,
      rgb(5 12 17 / 0.24) 42%,
      rgb(5 12 17 / 0.58) 100%
    ),
    linear-gradient(
      90deg,
      rgb(4 10 14 / 0.36) 0%,
      rgb(4 10 14 / 0.08) 38%,
      rgb(4 10 14 / 0.08) 62%,
      rgb(4 10 14 / 0.36) 100%
    );
  pointer-events: none;
}

.page-hero-shell__media {
  z-index: 0;
}

.page-hero-shell--tone-brand-dark .page-hero-shell__media :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.98) contrast(1.03) brightness(0.96);
  transform: scale(1.025);
}

.page-hero-shell__overlay,
.page-hero-shell__decor {
  z-index: 1;
}

.page-hero-shell__shell {
  position: relative;
  z-index: 2;
}

.page-hero-shell__content {
  display: flex;
  min-height: clamp(13rem, 28svh, 17.5rem);
  padding-block: clamp(1.1rem, 2.4vw, 1.8rem);
}

.page-hero-shell__rail {
  width: 100%;
}

.page-hero-shell :deep(.page-hero-shell__heading) {
  max-width: min(16ch, 100%);
  margin: 0;
  color: currentcolor;
  line-height: 1.04;
  letter-spacing: 0;
  text-wrap: balance;
  text-shadow:
    0 0.8rem 2rem rgb(4 10 14 / 0.48),
    0 1px 0 rgb(4 10 14 / 0.26);
}

.page-hero-shell--align-center :deep(.page-hero-shell__heading) {
  margin-inline: auto;
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
