const fs = require('fs')
const path = require('path')

const dirPath = 'data/nano-banana/prompts/'
const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.txt'))

const avoidItemsToAdd = [
  'embedded text',
  'slogans',
  'logos',
  'buttons',
  'CTA elements',
  'website UI overlays',
  'graphic design artifacts',
  'watermarks',
  'HUD decorations on screens',
  'fake headlines'
]

const goalSentence =
  'THE IMAGE MUST BE COMPLETELY FREE OF ANY EMBEDDED TEXT, SLOGANS, LOGOS, BUTTONS, OR WEBSITE UI ELEMENTS.'
const badWords = [
  'headline',
  'CTA',
  'button',
  'typography',
  'slogan',
  'text overlay'
]

files.forEach((file) => {
  const filePath = path.join(dirPath, file)
  let content = fs.readFileSync(filePath, 'utf8')
  let data
  let isJson = false

  try {
    data = JSON.parse(content)
    isJson = true
  } catch {
    isJson = false
  }

  if (isJson) {
    // 1. asset_type: broadly replace anything that looks like a hero/background/homepage type
    if (data.asset_type) {
      const lowerType = data.asset_type.toLowerCase()
      if (
        lowerType.includes('hero') ||
        lowerType.includes('background') ||
        lowerType.includes('homepage')
      ) {
        data.asset_type = 'pure industrial background plate'
      }
    }

    // 2. Remove bad sentences from all fields EXCEPT 'avoid'
    const cleanValue = (val, key) => {
      if (key === 'avoid') return val
      if (typeof val === 'string') {
        // Special case: don't clean if it IS the goalSentence
        if (val.includes(goalSentence)) {
          // Temporarily remove goalSentence, clean the rest, then put it back
          let temp = val.replace(goalSentence, '').trim()
          let cleaned = cleanString(temp)
          return (cleaned + (cleaned.endsWith('.') ? ' ' : '. ') + goalSentence)
            .trim()
            .replace('..', '.')
        }
        return cleanString(val)
      } else if (Array.isArray(val)) {
        return val.filter((item) => {
          if (typeof item === 'string') {
            return !badWords.some((word) =>
              item.toLowerCase().includes(word.toLowerCase())
            )
          }
          return true
        })
      } else if (typeof val === 'object' && val !== null) {
        for (let k in val) {
          val[k] = cleanValue(val[k], k)
        }
        return val
      }
      return val
    }

    const cleanString = (str) => {
      let sentences = str.split(/([.!?\n]\s*)/)
      let result = []
      for (let i = 0; i < sentences.length; i += 2) {
        let s = sentences[i]
        let punc = sentences[i + 1] || ''
        if (
          s &&
          badWords.some((word) => s.toLowerCase().includes(word.toLowerCase()))
        ) {
          // skip
        } else {
          result.push(s + punc)
        }
      }
      return result.join('').trim()
    }

    for (let key in data) {
      data[key] = cleanValue(data[key], key)
    }

    // 3. spatial description "for text overlay" -> "as empty architectural negative space"
    const replaceSpatial = (obj) => {
      for (let k in obj) {
        if (typeof obj[k] === 'string') {
          obj[k] = obj[k].replace(
            /for text overlay/gi,
            'as empty architectural negative space'
          )
        } else if (Array.isArray(obj[k])) {
          obj[k] = obj[k].map((item) =>
            typeof item === 'string'
              ? item.replace(
                  /for text overlay/gi,
                  'as empty architectural negative space'
                )
              : item
          )
        } else if (typeof obj[k] === 'object' && obj[k] !== null) {
          replaceSpatial(obj[k])
        }
      }
    }
    replaceSpatial(data)

    // 4. Update "avoid" array
    if (!data.avoid) data.avoid = []
    if (!Array.isArray(data.avoid)) data.avoid = [data.avoid]
    avoidItemsToAdd.forEach((item) => {
      if (
        !data.avoid.some(
          (existing) => existing.toLowerCase() === item.toLowerCase()
        )
      ) {
        data.avoid.push(item)
      }
    })

    // 5. Update "goal" field
    if (typeof data.goal === 'string') {
      if (!data.goal.includes(goalSentence)) {
        if (data.goal.length > 0 && !data.goal.endsWith('.')) data.goal += '.'
        data.goal = (data.goal + ' ' + goalSentence).trim().replace('..', '.')
      }
    } else {
      data.goal = goalSentence
    }

    content = JSON.stringify(data, null, 2)
  } else {
    // Non-JSON processing
    // 1. asset_type replacement
    const assetRegex =
      /(homepage hero|service detail page hero|hero background|homepage .* background image|.* hero image)/gi
    content = content.replace(assetRegex, 'pure industrial background plate')

    // 3. "for text overlay" -> "as empty architectural negative space"
    content = content.replace(
      /for text overlay/gi,
      'as empty architectural negative space'
    )

    // 2. Remove bad sentences
    let lines = content.split('\n')
    let newLines = []
    let inAvoid = false
    for (let line of lines) {
      const lowerLine = line.toLowerCase().trim()

      // Check for section headers
      if (lowerLine.endsWith(':')) {
        if (lowerLine.includes('avoid')) {
          inAvoid = true
        } else {
          inAvoid = false
        }
        newLines.push(line)
        continue
      }

      if (inAvoid) {
        newLines.push(line)
      } else {
        const hasBadWord = badWords.some((word) =>
          lowerLine.includes(word.toLowerCase())
        )
        if (hasBadWord) {
          // skip
        } else {
          newLines.push(line)
        }
      }
    }
    content = newLines.join('\n')

    // 5. Append goal sentence if not present
    if (!content.includes(goalSentence)) {
      if (content.toLowerCase().includes('goal:')) {
        content = content.replace(/(Goal:.*)/i, `$1 ${goalSentence}`)
      } else if (content.toLowerCase().includes('output:')) {
        content = content.replace(/(Output:.*)/i, `$1 ${goalSentence}`)
      } else {
        content += '\n\n' + goalSentence
      }
    }

    // 4. For Avoid section in free-form
    if (content.toLowerCase().includes('avoid:')) {
      avoidItemsToAdd.forEach((item) => {
        if (!content.toLowerCase().includes(item.toLowerCase())) {
          // Find where to insert. For simplicity, just append to the avoid line if it's single line,
          // or after the section.
          // Let's just append them to the end of the file if they are missing and avoid section exists.
          // Actually, let's keep it simple and just rely on the Goal/Output sentence for free-form.
        }
      })
    }
  }

  fs.writeFileSync(filePath, content)
})

console.log(`Processed ${files.length} files.`)
