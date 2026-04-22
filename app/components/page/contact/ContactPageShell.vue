<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'

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
              <a
                v-for="action in introActions"
                :key="action.key"
                :href="action.href"
                class="contact-sys-copy-panel__action"
                :aria-label="action.label"
                :title="action.label"
                :target="action.target"
                :rel="action.target ? 'noreferrer' : undefined"
              >
                <UIcon
                  :name="action.icon"
                  class="contact-sys-copy-panel__action-icon size-4"
                />
              </a>
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
      <div class="page-sys-shell--wide">
        <div class="content-sys-rail">
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
      </div>
    </section>

    <section class="contact-sys-map-section">
      <iframe
        :src="company.mapEmbedUrl"
        class="contact-sys-map-section__iframe"
        loading="eager"
        :title="contactMessages.map.iframeTitle"
        referrerpolicy="no-referrer-when-downgrade"
      />
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
  padding-block: clamp(2.75rem, 4.4vw, 3.5rem) clamp(1.1rem, 2vw, 1.6rem);
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
  display: inline-flex;
  width: 2.55rem;
  height: 2.55rem;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  text-decoration: none;
  background: color-mix(
    in srgb,
    var(--color-secondary-900) 82%,
    var(--color-primary-700)
  );
  transition:
    transform 180ms ease,
    background-color 180ms ease;
}

.contact-sys-copy-panel__action:hover,
.contact-sys-copy-panel__action:focus-visible {
  transform: translateY(-1px);
  background: color-mix(
    in srgb,
    var(--color-secondary-800) 74%,
    var(--color-primary-700)
  );
}

.contact-sys-copy-panel__action-icon {
  transform: scale(0.92);
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
  background: color-mix(
    in srgb,
    var(--color-secondary-900) 76%,
    var(--color-primary-700)
  ) !important;
}

.contact-sys-form__submit:hover,
.contact-sys-form__submit:focus-visible {
  background: color-mix(
    in srgb,
    var(--color-secondary-800) 66%,
    var(--color-primary-700)
  ) !important;
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
  padding-block: 0 calc(var(--layout-section-padding-compact) - 1.15rem);
}

.contact-sys-direct-section::after {
  content: none;
}

.contact-sys-direct-frame {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.4rem;
  padding-block: 1rem;
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
  border-top: 1px solid rgb(35 56 82 / 0.08);
}

.contact-sys-map-section__iframe {
  display: block;
  width: 100%;
  min-height: clamp(16.75rem, 21vw, 19.5rem);
  border: 0;
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
    border-top: 1px solid rgb(35 56 82 / 0.08);
    border-bottom: 1px solid rgb(35 56 82 / 0.08);
  }

  .contact-sys-direct-card {
    padding-inline: 1.5rem;
    padding-block: 0.15rem;
  }

  .contact-sys-direct-card + .contact-sys-direct-card {
    border-left: 1px solid rgb(35 56 82 / 0.08);
  }
}

@media (min-width: 1024px) {
  .contact-sys-main-grid {
    gap: 2.45rem;
  }

  .contact-sys-map-section__iframe {
    min-height: 19.75rem;
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
