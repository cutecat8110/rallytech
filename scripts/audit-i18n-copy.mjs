import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import {
  getBlockNumber,
  loadReferencePagesByLocale,
  normalizeBlockRole,
  projectRoot,
  referencePagesOutputPath,
  renderGeneratedReferencePagesFile,
  stripMetadataLines
} from './lib/reference-pages-content.mjs'
import {
  referencePageKeys,
  referencePageRegistry,
  siteLocales
} from './lib/reference-pages-registry.mjs'

const errors = []

function assert(condition, message) {
  if (!condition) {
    errors.push(message)
  }
}

function normalizeText(raw) {
  return raw.replace(/\r\n/g, '\n').trim()
}

function extractForbiddenMatches(raw, patterns) {
  return patterns
    .filter((pattern) => pattern.test(raw))
    .map((pattern) => pattern)
}

async function auditReferenceDocs() {
  const byLocale = await loadReferencePagesByLocale()

  assert(
    referencePageRegistry.length === 14,
    `reference registry should contain 14 pages, received ${referencePageRegistry.length}`
  )

  for (const locale of siteLocales) {
    const keys = Object.keys(byLocale[locale])

    assert(
      keys.length === referencePageRegistry.length,
      `${locale} should contain ${referencePageRegistry.length} parsed pages, received ${keys.length}`
    )

    assert(
      JSON.stringify(keys) === JSON.stringify(referencePageKeys),
      `${locale} page keys should match the shared registry order`
    )
  }

  for (const page of referencePageRegistry) {
    const sourcePage = byLocale.source[page.key]
    const enPage = byLocale.en[page.key]
    const zhPage = byLocale['zh-tw'][page.key]

    assert(
      sourcePage.blocks.length === enPage.blocks.length,
      `${page.key}: source and en block counts should match`
    )
    assert(
      sourcePage.blocks.length === zhPage.blocks.length,
      `${page.key}: source and zh-tw block counts should match`
    )
    assert(
      sourcePage.blockMap.length === enPage.blockMap.length,
      `${page.key}: source and en block map counts should match`
    )
    assert(
      sourcePage.blockMap.length === zhPage.blockMap.length,
      `${page.key}: source and zh-tw block map counts should match`
    )

    for (let index = 0; index < sourcePage.blocks.length; index += 1) {
      const sourceBlock = sourcePage.blocks[index]
      const enBlock = enPage.blocks[index]
      const zhBlock = zhPage.blocks[index]
      const sourceRole = normalizeBlockRole(sourceBlock.role)
      const enRole = normalizeBlockRole(enBlock.role)
      const zhRole = normalizeBlockRole(zhBlock.role)

      assert(
        getBlockNumber(sourceBlock.heading) === getBlockNumber(enBlock.heading),
        `${page.key}: source and en block numbering diverged at index ${index + 1}`
      )
      assert(
        getBlockNumber(sourceBlock.heading) === getBlockNumber(zhBlock.heading),
        `${page.key}: source and zh-tw block numbering diverged at index ${index + 1}`
      )
      assert(
        sourceRole === enRole,
        `${page.key}: source and en roles diverged at index ${index + 1}`
      )
      assert(
        sourceRole === zhRole,
        `${page.key}: source and zh-tw roles diverged at index ${index + 1}`
      )
    }
  }

  return byLocale
}

async function auditGeneratedFile(byLocale) {
  const generatedRaw = normalizeText(
    await readFile(referencePagesOutputPath, 'utf8')
  )
  const expectedRaw = normalizeText(
    await renderGeneratedReferencePagesFile(byLocale)
  )

  assert(
    generatedRaw === expectedRaw,
    'i18n/locales/reference-pages.generated.ts is out of sync with docs; run npm run generate:i18n-reference-pages'
  )
}

async function auditPublicCopyLeakage() {
  const publicDocPaths = referencePageRegistry.flatMap((page) => [
    page.docs.en,
    page.docs['zh-tw']
  ])
  const publicLocalePaths = ['i18n/locales/en.ts', 'i18n/locales/zh-tw.ts']

  const publicDocForbiddenPatterns = [
    /Pentagon Engineering/i,
    /info@pentagoneng\.com/i,
    /630\.550\.6902/i,
    /Fidelity Creative/i,
    /Manure Management System Integration/i,
    /糞污/,
    /^- About Image$/im,
    /^- Icon Image$/im,
    /^- Why Us$/im,
    /archicwp/i,
    /websitelayout/i
  ]
  const publicLocaleForbiddenPatterns = [
    ...publicDocForbiddenPatterns,
    /\bOTE\b/,
    /Join Us!/i,
    /Engineering \+ Design Experts/i
  ]

  for (const relativePath of publicDocPaths) {
    const raw = normalizeText(
      stripMetadataLines(
        await readFile(resolve(projectRoot, relativePath), 'utf8')
      )
    )
    const matches = extractForbiddenMatches(raw, publicDocForbiddenPatterns)

    assert(
      matches.length === 0,
      `${relativePath} still contains forbidden public copy: ${matches.map((pattern) => pattern.source).join(', ')}`
    )
  }

  for (const relativePath of publicLocalePaths) {
    const raw = normalizeText(
      await readFile(resolve(projectRoot, relativePath), 'utf8')
    )
    const matches = extractForbiddenMatches(raw, publicLocaleForbiddenPatterns)

    assert(
      matches.length === 0,
      `${relativePath} still contains forbidden public locale copy: ${matches.map((pattern) => pattern.source).join(', ')}`
    )
  }
}

async function auditSourceRuntimeCopy() {
  const sourceLocaleRaw = normalizeText(
    await readFile(resolve(projectRoot, 'i18n/locales/source.ts'), 'utf8')
  )
  const forbiddenPatterns = [
    /['"]About Image['"]/i,
    /['"]Icon Image['"]/i,
    /['"]Why Us['"]/i,
    /['"]Shape Image['"]/i
  ]
  const matches = extractForbiddenMatches(sourceLocaleRaw, forbiddenPatterns)

  assert(
    matches.length === 0,
    `i18n/locales/source.ts still contains broken-image placeholder copy: ${matches.map((pattern) => pattern.source).join(', ')}`
  )
}

async function auditCanonicalNaming() {
  const project02 = normalizeText(
    await readFile(
      resolve(projectRoot, 'docs/project/02-網站資訊架構與頁面藍圖.md'),
      'utf8'
    )
  )
  const project03 = normalizeText(
    await readFile(
      resolve(projectRoot, 'docs/project/03-服務架構與命名決策.md'),
      'utf8'
    )
  )

  assert(
    !/Local\/Cloud Data Platform Deployment/i.test(project02),
    'docs/project/02-網站資訊架構與頁面藍圖.md still uses the outdated Local/Cloud Data Platform Deployment label'
  )
  assert(
    !/Manure Management System Integration/i.test(project02),
    'docs/project/02-網站資訊架構與頁面藍圖.md still uses the outdated Manure Management System Integration label'
  )
  assert(
    /Local\/Cloud Historians Deployment/i.test(project02),
    'docs/project/02-網站資訊架構與頁面藍圖.md should include Local/Cloud Historians Deployment'
  )
  assert(
    /Utilities and Facilities System Integration/i.test(project02),
    'docs/project/02-網站資訊架構與頁面藍圖.md should include Utilities and Facilities System Integration'
  )
  assert(
    /Remote Monitoring and Data/.test(project03),
    'docs/project/03-服務架構與命名決策.md should retain the canonical Remote Monitoring and Data service name'
  )
}

async function main() {
  const byLocale = await auditReferenceDocs()

  await auditGeneratedFile(byLocale)
  await auditPublicCopyLeakage()
  await auditSourceRuntimeCopy()
  await auditCanonicalNaming()

  if (errors.length > 0) {
    console.error('i18n copy audit failed:')
    for (const message of errors) {
      console.error(`- ${message}`)
    }
    process.exitCode = 1
    return
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        pageCount: referencePageRegistry.length,
        locales: siteLocales,
        checks: [
          'registry coverage',
          'block counts and order',
          'generated file freshness',
          'public copy leakage',
          'source runtime placeholder exclusions',
          'canonical naming alignment'
        ]
      },
      null,
      2
    )
  )
}

await main()
