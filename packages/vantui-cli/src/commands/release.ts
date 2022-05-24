/* eslint-disable no-template-curly-in-string */
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import releaseIt from 'release-it'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PLUGIN_PATH = join(__dirname, '../../cjs/vant-cli-release-plugin.cjs')

export async function release(command: { tag?: string }) {
  await releaseIt({
    plugins: {
      [PLUGIN_PATH]: {},
    },
    npm: {
      tag: command.tag,
    },
    git: {
      tagName: 'v${version}',
      commitMessage: 'release: ${version}',
    },
  })
}
