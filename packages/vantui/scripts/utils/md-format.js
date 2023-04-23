/* eslint-disable @typescript-eslint/no-var-requires */
const Prettier = require('prettier')

module.exports = function formatMd(md) {
  return Prettier.format(md, {
    singleQuote: true,
    trailingComma: 'all',
    semi: false,
    parser: 'markdown',
  })
}
