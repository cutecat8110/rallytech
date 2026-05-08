<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { RadiusToken } from './types'

// 圓角：token 對照
const radiusTokens: RadiusToken[] = [
  {
    token: 'XS',
    value: '1px',
    previewClass: 'rounded-xs',
    usage: '細線框、微型工業標記、motif'
  },
  {
    token: 'SM',
    value: '2px',
    previewClass: 'rounded-sm',
    usage: 'Button、segmented control、icon utility'
  },
  {
    token: 'MD',
    value: '4px',
    previewClass: 'rounded-md',
    usage: 'Input、textarea、select、dropdown item'
  },
  {
    token: 'LG',
    value: '6px',
    previewClass: 'rounded-lg',
    usage: 'Standard card、sidebar panel、contact info block'
  },
  {
    token: 'XL',
    value: '8px',
    previewClass: 'rounded-xl',
    usage: 'Large media、dropdown shell、hero visual panel'
  },
  {
    token: 'Full',
    value: '999px',
    previewClass: 'rounded-full',
    usage: 'Process dial、scroll top、status dot only'
  }
]

const radiusContracts = [
  {
    type: 'Precision control',
    token: 'SM / 2px',
    usage: 'Button、icon utility、segmented control、mission tabs',
    owner: 'Layer 2 `app.config.ts` / Layer 3 `UTheme`'
  },
  {
    type: 'Field surface',
    token: 'MD / 4px',
    usage: 'Input、textarea、select、newsletter input、form feedback',
    owner: 'Layer 2 `app.config.ts` / local `:ui`'
  },
  {
    type: 'Compact surface',
    token: 'MD / 4px',
    usage: 'Sidebar mobile cards、dropdown items、mobile nav row、icon tiles',
    owner: 'Component local style'
  },
  {
    type: 'Standard card',
    token: 'LG / 6px',
    usage:
      'Product/service cards、content panels、proof strips、contact info cards',
    owner: 'Component local style / `surface-sys-card`'
  },
  {
    type: 'Large media / overlay',
    token: 'XL / 8px',
    usage: 'Dropdown shell、large media frame、page visual panel',
    owner: 'Component local style'
  },
  {
    type: 'Circular exception',
    token: 'Full / 999px',
    usage: 'Process dial、floating return action、status dot',
    owner: 'Component local style + docs governance'
  },
  {
    type: 'Brand narrative geometry',
    token: 'Named local pattern',
    usage: 'One-touch / hero / editorial asymmetric industrial cut',
    owner: 'Component local CSS variables + docs governance'
  }
] as const
</script>

<template>
  <section
    id="foundation-radius"
    class="section-sys-shell border-b border-neutral-200 bg-white"
  >
    <div class="page-sys-shell stack-sys-24">
      <SectionHeader eyebrow="Foundations" title="Radius 圓角" />

      <div class="overflow-x-auto border border-neutral-200 bg-white">
        <table class="min-w-full text-left">
          <thead class="border-b border-neutral-200 bg-neutral-50">
            <tr>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Token</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">
                Preview
              </th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Value</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">用途</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="token in radiusTokens"
              :key="token.token"
              class="border-b border-neutral-200 last:border-b-0"
            >
              <td class="type-sys-body-s px-4 py-3 text-neutral-900">
                {{ token.token }}
              </td>
              <td class="px-4 py-3">
                <div
                  class="h-12 w-12 border border-neutral-300 bg-white"
                  :class="token.previewClass"
                />
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ token.value }}
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ token.usage }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="overflow-x-auto border border-neutral-200 bg-white">
        <table class="min-w-full text-left">
          <thead class="border-b border-neutral-200 bg-neutral-50">
            <tr>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Type</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Token</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Usage</th>
              <th class="type-sys-label-m px-4 py-3 text-neutral-900">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="contract in radiusContracts"
              :key="contract.type"
              class="border-b border-neutral-200 last:border-b-0"
            >
              <td class="type-sys-body-s px-4 py-3 text-neutral-900">
                {{ contract.type }}
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ contract.token }}
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ contract.usage }}
              </td>
              <td class="type-sys-body-s px-4 py-3 text-neutral-700">
                {{ contract.owner }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
