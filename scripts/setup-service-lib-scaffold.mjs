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

export function generateSlotDefinitions() {
  let definitions = `  'services-overview-hero': {
    slot: 'services-overview-hero',
    displayName: 'Services Overview Hero',
    manifestPath: resolve(projectRoot, 'data/nano-banana/manifests/services-overview-hero.json'),
    outputPublicDirectory: '/images/generated/services/overview',
    outputDirectory: resolve(projectRoot, 'public/images/generated/services/overview'),
    candidatePrefix: 'services-overview-hero',
    candidateLabel: 'Nano Services Overview Hero Candidate',
    defaultPromptId: 'services-overview-hero-v1',
    defaultAspectRatio: '16:9',
    defaultImageSize: '2K'
  },`

  for (const slug of slugs) {
    for (const role of roles) {
      const slotId = `${slug}-${role}`
      const dirName = slug
      const aspect =
        role === 'detail-feature'
          ? '4:3'
          : role === 'overview-card'
            ? '3:2'
            : '16:9'
      definitions += `
  '${slotId}': {
    slot: '${slotId}',
    displayName: '${slug} ${role}',
    manifestPath: resolve(projectRoot, 'data/nano-banana/manifests/${slotId}.json'),
    outputPublicDirectory: '/images/generated/services/${dirName}/${role}',
    outputDirectory: resolve(projectRoot, 'public/images/generated/services/${dirName}/${role}'),
    candidatePrefix: '${slotId}',
    candidateLabel: 'Nano ${slug} ${role} Candidate',
    defaultPromptId: '${slotId}-v1',
    defaultAspectRatio: '${aspect}',
    defaultImageSize: '2K'
  },`
    }
  }
  return definitions
}

export const libContent = `import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { syncImageAssetCatalog } from './image-asset-catalog.mjs'

const scriptDir = dirname(fileURLToPath(import.meta.url))
export const projectRoot = resolve(scriptDir, '..', '..')
export const promptDirectory = resolve(projectRoot, 'data/nano-banana/prompts')
export const servicePageRegistryPath = resolve(projectRoot, 'app/utils/service-page-image-registry.ts')

const ENV_PATHS = ['.env', '.env.local']
const DEFAULT_SLOT = 'services-overview-hero'

export const slotDefinitions = Object.freeze({
${generateSlotDefinitions()}
})

// ... (Rest of the shared utility functions copied from home-hero-nano-banana.mjs)
// I will use string interpolation to include them to keep the script manageable.
`
