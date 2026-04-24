<script setup lang="ts">
import { computed, ref } from 'vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import {
  contrastSolidLightButtonTheme,
  iconUtilityDarkButtonTheme,
  iconUtilityEmphasisButtonTheme
} from '~/utils/button-themes'

const currentYear = new Date().getFullYear()
const messages = useRallyMessages()
const { t } = useI18n()
const toast = useToast()
const localePath = useLocalePath()
const newsletterEmail = ref('')
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

const primaryContactItems = computed(() => [
  {
    key: 'phone',
    icon: 'i-lucide-phone-call',
    label: footerMessages.value.phoneLabel,
    value: company.value.phoneDisplay,
    href: company.value.phoneHref
  },
  {
    key: 'email',
    icon: 'i-lucide-mail',
    label: footerMessages.value.emailLabel,
    value: company.value.email,
    href: company.value.emailHref
  }
])

const contactMetaItems = computed(() =>
  [
    company.value.faxDisplay
      ? {
          key: 'fax',
          label: footerMessages.value.faxLabel,
          value: company.value.faxDisplay,
          href: company.value.faxHref
        }
      : null,
    company.value.address
      ? {
          key: 'address',
          label: footerMessages.value.addressLabel,
          value: company.value.address,
          href: company.value.mapDirectionsUrl
        }
      : null
  ].filter(
    (
      item
    ): item is {
      key: string
      label: string
      value: string
      href: string
    } => Boolean(item)
  )
)

const newsletterInputUi = {
  base: [
    'rounded-none',
    'border-0',
    'bg-white/10',
    'text-white',
    'placeholder:text-white/52',
    'ring-1',
    'ring-inset',
    'ring-white/12',
    'shadow-none',
    'min-h-[3.2rem]',
    'pr-16',
    'pl-4',
    'focus-visible:ring-2',
    'focus-visible:ring-white/28'
  ].join(' ')
} as const

const newsletterSubmitUi = {
  base: 'justify-center px-0 py-0 gap-0 ring-0 shadow-none'
} as const

function handleNewsletterSubmit() {
  toast.add({
    title: footerMessages.value.newsletterUnavailableTitle,
    description: footerMessages.value.newsletterUnavailableDescription,
    icon: 'i-lucide-circle-alert'
  })

  newsletterEmail.value = ''
}

function handleBackToTop() {
  if (!import.meta.client) return

  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="home-sys-footer">
    <section
      class="home-sys-footer__connector"
      aria-labelledby="footer-connector-heading"
    >
      <figure class="home-sys-footer__connector-media" aria-hidden="true">
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
            class="home-sys-footer__connector-copy"
            :title="footerMessages.connectorHeading"
            title-id="footer-connector-heading"
            tone="dark"
            scale="closing"
            density="compact"
            title-tag="h2"
          />

          <div class="home-sys-footer__connector-action">
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
      <div class="page-sys-shell">
        <div class="home-sys-footer__content-grid">
          <article class="home-sys-footer__brand">
            <p class="type-sys-headline-s home-sys-footer__brand-line">
              {{ footerMessages.brandLine }}
            </p>
            <p
              v-if="brandSupportingLine"
              class="type-sys-body-s home-sys-footer__brand-subline"
            >
              {{ brandSupportingLine }}
            </p>
          </article>

          <article
            class="home-sys-footer__newsletter"
            aria-labelledby="footer-newsletter-heading"
          >
            <SharedContentHeader
              class="home-sys-footer__section-header home-sys-footer__section-header--newsletter"
              :title="footerMessages.newsletterHeading"
              :description="footerMessages.newsletterDescription"
              title-id="footer-newsletter-heading"
              tone="dark"
              scale="block"
              density="compact"
              title-tag="h3"
            />

            <form
              class="home-sys-footer__newsletter-form"
              @submit.prevent="handleNewsletterSubmit"
            >
              <div class="home-sys-footer__newsletter-field">
                <UInput
                  v-model="newsletterEmail"
                  type="email"
                  required
                  :placeholder="footerMessages.newsletterPlaceholder"
                  class="w-full"
                  :ui="newsletterInputUi"
                />

                <UTheme :ui="iconUtilityDarkButtonTheme">
                  <UButton
                    type="submit"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    icon="i-lucide-send"
                    :aria-label="footerMessages.newsletterButtonLabel"
                    :ui="newsletterSubmitUi"
                    class="home-sys-footer__newsletter-submit"
                  />
                </UTheme>
              </div>
            </form>
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
                v-for="item in primaryContactItems"
                :key="item.key"
                :href="item.href"
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

            <dl
              v-if="contactMetaItems.length"
              class="home-sys-footer__contact-meta"
            >
              <div
                v-for="item in contactMetaItems"
                :key="item.key"
                class="home-sys-footer__contact-meta-item"
              >
                <dt
                  class="type-sys-label-s home-sys-footer__contact-meta-label"
                >
                  {{ item.label }}
                </dt>
                <dd class="type-sys-body-s home-sys-footer__contact-meta-value">
                  <a
                    :href="item.href"
                    class="home-sys-footer__contact-meta-link"
                  >
                    {{ item.value }}
                  </a>
                </dd>
              </div>
            </dl>
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
            class="home-sys-footer__back-to-top"
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
    linear-gradient(180deg, rgb(8 16 22 / 0.98) 0%, rgb(7 19 30 / 1) 100%);
}

.home-sys-footer__content-grid {
  display: grid;
  gap: 2rem;
  padding-block: 2.75rem 2.45rem;
}

.home-sys-footer__brand {
  display: grid;
  gap: 0.3rem;
}

.home-sys-footer__brand-line {
  color: var(--color-text-inverse);
}

.home-sys-footer__brand-subline {
  max-width: 20rem;
  color: rgb(255 255 255 / 0.58);
}

.home-sys-footer__newsletter {
  display: grid;
  gap: 0.9rem;
}

.home-sys-footer__section-header {
  --shared-content-header-title-color: var(--color-text-inverse);
}

.home-sys-footer__section-header--newsletter
  :deep(.shared-content-header__description) {
  max-width: 24rem;
}

.home-sys-footer__newsletter-form {
  margin-top: 0.2rem;
}

.home-sys-footer__newsletter-field {
  position: relative;
  max-width: 22rem;
}

.home-sys-footer__newsletter-submit {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 0.35rem;
  width: 2.55rem;
  height: 2.55rem;
  transform: translateY(-50%);
  justify-content: center;
}

.home-sys-footer__contacts {
  display: grid;
  gap: 1rem;
}

.home-sys-footer__contact-list {
  display: grid;
  gap: 1rem;
}

.home-sys-footer__contact-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: center;
  text-decoration: none;
}

.home-sys-footer__contact-item:hover .home-sys-footer__contact-label,
.home-sys-footer__contact-item:hover .home-sys-footer__contact-value,
.home-sys-footer__contact-item:focus-visible .home-sys-footer__contact-label,
.home-sys-footer__contact-item:focus-visible .home-sys-footer__contact-value {
  color: var(--color-white);
}

.home-sys-footer__contact-icon {
  width: 2.35rem;
  height: 2.35rem;
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

.home-sys-footer__contact-meta {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding-top: 0.15rem;
}

.home-sys-footer__contact-meta-item {
  display: grid;
  gap: 0.15rem;
}

.home-sys-footer__contact-meta-label {
  color: rgb(255 255 255 / 0.5);
}

.home-sys-footer__contact-meta-value {
  margin: 0;
}

.home-sys-footer__contact-meta-link {
  color: rgb(255 255 255 / 0.72);
  text-decoration: none;
}

.home-sys-footer__contact-meta-link:hover,
.home-sys-footer__contact-meta-link:focus-visible {
  color: var(--color-white);
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
  position: absolute;
  inset-inline-end: var(--layout-content-padding-inline);
  top: 50%;
  width: 2.85rem;
  height: 2.85rem;
  transform: translateY(-50%);
  justify-content: center;
}

@media (max-width: 767px) {
  .home-sys-footer__connector-layout {
    justify-items: start;
  }

  .home-sys-footer__connector-copy :deep(.shared-content-header__title) {
    max-width: 8ch;
  }

  .home-sys-footer__connector-cta {
    min-width: 8rem;
    min-height: 2.9rem;
  }

  .home-sys-footer__legal-shell {
    padding-inline-end: calc(var(--layout-content-padding-inline) + 3.8rem);
  }
}

@media (min-width: 768px) {
  .home-sys-footer__connector {
    --connector-band-min-height: clamp(9.4rem, 10.8vw, 11.1rem);
    --connector-seam-width: clamp(14rem, 16vw, 16.5rem);
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
      minmax(0, 0.75fr)
      minmax(18rem, 1.05fr)
      minmax(16rem, 0.9fr);
    gap: clamp(1.8rem, 3vw, 3.4rem);
    min-height: 16.35rem;
    padding-block: 3.85rem 3.45rem;
  }

  .home-sys-footer__brand {
    align-self: end;
    padding-bottom: 0.15rem;
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
    gap: clamp(2.25rem, 3.2vw, 3.9rem);
  }
}
</style>
