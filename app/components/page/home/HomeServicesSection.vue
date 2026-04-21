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
    radial-gradient(circle at 68% 20%, rgb(48 187 165 / 0.12), transparent 30%),
    var(--home-services-surface-image) 58% center / cover no-repeat,
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
  top: clamp(4.6rem, 7vw, 6.1rem);
  right: auto;
  left: max(1rem, calc(50% - 42rem));
  z-index: 0;
}

.home-sys-services__grid {
  margin-top: 2.5rem;
  max-width: 76rem;
  margin-inline: auto;
  display: grid;
  gap: 1.8rem 1.5rem;
}

.home-sys-services__column {
  position: relative;
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  padding: 1rem 0.95rem 0.9rem 0.15rem;
  border-top: 1px solid rgb(255 255 255 / 0.15);
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
  inset: 0.78rem -0.35rem -0.2rem -0.4rem;
  z-index: -1;
  border: 1px solid rgb(255 255 255 / 0.06);
  background:
    linear-gradient(180deg, rgb(6 13 18 / 0.8) 0%, rgb(6 13 18 / 0.58) 100%),
    linear-gradient(
      135deg,
      rgb(161 235 223 / 0.14) 0%,
      rgb(161 235 223 / 0.05) 34%,
      transparent 70%
    ),
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.05) 0%,
      rgb(255 255 255 / 0.01) 100%
    );
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.07),
    0 12px 28px rgb(4 9 14 / 0.24);
  opacity: 0;
  transform: translateY(0.35rem) scale(0.985);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
  pointer-events: none;
}

.home-sys-services__column:focus-visible {
  outline: 2px solid rgb(191 243 234 / 0.38);
  outline-offset: 0.35rem;
}

.home-sys-services__column:hover::before,
.home-sys-services__column:focus-visible::before {
  opacity: 1;
  transform: translateY(-0.12rem) scale(1);
}

.home-sys-services__column:focus-visible::before {
  border-color: rgb(255 255 255 / 0.12);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.1),
    0 14px 30px rgb(4 9 14 / 0.26);
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
    box-shadow 180ms ease;
}

.home-sys-services__title {
  margin-top: 0.95rem;
  max-width: 14ch;
  text-wrap: balance;
  transition:
    color 180ms ease,
    text-shadow 180ms ease;
}

.home-sys-services__copy {
  max-width: 18rem;
  margin-top: 0.7rem;
  text-wrap: pretty;
  color: rgb(255 255 255 / 0.82);
  transition: color 180ms ease;
}

.home-sys-services__action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  width: fit-content;
  margin-top: 0.95rem;
  color: rgb(191 243 234 / 0.92);
  transition:
    color 180ms ease,
    text-shadow 180ms ease;
}

.home-sys-services__action-icon {
  flex-shrink: 0;
  transform: translateX(0);
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.home-sys-services__column:hover .home-sys-services__icon,
.home-sys-services__column:focus-visible .home-sys-services__icon {
  color: rgb(231 253 249 / 1);
  border-color: rgb(191 243 234 / 0.3);
  background: rgb(161 235 223 / 0.11);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.14),
    0 10px 22px rgb(4 9 14 / 0.16);
}

.home-sys-services__column:hover .home-sys-services__title,
.home-sys-services__column:focus-visible .home-sys-services__title {
  color: rgb(255 255 255 / 1);
  text-shadow: 0 0.15rem 0.9rem rgb(4 9 14 / 0.24);
}

.home-sys-services__column:hover .home-sys-services__copy,
.home-sys-services__column:focus-visible .home-sys-services__copy {
  color: rgb(255 255 255 / 0.94);
}

.home-sys-services__column:hover .home-sys-services__action,
.home-sys-services__column:focus-visible .home-sys-services__action {
  color: rgb(231 253 249 / 1);
  text-shadow: 0 0.15rem 0.75rem rgb(4 9 14 / 0.24);
}

.home-sys-services__column:hover .home-sys-services__action-icon,
.home-sys-services__column:focus-visible .home-sys-services__action-icon {
  transform: translateX(0.16rem);
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
    inset: 0.62rem -0.2rem -0.12rem -0.2rem;
  }
}

@media (min-width: 1280px) {
  .home-sys-services__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem 1.8rem;
  }
}
</style>
