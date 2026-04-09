<script setup lang="ts">
import { computed } from 'vue'
import BrandBlockMotif from '~/components/shared/BrandBlockMotif.vue'
import { enrichServiceCatalog } from '~/utils/services'

const { resolvedImage: servicesSurfaceImage } =
  useHomePageImageAsset('services-surface')

const servicesSurfaceStyle = computed(() => ({
  '--home-services-surface-image': `url('${servicesSurfaceImage.value.src}')`
}))

const messages = useRallyMessages()
const localePath = useLocalePath()

const serviceItems = computed(() =>
  enrichServiceCatalog(messages.value.servicesCatalog).map((item) => ({
    ...item,
    to: localePath(`/services/${item.slug}`)
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
          <NuxtLink
            v-for="item in serviceItems"
            :key="item.slug"
            class="home-sys-services__column"
            :to="item.to"
          >
            <span class="home-sys-services__icon">
              <UIcon :name="item.icon" class="size-4.5" />
            </span>

            <h3 class="home-sys-services__title type-sys-title-m text-white">
              {{ item.shortLabel }}
            </h3>
            <p
              class="home-sys-services__copy type-sys-body-s flex-1 text-white/82"
            >
              {{ item.description }}
            </p>

            <span class="home-sys-services__action type-sys-label-s">
              <span>{{ messages.home.services.ctaLabel }}</span>
              <UIcon
                name="i-ic-baseline-arrow-forward"
                class="home-sys-services__action-icon size-4"
              />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-sys-rally-services-surface {
  background:
    linear-gradient(
      180deg,
      rgb(4 9 14 / 0.44) 0%,
      rgb(4 9 14 / 0.34) 26%,
      rgb(4 9 14 / 0.52) 64%,
      rgb(4 9 14 / 0.68) 100%
    ),
    radial-gradient(circle at 78% 20%, rgb(48 187 165 / 0.14), transparent 30%),
    var(--home-services-surface-image) 72% center / cover no-repeat,
    linear-gradient(145deg, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0) 42%),
    repeating-linear-gradient(
      -34deg,
      rgb(255 255 255 / 0.012) 0,
      rgb(255 255 255 / 0.012) 18px,
      transparent 18px,
      transparent 44px
    ),
    linear-gradient(
      165deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 60%,
      var(--color-secondary-800) 100%
    );
  background-blend-mode: normal, screen, normal, soft-light, normal, normal;
}

.home-sys-services__motif {
  --motif-position: absolute;

  position: absolute;
  top: clamp(3rem, 7vw, 5.75rem);
  right: clamp(1.25rem, 8vw, 8rem);
  z-index: 1;
}

.home-sys-services__grid {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.8rem 1.5rem;
}

.home-sys-services__column {
  position: relative;
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  padding: 1rem 0.95rem 0.9rem 0.15rem;
  border-top: 1px solid rgb(255 255 255 / 0.14);
  text-decoration: none;
  isolation: isolate;
  transition:
    border-color 180ms ease,
    color 180ms ease,
    background-color 180ms ease;
}

.home-sys-services__column::before {
  content: '';
  position: absolute;
  inset: 0.35rem -0.35rem 0 -0.4rem;
  z-index: -1;
  background:
    linear-gradient(
      90deg,
      rgb(255 255 255 / 0.07) 0%,
      rgb(255 255 255 / 0.024) 34%,
      transparent 82%
    ),
    linear-gradient(180deg, rgb(255 255 255 / 0.03) 0%, transparent 58%);
  opacity: 0;
  transition: opacity 180ms ease;
  pointer-events: none;
}

.home-sys-services__column:hover,
.home-sys-services__column:focus-visible {
  border-top-color: rgb(161 235 223 / 0.56);
}

.home-sys-services__column:focus-visible {
  outline: none;
}

.home-sys-services__column:hover::before,
.home-sys-services__column:focus-visible::before {
  opacity: 1;
}

.home-sys-services__icon {
  display: inline-flex;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.85rem;
  border: 1px solid rgb(255 255 255 / 0.08);
  color: rgb(161 235 223 / 0.94);
  background: rgb(255 255 255 / 0.035);
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.02);
  transition:
    color 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.home-sys-services__title {
  margin-top: 0.95rem;
  max-width: 14ch;
  text-wrap: balance;
}

.home-sys-services__copy {
  max-width: 18rem;
  margin-top: 0.7rem;
  text-wrap: pretty;
}

.home-sys-services__action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  width: fit-content;
  margin-top: 0.95rem;
  color: rgb(191 243 234 / 0.92);
  transition:
    gap 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.home-sys-services__action-icon {
  flex-shrink: 0;
}

.home-sys-services__column:hover .home-sys-services__icon,
.home-sys-services__column:focus-visible .home-sys-services__icon {
  color: rgb(191 243 234 / 1);
  border-color: rgb(161 235 223 / 0.22);
  background: rgb(255 255 255 / 0.075);
  transform: translateX(1px);
}

.home-sys-services__column:hover .home-sys-services__action,
.home-sys-services__column:focus-visible .home-sys-services__action {
  gap: 0.5rem;
  color: rgb(219 250 245 / 1);
  transform: translateX(2px);
}

@media (min-width: 768px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.95rem 2rem;
  }
}

@media (max-width: 767px) {
  .home-sys-services__motif {
    display: none;
  }

  .home-sys-services__column {
    min-height: 10.75rem;
    padding-right: 0.35rem;
  }

  .home-sys-services__column::before {
    inset: 0.25rem -0.2rem 0 -0.2rem;
  }
}

@media (min-width: 1280px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem 1.8rem;
  }
}
</style>
