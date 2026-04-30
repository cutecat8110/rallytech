import { spawn } from 'node:child_process'
import { resolveUsageMetadata } from './lib/ai-image-usage-log.mjs'

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

async function runCommand(slot, usage) {
  return new Promise((resolve, reject) => {
    console.log(`\n>>> Generating Pro image for slot: ${slot}...`)

    const args = [
      'scripts/generate-service-image-candidate.mjs',
      '--slot',
      slot,
      '--model',
      'gemini-3-pro-image-preview',
      '--notes',
      'Enforcing strict East Asian/Taiwanese casting and Pro-model visual upgrade.',
      '--usage-user',
      usage.user,
      '--page-used',
      usage.pageUsed,
      '--generation-cost',
      usage.generationCost,
      '--number-of-generations',
      '1'
    ]

    const child = spawn('node', args, { stdio: 'inherit' })

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Slot ${slot} failed with code ${code}`))
    })
  })
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const usage = resolveUsageMetadata(args)
  console.log(
    `Starting targeted Pro generation for ${slots.length} service images...`
  )
  console.log('CONSTRAINT: Ensuring East Asian / Taiwanese faces and NO text.')

  for (const slot of slots) {
    try {
      await runCommand(slot, usage)
    } catch (e) {
      console.error(e.message)
    }
  }

  console.log('\nService-specific Pro generation completed.')
}

function parseArgs(argv) {
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

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
