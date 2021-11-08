export function isString(args: unknown): boolean {
  return toString.call(args) === '[object String]'
}

export function isArray(args: unknown): boolean {
  return toString.call(args) === '[object Array]'
}

export function isBoolean(args: unknown): boolean {
  return toString.call(args) === '[object Boolean]'
}

export function isUndefined(args: unknown): boolean {
  return toString.call(args) === '[object Undefined]'
}

export function isNull(args: unknown): boolean {
  return toString.call(args) === '[object Null]'
}

export function isNumber(args: unknown): boolean {
  return toString.call(args) === '[object Number]'
}

export function isObject(args: unknown): boolean {
  return toString.call(args) === '[object Object]'
}

export function isEmptyObject(args: any): boolean {
  if (!isObject(args)) {
    return false
  }

  for (const prop in args) {
    if (!isUndefined(args[prop])) {
      return false
    }
  }

  return true
}

export function isFunction(args: unknown): boolean {
  return toString.call(args) === '[object Function]'
}

export function isSymbol(args: unknown): boolean {
  return toString.call(args) === '[object Symbol]'
}
