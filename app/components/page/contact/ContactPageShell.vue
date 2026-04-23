<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'
import { darkIconGhostButtonTheme } from '~/utils/button-themes'

const messages = useRallyMessages()
const toast = useToast()
const company = computed(() => messages.value.company)
const contactMessages = computed(() => messages.value.contactPage)
const { resolvedImage: heroImage, handleImageError: handleHeroImageError } =
  useContactPageHeroImageAsset()

const contactFormFieldUi = {
  base: [
    'rounded-sm',
    'bg-white',
    'text-neutral-900',
    'placeholder:text-neutral-400',
    'ring-1',
    'ring-inset',
    'ring-neutral-300',
    'focus-visible:ring-2',
    'focus-visible:ring-primary-700'
  ].join(' ')
} as const

const contactFormTextareaUi = {
  base: [
    'rounded-sm',
    'bg-white',
    'text-neutral-900',
    'placeholder:text-neutral-400',
    'ring-1',
    'ring-inset',
    'ring-neutral-300',
    'focus-visible:ring-2',
    'focus-visible:ring-primary-700',
    'min-h-[8rem]'
  ].join(' ')
} as const

const contactFormFeedbackId = 'contact-form-submit-feedback'
const contactFormFeedbackVisible = ref(false)
const isMapFrameLoaded = ref(false)
const contactFormFeedbackUi = {
  root: 'rounded-sm',
  title: 'type-sys-label-m',
  description: 'type-sys-body-s'
} as const

const formState = reactive({
  name: '',
  company: '',
  email: '',
  subject: '',
  phone: '',
  details: ''
})

const introActions = computed(() => {
  const actions = [
    {
      key: 'phone',
      icon: 'i-lucide-phone-call',
      label: contactMessages.value.actions.phoneLabel,
      href: company.value.phoneHref,
      target: undefined
    },
    company.value.faxDisplay
      ? {
          key: 'fax',
          icon: 'i-lucide-printer',
          label: contactMessages.value.actions.faxLabel,
          href: company.value.faxHref,
          target: undefined
        }
      : null,
    {
      key: 'email',
      icon: 'i-lucide-mail',
      label: contactMessages.value.actions.emailLabel,
      href: company.value.emailHref,
      target: undefined
    },
    {
      key: 'directions',
      icon: 'i-lucide-map-pinned',
      label: contactMessages.value.actions.directionsLabel,
      href: company.value.mapDirectionsUrl,
      target: '_blank'
    }
  ]

  return actions.filter(
    (action): action is NonNullable<(typeof actions)[number]> => Boolean(action)
  )
})

const directContactCards = computed(() => {
  const cards = []

  if (company.value.phoneDisplay) {
    cards.push({
      key: 'phone',
      title: contactMessages.value.direct.cards.phoneTitle,
      primary: {
        value: company.value.phoneDisplay,
        href: company.value.phoneHref
      },
      secondary: company.value.faxDisplay
        ? {
            label: contactMessages.value.direct.cards.faxLabel,
            value: company.value.faxDisplay,
            href: company.value.faxHref
          }
        : null
    })
  }

  if (company.value.address) {
    cards.push({
      key: 'location',
      title: contactMessages.value.direct.cards.locationTitle,
      primary: {
        value: company.value.address,
        href: company.value.mapDirectionsUrl
      },
      secondary: null
    })
  }

  if (company.value.email) {
    cards.push({
      key: 'email',
      title: contactMessages.value.direct.cards.emailTitle,
      primary: {
        value: company.value.email,
        href: company.value.emailHref
      },
      secondary: null
    })
  }

  return cards
})

function handleFormSubmit() {
  contactFormFeedbackVisible.value = true

  toast.add({
    title: contactMessages.value.form.unavailableTitle,
    description: contactMessages.value.form.unavailableDescription,
    icon: 'i-lucide-circle-alert',
    color: 'neutral'
  })
}
</script>

<template>
  <div class="contact-sys-page">
    <PageHeroShell
      class="contact-sys-hero"
      variant="page"
      shell="wide"
      content-align="center"
    >
      <template #media>
        <img
          :src="heroImage.src"
          :alt="heroImage.alt"
          class="contact-sys-hero__image"
          :style="{ objectPosition: heroImage.objectPosition }"
          @error="handleHeroImageError"
        />
      </template>

      <SharedPageHeroTitle :title="contactMessages.hero.title" />
    </PageHeroShell>

    <section class="section-sys-shell contact-sys-main-section">
      <div class="page-sys-shell--wide">
        <div class="content-sys-rail contact-sys-main-grid">
          <article class="contact-sys-copy-panel">
            <SharedSectionIntro
              class="contact-sys-copy-panel__intro"
              :kicker="contactMessages.intro.kicker"
              :title="contactMessages.intro.title"
              tone="light"
              align="start"
              density="compact"
            />

            <SharedTextStack
              class="contact-sys-copy-panel__body"
              :paragraphs="contactMessages.intro.paragraphs"
              tone="light"
              size="md"
              density="compact"
            />

            <div class="contact-sys-copy-panel__actions">
              <UTheme
                v-for="action in introActions"
                :key="action.key"
                :ui="darkIconGhostButtonTheme"
              >
                <UButton
                  :href="action.href"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  :icon="action.icon"
                  class="contact-sys-copy-panel__action"
                  :aria-label="action.label"
                  :title="action.label"
                  :target="action.target"
                  :rel="action.target ? 'noreferrer' : undefined"
                />
              </UTheme>
            </div>
          </article>

          <article class="contact-sys-form-panel">
            <SharedContentHeader
              class="contact-sys-form-panel__header"
              :title="contactMessages.form.title"
              :description="contactMessages.form.description"
              tone="light"
              scale="block"
              density="compact"
              title-tag="h2"
            />

            <form
              class="contact-sys-form"
              :aria-describedby="
                contactFormFeedbackVisible ? contactFormFeedbackId : undefined
              "
              @submit.prevent="handleFormSubmit"
            >
              <div class="contact-sys-form__grid">
                <UFormField
                  :label="contactMessages.form.fields.name.label"
                  required
                  class="contact-sys-form__field"
                >
                  <UInput
                    v-model="formState.name"
                    :placeholder="contactMessages.form.fields.name.placeholder"
                    required
                    class="w-full"
                    :ui="contactFormFieldUi"
                  />
                </UFormField>

                <UFormField
                  :label="contactMessages.form.fields.email.label"
                  required
                  class="contact-sys-form__field"
                >
                  <UInput
                    v-model="formState.email"
                    type="email"
                    :placeholder="contactMessages.form.fields.email.placeholder"
                    required
                    class="w-full"
                    :ui="contactFormFieldUi"
                  />
                </UFormField>

                <UFormField
                  :label="contactMessages.form.fields.company.label"
                  required
                  class="contact-sys-form__field"
                >
                  <UInput
                    v-model="formState.company"
                    :placeholder="
                      contactMessages.form.fields.company.placeholder
                    "
                    required
                    class="w-full"
                    :ui="contactFormFieldUi"
                  />
                </UFormField>

                <UFormField
                  :label="contactMessages.form.fields.subject.label"
                  required
                  class="contact-sys-form__field"
                >
                  <UInput
                    v-model="formState.subject"
                    :placeholder="
                      contactMessages.form.fields.subject.placeholder
                    "
                    required
                    class="w-full"
                    :ui="contactFormFieldUi"
                  />
                </UFormField>

                <UFormField
                  :label="contactMessages.form.fields.phone.label"
                  class="contact-sys-form__field contact-sys-form__field--full"
                >
                  <UInput
                    v-model="formState.phone"
                    type="tel"
                    :placeholder="contactMessages.form.fields.phone.placeholder"
                    class="w-full"
                    :ui="contactFormFieldUi"
                  />
                </UFormField>

                <UFormField
                  :label="contactMessages.form.fields.details.label"
                  required
                  class="contact-sys-form__field contact-sys-form__field--full"
                >
                  <UTextarea
                    v-model="formState.details"
                    :rows="5"
                    :placeholder="
                      contactMessages.form.fields.details.placeholder
                    "
                    required
                    class="w-full"
                    :ui="contactFormTextareaUi"
                  />
                </UFormField>
              </div>

              <div class="contact-sys-form__actions">
                <UButton
                  type="submit"
                  color="primary"
                  variant="solid"
                  size="lg"
                  :label="contactMessages.form.submitLabel"
                  class="contact-sys-form__submit"
                />
              </div>

              <UAlert
                v-if="contactFormFeedbackVisible"
                :id="contactFormFeedbackId"
                class="contact-sys-form__feedback"
                role="status"
                aria-live="polite"
                color="neutral"
                variant="subtle"
                icon="i-lucide-circle-alert"
                :title="contactMessages.form.unavailableTitle"
                :description="contactMessages.form.unavailableDescription"
                :ui="contactFormFeedbackUi"
              />
            </form>
          </article>
        </div>
      </div>
    </section>

    <section class="contact-sys-direct-section">
      <div class="contact-sys-direct-rail">
        <div class="contact-sys-direct-frame">
          <article
            v-for="card in directContactCards"
            :key="card.key"
            class="contact-sys-direct-card"
          >
            <p
              class="type-sys-title-m contact-sys-direct-card__title text-neutral-950"
            >
              {{ card.title }}
            </p>

            <a
              :href="card.primary.href"
              class="type-sys-body-m contact-sys-direct-card__link"
              :target="card.key === 'location' ? '_blank' : undefined"
              :rel="card.key === 'location' ? 'noreferrer' : undefined"
            >
              {{ card.primary.value }}
            </a>

            <div v-if="card.secondary" class="contact-sys-direct-card__meta">
              <p class="type-sys-label-s text-neutral-500">
                {{ card.secondary.label }}
              </p>
              <a
                :href="card.secondary.href"
                class="type-sys-body-s contact-sys-direct-card__link"
              >
                {{ card.secondary.value }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="contact-sys-map-section">
      <div
        class="contact-sys-map-frame"
        :class="{ 'contact-sys-map-frame--loaded': isMapFrameLoaded }"
      >
        <div
          class="contact-sys-map-frame__viewport"
          :aria-label="contactMessages.map.iframeTitle"
        >
          <iframe
            :src="company.mapEmbedUrl"
            class="contact-sys-map-section__iframe"
            loading="eager"
            :title="contactMessages.map.iframeTitle"
            referrerpolicy="no-referrer-when-downgrade"
            @load="isMapFrameLoaded = true"
            @error="isMapFrameLoaded = false"
          />
          <div class="contact-sys-map-frame__overlay" aria-hidden="true" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-sys-page {
  background: var(--color-white);
}

.contact-sys-hero__image {
  object-position: center;
}

.contact-sys-main-section {
  position: relative;
  isolation: isolate;
  padding-block: var(--layout-section-padding-default)
    var(--layout-section-padding-compact);
}

.contact-sys-main-section::after {
  content: none;
}

.contact-sys-main-grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.6rem;
  align-items: start;
}

.contact-sys-copy-panel {
  display: grid;
  gap: 0.8rem;
  max-width: 30rem;
  padding-top: 0.05rem;
}

.contact-sys-copy-panel__body {
  max-width: 27rem;
}

.contact-sys-copy-panel__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding-top: 0.15rem;
}

.contact-sys-copy-panel__action {
  width: 2.55rem;
  height: 2.55rem;
  justify-content: center;
  border-radius: 0;
}

.contact-sys-form-panel {
  border: 0;
  background: transparent;
  padding: 0.05rem 0 0;
  box-shadow: none;
}

.contact-sys-form-panel__header {
  max-width: 32rem;
}

.contact-sys-form {
  display: grid;
  gap: 0.88rem;
  margin-top: 0.75rem;
}

.contact-sys-form__grid {
  display: grid;
  gap: 0.82rem 0.95rem;
}

.contact-sys-form__field {
  min-width: 0;
}

.contact-sys-form__field--full {
  grid-column: 1 / -1;
}

.contact-sys-form__actions {
  display: flex;
  justify-content: flex-start;
}

.contact-sys-form__submit {
  min-width: 9.75rem;
  min-height: 2.95rem;
  justify-content: center;
  border-radius: 0;
  letter-spacing: 0.04em;
}

.contact-sys-form__feedback {
  max-width: 32rem;
}

.contact-sys-form :deep(label) {
  color: color-mix(
    in srgb,
    var(--color-secondary-800) 82%,
    var(--color-primary-700)
  );
  font-size: 0.84rem;
  line-height: 1.35;
}

.contact-sys-form :deep(input) {
  min-height: 2.9rem;
}

.contact-sys-form :deep(textarea) {
  min-height: 7.9rem;
  padding-block: 0.72rem;
}

.contact-sys-direct-section {
  position: relative;
  isolation: isolate;
  padding-block: 0;
  border-top: 1px solid rgb(35 56 82 / 0.08);
  background: var(--color-white);
}

.contact-sys-direct-section::after {
  content: none;
}

.contact-sys-direct-rail {
  width: 100%;
  padding-inline: var(--layout-header-padding-inline);
}

.contact-sys-direct-frame {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.4rem;
  width: 100%;
  padding-block: clamp(1.6rem, 2.8vw, 2.2rem);
}

.contact-sys-direct-card {
  display: grid;
  gap: 0.42rem;
}

.contact-sys-direct-card__title {
  letter-spacing: -0.015em;
}

.contact-sys-direct-card__link {
  color: var(--color-secondary-800);
  text-decoration: none;
  transition: color 180ms ease;
  word-break: break-word;
  line-height: 1.65;
}

.contact-sys-direct-card__link:hover,
.contact-sys-direct-card__link:focus-visible {
  color: var(--color-primary-700);
}

.contact-sys-direct-card__meta {
  display: grid;
  gap: 0.12rem;
}

.contact-sys-map-section {
  padding-block: 0;
  border-top: 1px solid rgb(35 56 82 / 0.08);
  background: var(--color-secondary-950);
}

.contact-sys-map-frame {
  position: relative;
  min-height: clamp(20rem, 70vw, 24rem);
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 18%, rgb(48 187 165 / 0.22), transparent 44%),
    linear-gradient(
      145deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 62%,
      var(--color-secondary-800) 100%
    );
}

.contact-sys-map-frame__viewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgb(255 255 255 / 0.09), transparent 36%),
    repeating-linear-gradient(
      90deg,
      rgb(255 255 255 / 0.04) 0,
      rgb(255 255 255 / 0.04) 1px,
      transparent 1px,
      transparent 3rem
    ),
    repeating-linear-gradient(
      0deg,
      rgb(255 255 255 / 0.035) 0,
      rgb(255 255 255 / 0.035) 1px,
      transparent 1px,
      transparent 3rem
    ),
    color-mix(in srgb, var(--color-secondary-950) 88%, var(--color-primary-700));
}

.contact-sys-map-section__iframe {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  opacity: 0.86;
  filter: saturate(0.84) contrast(0.96) brightness(0.9);
  transition:
    opacity 180ms ease,
    filter 180ms ease;
}

.contact-sys-map-frame--loaded .contact-sys-map-section__iframe {
  opacity: 0.94;
  filter: saturate(0.9) contrast(0.98) brightness(0.94);
}

.contact-sys-map-frame__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(180deg, rgb(4 12 16 / 0.18) 0%, rgb(4 12 16 / 0.34) 100%),
    radial-gradient(circle at 18% 82%, rgb(48 187 165 / 0.32), transparent 34%);
  pointer-events: none;
}

@media (min-width: 768px) {
  .contact-sys-main-grid {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 2.1rem;
  }

  .contact-sys-form__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-sys-direct-frame {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
  }

  .contact-sys-direct-card {
    padding-inline: 1.5rem;
    padding-block: 0.15rem;
  }

  .contact-sys-direct-card + .contact-sys-direct-card {
    border-left: 1px solid rgb(35 56 82 / 0.08);
  }

  .contact-sys-map-frame {
    min-height: clamp(22rem, 42vw, 34rem);
  }
}

@media (min-width: 1024px) {
  .contact-sys-main-grid {
    gap: 2.45rem;
  }
}

@media (max-width: 767px) {
  .contact-sys-copy-panel__body {
    max-width: none;
  }

  .contact-sys-form {
    margin-top: 0.9rem;
  }
}
</style>
