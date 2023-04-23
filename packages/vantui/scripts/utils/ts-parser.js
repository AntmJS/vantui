/* eslint-disable @typescript-eslint/no-var-requires */
const Prettier = require('prettier')
/** 收集d.ts暴露第一层级的属性和注释 */
module.exports = function main(tsStr) {
  tsStr = Prettier.format(tsStr, { semi: false, parser: 'typescript' })
  const { TOKENS } = getAllTokens(tsStr)
  const res = parseTokens(TOKENS)

  return res
}

function getAllTokens(str) {
  let TOKENS = []
  let token = ''
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

  return { TOKENS }
}

function parseTokens(TOKENS) {
  const res = {}
  let value = ''
  let count = 0
  let exportName = ''
  let attrName = ''
  let attrNamePrev = ''
  let InBrackets = 0
  let commentsPenddingStr = ''
  let commentsStr = ''
  let STATUS = {
    EXPORT_1: 'EXPORT_WHAT',
    EXPORT_2: 'EXPORT_GET_WHAT',
    EXPORT_3: 'EXPORTING',
  }
  let status = STATUS.EXPORT_1

  for (let i = 0; i < TOKENS.length; i++) {
    let curToken = TOKENS[i]
    let nextToken = getRealTokenNext(1, TOKENS.slice(i + 1, TOKENS.length - 1))
    let next2Token = getRealTokenNext(2, TOKENS.slice(i + 1, TOKENS.length - 1))

    if (curToken === '/**' || commentsPenddingStr) {
      commentsPenddingStr += curToken
    }

    if (curToken === 'export' && ['interface', 'type'].includes(nextToken)) {
      if (!res[next2Token]) {
        exportName = next2Token
        res[exportName] = {
          ...parseComments(commentsStr),
        }
        commentsStr = ''
      }
      status = STATUS.EXPORT_2
    }

    if (curToken.includes('}') || curToken.includes('})')) {
      count--
      if (count === 0) {
        status = STATUS.EXPORT_1
        if (attrName && exportName)
          res[exportName][attrName]['value'] = formatTsValue(value)
        value = ''
        attrNamePrev = ''
        attrName = ''
        InBrackets = 0
        exportName = ''
      }
    }

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
            ...parseComments(commentsStr),
          }
          commentsStr = ''
        }
        if (curToken.includes('?')) {
          res[exportName][attrName]['require'] = 'false'
        } else {
          res[exportName][attrName]['require'] = 'true'
        }
        if (attrNamePrev) {
          if (!res[exportName]) res[exportName] = {}
          if (!res[exportName][attrNamePrev]) res[exportName][attrNamePrev] = {}
          res[exportName][attrNamePrev]['value'] = formatTsValue(value)
          value = ''
        }
      } else if (status === STATUS.EXPORT_3 && !commentsPenddingStr) {
        value += `${curToken}`
      }
    }
    if (curToken === '*/') {
      commentsStr = commentsPenddingStr + curToken
      commentsPenddingStr = ''
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

function countStrNumInToken(str, token) {
  let res = 0
  for (let i = 0; i < token.length; i++) {
    if (token.charAt(i) === str) {
      res++
    }
  }

  return res
}

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

function parseComments(comments = '') {
  let res = {}
  const arr = comments
    .split('\n')
    .filter((item) => item.includes('@'))
    .map((item) => item.replace(/^[\s]+/g, ''))
    .map((item) => item.replace('* ', ''))
    .map((item) => item.replace('@', ''))
    .map((item) => item.replace(/[\s]+/, '##'))

  arr.forEach((item) => {
    const cons = item.split('##')
    // 防止注释属性名称和类型属性名称重名
    res[cons[0] + '__'] = cons[1]
  })

  return res
}

function formatTsValue(tsValue) {
  let res = Prettier.format(
    `type temp = {
attr:${tsValue}
}
// END`,
    {
      parser: 'typescript',
      semi: false,
      printWidth: 26,
    },
  )
    .replace('type temp = {\n', '')
    .replace('attr: ', '')
    .replace(
      `}
// END`,
      '',
    )

  return res
}
