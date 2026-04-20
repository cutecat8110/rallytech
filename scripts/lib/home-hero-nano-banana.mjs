import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { syncImageAssetCatalog } from './image-asset-catalog.mjs'

const scriptDir = dirname(fileURLToPath(import.meta.url))
export const projectRoot = resolve(scriptDir, '..', '..')
export const promptDirectory = resolve(projectRoot, 'data/nano-banana/prompts')
export const homePageRegistryPath = resolve(
  projectRoot,
  'app/utils/home-page-image-registry.ts'
)

const ENV_PATHS = ['.env', '.env.local']
const DEFAULT_SLOT = 'home-hero'
const MISSION_STATE = 'mission'
const JOIN_US_STATE = 'join-us'
const DOUBLE_QUOTE = String.fromCharCode(34)
const SINGLE_QUOTE = String.fromCharCode(39)

export const slotDefinitions = Object.freeze({
  'home-hero': {
    slot: 'home-hero',
    displayName: 'Home Hero',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/home-hero.json'
    ),
    outputPublicDirectory: '/images/generated/home/hero',
    outputDirectory: resolve(projectRoot, 'public/images/generated/home/hero'),
    candidatePrefix: 'home-hero',
    candidateLabel: 'Nano Hero Candidate',
    defaultPromptId: 'home-hero-v6',
    defaultAspectRatio: '16:9',
    defaultImageSize: '2K',
    registry: {
      enabled: true,
      path: resolve(projectRoot, 'app/utils/home-hero-image-registry.ts')
    }
  },
  'about-primary': {
    slot: 'about-primary',
    displayName: 'About Primary',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/about-primary.json'
    ),
    outputPublicDirectory: '/images/generated/home/about-primary',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/home/about-primary'
    ),
    candidatePrefix: 'about-primary',
    candidateLabel: 'Nano About Primary Candidate',
    defaultPromptId: 'about-primary-v2',
    defaultAspectRatio: '4:5',
    defaultImageSize: '2K',
    registry: {
      enabled: false,
      path: null
    }
  },
  'about-detail': {
    slot: 'about-detail',
    displayName: 'About Detail',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/about-detail.json'
    ),
    outputPublicDirectory: '/images/generated/home/about-detail',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/home/about-detail'
    ),
    candidatePrefix: 'about-detail',
    candidateLabel: 'Nano About Detail Candidate',
    defaultPromptId: 'about-detail-v2',
    defaultAspectRatio: '4:5',
    defaultImageSize: '2K',
    registry: {
      enabled: false,
      path: null
    }
  },
  'ote-background': {
    slot: 'ote-background',
    displayName: 'OTE Background',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/ote-background.json'
    ),
    outputPublicDirectory: '/images/generated/home/ote-background',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/home/ote-background'
    ),
    candidatePrefix: 'ote-background',
    candidateLabel: 'Nano OTE Background Candidate',
    defaultPromptId: 'ote-background-v5',
    defaultAspectRatio: '16:9',
    defaultImageSize: '2K',
    registry: {
      enabled: false,
      path: null
    }
  },
  'services-surface': {
    slot: 'services-surface',
    displayName: 'Services Surface',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/services-surface.json'
    ),
    outputPublicDirectory: '/images/generated/home/services-surface',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/home/services-surface'
    ),
    candidatePrefix: 'services-surface',
    candidateLabel: 'Nano Services Surface Candidate',
    defaultPromptId: 'services-surface-v2',
    defaultAspectRatio: '16:9',
    defaultImageSize: '2K',
    registry: {
      enabled: false,
      path: null
    }
  },
  'connector-image': {
    slot: 'connector-image',
    displayName: 'Connector Image',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/connector-image.json'
    ),
    outputPublicDirectory: '/images/generated/home/connector-image',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/home/connector-image'
    ),
    candidatePrefix: 'connector-image',
    candidateLabel: 'Nano Connector Image Candidate',
    defaultPromptId: 'connector-image-v3',
    defaultAspectRatio: '4:5',
    defaultImageSize: '2K',
    registry: {
      enabled: false,
      path: null
    }
  },
  'mission-square': {
    slot: 'mission-square',
    displayName: 'Mission Square',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/mission-square.json'
    ),
    candidatePrefix: 'mission-square',
    candidateLabel: 'Nano Mission Square Candidate',
    defaultAspectRatio: '1:1',
    defaultImageSize: '2K',
    stateRequired: true,
    states: {
      [MISSION_STATE]: {
        state: MISSION_STATE,
        displayName: 'Mission Square / Mission',
        defaultPromptId: 'mission-square-mission-v3',
        outputPublicDirectory: '/images/generated/home/mission-square/mission'
      },
      [JOIN_US_STATE]: {
        state: JOIN_US_STATE,
        displayName: 'Mission Square / Join Us',
        defaultPromptId: 'mission-square-join-us-v3',
        outputPublicDirectory: '/images/generated/home/mission-square/join-us'
      }
    },
    registry: {
      enabled: false,
      path: null
    }
  },
  'mission-cutout': {
    slot: 'mission-cutout',
    displayName: 'Mission Cutout',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/mission-cutout.json'
    ),
    outputPublicDirectory: '/images/generated/home/mission-cutout',
    outputDirectory: resolve(
      projectRoot,
      'public/images/generated/home/mission-cutout'
    ),
    candidatePrefix: 'mission-cutout',
    candidateLabel: 'Nano Mission Cutout Candidate',
    defaultPromptId: 'mission-cutout-v4',
    defaultAspectRatio: '4:5',
    defaultImageSize: '2K',
    registry: {
      enabled: false,
      path: null
    }
  },
  'about-process-step': {
    slot: 'about-process-step',
    displayName: 'About Process Step',
    manifestPath: resolve(
      projectRoot,
      'data/nano-banana/manifests/about-process-step.json'
    ),
    candidatePrefix: 'about-process-step',
    candidateLabel: 'Nano Process Step Candidate',
    defaultAspectRatio: '1:1',
    defaultImageSize: '2K',
    stateRequired: true,
    states: {
      '01': {
        state: '01',
        displayName: 'Process Step 01: Scope',
        defaultPromptId: 'about-process-step-01-v1',
        outputPublicDirectory: '/images/generated/home/about-process/01'
      },
      '02': {
        state: '02',
        displayName: 'Process Step 02: Planning',
        defaultPromptId: 'about-process-step-02-v1',
        outputPublicDirectory: '/images/generated/home/about-process/02'
      },
      '03': {
        state: '03',
        displayName: 'Process Step 03: Execution',
        defaultPromptId: 'about-process-step-03-v1',
        outputPublicDirectory: '/images/generated/home/about-process/03'
      },
      '04': {
        state: '04',
        displayName: 'Process Step 04: Handover',
        defaultPromptId: 'about-process-step-04-v1',
        outputPublicDirectory: '/images/generated/home/about-process/04'
      }
    },
    registry: {
      enabled: false,
      path: null
    }
  }
})

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
    throw new Error(
      `Unsupported slot "${slot}". Supported slots: ${Object.keys(slotDefinitions).join(', ')}.`
    )
  }

  return definition
}

export function validateSlot(slot) {
  getSlotDefinition(slot)
}

export function validateSlotState(slot, state = null) {
  const definition = getSlotDefinition(slot)
  const normalizedState = typeof state === 'string' ? state : null

  if (definition.stateRequired) {
    if (!normalizedState) {
      throw new Error(`Slot "${slot}" requires --state.`)
    }

    if (!definition.states?.[normalizedState]) {
      throw new Error(
        `Unsupported state "${normalizedState}" for slot "${slot}". Supported states: ${Object.keys(
          definition.states ?? {}
        ).join(', ')}.`
      )
    }

    return normalizedState
  }

  if (normalizedState) {
    throw new Error(`Slot "${slot}" does not accept --state.`)
  }

  return null
}

export function getSlotStateDefinition(slot, state = null) {
  const definition = getSlotDefinition(slot)
  const normalizedState = validateSlotState(slot, state)

  if (!normalizedState) {
    return null
  }

  return definition.states[normalizedState]
}

export async function loadEnvFiles() {
  for (const relativePath of ENV_PATHS) {
    const filePath = resolve(projectRoot, relativePath)

    try {
      const content = await readFile(filePath, 'utf8')
      injectEnv(content)
    } catch (error) {
      if (error && typeof error === 'object' && error.code === 'ENOENT') {
        continue
      }

      throw error
    }
  }
}

function injectEnv(content) {
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()

    if (!line || line.startsWith('#')) {
      continue
    }

    const separatorIndex = line.indexOf('=')

    if (separatorIndex === -1) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()

    if (!key || process.env[key]) {
      continue
    }

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
  const raw = await readFile(manifestPath, 'utf8')
  return JSON.parse(raw)
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
  const registrySource = await buildHomePageRegistrySource(slot, manifest)
  const serializedRegistry = JSON.stringify(registrySource, null, 2)

  const fileContent = `/* eslint-disable @stylistic/quote-props */

export type HomePageImageSourceKey = 'stock' | 'nano'

export type HomePageSingleImageSlotKey =
  | 'home-hero'
  | 'about-primary'
  | 'about-detail'
  | 'services-surface'
  | 'ote-background'
  | 'mission-cutout'
  | 'connector-image'

export type HomePageStateAwareSlotKey = 'mission-square'
export type HomePageImageSlotKey =
  | HomePageSingleImageSlotKey
  | HomePageStateAwareSlotKey
export type HomePageImageStateKey = 'mission' | 'join-us'

export interface HomePageImageAsset {
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
}

export interface HomePageImageSlotRegistry {
  slot: HomePageImageSlotKey
  state?: HomePageImageStateKey
  liveSource: HomePageImageSourceKey
  stock: HomePageImageAsset
  liveNano: HomePageImageAsset | null
  latestCandidate: HomePageImageAsset | null
}

export interface HomePageStateAwareImageRegistry {
  slot: 'mission-square'
  liveSource: HomePageImageSourceKey
  states: Record<HomePageImageStateKey, HomePageImageSlotRegistry>
}

export interface HomePageImageRegistry {
  'home-hero': HomePageImageSlotRegistry
  'about-primary': HomePageImageSlotRegistry
  'about-detail': HomePageImageSlotRegistry
  'services-surface': HomePageImageSlotRegistry
  'ote-background': HomePageImageSlotRegistry
  'mission-square': HomePageStateAwareImageRegistry
  'mission-cutout': HomePageImageSlotRegistry
  'connector-image': HomePageImageSlotRegistry
}

// 由 generate/promote workflow 同步更新；前端只讀這份精簡 registry。
export const homePageImageRegistry: HomePageImageRegistry = ${serializedRegistry} as HomePageImageRegistry

export function getHomePageImageEntry(
  slot: HomePageSingleImageSlotKey
): HomePageImageSlotRegistry
export function getHomePageImageEntry(
  slot: HomePageStateAwareSlotKey,
  state: HomePageImageStateKey
): HomePageImageSlotRegistry
export function getHomePageImageEntry(
  slot: HomePageImageSlotKey,
  state?: HomePageImageStateKey
): HomePageImageSlotRegistry {
  const stateAwareSlots: HomePageStateAwareSlotKey[] = [
    'mission-square',
    'about-process-step'
  ]

  if (stateAwareSlots.includes(slot as HomePageStateAwareSlotKey)) {
    if (!state) {
      throw new Error('Slot "' + slot + '" requires state.')
    }

    return (homePageImageRegistry[slot as HomePageStateAwareSlotKey] as any)
      .states[state]
  }

  return homePageImageRegistry[slot as HomePageSingleImageSlotKey]
}
`

  await ensureDirectory(homePageRegistryPath)
  await writeFile(
    homePageRegistryPath,
    await formatTypeScriptContent(fileContent),
    'utf8'
  )
  await syncImageAssetCatalog()
}

export async function resolvePrompt({
  slot = DEFAULT_SLOT,
  state = null,
  promptId,
  promptFile
}) {
  if (promptId && promptFile) {
    throw new Error('Use either --prompt-id or --prompt-file, not both.')
  }

  if (!promptId && !promptFile) {
    throw new Error(
      'Missing prompt input. Provide --prompt-id or --prompt-file.'
    )
  }

  const slotDefinition = getSlotDefinition(slot)
  const stateDefinition = slotDefinition.stateRequired
    ? getSlotStateDefinition(slot, state)
    : null

  const resolvedPath = promptId
    ? resolve(promptDirectory, `${promptId}.txt`)
    : resolve(projectRoot, promptFile)

  const prompt = await readFile(resolvedPath, 'utf8')
  return {
    prompt: prompt.trim(),
    promptId:
      promptId ??
      stateDefinition?.defaultPromptId ??
      slotDefinition.defaultPromptId ??
      null,
    promptFile: toProjectRelative(resolvedPath)
  }
}

export async function readReferenceImage(referencePath) {
  if (!referencePath) {
    return null
  }

  const resolvedPath = referencePath.startsWith('/')
    ? resolve(projectRoot, 'public', referencePath.slice(1))
    : resolve(projectRoot, referencePath)
  const buffer = await readFile(resolvedPath)
  const extension = extname(resolvedPath).toLowerCase()
  const mimeType = EXTENSION_TO_MIME[extension]

  if (!mimeType) {
    throw new Error(
      `Unsupported reference image extension "${extension}". Supported: ${Object.keys(
        EXTENSION_TO_MIME
      ).join(', ')}`
    )
  }

  return {
    mimeType,
    data: buffer.toString('base64'),
    sourceReference: toPublicPath(resolvedPath)
  }
}

export function createCandidateId(slot = DEFAULT_SLOT, state = null) {
  const { candidatePrefix } = getSlotDefinition(slot)
  const normalizedState = validateSlotState(slot, state)
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '')
  const randomSuffix = Math.random().toString(36).slice(2, 8)

  if (normalizedState) {
    return `${candidatePrefix}-${normalizedState}-${timestamp}-${randomSuffix}`
  }

  return `${candidatePrefix}-${timestamp}-${randomSuffix}`
}

export function createOutputPath(
  slot = DEFAULT_SLOT,
  candidateId,
  mimeType,
  state = null
) {
  const slotDefinition = getSlotDefinition(slot)
  const stateDefinition = slotDefinition.stateRequired
    ? getSlotStateDefinition(slot, state)
    : null
  const outputPublicDirectory =
    stateDefinition?.outputPublicDirectory ??
    slotDefinition.outputPublicDirectory
  const extension = MIME_TO_EXTENSION[mimeType] ?? 'png'
  return `${outputPublicDirectory}/${candidateId}.${extension}`
}

export function getCandidateCollection(
  manifest,
  slot = DEFAULT_SLOT,
  state = null
) {
  const slotDefinition = getSlotDefinition(slot)

  if (!slotDefinition.stateRequired) {
    return manifest.candidates
  }

  const normalizedState = getSlotStateDefinition(slot, state)?.state
  return manifest.states[normalizedState].candidates
}

export function getStockAsset(manifest, slot = DEFAULT_SLOT, state = null) {
  const slotDefinition = getSlotDefinition(slot)

  if (!slotDefinition.stateRequired) {
    return manifest.stock
  }

  const normalizedState = getSlotStateDefinition(slot, state)?.state
  return manifest.states[normalizedState].stock
}

export async function writeGeneratedImage(publicPath, buffer) {
  const absolutePath = resolve(projectRoot, `public${publicPath}`)
  await ensureDirectory(absolutePath)
  await writeFile(absolutePath, buffer)
  return absolutePath
}

export function pickFirstImagePart(responseJson) {
  const parts = responseJson?.candidates?.[0]?.content?.parts ?? []

  for (const part of parts) {
    if (part.inlineData?.data) {
      return part.inlineData
    }
  }

  return null
}

export function pickTextResponse(responseJson) {
  const parts = responseJson?.candidates?.[0]?.content?.parts ?? []
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

async function buildHomePageRegistrySource(
  updatedSlot = DEFAULT_SLOT,
  updatedManifest = null
) {
  const slotKeys = [
    'home-hero',
    'about-primary',
    'about-detail',
    'services-surface',
    'ote-background',
    'mission-square',
    'mission-cutout',
    'connector-image',
    'about-process-step'
  ]

  const manifests = {}

  for (const slotKey of slotKeys) {
    manifests[slotKey] =
      slotKey === updatedSlot && updatedManifest
        ? updatedManifest
        : await readManifest(slotKey)
  }

  return {
    'home-hero': createSingleSlotRegistrySource(manifests['home-hero']),
    'about-primary': createSingleSlotRegistrySource(manifests['about-primary']),
    'about-detail': createSingleSlotRegistrySource(manifests['about-detail']),
    'services-surface': createSingleSlotRegistrySource(
      manifests['services-surface']
    ),
    'ote-background': createSingleSlotRegistrySource(
      manifests['ote-background']
    ),
    'mission-square': createMissionSquareRegistrySource(
      manifests['mission-square']
    ),
    'mission-cutout': createSingleSlotRegistrySource(
      manifests['mission-cutout']
    ),
    'connector-image': createSingleSlotRegistrySource(
      manifests['connector-image']
    ),
    'about-process-step': createAboutProcessStepRegistrySource(
      manifests['about-process-step']
    )
  }
}

function createAboutProcessStepRegistrySource(manifest) {
  return {
    slot: manifest.slot,
    liveSource: manifest.liveSource === 'nano' ? 'nano' : 'stock',
    states: {
      '01': createStateSlotRegistrySource(
        manifest,
        '01',
        manifest.states['01']
      ),
      '02': createStateSlotRegistrySource(
        manifest,
        '02',
        manifest.states['02']
      ),
      '03': createStateSlotRegistrySource(
        manifest,
        '03',
        manifest.states['03']
      ),
      '04': createStateSlotRegistrySource(manifest, '04', manifest.states['04'])
    }
  }
}

function createSingleSlotRegistrySource(manifest) {
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

function createMissionSquareRegistrySource(manifest) {
  return {
    slot: manifest.slot,
    liveSource: manifest.liveSource === 'nano' ? 'nano' : 'stock',
    states: {
      // eslint-disable-next-line @stylistic/quote-props
      mission: createStateSlotRegistrySource(
        manifest,
        MISSION_STATE,
        manifest.states[MISSION_STATE]
      ),
      'join-us': createStateSlotRegistrySource(
        manifest,
        JOIN_US_STATE,
        manifest.states[JOIN_US_STATE]
      )
    }
  }
}

function createStateSlotRegistrySource(manifest, state, stateRecord) {
  const promotedCandidate =
    stateRecord.candidates.find(
      (candidate) => candidate.status === 'promoted'
    ) ?? null
  const latestCandidate =
    [...stateRecord.candidates]
      .reverse()
      .find(
        (candidate) =>
          candidate.status === 'candidate' || candidate.status === 'promoted'
      ) ?? null

  return {
    slot: manifest.slot,
    state,
    liveSource:
      manifest.liveSource === 'nano' && promotedCandidate ? 'nano' : 'stock',
    stock: createStockAsset(stateRecord.stock),
    liveNano: createNanoAsset(promotedCandidate),
    latestCandidate: createNanoAsset(latestCandidate)
  }
}

function createStockAsset(stock) {
  return {
    src: stock.src,
    alt: stock.alt ?? '',
    label: stock.label,
    candidateId: null,
    model: null,
    promptId: null,
    source: stock.source,
    sourceReference: stock.assetPage ?? null,
    createdAt: null,
    licenseNote: stock.licenseNote ?? null,
    notes: stock.notes ?? null
  }
}

function createNanoAsset(candidate) {
  if (!candidate) {
    return null
  }

  return {
    src: candidate.outputPath,
    alt: '',
    label: candidate.label ?? 'Nano Homepage Candidate',
    candidateId: candidate.candidateId,
    model: candidate.model,
    promptId: candidate.promptId ?? null,
    source: 'Nano Banana',
    sourceReference: candidate.sourceReference ?? null,
    createdAt: candidate.createdAt,
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes: candidate.notes ?? null
  }
}

const EXTENSION_TO_MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
}

const MIME_TO_EXTENSION = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp'
}
