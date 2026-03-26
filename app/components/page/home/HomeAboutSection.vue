<script setup lang="ts">
// About：核心條列（依 docs/references/pentagon/首頁文案整理.md）
const aboutHighlights = [
  {
    label: '專業',
    description: '由具實務經驗的工程團隊提供技術判斷與執行支援。'
  },
  {
    label: '技術',
    description: '結合工程技術與自動化整合能力，提供穩定且有效率的方案。'
  },
  {
    label: '協作',
    description: '與客戶及產業夥伴密切合作，確保專案順利落地。'
  }
]
</script>

<template>
  <section id="about" class="bg-neutral-100 section-sys-shell">
    <div class="page-sys-shell">
      <div class="grid items-start gap-12 lg:grid-cols-[1.15fr,0.85fr]">
        <article>
          <h2 class="type-sys-display-m text-neutral-600">
            工業自動化與儀控整合的專業團隊
          </h2>

          <p class="type-sys-body-m mt-7 leading-9 text-neutral-600">
            雷力科技深耕工業自動化領域，成立於 20XX
            年，專注於儀控整合與控制系統建置。
            我們結合工程技術與執行效率，協助企業優化現場運轉與管理效能。
          </p>

          <p class="type-sys-body-m mt-6 leading-9 text-neutral-600">
            我們以專業、品質與長期合作為核心，持續為不同產業提供穩定可靠的工程服務與整合方案。
          </p>

          <ul class="mt-8 grid gap-4">
            <li
              v-for="highlight in aboutHighlights"
              :key="highlight.label"
              class="rounded-sm border border-neutral-300 bg-white p-4"
            >
              <p class="type-sys-title-m text-neutral-700">
                <span class="font-semibold">{{ highlight.label }}</span>
                : {{ highlight.description }}
              </p>
            </li>
          </ul>
        </article>

        <!-- About 視覺佔位：對齊參考站影片區位置 -->
        <div class="space-y-5">
          <div
            class="shadow-sys-md relative overflow-hidden rounded-[2rem] border border-secondary-700/35 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 p-6"
          >
            <div
              class="absolute top-4 right-4 h-14 w-14 rounded-full border border-white/30 bg-white/14"
            />
            <p class="type-sys-label-s tracking-widest text-white/72 uppercase">
              主題視覺佔位
            </p>
            <div
              class="mt-4 h-56 rounded-2xl border border-white/20 bg-white/8"
            />
          </div>

          <article
            class="shadow-sys-sm rounded-2xl border border-primary-300 bg-primary-50 p-5"
          >
            <p
              class="type-sys-label-s tracking-widest text-primary-700 uppercase"
            >
              進一步了解
            </p>
            <p class="type-sys-body-s mt-2 text-primary-700">
              了解雷力科技的一站式整合服務與導入流程。
            </p>
            <UButton
              to="#one-touch-experience"
              color="primary"
              variant="solid"
              class="type-sys-label-s mt-4 rounded-full px-6 text-sys-inverse"
            >
              進一步了解
            </UButton>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
