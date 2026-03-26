<script setup lang="ts">
// Footer 風格聯絡資訊：依 docs/references/pentagon/首頁文案整理.md
const contactItems = [
  {
    label: '地址',
    value: '302081 新竹縣竹北市惟馨街 95 號 3 樓之 5'
  },
  { label: '聯絡電話', value: '+886-3-552-9933' },
  { label: '傳真', value: '+886-3-552-9797' },
  { label: '聯絡信箱', value: 'sales@rallytech.com.tw' }
]
</script>

<template>
  <section id="contact" class="bg-neutral-100 section-sys-shell">
    <div class="page-sys-shell">
      <div
        class="shadow-sys-md rounded-3xl border border-secondary-700/20 bg-gradient-to-br from-white to-primary-50 px-6 py-12 md:px-10"
      >
        <div class="mx-auto max-w-5xl text-center">
          <h2 class="type-sys-display-m text-neutral-700">
            與雷力科技一起提升工程效能
          </h2>
          <p
            class="type-sys-body-m mx-auto mt-6 max-w-4xl leading-9 text-neutral-600"
          >
            雷力科技以工程整合與自動化技術為核心，協助企業提升運轉效率、管理品質與長期營運價值。
          </p>
          <p
            class="type-sys-body-m mx-auto mt-5 max-w-4xl leading-9 text-neutral-600"
          >
            歡迎進一步了解我們的服務、案例與產業經驗，並與我們聯絡，找到更適合現場需求的工程解決方案。
          </p>

          <div class="mt-9 flex flex-wrap justify-center gap-3">
            <UButton
              to="#about"
              color="primary"
              variant="solid"
              class="type-sys-label-m rounded-full px-9 text-sys-inverse"
            >
              品牌理念
            </UButton>
            <UButton
              to="#contact"
              color="neutral"
              variant="outline"
              class="type-sys-label-m rounded-full border-primary-400 px-9 text-neutral-700 hover:bg-primary-400 hover:text-white"
            >
              加入我們
            </UButton>
          </div>
        </div>

        <div class="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
          <article
            v-for="item in contactItems"
            :key="item.label"
            class="rounded-2xl border border-neutral-300 bg-white p-5 text-center"
          >
            <p
              class="type-sys-label-s tracking-widest text-neutral-500 uppercase"
            >
              {{ item.label }}
            </p>
            <p class="type-sys-headline-s mt-2 text-neutral-700">
              {{ item.value }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
