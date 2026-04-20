<script setup lang="ts">
import { computed } from 'vue'

const messages = useRallyMessages()
const { resolvedImage: surfaceImage } =
  useHomePageImageAsset('services-surface')

const capabilityIcons = [
  'i-lucide-cable',
  'i-lucide-bolt',
  'i-lucide-badge-check',
  'i-lucide-monitor-cog',
  'i-lucide-cpu',
  'i-lucide-database-zap',
  'i-lucide-network',
  'i-lucide-layers-3'
]

const capabilityItems = computed(() =>
  messages.value.aboutPage.capabilities.items.map((label, index) => ({
    label,
    icon: capabilityIcons[index] ?? 'i-lucide-circle'
  }))
)

const capabilitySurfaceStyle = computed(() => ({
  '--about-capabilities-image': `url('${surfaceImage.value.src}')`
}))
</script>

<template>
  <section
    id="capabilities"
    class="about-sys-capabilities"
    :style="capabilitySurfaceStyle"
  >
    <div class="page-sys-shell--wide relative z-10">
      <div class="about-sys-capabilities__grid">
        <div class="about-sys-capabilities__lead">
          <h2 class="about-sys-capabilities__title type-sys-headline-l">
            {{ messages.aboutPage.capabilities.title }}
          </h2>
        </div>

        <article
          v-for="item in capabilityItems"
          :key="item.label"
          class="about-sys-capabilities__tile"
        >
          <span class="about-sys-capabilities__icon">
            <UIcon :name="item.icon" class="size-7" />
          </span>
          <p class="about-sys-capabilities__label type-sys-title-m">
            {{ item.label }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-sys-capabilities {
  position: relative;
  padding-block: clamp(3rem, 5vw, 4.5rem);
  color: white;
  background:
    linear-gradient(
      180deg,
      rgba(4, 10, 14, 0.45) 0%,
      rgba(4, 10, 14, 0.3) 50%,
      rgba(4, 10, 14, 0.45) 100%
    ),
    var(--about-capabilities-image) center center / cover no-repeat,
    var(--color-secondary-950);
}

.about-sys-capabilities__grid {
  display: grid;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
}

.about-sys-capabilities__lead,
.about-sys-capabilities__tile {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 9.25rem;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.about-sys-capabilities__lead {
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(12, 22, 34, 0.5);
}

.about-sys-capabilities__tile {
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  text-align: center;
  cursor: default;
}

/* 建立固定的深淺交錯層次感，且不隨 Hover 改變 */
.about-sys-capabilities__tile:nth-child(2) {
  background: rgba(15, 23, 42, 0.28);
}
.about-sys-capabilities__tile:nth-child(3) {
  background: rgba(15, 23, 42, 0.42);
}
.about-sys-capabilities__tile:nth-child(4) {
  background: rgba(15, 23, 42, 0.32);
}
.about-sys-capabilities__tile:nth-child(5) {
  background: rgba(15, 23, 42, 0.48);
}
.about-sys-capabilities__tile:nth-child(6) {
  background: rgba(15, 23, 42, 0.24);
}
.about-sys-capabilities__tile:nth-child(7) {
  background: rgba(15, 23, 42, 0.38);
}
.about-sys-capabilities__tile:nth-child(8) {
  background: rgba(15, 23, 42, 0.44);
}
.about-sys-capabilities__tile:nth-child(9) {
  background: rgba(15, 23, 42, 0.3);
}

/* 徹底移除所有 Hover 狀態的 CSS 規則 */

.about-sys-capabilities__title {
  max-width: 7em;
  margin-inline: auto;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.about-sys-capabilities__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
}

.about-sys-capabilities__label {
  max-width: 12ch;
  margin-inline: auto;
  color: white;
  line-height: 1.35;
  text-wrap: balance;
  font-weight: 500;
}

@media (min-width: 768px) {
  .about-sys-capabilities__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .about-sys-capabilities__grid {
    grid-template-columns: minmax(0, 0.82fr) repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(8.875rem, auto));
  }

  .about-sys-capabilities__lead {
    grid-row: 1 / span 4;
  }
}

@media (max-width: 1199px) {
  .about-sys-capabilities__lead {
    grid-column: 1 / -1;
    min-height: 12rem;
  }
}

@media (max-width: 639px) {
  .about-sys-capabilities {
    padding-block: clamp(3rem, 12vw, 4rem);
  }

  .about-sys-capabilities__lead,
  .about-sys-capabilities__tile {
    min-height: 8.75rem;
    padding: 1.5rem;
  }

  .about-sys-capabilities__title {
    font-size: clamp(2.25rem, 9vw, 2.75rem);
  }
}
</style>
