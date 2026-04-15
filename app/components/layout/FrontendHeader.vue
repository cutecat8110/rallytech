<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { siteLocaleCodes } from '~/composables/useRallyI18n'
import { secondarySolidButtonTheme } from '~/utils/button-themes'
import { enrichServiceCatalog } from '~/utils/services'

const isMobileMenuOpen = ref(false)
const isMobileServicesOpen = ref(false)
const messages = useRallyMessages()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const route = useRoute()
const {
  hasAnyLatestCandidate,
  isImageToggleVisible,
  isNanoEnabled,
  setPreferredMode
} = useHomePageImageMode()

const servicesRootPath = computed(() => localePath('/services'))
const navItems = computed(() =>
  messages.value.nav.items.map((item) => ({
    ...item,
    isServices: item.href === '/services',
    to: resolveNavItemPath(item.href)
  }))
)
const serviceLinks = computed(() =>
  enrichServiceCatalog(messages.value.servicesCatalog).map((item) => ({
    ...item,
    to: localePath(`/services/${item.slug}`),
    isCurrent: route.path === localePath(`/services/${item.slug}`)
  }))
)
const company = computed(() => messages.value.company)
const homePath = computed(() => localePath('/'))
const contactPath = computed(() => localePath('/contact'))
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

const showNanoToggle = computed(() => isImageToggleVisible.value)
const isServicesOverviewRoute = computed(
  () => route.path === servicesRootPath.value
)
const isServicesRoute = computed(
  () =>
    route.path === servicesRootPath.value ||
    route.path.startsWith(`${servicesRootPath.value}/`)
)

const segmentedButtonUi = {
  base: 'h-[1.875rem] justify-center rounded-none px-0 shadow-none ring-0 focus-visible:ring-2 focus-visible:ring-secondary-200/90',
  label: 'tracking-[0.08em]'
} as const

const contactButtonUi = {
  base: '!text-white [&_*]:!text-white',
  label: '!text-white'
} as const

const mobileMenuTriggerUi = {
  leadingIcon: 'size-5 !text-white'
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
  isMobileServicesOpen.value = false
}

function toggleMobileServicesMenu() {
  isMobileServicesOpen.value = !isMobileServicesOpen.value
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

watch(isMobileMenuOpen, (open) => {
  if (!open) {
    isMobileServicesOpen.value = false
    return
  }

  if (isServicesRoute.value) {
    isMobileServicesOpen.value = true
  }
})
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
          <template v-for="item in navItems" :key="item.label">
            <div
              v-if="item.isServices"
              class="home-sys-header__nav-group"
              :class="{ 'home-sys-header__nav-group--active': isServicesRoute }"
            >
              <NuxtLink
                :to="item.to"
                class="type-sys-nav home-sys-header__nav-link home-sys-header__nav-link--services"
                :class="{
                  'home-sys-header__nav-link--active': isServicesRoute
                }"
                :aria-current="isServicesOverviewRoute ? 'page' : undefined"
              >
                <span>{{ item.label }}</span>
                <UIcon
                  name="i-ic-baseline-keyboard-arrow-down"
                  class="home-sys-header__nav-chevron size-4"
                />
              </NuxtLink>

              <div
                class="home-sys-header__services-menu"
                :aria-label="item.label"
              >
                <div class="home-sys-header__services-menu-grid">
                  <NuxtLink
                    v-for="service in serviceLinks"
                    :key="service.slug"
                    :to="service.to"
                    class="home-sys-header__services-menu-link"
                    :class="{
                      'home-sys-header__services-menu-link--active':
                        service.isCurrent
                    }"
                    :aria-current="service.isCurrent ? 'page' : undefined"
                  >
                    <span class="home-sys-header__services-menu-icon">
                      <UIcon :name="service.icon" class="size-4" />
                    </span>
                    <span class="home-sys-header__services-menu-label">
                      {{ service.shortLabel }}
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <NuxtLink
              v-else
              :to="item.to"
              class="type-sys-nav home-sys-header__nav-link"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
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
              size="sm"
              :label="messages.nav.contactCta"
              class="home-sys-header__contact-button hidden md:inline-flex"
              :ui="{
                base: '!text-white [&_*]:!text-white',
                label: '!text-white'
              }"
            />
          </UTheme>

          <div
            v-if="showNanoToggle"
            class="home-sys-header__mobile-image-mode"
            role="group"
            :aria-label="nanoToggleLabel"
          >
            <UButton
              v-for="item in imageModeOptions"
              :key="`mobile-${item.mode}`"
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

          <UButton
            type="button"
            color="neutral"
            variant="outline"
            size="xs"
            :icon="
              isMobileMenuOpen ? 'i-ic-baseline-close' : 'i-ic-baseline-menu'
            "
            :ui="mobileMenuTriggerUi"
            class="size-10 justify-center !border-secondary-800 !bg-secondary-800 !text-white hover:!bg-secondary-700 active:!bg-secondary-800 focus-visible:!bg-secondary-700 lg:hidden"
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
        <template v-for="item in navItems" :key="`mobile-${item.label}`">
          <div v-if="item.isServices" class="home-sys-header__mobile-nav-group">
            <div class="home-sys-header__mobile-nav-row">
              <NuxtLink
                :to="item.to"
                class="type-sys-title-m home-sys-header__mobile-link"
                :class="{
                  'home-sys-header__mobile-link--active': isServicesRoute
                }"
                :aria-current="isServicesOverviewRoute ? 'page' : undefined"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>

              <UButton
                type="button"
                color="neutral"
                variant="ghost"
                size="sm"
                :icon="
                  isMobileServicesOpen
                    ? 'i-ic-baseline-keyboard-arrow-up'
                    : 'i-ic-baseline-keyboard-arrow-down'
                "
                class="home-sys-header__mobile-services-toggle"
                :aria-expanded="isMobileServicesOpen ? 'true' : 'false'"
                aria-controls="mobile-services-submenu"
                :aria-label="item.label"
                @click.stop="toggleMobileServicesMenu"
              />
            </div>

            <div
              v-if="isMobileServicesOpen"
              id="mobile-services-submenu"
              class="home-sys-header__mobile-services-list"
            >
              <NuxtLink
                v-for="service in serviceLinks"
                :key="`mobile-service-${service.slug}`"
                :to="service.to"
                class="home-sys-header__mobile-service-link"
                :class="{
                  'home-sys-header__mobile-service-link--active':
                    service.isCurrent
                }"
                :aria-current="service.isCurrent ? 'page' : undefined"
                @click="closeMobileMenu"
              >
                <span
                  class="home-sys-header__mobile-service-label type-sys-label-s"
                >
                  {{ service.shortLabel }}
                </span>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            v-else
            :to="item.to"
            class="type-sys-title-m home-sys-header__mobile-link"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </template>
        <UTheme :ui="secondarySolidButtonTheme">
          <UButton
            :to="contactPath"
            color="neutral"
            variant="solid"
            size="md"
            block
            :label="messages.nav.contactCta"
            class="home-sys-header__contact-button mt-2 !text-white [&_*]:!text-white"
            :ui="contactButtonUi"
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
  align-items: center;
  gap: 1.05rem;
  justify-self: center;
}

.home-sys-header__nav-group {
  position: relative;
  display: flex;
  align-items: center;
}

.home-sys-header__nav-link {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  gap: 0.16rem;
  color: var(--color-text-secondary);
  transition: color 180ms ease;
}

.home-sys-header__nav-link:hover,
.home-sys-header__nav-link:focus-visible,
.home-sys-header__nav-link--active,
.home-sys-header__nav-group:hover .home-sys-header__nav-link--services,
.home-sys-header__nav-group:focus-within .home-sys-header__nav-link--services {
  color: var(--color-primary-700);
}

.home-sys-header__nav-chevron {
  transition: transform 180ms ease;
}

.home-sys-header__nav-group:hover .home-sys-header__nav-chevron,
.home-sys-header__nav-group:focus-within .home-sys-header__nav-chevron {
  transform: rotate(180deg);
}

.home-sys-header__services-menu {
  position: absolute;
  top: calc(100% + 0.55rem);
  left: 50%;
  z-index: 30;
  width: min(34rem, 72vw);
  padding: 0.6rem;
  border: 1px solid rgb(10 18 22 / 0.08);
  border-radius: var(--radius-xl);
  background: rgb(255 255 255 / 0.98);
  box-shadow:
    0 22px 46px rgb(6 20 27 / 0.12),
    0 8px 18px rgb(6 20 27 / 0.06);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, 0.55rem);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
  backdrop-filter: blur(14px);
}

.home-sys-header__nav-group:hover .home-sys-header__services-menu,
.home-sys-header__nav-group:focus-within .home-sys-header__services-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.home-sys-header__services-menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem;
}

.home-sys-header__services-menu-link {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.65rem;
  min-height: 3rem;
  padding: 0.72rem 0.8rem;
  border: 1px solid transparent;
  border-radius: var(--radius-l);
  color: var(--color-text-secondary);
  background: transparent;
  transition:
    color 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    transform 180ms ease;
}

.home-sys-header__services-menu-link:hover,
.home-sys-header__services-menu-link:focus-visible {
  color: var(--color-primary-700);
  border-color: rgb(48 187 165 / 0.18);
  background: color-mix(in srgb, var(--color-primary-50) 76%, white);
  transform: translateY(-1px);
}

.home-sys-header__services-menu-link--active {
  color: var(--color-secondary-950);
  border-color: rgb(48 187 165 / 0.22);
  background: linear-gradient(
    120deg,
    color-mix(in srgb, var(--color-primary-50) 88%, white) 0%,
    color-mix(in srgb, var(--color-secondary-50) 64%, white) 100%
  );
}

.home-sys-header__services-menu-icon {
  display: inline-flex;
  width: 1.95rem;
  height: 1.95rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(10 18 22 / 0.08);
  color: var(--color-primary-700);
  background: rgb(255 255 255 / 0.92);
}

.home-sys-header__services-menu-label {
  min-width: 0;
  line-height: 1.3;
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

.home-sys-header__mobile-image-mode {
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
  background: var(--color-secondary-800) !important;
  min-height: 2.6rem;
  padding-inline: 1.15rem;
  border-radius: 0;
  letter-spacing: 0.06em;
}

.home-sys-header__contact-button :deep(*) {
  color: currentColor !important;
}

.home-sys-header__contact-button:hover,
.home-sys-header__contact-button:focus-visible {
  color: var(--color-white) !important;
  background: var(--color-secondary-700) !important;
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

.home-sys-header__mobile-nav-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.home-sys-header__mobile-nav-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.home-sys-header__mobile-link {
  display: inline-flex;
  min-height: 3rem;
  flex: 1;
  align-items: center;
  border-radius: var(--radius-l);
  padding-inline: 0.75rem;
  color: var(--color-text-secondary);
  transition:
    color 180ms ease,
    background-color 180ms ease;
}

.home-sys-header__mobile-link:hover,
.home-sys-header__mobile-link:focus-visible,
.home-sys-header__mobile-link--active {
  color: var(--color-primary-700);
  background: color-mix(in srgb, var(--color-primary-50) 72%, white);
}

.home-sys-header__mobile-services-toggle {
  width: 2.9rem;
  height: 2.9rem;
  justify-content: center;
  border: 1px solid rgb(10 18 22 / 0.08);
  color: var(--color-text-secondary);
  background: rgb(255 255 255 / 0.96);
}

.home-sys-header__mobile-services-list {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-left: 0.95rem;
  padding-left: 1rem;
  border-left: 1px solid rgb(10 18 22 / 0.08);
}

.home-sys-header__mobile-service-link {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 0;
  min-height: 2.5rem;
  padding: 0.35rem 0.2rem 0.35rem 0;
  color: var(--color-text-secondary);
  transition: color 180ms ease;
}

.home-sys-header__mobile-service-link:hover,
.home-sys-header__mobile-service-link:focus-visible,
.home-sys-header__mobile-service-link--active {
  color: var(--color-primary-700);
}

.home-sys-header__mobile-service-label {
  line-height: 1.35;
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
  .home-sys-header__mobile-image-mode {
    display: inline-flex;
  }

  .home-sys-header__main {
    grid-template-columns: minmax(8rem, 1fr) auto auto;
    gap: 0.65rem;
    min-height: 4rem;
    padding-block: 0.6rem;
  }

  .home-sys-header__mobile-image-mode .home-sys-header__image-mode-button {
    width: 2.65rem;
  }
}
</style>
