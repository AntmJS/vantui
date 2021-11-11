/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { format } = require('prettier')
const glob = require('glob')

glob(
  `${path.resolve(process.cwd(), './src/**/README.md')}`,
  function (err, path_) {
    path_.map((item) => {
      const componentName = item.split('/').reverse()[1]
      let content = fs
        .readFileSync(item, 'utf-8')
        .replace(/###\sTS信息[\s\S]+```$/, '')

      if (
        fs.existsSync(`../vantui/types/${componentName}.d.ts`) &&
        componentName !== 'index'
      ) {
        let tsInfo = fs.readFileSync(
          `../vantui/types/${componentName}.d.ts`,
          'utf-8',
        )
        console.info(tsInfo)
        const { TOKENS, commentsArr } = getAllTokens(tsInfo)
        const res = parseTokens(TOKENS, commentsArr)
        fs.writeFileSync(item, content + createMd(res))
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
    res[cons[0]] = cons[1] || '-'
  })

  return res
}
// 生成MD
function createMd(obj) {
  let mdRes = ``
  for (const Dkey in obj) {
    const item = obj[Dkey]
    mdRes += `### ${item['desc'] || `${Dkey} 说明`}
    
`
    let header = `| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
`
    let key = ['self', 'desc', 'value', 'default', 'require']
    if (!Dkey.includes('Props')) {
      header = `| 参数 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self', 'desc', 'value']
    }
    if (Dkey.includes('Instance')) {
      header = `| 方法 | 说明 | 类型 |
| --- | --- | --- |
`
      key = ['self', 'desc', 'value']
    }
    mdRes += header
    Object.keys(item).map((_key) => {
      if (typeof item[_key] === 'object' && item[_key]) {
        key.forEach((k) => {
          if (k === 'self') {
            mdRes += `| ${_key} `
          } else {
            let con = item[_key][k]
            if (typeof con === 'string') con = con.replace(/[\n]{2,3}$/, '')
            if (k === 'value') {
              con = format(
                `type temp = {
attr:${con}
}
// END`,
                {
                  parser: 'typescript',
                  semi: false,
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
            if (con) {
              con = `_${con}_`
            } else {
              con = `-`
            }
            mdRes += `| ` + `${con} `.replace(/\|/g, '/')
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
