<script setup lang="ts">
import { computed } from 'vue'
import { brandGhostButtonTheme } from '~/utils/button-themes'
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'

const { resolvedImage: servicesSurfaceImage } =
  useHomePageImageAsset('services-surface')

const servicesSurfaceStyle = computed(() => ({
  '--home-services-surface-image': `url('${servicesSurfaceImage.value.src}')`
}))

const messages = useRallyMessages()
const serviceIcons = [
  'i-lucide-monitor-smartphone',
  'i-lucide-briefcase-business',
  'i-lucide-cpu',
  'i-lucide-database-zap',
  'i-lucide-database',
  'i-lucide-network',
  'i-lucide-radio-tower',
  'i-lucide-bell-ring'
]

const serviceItems = computed(() =>
  messages.value.home.services.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index] ?? 'i-lucide-settings'
  }))
)
</script>

<template>
  <section
    id="services"
    class="section-sys-shell relative overflow-hidden bg-sys-rally-services-surface text-white"
    :style="servicesSurfaceStyle"
  >
    <BrandBlockMotif
      class="home-sys-services__motif"
      variant="section"
      tone="dark"
    />

    <div class="page-sys-shell--wide relative z-10">
      <div class="content-sys-rail">
        <div class="mx-auto max-w-[38rem] text-center">
          <p class="type-sys-kicker text-primary-300 uppercase">
            {{ messages.home.services.kicker }}
          </p>
          <h2 class="type-sys-headline-l mt-3 text-white">
            {{ messages.home.services.title }}
          </h2>
        </div>

        <div class="home-sys-services__grid">
          <article
            v-for="item in serviceItems"
            :key="item.title"
            class="home-sys-services__column"
          >
            <span class="home-sys-services__icon">
              <UIcon :name="item.icon" class="size-4.5" />
            </span>

            <h3 class="home-sys-services__title type-sys-title-m text-white">
              {{ item.title }}
            </h3>
            <p
              class="home-sys-services__copy type-sys-body-s flex-1 text-white/72"
            >
              {{ item.description }}
            </p>

            <UTheme :ui="brandGhostButtonTheme">
              <UButton
                to="#contact"
                color="primary"
                variant="ghost"
                size="xs"
                :label="messages.home.services.ctaLabel"
                class="home-sys-services__action w-fit"
              />
            </UTheme>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-sys-rally-services-surface {
  background:
    linear-gradient(180deg, rgb(4 9 14 / 0.68) 0%, rgb(4 9 14 / 0.9) 100%),
    radial-gradient(circle at 78% 20%, rgb(48 187 165 / 0.08), transparent 26%),
    var(--home-services-surface-image) 72% center / cover no-repeat,
    linear-gradient(145deg, rgb(255 255 255 / 0.02), rgb(255 255 255 / 0) 38%),
    repeating-linear-gradient(
      -34deg,
      rgb(255 255 255 / 0.015) 0,
      rgb(255 255 255 / 0.015) 18px,
      transparent 18px,
      transparent 44px
    ),
    linear-gradient(
      165deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 60%,
      var(--color-secondary-800) 100%
    );
  background-blend-mode: normal, screen, soft-light, normal, normal, normal;
}

.home-sys-services__motif {
  --motif-position: absolute;

  position: absolute;
  top: clamp(3rem, 7vw, 5.75rem);
  right: clamp(1.25rem, 8vw, 8rem);
  z-index: 1;
}

.home-sys-services__grid {
  margin-top: 2.35rem;
  display: grid;
  gap: 2rem 1.75rem;
}

.home-sys-services__column {
  display: flex;
  min-height: 11.5rem;
  flex-direction: column;
  padding-top: 1rem;
  border-top: 1px solid rgb(255 255 255 / 0.14);
}

.home-sys-services__icon {
  display: inline-flex;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: rgb(161 235 223 / 0.94);
  background: rgb(255 255 255 / 0.03);
}

.home-sys-services__title {
  margin-top: 0.95rem;
}

.home-sys-services__copy {
  max-width: 17rem;
  margin-top: 0.65rem;
}

.home-sys-services__action {
  margin-top: 0.95rem;
}

@media (min-width: 768px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 2.25rem;
  }
}

@media (max-width: 767px) {
  .home-sys-services__motif {
    display: none;
  }
}

@media (min-width: 1280px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2.25rem 2rem;
  }
}
</style>
