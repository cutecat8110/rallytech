<script setup lang="ts">
import { computed } from 'vue'

const messages = useRallyMessages()
const { resolvedImage: surfaceImage } = useHomePageImageAsset('services-surface')

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
            <UIcon :name="item.icon" class="size-6" />
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
  overflow: hidden;
  padding-block: 0;
  color: white;
  background:
    linear-gradient(
      180deg,
      rgb(4 10 14 / 0.5) 0%,
      rgb(4 10 14 / 0.28) 20%,
      rgb(4 10 14 / 0.52) 100%
    ),
    linear-gradient(
      90deg,
      rgb(4 10 14 / 0.86) 0%,
      rgb(4 10 14 / 0.44) 40%,
      rgb(4 10 14 / 0.66) 100%
    ),
    var(--about-capabilities-image) center center / cover no-repeat,
    linear-gradient(
      160deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 100%
    );
}

.about-sys-capabilities::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      0deg,
      rgb(255 255 255 / 0.02) 0%,
      rgb(255 255 255 / 0) 100%
    ),
    linear-gradient(
      90deg,
      rgb(255 255 255 / 0.03) 0,
      rgb(255 255 255 / 0.03) 1px,
      transparent 1px,
      transparent calc(100% / 3)
    );
  opacity: 0.5;
  pointer-events: none;
}

.about-sys-capabilities__grid {
  display: grid;
  gap: 1px;
  background: rgb(255 255 255 / 0.08);
}

.about-sys-capabilities__lead,
.about-sys-capabilities__tile {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 9rem;
  padding: 1.25rem 1.35rem;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05)),
    rgb(20 38 58 / 0.68);
  backdrop-filter: blur(3px);
}

.about-sys-capabilities__lead {
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 3.2vw, 2.7rem) clamp(1.4rem, 2.6vw, 2rem);
  text-align: center;
  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.08) 0%,
      rgb(255 255 255 / 0) 100%
    ),
    linear-gradient(
      180deg,
      rgb(7 17 26 / 0.26) 0%,
      rgb(7 17 26 / 0.78) 100%
    ),
    rgb(12 26 40 / 0.78);
}

.about-sys-capabilities__title {
  max-width: 5.4em;
  margin-inline: auto;
  color: white;
  line-height: 1.02;
  letter-spacing: -0.03em;
  word-break: keep-all;
  overflow-wrap: normal;
  text-wrap: balance;
  text-shadow: 0 0.4rem 1.25rem rgb(4 10 14 / 0.18);
}

.about-sys-capabilities__tile {
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  text-align: center;
}

.about-sys-capabilities__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.85rem;
  height: 2.85rem;
  flex-shrink: 0;
  margin-bottom: 0;
  color: rgb(226 246 242 / 0.98);
}

.about-sys-capabilities__label {
  max-width: 11ch;
  margin-inline: auto;
  color: white;
  line-height: 1.2;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .about-sys-capabilities__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .about-sys-capabilities__grid {
    grid-template-columns: minmax(0, 0.82fr) repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(8.25rem, auto));
  }

  .about-sys-capabilities__lead {
    grid-row: 1 / span 4;
  }
}

@media (max-width: 1199px) {
  .about-sys-capabilities__lead {
    grid-column: 1 / -1;
    min-height: 10rem;
  }

  .about-sys-capabilities__title {
    max-width: 5.4em;
  }
}

@media (max-width: 639px) {
  .about-sys-capabilities__lead,
  .about-sys-capabilities__tile {
    min-height: 7.5rem;
    padding: 1rem;
  }

  .about-sys-capabilities__lead {
    min-height: 8.4rem;
  }

  .about-sys-capabilities__title {
    font-size: clamp(2rem, 8.5vw, 2.5rem);
    max-width: 5.6em;
  }
}
</style>
