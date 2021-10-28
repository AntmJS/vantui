import { useEffect } from 'react'
import { getCurrentPage, isDef } from '../common/utils.js'

function onPageScroll(event: any) {
  const { vanPageScroller = [] } = getCurrentPage() as any
  vanPageScroller.forEach((scroller: any) => {
    if (typeof scroller === 'function') {
      scroller(event)
    }
  })
}

export function usePageScroll(scroller: any) {
  useEffect(() => {
    // 兼容react-ui 弄出来的代码
    if (process.env.TARO_ENV === 'h5') {
      const el = document as any

      function listener(event: Event): void {
        if (!event.target) return
        const _event = {
          scrollTop: el.scrollingElement.scrollTop,
          scrollLeft: el.scrollingElement.scrollLeft,
        }

        scroller(_event)
      }
      el.addEventListener('scroll', listener)
      return () => {
        el.removeEventListener('scroll', listener)
      }
    }

    const page = (getCurrentPage() || {}) as any
    if (Array.isArray(page.vanPageScroller)) {
      page.vanPageScroller.push(scroller.bind(null))
    } else {
      page.vanPageScroller =
        typeof page.onPageScroll === 'function'
          ? [page.onPageScroll.bind(page), scroller.bind(null)]
          : [scroller.bind(null)]
    }
    page.onPageScroll = onPageScroll

    return () => {
      let _a
      const page = getCurrentPage() as any
      if (isDef(page)) {
        page.vanPageScroller =
          ((_a = page.vanPageScroller) === null || _a === undefined
            ? undefined
            : _a.filter((item: any) => item !== scroller)) || []
      }
    }
  }, [scroller])
}
