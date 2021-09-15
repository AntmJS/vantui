import type ANTMUI from '../../types/normal'
import { useCallback, useRef, useState } from 'react'
import { nextTick, createSelectorQuery, SelectorQuery } from '@tarojs/taro'

export function useFadeIn(ref: any) {
  return useCallback(
    function () {
      if (ref.current) {
        ref.current.style.cssText = 'display: block;opacity: 0'
      }
      nextTick(() => {
        if (ref.current) {
          ref.current.style.cssText =
            'transition: opacity .2s linear;opacity: 1;display: block;'
        }
      })
    },
    [ref],
  )
}

export function useFadeOut(ref: any) {
  return useCallback(
    function () {
      if (ref.current) {
        ref.current.style.cssText =
          'transition: opacity .2s linear;opacity: 0;display: block;'
      }
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.cssText = 'display: none;opacity: 0;'
        }
      }, 200)
    },
    [ref],
  )
}

export function useMask(ref: any) {
  const [isShowMask, setIsShowMask] = useState(false)
  const maskRef = useRef<HTMLDivElement>()
  const maskfadeOut = useFadeOut(maskRef)
  const maskfadeIn = useFadeIn(maskRef)
  const actionRef = useRef({
    show: function () {
      setIsShowMask(true)
      maskfadeIn()
    },
    hide: function () {
      setIsShowMask(false)
      maskfadeOut()
    },
  })
  ref.current = actionRef.current
  return { maskRef, isShowMask }
}

export function delay(delayTime = 25): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delayTime)
  })
}

export function delayQuerySelector(
  selectorStr: string,
  delayTime = 500,
): Promise<any[]> {
  return new Promise((resolve) => {
    const selector: SelectorQuery = createSelectorQuery()
    delay(delayTime).then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res: any[]) => {
          resolve(res)
        })
    })
  })
}

export function pxTransform(size: number): string {
  if (!size) return ''
  const designWidth = 750
  const deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  }
  return `${size / deviceRatio[designWidth]}rpx`
}

function objectToString(style: ANTMUI.IAnyObject | string): string {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach((key) => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return ''
}

export function mergeStyle(
  style1: ANTMUI.IAnyObject | string,
  style2: ANTMUI.IAnyObject | string,
): ANTMUI.IAnyObject | string {
  if (
    style1 &&
    typeof style1 === 'object' &&
    style2 &&
    typeof style2 === 'object'
  ) {
    return Object.assign({}, style1, style2)
  }
  return objectToString(style1) + objectToString(style2)
}

export function uuid(len = 8, radix = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const value: string[] = []
  let i = 0
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix)]!
  } else {
    // rfc4122, version 4 form
    let r

    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = '-'
    value[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | (Math.random() * 16)
        value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]!
      }
    }
  }

  return value.join('')
}
