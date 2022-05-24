import fs from 'fs'
import { URL, fileURLToPath } from 'url'
import { clean } from './commands/clean.js'
import { build } from './commands/build.js'
import { release } from './commands/release.js'
import { changelog } from './commands/changelog.js'
import { watch } from './commands/watch.js'
import { docs } from './commands/docs.js'
import { mdCode } from './commands/mdcode.js'

const packagePath = fileURLToPath(new URL('../package.json', import.meta.url))
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
export const cliVersion: string = packageJson.version
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
process.env.VANT_CLI_VERSION = cliVersion

export { clean, build, release, changelog, watch, docs, mdCode }
