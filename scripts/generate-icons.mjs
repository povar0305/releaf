import { readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const assetsDir = fileURLToPath(new URL('../src/shared/ui/icon/assets/', import.meta.url))
const outputFile = fileURLToPath(new URL('../src/shared/ui/icon/icons.generated.ts', import.meta.url))

const names = readdirSync(assetsDir)
  .filter((file) => file.toLowerCase().endsWith('.svg'))
  .map((file) => file.replace(/\.svg$/i, '').toLowerCase())
  .sort()

const content = `// AUTO-GENERATED FILE. Run \`npm run icons:generate\` instead of editing manually.

export const ICON_NAMES = [
${names.map((name) => `  '${name}',`).join('\n')}
] as const

export type IconName = (typeof ICON_NAMES)[number]
`

writeFileSync(outputFile, content, 'utf8')
console.log(`Generated ${names.length} icon names: ${names.join(', ')}`)
