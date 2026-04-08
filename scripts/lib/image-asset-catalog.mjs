import { access, readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, dirname, extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
export const projectRoot = resolve(scriptDir, '..', '..')
export const imageAssetCatalogPath = resolve(
  projectRoot,
  'data/image-assets/catalog.json'
)
export const homePageRegistryPath = resolve(
  projectRoot,
  'app/utils/home-page-image-registry.ts'
)
export const imageReferenceDocPath = resolve(
  projectRoot,
  'docs/references/首頁媒體素材來源.md'
)
export const nanoManifestDirectory = resolve(
  projectRoot,
  'data/nano-banana/manifests'
)
export const activeStockCanonicalRoot = '/images/stock'

export const IMAGE_ASSET_KINDS = Object.freeze([
  'brand',
  'stock',
  'ai-generated'
])
export const IMAGE_ASSET_STATUSES = Object.freeze([
  'active',
  'candidate-history',
  'deprecated'
])

const IMAGE_ASSET_FILE_PATTERN = /\/images\/[^'"`\s)]+\.(?:svg|png|jpe?g|webp)/g
const CATALOG_SCHEMA_VERSION = 1
const GENERATED_LICENSE_NOTE =
  'Generated with Gemini image generation (SynthID watermark).'
const GENERATED_OUTPUT_DIRECTORIES = Object.freeze({
  'home-hero': '/images/generated/home/hero',
  'about-primary': '/images/generated/home/about-primary',
  'about-detail': '/images/generated/home/about-detail',
  'services-surface': '/images/generated/home/services-surface',
  'ote-background': '/images/generated/home/ote-background',
  /* prettier-ignore */
  'mission-square': {
    'mission': '/images/generated/home/mission-square/mission',
    'join-us': '/images/generated/home/mission-square/join-us'
  },
  'mission-cutout': '/images/generated/home/mission-cutout',
  'connector-image': '/images/generated/home/connector-image'
})

/**
 * @typedef {'brand' | 'stock' | 'ai-generated'} ImageAssetKind
 * @typedef {'active' | 'candidate-history' | 'deprecated'} ImageAssetStatus
 *
 * @typedef {Object} ImageAssetRecord
 * @property {string} assetId
 * @property {ImageAssetKind} kind
 * @property {ImageAssetStatus} status
 * @property {string} publicPath
 * @property {string} canonicalName
 * @property {string} scope
 * @property {string | null} slot
 * @property {string | null} state
 * @property {string} source
 * @property {string | null} licenseNote
 * @property {string | null} sourceReference
 * @property {string | null} manifestPath
 * @property {string[]} usedBy
 * @property {string | null} replacedBy
 * @property {string | null} notes
 */

export async function pathExists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export async function readImageAssetCatalog() {
  const raw = await readFile(imageAssetCatalogPath, 'utf8')
  const catalog = JSON.parse(raw)

  if (catalog.schemaVersion !== CATALOG_SCHEMA_VERSION) {
    throw new Error(
      `Unsupported image asset catalog schema version "${catalog.schemaVersion}".`
    )
  }

  if (!Array.isArray(catalog.records)) {
    throw new Error(
      'Image asset catalog must contain a top-level "records" array.'
    )
  }

  for (const record of catalog.records) {
    validateImageAssetRecord(record)
  }

  return catalog
}

export async function writeImageAssetCatalog(catalog) {
  if (catalog.schemaVersion !== CATALOG_SCHEMA_VERSION) {
    throw new Error(
      `Image asset catalog must use schema version ${CATALOG_SCHEMA_VERSION}.`
    )
  }

  if (!Array.isArray(catalog.records)) {
    throw new Error(
      'Image asset catalog must contain a top-level "records" array.'
    )
  }

  for (const record of catalog.records) {
    validateImageAssetRecord(record)
  }

  const sortedRecords = [...catalog.records].sort(compareImageAssetRecords)
  const serialized = JSON.stringify(
    {
      schemaVersion: CATALOG_SCHEMA_VERSION,
      records: sortedRecords
    },
    null,
    2
  )

  await writeFile(imageAssetCatalogPath, `${serialized}\n`, 'utf8')
}

export async function syncImageAssetCatalog() {
  const existingCatalog = await readImageAssetCatalog()
  const manifests = await readAllNanoManifests()
  const nonAiRecords = existingCatalog.records.filter(
    (record) => record.kind !== 'ai-generated'
  )
  const aiRecords = buildAiGeneratedRecords(manifests)

  await writeImageAssetCatalog({
    schemaVersion: CATALOG_SCHEMA_VERSION,
    records: [...nonAiRecords, ...aiRecords]
  })
}

export async function listPublicImageFiles() {
  const publicImagesRoot = resolve(projectRoot, 'public/images')
  const files = await walkFiles(publicImagesRoot)

  return files.map((filePath) => toPublicPath(filePath)).sort()
}

export async function extractRegistryImagePaths() {
  const source = await readFile(homePageRegistryPath, 'utf8')
  return Array.from(
    new Set(source.match(IMAGE_ASSET_FILE_PATTERN) ?? [])
  ).sort()
}

export async function extractReferenceDocLocalFilenames() {
  const source = await readFile(imageReferenceDocPath, 'utf8')
  const matches = source.match(/`[^`]+\.(?:svg|png|jpe?g|webp)`/g) ?? []

  return Array.from(
    new Set(matches.map((match) => match.slice(1, -1)).filter(isImageFilename))
  ).sort()
}

export async function collectManifestImageReferences() {
  const manifests = await readAllNanoManifests()
  const references = []

  for (const { manifest, manifestPath } of manifests) {
    const manifestRelativePath = toProjectRelative(manifestPath)

    if (manifest.states) {
      for (const [state, stateRecord] of Object.entries(manifest.states)) {
        references.push({
          kind: 'stock',
          slot: manifest.slot,
          state,
          manifestPath: manifestRelativePath,
          publicPath: stateRecord.stock.src
        })

        for (const candidate of stateRecord.candidates) {
          references.push({
            kind: 'candidate-output',
            slot: manifest.slot,
            state,
            manifestPath: manifestRelativePath,
            candidateId: candidate.candidateId,
            publicPath: candidate.outputPath
          })

          if (isPublicImagePath(candidate.sourceReference)) {
            references.push({
              kind: 'candidate-source-reference',
              slot: manifest.slot,
              state,
              manifestPath: manifestRelativePath,
              candidateId: candidate.candidateId,
              publicPath: candidate.sourceReference
            })
          }
        }
      }

      continue
    }

    references.push({
      kind: 'stock',
      slot: manifest.slot,
      state: null,
      manifestPath: manifestRelativePath,
      publicPath: manifest.stock.src
    })

    for (const candidate of manifest.candidates) {
      references.push({
        kind: 'candidate-output',
        slot: manifest.slot,
        state: null,
        manifestPath: manifestRelativePath,
        candidateId: candidate.candidateId,
        publicPath: candidate.outputPath
      })

      if (isPublicImagePath(candidate.sourceReference)) {
        references.push({
          kind: 'candidate-source-reference',
          slot: manifest.slot,
          state: null,
          manifestPath: manifestRelativePath,
          candidateId: candidate.candidateId,
          publicPath: candidate.sourceReference
        })
      }
    }
  }

  return references
}

export function validateGeneratedOutputPath({
  slot,
  state = null,
  candidateId,
  outputPath
}) {
  const errors = []
  const normalizedOutputPath = normalizeSlashes(outputPath)
  const extension = extname(normalizedOutputPath).toLowerCase()
  const filename = basename(normalizedOutputPath)
  const basenameWithoutExtension = filename.slice(
    0,
    filename.length - extension.length
  )
  const expectedDirectory = getExpectedGeneratedDirectory(slot, state)
  const escapedSlot = escapeForRegExp(slot)
  const escapedState = state ? escapeForRegExp(state) : null
  const idPattern = state
    ? new RegExp(`^${escapedSlot}-${escapedState}-\\d{17}-[a-z0-9]{6}$`)
    : new RegExp(`^${escapedSlot}-\\d{17}-[a-z0-9]{6}$`)

  if (!expectedDirectory) {
    errors.push(`Unsupported generated slot mapping for "${slot}".`)
  } else if (!normalizedOutputPath.startsWith(`${expectedDirectory}/`)) {
    errors.push(
      `Expected "${candidateId}" to live under "${expectedDirectory}", received "${normalizedOutputPath}".`
    )
  }

  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
    errors.push(`Unsupported generated image extension "${extension}".`)
  }

  if (basenameWithoutExtension !== candidateId) {
    errors.push(
      `Output filename "${filename}" does not match candidate id "${candidateId}".`
    )
  }

  if (!idPattern.test(candidateId)) {
    errors.push(
      `Candidate id "${candidateId}" does not match slot-aware naming rules.`
    )
  }

  return errors
}

export function validateImageAssetRecord(record) {
  const requiredKeys = [
    'assetId',
    'kind',
    'status',
    'publicPath',
    'canonicalName',
    'scope',
    'slot',
    'state',
    'source',
    'licenseNote',
    'sourceReference',
    'manifestPath',
    'usedBy',
    'replacedBy',
    'notes'
  ]

  for (const key of requiredKeys) {
    if (!(key in record)) {
      throw new Error(`Image asset record is missing required key "${key}".`)
    }
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.assetId)) {
    throw new Error(`Image asset id "${record.assetId}" must be kebab-case.`)
  }

  if (!IMAGE_ASSET_KINDS.includes(record.kind)) {
    throw new Error(`Unsupported image asset kind "${record.kind}".`)
  }

  if (!IMAGE_ASSET_STATUSES.includes(record.status)) {
    throw new Error(`Unsupported image asset status "${record.status}".`)
  }

  if (!isPublicImagePath(record.publicPath)) {
    throw new Error(
      `Image asset publicPath "${record.publicPath}" must live under /images/.`
    )
  }

  if (!Array.isArray(record.usedBy)) {
    throw new Error(
      `Image asset "${record.assetId}" must define "usedBy" as an array.`
    )
  }
}

export function buildCatalogIndexes(catalog) {
  const recordsByPath = new Map()
  const recordsById = new Map()

  for (const record of catalog.records) {
    recordsByPath.set(record.publicPath, record)
    recordsById.set(record.assetId, record)
  }

  return { recordsByPath, recordsById }
}

export function isManagedCanonicalAsset(record) {
  return (
    record.status === 'active' &&
    (record.kind === 'brand' || record.kind === 'stock')
  )
}

export function getCanonicalPublicPathForRecord(record) {
  if (record.kind === 'brand') {
    return `/images/brand/${record.canonicalName}`
  }

  if (record.kind === 'stock') {
    return `${getCanonicalStockScopeDirectory(record.scope)}/${record.canonicalName}`
  }

  return record.publicPath
}

export function publicPathToAbsolutePath(publicPath) {
  if (!isPublicImagePath(publicPath)) {
    throw new Error(`Expected a public image path, received "${publicPath}".`)
  }

  return resolve(projectRoot, `public${publicPath}`)
}

export function buildActiveAssetRenameMap(catalog) {
  return catalog.records.filter(isManagedCanonicalAsset).map((record) => ({
    assetId: record.assetId,
    kind: record.kind,
    sourcePublicPath: record.publicPath,
    targetPublicPath: getCanonicalPublicPathForRecord(record),
    sourceAbsolutePath: publicPathToAbsolutePath(record.publicPath),
    targetAbsolutePath: publicPathToAbsolutePath(
      getCanonicalPublicPathForRecord(record)
    ),
    needsMove: record.publicPath !== getCanonicalPublicPathForRecord(record)
  }))
}

async function readAllNanoManifests() {
  const entries = await readdir(nanoManifestDirectory, { withFileTypes: true })
  const manifests = []

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.json')) {
      continue
    }

    const manifestPath = resolve(nanoManifestDirectory, entry.name)
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
    manifests.push({ manifest, manifestPath })
  }

  manifests.sort((left, right) =>
    toProjectRelative(left.manifestPath).localeCompare(
      toProjectRelative(right.manifestPath)
    )
  )

  return manifests
}

function buildAiGeneratedRecords(manifests) {
  const records = []

  for (const { manifest, manifestPath } of manifests) {
    const manifestRelativePath = toProjectRelative(manifestPath)

    if (manifest.states) {
      for (const [state, stateRecord] of Object.entries(manifest.states)) {
        records.push(
          ...buildAiRecordsForCandidateCollection({
            slot: manifest.slot,
            state,
            manifestRelativePath,
            candidates: stateRecord.candidates,
            liveSource: manifest.liveSource
          })
        )
      }

      continue
    }

    records.push(
      ...buildAiRecordsForCandidateCollection({
        slot: manifest.slot,
        state: null,
        manifestRelativePath,
        candidates: manifest.candidates,
        liveSource: manifest.liveSource
      })
    )
  }

  return records
}

function buildAiRecordsForCandidateCollection({
  slot,
  state,
  manifestRelativePath,
  candidates,
  liveSource
}) {
  const promotedIds = new Set(
    candidates
      .filter((candidate) => candidate.status === 'promoted')
      .map((candidate) => candidate.candidateId)
  )
  const latestCandidate =
    [...candidates]
      .reverse()
      .find(
        (candidate) =>
          candidate.status === 'candidate' || candidate.status === 'promoted'
      ) ?? null

  return candidates.map((candidate) => {
    const status =
      promotedIds.has(candidate.candidateId) ||
      (promotedIds.size === 0 &&
        latestCandidate?.candidateId === candidate.candidateId)
        ? 'active'
        : 'candidate-history'

    return {
      assetId: candidate.candidateId,
      kind: 'ai-generated',
      status,
      publicPath: candidate.outputPath,
      canonicalName: basename(candidate.outputPath),
      scope: 'homepage',
      slot,
      state,
      source: 'Nano Banana',
      licenseNote: GENERATED_LICENSE_NOTE,
      sourceReference: candidate.sourceReference ?? null,
      manifestPath: manifestRelativePath,
      usedBy: buildAiUsedBy({
        slot,
        state,
        manifestRelativePath,
        candidateId: candidate.candidateId,
        isLatest: latestCandidate?.candidateId === candidate.candidateId,
        isPromoted: promotedIds.has(candidate.candidateId),
        liveSource
      }),
      replacedBy: null,
      notes: candidate.notes ?? null
    }
  })
}

function buildAiUsedBy({
  slot,
  state,
  manifestRelativePath,
  candidateId,
  isLatest,
  isPromoted,
  liveSource
}) {
  const registryAnchor = state ? `${slot}.states.${state}` : slot
  const manifestAnchor = state
    ? `states.${state}.candidates.${candidateId}`
    : `candidates.${candidateId}`
  const usedBy = [`${manifestRelativePath}#${manifestAnchor}`]

  if (isLatest) {
    usedBy.push(
      `${toProjectRelative(homePageRegistryPath)}#${registryAnchor}.latestCandidate`
    )
  }

  if (isPromoted) {
    usedBy.push(
      `${toProjectRelative(homePageRegistryPath)}#${registryAnchor}.liveNano`
    )
  }

  if (isPromoted && liveSource === 'nano') {
    usedBy.push(
      `${toProjectRelative(homePageRegistryPath)}#${registryAnchor}.liveSource`
    )
  }

  return usedBy
}

function compareImageAssetRecords(left, right) {
  const kindOrder =
    IMAGE_ASSET_KINDS.indexOf(left.kind) - IMAGE_ASSET_KINDS.indexOf(right.kind)

  if (kindOrder !== 0) {
    return kindOrder
  }

  const statusOrder =
    IMAGE_ASSET_STATUSES.indexOf(left.status) -
    IMAGE_ASSET_STATUSES.indexOf(right.status)

  if (statusOrder !== 0) {
    return statusOrder
  }

  return left.publicPath.localeCompare(right.publicPath)
}

async function walkFiles(directoryPath) {
  const entries = await readdir(directoryPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = resolve(directoryPath, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walkFiles(entryPath)))
      continue
    }

    if (entry.isFile()) {
      files.push(entryPath)
    }
  }

  return files
}

function toProjectRelative(filePath) {
  return normalizeSlashes(relative(projectRoot, filePath))
}

function toPublicPath(filePath) {
  const normalized = toProjectRelative(filePath)

  if (!normalized.startsWith('public/')) {
    throw new Error(`Expected "${filePath}" to be inside the public directory.`)
  }

  return `/${normalized.slice('public/'.length)}`
}

function getExpectedGeneratedDirectory(slot, state = null) {
  const definition = GENERATED_OUTPUT_DIRECTORIES[slot]

  if (!definition) {
    return null
  }

  if (typeof definition === 'string') {
    return definition
  }

  return definition[state] ?? null
}

function getCanonicalStockScopeDirectory(scope) {
  const normalizedScope = typeof scope === 'string' ? scope.trim() : ''

  if (!normalizedScope) {
    return activeStockCanonicalRoot
  }

  if (normalizedScope === 'homepage') {
    return `${activeStockCanonicalRoot}/home`
  }

  return `${activeStockCanonicalRoot}/${normalizedScope.replace(/\\/g, '/')}`
}

function normalizeSlashes(value) {
  return value.replace(/\\/g, '/')
}

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function isPublicImagePath(value) {
  return typeof value === 'string' && value.startsWith('/images/')
}

function isImageFilename(value) {
  return /\.(?:svg|png|jpe?g|webp)$/i.test(value)
}
