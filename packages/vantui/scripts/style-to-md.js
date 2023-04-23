/* eslint-disable @typescript-eslint/no-var-requires */
// 在ts-to-md后执行
const fs = require('fs')
const path = require('path')
const formatMd = require('./utils/md-format')

const FIRST_COMPONENT_NAME = 'ActionSheet' // 第一个组件样式变量
const READMES_PATH = `${path.resolve(process.cwd(), './src')}`
const STYLE_PATH = `${path.resolve(process.cwd(), './src/style/var.less')}`

module.exports = function main() {
  const styleVar = fs.readFileSync(STYLE_PATH, 'utf-8')
  parseStyleVar(styleVar)
}

function parseStyleVar(code) {
  const commonVarStyle = []
  const componentsVarStyle = []
  const codeModules = code.split('\n//')
  const varMap = {}
  let commonEnd = false

  for (let i = 0; i < codeModules.length; i++) {
    const item = codeModules[i]
    const arr = item.split('\n')
    const curName = arr[0]
    const moduleDesc = {
      name: curName,
      children: [],
    }
    const curCodes = arr.slice(1)
    if (curName === FIRST_COMPONENT_NAME) {
      commonEnd = true
    }

    curCodes.map((item) => {
      if (item.includes(':')) {
        const valueKey = item.split(':')
        varMap[valueKey[0]] = valueKey[1]
        moduleDesc.children.push({
          varName: valueKey[0],
          default: valueKey[1],
        })
      }
    })

    if (commonEnd) {
      componentsVarStyle.push(moduleDesc)
    } else {
      commonVarStyle.push(moduleDesc)
    }
  }
  // 公共样式变量同步到 ConfigProvider组件展示
  let commonInsertMd = ``
  commonVarStyle.forEach((item) => {
    commonInsertMd += `
### 公共样式变量${item.name.replace('//', '')}

${createMdTabel(item.children)}
`
  })
  const commonMdPath = path.join(READMES_PATH, '/config-provider/README.md')
  const originCommonMd = fs.readFileSync(commonMdPath, 'utf-8')

  fs.writeFileSync(
    commonMdPath,
    formatMd(`${originCommonMd} ${commonInsertMd}`),
  )

  // 组件样式变量
  componentsVarStyle.forEach((item) => {
    const cName = toLine(item.name)
    if (fs.existsSync(path.join(READMES_PATH, cName, '/README.md'))) {
      const mdTable = createMdTabel(item.children)

      const insertMd = `
### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

${mdTable}
      `
      const mdPath = path.join(READMES_PATH, cName, '/README.md')
      const originMd = fs.readFileSync(mdPath, 'utf-8')
      fs.writeFileSync(mdPath, formatMd(`${originMd} ${insertMd}`))
    }
  })
}

function toLine(name) {
  name = name.replace(/\s/g, '')
  const res = name.substring(0, 1).toLocaleLowerCase() + name.substring(1)
  return res.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function createMdTabel(arr) {
  let md = `| 名称 | 默认值 |
| --- | --- |
`
  arr.forEach((item) => {
    md += `| ${item.varName.replace('@', '--')} | ${'`' + item.default + '`'} |
`
  })

  return md
}
