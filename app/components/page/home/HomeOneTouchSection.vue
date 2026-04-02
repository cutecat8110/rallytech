<script setup lang="ts">
const oneTouchItems = [
  '資料整合｜Data Integration',
  '告警通報系統整合與試車｜Call-Out System Integration and Commissioning',
  '振動分析｜Vibration Analysis',
  '本地 / 雲端歷史資料部署｜Local/Cloud Historians Deployment',
  '糞污管理系統整合｜Manure Management System Integration'
]
</script>

<template>
  <section
    id="one-touch-experience"
    class="section-sys-shell relative overflow-hidden bg-sys-rally-ote-surface text-white"
  >
    <div class="page-sys-shell--wide relative z-10">
      <div class="content-sys-rail">
        <div class="home-sys-ote__layout">
          <article class="max-w-lg">
            <h2 class="home-sys-ote__accent-heading type-sys-headline-l text-white">
              The One-Touch Experience.
            </h2>
            <UButton
              to="#contact"
              color="primary"
              variant="solid"
              size="lg"
              label="了解更多"
              class="mt-7"
            />
          </article>

          <div class="relative xl:ml-auto xl:w-[min(31rem,100%)]">
            <ul class="home-sys-ote__panel">
              <li
                v-for="item in oneTouchItems"
                :key="item"
                class="home-sys-ote__row type-sys-body-s text-white/90"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-sys-rally-ote-surface {
  background:
    linear-gradient(
      120deg,
      rgb(7 12 16 / 0.92) 0%,
      rgb(7 12 16 / 0.84) 32%,
      rgb(7 12 16 / 0.62) 68%,
      rgb(7 12 16 / 0.9) 100%
    ),
    radial-gradient(circle at 74% 18%, rgb(48 187 165 / 0.18), transparent 30%),
    url('/images/demo/home/ote-control-room-bg.jpg') center / cover no-repeat,
    linear-gradient(
      160deg,
      var(--color-secondary-950) 0%,
      var(--color-secondary-900) 66%,
      var(--color-secondary-700) 100%
    );
  background-blend-mode: normal, screen, soft-light, normal;
}

.home-sys-ote__layout {
  display: grid;
  align-items: center;
  gap: 2.25rem;
}

.home-sys-ote__panel {
  display: grid;
  gap: 0.75rem;
}

.home-sys-ote__accent-heading {
  letter-spacing: 0.012em;
  font-weight: 600;
}

.home-sys-ote__row {
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.06);
  padding: 0.95rem 1rem;
  backdrop-filter: blur(8px);
}

@media (min-width: 768px) {
  .home-sys-ote__layout {
    grid-template-columns: minmax(0, 0.68fr) minmax(0, 1.32fr);
    gap: 2.75rem;
  }
}
</style>
