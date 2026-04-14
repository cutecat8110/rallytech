import { basename, resolve } from 'node:path'

import {
  buildActiveAssetRenameMap,
  buildCatalogIndexes,
  collectManifestImageReferences,
  extractReferenceDocLocalFilenames,
  extractRegistryImagePaths,
  getCanonicalPublicPathForRecord,
  isManagedCanonicalAsset,
  listPublicImageFiles,
  pathExists,
  readImageAssetCatalog,
  validateGeneratedOutputPath
} from './lib/image-asset-catalog.mjs'

const jsonOutput = process.argv.includes('--json')
const failOnDeprecatedWithoutReplacement = process.argv.includes(
  '--fail-on-deprecated-without-replacement'
)

const issues = []
const catalog = await readImageAssetCatalog()
const { recordsById, recordsByPath } = buildCatalogIndexes(catalog)
const diskFiles = await listPublicImageFiles()
const diskFileSet = new Set(diskFiles)
const manifestReferences = await collectManifestImageReferences()
const registryPaths = await extractRegistryImagePaths()
const referenceDocFilenames = await extractReferenceDocLocalFilenames()

collectDuplicateCatalogIssues()
collectDiskCoverageIssues()
await collectCatalogPathIssues()
collectRegistryIssues()
collectManifestIssues()
collectReferenceDocIssues()
collectDeprecatedPolicyIssues()
collectActiveCanonicalPathIssues()

const summary = {
  catalogRecordCount: catalog.records.length,
  diskFileCount: diskFiles.length,
  missingCount: issues.length,
  byKind: Object.fromEntries(
    ['brand', 'stock', 'ai-generated'].map((kind) => [
      kind,
      catalog.records.filter((record) => record.kind === kind).length
    ])
  ),
  byStatus: Object.fromEntries(
    ['active', 'candidate-history', 'deprecated'].map((status) => [
      status,
      catalog.records.filter((record) => record.status === status).length
    ])
  )
}

if (jsonOutput) {
  console.log(
    JSON.stringify({ ok: issues.length === 0, summary, issues }, null, 2)
  )
} else if (issues.length === 0) {
  console.log('Image asset audit passed.')
  console.log(`Catalog records: ${summary.catalogRecordCount}`)
  console.log(`Disk files: ${summary.diskFileCount}`)
  console.log(
    `Kinds: brand=${summary.byKind.brand}, stock=${summary.byKind.stock}, ai-generated=${summary.byKind['ai-generated']}`
  )
  console.log(
    `Statuses: active=${summary.byStatus.active}, candidate-history=${summary.byStatus['candidate-history']}, deprecated=${summary.byStatus.deprecated}`
  )
} else {
  console.error('Image asset audit failed.')
  console.error(`Issues: ${issues.length}`)

  for (const issue of issues) {
    console.error(`- ${issue}`)
  }

  process.exitCode = 1
}

function collectDuplicateCatalogIssues() {
  const seenAssetIds = new Set()
  const seenPublicPaths = new Set()

  for (const record of catalog.records) {
    if (seenAssetIds.has(record.assetId)) {
      issues.push(`Duplicate catalog assetId "${record.assetId}".`)
    }

    if (seenPublicPaths.has(record.publicPath)) {
      issues.push(`Duplicate catalog publicPath "${record.publicPath}".`)
    }

    seenAssetIds.add(record.assetId)
    seenPublicPaths.add(record.publicPath)
  }
}

function collectDiskCoverageIssues() {
  for (const publicPath of diskFiles) {
    if (!recordsByPath.has(publicPath)) {
      issues.push(
        `Disk file "${publicPath}" is missing from data/image-assets/catalog.json.`
      )
    }
  }
}

async function collectCatalogPathIssues() {
  for (const record of catalog.records) {
    if (!diskFileSet.has(record.publicPath)) {
      issues.push(
        `Catalog record "${record.assetId}" points to missing file "${record.publicPath}".`
      )
    }

    const absolutePath = resolve('.', `public${record.publicPath}`)

    if (!(await pathExists(absolutePath))) {
      issues.push(
        `Catalog record "${record.assetId}" does not resolve on disk: "${record.publicPath}".`
      )
    }

    if (record.replacedBy && !recordsById.has(record.replacedBy)) {
      issues.push(
        `Catalog record "${record.assetId}" points to missing replacement assetId "${record.replacedBy}".`
      )
    }
  }
}

function collectRegistryIssues() {
  for (const publicPath of registryPaths) {
    const record = recordsByPath.get(publicPath)

    if (!record) {
      issues.push(
        `Registry reference "${publicPath}" is missing from the catalog.`
      )
      continue
    }

    if (!diskFileSet.has(publicPath)) {
      issues.push(`Registry reference "${publicPath}" is missing on disk.`)
    }
  }
}

function collectManifestIssues() {
  for (const reference of manifestReferences) {
    const record = recordsByPath.get(reference.publicPath)

    if (!record) {
      issues.push(
        `Manifest reference "${reference.publicPath}" in "${reference.manifestPath}" is missing from the catalog.`
      )
      continue
    }

    if (!diskFileSet.has(reference.publicPath)) {
      issues.push(
        `Manifest reference "${reference.publicPath}" in "${reference.manifestPath}" is missing on disk.`
      )
    }

    if (reference.kind === 'stock' && record.kind !== 'stock') {
      issues.push(
        `Manifest stock reference "${reference.publicPath}" must map to a stock record, received "${record.kind}".`
      )
    }

    if (
      reference.kind === 'candidate-output' &&
      record.kind !== 'ai-generated'
    ) {
      issues.push(
        `Manifest candidate output "${reference.publicPath}" must map to an ai-generated record, received "${record.kind}".`
      )
    }

    if (reference.kind === 'candidate-output') {
      for (const error of validateGeneratedOutputPath({
        slot: reference.slot,
        state: reference.state,
        candidateId: reference.candidateId,
        outputPath: reference.publicPath
      })) {
        issues.push(
          `Generated output path violation in "${reference.manifestPath}" for "${reference.candidateId}": ${error}`
        )
      }
    }
  }
}

function collectReferenceDocIssues() {
  for (const filename of referenceDocFilenames) {
    const matchingRecords = catalog.records.filter(
      (record) =>
        basename(record.publicPath) === filename &&
        record.kind === 'stock' &&
        record.status === 'active'
    )

    if (matchingRecords.length !== 1) {
      issues.push(
        `Reference doc filename "${filename}" must resolve to exactly one active stock record, found ${matchingRecords.length}.`
      )
    }
  }
}

function collectDeprecatedPolicyIssues() {
  for (const record of catalog.records) {
    if (record.status !== 'deprecated') {
      continue
    }

    if (!record.notes) {
      issues.push(`Deprecated record "${record.assetId}" must include notes.`)
    }

    if (failOnDeprecatedWithoutReplacement && !record.replacedBy) {
      issues.push(
        `Deprecated record "${record.assetId}" is missing replacedBy while --fail-on-deprecated-without-replacement is enabled.`
      )
    }
  }
}

function collectActiveCanonicalPathIssues() {
  for (const record of catalog.records) {
    if (!isManagedCanonicalAsset(record)) {
      continue
    }

    const expectedPublicPath = getCanonicalPublicPathForRecord(record)

    if (record.publicPath !== expectedPublicPath) {
      issues.push(
        `Active ${record.kind} record "${record.assetId}" must use canonical path "${expectedPublicPath}", received "${record.publicPath}".`
      )
    }
  }

  for (const entry of buildActiveAssetRenameMap(catalog)) {
    if (!entry.needsMove) {
      continue
    }

    issues.push(
      `Active managed asset "${entry.assetId}" still requires migration from "${entry.sourcePublicPath}" to "${entry.targetPublicPath}".`
    )
  }
}
