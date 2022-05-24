import { join } from 'path'
import { readFileSync, existsSync } from 'fs'
import { SCRIPT_EXTS } from '../common/constant.js'
let depsMap = {}
let existsCache = {}
// https://regexr.com/47jlq
const IMPORT_RE =
  /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from(\s+)?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g
function matchImports(code) {
  const imports = code.match(IMPORT_RE) || []
  return imports.filter((line) => !line.includes('import type'))
}
function exists(filePath) {
  if (!(filePath in existsCache)) {
    existsCache[filePath] = existsSync(filePath)
  }
  return existsCache[filePath]
}
export function fillExt(filePath) {
  for (let i = 0; i < SCRIPT_EXTS.length; i++) {
    const completePath = `${filePath}${SCRIPT_EXTS[i]}`
    if (exists(completePath)) {
      return completePath
    }
  }
  for (let i = 0; i < SCRIPT_EXTS.length; i++) {
    const completePath = `${filePath}/index${SCRIPT_EXTS[i]}`
    if (exists(completePath)) {
      return completePath
    }
  }
  return ''
}
function getPathByImport(code, filePath) {
  const divider = code.includes('"') ? '"' : "'"
  const relativePath = code.split(divider)[1]
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (relativePath.includes('.')) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fillExt(join(filePath, '..', relativePath))
  }
  return null
}
export function clearDepsCache() {
  depsMap = {}
  existsCache = {}
}
export function getDeps(filePath) {
  if (depsMap[filePath]) {
    return depsMap[filePath]
  }
  const code = readFileSync(filePath, 'utf-8')
  const imports = matchImports(code)
  const paths = imports
    .map((item) => getPathByImport(item, filePath))
    .filter((item) => !!item)
  depsMap[filePath] = paths
  paths.forEach(getDeps)
  return paths
}
// "import App from 'App.vue';" => "import App from 'App.xxx';"
export function replaceScriptImportExt(code, from, to) {
  const importLines = matchImports(code)
  importLines.forEach((importLine) => {
    const result = importLine.replace(from, to)
    code = code.replace(importLine, result)
  })
  return code
}
