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
    const page = getCurrentPage() as any
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
