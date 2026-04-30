import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..', '..')
const usageLogDirectory = resolve(projectRoot, 'docs/project/ai-image-usage')
const usageTimeZone = 'Asia/Taipei'

export function resolveUsageMetadata(args, options = {}) {
  const missing = []
  const user = normalizeText(args['usage-user'])
  const pageUsed = normalizeText(args['page-used'])
  const generationCost = normalizeText(args['generation-cost'])

  if (!user) missing.push('--usage-user')
  if (!pageUsed) missing.push('--page-used')
  if (!generationCost) missing.push('--generation-cost')

  if (missing.length > 0) {
    throw new Error(
      `Missing AI image usage metadata: ${missing.join(', ')}. ` +
        'Provide --usage-user, --page-used, and --generation-cost before generating.'
    )
  }

  const rawNumber =
    args['number-of-generations'] ?? options.defaultNumberOfGenerations ?? 1
  const numberOfGenerations = Number.parseInt(String(rawNumber), 10)

  if (!Number.isInteger(numberOfGenerations) || numberOfGenerations < 1) {
    throw new Error('--number-of-generations must be a positive integer.')
  }

  return {
    user,
    pageUsed,
    numberOfGenerations,
    generationCost
  }
}

export async function appendAiImageUsageLog({
  usage,
  candidateId,
  slot,
  model,
  outputPath,
  createdAt = new Date().toISOString()
}) {
  const dateParts = formatUsageDateParts(createdAt)
  const filePath = resolve(usageLogDirectory, `${dateParts.fileDate}.md`)
  const row = [
    dateParts.formDate,
    usage.user,
    usage.pageUsed,
    String(usage.numberOfGenerations),
    usage.generationCost,
    candidateId,
    slot,
    model,
    outputPath
  ]
    .map(escapeMarkdownTableCell)
    .join(' | ')

  await mkdir(usageLogDirectory, { recursive: true })

  let content = ''
  try {
    content = await readFile(filePath, 'utf8')
  } catch (error) {
    if (!error || typeof error !== 'object' || error.code !== 'ENOENT') {
      throw error
    }
  }

  if (!content.trim()) {
    content = [
      `# AI Image Usage - ${dateParts.fileDate}`,
      '',
      '| Date | User | Page Used | Number of Generations | Generation Cost | Candidate ID | Slot | Model | Output Path |',
      '| --- | --- | --- | ---: | --- | --- | --- | --- | --- |',
      `| ${row} |`,
      ''
    ].join('\n')
  } else {
    const normalized = content.endsWith('\n') ? content : `${content}\n`
    content = `${normalized}| ${row} |\n`
  }

  await writeFile(filePath, content, 'utf8')
  return filePath
}

function normalizeText(value) {
  if (typeof value !== 'string') return ''
  return value.trim()
}

function formatUsageDateParts(createdAt) {
  const date = new Date(createdAt)
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: usageTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date)
  const year = parts.find((part) => part.type === 'year')?.value
  const month = parts.find((part) => part.type === 'month')?.value
  const day = parts.find((part) => part.type === 'day')?.value

  if (!year || !month || !day) {
    throw new Error(`Unable to format AI image usage date from ${createdAt}.`)
  }

  return {
    fileDate: `${year}-${month}-${day}`,
    formDate: `${year}/${Number(month)}/${Number(day)}`
  }
}

function escapeMarkdownTableCell(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, '<br>')
}
