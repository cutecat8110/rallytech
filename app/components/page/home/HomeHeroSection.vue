<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { homeHeroImageRegistry } from '~/utils/home-hero-image-registry'

const { activeMode, setPreferredMode } = useHomeHeroImageMode()
const didNanoLoadFail = ref(false)

const activeNanoSource = computed(() =>
  import.meta.dev
    ? homeHeroImageRegistry.latestCandidate
    : homeHeroImageRegistry.liveNano
)

const resolvedHeroImage = computed(() => {
  if (
    activeMode.value === 'nano' &&
    activeNanoSource.value &&
    !didNanoLoadFail.value
  ) {
    return activeNanoSource.value
  }

  return homeHeroImageRegistry.stock
})

watch(
  () => [activeMode.value, activeNanoSource.value?.src] as const,
  () => {
    didNanoLoadFail.value = false
  },
  { immediate: true }
)

function handleHeroImageError() {
  if (activeMode.value !== 'nano') {
    return
  }

  didNanoLoadFail.value = true
  setPreferredMode('stock')
}
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden bg-sys-rally-hero-industrial text-white"
  >
    <div class="home-sys-hero__media" aria-hidden="true">
      <img
        :src="resolvedHeroImage.src"
        :alt="resolvedHeroImage.alt"
        class="home-sys-hero__image"
        @error="handleHeroImageError"
      />
      <div class="home-sys-hero__overlay" />
    </div>

    <div class="page-sys-shell--wide relative z-10">
      <div class="content-sys-rail home-sys-hero__content">
        <div class="home-sys-hero__inner">
          <p class="type-sys-kicker text-primary-200 uppercase">
            Turnkey automation delivery
          </p>
          <h1 class="type-sys-display-l mt-4 text-white">
            工業自動化交付，為可靠運轉而設計
          </h1>
          <p
            class="type-sys-body-m mt-4 max-w-[38rem] text-white/78 md:mx-auto"
          >
            串接控制系統、工廠資料與現場執行，支撐現代工業專案。
          </p>

          <div class="mt-7 flex justify-center">
            <UButton
              to="#services"
              color="primary"
              variant="solid"
              size="xl"
              label="探索服務"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-hero__media {
  position: absolute;
  inset: 0;
}

.home-sys-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.9) contrast(1.04);
}

.home-sys-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 34%, rgb(60 132 255 / 0.16), transparent 24%),
    radial-gradient(circle at 76% 22%, rgb(48 187 165 / 0.2), transparent 30%),
    linear-gradient(
      180deg,
      rgb(10 18 22 / 0.54) 0%,
      rgb(10 18 22 / 0.46) 28%,
      rgb(10 18 22 / 0.74) 62%,
      rgb(10 18 22 / 0.9) 100%
    ),
    linear-gradient(
      90deg,
      rgb(7 12 16 / 0.92) 0%,
      rgb(7 12 16 / 0.54) 42%,
      rgb(7 12 16 / 0.54) 58%,
      rgb(7 12 16 / 0.92) 100%
    );
}

.home-sys-hero__content {
  display: flex;
  min-height: clamp(31rem, calc(100svh - 6.5rem), 41rem);
  align-items: center;
  justify-content: center;
  padding-block: clamp(3.75rem, 6vw, 5.5rem);
}

.home-sys-hero__inner {
  max-width: 48rem;
  margin-inline: auto;
  text-align: center;
}
</style>
