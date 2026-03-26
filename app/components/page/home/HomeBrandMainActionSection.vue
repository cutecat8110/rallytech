<template>
  <section class="bg-sys-rally-light-surface section-sys-shell">
    <div class="page-sys-shell">
      <!-- 品牌行動 -->
      <div class="surface-sys-card surface-sys-card--raised p-6 md:p-8">
        <p class="type-sys-label-s tracking-widest text-neutral-500 uppercase">
          品牌主張
        </p>
        <h2 class="type-sys-headline-l mt-3 max-w-3xl text-neutral-950">
          與雷力科技一起提升工程效能
        </h2>
        <p class="type-sys-body-m mt-5 max-w-3xl text-neutral-700">
          雷力科技以工程整合與自動化技術為核心，協助企業提升運轉效率、管理品質與長期營運價值。
        </p>

        <!-- 行動按鈕 -->
        <div class="mt-8 flex flex-wrap gap-3">
          <UButton
            to="#about"
            color="primary"
            variant="solid"
            class="type-sys-label-m rounded-full px-5 py-3"
          >
            品牌理念
          </UButton>

          <UButton
            to="#services"
            color="neutral"
            variant="outline"
            class="type-sys-label-m rounded-full border-neutral-300 px-5 py-3 text-neutral-800 hover:border-neutral-400 hover:bg-neutral-100"
          >
            查看服務項目
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
