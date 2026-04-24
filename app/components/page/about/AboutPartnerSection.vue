<script setup lang="ts">
import { computed } from 'vue'
import SharedSectionIntro from '~/components/shared/SharedSectionIntro.vue'

const messages = useRallyMessages()

const partnerItems = computed(() => messages.value.aboutPage.partners.items)
</script>

<template>
  <section id="partners" class="about-sys-partners section-sys-shell">
    <div class="page-sys-shell--wide">
      <div class="about-sys-partners__header">
        <SharedSectionIntro
          :kicker="messages.aboutPage.partners.kicker"
          :title="messages.aboutPage.partners.title"
          :description="messages.aboutPage.partners.description"
          tone="light"
          align="start"
          density="compact"
        />

        <div class="about-sys-partners__proof">
          <UIcon name="i-lucide-badge-check" class="size-5" />
          <span class="type-sys-label-s">
            {{ messages.aboutPage.partners.proofLabel }}
          </span>
        </div>
      </div>

      <div class="about-sys-partners__grid">
        <article
          v-for="partner in partnerItems"
          :key="partner.name"
          class="about-sys-partners__item"
        >
          <div class="about-sys-partners__media">
            <img
              class="about-sys-partners__image"
              :src="partner.image.src"
              :alt="partner.image.alt"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="about-sys-partners__body">
            <UBadge color="neutral" variant="subtle" size="sm">
              {{ partner.tag }}
            </UBadge>
            <h3 class="about-sys-partners__name type-sys-title-l">
              {{ partner.name }}
            </h3>
            <p class="about-sys-partners__description type-sys-body-s">
              {{ partner.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-sys-partners {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-neutral-50) 82%, white),
    white 48%,
    color-mix(in srgb, var(--color-primary-50) 18%, white)
  );
}

.about-sys-partners::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgb(15 23 42 / 0.035) 1px, transparent 1px),
    linear-gradient(180deg, rgb(15 23 42 / 0.035) 1px, transparent 1px);
  background-size: 5rem 5rem;
  mask-image: linear-gradient(
    180deg,
    transparent,
    black 18%,
    black 82%,
    transparent
  );
}

.about-sys-partners__header {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.5rem;
  align-items: end;
}

.about-sys-partners__proof {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  width: fit-content;
  max-width: 24rem;
  padding: 0.85rem 1rem;
  border-left: 3px solid var(--color-primary-600);
  color: color-mix(
    in srgb,
    var(--color-secondary-950) 78%,
    var(--color-primary-700)
  );
  background: rgb(255 255 255 / 0.72);
  box-shadow: 0 1rem 2rem rgb(15 23 42 / 0.06);
}

.about-sys-partners__grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;
  margin-top: clamp(2rem, 4vw, 3rem);
}

.about-sys-partners__item {
  display: grid;
  min-height: 100%;
  overflow: hidden;
  border: 1px solid
    color-mix(in srgb, var(--color-border-subtle) 82%, var(--color-primary-200));
  border-radius: 0.5rem;
  background: rgb(255 255 255 / 0.9);
  box-shadow: 0 1.25rem 2.8rem rgb(15 23 42 / 0.07);
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;
}

.about-sys-partners__item:hover {
  transform: translateY(-0.35rem);
  border-color: color-mix(
    in srgb,
    var(--color-primary-500) 48%,
    var(--color-border-subtle)
  );
  box-shadow: 0 1.65rem 3.2rem rgb(15 23 42 / 0.11);
}

.about-sys-partners__media {
  display: flex;
  min-height: 9.25rem;
  align-items: center;
  justify-content: center;
  padding: 1.35rem;
  background:
    linear-gradient(135deg, rgb(255 255 255 / 0.94), rgb(248 250 252 / 0.9)),
    color-mix(in srgb, var(--color-neutral-50) 70%, white);
}

.about-sys-partners__image {
  width: min(100%, 20rem);
  max-height: 8.4rem;
  object-fit: contain;
}

.about-sys-partners__body {
  display: grid;
  gap: 0.72rem;
  padding: 1.25rem;
  border-top: 1px solid
    color-mix(in srgb, var(--color-border-subtle) 76%, white);
}

.about-sys-partners__name {
  margin: 0;
  color: var(--color-neutral-950);
}

.about-sys-partners__description {
  margin: 0;
  color: var(--color-text-secondary);
  text-wrap: pretty;
}

@media (min-width: 768px) {
  .about-sys-partners__header {
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.48fr);
  }

  .about-sys-partners__proof {
    justify-self: end;
  }

  .about-sys-partners__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .about-sys-partners__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .about-sys-partners__header {
    text-align: left;
  }

  .about-sys-partners__proof {
    max-width: 100%;
  }

  .about-sys-partners__media {
    min-height: 8rem;
  }
}
</style>
