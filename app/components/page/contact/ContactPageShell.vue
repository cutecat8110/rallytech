<script setup lang="ts">
import { computed, reactive } from 'vue'

const messages = useRallyMessages()
const toast = useToast()
const company = computed(() => messages.value.company)
const contactMessages = computed(() => messages.value.contactPage)
const { resolvedImage: heroImage, handleImageError: handleHeroImageError } =
  useContactPageHeroImageAsset()

const formState = reactive({
  name: '',
  company: '',
  email: '',
  subject: '',
  phone: '',
  details: ''
})

const directContactCards = computed(() => {
  const cards = []

  if (company.value.phoneDisplay) {
    cards.push({
      key: 'phone',
      icon: 'i-lucide-phone',
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
      icon: 'i-lucide-map-pin',
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
      icon: 'i-lucide-mail',
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
  toast.add({
    title: contactMessages.value.form.unavailableTitle,
    description: contactMessages.value.form.unavailableDescription,
    icon: 'i-lucide-circle-alert'
  })
}
</script>

<template>
  <div class="contact-sys-page">
    <section class="contact-sys-hero">
      <div class="contact-sys-hero__media" aria-hidden="true">
        <img
          :src="heroImage.src"
          :alt="heroImage.alt"
          class="contact-sys-hero__image"
          :style="{ objectPosition: heroImage.objectPosition }"
          @error="handleHeroImageError"
        />
      </div>

      <div class="contact-sys-hero__overlay" aria-hidden="true" />

      <div class="page-sys-shell--wide relative z-10">
        <div class="content-sys-rail">
          <div class="contact-sys-hero__content">
            <p class="type-sys-kicker contact-sys-hero__eyebrow">
              {{ messages.nav.contactCta }}
            </p>
            <h1 class="type-sys-display-l text-white">
              {{ contactMessages.hero.title }}
            </h1>
            <p
              class="contact-sys-hero__description type-sys-body-m text-white/84"
            >
              {{ contactMessages.hero.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sys-shell contact-sys-main-section">
      <div class="page-sys-shell--wide">
        <div class="content-sys-rail">
          <div class="contact-sys-main-grid">
            <article class="contact-sys-copy-panel">
              <p class="type-sys-kicker text-primary-700 uppercase">
                {{ messages.nav.contactCta }}
              </p>
              <h2 class="type-sys-headline-l mt-3 text-neutral-950">
                {{ contactMessages.intro.title }}
              </h2>

              <div class="contact-sys-copy-panel__body">
                <p
                  v-for="paragraph in contactMessages.intro.paragraphs"
                  :key="paragraph"
                  class="type-sys-body-m text-neutral-700"
                >
                  {{ paragraph }}
                </p>
              </div>

              <div class="contact-sys-copy-panel__meta">
                <p class="type-sys-label-s text-neutral-500">
                  {{ company.legalName }}
                </p>
                <p class="type-sys-body-s text-neutral-600">
                  {{ company.address }}
                </p>
              </div>
            </article>

            <article class="contact-sys-form-panel">
              <div class="contact-sys-form-panel__header">
                <h2 class="type-sys-headline-s text-neutral-950">
                  {{ contactMessages.form.title }}
                </h2>
                <p class="type-sys-body-s text-neutral-600">
                  {{ contactMessages.form.description }}
                </p>
              </div>

              <form class="contact-sys-form" @submit.prevent="handleFormSubmit">
                <div class="contact-sys-form__grid">
                  <UFormField
                    :label="contactMessages.form.fields.name.label"
                    :help="contactMessages.form.fields.name.help"
                    required
                    class="contact-sys-form__field"
                  >
                    <UInput
                      v-model="formState.name"
                      :placeholder="
                        contactMessages.form.fields.name.placeholder
                      "
                      required
                      class="w-full"
                    />
                  </UFormField>

                  <UFormField
                    :label="contactMessages.form.fields.company.label"
                    :help="contactMessages.form.fields.company.help"
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
                    />
                  </UFormField>

                  <UFormField
                    :label="contactMessages.form.fields.email.label"
                    :help="contactMessages.form.fields.email.help"
                    required
                    class="contact-sys-form__field"
                  >
                    <UInput
                      v-model="formState.email"
                      type="email"
                      :placeholder="
                        contactMessages.form.fields.email.placeholder
                      "
                      required
                      class="w-full"
                    />
                  </UFormField>

                  <UFormField
                    :label="contactMessages.form.fields.subject.label"
                    :help="contactMessages.form.fields.subject.help"
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
                    />
                  </UFormField>

                  <UFormField
                    :label="contactMessages.form.fields.phone.label"
                    :help="contactMessages.form.fields.phone.help"
                    class="contact-sys-form__field contact-sys-form__field--full"
                  >
                    <UInput
                      v-model="formState.phone"
                      type="tel"
                      :placeholder="
                        contactMessages.form.fields.phone.placeholder
                      "
                      class="w-full"
                    />
                  </UFormField>

                  <UFormField
                    :label="contactMessages.form.fields.details.label"
                    :help="contactMessages.form.fields.details.help"
                    required
                    class="contact-sys-form__field contact-sys-form__field--full"
                  >
                    <UTextarea
                      v-model="formState.details"
                      :rows="7"
                      :placeholder="
                        contactMessages.form.fields.details.placeholder
                      "
                      required
                      class="w-full"
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
                  />
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sys-shell--compact contact-sys-direct-section">
      <div class="page-sys-shell--wide">
        <div class="content-sys-rail">
          <div class="contact-sys-direct-section__heading">
            <h2 class="type-sys-headline-s text-neutral-950">
              {{ contactMessages.direct.title }}
            </h2>
            <p class="type-sys-body-s text-neutral-600">
              {{ contactMessages.direct.description }}
            </p>
          </div>

          <div class="contact-sys-direct-frame">
            <article
              v-for="card in directContactCards"
              :key="card.key"
              class="contact-sys-direct-card"
            >
              <span class="contact-sys-direct-card__icon" aria-hidden="true">
                <UIcon :name="card.icon" class="size-5" />
              </span>

              <div class="contact-sys-direct-card__body">
                <p class="type-sys-title-m text-neutral-950">
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

                <div
                  v-if="card.secondary"
                  class="contact-sys-direct-card__meta"
                >
                  <p class="type-sys-label-s text-neutral-500">
                    {{ card.secondary.label }}
                  </p>
                  <a
                    :href="card.secondary.href"
                    class="type-sys-body-s contact-sys-direct-card__link contact-sys-direct-card__link--secondary"
                  >
                    {{ card.secondary.value }}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-sys-map-section">
      <div class="page-sys-shell--wide">
        <div class="contact-sys-map">
          <iframe
            :src="company.mapEmbedUrl"
            class="contact-sys-map__iframe"
            loading="lazy"
            :title="contactMessages.map.iframeTitle"
            referrerpolicy="no-referrer-when-downgrade"
          />

          <div class="contact-sys-map__card">
            <p class="type-sys-kicker text-primary-200 uppercase">
              {{ contactMessages.map.eyebrow }}
            </p>
            <h2 class="type-sys-headline-s mt-3 text-white">
              {{ contactMessages.map.title }}
            </h2>
            <p class="type-sys-body-s mt-3 text-white/78">
              {{ contactMessages.map.description }}
            </p>
            <p class="type-sys-body-s mt-4 text-white/90">
              {{ company.address }}
            </p>

            <a
              :href="company.mapDirectionsUrl"
              target="_blank"
              rel="noreferrer"
              class="contact-sys-map__cta type-sys-label-m"
            >
              {{ contactMessages.map.ctaLabel }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-sys-page {
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-secondary-950) 6%, var(--color-white)) 0%,
    var(--color-white) 22%,
    color-mix(in srgb, var(--color-primary-50) 34%, var(--color-white)) 100%
  );
}

.contact-sys-hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: clamp(20rem, 42vw, 33rem);
}

.contact-sys-hero__media,
.contact-sys-hero__overlay {
  position: absolute;
  inset: 0;
}

.contact-sys-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.02);
  transform: scale(1.015);
}

.contact-sys-hero__overlay {
  background:
    linear-gradient(180deg, rgb(10 18 22 / 0.72) 0%, rgb(10 18 22 / 0.8) 100%),
    linear-gradient(90deg, rgb(255 255 255 / 0.06) 0%, transparent 36%),
    radial-gradient(circle at 20% 20%, rgb(48 187 165 / 0.2), transparent 34%);
}

.contact-sys-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgb(255 255 255 / 0.08) 0%, transparent 38%),
    repeating-linear-gradient(
      -38deg,
      rgb(255 255 255 / 0.04) 0,
      rgb(255 255 255 / 0.04) 16px,
      transparent 16px,
      transparent 42px
    );
  opacity: 0.62;
  pointer-events: none;
}

.contact-sys-hero__content {
  display: grid;
  justify-items: center;
  gap: 1rem;
  max-width: 42rem;
  margin-inline: auto;
  padding-block: clamp(5rem, 12vw, 8.5rem) clamp(4.5rem, 10vw, 6.5rem);
  text-align: center;
}

.contact-sys-hero__eyebrow {
  color: var(--color-primary-200);
}

.contact-sys-hero__description {
  max-width: 33rem;
}

.contact-sys-main-section {
  position: relative;
  z-index: 2;
}

.contact-sys-main-grid {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}

.contact-sys-copy-panel {
  display: grid;
  gap: 0.95rem;
  padding-top: 0.35rem;
}

.contact-sys-copy-panel__body {
  display: grid;
  gap: 0.95rem;
}

.contact-sys-copy-panel__meta {
  display: grid;
  gap: 0.35rem;
  margin-top: 0.65rem;
  padding-top: 1rem;
  border-top: 1px solid rgb(34 48 56 / 0.1);
}

.contact-sys-form-panel {
  border: 1px solid rgb(34 48 56 / 0.08);
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 0.98),
    rgb(255 255 255 / 0.94)
  );
  box-shadow:
    0 24px 56px rgb(10 18 22 / 0.12),
    0 10px 24px rgb(10 18 22 / 0.06);
  padding: 1.4rem;
}

.contact-sys-form-panel__header {
  display: grid;
  gap: 0.5rem;
}

.contact-sys-form {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.3rem;
}

.contact-sys-form__grid {
  display: grid;
  gap: 1rem;
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

.contact-sys-direct-section__heading {
  display: grid;
  gap: 0.55rem;
}

.contact-sys-direct-frame {
  display: grid;
  margin-top: 1.25rem;
  border: 1px solid rgb(34 48 56 / 0.08);
  background: rgb(255 255 255 / 0.96);
  box-shadow: 0 18px 40px rgb(10 18 22 / 0.06);
}

.contact-sys-direct-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.95rem;
  align-items: start;
  padding: 1.2rem 1.15rem;
}

.contact-sys-direct-card + .contact-sys-direct-card {
  border-top: 1px solid rgb(34 48 56 / 0.08);
}

.contact-sys-direct-card__icon {
  display: inline-flex;
  width: 2.85rem;
  height: 2.85rem;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-700);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 86%,
    var(--color-white)
  );
}

.contact-sys-direct-card__body {
  display: grid;
  gap: 0.38rem;
}

.contact-sys-direct-card__link {
  color: var(--color-secondary-950);
  text-decoration: none;
  transition: color 180ms ease;
  word-break: break-word;
}

.contact-sys-direct-card__link:hover {
  color: var(--color-primary-700);
}

.contact-sys-direct-card__meta {
  display: grid;
  gap: 0.18rem;
  margin-top: 0.4rem;
}

.contact-sys-direct-card__link--secondary {
  color: var(--color-neutral-700);
}

.contact-sys-map-section {
  padding-bottom: var(--layout-section-padding-default);
}

.contact-sys-map {
  position: relative;
  overflow: hidden;
  border: 1px solid rgb(34 48 56 / 0.08);
  background: var(--color-secondary-950);
  box-shadow: 0 24px 54px rgb(10 18 22 / 0.14);
}

.contact-sys-map__iframe {
  display: block;
  width: 100%;
  min-height: 24rem;
  border: 0;
  filter: grayscale(0.12) contrast(1.02);
}

.contact-sys-map__card {
  position: relative;
  display: grid;
  gap: 0;
  padding: 1.25rem;
  background: linear-gradient(
    145deg,
    rgb(10 18 22 / 0.94) 0%,
    rgb(34 48 56 / 0.92) 100%
  );
}

.contact-sys-map__cta {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  min-height: 2.9rem;
  margin-top: 1rem;
  padding-inline: 1.1rem;
  color: var(--color-white);
  text-decoration: none;
  background: var(--color-primary-700);
  transition:
    background-color 180ms ease,
    transform 180ms ease;
}

.contact-sys-map__cta:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
}

@media (min-width: 768px) {
  .contact-sys-main-grid {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.15fr);
    gap: 1.75rem;
  }

  .contact-sys-form-panel {
    margin-top: -4.25rem;
    padding: 1.7rem;
  }

  .contact-sys-form__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.1rem;
  }

  .contact-sys-direct-frame {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .contact-sys-direct-card + .contact-sys-direct-card {
    border-top: 0;
    border-left: 1px solid rgb(34 48 56 / 0.08);
  }

  .contact-sys-map__iframe {
    min-height: 28rem;
  }

  .contact-sys-map__card {
    position: absolute;
    inset: auto auto 1.25rem 1.25rem;
    width: min(24rem, calc(100% - 2.5rem));
    padding: 1.4rem 1.5rem;
    box-shadow: 0 18px 36px rgb(10 18 22 / 0.26);
  }
}

@media (min-width: 1024px) {
  .contact-sys-hero__content {
    max-width: 46rem;
  }

  .contact-sys-main-grid {
    gap: 2rem;
  }

  .contact-sys-form-panel {
    margin-top: -5rem;
    padding: 1.85rem;
  }
}
</style>
