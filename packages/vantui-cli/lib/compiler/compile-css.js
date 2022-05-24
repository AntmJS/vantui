import postcss from 'postcss'
import postcssrc from 'postcss-load-config'
import CleanCss from 'clean-css'
import { POSTCSS_CONFIG_FILE } from '../common/constant.js'
const cleanCss = new CleanCss()
export async function compileCss(source) {
  const config = await postcssrc({}, POSTCSS_CONFIG_FILE)
  const { css } = await postcss(config.plugins).process(source, {
    from: undefined,
  })
  return cleanCss.minify(css).styles
}
