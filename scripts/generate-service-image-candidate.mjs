import {
  createCandidateId,
  createOutputPath,
  getSlotDefinition,
  loadEnvFiles,
  parseArgs,
  pickFirstImagePart,
  pickTextResponse,
  readManifest,
  readReferenceImage,
  resolvePrompt,
  syncRegistryFromManifest,
  validateSlot,
  writeGeneratedImage,
  writeManifest
} from './lib/service-image-nano-banana.mjs'

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const slot = String(args.slot || 'services-overview-hero')

  validateSlot(slot)
  await loadEnvFiles()

  const slotDefinition = getSlotDefinition(slot)
  const apiKey = process.env.GEMINI_API_KEY
  const model = String(
    args.model ||
      process.env.NANO_BANANA_MODEL ||
      'gemini-3.1-flash-image-preview'
  )
  const aspectRatio = String(
    args['aspect-ratio'] || slotDefinition.defaultAspectRatio
  )
  const imageSize = String(
    args['image-size'] || slotDefinition.defaultImageSize
  )
  const referenceArg = args.reference || null
  const notes = args.notes || ''
  const promptId = args['prompt-id'] || slotDefinition.defaultPromptId

  if (!apiKey) throw new Error('Missing GEMINI_API_KEY in environment.')

  const { prompt, promptFile } = await resolvePrompt({ slot, promptId })
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
      ? { aspectRatio }
      : { aspectRatio, imageSize }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ parts: requestParts }],
        generationConfig: { imageConfig }
      })
    }
  )

  const responseJson = await response.json()
  if (!response.ok)
    throw new Error(`Nano Banana failed: ${JSON.stringify(responseJson)}`)

  const imagePart = pickFirstImagePart(responseJson)
  if (!imagePart?.data)
    throw new Error(
      `No image returned. Response: ${pickTextResponse(responseJson)}`
    )

  const candidateId = createCandidateId(slot)
  const outputPath = createOutputPath(slot, candidateId, imagePart.mimeType)
  const buffer = Buffer.from(imagePart.data, 'base64')
  await writeGeneratedImage(outputPath, buffer)

  const manifest = await readManifest(slot)
  manifest.candidates.push({
    slot,
    candidateId,
    label: slotDefinition.candidateLabel,
    model,
    promptId,
    promptFile,
    prompt,
    aspectRatio,
    imageSize,
    sourceReference: referenceImage?.sourceReference || null,
    createdAt: new Date().toISOString(),
    status: 'candidate',
    outputPath,
    outputBytes: buffer.byteLength,
    notes,
    responseText: pickTextResponse(responseJson) || null
  })

  await writeManifest(slot, manifest)
  await syncRegistryFromManifest(slot, manifest)

  console.log(`Created candidate for ${slot}: ${candidateId}`)
  console.log(`Output: ${outputPath}`)
}

main().catch(console.error)
