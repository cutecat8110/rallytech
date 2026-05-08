<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { publicLocaleCodes } from '~/composables/useRallyI18n'
import {
  contrastSolidDarkButtonTheme,
  iconUtilityLightButtonTheme,
  plainIconUtilityLightButtonTheme
} from '~/utils/button-themes'
import { enrichProductCatalog } from '~/utils/products'
import { enrichServiceCatalog } from '~/utils/services'

const isMobileMenuOpen = ref(false)
const isMobileProductsOpen = ref(false)
const isMobileServicesOpen = ref(false)
const messages = useRallyMessages()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const route = useRoute()

const productsRootPath = computed(() => localePath('/products'))
const servicesRootPath = computed(() => localePath('/services'))
const navItems = computed(() =>
  messages.value.nav.items.map((item) => ({
    ...item,
    isProducts: item.href === '/products',
    isServices: item.href === '/services',
    to: resolveNavItemPath(item.href),
    isActive: isNavItemActive(item.href)
  }))
)
const productLinks = computed(() =>
  enrichProductCatalog(messages.value.productsCatalog).map((item) => ({
    ...item,
    to: localePath(`/products/${item.slug}`),
    isCurrent: route.path === localePath(`/products/${item.slug}`)
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
const isContactRoute = computed(() => isLocalizedPathActive(contactPath.value))
const nextLocaleCode = computed(() =>
  locale.value === publicLocaleCodes[0]
    ? publicLocaleCodes[1]
    : publicLocaleCodes[0]
)
const nextLocaleLink = computed(() => ({
  code: nextLocaleCode.value,
  label: messages.value.nav.languageOptions[nextLocaleCode.value],
  to: switchLocalePath(nextLocaleCode.value) || localePath('/')
}))
const nextLocaleShortLabel = computed(() =>
  nextLocaleCode.value === 'en' ? 'EN' : '中'
)
const nextLocaleAriaLabel = computed(
  () => `${messages.value.nav.languageLabel}：${nextLocaleLink.value.label}`
)

const isProductsOverviewRoute = computed(
  () => route.path === productsRootPath.value
)
const isProductsRoute = computed(
  () =>
    route.path === productsRootPath.value ||
    route.path.startsWith(`${productsRootPath.value}/`)
)
const isServicesOverviewRoute = computed(
  () => route.path === servicesRootPath.value
)
const isServicesRoute = computed(
  () =>
    route.path === servicesRootPath.value ||
    route.path.startsWith(`${servicesRootPath.value}/`)
)

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  isMobileProductsOpen.value = false
  isMobileServicesOpen.value = false
}

function toggleMobileProductsMenu() {
  const shouldOpen = !isMobileProductsOpen.value
  isMobileProductsOpen.value = shouldOpen

  if (shouldOpen) {
    isMobileServicesOpen.value = false
  }
}

function toggleMobileServicesMenu() {
  const shouldOpen = !isMobileServicesOpen.value
  isMobileServicesOpen.value = shouldOpen

  if (shouldOpen) {
    isMobileProductsOpen.value = false
  }
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

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }

  return path
}

function isLocalizedPathActive(path: string) {
  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(path)

  if (targetPath === '/') {
    return currentPath === '/'
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}

function isNavItemActive(href: string) {
  if (href === '/products') {
    return isProductsRoute.value
  }

  if (href === '/services') {
    return isServicesRoute.value
  }

  return isLocalizedPathActive(resolveNavItemPath(href).split('#')[0] || '/')
}

watch(isMobileMenuOpen, (open) => {
  if (!open) {
    isMobileProductsOpen.value = false
    isMobileServicesOpen.value = false
    return
  }

  isMobileProductsOpen.value = isProductsRoute.value
  isMobileServicesOpen.value = isServicesRoute.value
})
</script>

<template>
  <header
    class="home-sys-header sticky top-0 z-50 border-b border-neutral-200 bg-white"
  >
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
          class="home-sys-header__brand-link inline-flex shrink-0 items-center"
        >
          <img
            src="/images/brand/RallyTech_FullLogo_Header.svg"
            :alt="messages.nav.logoAlt"
            class="home-sys-header__logo"
          />
        </NuxtLink>

        <nav class="home-sys-header__nav hidden lg:flex">
          <template v-for="item in navItems" :key="item.label">
            <div
              v-if="item.isProducts"
              class="home-sys-header__nav-group"
              :class="{ 'home-sys-header__nav-group--active': isProductsRoute }"
            >
              <NuxtLink
                :to="item.to"
                class="type-sys-nav home-sys-header__nav-link home-sys-header__nav-link--services"
                :class="{
                  'home-sys-header__nav-link--active': isProductsRoute
                }"
                :aria-current="isProductsOverviewRoute ? 'page' : undefined"
              >
                <span>{{ item.label }}</span>
                <UIcon
                  name="i-ic-baseline-keyboard-arrow-down"
                  class="home-sys-header__nav-chevron size-4"
                />
              </NuxtLink>

              <div
                class="home-sys-header__services-menu home-sys-header__services-menu--products"
                :aria-label="item.label"
              >
                <div
                  class="home-sys-header__services-menu-grid home-sys-header__services-menu-grid--products"
                >
                  <NuxtLink
                    v-for="product in productLinks"
                    :key="product.slug"
                    :to="product.to"
                    class="home-sys-header__services-menu-link"
                    :class="{
                      'home-sys-header__services-menu-link--active':
                        product.isCurrent
                    }"
                    :aria-current="product.isCurrent ? 'page' : undefined"
                  >
                    <span class="home-sys-header__services-menu-icon">
                      <UIcon :name="product.icon" class="size-4" />
                    </span>
                    <span class="home-sys-header__services-menu-label">
                      {{ product.shortLabel }}
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div
              v-else-if="item.isServices"
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
              :class="{
                'home-sys-header__nav-link--active': item.isActive
              }"
              :aria-current="item.isActive ? 'page' : undefined"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>

        <div class="home-sys-header__actions">
          <UTheme :ui="plainIconUtilityLightButtonTheme">
            <UButton
              :to="nextLocaleLink.to"
              color="neutral"
              variant="ghost"
              size="sm"
              leading-icon="i-ic-baseline-language"
              :label="nextLocaleShortLabel"
              class="home-sys-header__language-button justify-center"
              :aria-label="nextLocaleAriaLabel"
            />
          </UTheme>

          <UTheme :ui="contrastSolidDarkButtonTheme">
            <UButton
              :to="contactPath"
              color="neutral"
              variant="solid"
              size="sm"
              :label="messages.nav.contactCta"
              class="home-sys-header__contact-button hidden md:inline-flex"
            />
          </UTheme>

          <UTheme :ui="iconUtilityLightButtonTheme">
            <UButton
              type="button"
              color="neutral"
              variant="ghost"
              size="sm"
              :icon="
                isMobileMenuOpen ? 'i-ic-baseline-close' : 'i-ic-baseline-menu'
              "
              class="home-sys-header__mobile-menu-button justify-center lg:hidden"
              :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
              aria-controls="mobile-nav-panel"
              :aria-label="
                isMobileMenuOpen
                  ? messages.nav.mobileCloseLabel
                  : messages.nav.mobileOpenLabel
              "
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            />
          </UTheme>
        </div>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      id="mobile-nav-panel"
      class="home-sys-header__mobile-nav-panel border-t border-neutral-200 bg-white lg:hidden"
    >
      <nav class="page-sys-shell--wide flex flex-col gap-2 py-4">
        <template v-for="item in navItems" :key="`mobile-${item.label}`">
          <div v-if="item.isProducts" class="home-sys-header__mobile-nav-group">
            <div class="home-sys-header__mobile-nav-row">
              <NuxtLink
                :to="item.to"
                class="type-sys-title-m home-sys-header__mobile-link"
                :class="{
                  'home-sys-header__mobile-link--active': isProductsRoute
                }"
                :aria-current="isProductsOverviewRoute ? 'page' : undefined"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>

              <UTheme :ui="iconUtilityLightButtonTheme">
                <UButton
                  type="button"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  :icon="
                    isMobileProductsOpen
                      ? 'i-ic-baseline-keyboard-arrow-up'
                      : 'i-ic-baseline-keyboard-arrow-down'
                  "
                  class="home-sys-header__mobile-services-toggle"
                  :aria-expanded="isMobileProductsOpen ? 'true' : 'false'"
                  aria-controls="mobile-products-submenu"
                  :aria-label="item.label"
                  @click.stop="toggleMobileProductsMenu"
                />
              </UTheme>
            </div>

            <div
              v-if="isMobileProductsOpen"
              id="mobile-products-submenu"
              class="home-sys-header__mobile-services-list"
            >
              <NuxtLink
                v-for="product in productLinks"
                :key="`mobile-product-${product.slug}`"
                :to="product.to"
                class="home-sys-header__mobile-service-link"
                :class="{
                  'home-sys-header__mobile-service-link--active':
                    product.isCurrent
                }"
                :aria-current="product.isCurrent ? 'page' : undefined"
                @click="closeMobileMenu"
              >
                <span
                  class="home-sys-header__mobile-service-label type-sys-label-s"
                >
                  {{ product.shortLabel }}
                </span>
              </NuxtLink>
            </div>
          </div>

          <div
            v-else-if="item.isServices"
            class="home-sys-header__mobile-nav-group"
          >
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

              <UTheme :ui="iconUtilityLightButtonTheme">
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
              </UTheme>
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
            :class="{
              'home-sys-header__mobile-link--active': item.isActive
            }"
            :aria-current="item.isActive ? 'page' : undefined"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </template>
        <UTheme :ui="contrastSolidDarkButtonTheme">
          <UButton
            :to="contactPath"
            color="neutral"
            variant="solid"
            size="md"
            block
            :label="messages.nav.contactCta"
            class="home-sys-header__contact-button mt-2"
            :class="{
              'home-sys-header__contact-button--active': isContactRoute
            }"
            :aria-current="isContactRoute ? 'page' : undefined"
            @click="closeMobileMenu"
          />
        </UTheme>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.home-sys-header {
  --home-sys-header-logo-height: clamp(2.5rem, 12.3vw, 3rem);
  --home-sys-header-top-min-height: 1.55rem;
  --home-sys-header-top-padding-block: 0.06rem;
  --home-sys-header-top-column-gap: 0.5rem;
  --home-sys-header-main-min-height: 4.35rem;
  --home-sys-header-main-padding-block: 0.4rem;
  --home-sys-header-control-height: 2.75rem;
  --home-sys-header-main-gap: 0.75rem;
  --home-sys-header-control-gap: 0.4rem;
  --home-sys-header-services-menu-gap: 0.55rem;
  --home-sys-header-services-menu-width: min(34rem, 72vw);
  --home-sys-header-mobile-panel-offset: calc(
    var(--home-sys-header-top-min-height) +
      var(--home-sys-header-top-padding-block) +
      var(--home-sys-header-top-padding-block) +
      var(--home-sys-header-main-min-height) +
      var(--home-sys-header-main-padding-block) +
      var(--home-sys-header-main-padding-block) + 1px
  );
}

.home-sys-header__top {
  display: flex;
  min-height: var(--home-sys-header-top-min-height);
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem var(--home-sys-header-top-column-gap);
  padding-block: var(--home-sys-header-top-padding-block);
}

.home-sys-header__main {
  display: grid;
  min-height: var(--home-sys-header-main-min-height);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--home-sys-header-main-gap);
  padding-block: var(--home-sys-header-main-padding-block);
}

.home-sys-header__brand-link {
  min-width: 0;
}

.home-sys-header__logo {
  display: block;
  width: auto;
  height: var(--home-sys-header-logo-height);
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

.home-sys-header__nav-group::after {
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 20;
  width: var(--home-sys-header-services-menu-width);
  height: calc(var(--home-sys-header-services-menu-gap) + 1px);
  content: '';
  pointer-events: none;
  transform: translateX(-50%);
}

.home-sys-header__nav-group:hover::after,
.home-sys-header__nav-group:focus-within::after {
  pointer-events: auto;
}

.home-sys-header__nav-link {
  display: inline-flex;
  min-height: var(--home-sys-header-control-height);
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
  top: calc(100% + var(--home-sys-header-services-menu-gap));
  left: 50%;
  z-index: 30;
  width: var(--home-sys-header-services-menu-width);
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
  transform: translate(-50%, var(--home-sys-header-services-menu-gap));
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
  backdrop-filter: blur(14px);
}

.home-sys-header__services-menu::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 1rem;
  width: 3rem;
  height: 1px;
  background: color-mix(in srgb, var(--color-primary-500) 58%, transparent);
  pointer-events: none;
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

.home-sys-header__services-menu--products {
  width: min(22rem, 72vw);
}

.home-sys-header__services-menu-grid--products {
  grid-template-columns: minmax(0, 1fr);
}

.home-sys-header__services-menu-link {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.65rem;
  min-height: 3rem;
  padding: 0.72rem 0.8rem;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
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
  border-radius: var(--radius-md);
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
  gap: var(--home-sys-header-control-gap);
  justify-self: end;
}

.home-sys-header__contact-button {
  min-height: var(--home-sys-header-control-height);
  padding-inline: 1.35rem;
}

.home-sys-header__language-button {
  min-width: var(--home-sys-header-control-height);
  min-height: var(--home-sys-header-control-height);
  height: var(--home-sys-header-control-height);
}

.home-sys-header__mobile-menu-button {
  width: var(--home-sys-header-control-height);
  height: var(--home-sys-header-control-height);
}

.home-sys-header__mobile-nav-panel {
  max-height: calc(100dvh - var(--home-sys-header-mobile-panel-offset));
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  -webkit-overflow-scrolling: touch;
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
  border-radius: var(--radius-md);
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
  .home-sys-header {
    --home-sys-header-logo-height: 3.5rem;
    --home-sys-header-top-column-gap: 1rem;
    --home-sys-header-main-min-height: 4.85rem;
    --home-sys-header-main-padding-block: 0.35rem;
    --home-sys-header-main-gap: clamp(0.8rem, 1.4vw, 1.75rem);
    --home-sys-header-control-gap: 0.45rem;
  }
}

@media (min-width: 1024px) {
  .home-sys-header__main {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }
}

@media (max-width: 767px) {
  .home-sys-header__top a {
    font-size: 0.75rem;
  }
}
</style>
