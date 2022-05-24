/* eslint-disable @typescript-eslint/no-var-requires */
const babelConfig = require('./cjs/babel.config.cjs')

module.exports = (api, options) => babelConfig(api, options)
