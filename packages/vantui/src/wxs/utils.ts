import { _bem } from './bem'
import { memoize } from './memoize'
import { addUnit } from './add-unit'
import { style, cssStyle } from './style'
import { isArray } from './array'
import { keys } from './object'

const bem: (name: any, conf?: any) => string = memoize(_bem)

export { memoize, addUnit, bem, style, isArray, keys, cssStyle }
