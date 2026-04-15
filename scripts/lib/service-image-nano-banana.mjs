import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { syncImageAssetCatalog } from './image-asset-catalog.mjs'

const scriptDir = dirname(fileURLToPath(import.meta.url))
export const projectRoot = resolve(scriptDir, '..', '..')
export const promptDirectory = resolve(projectRoot, 'data/nano-banana/prompts')
export const servicePageRegistryPath = resolve(
  projectRoot,
  'app/utils/service-page-image-registry.ts'
)

const ENV_PATHS = ['.env', '.env.local']
const DEFAULT_SLOT = 'services-overview-hero'
const DOUBLE_QUOTE = String.fromCharCode(34)
const SINGLE_QUOTE = String.fromCharCode(39)

const slugs = [
  'scada-hmi-graphics',
  'ie-services',
  'plc-dcs-programming-and-migration',
  'pi-server',
  'historians',
  'network-design',
  'remote-monitoring-and-data',
  'alarm-monitoring'
]

const roles = ['overview-card', 'detail-hero', 'detail-feature']

const rawDefinitions = {
  'services-overview-hero': {
    slot: 'services-overview-hero',
    displayName: 'Services Overview Hero',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/services-overview-hero.json'
    ),
    outputPublicDirectory: '/images/generated/services/overview',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/services/overview'
    ),
    candidatePrefix: 'services-overview-hero',
    candidateLabel: 'Nano Services Overview Hero Candidate',
    defaultPromptId: 'services-overview-hero-v1',
    defaultAspectRatio: '16:9',
    defaultImageSize: '2K'
  }
}

for (const slug of slugs) {
  for (const role of roles) {
    const slotId = `${slug}-${role}`
    const aspect =
      role === 'detail-feature'
        ? '4:3'
        : role === 'overview-card'
          ? '3:2'
          : '16:9'
    rawDefinitions[slotId] = {
      slot: slotId,
      displayName: `${slug} ${role}`,
      manifestPath: resolve(
        projectRoot,
        `data/nano-banana/manifests/${slotId}.json`
      ),
      outputPublicDirectory: `/images/generated/services/${slug}/${role}`,
      outputDirectory: resolve(
        projectRoot,
        `public/images/generated/services/${slug}/${role}`
      ),
      candidatePrefix: slotId,
      candidateLabel: `Nano ${slug} ${role} Candidate`,
      defaultPromptId: `${slotId}-v1`,
      defaultAspectRatio: aspect,
      defaultImageSize: '2K'
    }
  }
}

export const slotDefinitions = Object.freeze(rawDefinitions)

export function parseArgs(argv) {
  const args = { _: [] }
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (!token.startsWith('--')) {
      args._.push(token)
      continue
    }
    const key = token.slice(2)
    const nextToken = argv[index + 1]
    if (!nextToken || nextToken.startsWith('--')) {
      args[key] = true
      continue
    }
    args[key] = nextToken
    index += 1
  }
  return args
}

export function getSlotDefinition(slot = DEFAULT_SLOT) {
  const definition = slotDefinitions[slot]
  if (!definition) {
    throw new Error(`Unsupported slot "${slot}".`)
  }
  return definition
}

export function validateSlot(slot) {
  getSlotDefinition(slot)
}

export async function loadEnvFiles() {
  for (const relativePath of ENV_PATHS) {
    const filePath = resolve(projectRoot, relativePath)
    try {
      const content = await readFile(filePath, 'utf8')
      injectEnv(content)
    } catch (error) {
      if (error && typeof error === 'object' && error.code === 'ENOENT')
        continue
      throw error
    }
  }
}

function injectEnv(content) {
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const separatorIndex = line.indexOf('=')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    if (!key || process.env[key]) continue
    let value = line.slice(separatorIndex + 1).trim()
    if (
      (value.startsWith(DOUBLE_QUOTE) && value.endsWith(DOUBLE_QUOTE)) ||
      (value.startsWith(SINGLE_QUOTE) && value.endsWith(SINGLE_QUOTE))
    ) {
      value = value.slice(1, -1)
    }
    process.env[key] = value
  }
}

export async function readManifest(slot = DEFAULT_SLOT) {
  const { manifestPath } = getSlotDefinition(slot)
  try {
    const raw = await readFile(manifestPath, 'utf8')
    return JSON.parse(raw)
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return {
        slot,
        liveSource: 'stock',
        stock: { src: '', label: '' },
        candidates: []
      }
    }
    throw error
  }
}

export async function writeManifest(slot = DEFAULT_SLOT, manifest) {
  const { manifestPath } = getSlotDefinition(slot)
  await ensureDirectory(manifestPath)
  await writeFile(
    manifestPath,
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8'
  )
}

export async function syncRegistryFromManifest(slot = DEFAULT_SLOT, manifest) {
  const manifests = {}
  manifests['services-overview-hero'] =
    slot === 'services-overview-hero'
      ? manifest
      : await readManifest('services-overview-hero')

  const serviceRegistry = {}
  for (const slug of slugs) {
    serviceRegistry[slug] = {}
    for (const role of roles) {
      const slotId = `${slug}-${role}`
      const m = slot === slotId ? manifest : await readManifest(slotId)
      serviceRegistry[slug][role] = createServiceSlotRegistrySource(m)
    }
  }

  const overviewHero = createServiceSlotRegistrySource(
    manifests['services-overview-hero']
  )

  const fileContent = `/* eslint-disable @stylistic/quote-props */
import type { ServiceSlug } from '~~/i18n/locales/types'

export interface BaseServicePageImageAsset {
  src: string
  alt: string
  label: string
  candidateId: string | null
  model: string | null
  promptId: string | null
  source: string
  sourceReference: string | null
  createdAt: string | null
  licenseNote: string | null
  notes: string | null
  objectPosition: string
}

export type ServicesOverviewHeroImageAsset = BaseServicePageImageAsset
export type ServiceRoleImageAsset = BaseServicePageImageAsset

export type ServiceImageRole =
  | 'overview-card'
  | 'detail-hero'
  | 'detail-feature'

export interface ServiceImageSlotRegistry {
  slot: string
  liveSource: 'stock' | 'nano'
  stock: ServiceRoleImageAsset
  liveNano: ServiceRoleImageAsset | null
  latestCandidate: ServiceRoleImageAsset | null
}

export type ServicePageImageRegistry = Record<
  ServiceSlug,
  Record<ServiceImageRole, ServiceImageSlotRegistry>
>

export interface ServicesOverviewHeroRegistry {
  slot: 'services-overview-hero'
  liveSource: 'stock' | 'nano'
  stock: ServicesOverviewHeroImageAsset
  liveNano: ServicesOverviewHeroImageAsset | null
  latestCandidate: ServicesOverviewHeroImageAsset | null
}

export const servicesOverviewHeroRegistry: ServicesOverviewHeroRegistry = ${JSON.stringify(overviewHero, null, 2)} as ServicesOverviewHeroRegistry

export const servicePageImageRegistry: ServicePageImageRegistry = ${JSON.stringify(serviceRegistry, null, 2)} as ServicePageImageRegistry

export function getServicePageImageEntry(
  slug: ServiceSlug,
  role: ServiceImageRole
): ServiceImageSlotRegistry {
  return servicePageImageRegistry[slug][role]
}

export function getServicesOverviewHeroImageEntry(): ServicesOverviewHeroRegistry {
  return servicesOverviewHeroRegistry
}
`

  await ensureDirectory(servicePageRegistryPath)
  await writeFile(
    servicePageRegistryPath,
    await formatTypeScriptContent(fileContent),
    'utf8'
  )
  await syncImageAssetCatalog()
}

function createServiceSlotRegistrySource(manifest) {
  const promotedCandidate =
    manifest.candidates.find((candidate) => candidate.status === 'promoted') ??
    null
  const latestCandidate =
    [...manifest.candidates]
      .reverse()
      .find(
        (candidate) =>
          candidate.status === 'candidate' || candidate.status === 'promoted'
      ) ?? null

  return {
    slot: manifest.slot,
    liveSource:
      manifest.liveSource === 'nano' && promotedCandidate ? 'nano' : 'stock',
    stock: createStockAsset(manifest.stock),
    liveNano: createNanoAsset(promotedCandidate),
    latestCandidate: createNanoAsset(latestCandidate)
  }
}

function createStockAsset(stock) {
  return {
    src: stock.src || '',
    alt: stock.alt || '',
    label: stock.label || '',
    candidateId: null,
    model: null,
    promptId: null,
    source: stock.source || '',
    sourceReference: stock.sourceReference || null,
    createdAt: null,
    licenseNote: stock.licenseNote || null,
    notes: stock.notes || null,
    objectPosition: stock.objectPosition || 'center center'
  }
}

function createNanoAsset(candidate) {
  if (!candidate) return null
  return {
    src: candidate.outputPath,
    alt: '',
    label: candidate.label || 'Nano Service Candidate',
    candidateId: candidate.candidateId,
    model: candidate.model,
    promptId: candidate.promptId || null,
    source: 'Nano Banana',
    sourceReference: candidate.sourceReference || null,
    createdAt: candidate.createdAt,
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes: candidate.notes || null,
    objectPosition: 'center center'
  }
}

export async function resolvePrompt({ promptId, promptFile }) {
  const resolvedPath = promptId
    ? resolve(promptDirectory, `${promptId}.txt`)
    : resolve(projectRoot, promptFile)
  const prompt = await readFile(resolvedPath, 'utf8')
  return {
    prompt: prompt.trim(),
    promptId: promptId || null,
    promptFile: toProjectRelative(resolvedPath)
  }
}

export async function readReferenceImage(referencePath) {
  if (!referencePath) return null
  const resolvedPath = referencePath.startsWith('/')
    ? resolve(projectRoot, 'public', referencePath.slice(1))
    : resolve(projectRoot, referencePath)
  const buffer = await readFile(resolvedPath)
  const extension = extname(resolvedPath).toLowerCase()
  const mimeType = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp'
  }[extension]
  return {
    mimeType,
    data: buffer.toString('base64'),
    sourceReference: toPublicPath(resolvedPath)
  }
}

export function createCandidateId(slot = DEFAULT_SLOT) {
  const { candidatePrefix } = getSlotDefinition(slot)
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '')
  const randomSuffix = Math.random().toString(36).slice(2, 8)
  return `${candidatePrefix}-${timestamp}-${randomSuffix}`
}

export function createOutputPath(slot = DEFAULT_SLOT, candidateId, mimeType) {
  const { outputPublicDirectory } = getSlotDefinition(slot)
  const extension =
    {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp'
    }[mimeType] || 'png'
  return `${outputPublicDirectory}/${candidateId}.${extension}`
}

export async function writeGeneratedImage(publicPath, buffer) {
  const absolutePath = resolve(projectRoot, `public${publicPath}`)
  await ensureDirectory(absolutePath)
  await writeFile(absolutePath, buffer)
  return absolutePath
}

export function pickFirstImagePart(responseJson) {
  const parts = responseJson?.candidates?.[0]?.content?.parts || []
  for (const part of parts) {
    if (part.inlineData?.data) {
      return part.inlineData
    }
  }

  return null
}

export function pickTextResponse(responseJson) {
  const parts = responseJson?.candidates?.[0]?.content?.parts || []
  return parts
    .filter(
      (part) => typeof part.text === 'string' && part.text.trim().length > 0
    )
    .map((part) => part.text.trim())
    .join('\n\n')
}

export async function ensureDirectory(targetPath) {
  await mkdir(dirname(targetPath), { recursive: true })
}

export function toProjectRelative(filePath) {
  return relative(projectRoot, filePath).replace(/\\/g, '/')
}

export function toPublicPath(filePath) {
  const normalized = toProjectRelative(filePath)

  if (normalized.startsWith('public/')) {
    return `/${normalized.slice('public/'.length)}`
  }

  return normalized
}

async function formatTypeScriptContent(content) {
  try {
    const prettier = await import('prettier')

    return await prettier.format(content, {
      parser: 'typescript',
      singleQuote: true,
      semi: false,
      trailingComma: 'none'
    })
  } catch {
    return content
  }
}
