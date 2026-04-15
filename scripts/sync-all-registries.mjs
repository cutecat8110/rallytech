import { readManifest, syncRegistryFromManifest } from './lib/home-hero-nano-banana.mjs'

async function main() {
  const manifest = await readManifest('about-process-step')
  await syncRegistryFromManifest('about-process-step', manifest)
  console.log('Registry synced successfully.')
}

main().catch(console.error)
