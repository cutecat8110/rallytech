<script setup lang="ts">
import { computed } from 'vue'
import { lightSolidButtonTheme } from '~/utils/button-themes'

const currentYear = new Date().getFullYear()
const messages = useRallyMessages()
const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const {
  resolvedImage: connectorImage,
  handleImageError: handleConnectorImageError
} = useHomePageImageAsset('connector-image')

const company = computed(() => messages.value.company)
const contactPath = computed(() => localePath('/contact'))
const isContactPage = computed(() => route.path === contactPath.value)
</script>

<template>
  <footer class="bg-secondary-950 text-white">
    <section v-if="!isContactPage" class="home-sys-footer-connector">
      <figure class="home-sys-footer-connector__media" aria-hidden="true">
        <img
          :src="connectorImage.src"
          alt=""
          class="home-sys-footer-connector__media-image"
          @error="handleConnectorImageError"
        />
      </figure>

      <div class="page-sys-shell home-sys-footer-connector__shell">
        <div class="home-sys-footer-connector__layout">
          <div
            class="home-sys-footer-connector__media-spacer"
            aria-hidden="true"
          />

          <div class="home-sys-footer-connector__content">
            <h2
              class="home-sys-footer-connector__accent-heading type-sys-headline-s md:type-sys-headline-m text-white"
            >
              {{ messages.footer.connectorHeading }}
            </h2>
          </div>

          <div class="home-sys-footer-connector__action">
            <UTheme :ui="lightSolidButtonTheme">
              <UButton
                :to="contactPath"
                color="neutral"
                variant="solid"
                size="lg"
                :label="messages.footer.ctaLabel"
                class="home-sys-footer-connector__cta"
              />
            </UTheme>
          </div>
        </div>
      </div>
    </section>

    <section class="page-sys-shell py-5 md:py-6">
      <div class="home-sys-footer__main">
        <div class="space-y-1">
          <p class="type-sys-title-m text-white">
            {{ messages.footer.brandLine }}
          </p>
        </div>

        <div class="space-y-1 text-left md:text-right">
          <p class="type-sys-body-s text-white/84">
            <span class="text-white/60">{{ messages.footer.phoneLabel }}:</span>
            <a
              :href="company.phoneHref"
              class="transition-colors hover:text-white"
            >
              {{ company.phoneDisplay }}
            </a>
          </p>
          <p v-if="company.faxDisplay" class="type-sys-body-s text-white/84">
            <span class="text-white/60">{{ messages.footer.faxLabel }}:</span>
            <a
              :href="company.faxHref"
              class="transition-colors hover:text-white"
            >
              {{ company.faxDisplay }}
            </a>
          </p>
          <p class="type-sys-body-s text-white/84">
            <span class="text-white/60">{{ messages.footer.emailLabel }}:</span>
            <a
              :href="company.emailHref"
              class="transition-colors hover:text-white"
            >
              {{ company.email }}
            </a>
          </p>
          <p
            v-if="company.address"
            class="type-sys-body-s max-w-[22rem] text-white/76 md:ml-auto"
          >
            <!-- prettier-ignore -->
            <span class="text-white/60">{{ messages.footer.addressLabel }}:</span>
            {{ company.address }}
          </p>
        </div>
      </div>

      <div class="mt-3 border-t border-white/10 pt-2.5">
        <p class="type-sys-label-s text-white/60">
          {{ t('footer.copyright', { year: currentYear }) }}
        </p>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.home-sys-footer-connector {
  --connector-band-min-height: auto;
  --connector-seam-width: 0rem;
  --connector-media-width: 0rem;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(136deg, rgb(255 255 255 / 0.08) 0%, transparent 42%),
    linear-gradient(
      112deg,
      var(--color-surface-signal-start) 0%,
      var(--color-surface-signal-end) 100%
    );
}

.home-sys-footer-connector::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 0.06) 0, transparent 28%),
    linear-gradient(180deg, rgb(255 255 255 / 0.05) 0, transparent 62%);
  opacity: 0.82;
  pointer-events: none;
}

.home-sys-footer-connector::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    102deg,
    rgb(5 12 24 / 0.22) 0,
    transparent 32%,
    rgb(5 12 24 / 0.08) 100%
  );
  pointer-events: none;
}

.home-sys-footer-connector__shell {
  position: relative;
  z-index: 1;
}

.home-sys-footer-connector__layout {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.8rem;
  align-items: center;
  min-height: var(--connector-band-min-height);
  padding-block: 1.2rem 1.3rem;
}

.home-sys-footer-connector__media {
  display: none;
}

.home-sys-footer-connector__media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 34% center;
  filter: saturate(0.94) contrast(1.02);
}

.home-sys-footer-connector__media-spacer {
  display: none;
}

.home-sys-footer-connector__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.15rem;
  padding-block: 0.1rem;
  text-align: left;
}

.home-sys-footer-connector__accent-heading {
  letter-spacing: 0.01em;
  font-weight: 600;
  max-width: 11ch;
  text-wrap: balance;
}

.home-sys-footer-connector__action {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.home-sys-footer-connector__cta {
  min-width: 8.5rem;
  min-height: 3rem;
  justify-content: center;
}

.home-sys-footer__main {
  display: grid;
  gap: 0.65rem;
  align-items: end;
}

@media (max-width: 767px) {
  .home-sys-footer-connector__layout {
    justify-items: start;
  }

  .home-sys-footer-connector__action {
    padding-top: 0.1rem;
  }
}

@media (min-width: 768px) {
  .home-sys-footer-connector {
    --connector-band-min-height: clamp(8.4rem, 11vw, 10.2rem);
    --connector-seam-width: clamp(14.25rem, 17vw, 17rem);
    --connector-media-width: clamp(19.5rem, 24vw, 23.5rem);
  }

  .home-sys-footer-connector__media {
    display: block;
    position: absolute;
    z-index: 1;
    inset-inline-start: 0;
    inset-block: 0;
    width: var(--connector-media-width);
    height: 100%;
    margin: 0;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 72% 100%, 0 100%);
  }

  .home-sys-footer-connector__media-spacer {
    display: block;
    min-height: 1px;
  }

  .home-sys-footer-connector__layout {
    grid-template-columns:
      var(--connector-seam-width)
      minmax(0, 1fr)
      auto;
    gap: clamp(1rem, 1.8vw, 1.75rem);
    padding-block: 1.1rem;
  }

  .home-sys-footer-connector__content {
    align-items: center;
    text-align: center;
  }

  .home-sys-footer-connector__accent-heading {
    max-width: none;
  }

  .home-sys-footer-connector__action {
    justify-content: flex-end;
  }

  .home-sys-footer-connector__cta {
    min-width: 10rem;
    min-height: 3.25rem;
    padding-inline: 1.875rem;
  }

  .home-sys-footer__main {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}

@media (min-width: 1024px) {
  .home-sys-footer-connector {
    --connector-band-min-height: clamp(9rem, 11.5vw, 10.8rem);
    --connector-seam-width: clamp(15rem, 17.5vw, 18rem);
    --connector-media-width: clamp(21rem, 25vw, 24.5rem);
  }

  .home-sys-footer-connector__layout {
    gap: clamp(1.25rem, 2vw, 2.1rem);
  }
}
</style>
