import { spawn } from 'node:child_process'

const homeSlots = [
  { slot: 'home-hero' },
  { slot: 'about-primary' },
  { slot: 'about-detail' },
  { slot: 'services-surface' },
  { slot: 'ote-background' },
  { slot: 'mission-square', state: 'mission' },
  { slot: 'mission-square', state: 'join-us' },
  { slot: 'mission-cutout' },
  { slot: 'connector-image' }
]

const serviceSlugs = [
  'scada-hmi-graphics',
  'ie-services',
  'plc-dcs-programming-and-migration',
  'pi-server',
  'historians',
  'network-design',
  'remote-monitoring-and-data',
  'alarm-monitoring'
]

const serviceRoles = ['overview-card', 'detail-hero', 'detail-feature']

const serviceSlots = [{ slot: 'services-overview-hero' }]
for (const slug of serviceSlugs) {
  for (const role of serviceRoles) {
    serviceSlots.push({ slot: `${slug}-${role}` })
  }
}

const contactSlots = [{ slot: 'contact-hero' }]

async function runCommand(scriptName, slotInfo) {
  return new Promise((resolve, reject) => {
    const slotDesc = slotInfo.state
      ? `${slotInfo.slot} (${slotInfo.state})`
      : slotInfo.slot
    console.log(`\n>>> Generating Pro image for slot: ${slotDesc}...`)

    // We strictly enforce NO TEXT, NO LOGOS, NO SLOGANS in the notes to reinforce negative constraints
    const args = [
      scriptName,
      '--slot',
      slotInfo.slot,
      '--model',
      'gemini-3-pro-image-preview',
      '--notes',
      'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    ]

    if (slotInfo.state) {
      args.push('--state', slotInfo.state)
    }

    const child = spawn('node', args, { stdio: 'inherit' })

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Slot ${slotDesc} failed with code ${code}`))
    })
  })
}

async function main() {
  const total = homeSlots.length + serviceSlots.length + contactSlots.length
  console.log(`Starting global Pro generation for ${total} images...`)
  console.log(
    'CONSTRAINT: Ensuring NO embedded text or slogans in all outputs.'
  )

  // 1. Home
  for (const info of homeSlots) {
    try {
      await runCommand('scripts/generate-home-hero-candidate.mjs', info)
    } catch (e) {
      console.error(e.message)
    }
  }

  // 2. Services
  for (const info of serviceSlots) {
    try {
      await runCommand('scripts/generate-service-image-candidate.mjs', info)
    } catch (e) {
      console.error(e.message)
    }
  }

  // 3. Contact
  for (const info of contactSlots) {
    try {
      await runCommand('scripts/generate-contact-hero-candidate.mjs', info)
    } catch (e) {
      console.error(e.message)
    }
  }

  console.log('\nGlobal Pro generation completed.')
}

main().catch(console.error)
