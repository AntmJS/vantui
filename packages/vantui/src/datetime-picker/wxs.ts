import { isDef } from '../common/validator'

const currentYear = new Date().getFullYear()
function isValidDate(date: any) {
  return isDef(date) && !isNaN(new Date(date).getTime())
}

function range(num: any, min: any, max: any) {
  return Math.min(Math.max(num, min), max)
}

function padZero(val: any) {
  return `00${val}`.slice(-2)
}

function times(n: number, iteratee: any) {
  let index = -1
  const result = Array(n < 0 ? 0 : n)
  while (++index < n) {
    result[index] = iteratee(index)
  }
  return result
}

function getTrueValue(formattedValue: any) {
  if (formattedValue === undefined) {
    formattedValue = '1'
  }
  while (isNaN(parseInt(formattedValue, 10))) {
    formattedValue = formattedValue.slice(1)
  }
  return parseInt(formattedValue, 10)
}

function getMonthEndDay(year: number, month: number): any {
  return 32 - new Date(year, month - 1, 32).getDate()
}

const defaultFormatter = (_type: any, value: any) => value

function diff(obj1: any, obj2: any) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  } else {
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        return false
      }
      //类型相同
      if (typeof obj1[key] === typeof obj2[key]) {
        //同为引用类型
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          const equal = diff(obj1[key], obj2[key])
          if (!equal) {
            return false
          }
        }
        //同为基础数据类型
        if (
          typeof obj1[key] !== 'object' &&
          typeof obj2[key] !== 'object' &&
          obj1[key] !== obj2[key]
        ) {
          return false
        }
      } else {
        return false
      }
    }
  }
  return true
}

export {
  defaultFormatter,
  getMonthEndDay,
  getTrueValue,
  times,
  padZero,
  range,
  isValidDate,
  currentYear,
  diff,
}
