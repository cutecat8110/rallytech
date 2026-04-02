import {
  createCandidateId,
  createOutputPath,
  getCandidateCollection,
  getSlotDefinition,
  getSlotStateDefinition,
  loadEnvFiles,
  parseArgs,
  pickFirstImagePart,
  pickTextResponse,
  readManifest,
  readReferenceImage,
  resolvePrompt,
  syncRegistryFromManifest,
  validateSlot,
  validateSlotState,
  writeGeneratedImage,
  writeManifest
} from './lib/home-hero-nano-banana.mjs'

const DEFAULT_SLOT = 'home-hero'

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const slot = String(args.slot ?? DEFAULT_SLOT)
  const state =
    typeof args.state === 'string' ? String(args.state).trim() : null

  validateSlot(slot)
  validateSlotState(slot, state)
  await loadEnvFiles()

  const slotDefinition = getSlotDefinition(slot)
  const stateDefinition = getSlotStateDefinition(slot, state)

  const apiKey = process.env.GEMINI_API_KEY
  const defaultModel =
    process.env.NANO_BANANA_MODEL ?? 'gemini-3.1-flash-image-preview'
  const model = String(args.model ?? defaultModel)
  const aspectRatioValue =
    args['aspect-ratio'] ??
    stateDefinition?.defaultAspectRatio ??
    slotDefinition.defaultAspectRatio
  const aspectRatio = String(aspectRatioValue)
  const imageSize = String(
    args['image-size'] ?? slotDefinition.defaultImageSize
  )
  const positionalArgs = Array.isArray(args._) ? args._ : []
  const referenceArg =
    typeof args.reference === 'string'
      ? args.reference
      : (positionalArgs[0] ?? null)
  const notes =
    typeof args.notes === 'string' ? args.notes : (positionalArgs[1] ?? '')
  const promptFileArg =
    typeof args['prompt-file'] === 'string' ? args['prompt-file'] : null

  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY in environment.')
  }

  const { prompt, promptFile, promptId } = await resolvePrompt({
    slot,
    state,
    promptId: promptFileArg
      ? null
      : typeof args['prompt-id'] === 'string'
        ? args['prompt-id']
        : (stateDefinition?.defaultPromptId ?? slotDefinition.defaultPromptId),
    promptFile: promptFileArg
  })
  const referenceImage = await readReferenceImage(referenceArg)

  const requestParts = [{ text: prompt }]

  if (referenceImage) {
    requestParts.push({
      inlineData: {
        mimeType: referenceImage.mimeType,
        data: referenceImage.data
      }
    })
  }

  const imageConfig =
    model === 'gemini-2.5-flash-image'
      ? {
          aspectRatio
        }
      : {
          aspectRatio,
          imageSize
        }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: requestParts
          }
        ],
        generationConfig: {
          imageConfig
        }
      })
    }
  )

  const responseJson = await response.json()

  if (!response.ok) {
    throw new Error(
      `Nano Banana request failed (${response.status}): ${JSON.stringify(responseJson)}`
    )
  }

  const imagePart = pickFirstImagePart(responseJson)

  if (!imagePart?.data || !imagePart.mimeType) {
    throw new Error(
      `Model did not return an image. Response text: ${pickTextResponse(responseJson) || 'N/A'}`
    )
  }

  const candidateId = createCandidateId(slot, state)
  const outputPath = createOutputPath(
    slot,
    candidateId,
    imagePart.mimeType,
    state
  )
  const buffer = Buffer.from(imagePart.data, 'base64')
  await writeGeneratedImage(outputPath, buffer)

  const manifest = await readManifest(slot)
  const candidates = getCandidateCollection(manifest, slot, state)

  candidates.push({
    slot,
    state,
    candidateId,
    label: stateDefinition?.displayName ?? slotDefinition.candidateLabel,
    model,
    promptId,
    promptFile,
    prompt,
    aspectRatio,
    imageSize,
    sourceReference: referenceImage?.sourceReference ?? null,
    createdAt: new Date().toISOString(),
    status: 'candidate',
    outputPath,
    outputBytes: buffer.byteLength,
    notes,
    responseText: pickTextResponse(responseJson) || null
  })

  await writeManifest(slot, manifest)
  await syncRegistryFromManifest(slot, manifest)

  console.log(
    `Created ${stateDefinition?.displayName ?? slotDefinition.displayName} candidate: ${candidateId}`
  )
  console.log(`Output: ${outputPath}`)
}

await main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
