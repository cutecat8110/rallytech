<script setup lang="ts">
import { computed } from 'vue'
import { secondarySolidButtonTheme } from '~/utils/button-themes'

const currentYear = new Date().getFullYear()
const messages = useRallyMessages()
const { t } = useI18n()
const {
  resolvedImage: connectorImage,
  handleImageError: handleConnectorImageError
} = useHomePageImageAsset('connector-image')

const company = computed(() => messages.value.company)
</script>

<template>
  <footer id="contact" class="bg-secondary-950 text-white">
    <section class="home-sys-footer-connector">
      <figure class="home-sys-footer-connector__media" aria-hidden="true">
        <img
          :src="connectorImage.src"
          alt=""
          class="home-sys-footer-connector__media-image"
          @error="handleConnectorImageError"
        />
      </figure>

      <div class="page-sys-shell">
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
            <UTheme :ui="secondarySolidButtonTheme">
              <UButton
                :to="company.emailHref"
                color="neutral"
                variant="solid"
                size="sm"
                :label="messages.footer.ctaLabel"
                :ui="{ label: 'text-white' }"
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
            <span class="text-white/52">{{ messages.footer.phoneLabel }}:</span>
            <a
              :href="company.phoneHref"
              class="transition-colors hover:text-white"
            >
              {{ company.phoneDisplay }}
            </a>
          </p>
          <p v-if="company.faxDisplay" class="type-sys-body-s text-white/84">
            <span class="text-white/52">{{ messages.footer.faxLabel }}:</span>
            <a
              :href="company.faxHref"
              class="transition-colors hover:text-white"
            >
              {{ company.faxDisplay }}
            </a>
          </p>
          <p class="type-sys-body-s text-white/84">
            <span class="text-white/52">{{ messages.footer.emailLabel }}:</span>
            <a
              :href="company.emailHref"
              class="transition-colors hover:text-white"
            >
              {{ company.email }}
            </a>
          </p>
          <p
            v-if="company.address"
            class="type-sys-body-s max-w-[22rem] text-white/72 md:ml-auto"
          >
            <!-- prettier-ignore -->
            <span class="text-white/52">{{ messages.footer.addressLabel }}:</span>
            {{ company.address }}
          </p>
        </div>
      </div>

      <div class="mt-3 border-t border-white/10 pt-2.5">
        <p class="type-sys-label-s text-white/55">
          {{ t('footer.copyright', { year: currentYear }) }}
        </p>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.home-sys-footer-connector {
  position: relative;
  z-index: 1;
  overflow: visible;
  background:
    linear-gradient(120deg, rgb(255 255 255 / 0.1) 0%, transparent 34%),
    linear-gradient(
      112deg,
      var(--color-surface-signal-start) 0%,
      var(--color-surface-signal-end) 100%
    );
}

.home-sys-footer-connector::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgb(255 255 255 / 0.05) 0,
    rgb(255 255 255 / 0.02) 24%,
    transparent 52%
  );
  pointer-events: none;
}

.home-sys-footer-connector__layout {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.75rem;
  align-items: center;
  min-height: 5.35rem;
  padding-block: 0.45rem;
}

.home-sys-footer-connector__media {
  position: relative;
  z-index: 1;
  width: min(100%, 16rem);
  aspect-ratio: 16 / 9;
  margin-inline: auto;
  overflow: hidden;
  clip-path: polygon(0 0, 87% 0, 100% 17%, 100% 100%, 0 100%);
}

.home-sys-footer-connector__media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 32% center;
  filter: saturate(0.94) contrast(1.04);
}

.home-sys-footer-connector__media-spacer {
  display: none;
}

.home-sys-footer-connector__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 0.2rem;
  text-align: center;
}

.home-sys-footer-connector__accent-heading {
  letter-spacing: 0.01em;
  font-weight: 600;
}

.home-sys-footer-connector__action {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-sys-footer__main {
  display: grid;
  gap: 0.65rem;
  align-items: end;
}

@media (max-width: 767px) {
  .home-sys-footer-connector__media {
    width: min(100%, 13rem);
    margin-block: -0.8rem 0.15rem;
  }
}

@media (min-width: 768px) {
  .home-sys-footer-connector__media {
    position: absolute;
    inset-inline-start: 0;
    inset-block-end: 0;
    width: clamp(15.5rem, 20vw, 19.25rem);
    height: calc(100% + 2.9rem);
    max-height: 9.55rem;
    margin: 0;
  }

  .home-sys-footer-connector__media-spacer {
    display: block;
    min-height: 1px;
  }

  .home-sys-footer-connector__layout {
    grid-template-columns:
      clamp(10.75rem, 14vw, 13.25rem)
      minmax(0, 1fr)
      clamp(7.75rem, 8.75vw, 8.9rem);
    gap: 0.9rem;
  }

  .home-sys-footer-connector__content {
    align-items: center;
    text-align: center;
  }

  .home-sys-footer-connector__action {
    justify-content: flex-end;
  }

  .home-sys-footer__main {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}

@media (min-width: 1024px) {
  .home-sys-footer-connector__layout {
    grid-template-columns:
      clamp(11.25rem, 13vw, 13.75rem)
      minmax(0, 1fr)
      clamp(8rem, 8.25vw, 9rem);
    gap: 0.95rem;
  }
}
</style>
