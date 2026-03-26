<script setup lang="ts">
// 導覽：頁尾連結
const footerNavItems = [
  { label: '關於我們', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '一站式整合', href: '#one-touch-experience' },
  { label: '聯絡我們', href: '#contact' }
]

// 年份：自動更新
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-secondary-950 border-t border-white/10 text-white">
    <div class="page-sys-shell section-sys-shell--compact">
      <div
        class="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start"
      >
        <!-- 品牌摘要 -->
        <div class="stack-sys-16">
          <NuxtLink
            to="/"
            aria-label="雷力科技首頁"
            class="inline-flex w-fit items-center"
          >
            <img
              src="/images/brand/RallyTech_Logo_TextOnly.svg"
              alt="雷力科技"
              class="h-8 w-auto"
            />
          </NuxtLink>
          <p class="type-sys-body-s max-w-xl text-white/72">
            雷力科技專注工業自動化整合，提供兼顧安全、穩定與可擴展性的工程方案。
          </p>
        </div>

        <!-- 快速導覽 -->
        <nav class="grid gap-3 sm:grid-cols-2 md:justify-items-end">
          <NuxtLink
            v-for="item in footerNavItems"
            :key="item.label"
            :to="item.href"
            class="type-sys-label-m hover:text-primary-300 text-white/78 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- 版權 -->
      <div class="mt-8 border-t border-white/12 pt-5">
        <p class="type-sys-label-s text-white/55">
          © {{ currentYear }} Rally Technology. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
