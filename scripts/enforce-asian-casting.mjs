import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const promptsDir = 'data/nano-banana/prompts'

async function main() {
  const files = await readdir(promptsDir)
  for (const file of files) {
    if (!file.endsWith('.txt')) continue
    // Only process service-related prompts
    if (file.startsWith('home-') || file.startsWith('about-') || file.startsWith('mission-') || file.startsWith('ote-') || file.startsWith('connector-') || file.startsWith('contact-')) {
      continue
    }

    const filePath = join(promptsDir, file)
    const content = await readFile(filePath, 'utf8')
    let json
    try {
      json = JSON.parse(content)
    } catch (e) {
      console.error(`Failed to parse ${file}`)
      continue
    }

    const text = content.toLowerCase()
    const needsCasting = text.includes('engineer') || text.includes('operator') || text.includes('technician') || text.includes('hand') || text.includes('people') || text.includes('person')
    
    if (needsCasting && !json.human_casting) {
      json.human_casting = {
        rule: "all visible faces and people must strictly read as East Asian professionals from a Taiwan-based engineering team",
        styling: "modern Taiwanese industrial workplace styling, practical and understated",
        guardrails: "avoid caricature, exaggerated ethnic markers, or non-Asian faces"
      }
      
      if (!json.commercial_constraints) {
        json.commercial_constraints = []
      }
      
      const constraint = "all visible human subjects must strictly read as East Asian and Taiwan-based in a professional context"
      if (!json.commercial_constraints.includes(constraint)) {
        json.commercial_constraints.push(constraint)
      }

      await writeFile(filePath, JSON.stringify(json, null, 2))
      console.log(`Updated ${file}`)
    }
  }
}

main().catch(console.error)
