/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const markdownToAst = require('markdown-to-ast')
const astToMarkdown = require('ast-to-markdown')
const parser = require('typescript-to-json')

glob(
  `${path.resolve(process.cwd(), './src/**/README.md')}`,
  function (err, path_) {
    path_.map((item) => {
      const componentName = item.split('/').reverse()[1]
      let content = fs.readFileSync(item, 'utf-8')

      if (content) {
        content = removeOldTable(content)
      }

      if (
        fs.existsSync(`../vantui/types/${componentName}.d.ts`) &&
        componentName !== 'index'
      ) {
        let tsInfo = fs.readFileSync(
          `../vantui/types/${componentName}.d.ts`,
          'utf-8',
        )
        const res = parser(tsInfo)

        fs.writeFileSync(item, content + createMd(res, componentName))
        console.info(`【 ${componentName} 】：`)
        console.info(`-- 文档 API 同步完成 --`)
      }
    })
  },
)

function createMd(obj, compName) {
  let mdRes = ``
  for (const Dkey in obj) {
    const item = obj[Dkey]
    if (!Object.keys(item).length) continue
    mdRes +=
      `### ${
        item['title'] && typeof item['title'] === 'string'
          ? item['title']
          : Dkey
      }` +
      ` [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/${compName}.d.ts)   
`
    mdRes += `${item['description'] || ''}
`
    let header = `| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
`
    let key = ['self', 'description', 'value', 'default', 'require']
    if (!Dkey.includes('Props')) {
      header = `| 参数 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self', 'description', 'value']
    }
    if (Dkey.includes('Instance')) {
      header = `| 方法 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self', 'description', 'value']
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
  return mdRes
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

  ast.children = ast.children.slice(0, shouldRmoveIndex)
  return astToMarkdown(ast)
}
