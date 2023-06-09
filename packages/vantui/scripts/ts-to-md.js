/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { glob } = require('glob')
const parser = require('./utils/ts-parser')
const markdownToAst = require('markdown-to-ast')
const astToMarkdown = require('ast-to-markdown')
const formatMd = require('./utils/md-format')
const ora = require('ora')
const crossPlatformPath = require('./utils/cross-platform-path.js')

const GITHUB_TYPESHS = `https://github.com/AntmJS/vantui/tree/main/packages/vantui/types`
const READMES_PATH = crossPlatformPath(
  `${path.resolve(process.cwd(), './src/**/README.md')}`,
)
const spinner = ora(`文档 API 同步开始`)

module.exports = function main() {
  return new Promise(async (resolve) => {
    const path_ = await glob(READMES_PATH, {})

    path_.map((item) => {
      const componentName = crossPlatformPath(item).split('/').reverse()[1]
      let content = fs.readFileSync(item, 'utf-8')
      spinner.start(`${componentName}文档 API 同步中...`)

      if (content) {
        content = removeOldTable(content)
      }

      if (
        fs.existsSync(`./types/${componentName}.d.ts`) &&
        componentName !== 'index' &&
        componentName !== 'power-scroll-view'
      ) {
        let tsInfo = fs.readFileSync(`./types/${componentName}.d.ts`, 'utf-8')
        const res = parser(tsInfo)

        fs.writeFileSync(item, content + `\n` + createMd(res, componentName))
        spinner.stop(`${componentName}文档 API 同步完成`)
      }
    })

    resolve()

    spinner.succeed(`文档 API 同步完成`)
  })
}

function createMd(obj, compName) {
  let mdRes = ``
  for (const Dkey in obj) {
    const item = obj[Dkey]
    if (!Object.keys(item).length) continue
    if (item.forbidToMd__) continue
    mdRes +=
      `### ${
        item['title__'] && typeof item['title__'] === 'string'
          ? item['title__']
          : Dkey
      }` +
      ` [[详情]](${GITHUB_TYPESHS}/${compName}.d.ts)
`
    mdRes += `${item['description__'] || ''}
`
    let header = `| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
`
    let key = ['self', 'description__', 'value', 'default__', 'require']
    if (!Dkey.includes('Props')) {
      header = `| 参数 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self', 'description__', 'value']
    }

    if (Dkey.includes('Instance')) {
      header = `| 方法 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self', 'description__', 'value']
    }
    mdRes += header
    Object.keys(item).map((_key) => {
      if (typeof item[_key] === 'object' && item[_key]) {
        key.forEach((k) => {
          if (k === 'self') {
            mdRes += `| ${_key} `
          } else {
            let con = item[_key][k]
            if (k === 'value') {
              con = con
                .replace(/[\n]+/g, '<br/>')
                .replace(/\s(?!=\/)/g, '&nbsp;')
            }
            if (con && k === 'value') {
              con = `_${con}_`
            } else if (con && k === 'require') {
              con = '`' + con + '`'
            } else if (!con) {
              con = `-`
            }
            mdRes += `| ` + `${con} `.replace(/\|/g, '&brvbar;')
          }
        })

        mdRes += `|
`
      }
    })
    mdRes += `\n`
  }
  return formatMd(mdRes)
}

function removeOldTable(md) {
  let ast = markdownToAst.parse(md)
  let shouldRmoveIndex
  let firstTableIndex
  ast.children.forEach((as, index) => {
    if (as.type === 'Table' && firstTableIndex === undefined) {
      firstTableIndex = index
    }
  })

  for (let index = firstTableIndex; index >= 0; index--) {
    if (ast.children[index].type === 'Header') {
      shouldRmoveIndex = index
      break
    }
  }
  // 处理第一版ts的展示
  if (shouldRmoveIndex === undefined) {
    ast.children.forEach((as, index) => {
      if (
        as.type === 'Header' &&
        as.raw === '### TS信息' &&
        shouldRmoveIndex === undefined
      ) {
        shouldRmoveIndex = index
      }
    })
  }

  ast.children = ast.children.slice(0, shouldRmoveIndex)
  return astToMarkdown(ast)
}
