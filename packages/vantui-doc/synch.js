/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const Prettier = require('prettier')
const glob = require('glob')
const markdownToAst = require('markdown-to-ast')
const astToMarkdown = require('ast-to-markdown')

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
        const { TOKENS, commentsArr } = getAllTokens(tsInfo)
        const res = parseTokens(TOKENS, commentsArr)

        fs.writeFileSync(item, content + createMd(res, componentName))
      }
    })
  },
)

// 收集
function getAllTokens(str) {
  let TOKENS = []
  let token = ''
  let commentsArr = str.match(/\/\*[\s\S]*?\*\//g) || []
  str = str.replace(/\/\*[\s\S]*?\*\//g, '')
  for (let i = 0; i < str.length; i++) {
    let curItem = str.charAt(i)
    if (curItem === ' ' || curItem === '\n') {
      if (token) TOKENS.push(token.replace(/[\s]+/, ''))
      TOKENS.push(curItem)
      token = ''
    } else {
      token += curItem
    }
  }

  TOKENS = TOKENS.slice(TOKENS.indexOf('export'), TOKENS.length)
  TOKENS = TOKENS.slice(0, TOKENS.indexOf('declare'))

  return { TOKENS, commentsArr }
}

// 解析
function parseTokens(TOKENS, commentsArr) {
  let STATUS = {
    EXPORT_1: 'EXPORT_WHAT',
    EXPORT_2: 'EXPORT_GET_WHAT',
    EXPORT_3: 'EXPORTING',
  }
  const res = {}
  let status = STATUS.EXPORT_1
  let value = ''
  let count = 0
  let exportName = ''
  let attrName = ''
  let attrNamePrev = ''
  let InBrackets = 0

  /** token 分析 */
  for (let i = 0; i < TOKENS.length; i++) {
    let curToken = TOKENS[i]
    let nextToken = getRealTokenNext(1, TOKENS.slice(i + 1, TOKENS.length - 1))
    let next2Token = getRealTokenNext(2, TOKENS.slice(i + 1, TOKENS.length - 1))

    if (curToken === 'export' && ['interface', 'type'].includes(nextToken)) {
      if (!res[next2Token]) {
        exportName = next2Token
        res[exportName] = {
          ...parseComments(
            commentsArr && commentsArr.length ? commentsArr[0] : '',
          ),
        }
        commentsArr.shift()
      }
      status = STATUS.EXPORT_2
    }
    /** 结束标志 */
    if (curToken.includes('}') || curToken.includes('})')) {
      count--
      if (count === 0) {
        status = STATUS.EXPORT_1
        if (attrName && exportName) res[exportName][attrName]['value'] = value
        value = ''
        attrNamePrev = ''
        attrName = ''
        InBrackets = 0
        exportName = ''
      }
    }
    /** 属性值获取 */
    if (exportName && count !== 0) {
      if (
        curToken.includes(':') &&
        count < 2 &&
        !curToken.includes('(') &&
        InBrackets === 0
      ) {
        attrNamePrev = attrName
        attrName = curToken.replace(':', '').replace('?', '')
        if (!res[exportName][attrName]) {
          res[exportName][attrName] = {
            ...parseComments(
              commentsArr && commentsArr.length ? commentsArr[0] : '',
            ),
          }
          commentsArr.shift()
        }
        if (curToken.includes('?')) {
          res[exportName][attrName]['require'] = '否'
        } else {
          res[exportName][attrName]['require'] = '是'
        }
        if (attrNamePrev) {
          if (!res[exportName]) res[exportName] = {}
          if (!res[exportName][attrNamePrev]) res[exportName][attrNamePrev] = {}
          res[exportName][attrNamePrev]['value'] = value
          value = ''
        }
      } else if (status === STATUS.EXPORT_3) {
        value += `${curToken}`
      }
    }
    const InBracketsNum1 = countStrNumInToken('(', curToken)
    const InBracketsNum2 = countStrNumInToken(')', curToken)
    if (InBracketsNum1 > 0) {
      InBrackets += InBracketsNum1
    }
    if (InBracketsNum2) {
      InBrackets -= InBracketsNum2
    }

    if (curToken.includes('{') && status === STATUS.EXPORT_2) {
      status = STATUS.EXPORT_3
    }

    if (curToken.includes('{') || curToken.includes('({')) {
      count++
    }
  }

  return res
}

// token中特殊字符的个数
function countStrNumInToken(str, token) {
  let res = 0
  for (let i = 0; i < token.length; i++) {
    if (token.charAt(i) === str) {
      res++
    }
  }

  return res
}

// 找到不是空格和换行的token
function getRealTokenNext(nextNum, lastTokens) {
  let res = ''
  let next_i = 0
  for (let a = 0; a < lastTokens.length; a++) {
    if (lastTokens[a] !== ' ' && lastTokens[a] !== '\n') {
      next_i++
      if (next_i === nextNum) {
        res = lastTokens[a]
        break
      }
    }
  }

  return res
}
// 注视解析
function parseComments(comments = '') {
  let res = {}
  const arr = comments
    .split('\n')
    .filter((item) => item.includes('@'))
    .map((item) => item.replace(/^[\s]+/g, ''))
    .map((item) => item.replace('* ', ''))
    .map((item) => item.replace('@', ''))
    .map((item) => item.replace(/[\s]+/g, '##'))

  arr.forEach((item) => {
    const cons = item.split('##')
    res[cons[0] + '99'] = cons[1] || '-'
  })

  return res
}
// 生成MD
function createMd(obj, compName) {
  let mdRes = ``
  for (const Dkey in obj) {
    const item = obj[Dkey]
    mdRes +=
      `### ${item['desc99'] || Dkey}` +
      ` [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/${compName}.d.ts)   
`
    let header = `| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
`
    let key = ['self99', 'desc99', 'value', 'default99', 'require']
    if (!Dkey.includes('Props')) {
      header = `| 参数 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self99', 'desc99', 'value']
    }
    if (Dkey.includes('Instance')) {
      header = `| 方法 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self99', 'desc99', 'value']
    }
    mdRes += header
    Object.keys(item).map((_key) => {
      if (typeof item[_key] === 'object' && item[_key]) {
        key.forEach((k) => {
          if (k === 'self99') {
            mdRes += `| ${_key} `
          } else {
            let con = item[_key][k]
            if (typeof con === 'string') con = con.replace(/[\n]{2,3}$/, '')
            if (k === 'value') {
              con = Prettier.format(
                `type temp = {
attr:${con}
}
// END`,
                {
                  parser: 'typescript',
                  semi: false,
                  printWidth: 48,
                },
              )

              con = con
                .replace('type temp = {\n', '')
                .replace('attr: ', '')
                .replace(
                  `}
// END`,
                  '',
                )
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
