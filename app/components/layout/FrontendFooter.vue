<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import {
  contrastSolidLightButtonTheme,
  iconUtilityEmphasisButtonTheme
} from '~/utils/button-themes'

const currentYear = new Date().getFullYear()
const messages = useRallyMessages()
const { t } = useI18n()
const localePath = useLocalePath()
const isBackToTopVisible = ref(false)
const BACK_TO_TOP_REVEAL_OFFSET = 320
const {
  resolvedImage: connectorImage,
  handleImageError: handleConnectorImageError
} = useHomePageImageAsset('connector-image')

const company = computed(() => messages.value.company)
const footerMessages = computed(() => messages.value.footer)
const contactPath = computed(() => localePath('/contact'))
const copyrightText = computed(() =>
  t('footer.copyright', { year: currentYear })
)

const brandSupportingLine = computed(() => {
  const candidates = [
    company.value.legalName,
    company.value.englishName
  ].filter(Boolean)

  return (
    candidates.find(
      (candidate) => candidate !== footerMessages.value.brandLine
    ) ?? ''
  )
})

const footerLinkItems = computed(() =>
  footerMessages.value.links.map((item) => ({
    ...item,
    to: localePath(item.to)
  }))
)

const contactItems = computed(() =>
  [
    company.value.phoneDisplay
      ? {
          key: 'phone',
          icon: 'i-lucide-phone-call',
          label: footerMessages.value.phoneLabel,
          value: company.value.phoneDisplay,
          href: company.value.phoneHref
        }
      : null,
    company.value.email
      ? {
          key: 'email',
          icon: 'i-lucide-mail',
          label: footerMessages.value.emailLabel,
          value: company.value.email,
          href: company.value.emailHref
        }
      : null,
    company.value.linkedinUrl
      ? {
          key: 'linkedin',
          icon: 'i-lucide-linkedin',
          label: footerMessages.value.linkedinLabel,
          value: 'Rally Technology Co., Ltd.',
          href: company.value.linkedinUrl,
          target: '_blank'
        }
      : null,
    company.value.faxDisplay
      ? {
          key: 'fax',
          icon: 'i-lucide-printer',
          label: footerMessages.value.faxLabel,
          value: company.value.faxDisplay,
          href: company.value.faxHref
        }
      : null,
    company.value.address
      ? {
          key: 'address',
          icon: 'i-lucide-map-pinned',
          label: footerMessages.value.addressLabel,
          value: company.value.address,
          href: company.value.mapDirectionsUrl,
          target: '_blank'
        }
      : null
  ].filter(
    (
      item
    ): item is {
      key: string
      icon: string
      label: string
      value: string
      href: string
      target?: '_blank'
    } => Boolean(item)
  )
)

const brandProofItems = computed(() =>
  [
    {
      key: 'legal',
      value: brandSupportingLine.value
    },
    {
      key: 'service',
      value: footerMessages.value.brandProofLine
    }
  ].filter((item) => Boolean(item.value))
)

function updateBackToTopVisibility() {
  if (!import.meta.client) return

  isBackToTopVisible.value = window.scrollY > BACK_TO_TOP_REVEAL_OFFSET
}

function handleBackToTop() {
  if (!import.meta.client) return

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateBackToTopVisibility()
  window.addEventListener('scroll', updateBackToTopVisibility, {
    passive: true
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateBackToTopVisibility)
})
</script>

<template>
  <footer class="home-sys-footer">
    <section
      class="home-sys-footer__connector"
      aria-labelledby="footer-connector-heading"
    >
      <figure
        v-motion-parallax="{ yPercent: 6, scale: 1.02, scrub: 0.9 }"
        class="home-sys-footer__connector-media"
        aria-hidden="true"
      >
        <img
          :src="connectorImage.src"
          alt=""
          class="home-sys-footer__connector-media-image"
          @error="handleConnectorImageError"
        />
      </figure>

      <div class="page-sys-shell home-sys-footer__connector-shell">
        <div class="home-sys-footer__connector-layout">
          <div class="home-sys-footer__connector-spacer" aria-hidden="true" />

          <SharedContentHeader
            v-motion-reveal="{
              preset: 'fade-up',
              distance: 18,
              duration: 0.72
            }"
            class="home-sys-footer__connector-copy"
            :title="footerMessages.connectorHeading"
            title-id="footer-connector-heading"
            tone="dark"
            scale="closing"
            density="compact"
            title-tag="h2"
          />

          <div
            v-motion-reveal="{
              preset: 'fade-left',
              distance: 16,
              duration: 0.7
            }"
            class="home-sys-footer__connector-action"
          >
            <UTheme :ui="contrastSolidLightButtonTheme">
              <UButton
                :to="contactPath"
                color="neutral"
                variant="solid"
                size="lg"
                :label="footerMessages.ctaLabel"
                class="home-sys-footer__connector-cta"
              />
            </UTheme>
          </div>
        </div>
      </div>
    </section>

    <section class="home-sys-footer__content-band">
      <div class="page-sys-shell home-sys-footer__content-shell">
        <div
          v-motion-group="{
            children:
              '.home-sys-footer__brand, .home-sys-footer__links, .home-sys-footer__contacts',
            preset: 'fade-up',
            stagger: 0.075,
            distance: 22
          }"
          class="home-sys-footer__content-grid"
        >
          <article class="home-sys-footer__brand">
            <p class="type-sys-headline-s home-sys-footer__brand-line">
              {{ footerMessages.brandLine }}
            </p>
            <ul
              class="home-sys-footer__brand-proof"
              :aria-label="footerMessages.brandLine"
            >
              <li
                v-for="item in brandProofItems"
                :key="item.key"
                class="type-sys-body-s home-sys-footer__brand-subline"
              >
                {{ item.value }}
              </li>
            </ul>

            <img
              src="/images/brand/RallyTech_Logo.svg"
              alt=""
              class="home-sys-footer__brand-mark"
              aria-hidden="true"
            />
          </article>

          <article
            class="home-sys-footer__links"
            aria-labelledby="footer-links-heading"
          >
            <SharedContentHeader
              class="home-sys-footer__section-header"
              :title="footerMessages.linksHeading"
              title-id="footer-links-heading"
              tone="dark"
              scale="block"
              density="compact"
              title-tag="h3"
            />

            <nav
              class="home-sys-footer__link-list"
              :aria-label="footerMessages.linksHeading"
            >
              <NuxtLink
                v-for="item in footerLinkItems"
                :key="item.to"
                :to="item.to"
                class="home-sys-footer__link-item"
              >
                <span class="type-sys-title-m home-sys-footer__link-label">
                  {{ item.label }}
                </span>
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="home-sys-footer__link-icon"
                />
              </NuxtLink>
            </nav>
          </article>

          <article
            class="home-sys-footer__contacts"
            aria-labelledby="footer-contacts-heading"
          >
            <SharedContentHeader
              class="home-sys-footer__section-header"
              :title="footerMessages.contactsHeading"
              title-id="footer-contacts-heading"
              tone="dark"
              scale="block"
              density="compact"
              title-tag="h3"
            />

            <div class="home-sys-footer__contact-list">
              <a
                v-for="item in contactItems"
                :key="item.key"
                :href="item.href"
                :target="item.target"
                :rel="item.target ? 'noreferrer' : undefined"
                class="home-sys-footer__contact-item"
              >
                <UIcon
                  :name="item.icon"
                  class="home-sys-footer__contact-icon"
                />

                <span class="home-sys-footer__contact-copy">
                  <span class="type-sys-title-m home-sys-footer__contact-label">
                    {{ item.label }}
                  </span>
                  <span class="type-sys-body-s home-sys-footer__contact-value">
                    {{ item.value }}
                  </span>
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="home-sys-footer__legal-band">
      <div class="page-sys-shell home-sys-footer__legal-shell">
        <p class="type-sys-label-s home-sys-footer__legal-copy">
          {{ copyrightText }}
        </p>

        <UTheme :ui="iconUtilityEmphasisButtonTheme">
          <UButton
            type="button"
            color="neutral"
            variant="ghost"
            size="sm"
            icon="i-ic-baseline-keyboard-arrow-up"
            :aria-label="footerMessages.backToTopLabel"
            :class="[
              'home-sys-footer__back-to-top',
              {
                'home-sys-footer__back-to-top--visible': isBackToTopVisible
              }
            ]"
            @click="handleBackToTop"
          />
        </UTheme>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.home-sys-footer {
  position: relative;
  overflow: hidden;
  background: var(--color-secondary-950);
  color: var(--color-white);
}

.home-sys-footer::before {
  content: '';
  position: absolute;
  inset-inline: 0;
  top: 0;
  z-index: 2;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(48 187 165 / 0.32) 18%,
    rgb(255 255 255 / 0.16) 50%,
    transparent 84%
  );
  pointer-events: none;
}

.home-sys-footer__connector {
  --connector-band-min-height: 9.2rem;
  --connector-seam-width: 0rem;
  --connector-media-width: 0rem;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(138deg, rgb(255 255 255 / 0.08) 0%, transparent 44%),
    linear-gradient(
      112deg,
      var(--color-surface-signal-start) 0%,
      var(--color-surface-signal-end) 100%
    );
}

.home-sys-footer__connector::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 0.06) 0, transparent 30%),
    linear-gradient(180deg, rgb(255 255 255 / 0.05) 0, transparent 64%);
  opacity: 0.78;
  pointer-events: none;
}

.home-sys-footer__connector::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    102deg,
    rgb(5 12 24 / 0.14) 0,
    transparent 36%,
    rgb(5 12 24 / 0.1) 100%
  );
  pointer-events: none;
}

.home-sys-footer__connector-shell {
  position: relative;
  z-index: 1;
}

.home-sys-footer__connector-layout {
  display: grid;
  gap: 1rem;
  align-items: center;
  min-height: var(--connector-band-min-height);
  padding-block: 1.7rem;
}

.home-sys-footer__connector-media {
  display: none;
}

.home-sys-footer__connector-media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 34% center;
  filter: saturate(0.94) contrast(1.02);
}

.home-sys-footer__connector-spacer {
  display: none;
}

.home-sys-footer__connector-copy {
  justify-content: flex-start;
  --shared-content-header-title-color: var(--color-white);
}

.home-sys-footer__connector-copy :deep(.shared-content-header__title) {
  max-width: 9ch;
}

.home-sys-footer__connector-action {
  display: flex;
  justify-content: flex-start;
}

.home-sys-footer__connector-cta {
  min-width: 8.8rem;
  padding-inline: 1.7rem;
}

.home-sys-footer__content-band {
  background:
    radial-gradient(circle at 18% 12%, rgb(48 187 165 / 0.08), transparent 36%),
    linear-gradient(90deg, rgb(255 255 255 / 0.055) 0, transparent 1px)
      calc(50% - min(50vw, 42rem)) 0 / clamp(10rem, 15vw, 15rem) 100% no-repeat,
    linear-gradient(180deg, rgb(8 16 22 / 0.98) 0%, rgb(7 19 30 / 1) 100%);
}

.home-sys-footer__content-shell {
  margin-inline: auto;
}

.home-sys-footer__content-grid {
  display: grid;
  gap: 2rem;
  padding-block: 2.75rem 2.45rem;
}

.home-sys-footer__brand {
  display: grid;
  align-content: start;
  gap: 0.85rem;
}

.home-sys-footer__brand-mark {
  width: clamp(4.25rem, 6vw, 5rem);
  height: auto;
  margin-top: 0.65rem;
  filter: brightness(0) invert(1);
  opacity: 0.16;
  transform: translateX(-27.1%);
  transform-origin: left center;
}

.home-sys-footer__brand-line {
  color: var(--color-text-inverse);
}

.home-sys-footer__brand-proof {
  display: grid;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-sys-footer__brand-subline {
  max-width: 20rem;
  color: rgb(255 255 255 / 0.58);
}

.home-sys-footer__links {
  display: grid;
  align-content: start;
  gap: 1.05rem;
}

.home-sys-footer__section-header {
  --shared-content-header-title-color: var(--color-text-inverse);
}

.home-sys-footer__link-list {
  display: grid;
  gap: 0.6rem;
  width: min(100%, 22rem);
}

.home-sys-footer__link-item {
  display: flex;
  min-height: 2.65rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  border-bottom: 1px solid rgb(255 255 255 / 0.1);
  color: rgb(255 255 255 / 0.78);
  text-decoration: none;
  transition:
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.home-sys-footer__link-item:hover,
.home-sys-footer__link-item:focus-visible {
  border-color: rgb(48 187 165 / 0.42);
  color: var(--color-white);
  transform: translateX(0.2rem);
}

.home-sys-footer__link-item:focus-visible {
  outline: 2px solid rgb(112 223 205 / 0.52);
  outline-offset: 4px;
}

.home-sys-footer__link-label {
  color: currentColor;
}

.home-sys-footer__link-icon {
  width: 1.05rem;
  height: 1.05rem;
  flex: 0 0 auto;
  color: rgb(112 223 205 / 0.72);
  transition: color 180ms ease;
}

.home-sys-footer__link-item:hover .home-sys-footer__link-icon,
.home-sys-footer__link-item:focus-visible .home-sys-footer__link-icon {
  color: rgb(112 223 205 / 0.98);
}

.home-sys-footer__contacts {
  display: grid;
  align-content: start;
  gap: 1.05rem;
}

.home-sys-footer__contact-list {
  display: grid;
  gap: 0.78rem;
}

.home-sys-footer__contact-item {
  display: grid;
  min-height: 3.35rem;
  grid-template-columns: 2.45rem minmax(0, 1fr);
  gap: 0.95rem;
  align-items: start;
  color: rgb(255 255 255 / 0.78);
  text-decoration: none;
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.home-sys-footer__contact-item:hover .home-sys-footer__contact-label,
.home-sys-footer__contact-item:hover .home-sys-footer__contact-value,
.home-sys-footer__contact-item:focus-visible .home-sys-footer__contact-label,
.home-sys-footer__contact-item:focus-visible .home-sys-footer__contact-value {
  color: var(--color-white);
}

.home-sys-footer__contact-item:hover,
.home-sys-footer__contact-item:focus-visible {
  transform: translateX(0.2rem);
}

.home-sys-footer__contact-item:focus-visible {
  outline: 2px solid rgb(112 223 205 / 0.52);
  outline-offset: 4px;
}

.home-sys-footer__contact-icon {
  width: 2.2rem;
  height: 2.2rem;
  color: rgb(255 255 255 / 0.92);
}

.home-sys-footer__contact-copy {
  display: grid;
  gap: 0.1rem;
}

.home-sys-footer__contact-label {
  color: var(--color-text-inverse);
}

.home-sys-footer__contact-value {
  color: rgb(255 255 255 / 0.82);
}

.home-sys-footer__legal-band {
  border-top: 1px solid rgb(255 255 255 / 0.1);
  background: rgb(7 19 30 / 1);
}

.home-sys-footer__legal-shell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 4.4rem;
  padding-block: 1rem;
}

.home-sys-footer__legal-copy {
  color: rgb(255 255 255 / 0.72);
  text-align: center;
}

.home-sys-footer__back-to-top {
  --back-to-top-enter-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --back-to-top-exit-ease: cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  right: clamp(1rem, 3vw, 1.75rem);
  bottom: clamp(1rem, 3vw, 1.75rem);
  z-index: 40;
  width: 2.85rem;
  height: 2.85rem;
  justify-content: center;
  border-radius: var(--radius-full);
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(0, 0.55rem, 0) scale(0.96);
  transition:
    opacity 260ms var(--back-to-top-exit-ease),
    transform 320ms var(--back-to-top-exit-ease),
    visibility 0s linear 320ms;
  will-change: opacity, transform;
}

.home-sys-footer__back-to-top--visible {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 0) scale(1);
  transition:
    opacity 360ms var(--back-to-top-enter-ease),
    transform 440ms var(--back-to-top-enter-ease),
    visibility 0s linear 0s;
}

@media (prefers-reduced-motion: reduce) {
  .home-sys-footer__back-to-top {
    transform: translate3d(0, 0, 0) scale(1);
    transition:
      opacity 1ms linear,
      visibility 0s linear 1ms;
  }

  .home-sys-footer__back-to-top--visible {
    transition:
      opacity 1ms linear,
      visibility 0s linear 0s;
  }
}

@media (max-width: 767px) {
  .home-sys-footer__connector {
    --connector-band-min-height: clamp(8rem, 34vw, 9rem);
  }

  .home-sys-footer__connector-layout {
    justify-items: center;
    gap: 0.85rem;
    padding-block: clamp(1.35rem, 5.8vw, 1.65rem);
    text-align: center;
  }

  .home-sys-footer__connector-copy {
    justify-content: center;
  }

  .home-sys-footer__connector-copy :deep(.shared-content-header__title) {
    max-width: min(100%, 19rem);
    font-size: clamp(1.55rem, 7vw, 1.85rem);
    line-height: 1.08;
  }

  .home-sys-footer__connector-action {
    justify-content: center;
  }

  .home-sys-footer__connector-cta {
    min-width: 8rem;
    min-height: 2.75rem;
  }

  .home-sys-footer__content-grid {
    justify-items: center;
    gap: 2.15rem;
    text-align: center;
  }

  .home-sys-footer__brand,
  .home-sys-footer__links,
  .home-sys-footer__contacts {
    width: min(100%, 22rem);
    justify-items: center;
  }

  .home-sys-footer__brand-proof,
  .home-sys-footer__brand-subline {
    margin-inline: auto;
  }

  .home-sys-footer__brand-mark {
    width: 4.25rem;
    margin-inline: auto;
    opacity: 0.14;
    transform: none;
  }

  .home-sys-footer__link-list,
  .home-sys-footer__contact-list {
    width: 100%;
  }

  .home-sys-footer__link-item {
    text-align: left;
  }

  .home-sys-footer__contact-list {
    justify-items: stretch;
  }

  .home-sys-footer__contact-item {
    width: 100%;
    text-align: left;
  }
}

@media (min-width: 768px) {
  .home-sys-footer__connector {
    --connector-band-min-height: clamp(9.4rem, 10.8vw, 11.1rem);
    --connector-seam-width: clamp(12.5rem, 14vw, 14.5rem);
    --connector-media-width: clamp(18rem, 22vw, 21rem);
  }

  .home-sys-footer__connector-media {
    display: block;
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    width: var(--connector-media-width);
    margin: 0;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 72% 100%, 0 100%);
  }

  .home-sys-footer__connector-spacer {
    display: block;
    min-height: 1px;
  }

  .home-sys-footer__connector-layout {
    grid-template-columns: var(--connector-seam-width) minmax(0, 1fr) auto;
    gap: clamp(1rem, 1.8vw, 1.85rem);
    padding-block: 1.35rem;
  }

  .home-sys-footer__connector-copy {
    justify-self: center;
    text-align: center;
  }

  .home-sys-footer__connector-copy :deep(.shared-content-header__title) {
    max-width: none;
  }

  .home-sys-footer__connector-action {
    justify-content: flex-end;
  }

  .home-sys-footer__connector-cta {
    min-width: 10rem;
    min-height: 3.25rem;
    padding-inline: 1.9rem;
  }

  .home-sys-footer__content-grid {
    grid-template-columns:
      minmax(13rem, 0.86fr)
      minmax(14.5rem, 0.86fr)
      minmax(18rem, 1fr);
    align-items: start;
    gap: clamp(2.2rem, 3.6vw, 4rem);
    min-height: 16.35rem;
    padding-block: 3.85rem 3.45rem;
  }

  .home-sys-footer__brand {
    align-self: start;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .home-sys-footer__connector-copy :deep(.shared-content-header__title) {
    max-width: min(100%, 11.5ch);
  }

  .home-sys-footer__content-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.35rem 2.6rem;
    min-height: auto;
  }

  .home-sys-footer__brand {
    grid-column: 1 / -1;
    justify-self: center;
    align-self: start;
    max-width: 24rem;
    padding-bottom: 0;
    text-align: center;
  }

  .home-sys-footer__brand-subline {
    margin-inline: auto;
  }

  .home-sys-footer__links,
  .home-sys-footer__contacts {
    min-width: 0;
  }
}

@media (min-width: 1024px) {
  .home-sys-footer__connector {
    --connector-band-min-height: clamp(9.8rem, 11.4vw, 11.4rem);
    --connector-seam-width: clamp(15rem, 17vw, 17.6rem);
    --connector-media-width: clamp(19rem, 23vw, 22rem);
  }

  .home-sys-footer__connector-layout {
    gap: clamp(1.25rem, 2vw, 2.15rem);
  }

  .home-sys-footer__content-grid {
    grid-template-columns:
      minmax(13rem, 0.86fr)
      minmax(15rem, 0.86fr)
      minmax(18rem, 1fr);
    gap: clamp(2.6rem, 4.4vw, 4.75rem);
  }

  .home-sys-footer__content-shell {
    max-width: min(
      calc(100vw - (var(--layout-content-padding-inline) * 2)),
      75rem
    );
  }
}
</style>
