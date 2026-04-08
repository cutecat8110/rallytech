import { access, mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

import {
  buildActiveAssetRenameMap,
  imageReferenceDocPath,
  projectRoot,
  readImageAssetCatalog,
  writeImageAssetCatalog
} from './lib/image-asset-catalog.mjs'
import {
  readManifest,
  slotDefinitions,
  syncRegistryFromManifest,
  writeManifest
} from './lib/home-hero-nano-banana.mjs'

const isDryRun = process.argv.includes('--dry-run')
const catalog = await readImageAssetCatalog()
const renameEntries = buildActiveAssetRenameMap(catalog).filter(
  (entry) => entry.needsMove
)

if (renameEntries.length === 0) {
  console.log('No active brand or stock assets require migration.')
  process.exit(0)
}

await validateRenameMap(renameEntries)

console.log(
  `${isDryRun ? 'Dry run' : 'Migration'} will process ${renameEntries.length} active asset(s):`
)

for (const entry of renameEntries) {
  console.log(
    `- ${entry.assetId}: ${entry.sourcePublicPath} -> ${entry.targetPublicPath}`
  )
}

if (isDryRun) {
  process.exit(0)
}

for (const entry of renameEntries) {
  await mkdir(dirname(entry.targetAbsolutePath), { recursive: true })
  await rename(entry.sourceAbsolutePath, entry.targetAbsolutePath)
}

const renameLookup = new Map(
  renameEntries.map((entry) => [entry.sourcePublicPath, entry.targetPublicPath])
)

const updatedCatalog = structuredClone(catalog)

for (const record of updatedCatalog.records) {
  if (!renameLookup.has(record.publicPath)) {
    continue
  }

  record.publicPath = renameLookup.get(record.publicPath)

  if (record.kind === 'brand') {
    record.notes =
      'Active brand asset now uses the canonical kebab-case filename in the brand path.'
  }

  if (record.kind === 'stock') {
    record.notes = rewriteStockRecordNotes(record.notes)
  }
}

await writeImageAssetCatalog(updatedCatalog)

let updatedHomeHeroManifest = null

for (const slot of Object.keys(slotDefinitions)) {
  const manifest = await readManifest(slot)
  const updatedManifest = rewriteManifestPaths(manifest, renameLookup)

  if (!updatedManifest) {
    continue
  }

  await writeManifest(slot, updatedManifest)

  if (slot === 'home-hero') {
    updatedHomeHeroManifest = updatedManifest
  }
}

await rewriteTextFile('app/components/layout/FrontendHeader.vue', [
  [
    '/images/brand/RallyTech_Logo_TextOnly.svg',
    '/images/brand/rallytech-logo-text-only.svg'
  ]
])
await rewriteTextFile('app/pages/design-system-color-lab.vue', [
  [
    '/images/brand/RallyTech_Logo_TextOnly.svg',
    '/images/brand/rallytech-logo-text-only.svg'
  ]
])
await rewriteTextFile(imageReferenceDocPath, [
  ['public/images/demo/home/', 'public/images/stock/home/']
])

await syncRegistryFromManifest(
  'home-hero',
  updatedHomeHeroManifest ?? (await readManifest('home-hero'))
)

console.log('Active image asset migration completed.')

async function validateRenameMap(entries) {
  for (const entry of entries) {
    const sourceExists = await pathExists(entry.sourceAbsolutePath)

    if (!sourceExists) {
      throw new Error(
        `Source file for "${entry.assetId}" does not exist: ${entry.sourceAbsolutePath}`
      )
    }

    const targetExists = await pathExists(entry.targetAbsolutePath)

    if (targetExists) {
      throw new Error(
        `Target file for "${entry.assetId}" already exists: ${entry.targetAbsolutePath}`
      )
    }
  }
}

function rewriteManifestPaths(manifest, renameLookup) {
  let changed = false
  const updatedManifest = structuredClone(manifest)

  if (updatedManifest.states) {
    for (const stateRecord of Object.values(updatedManifest.states)) {
      changed =
        rewriteStockAssetPath(stateRecord.stock, renameLookup) || changed
      changed =
        rewriteCandidateSourceReferences(
          stateRecord.candidates,
          renameLookup
        ) || changed
    }
  } else {
    changed =
      rewriteStockAssetPath(updatedManifest.stock, renameLookup) || changed
    changed =
      rewriteCandidateSourceReferences(
        updatedManifest.candidates,
        renameLookup
      ) || changed
  }

  return changed ? updatedManifest : null
}

function rewriteStockAssetPath(stock, renameLookup) {
  if (!renameLookup.has(stock.src)) {
    return false
  }

  stock.src = renameLookup.get(stock.src)
  return true
}

function rewriteCandidateSourceReferences(candidates, renameLookup) {
  let changed = false

  for (const candidate of candidates) {
    if (!renameLookup.has(candidate.sourceReference)) {
      continue
    }

    candidate.sourceReference = renameLookup.get(candidate.sourceReference)
    changed = true
  }

  return changed
}

async function rewriteTextFile(filePath, replacements) {
  const absolutePath =
    typeof filePath === 'string' && filePath.includes(':')
      ? filePath
      : resolve(projectRoot, filePath)
  const source = await readFile(absolutePath, 'utf8')
  let output = source

  for (const [from, to] of replacements) {
    output = output.split(from).join(to)
  }

  if (output !== source) {
    await writeFile(absolutePath, output, 'utf8')
  }
}

function rewriteStockRecordNotes(notes) {
  if (typeof notes !== 'string' || notes.length === 0) {
    return 'Active canonical stock asset stored under /images/stock/home/.'
  }

  if (notes.includes('Legacy demo path is retained in phase 1.')) {
    return notes.replace(
      'Legacy demo path is retained in phase 1.',
      'Active canonical stock asset stored under /images/stock/home/.'
    )
  }

  return notes
}

async function pathExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return false
    }

    throw error
  }
}
