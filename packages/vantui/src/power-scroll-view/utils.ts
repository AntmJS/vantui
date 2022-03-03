export type ScrollElement = Element | Window
import { ITouchEvent } from '@tarojs/components'
import { TaroElement } from '@tarojs/runtime'
import { createSelectorQuery } from '@tarojs/taro'

function selectorQuery(nodesRef?: TaroElement) {
  if (!nodesRef || nodesRef.nodeName === 'root') {
    return createSelectorQuery().selectViewport()
  } else {
    return createSelectorQuery().select('#' + nodesRef.uid)
  }
}
export function scrollOffset(nodesRef: TaroElement) {
  return new Promise<{
    scrollLeft: number // 节点的水平滚动位置
    scrollTop: number // 节点的竖直滚动位置
  }>((resolve) => {
    // 没有固定高度-- 就去拿page的高度
    if (process.env.TARO_ENV === 'h5') {
      const _nodesRef: any =
        nodesRef || document.documentElement || document.body
      return resolve({
        scrollLeft: _nodesRef.scrollLeft,
        scrollTop: _nodesRef.scrollTop,
      })
    }
    return selectorQuery(nodesRef)
      .scrollOffset()
      .exec((res) => {
        resolve(res[0])
      })
  })
}

export function boundingClientRect(nodesRef: TaroElement) {
  return new Promise<{
    /** 节点的下边界坐标 */
    bottom: number
    height: number
    /** 节点的 ID */
    id: string
    /** 节点的左边界坐标 */
    left: number
    /** 节点的右边界坐标 */
    right: number
    /** 节点的上边界坐标 */
    top: number
    /** 节点的宽度 */
    width: number
  }>((resolve) => {
    if (process.env.TARO_ENV === 'h5') {
      const _nodesRef: any =
        nodesRef || document.documentElement || document.body
      return resolve(_nodesRef.getBoundingClientRect())
    }
    return selectorQuery(nodesRef)
      .boundingClientRect()
      .exec((res) => {
        resolve(res[0])
      })
  })
}
export const stopPropagation = (event: ITouchEvent) => event.stopPropagation()

export function preventDefault(
  event: ITouchEvent,
  isStopPropagation?: boolean,
) {
  /* istanbul ignore else */
  // if (typeof event?.cancelable !== 'boolean' || event?.cancelable) {
  // }
  event.preventDefault()

  if (isStopPropagation) {
    stopPropagation(event)
  }
}

export const debounce = <T extends any[], R>(
  fn: (...args: T) => R,
  timeout: number,
) => {
  let handle = 0
  let lastArgs: T | null = null
  const ret = (...args: T) => {
    lastArgs = args
    clearTimeout(handle)
    handle = setTimeout(() => {
      lastArgs = null
      fn(...args)
    }, timeout) as unknown as number
  }
  ret.flush = (): R | void => {
    clearTimeout(handle)
    if (lastArgs) {
      const _lastArgs = lastArgs
      lastArgs = null
      return fn(..._lastArgs)
    }
  }
  // ret.cancel = () => {
  //   lastArgs = null
  //   clearTimeout(handle)
  // }
  return ret
}
