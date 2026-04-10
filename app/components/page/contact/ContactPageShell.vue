<script setup lang="ts">
import { computed, reactive } from 'vue'

const messages = useRallyMessages()
const toast = useToast()

const company = computed(() => messages.value.company)
const footerMessages = computed(() => messages.value.footer)
const contactMessages = computed(() => messages.value.contactPage)

const formState = reactive({
  name: '',
  company: '',
  email: '',
  subject: '',
  phone: '',
  details: ''
})

const directContactItems = computed(() =>
  [
    {
      key: 'phone',
      label: footerMessages.value.phoneLabel,
      value: company.value.phoneDisplay,
      href: company.value.phoneHref,
      icon: 'i-lucide-phone'
    },
    {
      key: 'fax',
      label: footerMessages.value.faxLabel,
      value: company.value.faxDisplay,
      href: company.value.faxHref,
      icon: 'i-lucide-printer'
    },
    {
      key: 'email',
      label: footerMessages.value.emailLabel,
      value: company.value.email,
      href: company.value.emailHref,
      icon: 'i-lucide-mail'
    },
    {
      key: 'address',
      label: footerMessages.value.addressLabel,
      value: company.value.address,
      href: '',
      icon: 'i-lucide-map-pin'
    }
  ].filter((item) => item.value)
)

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
      <div class="page-sys-shell--wide relative z-10">
        <div class="content-sys-rail">
          <div class="contact-sys-hero__content">
            <p class="type-sys-kicker text-primary-200 uppercase">
              {{ messages.nav.contactCta }}
            </p>
            <h1 class="type-sys-display-l mt-4 text-white">
              {{ contactMessages.hero.title }}
            </h1>
            <p
              class="contact-sys-hero__description type-sys-body-m mt-4 text-white/84"
            >
              {{ contactMessages.hero.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sys-shell contact-sys-surface">
      <div class="page-sys-shell--wide">
        <div class="content-sys-rail">
          <article class="contact-sys-intro">
            <p class="type-sys-kicker text-primary-700 uppercase">
              {{ messages.nav.contactCta }}
            </p>
            <h2 class="type-sys-headline-l mt-3 text-neutral-950">
              {{ contactMessages.intro.title }}
            </h2>
            <div class="contact-sys-intro__body">
              <p
                v-for="paragraph in contactMessages.intro.paragraphs"
                :key="paragraph"
                class="type-sys-body-m text-neutral-700"
              >
                {{ paragraph }}
              </p>
            </div>
          </article>

          <div class="contact-sys-grid">
            <article class="contact-sys-panel contact-sys-panel--form">
              <div class="contact-sys-panel__header">
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
                      :rows="6"
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

            <aside class="contact-sys-panel contact-sys-panel--direct">
              <div class="contact-sys-panel__header">
                <h2 class="type-sys-headline-s text-neutral-950">
                  {{ contactMessages.direct.title }}
                </h2>
                <p class="type-sys-body-s text-neutral-600">
                  {{ contactMessages.direct.description }}
                </p>
              </div>

              <ul class="contact-sys-direct">
                <li
                  v-for="item in directContactItems"
                  :key="item.key"
                  class="contact-sys-direct__item"
                >
                  <span class="contact-sys-direct__icon" aria-hidden="true">
                    <UIcon :name="item.icon" class="size-4.5" />
                  </span>

                  <div class="contact-sys-direct__body">
                    <p class="type-sys-label-s text-neutral-500">
                      {{ item.label }}
                    </p>

                    <a
                      v-if="item.href"
                      :href="item.href"
                      class="type-sys-body-m contact-sys-direct__link"
                    >
                      {{ item.value }}
                    </a>

                    <p
                      v-else
                      class="type-sys-body-m contact-sys-direct__value text-neutral-900"
                    >
                      {{ item.value }}
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
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
    rgb(247 250 251 / 1) 0%,
    rgb(241 246 248 / 1) 100%
  );
}

.contact-sys-hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 18% 18%, rgb(48 187 165 / 0.22), transparent 26%),
    radial-gradient(circle at 82% 22%, rgb(60 132 255 / 0.16), transparent 26%),
    linear-gradient(
      140deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 58%,
      rgb(13 71 91 / 1) 100%
    );
}

.contact-sys-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 0.08) 0%, transparent 32%),
    repeating-linear-gradient(
      -36deg,
      rgb(255 255 255 / 0.04) 0,
      rgb(255 255 255 / 0.04) 16px,
      transparent 16px,
      transparent 44px
    );
  opacity: 0.68;
  pointer-events: none;
}

.contact-sys-hero__content {
  max-width: 42rem;
  padding-block: clamp(4rem, 8vw, 6rem);
}

.contact-sys-hero__description {
  max-width: 36rem;
}

.contact-sys-surface {
  position: relative;
}

.contact-sys-intro {
  max-width: 44rem;
}

.contact-sys-intro__body {
  display: grid;
  gap: 0.95rem;
  margin-top: 1.2rem;
}

.contact-sys-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact-sys-panel {
  border: 1px solid rgb(34 48 56 / 0.08);
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 0.96),
    rgb(255 255 255 / 0.92)
  );
  box-shadow: 0 20px 44px rgb(10 18 22 / 0.08);
}

.contact-sys-panel--form {
  padding: 1.5rem;
}

.contact-sys-panel--direct {
  padding: 1.4rem 1.25rem;
}

.contact-sys-panel__header {
  display: grid;
  gap: 0.55rem;
}

.contact-sys-form {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.4rem;
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

.contact-sys-direct {
  display: grid;
  gap: 0.9rem;
  margin-top: 1.35rem;
}

.contact-sys-direct__item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: start;
  padding: 0.95rem 1rem;
  border: 1px solid rgb(34 48 56 / 0.08);
  background: rgb(248 251 252 / 0.96);
}

.contact-sys-direct__icon {
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--color-primary-700);
  background: color-mix(
    in srgb,
    var(--color-primary-50) 84%,
    var(--color-white)
  );
}

.contact-sys-direct__body {
  display: grid;
  gap: 0.28rem;
  min-width: 0;
}

.contact-sys-direct__link {
  color: var(--color-secondary-950);
  text-decoration: none;
  transition: color 180ms ease;
}

.contact-sys-direct__link:hover {
  color: var(--color-primary-700);
}

.contact-sys-direct__value {
  word-break: break-word;
}

@media (min-width: 768px) {
  .contact-sys-grid {
    grid-template-columns: minmax(0, 1.15fr) minmax(19rem, 0.85fr);
    gap: 1.75rem;
    align-items: start;
  }

  .contact-sys-panel--form {
    padding: 1.75rem;
  }

  .contact-sys-panel--direct {
    padding: 1.5rem;
  }

  .contact-sys-form__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.1rem;
  }
}
</style>
