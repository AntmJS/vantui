import { useEffect } from 'react'
import { usePageScroll as useTaroPageScroll } from '@tarojs/taro'
import { Current } from '@tarojs/runtime'

export function usePageScroll(scroller: any) {
  useEffect((): any => {
    // 兼容react-ui 弄出来的代码
    if (process.env.TARO_ENV !== 'h5') return

    const id = Current?.page?.path?.replace(
      /([^a-z0-9\u00a0-\uffff_-])/gi,
      '\\$1',
    )
    const el: HTMLDivElement | null = (
      id
        ? document.querySelector(`.taro_page#${id}`)
        : document.querySelector('.taro_page') ||
          document.querySelector('.taro_router') ||
          document.scrollingElement
    ) as HTMLDivElement

    function listener(event: Event): void {
      if (!event.target) return
      const _event = {
        scrollTop: el?.scrollTop,
        scrollLeft: el?.scrollLeft,
      }

      scroller(_event)
    }
    el.addEventListener('scroll', listener)
    return () => {
      el.removeEventListener('scroll', listener)
    }
  }, [scroller])
  useTaroPageScroll((e) => {
    if (process.env.TARO_ENV === 'h5') return
    scroller(e)
  })
}
