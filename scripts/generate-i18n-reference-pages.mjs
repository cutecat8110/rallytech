/* eslint-disable @stylistic/quote-props */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const outputPath = resolve(
  projectRoot,
  'i18n/locales/reference-pages.generated.ts'
)

const referencePages = [
  {
    key: 'home',
    title: 'Home',
    docs: {
      source: 'docs/references/source/00-首頁.md',
      en: 'docs/references/en/00-首頁.md',
      'zh-tw': 'docs/references/zh-tw/00-首頁.md'
    }
  },
  {
    key: 'about',
    title: 'About',
    docs: {
      source: 'docs/references/source/pages/01-about.md',
      en: 'docs/references/en/pages/01-about.md',
      'zh-tw': 'docs/references/zh-tw/pages/01-關於我們.md'
    }
  },
  {
    key: 'faq',
    title: 'FAQ',
    docs: {
      source: 'docs/references/source/pages/02-faq.md',
      en: 'docs/references/en/pages/02-faq.md',
      'zh-tw': 'docs/references/zh-tw/pages/02-常見問題.md'
    }
  },
  {
    key: 'services-overview',
    title: 'Services Overview',
    docs: {
      source: 'docs/references/source/pages/03-services-overview.md',
      en: 'docs/references/en/pages/03-services-overview.md',
      'zh-tw': 'docs/references/zh-tw/pages/03-服務總覽.md'
    }
  },
  {
    key: 'one-touch-experience',
    title: 'One-Touch Experience',
    docs: {
      source: 'docs/references/source/pages/04-one-touch-experience.md',
      en: 'docs/references/en/pages/04-one-touch-experience.md',
      'zh-tw': 'docs/references/zh-tw/pages/04-一站式整合.md'
    }
  },
  {
    key: 'contact',
    title: 'Contact',
    docs: {
      source: 'docs/references/source/pages/05-contact.md',
      en: 'docs/references/en/pages/05-contact.md',
      'zh-tw': 'docs/references/zh-tw/pages/05-聯絡我們.md'
    }
  },
  {
    key: 'service-scada-and-hmi-graphics',
    title: 'SCADA and HMI Graphics',
    docs: {
      source: 'docs/references/source/services/01-scada-and-hmi-graphics.md',
      en: 'docs/references/en/services/01-scada-and-hmi-graphics.md',
      'zh-tw': 'docs/references/zh-tw/services/01-scada-and-hmi-graphics.md'
    }
  },
  {
    key: 'service-ie-services',
    title: 'I&E Services',
    docs: {
      source: 'docs/references/source/services/02-ie-services.md',
      en: 'docs/references/en/services/02-ie-services.md',
      'zh-tw': 'docs/references/zh-tw/services/02-ie-services.md'
    }
  },
  {
    key: 'service-plc-dcs-programming-and-migration',
    title: 'PLC & DCS Programming and Migration',
    docs: {
      source:
        'docs/references/source/services/03-plc-dcs-programming-and-migration.md',
      en: 'docs/references/en/services/03-plc-dcs-programming-and-migration.md',
      'zh-tw':
        'docs/references/zh-tw/services/03-plc-dcs-programming-and-migration.md'
    }
  },
  {
    key: 'service-pi-server',
    title: 'PI Server',
    docs: {
      source: 'docs/references/source/services/04-pi-server.md',
      en: 'docs/references/en/services/04-pi-server.md',
      'zh-tw': 'docs/references/zh-tw/services/04-pi-server.md'
    }
  },
  {
    key: 'service-historians',
    title: 'Historians',
    docs: {
      source: 'docs/references/source/services/05-historians.md',
      en: 'docs/references/en/services/05-historians.md',
      'zh-tw': 'docs/references/zh-tw/services/05-historians.md'
    }
  },
  {
    key: 'service-network-design',
    title: 'Network Design',
    docs: {
      source: 'docs/references/source/services/06-network-design.md',
      en: 'docs/references/en/services/06-network-design.md',
      'zh-tw': 'docs/references/zh-tw/services/06-network-design.md'
    }
  },
  {
    key: 'service-remote-monitoring-and-data',
    title: 'Remote Monitoring and Data',
    docs: {
      source:
        'docs/references/source/services/07-remote-monitoring-and-data.md',
      en: 'docs/references/en/services/07-remote-monitoring-and-data.md',
      'zh-tw': 'docs/references/zh-tw/services/07-remote-monitoring-and-data.md'
    }
  },
  {
    key: 'service-alarm-monitoring',
    title: 'Alarm Monitoring',
    docs: {
      source: 'docs/references/source/services/08-alarm-monitoring.md',
      en: 'docs/references/en/services/08-alarm-monitoring.md',
      'zh-tw': 'docs/references/zh-tw/services/08-alarm-monitoring.md'
    }
  }
]

function getMetadataValue(raw, pattern) {
  return raw.match(pattern)?.[1]?.trim() ?? ''
}

function collectBulletLines(lines, startIndex) {
  const items = []

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const line = lines[index]

    if (line.startsWith('## ')) break

    const bullet = line.match(/^- (.+)$/)?.[1]?.trim()
    if (bullet) {
      items.push(bullet)
    }
  }

  return items
}

function parseBlocks(lines) {
  const blocks = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]

    if (!line.startsWith('## ')) continue
    if (line === '## Block Map' || line === '## 區塊總覽') continue

    const heading = line.replace(/^## /, '').trim()
    const role = heading.match(/\[(.+)]$/)?.[1] ?? null
    const content = []
    const notes = []
    let isInNotes = false

    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const nextLine = lines[cursor]

      if (nextLine.startsWith('## ')) break

      if (nextLine === '### Notes' || nextLine === '### 備註') {
        isInNotes = true
        continue
      }

      const bullet = nextLine.match(/^- (.+)$/)?.[1]?.trim()
      if (!bullet) continue

      if (isInNotes) {
        notes.push(bullet)
      } else {
        content.push(bullet)
      }
    }

    blocks.push({ heading, role, content, notes })
  }

  return blocks
}

async function parseReferencePage(page, locale) {
  const docPath = page.docs[locale]
  const absolutePath = resolve(projectRoot, docPath)
  const raw = await readFile(absolutePath, 'utf8')
  const normalizedRaw = raw.replace(/\r\n/g, '\n').trim()
  const lines = normalizedRaw.split('\n')
  const blockMapIndex = lines.findIndex(
    (line) => line === '## Block Map' || line === '## 區塊總覽'
  )

  return {
    key: page.key,
    title: page.title,
    docPath: docPath.replaceAll('\\', '/'),
    sourceUrl: getMetadataValue(
      normalizedRaw,
      /^- (?:Source URL|來源網址):\s*(.+)$/m
    ),
    lastUpdated: getMetadataValue(
      normalizedRaw,
      /^- (?:Last updated|最後更新):\s*(.+)$/m
    ),
    blockMap:
      blockMapIndex >= 0 ? collectBulletLines(lines, blockMapIndex) : [],
    blocks: parseBlocks(lines),
    raw: normalizedRaw
  }
}

async function main() {
  await mkdir(dirname(outputPath), { recursive: true })

  const byLocale = {}

  for (const locale of ['source', 'en', 'zh-tw']) {
    byLocale[locale] = {}

    for (const page of referencePages) {
      byLocale[locale][page.key] = await parseReferencePage(page, locale)
    }
  }

  const file = `/* eslint-disable @stylistic/quote-props */
// This file is generated by scripts/generate-i18n-reference-pages.mjs.
// It intentionally stores text-only reference data; runtime image sources stay in the image registry.

import type { ReferencePagesMessages } from './types'

export const referencePagesSource = ${JSON.stringify(byLocale.source, null, 2)} as const satisfies ReferencePagesMessages

export const referencePagesEn = ${JSON.stringify(byLocale.en, null, 2)} as const satisfies ReferencePagesMessages

export const referencePagesZhTw = ${JSON.stringify(byLocale['zh-tw'], null, 2)} as const satisfies ReferencePagesMessages
`

  await writeFile(outputPath, file)
}

await main()
