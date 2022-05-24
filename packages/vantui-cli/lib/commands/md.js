/* eslint-disable no-template-curly-in-string */
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import markdownToAst from 'markdown-to-ast'
import { DEFAULT_DEMO_PAGE_PATH } from '../common/constant.js'
import { consola } from '../common/logger.js'
const __dirname = dirname(fileURLToPath(import.meta.url))
function getCode(targetPath) {
  const res = fs.readFileSync(targetPath, 'utf-8')
  const codeArr = markdownToAst
    .parse(res)
    .children.filter((item) => {
      return (
        item.type === 'CodeBlock' &&
        item.lang === 'jsx' &&
        (item.value.indexOf('function') === 0 ||
          item.value.indexOf('import') === 0)
      )
    })
    .map((item) => {
      const arr = item.value
        .match(/<[A-Za-z]{3,20}/g)
        .map((item) => item.replace('<', ''))
      return { value: item.value, importFromJsx: arr }
    })
  return codeArr
}
export async function watchMd() {
  const res = getCode(
    '/Users/apple/Desktop/Dian/vantui/packages/vantui-doc/src/action-sheet/README.md',
  )
  consola.info(DEFAULT_DEMO_PAGE_PATH)
  // let readyOk = false
  // const watcher = chokidar.watch(`${SRC_DIR}/**/README.md`, {
  //   persistent: true,
  // })
  // watcher.on('ready', function () {
  //   readyOk = true
  // })
  // watcher.on('add', function (path: string) {
  //   if (readyOk) {
  //     // todo
  //   }
  // })
  // watcher.on('change', function (path: string) {
  //   if (readyOk) {
  //     // todo
  //     const codeArr = getCode(path)
  //     // consola.info(codeArr)
  //   }
  // })
}
