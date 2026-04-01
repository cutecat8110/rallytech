<template>
  <section class="bg-secondary-950 pt-0 text-white">
    <div class="page-sys-shell">
      <div class="mx-auto max-w-6xl border-b border-white/10 pb-10 pt-8">
        <div
          class="home-sys-reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div class="max-w-3xl">
            <p class="type-sys-label-s tracking-[0.18em] text-primary-300 uppercase">
              最終轉換
            </p>
            <h2 class="type-sys-display-m mt-4 max-w-[13ch] text-white">
              工程與整合支援，給不能容許模糊交付的控制團隊
            </h2>
            <p class="type-sys-body-m mt-5 max-w-2xl text-white/72">
              若你需要的是可執行的規劃、清楚的整合節奏與現場能真正落地的導入支援，現在就和雷力科技開始第一個對話。
            </p>
          </div>

          <UButton
            to="/#contact"
            color="neutral"
            variant="outline"
            class="type-sys-label-m w-fit bg-white text-secondary-950 hover:bg-white hover:text-secondary-950"
            :ui="{ base: 'hover:translate-y-0' }"
          >
            聯絡雷力科技
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
