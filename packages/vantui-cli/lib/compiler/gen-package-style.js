/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path'
import { existsSync } from 'fs'
import { createRequire } from 'module'
import { smartOutputFile, normalizePath } from '../common/index.js'
import { CSS_LANG, getCssBaseFile } from '../common/css.js'
import { SRC_DIR, STYLE_DEPS_JSON_FILE } from '../common/constant.js'
export function genPackageStyle(options) {
  const require = createRequire(import.meta.url)
  const styleDepsJson = require(STYLE_DEPS_JSON_FILE)
  const ext = '.' + CSS_LANG
  let content = ''
  let baseFile = getCssBaseFile()
  if (baseFile) {
    if (options.pathResolver) {
      baseFile = options.pathResolver(baseFile)
    }
    content += `@import "${normalizePath(baseFile)}";\n`
  }
  content += styleDepsJson.sequence
    .map((name) => {
      let path = join(SRC_DIR, `${name}/index${ext}`)
      if (!existsSync(path)) {
        return ''
      }
      if (options.pathResolver) {
        path = options.pathResolver(path)
      }
      return `@import "${normalizePath(path)}";`
    })
    .filter((item) => !!item)
    .join('\n')
  smartOutputFile(options.outputPath, content)
}
