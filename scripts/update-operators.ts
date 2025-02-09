import { writeFile } from 'fs/promises'
import process from 'process'
import { getOperatorNames } from './shared'

function withGeneratedHeader(content: string) {
  return `// Generated by update-operators.ts\n// DO NOT EDIT\n\n${content}`
}

async function main() {
  console.info('Fetching character_table.json...')
  const names = await getOperatorNames()

  console.info('Parsing character_table.json...')
  const content = withGeneratedHeader(
    `export const OPERATORS = ${JSON.stringify(names)};`,
  )

  console.info('Writing to operators.ts...')
  await writeFile('src/models/generated/operators.ts', content)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
