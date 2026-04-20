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
    console.log(`\n>>> Generating image for slot: ${slot}...`)
    const child = spawn(
      'node',
      [
        'scripts/generate-service-image-candidate.mjs',
        '--slot',
        slot,
        '--notes',
        'Batch generation for services overhaul'
      ],
      { stdio: 'inherit' }
    )

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Slot ${slot} failed with code ${code}`))
    })
  })
}

async function main() {
  console.log(`Starting batch generation for ${slots.length} service images...`)
  for (const slot of slots) {
    try {
      await runCommand(slot)
    } catch (error) {
      console.error(error.message)
      // Continue to next slot even if one fails
    }
  }
  console.log('\nBatch generation completed.')
}

main().catch(console.error)
