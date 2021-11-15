import { keys } from '../wxs/object'
import { style } from '../wxs/style'

function kebabCase(word: any) {
  const newWord = word
    .replace(/[A-Z]/g, function (i: any) {
      return '-' + i
    })
    ?.toLowerCase()
    .replace(/^-/, '')

  return newWord
}

function mapThemeVarsToCSSVars(themeVars: any) {
  const cssVars: any = {}
  keys(themeVars).forEach(function (key: any) {
    const cssVarsKey = '--' + kebabCase(key)
    cssVars[cssVarsKey] = themeVars[key]
  })

  return style(cssVars)
}

export { kebabCase, mapThemeVarsToCSSVars }
