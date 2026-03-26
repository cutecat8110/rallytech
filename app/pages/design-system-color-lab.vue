<script setup lang="ts">
// 色彩方向模型
type ColorDirection = {
  name: string
  tone: string
  summary: string
  pageBg: string
  primary: string
  secondary: string
  accent: string
  heroFrom: string
  heroTo: string
  darkSurface: string
  darkCard: string
  lightSurface: string
  lightCard: string
  lightText: string
  lightMuted: string
  darkMuted: string
  heroGlow: string
}

// 當前方案：極黑 A2
const activeDirection: ColorDirection = {
  name: 'A2 極黑定案',
  tone: '深黑主體、科技青綠主色、低亮藍灰層次、低頻金屬暖點',
  summary:
    '以深黑階建立權威底盤，透過青綠主色建立品牌辨識，並以低亮藍灰與金屬暖點補出科技層次，保留企業官網的穩定可讀性。',
  pageBg: 'var(--color-secondary-950)',
  primary: 'var(--color-primary-500)',
  secondary: 'var(--color-secondary-950)',
  accent: 'var(--color-accent-500)',
  heroFrom: 'var(--color-secondary-950)',
  heroTo: 'var(--color-secondary-900)',
  darkSurface: 'var(--color-secondary-900)',
  darkCard: 'var(--color-secondary-700)',
  lightSurface: 'var(--color-neutral-100)',
  lightCard: 'var(--color-white)',
  lightText: 'var(--color-neutral-900)',
  lightMuted: 'var(--color-neutral-600)',
  darkMuted: 'rgb(255 255 255 / 0.78)',
  heroGlow: 'rgb(75 190 173 / 0.28)'
}

// Hero：背景漸層
const heroBackground = `radial-gradient(circle at 16% 16%, ${activeDirection.heroGlow}, transparent 40%), radial-gradient(circle at 64% 18%, rgb(36 57 89 / 0.12), transparent 36%), radial-gradient(circle at 66% 28%, rgb(48 187 165 / 0.13), transparent 38%), linear-gradient(156deg, ${activeDirection.heroFrom} 0%, ${activeDirection.heroTo} 62%, var(--color-secondary-700) 100%)`

// Hero：亮點文案
const heroStats = ['20年以上工業整合經驗', '500+ 專案交付實績', '24/7 安衛承諾']

// 語系：選項
const languageOptions = [
  { code: 'zh-TW', label: '繁中', href: '/?lang=zh-TW', isCurrent: true },
  { code: 'en', label: 'EN', href: '/?lang=en' }
]

// 語系：目前值
const currentLanguage =
  languageOptions.find((option) => option.isCurrent) ?? languageOptions[0]

// Header：導覽項目
const heroNavItems = ['關於我們', '服務項目', '產業應用', '聯絡我們']

// 服務段：卡片資料
const serviceItems = ['再生能源', '工廠自動化', '專案工程', '客製系統整合']

// 能力段：卡片資料
const capabilityItems = [
  {
    title: '電力與公用系統',
    desc: '大型能源與電力場域控制整合'
  },
  {
    title: '半導體產業',
    desc: '高精度產線與潔淨室自動化'
  },
  {
    title: '製造產業',
    desc: '跨廠區設備與資料串接'
  }
]

// 流程段：步驟資料
const deliverySteps = [
  '需求訪談與現場盤點',
  '系統方案與風險評估',
  '施工整合與上線驗證',
  '長期維運與持續優化'
]

// 結尾段：重點卡
const closingHighlights = ['24/7 穩定支援', '安全優先', '跨域整合交付']

// Layout：backend
definePageMeta({
  layout: 'backend'
})

useSeoMeta({
  title: '設計系統 / 色彩實驗室',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <div
    class="min-h-screen"
    :style="{ backgroundColor: activeDirection.pageBg }"
  >
    <header
      class="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-[0_8px_24px_rgb(9_9_11/0.06)]"
    >
      <div class="page-sys-shell">
        <div
          class="flex items-center justify-between gap-4"
          :style="{ minHeight: 'var(--layout-header-m)' }"
        >
          <div class="flex items-center gap-4">
            <img
              src="/images/brand/RallyTech_Logo_TextOnly.svg"
              alt="雷力科技"
              class="h-7 w-auto md:h-8"
            />
            <p
              class="type-sys-label-s hidden tracking-widest text-neutral-500 uppercase md:block"
            >
              色彩主題預覽
            </p>
          </div>

          <nav class="hidden items-center gap-6 lg:flex">
            <a
              v-for="item in heroNavItems"
              :key="item"
              href="#"
              class="type-sys-label-s hover:text-primary-700 text-neutral-700 transition-colors"
            >
              {{ item }}
            </a>
          </nav>

          <div class="flex items-center gap-3">
            <UPopover
              :content="{ side: 'bottom', align: 'end', sideOffset: 10 }"
            >
              <UButton
                type="button"
                color="neutral"
                variant="ghost"
                class="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-neutral-600 transition-colors hover:bg-neutral-100/80 hover:text-neutral-900"
                aria-label="切換語系"
              >
                <UIcon
                  name="i-ic-baseline-language"
                  class="size-4 text-neutral-500 transition-colors group-hover:text-neutral-700"
                />
                <span class="type-sys-label-s text-current">
                  {{ currentLanguage?.label ?? '語系' }}
                </span>
                <UIcon
                  name="i-ic-baseline-keyboard-arrow-down"
                  class="size-4 text-neutral-500 transition-colors group-hover:text-neutral-700"
                />
              </UButton>

              <template #content>
                <div
                  class="w-36 rounded-md border border-neutral-200 bg-white p-1 shadow-[0_12px_24px_rgb(15_23_42/0.12)]"
                >
                  <UButton
                    v-for="option in languageOptions"
                    :key="option.code"
                    :to="option.href"
                    :aria-current="option.isCurrent ? 'page' : undefined"
                    :color="option.isCurrent ? 'primary' : 'neutral'"
                    :variant="option.isCurrent ? 'solid' : 'ghost'"
                    class="w-full justify-between rounded-sm px-3 py-2"
                  >
                    <span class="type-sys-label-s font-medium">{{
                      option.label
                    }}</span>
                    <UIcon
                      v-if="option.isCurrent"
                      name="i-ic-baseline-check"
                      class="size-4 text-white/90"
                    />
                  </UButton>
                </div>
              </template>
            </UPopover>

            <NuxtLink
              to="/design-system"
              class="type-sys-label-s inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <UIcon name="i-ic-baseline-arrow-back" class="size-4" />
              回設計系統
            </NuxtLink>
            <UButton
              type="button"
              color="primary"
              variant="solid"
              class="type-sys-label-s hidden rounded-full px-4 py-2 font-semibold md:inline-flex"
            >
              聯絡我們
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <section
      class="section-sys-shell--hero min-h-[68vh] overflow-hidden md:min-h-[76vh]"
      :style="{
        background: heroBackground
      }"
    >
      <div class="page-sys-shell flex min-h-[68vh] flex-col md:min-h-[76vh]">
        <div class="pt-8 md:pt-10">
          <div
            class="inline-flex rounded-full bg-white/10 px-4 py-2 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)]"
          >
            <p class="type-sys-label-m text-white/90">
              高端色彩定案：{{ activeDirection.name }}
            </p>
          </div>
        </div>

        <div
          class="mt-10 grid grow content-center gap-10 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] xl:items-end"
        >
          <div>
            <p class="type-sys-label-s tracking-widest text-white/70 uppercase">
              首頁色彩沉浸預覽
            </p>
            <h1
              class="type-sys-display-m md:type-sys-display-l mt-4 max-w-5xl text-white"
            >
              工業領導力，展現美式專業權威
            </h1>
            <p class="type-sys-body-m mt-5 max-w-2xl text-white/82">
              {{ activeDirection.summary }}
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <UButton
                type="button"
                color="primary"
                variant="solid"
                class="type-sys-label-m rounded-full px-5 py-2"
              >
                預約諮詢
              </UButton>
              <UButton
                type="button"
                color="neutral"
                variant="ghost"
                class="type-sys-label-m rounded-full bg-white/10 px-5 py-2 text-white/92 hover:bg-white/16 hover:text-white"
              >
                查看服務
              </UButton>
            </div>
            <div class="mt-10 grid gap-3 md:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat"
                class="rounded-sm px-3 py-3 shadow-[0_10px_24px_rgb(3_8_16/0.24)]"
                :style="{
                  backgroundColor: 'rgb(255 255 255 / 0.07)'
                }"
              >
                <p class="type-sys-label-s text-white/84">
                  {{ stat }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="rounded-md p-5 shadow-[0_18px_40px_rgb(2_6_12/0.25)]"
            :style="{
              backgroundColor: 'rgb(255 255 255 / 0.07)'
            }"
          >
            <p class="type-sys-label-s text-white/68">主題快照</p>
            <div class="mt-4 grid gap-3">
              <div class="rounded-sm bg-white/5 px-3 py-2">
                <p class="type-sys-label-s text-white/60">主色</p>
                <div class="mt-2 flex items-center gap-2">
                  <span
                    class="h-3 w-3 rounded-full"
                    :style="{ backgroundColor: activeDirection.primary }"
                  />
                  <code class="type-sys-label-s text-white/88">{{
                    activeDirection.primary
                  }}</code>
                </div>
              </div>
              <div class="rounded-sm bg-white/5 px-3 py-2">
                <p class="type-sys-label-s text-white/60">點綴色</p>
                <div class="mt-2 flex items-center gap-2">
                  <span
                    class="h-3 w-3 rounded-full"
                    :style="{ backgroundColor: activeDirection.accent }"
                  />
                  <code class="type-sys-label-s text-white/88">{{
                    activeDirection.accent
                  }}</code>
                </div>
              </div>
              <div class="rounded-sm bg-white/5 px-3 py-2">
                <p class="type-sys-label-s text-white/60">次要色</p>
                <div class="mt-2 flex items-center gap-2">
                  <span
                    class="h-3 w-3 rounded-full"
                    :style="{ backgroundColor: activeDirection.secondary }"
                  />
                  <code class="type-sys-label-s text-white/88">{{
                    activeDirection.secondary
                  }}</code>
                </div>
              </div>
              <p class="type-sys-body-s text-white/74">
                {{ activeDirection.tone }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section-sys-shell"
      :style="{ backgroundColor: activeDirection.lightSurface }"
    >
      <div class="page-sys-shell">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p
              class="type-sys-label-s tracking-widest uppercase"
              :style="{ color: activeDirection.lightMuted }"
            >
              服務區塊
            </p>
            <h2
              class="type-sys-headline-l mt-3"
              :style="{ color: activeDirection.lightText }"
            >
              線框級首頁區塊，先看色彩層次
            </h2>
          </div>
          <p
            class="type-sys-body-s max-w-lg"
            :style="{ color: activeDirection.lightMuted }"
          >
            深色首屏後進入淺底服務區，讓資訊密度提高時仍保持清楚易讀。
          </p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="item in serviceItems"
            :key="item"
            class="shadow-sys-sm rounded-md p-5"
            :style="{
              backgroundColor: activeDirection.lightCard
            }"
          >
            <div
              class="h-1.5 w-12 rounded-full"
              :style="{ backgroundColor: activeDirection.primary }"
            />
            <p
              class="type-sys-title-l mt-4"
              :style="{ color: activeDirection.lightText }"
            >
              {{ item }}
            </p>
            <div class="mt-4 space-y-2">
              <div class="h-2 rounded-full bg-neutral-200/85" />
              <div class="h-2 w-10/12 rounded-full bg-neutral-200/85" />
              <div class="h-2 w-8/12 rounded-full bg-neutral-200/85" />
            </div>
            <div
              class="mt-5 inline-flex items-center gap-2 text-sm font-medium"
              :style="{ color: activeDirection.lightMuted }"
            >
              了解更多
              <UIcon name="i-ic-baseline-arrow-forward" class="size-4" />
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="section-sys-shell"
      :style="{
        backgroundColor: activeDirection.darkSurface
      }"
    >
      <div class="page-sys-shell">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p class="type-sys-label-s tracking-widest text-white/60 uppercase">
              能力區塊
            </p>
            <h3 class="type-sys-headline-l mt-3 max-w-3xl text-white">
              高風險場域與大型專案的整合能力
            </h3>
          </div>
          <p
            class="type-sys-body-s max-w-xl"
            :style="{ color: activeDirection.darkMuted }"
          >
            這段是深色資訊區塊，用來測試中段深色區塊的閱讀層次與可信度。
          </p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <article
            v-for="item in capabilityItems"
            :key="item.title"
            class="rounded-md p-5 shadow-[0_14px_28px_rgb(0_0_0/0.24)]"
            :style="{
              backgroundColor: activeDirection.darkCard
            }"
          >
            <div
              class="h-1.5 w-10 rounded-full"
              :style="{ backgroundColor: activeDirection.primary }"
            />
            <p class="type-sys-title-l mt-4 text-white">
              {{ item.title }}
            </p>
            <p
              class="type-sys-body-s mt-3"
              :style="{ color: activeDirection.darkMuted }"
            >
              {{ item.desc }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="section-sys-shell"
      :style="{ backgroundColor: activeDirection.lightSurface }"
    >
      <div class="page-sys-shell">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p
              class="type-sys-label-s tracking-widest uppercase"
              :style="{ color: activeDirection.lightMuted }"
            >
              交付流程
            </p>
            <h3
              class="type-sys-headline-l mt-3"
              :style="{ color: activeDirection.lightText }"
            >
              專案交付流程（線框示意）
            </h3>
          </div>
          <p
            class="type-sys-body-s max-w-xl"
            :style="{ color: activeDirection.lightMuted }"
          >
            這段補上首頁中段流程感，方便你判斷淺色區塊在整頁中的節奏比例。
          </p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="(step, index) in deliverySteps"
            :key="step"
            class="shadow-sys-sm rounded-md p-5"
            :style="{ backgroundColor: activeDirection.lightCard }"
          >
            <p
              class="type-sys-label-s"
              :style="{ color: activeDirection.lightMuted }"
            >
              步驟 {{ index + 1 }}
            </p>
            <p
              class="type-sys-title-m mt-3"
              :style="{ color: activeDirection.lightText }"
            >
              {{ step }}
            </p>
            <div class="mt-4 h-2 rounded-full bg-neutral-200/85" />
            <div class="mt-2 h-2 w-9/12 rounded-full bg-neutral-200/85" />
          </article>
        </div>
      </div>
    </section>

    <section
      class="section-sys-shell"
      :style="{
        backgroundColor: activeDirection.secondary
      }"
    >
      <div
        class="page-sys-shell grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
      >
        <div>
          <p class="type-sys-label-s tracking-widest text-white/60 uppercase">
            聯絡行動區塊
          </p>
          <h3 class="type-sys-headline-l mt-3 text-white">
            準備好擴展下一個工業專案了嗎？
          </h3>
          <p
            class="type-sys-body-m mt-4 max-w-2xl"
            :style="{ color: activeDirection.darkMuted }"
          >
            這段是首頁結尾區塊的色彩測試點，確認深色背景下主要行動按鈕是否足夠突出。
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              type="button"
              color="neutral"
              variant="ghost"
              class="type-sys-label-m bg-accent-700 hover:bg-accent-600 rounded-full px-5 py-2 text-white"
            >
              立即聯絡
            </UButton>
            <UButton
              type="button"
              color="neutral"
              variant="ghost"
              class="type-sys-label-m rounded-full bg-white/10 px-5 py-2 text-white/90 hover:bg-white/16 hover:text-white"
            >
              下載公司簡介
            </UButton>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          <div
            v-for="item in closingHighlights"
            :key="item"
            class="rounded-md p-4 shadow-[0_14px_28px_rgb(0_0_0/0.22)]"
            :style="{
              backgroundColor: activeDirection.darkCard
            }"
          >
            <div
              class="h-1.5 w-10 rounded-full"
              :style="{ backgroundColor: activeDirection.primary }"
            />
            <p class="type-sys-title-m mt-3 text-white">
              {{ item }}
            </p>
            <div
              class="mt-3 h-2 rounded-full"
              :style="{ backgroundColor: 'rgb(255 255 255 / 0.16)' }"
            />
            <div
              class="mt-2 h-2 w-9/12 rounded-full"
              :style="{ backgroundColor: 'rgb(255 255 255 / 0.16)' }"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
