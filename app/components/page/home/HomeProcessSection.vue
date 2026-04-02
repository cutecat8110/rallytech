<script setup lang="ts">
const processSteps = [
  {
    icon: 'i-lucide-clipboard-list',
    number: '01',
    title: '需求對齊'
  },
  {
    icon: 'i-lucide-route',
    number: '02',
    title: '技術規劃'
  },
  {
    icon: 'i-lucide-cpu',
    number: '03',
    title: '分階段實作'
  },
  {
    icon: 'i-lucide-badge-check',
    number: '04',
    title: '驗證與交接'
  }
]
</script>

<template>
  <section id="process" class="section-sys-shell bg-white">
    <div class="page-sys-shell">
      <div class="text-center">
        <p class="type-sys-kicker text-primary-700 uppercase">
          Our Process
        </p>
        <h2 class="type-sys-headline-l mt-4 text-neutral-900">交付流程</h2>
      </div>

      <div class="home-sys-process__grid">
        <article
          v-for="step in processSteps"
          :key="step.number"
          class="home-sys-process__step"
        >
          <span class="home-sys-process__icon">
            <UIcon :name="step.icon" class="size-6" />
          </span>
          <p class="home-sys-process__number type-sys-label-m text-primary-700">
            {{ step.number }}
          </p>
          <p class="home-sys-process__title type-sys-title-m text-neutral-900">
            {{ step.title }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-process__grid {
  margin-top: 2.35rem;
  display: grid;
  gap: 1.75rem;
}

.home-sys-process__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.home-sys-process__icon {
  display: inline-flex;
  width: 3.25rem;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid var(--color-primary-200);
  background: var(--color-neutral-50);
  color: var(--color-primary-700);
  box-shadow: var(--shadow-1);
}

.home-sys-process__number {
  margin-top: 1rem;
}

.home-sys-process__title {
  margin-top: 0.35rem;
}

@media (min-width: 768px) {
  .home-sys-process__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .home-sys-process__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
