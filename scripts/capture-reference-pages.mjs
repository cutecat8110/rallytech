import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

import { referencePageRegistry } from './lib/reference-pages-registry.mjs'

function parseArgs(argv) {
  const parsed = {}

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index]

    if (!current.startsWith('--')) continue

    const key = current.slice(2)
    const next = argv[index + 1]

    if (!next || next.startsWith('--')) {
      parsed[key] = true
      continue
    }

    parsed[key] = next
    index += 1
  }

  return parsed
}

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const capturePageScript = resolve(scriptDir, 'capture-page.mjs')

function runCapture(page, outputDir) {
  return new Promise((resolveCapture, rejectCapture) => {
    const child = spawn(
      process.execPath,
      [
        capturePageScript,
        '--url',
        page.sourceUrl,
        '--slug',
        page.captureSlug,
        '--out',
        outputDir
      ],
      {
        cwd: projectRoot,
        stdio: ['ignore', 'pipe', 'pipe']
      }
    )

    let stdout = ''
    let stderr = ''

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString()
    })
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString()
    })
    child.on('error', rejectCapture)
    child.on('close', (code) => {
      if (code === 0) {
        resolveCapture({
          key: page.key,
          captureSlug: page.captureSlug,
          sourceUrl: page.sourceUrl,
          output: stdout.trim()
        })
        return
      }

      rejectCapture(
        new Error(
          `capture failed for ${page.key} (${page.sourceUrl}) with code ${code}\n${stderr.trim()}`
        )
      )
    })
  })
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const dateStamp = new Date().toISOString().slice(0, 10).replaceAll('-', '')
  const outputDir = resolve(
    projectRoot,
    args.out ?? `artifacts/reference-recrawl-${dateStamp}`
  )

  await mkdir(outputDir, { recursive: true })

  const captures = []

  for (const page of referencePageRegistry) {
    captures.push(await runCapture(page, outputDir))
  }

  const summaryPath = resolve(outputDir, 'summary.json')
  await writeFile(
    summaryPath,
    JSON.stringify(
      {
        capturedAt: new Date().toISOString(),
        outputDir,
        pages: captures
      },
      null,
      2
    )
  )

  console.log(
    JSON.stringify({ outputDir, summaryPath, count: captures.length }, null, 2)
  )
}

await main()
