import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'

const defaultViewports = [
  { width: 1920, height: 1080, label: '1920' },
  { width: 1440, height: 900, label: '1440' },
  { width: 390, height: 844, label: '390' }
]

const blockSelectors = {
  home: {
    header: 'header',
    hero: '#top',
    about: '#about',
    services: '#services',
    process: '#process',
    ote: '#one-touch-experience',
    mission: '#mission',
    connector: '.home-sys-footer-connector',
    footer: 'footer'
  }
}

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

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function warmPage(page, steps) {
  await page.waitForTimeout(1400)

  for (let index = 0; index < steps; index += 1) {
    await page.evaluate(() => {
      window.scrollBy(0, Math.floor(window.innerHeight * 0.72))
    })

    await page.waitForTimeout(750)
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(1200)
}

async function collectDiagnostics(page, sourceUrl) {
  const imageReport = await page.evaluate(async () => {
    const images = Array.from(document.images).map((img) => {
      const src = img.currentSrc || img.src || ''
      const looksBroken = img.complete && img.naturalWidth === 0

      return {
        alt: img.alt || '',
        src,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        clientWidth: img.clientWidth,
        clientHeight: img.clientHeight,
        looksBroken,
        likelyExternalTemplateAsset:
          src.includes('archicwp') || src.includes('websitelayout'),
        likelyPlaceholder:
          /placeholder|dummy|default|newsletter|blog|bg-0\d/i.test(src) ||
          /newsletter|blog|updates/i.test(img.alt || '')
      }
    })

    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map((node) => node.textContent?.trim())
      .filter(Boolean)

    return {
      title: document.title,
      imageCount: images.length,
      brokenImages: images.filter((img) => img.looksBroken),
      suspiciousImages: images.filter(
        (img) =>
          !img.src ||
          img.clientWidth === 0 ||
          img.clientHeight === 0 ||
          img.likelyExternalTemplateAsset ||
          img.likelyPlaceholder
      ),
      headings
    }
  })

  return {
    sourceUrl,
    capturedAt: new Date().toISOString(),
    ...imageReport
  }
}

async function captureBlocks({ page, outputDir, slug, viewport }) {
  const selectors = blockSelectors[slug]

  if (!selectors) return []

  const captures = []

  for (const [name, selector] of Object.entries(selectors)) {
    const locator = page.locator(selector).first()

    if ((await locator.count()) === 0) continue

    await locator.scrollIntoViewIfNeeded()
    await page.waitForTimeout(250)

    const imagePath = path.join(
      outputDir,
      `${slug}_${name}_${viewport.label}.png`
    )
    await locator.screenshot({ path: imagePath })
    captures.push(imagePath)
  }

  return captures
}

async function captureViewport({ page, outputDir, slug, state, viewport }) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height })
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 120000 })
  await warmPage(page, viewport.width > 768 ? 14 : 16)

  const imagePath = path.join(
    outputDir,
    `${slug}_${state}_${viewport.label}.png`
  )
  const jsonPath = path.join(
    outputDir,
    `${slug}_${state}_${viewport.label}.images.json`
  )

  await page.screenshot({ path: imagePath, fullPage: true })

  const diagnostics = await collectDiagnostics(page, page.url())
  const blockCaptures = await captureBlocks({ page, outputDir, slug, viewport })
  await fs.writeFile(jsonPath, JSON.stringify(diagnostics, null, 2))

  return { imagePath, jsonPath, diagnostics, blockCaptures }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const url = args.url
  const slug = args.slug ?? 'page'
  const state = args.state ?? 'loaded'
  const outputDir = path.resolve(args.out ?? 'pentagonClone/captures')

  if (!url) {
    throw new Error('Missing required --url argument.')
  }

  await ensureDir(outputDir)

  const browser = await chromium.launch({
    headless: true
  })

  try {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 })

    const captures = []

    for (const viewport of defaultViewports) {
      captures.push(
        await captureViewport({
          page,
          outputDir,
          slug,
          state,
          viewport
        })
      )
    }

    const summaryPath = path.join(outputDir, `${slug}_${state}.summary.json`)
    await fs.writeFile(
      summaryPath,
      JSON.stringify(
        {
          url,
          slug,
          state,
          captures: captures.map((capture) => ({
            imagePath: capture.imagePath,
            jsonPath: capture.jsonPath,
            blockCaptures: capture.blockCaptures,
            brokenCount: capture.diagnostics.brokenImages.length,
            suspiciousCount: capture.diagnostics.suspiciousImages.length
          }))
        },
        null,
        2
      )
    )

    console.log(
      JSON.stringify(
        {
          outputDir,
          summaryPath,
          captures: captures.map((capture) => ({
            imagePath: capture.imagePath,
            blockCaptures: capture.blockCaptures,
            brokenCount: capture.diagnostics.brokenImages.length,
            suspiciousCount: capture.diagnostics.suspiciousImages.length
          }))
        },
        null,
        2
      )
    )
  } finally {
    await browser.close()
  }
}

await main()
