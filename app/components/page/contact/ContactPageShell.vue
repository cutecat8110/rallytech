<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref
} from 'vue'
import PageHeroShell from '~/components/shared/PageHeroShell.vue'
import SharedContentHeader from '~/components/shared/SharedContentHeader.vue'
import SharedPageHeroTitle from '~/components/shared/SharedPageHeroTitle.vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'
import SharedTextStack from '~/components/shared/SharedTextStack.vue'
import { iconUtilityLightButtonTheme } from '~/utils/button-themes'

type ContactFormStatus = 'idle' | 'success' | 'error'

type TurnstileInstance = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
}

type TurnstileRenderOptions = {
  sitekey: string
  action: string
  theme: 'auto'
  size: 'flexible'
  callback: (token: string) => void
} & Record<
  | 'error-callback'
  | 'expired-callback'
  | 'timeout-callback'
  | 'unsupported-callback',
  () => void
>

declare global {
  interface Window {
    turnstile?: TurnstileInstance
  }
}

const messages = useRallyMessages()
const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const { locale } = useI18n()
const company = computed(() => messages.value.company)
const contactMessages = computed(() => messages.value.contactPage)
const { resolvedImage: heroImage, handleImageError: handleHeroImageError } =
  useContactPageHeroImageAsset()

const contactFormFieldUi = {
  base: [
    'rounded-md',
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
    'rounded-md',
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
const contactFormStatus = ref<ContactFormStatus>('idle')
const contactFormFeedbackDescription = ref('')
const isMapFrameLoaded = ref(false)
const isSubmitting = ref(false)
const isTurnstileLoading = ref(false)
const isTurnstileReady = ref(false)
const turnstileContainer = ref<HTMLElement | null>(null)
const turnstileWidgetId = ref<string | null>(null)
const turnstileToken = ref('')
const contactFormFeedbackUi = {
  root: 'rounded-md',
  title: 'type-sys-label-m',
  description: 'type-sys-body-s'
} as const

const contactQuickActionUi = {
  base: 'ring-0 hover:ring-0 active:ring-0 focus-visible:ring-0'
} as const

interface DirectContactCard {
  key: 'phone' | 'location' | 'email'
  title: string
  primary: {
    value: string
    href: string
  }
  secondary: {
    label: string
    value: string
    href: string
  } | null
}

const formState = reactive({
  name: '',
  company: '',
  email: '',
  subject: '',
  phone: '',
  details: ''
})

const turnstileSiteKey = computed(
  () => runtimeConfig.public.turnstileSiteKey || ''
)

const isSubmitDisabled = computed(
  () =>
    isSubmitting.value ||
    !turnstileSiteKey.value ||
    !turnstileToken.value ||
    !isTurnstileReady.value
)

const contactFormFeedbackTitle = computed(() => {
  if (contactFormStatus.value === 'success') {
    return contactMessages.value.form.successTitle
  }

  if (contactFormStatus.value === 'error') {
    return contactMessages.value.form.errorTitle
  }

  return contactMessages.value.form.unavailableTitle
})

const contactFormFeedbackIcon = computed(() => {
  if (contactFormStatus.value === 'success') {
    return 'i-lucide-circle-check'
  }

  if (contactFormStatus.value === 'error') {
    return 'i-lucide-circle-alert'
  }

  return 'i-lucide-circle-alert'
})

const contactFormFeedbackColor = computed(() => {
  if (contactFormStatus.value === 'success') {
    return 'success'
  }

  if (contactFormStatus.value === 'error') {
    return 'error'
  }

  return 'neutral'
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
  const cards: DirectContactCard[] = []

  if (company.value.phoneDisplay) {
    cards.push({
      key: 'phone',
      title: contactMessages.value.direct.cards.phoneTitle,
      primary: {
        value: company.value.phoneDisplay,
        href: company.value.phoneHref
      },
      secondary: null
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

onMounted(() => {
  void renderTurnstile()
})

onBeforeUnmount(() => {
  if (!turnstileWidgetId.value) {
    return
  }

  window.turnstile?.remove(turnstileWidgetId.value)
})

async function handleFormSubmit() {
  if (isSubmitting.value) {
    return
  }

  if (!turnstileToken.value) {
    showContactFormError(
      contactMessages.value.form.verificationRequiredDescription
    )

    toast.add({
      title: contactMessages.value.form.errorTitle,
      description: contactMessages.value.form.verificationRequiredDescription,
      icon: 'i-lucide-circle-alert',
      color: 'error'
    })

    return
  }

  isSubmitting.value = true
  contactFormFeedbackVisible.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...formState,
        locale: locale.value,
        turnstileToken: turnstileToken.value
      }
    })

    resetContactForm()
    contactFormStatus.value = 'success'
    contactFormFeedbackDescription.value =
      contactMessages.value.form.successDescription
    contactFormFeedbackVisible.value = true

    toast.add({
      title: contactMessages.value.form.successTitle,
      description: contactMessages.value.form.successDescription,
      icon: 'i-lucide-circle-check',
      color: 'success'
    })
  } catch (error) {
    const description = resolveSubmitErrorDescription(error)
    showContactFormError(description)

    toast.add({
      title: contactMessages.value.form.errorTitle,
      description,
      icon: 'i-lucide-circle-alert',
      color: 'error'
    })
  } finally {
    isSubmitting.value = false
    resetTurnstile()
  }
}

async function renderTurnstile() {
  if (!turnstileSiteKey.value) {
    showContactFormError(
      contactMessages.value.form.verificationUnavailableDescription
    )
    return
  }

  if (!import.meta.client || turnstileWidgetId.value) {
    return
  }

  isTurnstileLoading.value = true

  try {
    await loadTurnstileScript()
    await nextTick()

    if (!turnstileContainer.value || !window.turnstile) {
      throw new Error('turnstile_unavailable')
    }

    const options: Partial<TurnstileRenderOptions> = {
      sitekey: turnstileSiteKey.value,
      action: 'contact_form',
      theme: 'auto',
      size: 'flexible',
      callback: (token: string) => {
        turnstileToken.value = token
        isTurnstileReady.value = true
      }
    }

    options['error-callback'] = () => {
      turnstileToken.value = ''
      isTurnstileReady.value = false
      showContactFormError(
        contactMessages.value.form.verificationFailedDescription
      )
    }

    options['expired-callback'] = () => {
      turnstileToken.value = ''
      isTurnstileReady.value = false
    }

    options['timeout-callback'] = () => {
      turnstileToken.value = ''
      isTurnstileReady.value = false
    }

    options['unsupported-callback'] = () => {
      turnstileToken.value = ''
      isTurnstileReady.value = false
      showContactFormError(
        contactMessages.value.form.verificationUnavailableDescription
      )
    }

    turnstileWidgetId.value = window.turnstile.render(
      turnstileContainer.value,
      options as TurnstileRenderOptions
    )
  } catch {
    showContactFormError(
      contactMessages.value.form.verificationUnavailableDescription
    )
  } finally {
    isTurnstileLoading.value = false
  }
}

function loadTurnstileScript() {
  if (window.turnstile) {
    return Promise.resolve()
  }

  const existingScript = document.querySelector<HTMLScriptElement>(
    'script[data-rally-turnstile]'
  )

  if (existingScript) {
    return new Promise<void>((resolve, reject) => {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener('error', () => reject(), { once: true })
    })
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.dataset.rallyTurnstile = 'true'
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(), { once: true })
    document.head.appendChild(script)
  })
}

function resetTurnstile() {
  turnstileToken.value = ''
  isTurnstileReady.value = false

  if (turnstileWidgetId.value) {
    window.turnstile?.reset(turnstileWidgetId.value)
  }
}

function resetContactForm() {
  formState.name = ''
  formState.company = ''
  formState.email = ''
  formState.subject = ''
  formState.phone = ''
  formState.details = ''
}

function showContactFormError(description: string) {
  contactFormStatus.value = 'error'
  contactFormFeedbackDescription.value = description
  contactFormFeedbackVisible.value = true
}

function resolveSubmitErrorDescription(error: unknown) {
  const statusCode = getFetchStatusCode(error)

  if (statusCode === 429) {
    return contactMessages.value.form.rateLimitedDescription
  }

  if (statusCode === 400) {
    return contactMessages.value.form.validationErrorDescription
  }

  if (statusCode === 502 || statusCode === 503) {
    return contactMessages.value.form.serviceErrorDescription
  }

  return contactMessages.value.form.submitErrorDescription
}

function getFetchStatusCode(error: unknown) {
  if (typeof error !== 'object' || error === null) {
    return undefined
  }

  if ('statusCode' in error && typeof error.statusCode === 'number') {
    return error.statusCode
  }

  if ('status' in error && typeof error.status === 'number') {
    return error.status
  }

  return undefined
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
          <article
            v-motion-reveal="{
              preset: 'fade-right',
              distance: 22,
              duration: 0.72
            }"
            class="contact-sys-copy-panel"
          >
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
                :ui="iconUtilityLightButtonTheme"
              >
                <UButton
                  :href="action.href"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  :icon="action.icon"
                  class="contact-sys-copy-panel__action"
                  :ui="contactQuickActionUi"
                  :aria-label="action.label"
                  :title="action.label"
                  :target="action.target"
                  :rel="action.target ? 'noreferrer' : undefined"
                />
              </UTheme>
            </div>
          </article>

          <article
            v-motion-reveal="{
              preset: 'fade-left',
              distance: 22,
              duration: 0.72,
              mobile: 'reduced'
            }"
            class="contact-sys-form-panel"
          >
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

              <div class="contact-sys-form__turnstile">
                <div
                  v-if="turnstileSiteKey"
                  ref="turnstileContainer"
                  class="contact-sys-form__turnstile-widget"
                  :aria-label="contactMessages.form.turnstileLabel"
                />
                <p
                  v-if="isTurnstileLoading"
                  class="type-sys-body-s contact-sys-form__turnstile-status"
                >
                  {{ contactMessages.form.verifyingLabel }}
                </p>
              </div>

              <div class="contact-sys-form__actions">
                <UButton
                  type="submit"
                  color="primary"
                  variant="solid"
                  size="lg"
                  :label="
                    isSubmitting
                      ? contactMessages.form.sendingLabel
                      : contactMessages.form.submitLabel
                  "
                  :loading="isSubmitting"
                  :disabled="isSubmitDisabled"
                  class="contact-sys-form__submit"
                />
              </div>

              <UAlert
                v-if="contactFormFeedbackVisible"
                :id="contactFormFeedbackId"
                class="contact-sys-form__feedback"
                role="status"
                aria-live="polite"
                :color="contactFormFeedbackColor"
                variant="subtle"
                :icon="contactFormFeedbackIcon"
                :title="contactFormFeedbackTitle"
                :description="contactFormFeedbackDescription"
                :ui="contactFormFeedbackUi"
              />
            </form>
          </article>
        </div>
      </div>
    </section>

    <section class="contact-sys-direct-section">
      <div class="contact-sys-direct-rail">
        <div
          v-motion-group="{
            children: '.contact-sys-direct-card',
            preset: 'fade-up',
            stagger: 0.08,
            distance: 18
          }"
          class="contact-sys-direct-frame"
        >
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
        v-motion-reveal="{ preset: 'scale-soft', distance: 16, duration: 0.72 }"
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
  color: var(--color-secondary-900);
  background: transparent;
  box-shadow: none;
  justify-content: center;
}

.contact-sys-copy-panel__action:hover,
.contact-sys-copy-panel__action:focus-visible {
  color: var(--color-primary-950);
  background: color-mix(in srgb, var(--color-primary-50) 72%, white);
  box-shadow: none;
}

.contact-sys-copy-panel__action:active {
  color: var(--color-primary-950);
  background: var(--color-primary-100);
  box-shadow: none;
}

.contact-sys-copy-panel__action:focus-visible {
  box-shadow: 0 0 0 2px
    color-mix(in srgb, var(--color-primary-300) 72%, transparent);
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

.contact-sys-form__turnstile {
  display: grid;
  gap: 0.35rem;
  max-width: 32rem;
}

.contact-sys-form__turnstile-widget {
  min-height: 4.25rem;
}

.contact-sys-form__turnstile-status {
  color: var(--color-text-muted);
}

.contact-sys-form__actions {
  display: flex;
  justify-content: flex-start;
}

.contact-sys-form__submit {
  min-width: 9.75rem;
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
  block-size: clamp(18rem, 68vw, 22rem);
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
    block-size: clamp(20rem, 44vw, 26rem);
  }
}

@media (min-width: 1024px) {
  .contact-sys-main-grid {
    gap: 2.45rem;
  }

  .contact-sys-map-frame {
    block-size: clamp(22rem, 30vw, 25rem);
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
