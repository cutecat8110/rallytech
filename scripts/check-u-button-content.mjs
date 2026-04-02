import { readdir, readFile } from 'node:fs/promises'
import { join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const OPT_OUT_COMMENT = '<!-- ubutton-allow-custom-content -->'

const U_BUTTON_BLOCK_RE = /<UButton\b(?:(?!\/>)[\s\S])*?>([\s\S]*?)<\/UButton>/g
const OFFENDING_TOKEN_RE = /<span\b|<UIcon\b/g

function getLineNumber(content, index) {
  return content.slice(0, index).split(/\r?\n/).length
}

function getLineText(content, lineNumber) {
  return content.split(/\r?\n/)[lineNumber - 1] ?? ''
}

export function findViolations(content, filePath = '') {
  const violations = []

  for (const blockMatch of content.matchAll(U_BUTTON_BLOCK_RE)) {
    const block = blockMatch[0]
    const blockStartIndex = blockMatch.index ?? 0
    const blockStartLine = getLineNumber(content, blockStartIndex)
    const previousLine = getLineText(content, blockStartLine - 1).trim()

    if (previousLine === OPT_OUT_COMMENT) {
      continue
    }

    for (const tokenMatch of block.matchAll(OFFENDING_TOKEN_RE)) {
      const token = tokenMatch[0]
      const tokenIndex = tokenMatch.index ?? 0
      const line =
        blockStartLine + block.slice(0, tokenIndex).split(/\r?\n/).length - 1

      violations.push({
        filePath,
        line,
        token
      })
    }
  }

  return violations
}

async function collectVueFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await collectVueFiles(fullPath)))
      continue
    }

    if (entry.isFile() && fullPath.endsWith('.vue')) {
      files.push(fullPath)
    }
  }

  return files
}

async function run() {
  const rootDir = process.cwd()
  const appDir = resolve(rootDir, 'app')
  const vueFiles = await collectVueFiles(appDir)
  const violations = []

  for (const file of vueFiles) {
    const content = await readFile(file, 'utf8')

    violations.push(
      ...findViolations(content, relative(rootDir, file).replace(/\\/g, '/'))
    )
  }

  if (violations.length === 0) {
    console.log('UButton content guard passed.')
    return
  }

  for (const violation of violations) {
    console.error(
      `${violation.filePath}:${violation.line} found ${violation.token} inside <UButton>; use label/icon props or add ${OPT_OUT_COMMENT} above the button.`
    )
  }

  process.exitCode = 1
}

if (fileURLToPath(import.meta.url) === resolve(process.argv[1] ?? '')) {
  await run()
}
