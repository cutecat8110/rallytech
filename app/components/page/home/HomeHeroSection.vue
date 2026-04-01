<script setup lang="ts">
const heroEyebrow = 'RallyTech | Reliable Automation Delivery'
const heroSidebarItems = [
  '控制系統整合',
  'Historian 與 PI 同步',
  '告警與通報回應'
]
const stageLines = ['58%', '82%', '71%', '90%']
</script>

<template>
  <section
    id="top"
    class="bg-sys-rally-hero-industrial relative overflow-hidden text-white"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4.75rem_4.75rem] opacity-25"
    />

    <div class="page-sys-shell relative z-10">
      <div
        class="mx-auto grid min-h-[calc(100svh-7.75rem)] max-w-6xl items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]"
      >
        <div class="home-sys-reveal max-w-[38rem]">
          <p
            class="type-sys-label-m text-primary-200 tracking-[0.18em] uppercase"
          >
            {{ heroEyebrow }}
          </p>
          <h1 class="type-sys-display-xl mt-5 max-w-[11ch] text-white">
            工業自動化交付，為可靠運轉而設計
          </h1>
          <p class="type-sys-body-m mt-6 max-w-xl text-white/76">
            串接控制系統、工廠資料與現場執行，協助現代工業專案在規劃、導入與維運之間維持一致的工程節奏。
          </p>

          <div class="mt-9 flex flex-wrap items-center gap-3">
            <UButton
              to="/#services"
              color="primary"
              variant="solid"
              size="xl"
              class="type-sys-label-m text-sys-inverse"
            >
              探索服務
            </UButton>
            <UButton
              to="/#process"
              color="neutral"
              variant="link"
              class="type-sys-label-m px-0 text-white hover:text-white"
              :ui="{
                base: 'hover:translate-y-0',
                trailingIcon: 'size-4 text-primary-200'
              }"
              trailing-icon="i-ic-baseline-arrow-forward"
            >
              了解交付方式
            </UButton>
          </div>
        </div>

        <div class="home-sys-reveal home-sys-hero-stage" data-reveal-delay="2">
          <div class="home-sys-hero-grid" />
          <div class="home-sys-hero-frame">
            <div class="home-sys-hero-screen">
              <span class="home-sys-hero-tag">Live Systems Map</span>
              <div class="home-sys-hero-rings" />
              <div class="home-sys-hero-lines">
                <span
                  v-for="line in stageLines"
                  :key="line"
                  :style="{ width: line }"
                />
              </div>
            </div>

            <div class="home-sys-hero-sidebar">
              <p>Rally Grid</p>
              <ul>
                <li v-for="item in heroSidebarItems" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <div class="home-sys-hero-badge">
            <span>Operational Clarity</span>
            <strong>單一窗口協調</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sys-hero-stage {
  position: relative;
  justify-self: end;
  width: min(100%, 34rem);
  min-height: 34rem;
}

.home-sys-hero-grid {
  position: absolute;
  inset: 2rem 0 0 1.5rem;
  border-radius: 1.9rem;
  background:
    linear-gradient(rgb(143 231 217 / 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgb(143 231 217 / 0.08) 1px, transparent 1px);
  background-size: 2.5rem 2.5rem;
  opacity: 0.72;
}

.home-sys-hero-frame {
  position: absolute;
  inset: 0 2rem 4rem 0;
  border: 1px solid rgb(255 255 255 / 0.09);
  border-radius: 1.9rem;
  padding: 1rem;
  background:
    linear-gradient(160deg, rgb(255 255 255 / 0.12), transparent 28%),
    rgb(5 19 45 / 0.56);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow-3);
}

.home-sys-hero-screen {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  border-radius: 1.35rem;
  padding: 1.4rem;
  background:
    linear-gradient(135deg, rgb(143 231 217 / 0.12), transparent 30%),
    linear-gradient(160deg, rgb(255 255 255 / 0.04), rgb(255 255 255 / 0.02));
}

.home-sys-hero-tag {
  display: inline-flex;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.08);
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-sys-hero-rings {
  position: absolute;
  inset: 5.5rem auto auto 3.25rem;
  width: 15rem;
  aspect-ratio: 1;
  border-radius: 999px;
  border: 1px solid rgb(143 231 217 / 0.58);
  box-shadow:
    0 0 0 2.6rem rgb(143 231 217 / 0.08),
    0 0 0 5rem rgb(143 231 217 / 0.04);
}

.home-sys-hero-rings::before,
.home-sys-hero-rings::after {
  content: '';
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
}

.home-sys-hero-rings::before {
  width: 0.8rem;
  height: 0.8rem;
  background: white;
  box-shadow: 0 0 20px rgb(255 255 255 / 0.72);
}

.home-sys-hero-rings::after {
  width: 11rem;
  height: 11rem;
  border: 1px dashed rgb(143 231 217 / 0.34);
}

.home-sys-hero-lines {
  position: absolute;
  inset: auto 1.5rem 1.5rem 1.5rem;
  display: grid;
  gap: 0.85rem;
}

.home-sys-hero-lines span {
  display: block;
  height: 0.72rem;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgb(143 231 217 / 0.08),
    rgb(143 231 217 / 0.66)
  );
}

.home-sys-hero-sidebar {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 12rem;
  border: 1px solid rgb(255 255 255 / 0.08);
  border-radius: 1.2rem;
  background: rgb(255 255 255 / 0.08);
  padding: 1rem;
}

.home-sys-hero-sidebar p {
  margin: 0 0 0.85rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: rgb(255 255 255 / 0.94);
}

.home-sys-hero-sidebar ul {
  margin: 0;
  padding-left: 1rem;
  color: rgb(255 255 255 / 0.72);
  font-size: 0.85rem;
  line-height: 1.7;
}

.home-sys-hero-badge {
  position: absolute;
  left: 0;
  bottom: 0;
  min-width: 11.5rem;
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: 1.3rem;
  background: linear-gradient(
    160deg,
    rgb(255 255 255 / 0.16),
    rgb(255 255 255 / 0.06)
  );
  padding: 1rem 1.1rem;
  box-shadow: var(--shadow-2);
}

.home-sys-hero-badge span {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.58);
}

.home-sys-hero-badge strong {
  display: block;
  margin-top: 0.35rem;
  font-size: 1rem;
  line-height: 1.4;
  color: white;
}

@media (max-width: 1023px) {
  .home-sys-hero-stage {
    justify-self: stretch;
    width: 100%;
    min-height: 27rem;
  }

  .home-sys-hero-frame {
    inset: 0 1rem 3.5rem 0;
  }
}

@media (max-width: 767px) {
  .home-sys-hero-stage {
    min-height: 24rem;
  }

  .home-sys-hero-grid {
    inset: 1rem 0 0 0.75rem;
  }

  .home-sys-hero-frame {
    inset: 0 0.75rem 3.25rem 0;
  }

  .home-sys-hero-sidebar {
    width: 9.75rem;
    padding: 0.85rem;
  }

  .home-sys-hero-badge {
    left: 0.35rem;
  }

  .home-sys-hero-rings {
    inset: 5.75rem auto auto 2.3rem;
    width: 11rem;
    box-shadow:
      0 0 0 1.8rem rgb(143 231 217 / 0.08),
      0 0 0 3.5rem rgb(143 231 217 / 0.04);
  }
}
</style>
