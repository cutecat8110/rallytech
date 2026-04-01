<script setup lang="ts">
const missionTabs = [
  {
    label: '我們的使命',
    value: 'mission',
    paragraphs: [
      '雷力科技協助客戶建立更容易操作、維護與延伸的自動化環境，讓系統從上線到長期運轉都更可控。',
      '我們重視的是現場讀得懂、工程交得出去、維運接得下來的系統，而不是只在提案階段看起來完整。'
    ]
  },
  {
    label: '與我們合作',
    value: 'partner',
    paragraphs: [
      '若你的專案需要把工程、操作與支援放在同一條工作流裡，雷力科技會更適合成為整合與交付夥伴。',
      '我們會從需求、風險、既有系統與切換條件開始討論，避免在導入後期才回頭修補前期缺口。'
    ]
  }
]
</script>

<template>
  <section id="mission" class="bg-neutral-50 section-sys-shell">
    <div class="page-sys-shell">
      <div
        class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start"
      >
        <div class="home-sys-reveal">
          <p
            class="type-sys-label-s text-primary-700 tracking-[0.18em] uppercase"
          >
            我們的使命
          </p>
          <h2 class="type-sys-display-m mt-4 max-w-[12ch] text-neutral-950">
            把專案複雜度轉成穩定可維運的系統
          </h2>

          <UTabs
            :items="missionTabs"
            default-value="mission"
            color="neutral"
            class="home-sys-mission-tabs mt-8"
          >
            <template #content="{ item }">
              <div class="space-y-4">
                <p
                  v-for="paragraph in item.paragraphs"
                  :key="paragraph"
                  class="type-sys-body-m text-neutral-700"
                >
                  {{ paragraph }}
                </p>
              </div>
            </template>
          </UTabs>
        </div>

        <div
          class="home-sys-reveal home-sys-mission-stage"
          data-reveal-delay="2"
        >
          <div class="home-sys-mission-figure" />
          <div class="home-sys-mission-glow" />
          <div class="home-sys-mission-caption">
            <span>Field Engineer View</span>
            <strong>Integration. Recovery. Continuity.</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-mission-stage {
  position: relative;
  min-height: 36rem;
  overflow: hidden;
  border-radius: 2rem;
  background:
    linear-gradient(180deg, rgb(30 79 191 / 0.12), transparent 40%),
    linear-gradient(180deg, rgb(26 49 104 / 0.96), rgb(10 18 22) 100%);
  box-shadow: var(--shadow-3);
}

.home-sys-mission-tabs {
  max-width: 36rem;
}

.home-sys-mission-stage::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.24;
}

.home-sys-mission-figure {
  position: absolute;
  inset: auto 12% 0 auto;
  width: 58%;
  height: 88%;
  border-radius: 16rem 16rem 0 0;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.18), transparent 28%),
    linear-gradient(
      180deg,
      rgb(147 182 255 / 0.92) 0%,
      rgb(26 49 104 / 0.96) 36%,
      rgb(10 18 22) 100%
    );
  filter: saturate(0.92);
}

.home-sys-mission-figure::before,
.home-sys-mission-figure::after {
  content: '';
  position: absolute;
}

.home-sys-mission-figure::before {
  inset: 16% 24% auto auto;
  width: 42%;
  aspect-ratio: 1;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgb(191 212 255 / 0.95),
    rgb(58 109 245 / 0.62)
  );
}

.home-sys-mission-figure::after {
  inset: auto 15% 0 10%;
  height: 44%;
  border-radius: 2rem 2rem 0 0;
  background: linear-gradient(
    180deg,
    rgb(95 144 255 / 0.88),
    rgb(16 26 63 / 0.96)
  );
}

.home-sys-mission-glow {
  position: absolute;
  inset: 18% auto auto 6%;
  width: 16rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(161 235 223 / 0.62), transparent 62%);
  opacity: 0.8;
}

.home-sys-mission-caption {
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  display: grid;
  gap: 0.25rem;
  border: 1px solid rgb(255 255 255 / 0.08);
  border-radius: 1.3rem;
  background: rgb(255 255 255 / 0.08);
  padding: 1rem 1.1rem;
  backdrop-filter: blur(10px);
}

.home-sys-mission-caption span {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.56);
}

.home-sys-mission-caption strong {
  display: block;
  font-size: 1.08rem;
  color: white;
}

@media (max-width: 767px) {
  .home-sys-mission-stage {
    min-height: 25rem;
  }

  .home-sys-mission-figure {
    inset: auto 9% 0 auto;
    width: 62%;
    height: 80%;
    border-radius: 10rem 10rem 0 0;
  }

  .home-sys-mission-caption {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}
</style>
