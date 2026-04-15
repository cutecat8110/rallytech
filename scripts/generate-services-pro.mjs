import { spawn } from 'node:child_process'

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

const slots = ['services-overview-hero']
for (const slug of slugs) {
  for (const role of roles) {
    slots.push(`${slug}-${role}`)
  }
}

async function runCommand(slot) {
  return new Promise((resolve, reject) => {
    console.log(`\n>>> Generating Pro image for slot: ${slot}...`)
    
    const args = [
      'scripts/generate-service-image-candidate.mjs',
      '--slot', slot,
      '--model', 'gemini-3-pro-image-preview',
      '--notes', 'Enforcing strict East Asian/Taiwanese casting and Pro-model visual upgrade.'
    ]

    const child = spawn('node', args, { stdio: 'inherit' })

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Slot ${slot} failed with code ${code}`))
    })
  })
}

async function main() {
  console.log(`Starting targeted Pro generation for ${slots.length} service images...`)
  console.log('CONSTRAINT: Ensuring East Asian / Taiwanese faces and NO text.')

  for (const slot of slots) {
    try {
      await runCommand(slot)
    } catch (e) {
      console.error(e.message)
    }
  }

  console.log('\nService-specific Pro generation completed.')
}

main().catch(console.error)
