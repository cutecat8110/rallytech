import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

import {
  loadReferencePagesByLocale,
  referencePagesOutputPath,
  renderGeneratedReferencePagesFile
} from './lib/reference-pages-content.mjs'

async function main() {
  await mkdir(dirname(referencePagesOutputPath), { recursive: true })

  const byLocale = await loadReferencePagesByLocale()
  const file = await renderGeneratedReferencePagesFile(byLocale)

  await writeFile(referencePagesOutputPath, file)
}

await main()
