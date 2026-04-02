import {
  getCandidateCollection,
  getSlotDefinition,
  getSlotStateDefinition,
  loadEnvFiles,
  parseArgs,
  readManifest,
  syncRegistryFromManifest,
  validateSlot,
  validateSlotState,
  writeManifest
} from './lib/home-hero-nano-banana.mjs'

const DEFAULT_SLOT = 'home-hero'

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const slot = String(args.slot ?? DEFAULT_SLOT)
  const state =
    typeof args.state === 'string' ? String(args.state).trim() : null
  const candidateId =
    typeof args['candidate-id'] === 'string' ? args['candidate-id'] : ''
  const activate = Boolean(args.activate)

  validateSlot(slot)
  validateSlotState(slot, state)
  await loadEnvFiles()

  const slotDefinition = getSlotDefinition(slot)
  const stateDefinition = getSlotStateDefinition(slot, state)

  if (!candidateId) {
    throw new Error('Missing --candidate-id for promotion.')
  }

  const manifest = await readManifest(slot)
  const candidates = getCandidateCollection(manifest, slot, state)
  const targetCandidate = candidates.find(
    (candidate) =>
      candidate.slot === slot &&
      candidate.candidateId === candidateId &&
      (stateDefinition ? candidate.state === stateDefinition.state : true)
  )

  if (!targetCandidate) {
    throw new Error(`Candidate "${candidateId}" was not found in ${slot}.`)
  }

  for (const candidate of candidates) {
    if (candidate.candidateId === candidateId) {
      candidate.status = 'promoted'
      continue
    }

    if (candidate.status === 'promoted') {
      candidate.status = 'candidate'
    }
  }

  if (activate) {
    manifest.liveSource = 'nano'
  }

  await writeManifest(slot, manifest)
  await syncRegistryFromManifest(slot, manifest)

  console.log(
    `Promoted ${stateDefinition?.displayName ?? slotDefinition.displayName} candidate: ${candidateId}`
  )
  console.log(`Live source: ${manifest.liveSource}`)
}

await main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
