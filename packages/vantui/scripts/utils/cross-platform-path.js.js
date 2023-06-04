/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { sep } = path

module.exports = function (path) {
  if (typeof path !== 'string') {
    return path
  }
  if (sep === '\\') {
    // 如果当前操作系统为Windows，则将双反斜杠转换为单反斜杠
    return path.replace(/\\/g, '/')
  }
  return path
}
