import { relative, sep, join } from 'path'
import { existsSync } from 'fs'
import { CSS_LANG } from '../common/css.js'
import { getComponents, smartOutputFile } from '../common/index.js'
import { SRC_DIR, STYLE_DEPS_JSON_FILE } from '../common/constant.js'
import { getDeps, clearDepsCache, fillExt } from './get-deps.js'
function matchPath(path, component) {
  const p = relative(SRC_DIR, path)
  const arr = p.split(sep)
  return arr.includes(component)
}
function getStylePath(component) {
  return join(SRC_DIR, `${component}/index.${CSS_LANG}`)
}
export function checkStyleExists(component) {
  return existsSync(getStylePath(component))
}
// analyze component dependencies
function analyzeComponentDeps(components, component) {
  const checkList = []
  const componentEntry = fillExt(join(SRC_DIR, component, 'index'))
  const record = new Set()
  function search(filePath) {
    record.add(filePath)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getDeps(filePath).forEach((key) => {
      if (record.has(key)) {
        return
      }
      search(key)
      components
        .filter((item) => matchPath(key, item))
        .forEach((item) => {
          if (!checkList.includes(item) && item !== component) {
            checkList.push(item)
          }
        })
    })
  }
  search(componentEntry)
  return checkList.filter(checkStyleExists)
}
function getSequence(components, depsMap) {
  const sequence = []
  const record = new Set()
  function add(item) {
    const deps = depsMap[item]
    if (sequence.includes(item) || !deps) {
      return
    }
    if (record.has(item)) {
      sequence.push(item)
      return
    }
    record.add(item)
    if (!deps.length) {
      sequence.push(item)
      return
    }
    deps.forEach(add)
    if (sequence.includes(item)) {
      return
    }
    const maxIndex = Math.max(...deps.map((dep) => sequence.indexOf(dep)))
    sequence.splice(maxIndex + 1, 0, item)
  }
  components.forEach(add)
  return sequence
}
export async function genStyleDepsMap() {
  const components = getComponents()
  return new Promise((resolve) => {
    clearDepsCache()
    const map = {}
    components.forEach((component) => {
      map[component] = analyzeComponentDeps(components, component)
    })
    const sequence = getSequence(components, map)
    Object.keys(map).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      map[key] = map[key].sort(
        (a, b) => sequence.indexOf(a) - sequence.indexOf(b),
      )
    })
    smartOutputFile(
      STYLE_DEPS_JSON_FILE,
      JSON.stringify({ map, sequence }, null, 2),
    )
    resolve()
  })
}
