import { sep, join } from 'path'
// eslint-disable-next-line import/default
import fse from 'fs-extra'
import { SRC_DIR, getVantConfig } from './constant.js'
const { lstatSync, existsSync, readdirSync, readFileSync, outputFileSync } = fse
export const EXT_REGEXP = /\.\w+$/
export const SFC_REGEXP = /\.(vue)$/
export const DEMO_REGEXP = new RegExp('\\' + sep + 'demo$')
export const TEST_REGEXP = new RegExp('\\' + sep + 'test$')
export const ASSET_REGEXP = /\.(png|jpe?g|gif|webp|ico|jfif|svg|woff2?|ttf)$/i
export const STYLE_REGEXP = /\.(css|less|scss)$/
export const SCRIPT_REGEXP = /\.(js|ts|jsx|tsx)$/
export const ENTRY_EXTS = ['js', 'ts', 'tsx', 'jsx', 'vue']
export function removeExt(path) {
  return path.replace('.js', '')
}
export function replaceExt(path, ext) {
  return path.replace(EXT_REGEXP, ext)
}
export function hasDefaultExport(code) {
  return code.includes('export default') || code.includes('export { default }')
}
export function getComponents() {
  const EXCLUDES = ['.DS_Store']
  const dirs = readdirSync(SRC_DIR)
  return dirs
    .filter((dir) => !EXCLUDES.includes(dir))
    .filter((dir) =>
      ENTRY_EXTS.some((ext) => {
        const path = join(SRC_DIR, dir, `index.${ext}`)
        if (existsSync(path)) {
          return hasDefaultExport(readFileSync(path, 'utf-8'))
        }
        return false
      }),
    )
}
export function isDir(dir) {
  return lstatSync(dir).isDirectory()
}
export function isDemoDir(dir) {
  return DEMO_REGEXP.test(dir)
}
export function isTestDir(dir) {
  return TEST_REGEXP.test(dir)
}
export function isAsset(path) {
  return ASSET_REGEXP.test(path)
}
export function isSfc(path) {
  return SFC_REGEXP.test(path)
}
export function isStyle(path) {
  return STYLE_REGEXP.test(path)
}
export function isScript(path) {
  return SCRIPT_REGEXP.test(path)
}
const camelizeRE = /-(\w)/g
const pascalizeRE = /(\w)(\w*)/g
export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}
export function pascalize(str) {
  return camelize(str).replace(
    pascalizeRE,
    (_, c1, c2) => c1.toUpperCase() + c2,
  )
}
export function decamelize(str, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase()
}
export function normalizePath(path) {
  return path.replace(/\\/g, '/')
}
export function setModuleEnv(value) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  process.env.BABEL_MODULE = value
}
export function setNodeEnv(value) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  process.env.NODE_ENV = value
}
export function setBuildTarget(value) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  process.env.BUILD_TARGET = value
}
export function isDev() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return process.env.NODE_ENV === 'development'
}
// smarter outputFileSync
// skip output if file content unchanged
export function smartOutputFile(filePath, content) {
  if (existsSync(filePath)) {
    const previousContent = readFileSync(filePath, 'utf-8')
    if (previousContent === content) {
      return
    }
  }
  outputFileSync(filePath, content)
}
export { getVantConfig }
