<script setup lang="ts">
import SharedActionLink from '~/components/shared/SharedActionLink.vue'
import {
  contrastSolidDarkButtonTheme,
  contrastSolidLightButtonTheme,
  iconUtilityDarkButtonTheme,
  iconUtilityEmphasisButtonTheme,
  iconUtilityLightButtonTheme,
  segmentedControlButtonTheme
} from '~/utils/button-themes'
import SectionHeader from './SectionHeader.vue'

const publicArchetypes = [
  {
    key: 'primary-solid',
    title: 'Primary solid',
    owner: 'Layer 2 `app/app.config.ts`',
    usage: '首頁 hero、首頁 section CTA、contact submit',
    size: '`lg` 為預設，首頁 hero 使用 `xl`',
    motion: 'Hover 只做背景色階切換；active 用較深色；focus 使用品牌 ring'
  },
  {
    key: 'contrast-solid',
    title: 'Contrast solid',
    owner: 'Layer 3 `button-themes.ts`',
    usage: 'Header contact、footer connector',
    size: 'Header 使用 `sm`；footer connector 使用 `lg`',
    motion:
      '深底版本維持深色實底；白底版本 hover 會染上淡主色，文字與 focus ring 同步切到主色系'
  },
  {
    key: 'segmented-control',
    title: 'Segmented control',
    owner: 'Layer 3 `button-themes.ts`',
    usage: 'Header FREE/AI、語系切換',
    size: '`xs` 為預設',
    motion:
      '未選取白底項 hover / focus 會切到淡主色底與深主色文字；已選取實底維持現況'
  },
  {
    key: 'icon-utility',
    title: 'Icon utility',
    owner: 'Layer 3 `button-themes.ts`',
    usage:
      'Header mobile controls、contact quick actions、newsletter submit、back-to-top',
    size: '`sm` 為預設 icon size',
    motion:
      'Inline 與 emphasis 模式都只做 fill 與 text 的細微切換；focus 才加強 ring'
  },
  {
    key: 'text-cta',
    title: 'Text CTA',
    owner: 'Shared primitive',
    usage: 'Home services / services overview cards',
    size: '`sm` 為預設',
    motion: '只允許文字與 icon 色彩加深，不使用位移、box、shadow 或 fill'
  }
] as const

const sectionMapping = [
  {
    section: 'Header contact',
    archetype: 'Contrast solid',
    size: '`sm`',
    owner: '`contrastSolidDarkButtonTheme`',
    note: '保留公開 CTA，但不再借用 icon/menu 語氣'
  },
  {
    section: 'Header FREE / AI、語系',
    archetype: 'Segmented control',
    size: '`xs`',
    owner: '`segmentedControlButtonTheme`',
    note: '公開站控制，不得升格成 CTA'
  },
  {
    section: 'Header mobile menu / service toggle',
    archetype: 'Icon utility',
    size: '`sm`',
    owner: '`iconUtilityLightButtonTheme`',
    note: '白底 inline utility，不使用 solid fill'
  },
  {
    section: 'Home / Mission / One-touch / Contact submit',
    archetype: 'Primary solid',
    size: '`lg` / hero `xl`',
    owner: 'Global `UButton`',
    note: '唯一品牌主 CTA'
  },
  {
    section: 'Footer connector',
    archetype: 'Contrast solid',
    size: '`lg`',
    owner: '`contrastSolidLightButtonTheme`',
    note: '深底白按鈕'
  },
  {
    section: 'Newsletter submit / contact quick actions',
    archetype: 'Icon utility',
    size: '`sm`',
    owner: '`iconUtilityDarkButtonTheme` 或 `iconUtilityLightButtonTheme`',
    note: 'Inline only，無 shadow、無 lift'
  },
  {
    section: 'Back to top',
    archetype: 'Icon utility',
    size: '`sm`',
    owner: '`iconUtilityEmphasisButtonTheme`',
    note: '使用較強 fill 建立存在感，但仍維持 flat chromatic motion'
  },
  {
    section: 'Home/services cards',
    archetype: 'Text CTA',
    size: '`sm`',
    owner: '`SharedActionLink`',
    note: '屬於 card/list link hint，不升級為 button'
  }
] as const

const internalDarkGhostButtonTheme = {
  button: {
    base: [
      'text-white/90',
      'bg-white/10',
      'hover:bg-white/16',
      'hover:text-white',
      'active:bg-white/16',
      'active:text-white',
      'focus-visible:bg-white/16',
      'focus-visible:text-white'
    ].join(' ')
  }
} as const

const internalOutlineButtonTheme = {
  button: {
    base: [
      'ring-white/30',
      'text-white',
      'hover:bg-white/10',
      'active:bg-white/10',
      'focus-visible:bg-white/10',
      'focus-visible:ring-white/40'
    ].join(' ')
  }
} as const

const internalAccentSolidButtonTheme = {
  button: {
    base: [
      'bg-accent-700',
      'text-white',
      'hover:bg-accent-600',
      'active:bg-accent-600',
      'focus-visible:bg-accent-600',
      'focus-visible:text-white'
    ].join(' ')
  }
} as const
</script>

<template>
  <section
    id="foundation-buttons"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader
        eyebrow="Foundations"
        title="Buttons 按鈕"
        description="公開站只保留 5 種可感知的按鈕語言。Global standard 管 primary solid 與 size ladder，其他都必須落在 approved `UTheme` family 或 `SharedActionLink`。"
      />

      <div class="buttons-sys-grid">
        <article class="buttons-sys-card">
          <div class="buttons-sys-card__header">
            <p class="type-sys-title-m text-neutral-950">Public contract</p>
            <p class="type-sys-body-s text-neutral-600">
              正式站只使用以下 archetype，hover 統一收斂為 color / border / ring
              only；白底家族以輕主色染色建立互動感。
            </p>
          </div>

          <div class="buttons-sys-contract-list">
            <article
              v-for="item in publicArchetypes"
              :key="item.key"
              class="buttons-sys-contract-item"
            >
              <div class="buttons-sys-contract-item__preview">
                <UButton
                  v-if="item.key === 'primary-solid'"
                  color="primary"
                  variant="solid"
                  size="lg"
                  label="Primary CTA"
                />

                <div
                  v-else-if="item.key === 'contrast-solid'"
                  class="buttons-sys-contrast-preview"
                >
                  <UTheme :ui="contrastSolidDarkButtonTheme">
                    <UButton
                      color="neutral"
                      variant="solid"
                      size="sm"
                      label="Header CTA"
                    />
                  </UTheme>
                  <div class="buttons-sys-contrast-preview__dark">
                    <UTheme :ui="contrastSolidLightButtonTheme">
                      <UButton
                        color="neutral"
                        variant="solid"
                        size="lg"
                        label="Footer CTA"
                      />
                    </UTheme>
                  </div>
                </div>

                <UTheme
                  v-else-if="item.key === 'segmented-control'"
                  :ui="segmentedControlButtonTheme"
                >
                  <div class="buttons-sys-segmented" role="group">
                    <UButton
                      color="neutral"
                      variant="ghost"
                      size="xs"
                      label="FREE"
                      aria-current="page"
                    />
                    <UButton
                      color="neutral"
                      variant="ghost"
                      size="xs"
                      label="AI"
                    />
                  </div>
                </UTheme>

                <div
                  v-else-if="item.key === 'icon-utility'"
                  class="buttons-sys-icon-preview"
                >
                  <UTheme :ui="iconUtilityLightButtonTheme">
                    <UButton
                      color="neutral"
                      variant="ghost"
                      size="sm"
                      icon="i-ic-baseline-menu"
                      aria-label="Inline icon utility on light surface"
                    />
                  </UTheme>
                  <div class="buttons-sys-icon-preview__dark">
                    <UTheme :ui="iconUtilityDarkButtonTheme">
                      <UButton
                        color="neutral"
                        variant="ghost"
                        size="sm"
                        icon="i-lucide-send"
                        aria-label="Inline icon utility on dark surface"
                      />
                    </UTheme>
                    <UTheme :ui="iconUtilityEmphasisButtonTheme">
                      <UButton
                        color="neutral"
                        variant="ghost"
                        size="sm"
                        icon="i-ic-baseline-keyboard-arrow-up"
                        aria-label="Emphasis icon utility"
                      />
                    </UTheme>
                  </div>
                </div>

                <SharedActionLink
                  v-else
                  label="Card CTA"
                  tone="light"
                  size="sm"
                  class="buttons-sys-text-cta"
                />
              </div>

              <div class="buttons-sys-contract-item__copy">
                <p class="type-sys-title-m text-neutral-950">
                  {{ item.title }}
                </p>
                <dl class="buttons-sys-meta">
                  <div>
                    <dt>Owner</dt>
                    <dd>{{ item.owner }}</dd>
                  </div>
                  <div>
                    <dt>Usage</dt>
                    <dd>{{ item.usage }}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>{{ item.size }}</dd>
                  </div>
                  <div>
                    <dt>Motion</dt>
                    <dd>{{ item.motion }}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </article>

        <article class="buttons-sys-card">
          <div class="buttons-sys-card__header">
            <p class="type-sys-title-m text-neutral-950">Section mapping</p>
            <p class="type-sys-body-s text-neutral-600">
              新增公開站按鈕時，先比對這張 mapping table，再決定是否需要
              promotion。
            </p>
          </div>

          <div
            class="buttons-sys-table"
            role="table"
            aria-label="公開站按鈕盤點矩陣"
          >
            <div
              v-for="row in sectionMapping"
              :key="row.section"
              class="buttons-sys-table__row"
              role="row"
            >
              <div class="buttons-sys-table__cell" role="cell">
                <p class="type-sys-label-s buttons-sys-table__label">Section</p>
                <p class="type-sys-body-s text-neutral-900">
                  {{ row.section }}
                </p>
              </div>
              <div class="buttons-sys-table__cell" role="cell">
                <p class="type-sys-label-s buttons-sys-table__label">
                  Archetype
                </p>
                <p class="type-sys-body-s text-neutral-900">
                  {{ row.archetype }}
                </p>
              </div>
              <div class="buttons-sys-table__cell" role="cell">
                <p class="type-sys-label-s buttons-sys-table__label">Size</p>
                <p class="type-sys-body-s text-neutral-900">{{ row.size }}</p>
              </div>
              <div class="buttons-sys-table__cell" role="cell">
                <p class="type-sys-label-s buttons-sys-table__label">Owner</p>
                <p class="type-sys-body-s text-neutral-900">{{ row.owner }}</p>
              </div>
              <div class="buttons-sys-table__cell" role="cell">
                <p class="type-sys-label-s buttons-sys-table__label">Note</p>
                <p class="type-sys-body-s text-neutral-600">{{ row.note }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <article class="buttons-sys-card buttons-sys-card--internal">
        <div class="buttons-sys-card__header">
          <p class="type-sys-title-m text-neutral-950">Internal-only preview</p>
          <p class="type-sys-body-s text-neutral-600">
            以下變體保留在內部展示頁與色彩實驗，不得回流到公開站 production
            contract。
          </p>
        </div>

        <div class="buttons-sys-internal-grid">
          <div class="buttons-sys-internal-item">
            <p class="type-sys-label-s buttons-sys-table__label">Ghost dark</p>
            <div
              class="buttons-sys-icon-preview__dark buttons-sys-internal-surface"
            >
              <UTheme :ui="internalDarkGhostButtonTheme">
                <UButton
                  color="neutral"
                  variant="ghost"
                  size="md"
                  label="Internal dark ghost"
                />
              </UTheme>
            </div>
          </div>

          <div class="buttons-sys-internal-item">
            <p class="type-sys-label-s buttons-sys-table__label">
              Outline dark
            </p>
            <div
              class="buttons-sys-icon-preview__dark buttons-sys-internal-surface"
            >
              <UTheme :ui="internalOutlineButtonTheme">
                <UButton
                  color="neutral"
                  variant="outline"
                  size="md"
                  label="Internal dark outline"
                />
              </UTheme>
            </div>
          </div>

          <div class="buttons-sys-internal-item">
            <p class="type-sys-label-s buttons-sys-table__label">
              Accent solid
            </p>
            <div
              class="buttons-sys-icon-preview__dark buttons-sys-internal-surface"
            >
              <UTheme :ui="internalAccentSolidButtonTheme">
                <UButton
                  color="neutral"
                  variant="ghost"
                  size="md"
                  label="Internal accent solid"
                />
              </UTheme>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.buttons-sys-grid {
  display: grid;
  gap: 1.5rem;
}

.buttons-sys-card {
  display: grid;
  gap: 1.25rem;
  padding: 1.25rem;
  border: 1px solid var(--color-border-subtle);
  background: var(--color-white);
}

.buttons-sys-card--internal {
  background: linear-gradient(
    180deg,
    rgb(250 250 250 / 1) 0%,
    rgb(245 247 248 / 1) 100%
  );
}

.buttons-sys-card__header {
  display: grid;
  gap: 0.35rem;
}

.buttons-sys-contract-list {
  display: grid;
  gap: 1rem;
}

.buttons-sys-contract-item {
  display: grid;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-subtle);
}

.buttons-sys-contract-item:first-child {
  padding-top: 0;
  border-top: none;
}

.buttons-sys-contract-item__preview {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.buttons-sys-contrast-preview {
  display: grid;
  gap: 0.75rem;
  width: 100%;
}

.buttons-sys-contrast-preview__dark,
.buttons-sys-icon-preview__dark,
.buttons-sys-internal-surface {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem;
  background: var(--color-secondary-950);
}

.buttons-sys-segmented {
  display: inline-flex;
  border: 1px solid var(--color-secondary-200);
  background: color-mix(
    in srgb,
    var(--color-secondary-50) 82%,
    var(--color-white)
  );
}

.buttons-sys-icon-preview {
  display: grid;
  gap: 0.75rem;
}

.buttons-sys-text-cta {
  --shared-action-link-color: var(--color-secondary-950);
}

.buttons-sys-contract-item__copy {
  display: grid;
  gap: 0.55rem;
}

.buttons-sys-meta {
  display: grid;
  gap: 0.55rem;
  margin: 0;
}

.buttons-sys-meta div {
  display: grid;
  gap: 0.15rem;
}

.buttons-sys-meta dt,
.buttons-sys-table__label {
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.buttons-sys-meta dd {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.55;
}

.buttons-sys-table {
  display: grid;
}

.buttons-sys-table__row {
  display: grid;
  gap: 0.9rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border-subtle);
}

.buttons-sys-table__row:first-child {
  padding-top: 0;
  border-top: none;
}

.buttons-sys-table__cell {
  display: grid;
  gap: 0.15rem;
}

.buttons-sys-internal-grid {
  display: grid;
  gap: 1rem;
}

.buttons-sys-internal-item {
  display: grid;
  gap: 0.55rem;
}

@media (min-width: 768px) {
  .buttons-sys-grid {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  }

  .buttons-sys-contract-item {
    grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
    align-items: start;
  }

  .buttons-sys-table__row {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
  }

  .buttons-sys-internal-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
