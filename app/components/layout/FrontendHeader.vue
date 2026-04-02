<script setup lang="ts">
import { computed, ref } from 'vue'
import { secondarySolidButtonTheme } from '~/utils/button-themes'

const navItems = [
  { label: '關於我們', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '一站式整合', href: '#one-touch-experience' },
  { label: '聯絡我們', href: '#contact' }
]

const isMobileMenuOpen = ref(false)
const route = useRoute()
const { hasLatestCandidate, isDevToggleVisible, isNanoEnabled } =
  useHomeHeroImageMode()

const nanoToggleLabel = computed(() =>
  hasLatestCandidate.value
    ? '切換最新 Nano Hero 候選圖'
    : '目前尚未有可切換的 Nano Hero 候選圖'
)

const showNanoToggle = computed(
  () => isDevToggleVisible && route.query.heroTools === '1'
)

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-neutral-200 bg-white">
    <div class="bg-secondary-900 text-white">
      <div class="page-sys-shell--wide">
        <div class="home-sys-header__top">
          <a
            href="tel:+88635529933"
            class="type-sys-nav inline-flex items-center gap-1.5 text-white/82 transition-colors hover:text-white"
          >
            <UIcon name="i-ic-baseline-local-phone" class="size-4" />
            +886-3-552-9933
          </a>
          <a
            href="mailto:sales@rallytech.com.tw"
            class="type-sys-nav inline-flex items-center gap-1.5 text-white/86 transition-colors hover:text-white"
          >
            <UIcon name="i-ic-baseline-mail-outline" class="size-4" />
            sales@rallytech.com.tw
          </a>
        </div>
      </div>
    </div>

    <div class="page-sys-shell--wide">
      <div class="home-sys-header__main">
        <NuxtLink
          to="/"
          aria-label="雷力科技首頁"
          class="inline-flex shrink-0 items-center"
        >
          <img
            src="/images/brand/RallyTech_Logo_TextOnly.svg"
            alt="雷力科技"
            class="h-6 w-auto md:h-7"
          />
        </NuxtLink>

        <nav class="home-sys-header__nav hidden lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.href"
            class="type-sys-nav text-neutral-600 transition-colors hover:text-primary-700"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="home-sys-header__actions">
          <USwitch
            v-if="showNanoToggle"
            v-model="isNanoEnabled"
            color="neutral"
            size="sm"
            class="hidden rounded-full border border-neutral-300 bg-white p-0.5 md:inline-flex"
            :disabled="!hasLatestCandidate"
            :aria-label="nanoToggleLabel"
          />

          <UTheme :ui="secondarySolidButtonTheme">
            <UButton
              to="#contact"
              color="neutral"
              variant="solid"
              size="xs"
              label="聯絡我們"
              class="hidden md:inline-flex"
              :ui="{ label: 'text-white' }"
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
            aria-label="開啟選單"
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
          :to="item.href"
          class="type-sys-title-m rounded-sm px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary-700"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <UTheme :ui="secondarySolidButtonTheme">
          <UButton
            to="#contact"
            color="neutral"
            variant="solid"
            size="md"
            block
            label="聯絡我們"
            class="mt-2"
            @click="closeMobileMenu"
          />
        </UTheme>
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

@media (max-width: 767px) {
  .home-sys-header__main {
    grid-template-columns: minmax(8rem, 1fr) auto auto;
    gap: 0.65rem;
    min-height: 4rem;
    padding-block: 0.6rem;
  }
}
</style>
