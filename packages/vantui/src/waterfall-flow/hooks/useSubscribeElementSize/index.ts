import { useRef } from 'react'
import Taro, { createIntersectionObserver } from '@tarojs/taro'
import { Size } from '../../utils/element'
import { usePersistFn } from '../usePersistFn'
import { useDepsTimeout } from './../useTimeout/useDepsTimeout'

const threshold = [...new Array(100)].map((_, idx) => idx / 100)

/**
 * 订阅元素的size变化
 * @param query Taro.createSelectorQuery().select(query)的query
 * @param onResize 元素size变化时的回调
 * @param options 订阅配置
 * @returns
 */
export const useSubscribeElementSize = (
  query: string,
  compareQuery: string,
  containerQuery: string,
  onResize: (size: Size) => void,
  delay = 0,
  deps: React.DependencyList = [],
) => {
  const observerRef = useRef<Taro.IntersectionObserver | IntersectionObserver>()
  const compareObserverRef = useRef<
    Taro.IntersectionObserver | IntersectionObserver
  >()
  const sizeRef = useRef<Size>()

  const diapatchResize = usePersistFn((size: Size) => {
    const { width, height } = sizeRef.current ?? {}
    if (width === size.width && height === size.height) {
      return
    }
    sizeRef.current = size
    onResize(size)
  })

  const initObserveH5 = usePersistFn(() => {
    const options: any = {
      threshold,
    }
    options.root = document.querySelector(containerQuery)
    observerRef.current = new IntersectionObserver(function (
      res: IntersectionObserverEntry[],
    ) {
      diapatchResize({
        width: res?.[res?.length - 1]?.boundingClientRect?.width ?? 0,
        height: res?.[res?.length - 1]?.boundingClientRect?.height ?? 0,
      })
    },
    options)
    observerRef.current?.observe?.(document.querySelector(query)!)

    options.root = document.querySelector(compareQuery)
    compareObserverRef.current = new IntersectionObserver(function (
      res: IntersectionObserverEntry[],
    ) {
      diapatchResize({
        width: res?.[res?.length - 1]?.boundingClientRect?.width ?? 0,
        height: res?.[res?.length - 1]?.boundingClientRect?.height ?? 0,
      })
    },
    options)
    compareObserverRef.current?.observe?.(document.querySelector(query)!)
  })

  const initObserver = usePersistFn(() => {
    if (observerRef.current != null) {
      observerRef.current.disconnect()
    }
    if (compareObserverRef.current != null) {
      compareObserverRef.current.disconnect()
    }
    if (process.env.TARO_ENV === 'h5') {
      return initObserveH5()
    }
    // eslint-disable-next-line no-underscore-dangle
    let createObserver = Taro.createIntersectionObserver!

    if (process.env.TARO_ENV === 'alipay') {
      createObserver = createIntersectionObserver!
    }
    observerRef.current = createObserver(Taro.getCurrentInstance().page!, {
      thresholds: threshold,
      observeAll: true,
    })
    observerRef.current
      .relativeTo(containerQuery, { bottom: 0 })
      .observe(query, (res) => {
        diapatchResize({
          width: res?.boundingClientRect?.width,
          height: res?.boundingClientRect?.height,
        })
      })
    compareObserverRef.current?.disconnect?.()
    compareObserverRef.current = Taro.createIntersectionObserver(
      Taro.getCurrentInstance().page!,
      {
        thresholds: threshold,
        observeAll: true,
      },
    )
    compareObserverRef.current
      .relativeTo(compareQuery, { bottom: 0 })
      .observe(query, (res) => {
        diapatchResize({
          width: res?.boundingClientRect?.width,
          height: res?.boundingClientRect?.height,
        })
      })
  })

  useDepsTimeout(
    () => {
      initObserver()
      return () => {
        observerRef.current?.disconnect?.()
        compareObserverRef.current?.disconnect?.()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [...deps, initObserver],
    delay,
  )
}

export default useSubscribeElementSize
