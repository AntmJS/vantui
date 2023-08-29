import {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react'
import {
  View,
  ScrollView,
  BaseEventOrig,
  ScrollViewProps,
} from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import { getRect, addUnit } from '../common/utils'
import { IVirtualListProps, IVirtualListInstance } from '../../types/index'
import { Icon } from '../icon'
import { getClosestIndex } from './utils'

const clsPrefix = 'van-virtual-half-list'

function VirtualList_(
  props: IVirtualListProps<any>,
  ref: React.ForwardedRef<IVirtualListInstance>,
) {
  const {
    className,
    height,
    style,
    footer,
    dataSource,
    showCount = 10,
    listClssName = '',
    ItemRender,
    listStyle = {},
    renderBackToTop,
    backToTopCritical,
    backToTopSuccess,
  } = props

  const prevDataLength = useRef(0)
  const [scrollIntoView, setScrollIntoView] = useState('')

  const [rects, setRects] = useState({})
  const [showConfig, setShowConfig] = useState({
    head: 0,
    tail: showCount,
    nextHead: showCount,
    NextTail: showCount * 2,
    transformY: `translateY(0px)`,
  })

  const updateRects = useCallback(async () => {
    const head = showConfig.head
    const nextHead = showConfig.nextHead
    let target = `.${clsPrefix}-box${head}`
    let nextTarget = `.${clsPrefix}-box${nextHead}`
    if (process.env.TARO_ENV === 'weapp') {
      target = `.${clsPrefix} >>> ${target}`
      nextTarget = `.${clsPrefix} >>> ${nextTarget}`
    }

    let shouldUpdate = false

    if (!rects[head]) {
      shouldUpdate = true
      const rect1: any = await getRect(null, target)
      if (`${head}` === '0') {
        rects[head] = {
          ...rect1,
          top: 0,
        }
      } else {
        const prev = rects[head - showCount]
        rects[head] = {
          ...rect1,
          top: prev.height + prev.top,
        }
      }
    }

    if (!rects[nextHead]) {
      shouldUpdate = true
      const rect2: any = await getRect(null, nextTarget)
      const prev = rects[nextHead - showCount]
      rects[nextHead] = {
        ...rect2,
        top: prev.height + prev.top,
      }
    }

    if (shouldUpdate) setRects({ ...rects })
  }, [showCount, rects, showConfig])

  const handleScroll = useCallback(
    (e: BaseEventOrig<ScrollViewProps.onScrollDetail>) => {
      const scrollTop = Math.floor(e.detail.scrollTop)
      updateRects()
      nextTick(() => {
        if (Object.keys(rects).length) {
          const startIndex = getClosestIndex(rects, scrollTop)
          setShowConfig({
            head: startIndex,
            tail: startIndex + showCount,
            nextHead: startIndex + showCount,
            NextTail: startIndex + showCount * 2,
            transformY: `translateY(${rects[`${startIndex}`].top}px)`,
          })
        }
      })
    },
    [showCount, rects, updateRects],
  )

  const reset = useCallback(() => {
    prevDataLength.current = 0
    setRects({})
    setShowConfig({
      head: 0,
      tail: showCount,
      nextHead: showCount,
      NextTail: showCount * 2,
      transformY: `translateY(0px)`,
    })
  }, [showCount])

  const scrollToTop = useCallback(() => {
    setShowConfig({
      head: 0,
      tail: showCount,
      nextHead: showCount,
      NextTail: showCount * 2,
      transformY: `translateY(0px)`,
    })
    setScrollIntoView('van-virtual-box-item0')
    nextTick(() => {
      setTimeout(() => {
        setScrollIntoView('')

        backToTopSuccess?.()
      }, 33.33)
    })
  }, [backToTopSuccess, showCount])

  useImperativeHandle(ref, () => {
    return {
      reset: reset,
      backToTop: scrollToTop,
    }
  })

  useEffect(() => {
    if (dataSource.length > prevDataLength.current) {
      setTimeout(() => {
        updateRects()
      }, 66.66)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource.length])

  useLayoutEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onTouch = useCallback(
    (e) => {
      if (showConfig.head > 0) {
        e.stopPropagation()
      }
    },
    [showConfig.head],
  )

  const wrapperHeight = useMemo(() => {
    const keys = Object.keys(rects)
    if (keys.length) {
      const maxIndex = Math.max(...keys.map((item) => Number(item)))
      const lastRect = rects[`${maxIndex}`]

      return lastRect.height + lastRect.top
    } else return 0
  }, [rects])

  return (
    <ScrollView
      className={`van-virtual-list ${clsPrefix} ${className}`}
      scrollY
      style={{ height: addUnit(height), ...(style as React.CSSProperties) }}
      onScroll={handleScroll}
      scrollIntoView={scrollIntoView}
      onTouchStart={onTouch}
      onTouchMove={onTouch}
    >
      <View style={{ minHeight: wrapperHeight || 'auto' }}>
        <View style={{ transform: showConfig.transformY }}>
          <View
            className={`${clsPrefix}-box${showConfig.head} ${listClssName}`}
            style={listStyle}
          >
            {dataSource
              .slice(showConfig.head, showConfig.tail)
              .map((item, i) => (
                <ItemRender
                  key={`van-virtual-box-item${i + showConfig.head}`}
                  item={item}
                  index={showConfig.head + i}
                  id={`van-virtual-box-item${i + showConfig.head}`}
                />
              ))}
          </View>
          <View
            className={`${clsPrefix}-box${showConfig.nextHead} ${listClssName}`}
            style={listStyle}
          >
            {dataSource
              .slice(showConfig.nextHead, showConfig.NextTail)
              .map((item, i) => (
                <ItemRender
                  key={`van-virtual-box-next-item${i + showConfig.nextHead}`}
                  item={item}
                  index={showConfig.nextHead + i}
                  id={`van-virtual-box-item${i + showConfig.nextHead}`}
                />
              ))}
          </View>
        </View>
      </View>
      {footer}
      <View
        className={`van-virtual-backto-top-${
          showConfig.head > (backToTopCritical || showCount * 2)
            ? 'show'
            : 'hidden'
        }`}
      >
        {renderBackToTop || (
          <View className="van-virtual-backto-top">
            <Icon name="back-top" size="20px" onClick={scrollToTop} />
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export const VirtualList = forwardRef(VirtualList_)

export default VirtualList
