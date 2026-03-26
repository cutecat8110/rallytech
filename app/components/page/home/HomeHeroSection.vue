<template>
  <section
    id="top"
    class="relative overflow-hidden bg-secondary-950 text-white"
  >
    <!-- Hero 背景：以主題色色塊取代參考站影像 -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-800"
      />
      <div
        class="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary-500/22 blur-3xl"
      />
      <div
        class="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-primary-700/28 blur-3xl"
      />
      <div
        class="absolute top-[28%] right-[11%] h-48 w-48 -rotate-12 rounded-3xl border border-white/16 bg-white/6"
      />
      <div
        class="absolute left-[7%] bottom-[16%] h-20 w-64 -rotate-6 rounded-full bg-white/12"
      />
    </div>

    <div class="page-sys-shell relative z-10">
      <div class="flex min-h-[calc(100svh-4rem)] items-center py-14">
        <div class="max-w-4xl text-left">
          <p class="type-sys-label-m tracking-[0.22em] text-white/74 uppercase">
            Turnkey 整合方案，自 20XX 年起
          </p>

          <h1 class="type-sys-display-l mt-6 max-w-[20ch] text-white">
            為未來產業打造自動化解決方案
          </h1>

          <div class="mt-10">
            <UButton
              to="#services"
              color="primary"
              variant="solid"
              class="type-sys-label-m rounded-full px-9 py-3 text-sys-inverse"
            >
              查看服務項目
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
