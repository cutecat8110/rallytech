import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const repoRoot = process.cwd()
const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex')
const configPath = path.join(codexHome, 'config.toml')
const configText = fs.existsSync(configPath)
  ? fs.readFileSync(configPath, 'utf8')
  : ''

function hasConfigServer(name) {
  const escaped = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
  return new RegExp(`\\[mcp_servers\\.${escaped}\\]`).test(configText)
}

function hasConfigFlag(pattern) {
  return pattern.test(configText)
}

function hasSkill(name) {
  return (
    fs.existsSync(path.join(codexHome, 'skills', name, 'SKILL.md')) ||
    fs.existsSync(path.join(codexHome, 'skills', '.system', name, 'SKILL.md'))
  )
}

function hasRepoFile(relativePath) {
  return fs.existsSync(path.join(repoRoot, relativePath))
}

function hasEnv(name) {
  return Boolean(process.env[name]?.trim())
}

function runPythonCheck(code) {
  const command = process.platform === 'win32' ? 'py' : 'python3'
  const args = process.platform === 'win32' ? ['-3', '-c', code] : ['-c', code]
  const result = spawnSync(command, args, { encoding: 'utf8' })

  return result.status === 0 && result.stdout.trim() === 'True'
}

const capabilities = [
  {
    id: 'chrome-devtools',
    requiredForSameNew: true,
    localReady: hasConfigServer('chrome-devtools'),
    detail: 'Configured in ~/.codex/config.toml'
  },
  {
    id: 'playwright-mcp',
    requiredForSameNew: true,
    localReady: hasConfigServer('playwright'),
    detail: 'Configured in ~/.codex/config.toml'
  },
  {
    id: 'js-repl',
    requiredForSameNew: true,
    localReady: hasConfigFlag(/js_repl\s*=\s*true/),
    detail: 'Required by playwright-interactive'
  },
  {
    id: 'context7',
    requiredForSameNew: true,
    localReady: hasConfigServer('context7'),
    detail: 'Configured in ~/.codex/config.toml'
  },
  {
    id: 'fetch',
    requiredForSameNew: true,
    localReady:
      hasConfigServer('fetch') &&
      runPythonCheck(
        'import importlib.util; print(importlib.util.find_spec("mcp_server_fetch") is not None)'
      ),
    detail: 'Configured and Python module available'
  },
  {
    id: 'reference-clone-architect',
    requiredForSameNew: true,
    localReady: hasSkill('reference-clone-architect'),
    detail: 'Custom orchestrator skill installed'
  },
  {
    id: 'playwright-interactive',
    requiredForSameNew: true,
    localReady: hasSkill('playwright-interactive'),
    detail: 'Interactive QA skill installed'
  },
  {
    id: 'imagegen',
    requiredForSameNew: false,
    localReady: hasSkill('imagegen'),
    detail: 'Required for full brand-variant parity'
  }
]

const repoArtifacts = [
  {
    id: 'project-clone-workflow-doc',
    required: true,
    ready: hasRepoFile('docs/project/05-Reference-Clone工作流與降級規範.md')
  },
  {
    id: 'design-vision-to-code-doc',
    required: true,
    ready: hasRepoFile('docs/design/03-Vision-to-Code與Component-Driven規範.md')
  },
  {
    id: 'runtime-token-source',
    required: true,
    ready: hasRepoFile('app/assets/css/main.css')
  },
  {
    id: 'nuxt-ui-bridge',
    required: true,
    ready: hasRepoFile('app/app.config.ts')
  },
  {
    id: 'capture-script',
    required: true,
    ready: hasRepoFile('scripts/capture-page.mjs')
  }
]

const optionalEnv = [
  'UNSPLASH_ACCESS_KEY',
  'PEXELS_API_KEY',
  'PIXABAY_API_KEY'
].map((name) => ({
  name,
  ready: hasEnv(name)
}))

const missingCore = [
  ...capabilities
    .filter(
      (capability) => capability.requiredForSameNew && !capability.localReady
    )
    .map((capability) => capability.id),
  ...repoArtifacts
    .filter((artifact) => artifact.required && !artifact.ready)
    .map((artifact) => artifact.id)
]

const imageVariantReady =
  capabilities.find((capability) => capability.id === 'imagegen')?.localReady ??
  false

let localClaimLevel = 'same.new-class-ready'

if (missingCore.length > 0) {
  localClaimLevel = 'degraded-fidelity'
} else if (!imageVariantReady) {
  localClaimLevel = 'degraded-variant'
}

const summary = {
  checkedAt: new Date().toISOString(),
  repoRoot,
  codexHome,
  localClaimLevel,
  missingCore,
  capabilities,
  repoArtifacts,
  optionalEnv,
  sessionReminder: [
    'Preflight only verifies the local baseline.',
    'Before claiming same.new-class parity, also confirm the current Codex session exposes chrome-devtools, Playwright/browser tooling, Context7, Fetch, and GitHub review tools.'
  ]
}

console.log(JSON.stringify(summary, null, 2))
process.exit(localClaimLevel === 'same.new-class-ready' ? 0 : 2)
