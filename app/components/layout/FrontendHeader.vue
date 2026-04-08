<script setup lang="ts">
import { computed, ref } from 'vue'
import { siteLocaleCodes } from '~/composables/useRallyI18n'
import { secondarySolidButtonTheme } from '~/utils/button-themes'

const isMobileMenuOpen = ref(false)
const messages = useRallyMessages()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const {
  hasAnyLatestCandidate,
  isDevToggleVisible,
  isNanoEnabled,
  setPreferredMode
} = useHomePageImageMode()

const navItems = computed(() =>
  messages.value.nav.items.map((item) => ({
    ...item,
    to: resolveNavItemPath(item.href)
  }))
)
const company = computed(() => messages.value.company)
const homePath = computed(() => localePath('/'))
const contactPath = computed(() => `${homePath.value}#contact`)
const localeLinks = computed(() =>
  siteLocaleCodes.map((code) => ({
    code,
    label: messages.value.nav.languageOptions[code],
    to: switchLocalePath(code) || localePath('/')
  }))
)

const imageModeOptions = [
  { mode: 'stock', label: 'FREE' },
  { mode: 'nano', label: 'AI' }
] as const

const nanoToggleLabel = computed(() =>
  hasAnyLatestCandidate.value
    ? messages.value.nav.nanoToggleAvailable
    : messages.value.nav.nanoToggleUnavailable
)

const showNanoToggle = computed(() => isDevToggleVisible.value)

const segmentedButtonUi = {
  base: 'h-[1.875rem] justify-center rounded-none px-0 shadow-none ring-0 focus-visible:ring-2 focus-visible:ring-secondary-200/90',
  label: 'tracking-[0.08em]'
} as const

const segmentedButtonStateClass = {
  active: 'home-sys-header__segmented-button--active',
  inactive: 'home-sys-header__segmented-button--inactive'
} as const

function getSegmentedButtonStateClass(isActive: boolean) {
  return isActive
    ? segmentedButtonStateClass.active
    : segmentedButtonStateClass.inactive
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function resolveNavItemPath(href: string) {
  if (href.startsWith('/')) {
    return localePath(href)
  }

  if (href.startsWith('#')) {
    return `${homePath.value}${href}`
  }

  return href
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-neutral-200 bg-white">
    <div class="bg-secondary-900 text-white">
      <div class="page-sys-shell--wide">
        <div class="home-sys-header__top">
          <a
            :href="company.phoneHref"
            class="type-sys-nav inline-flex items-center gap-1.5 text-white/82 transition-colors hover:text-white"
          >
            <UIcon name="i-ic-baseline-local-phone" class="size-4" />
            {{ company.phoneDisplay }}
          </a>
          <a
            :href="company.emailHref"
            class="type-sys-nav inline-flex items-center gap-1.5 text-white/86 transition-colors hover:text-white"
          >
            <UIcon name="i-ic-baseline-mail-outline" class="size-4" />
            {{ company.email }}
          </a>
        </div>
      </div>
    </div>

    <div class="page-sys-shell--wide">
      <div class="home-sys-header__main">
        <NuxtLink
          :to="homePath"
          :aria-label="messages.nav.homeAriaLabel"
          class="inline-flex shrink-0 items-center"
        >
          <img
            src="/images/brand/rallytech-logo-text-only.svg"
            :alt="messages.nav.logoAlt"
            class="h-6 w-auto md:h-7"
          />
        </NuxtLink>

        <nav class="home-sys-header__nav hidden lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="type-sys-nav text-neutral-600 transition-colors hover:text-primary-700"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="home-sys-header__actions">
          <div
            v-if="showNanoToggle"
            class="home-sys-header__image-mode"
            role="group"
            :aria-label="nanoToggleLabel"
          >
            <UButton
              v-for="item in imageModeOptions"
              :key="item.mode"
              type="button"
              color="neutral"
              variant="ghost"
              size="xs"
              :label="item.label"
              :disabled="item.mode === 'nano' && !hasAnyLatestCandidate"
              :class="[
                'home-sys-header__segmented-button',
                'home-sys-header__image-mode-button',
                getSegmentedButtonStateClass(
                  (item.mode === 'nano') === isNanoEnabled
                )
              ]"
              :ui="segmentedButtonUi"
              :aria-pressed="
                (item.mode === 'nano') === isNanoEnabled ? 'true' : 'false'
              "
              @click="setPreferredMode(item.mode)"
            />
          </div>

          <div
            class="home-sys-header__locale"
            role="group"
            :aria-label="messages.nav.languageLabel"
          >
            <UButton
              v-for="item in localeLinks"
              :key="item.code"
              :to="item.to"
              color="neutral"
              variant="ghost"
              size="xs"
              :label="item.label"
              :class="[
                'home-sys-header__segmented-button',
                'home-sys-header__locale-button',
                getSegmentedButtonStateClass(locale === item.code)
              ]"
              :ui="segmentedButtonUi"
              :aria-current="locale === item.code ? 'page' : undefined"
            />
          </div>

          <UTheme :ui="secondarySolidButtonTheme">
            <UButton
              :to="contactPath"
              color="neutral"
              variant="solid"
              size="xs"
              :label="messages.nav.contactCta"
              class="home-sys-header__contact-button hidden h-8 md:inline-flex"
              :ui="{ base: 'h-8', label: 'text-white' }"
            />
          </UTheme>

          <UButton
            type="button"
            color="neutral"
            variant="outline"
            size="xs"
            :icon="
              isMobileMenuOpen ? 'i-ic-baseline-close' : 'i-ic-baseline-menu'
            "
            :ui="{ leadingIcon: 'size-5' }"
            class="size-10 justify-center border border-neutral-300 text-neutral-700 hover:bg-neutral-100 lg:hidden"
            :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
            aria-controls="mobile-nav-panel"
            :aria-label="
              isMobileMenuOpen
                ? messages.nav.mobileCloseLabel
                : messages.nav.mobileOpenLabel
            "
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </div>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      id="mobile-nav-panel"
      class="border-t border-neutral-200 bg-white lg:hidden"
    >
      <nav class="page-sys-shell--wide flex flex-col gap-2 py-4">
        <NuxtLink
          v-for="item in navItems"
          :key="`mobile-${item.label}`"
          :to="item.to"
          class="type-sys-title-m px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary-700"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <UTheme :ui="secondarySolidButtonTheme">
          <UButton
            :to="contactPath"
            color="neutral"
            variant="solid"
            size="md"
            block
            :label="messages.nav.contactCta"
            class="home-sys-header__contact-button mt-2"
            @click="closeMobileMenu"
          />
        </UTheme>
        <div
          class="mt-2 grid grid-cols-3 gap-0 border border-secondary-200 bg-secondary-50 p-0"
          role="group"
          :aria-label="messages.nav.languageLabel"
        >
          <UButton
            v-for="item in localeLinks"
            :key="`mobile-locale-${item.code}`"
            :to="item.to"
            color="neutral"
            variant="ghost"
            size="sm"
            :label="item.label"
            :class="[
              'home-sys-header__segmented-button',
              'justify-center',
              getSegmentedButtonStateClass(locale === item.code)
            ]"
            :ui="segmentedButtonUi"
            :aria-current="locale === item.code ? 'page' : undefined"
            @click="closeMobileMenu"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.home-sys-header__top {
  display: flex;
  min-height: 1.85rem;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem 1rem;
  padding-block: 0.14rem;
}

.home-sys-header__main {
  display: grid;
  min-height: 4.25rem;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(1rem, 2.4vw, 2.75rem);
  padding-block: 0.6rem;
}

.home-sys-header__nav {
  display: flex;
  align-items: center;
  gap: 1.35rem;
  justify-self: center;
}

.home-sys-header__actions {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  justify-self: end;
}

.home-sys-header__image-mode {
  display: none;
  align-items: center;
  gap: 0;
  border: 1px solid var(--color-secondary-200);
  background: color-mix(
    in srgb,
    var(--color-secondary-50) 82%,
    var(--color-white)
  );
  padding: 0;
}

.home-sys-header__image-mode-button {
  width: 3rem;
}

.home-sys-header__segmented-button {
  color: color-mix(
    in srgb,
    var(--color-secondary-700) 82%,
    var(--color-white)
  ) !important;
  background: transparent !important;
  transition: background-color 160ms ease;
}

.home-sys-header__segmented-button:not(:disabled):not([aria-disabled='true']) {
  cursor: pointer;
}

.home-sys-header__segmented-button :deep(*) {
  color: currentColor !important;
}

.home-sys-header__segmented-button:hover,
.home-sys-header__segmented-button:focus-visible {
  color: var(--color-white) !important;
  background: var(--color-secondary-600) !important;
}

.home-sys-header__segmented-button--active {
  color: var(--color-white) !important;
  background: var(--color-secondary-600) !important;
}

.home-sys-header__segmented-button--active:hover,
.home-sys-header__segmented-button--active:focus-visible {
  color: var(--color-white) !important;
  background: var(--color-secondary-600) !important;
}

.home-sys-header__segmented-button:disabled,
.home-sys-header__segmented-button[aria-disabled='true'] {
  color: var(--color-neutral-400) !important;
  background: transparent !important;
  opacity: 0.45;
  cursor: not-allowed;
}

.home-sys-header__contact-button {
  color: var(--color-white) !important;
  background: var(--color-secondary-600) !important;
}

.home-sys-header__contact-button :deep(*) {
  color: currentColor !important;
}

.home-sys-header__contact-button:hover,
.home-sys-header__contact-button:focus-visible {
  color: var(--color-white) !important;
  background: var(--color-secondary-600) !important;
}

.home-sys-header__locale {
  display: none;
  align-items: center;
  gap: 0;
  border: 1px solid var(--color-secondary-200);
  background: color-mix(
    in srgb,
    var(--color-secondary-50) 82%,
    var(--color-white)
  );
  padding: 0;
}

.home-sys-header__locale-button {
  min-width: 4.6rem;
}

@media (min-width: 768px) {
  .home-sys-header__image-mode {
    display: inline-flex;
  }

  .home-sys-header__locale {
    display: inline-flex;
  }
}

@media (max-width: 767px) {
  .home-sys-header__main {
    grid-template-columns: minmax(8rem, 1fr) auto auto;
    gap: 0.65rem;
    min-height: 4rem;
    padding-block: 0.6rem;
  }
}
</style>
