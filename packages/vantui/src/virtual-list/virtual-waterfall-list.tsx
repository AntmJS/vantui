import {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import {
  View,
  ScrollView,
  BaseEventOrig,
  ScrollViewProps,
} from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import { getRect, addUnit } from '../common/utils'
import { Icon } from '../icon'
import { IVirtualListProps, IVirtualListInstance } from '../../types/index'
import { getClosestIndex_ } from './utils'

const clsPrefix = 'van-virtual-waterfall-list'

function VirtualWaterfallList_(
  props: IVirtualListProps<any>,
  ref: React.ForwardedRef<IVirtualListInstance>,
) {
  const {
    className,
    height,
    style,
    footer,
    dataSource,
    showCount = 6,
    listClssName = '',
    gap = 10,
    ItemRender,
    renderBackToTop,
    backToTopCritical,
    backToTopSuccess,
  } = props
  const step = useMemo(() => {
    return Math.ceil(showCount / 2)
  }, [showCount])
  const prevTransformIndex = useRef(0)
  const prevDataLength = useRef(0)
  const compareHistory = useRef({})
  const [scrollIntoView, setScrollIntoView] = useState('')

  const [leftData, setLeftData] = useState<any>([])
  const [rightData, setRightData] = useState<any>([])
  const [leftRects, setLeftRects] = useState<any>([])
  const [rightRects, setRightRects] = useState<any>([])
  const [leftShowConfig, setLeftShowConfig] = useState({
    head: 0,
    tail: step,
    transformY: 0,
  })
  const [rightShowConfig, setRightShowConfig] = useState({
    head: 0,
    tail: step,
    transformY: 0,
  })

  const updateItemRect = useCallback(async (i, rectTarget, tn) => {
    let targetName = `.van-virtual-${tn}-item${i}`
    if (process.env.TARO_ENV === 'weapp') {
      targetName = `.${clsPrefix} >>> ${targetName}`
    }
    const res: any = await getRect(null, targetName)
    if (res) {
      let prev: any = {}
      if (i > 0) prev = rectTarget[i - 1]
      rectTarget[i] = {
        top: i === 0 ? 0 : Math.floor(prev.height) + prev.top,
        height: Math.floor(res.height),
      }
    }
  }, [])

  const updateLeftRects = useCallback(
    async (leftRects) => {
      for (let i = leftShowConfig.head; i < leftShowConfig.tail; i++) {
        await updateItemRect(i, leftRects, 'left')
      }
      setLeftRects([...leftRects])
    },
    [leftShowConfig.head, leftShowConfig.tail, updateItemRect],
  )

  const updateRightRects = useCallback(
    async (rightRects) => {
      for (let i = rightShowConfig.head; i < rightShowConfig.tail; i++) {
        await updateItemRect(i, rightRects, 'right')
      }
      setRightRects([...rightRects])
    },
    [rightShowConfig.head, rightShowConfig.tail, updateItemRect],
  )

  const leftDataGiveRight = useCallback(
    (diffHeight) => {
      let lastRectHeight = leftRects[leftRects.length - 1].height
      while (diffHeight > lastRectHeight) {
        const d = leftData.pop()
        rightData.push(d)
        const rec = leftRects.pop()
        rightRects.push(rec)

        diffHeight = diffHeight - lastRectHeight
        lastRectHeight = leftRects[leftRects.length - 1].height
      }

      setLeftData([...leftData])
      setRightData([...rightData])
      setLeftRects([...leftRects])
      setRightRects([...rightRects])
    },
    [leftData, leftRects, rightData, rightRects],
  )

  const rightDataGiveLeft = useCallback(
    (diffHeight) => {
      let lastRectHeight = rightRects[rightRects.length - 1].height
      while (diffHeight > lastRectHeight) {
        const d = rightData.pop()
        leftData.push(d)
        const rec = rightRects.pop()
        leftRects.push(rec)

        diffHeight = diffHeight - lastRectHeight
        lastRectHeight = rightRects[rightRects.length - 1].height
      }

      setLeftData([...leftData])
      setRightData([...rightData])
      setLeftRects([...leftRects])
      setRightRects([...rightRects])
    },
    [leftData, leftRects, rightData, rightRects],
  )

  const wrapperHeightLeft = useMemo(() => {
    if (leftRects.length) {
      const lastRectLeft = leftRects[leftRects.length - 1]
      return lastRectLeft.height + lastRectLeft.top
    } else return 0
  }, [leftRects])

  const wrapperHeightRight = useMemo(() => {
    if (rightRects.length) {
      const lastRectRight = rightRects[rightRects.length - 1]
      return lastRectRight.height + lastRectRight.top
    } else return 0
  }, [rightRects])

  useEffect(() => {
    const compareKey = `${leftShowConfig.head}&${rightShowConfig.head}`
    const heightDiff = wrapperHeightLeft - wrapperHeightRight
    if (!compareHistory.current[compareKey] && wrapperHeightLeft) {
      compareHistory.current[compareKey] = true
      if (
        heightDiff > 0 &&
        heightDiff > leftRects[leftRects.length - 1].height
      ) {
        leftDataGiveRight(Math.abs(heightDiff))
      } else if (
        heightDiff < 0 &&
        Math.abs(heightDiff) > rightRects[rightRects.length - 1].height
      ) {
        rightDataGiveLeft(Math.abs(heightDiff))
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperHeightLeft, wrapperHeightRight])

  const handleScroll = useCallback(
    (e: BaseEventOrig<ScrollViewProps.onScrollDetail>) => {
      const scrollTop = Math.floor(e.detail.scrollTop)

      const compareKey = `${leftShowConfig.head}&${rightShowConfig.head}`
      if (!compareHistory.current[compareKey] || leftRects.length === 0) {
        updateLeftRects(leftRects)
        updateRightRects(rightRects)
      }

      if (leftRects.length && rightRects.length) {
        const startIndex = getClosestIndex_(leftRects, scrollTop) as number
        const startIndexR = getClosestIndex_(rightRects, scrollTop) as number

        if (leftRects[startIndex] && startIndex !== leftShowConfig.head) {
          setLeftShowConfig({
            head: startIndex,
            tail: startIndex + step,
            transformY: leftRects[startIndex].top,
          })
        }

        if (rightRects[startIndexR] && startIndexR !== rightShowConfig.head) {
          setRightShowConfig({
            head: startIndexR,
            tail: startIndexR + step,
            transformY: rightRects[startIndexR].top,
          })
        }
      }
    },
    [
      leftRects,
      leftShowConfig.head,
      rightRects,
      rightShowConfig.head,
      step,
      updateLeftRects,
      updateRightRects,
    ],
  )

  useEffect(() => {
    nextTick(() => {
      if (prevTransformIndex.current < dataSource.length) {
        for (let i = prevTransformIndex.current; i < dataSource.length; i++) {
          if (i % 2 === 0) {
            leftData.push(dataSource[i])
          }
          if (i % 2 !== 0) {
            rightData.push(dataSource[i])
          }
        }
        prevTransformIndex.current = dataSource.length

        setLeftData([...leftData])
        setRightData([...rightData])
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource])

  useEffect(() => {
    if (dataSource.length > prevDataLength.current) {
      prevDataLength.current = dataSource.length
      setTimeout(() => {
        updateLeftRects(leftRects)
        updateRightRects(rightRects)
      }, 66.66)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource.length])

  const reset = useCallback(() => {
    prevTransformIndex.current = 0
    prevDataLength.current = 0
    compareHistory.current = {}
    setLeftData([])
    setRightData([])
    setLeftShowConfig({
      head: 0,
      tail: step,
      transformY: 0,
    })
    setRightShowConfig({
      head: 0,
      tail: step,
      transformY: 0,
    })
  }, [step])

  useImperativeHandle(ref, () => {
    return {
      reset: reset,
      backToTop: scrollToTop,
    }
  })

  useLayoutEffect(() => {
    if (leftShowConfig.head !== 0) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onTouchMove = useCallback(
    (e) => {
      if (leftShowConfig.head > 0) {
        e.stopPropagation()
      }
    },
    [leftShowConfig.head],
  )

  const scrollToTop = useCallback(() => {
    setScrollIntoView(`van-virtual-left-item0`)
    setLeftShowConfig({
      head: 0,
      tail: step,
      transformY: 0,
    })
    setRightShowConfig({
      head: 0,
      tail: step,
      transformY: 0,
    })
    nextTick(() => {
      setScrollIntoView('')
      backToTopSuccess?.()
    })
  }, [backToTopSuccess, step])

  return (
    <ScrollView
      className={`van-virtual-list ${clsPrefix} ${className}`}
      scrollY
      scrollTop={0}
      style={{ height: addUnit(height), ...(style as React.CSSProperties) }}
      onScroll={handleScroll}
      scrollIntoView={scrollIntoView}
      scrollWithAnimation={false}
    >
      <View onTouchMove={onTouchMove}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View
            style={{
              height: wrapperHeightLeft || 'auto',
              width: `calc(50% - ${addUnit(gap / 2)})`,
              marginRight: addUnit(gap),
            }}
          >
            <View
              className={`${clsPrefix}-left ${listClssName}`}
              style={{
                transform: `translateY(${leftShowConfig.transformY}px)`,
              }}
            >
              {leftData
                .slice(leftShowConfig.head, leftShowConfig.tail)
                .map((item, i) => (
                  <View
                    style={{ paddingBottom: gap }}
                    key={`van-virtual-left-item${i + leftShowConfig.head}`}
                    className={`van-virtual-left-item${
                      i + leftShowConfig.head
                    }`}
                    id={`van-virtual-left-item${i + leftShowConfig.head}`}
                  >
                    <ItemRender item={item} index={leftShowConfig.head + i} />
                  </View>
                ))}
            </View>
          </View>
          <View
            style={{
              height: wrapperHeightRight || 'auto',
              width: `calc(50% - ${addUnit(gap / 2)})`,
            }}
          >
            <View
              className={`${clsPrefix}-right ${listClssName}`}
              style={{
                transform: `translateY(${rightShowConfig.transformY}px)`,
              }}
            >
              {rightData
                .slice(rightShowConfig.head, rightShowConfig.tail)
                .map((item, i) => (
                  <View
                    style={{ paddingBottom: addUnit(gap) }}
                    key={`van-virtual-right-item${i + rightShowConfig.head}`}
                    className={`van-virtual-right-item${
                      i + rightShowConfig.head
                    }`}
                  >
                    <ItemRender item={item} index={rightShowConfig.head + i} />
                  </View>
                ))}
            </View>
          </View>
        </View>
        {footer}
      </View>
      <View
        className={`van-virtual-backto-top-${
          leftShowConfig.head > (backToTopCritical || showCount * 2)
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

export const VirtualWaterfallList = forwardRef(VirtualWaterfallList_)

export default VirtualWaterfallList
