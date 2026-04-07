<script setup lang="ts">
type BrandBlockMotifVariant = 'hero' | 'media' | 'section'
type BrandBlockMotifTone = 'dark' | 'light'

const { variant = 'hero', tone = 'dark' } = defineProps<{
  variant?: BrandBlockMotifVariant
  tone?: BrandBlockMotifTone
}>()
</script>

<template>
  <div
    class="brand-block-motif"
    :class="[`brand-block-motif--${variant}`, `brand-block-motif--${tone}`]"
    aria-hidden="true"
  >
    <span class="brand-block-motif__block brand-block-motif__block--primary" />
    <span
      class="brand-block-motif__block brand-block-motif__block--secondary"
    />
    <span
      class="brand-block-motif__block brand-block-motif__block--highlight"
    />
  </div>
</template>

<style scoped>
.brand-block-motif {
  --motif-primary: var(--color-primary-700);
  --motif-secondary: var(--color-secondary-700);
  --motif-highlight: var(--color-neutral-50);
  --motif-shadow: color-mix(
    in srgb,
    var(--color-secondary-950) 22%,
    transparent
  );
  --motif-opacity: 0.9;
  --motif-position: relative;

  position: var(--motif-position);
  width: 7.25rem;
  height: 5.75rem;
  pointer-events: none;
  opacity: var(--motif-opacity);
  filter: drop-shadow(0 1.15rem 1.85rem var(--motif-shadow));
}

.brand-block-motif--dark {
  --motif-primary: var(--color-primary-600);
  --motif-secondary: var(--color-secondary-700);
  --motif-highlight: color-mix(
    in srgb,
    var(--color-white) 88%,
    var(--color-primary-50)
  );
  --motif-shadow: color-mix(in srgb, var(--color-black) 34%, transparent);
}

.brand-block-motif--light {
  --motif-primary: var(--color-primary-700);
  --motif-secondary: var(--color-secondary-600);
  --motif-highlight: var(--color-white);
  --motif-shadow: color-mix(
    in srgb,
    var(--color-secondary-950) 18%,
    transparent
  );
}

.brand-block-motif__block {
  position: absolute;
  display: block;
  border-radius: var(--radius-xs);
}

.brand-block-motif__block--primary {
  background: var(--motif-primary);
}

.brand-block-motif__block--secondary {
  background: var(--motif-secondary);
}

.brand-block-motif__block--highlight {
  background: var(--motif-highlight);
}

.brand-block-motif--light .brand-block-motif__block--highlight {
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-secondary-950) 24%, transparent),
    0 0.45rem 0.9rem
      color-mix(in srgb, var(--color-secondary-950) 14%, transparent);
}

.brand-block-motif--hero .brand-block-motif__block--primary {
  top: 0;
  left: 0;
  width: 3.85rem;
  height: 3.85rem;
}

.brand-block-motif--hero .brand-block-motif__block--secondary {
  top: 2.05rem;
  left: 5.1rem;
  width: 2.05rem;
  height: 2.05rem;
}

.brand-block-motif--hero .brand-block-motif__block--highlight {
  top: 4.8rem;
  left: 2.25rem;
  width: 1.45rem;
  height: 1.45rem;
}

.brand-block-motif--media {
  width: 6.25rem;
  height: 5.55rem;
}

.brand-block-motif--media .brand-block-motif__block--primary {
  top: 2rem;
  left: 0.65rem;
  width: 3.65rem;
  height: 3.65rem;
}

.brand-block-motif--media .brand-block-motif__block--secondary {
  top: 1.5rem;
  left: 4.25rem;
  width: 1.9rem;
  height: 1.9rem;
}

.brand-block-motif--media .brand-block-motif__block--highlight {
  top: 0;
  left: 2.85rem;
  width: 1.35rem;
  height: 1.35rem;
}

.brand-block-motif--section {
  width: 8rem;
  height: 4.9rem;
}

.brand-block-motif--section .brand-block-motif__block--primary {
  top: 0.75rem;
  left: 0;
  width: 3.35rem;
  height: 3.35rem;
}

.brand-block-motif--section .brand-block-motif__block--secondary {
  top: 0;
  left: 4.05rem;
  width: 2.05rem;
  height: 2.05rem;
}

.brand-block-motif--section .brand-block-motif__block--highlight {
  top: 3.45rem;
  left: 6.4rem;
  width: 1.3rem;
  height: 1.3rem;
}
</style>
