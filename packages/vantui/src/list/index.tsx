import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View, ITouchEvent, ScrollView } from '@tarojs/components'
import { TaroElement } from '@tarojs/runtime'
import { Loading } from './../loading'
import { useTouch } from './useTouch'
import { scrollOffset, preventDefault, boundingClientRect } from './utils'
import { ListProps, PullRefreshStatus } from './../../types/list'
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
// const [name, bem, t] = createNamespace('pull-refresh')
const bem = (name?: string) =>
  name ? 'van-pull-refresh__' + name : 'van-pull-refresh'
const sleep = (t: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, t)
  })
const DEFAULT_HEAD_HEIGHT = 50
const TEXT_STATUS = ['pulling', 'loosing', 'success']

export const defaultProps = {
  loadingText: '加载中...',
  loosingText: '释放即可刷新...',
  pullingText: '下拉即可刷新...',
  // successText: '刷新成功',
  headHeight: DEFAULT_HEAD_HEIGHT,
  successDuration: 500,
  animationDuration: 300,
  // -- list
  offset: 250,
}

// interface onScrollDetail {
//   /** 横向滚动条位置 */
//   scrollLeft: number
//   /** 竖向滚动条位置 */
//   scrollTop: number
//   /** 滚动条高度 */
//   scrollHeight: number
//   /** 滚动条宽度 */
//   scrollWidth: number
//   deltaX: number
//   deltaY: number
// }
export const PullRefresh: React.FC<ListProps> = (_props) => {
  const props = useMemo(
    () => ({
      ...defaultProps,
      ..._props,
      disabled: !_props.onRefresh,
    }),
    [_props],
  )
  // ==LIST=======================================
  // 是否到底了
  const isToDown = useRef(false)
  const [loading, setLoading] = useState(false)

  // const pageNo  = useRef()
  const reachTopRef = useRef(false)
  // const scrollParent = useRef<onScrollDetail>({
  //   /** 横向滚动条位置 */
  //   scrollLeft: 0,
  //   /** 竖向滚动条位置 */
  //   scrollTop: 0,
  //   /** 滚动条高度 */
  //   scrollHeight: 0,
  //   /** 滚动条宽度 */
  //   scrollWidth: 0,
  //   deltaX: 0,
  //   deltaY: 0,
  // })
  // const scrollTopRef = useRef(0)
  const [status, setState] = useState<PullRefreshStatus>('normal')
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)
  const touch = useTouch()
  const getHeadStyle = useCallback((): { height: string } | string => {
    if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${props.headHeight}px`,
      }
    }
    return ''
  }, [props.headHeight])

  const isTouchable = useCallback(
    () =>
      status !== 'loading' &&
      status !== 'success' &&
      !props.disabled &&
      !loading,
    [loading, props.disabled, status],
  )

  const ease = useCallback(
    (distance: number) => {
      const pullDistance = +(props.pullDistance || props.headHeight)

      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4
        }
      }

      return Math.round(distance)
    },
    [props.headHeight, props.pullDistance],
  )

  const setStatus = useCallback(
    (distance: number, isLoading?: boolean) => {
      const pullDistance = +(props.pullDistance || props.headHeight)
      setDistance(distance)

      if (isLoading) {
        setState('loading')
      } else if (distance === 0) {
        setState('normal')
      } else if (distance < pullDistance) {
        setState('pulling')
      } else {
        setState('loosing')
      }
    },
    [props.headHeight, props.pullDistance],
  )

  const getStatusText = useCallback(() => {
    if (status === 'normal') {
      return ''
    }
    return props[`${status}Text` as const]
  }, [props, status])

  const renderStatus = useCallback((): React.ReactNode => {
    const node = props?.renderHead?.(status, distance)
    if (node) {
      return node
    }

    if (TEXT_STATUS.includes(status)) {
      return <View className={bem('text')}>{getStatusText()}</View>
    }
    if (status === 'loading') {
      return <Loading className={bem('loading')}>{getStatusText()}</Loading>
    }
    return ''
  }, [distance, getStatusText, props, status])

  const showSuccessTip = useCallback(async () => {
    // state.status = 'success'
    setState('success')
    await sleep(+props.successDuration)
    setStatus(0)
  }, [props.successDuration, setStatus])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkPosition = useCallback(
    async (event: ITouchEvent) => {
      const { scrollTop } = await scrollOffset(scrollRef.current!)
      // console.log('scrollTopscrollTop:', scrollTop)
      // scrollTopRef.current
      reachTopRef.current = scrollTop === 0
      if (reachTopRef.current) {
        setDuration(0)
        touch.start(event)
      }
    },
    [touch],
  )

  const onTouchStart = useCallback(
    (event: ITouchEvent): void => {
      if (isTouchable()) {
        checkPosition(event)
      }
    },
    [checkPosition, isTouchable],
  )

  // list
  const onTouchMove = useCallback(
    (event: ITouchEvent): void => {
      if (isTouchable()) {
        const { deltaY } = touch
        touch.move(event)
        if (reachTopRef.current && deltaY.current >= 0 && touch.isVertical()) {
          preventDefault(event, true)
          setStatus(ease(deltaY.current))
        }
      }
    },
    [ease, isTouchable, setStatus, touch],
  )

  // list
  const doRefresh = useCallback(async () => {
    try {
      setStatus(+props.headHeight, true)
      await props.onRefresh?.()
      setDuration(+props.animationDuration)
      if (props.successText) {
        await showSuccessTip()
      } else {
        setStatus(0, false)
      }
      // 自动拉满屏幕
      if (props.immediateCheck) {
        isToDown.current = false
      }
    } catch (e) {
      setStatus(0, false)

      throw e
    }
  }, [props, setStatus, showSuccessTip])
  const onTouchEnd = useCallback(() => {
    // console.log('end', reachTopRef.current, touch.deltaY.current, isTouchable())
    if (reachTopRef.current && touch.deltaY.current && isTouchable()) {
      // state.duration = +props.animationDuration
      setDuration(+props.animationDuration)

      if (status === 'loosing') {
        doRefresh()
      } else {
        setStatus(0)
      }
    }
  }, [
    doRefresh,
    isTouchable,
    props.animationDuration,
    setStatus,
    status,
    touch.deltaY,
  ])
  const trackStyle = useMemo(
    () => ({
      transitionDuration: `${duration}ms`,
      transform: distance ? `translate3d(0,${distance}px, 0)` : '',
    }),
    [distance, duration],
  )

  const scrollRef = useRef<TaroElement>()

  // const onScroll = useRef(
  //   debounce(() => {
  //     // 如果小于100
  //     // 检查一下高度
  //     scrollOffset(scrollRef.current!).then((e) => {
  //       scrollTopRef.current = e.scrollTop
  //     })
  //   }, 300),
  // ).current

  // usePageScroll(onScroll)

  // ==LIST=======================================
  const doLoadMore = useCallback(async () => {
    // console.log('doLoadMore', loading, isTouchable())
    if (props.finished || !isTouchable()) return
    try {
      setLoading(true)
      await props?.onLoad?.()
      setLoading(false)
    } catch (e) {
      setLoading(false)

      throw e
    }
  }, [isTouchable, props])

  const check = useCallback(async () => {
    if (props.finished || !isTouchable()) return

    const scrollParentRect = await boundingClientRect(scrollRef.current!)

    if (!scrollParentRect.height) {
      return
    }

    const placeholderRect = await boundingClientRect(placeholder.current!)
    const isReachEdge =
      placeholderRect.bottom - scrollParentRect.bottom <= props.offset

    if (isReachEdge) {
      await doLoadMore()
    } else {
      isToDown.current = true
    }
  }, [doLoadMore, isTouchable, props.finished, props.offset])

  useEffect(() => {
    if (props.immediateCheck && !props.finished && !isToDown.current) {
      check()
    }
  }, [props.immediateCheck, props.finished, check])
  // const [loading, setLoading] = useState(false)
  const placeholder = useRef<TaroElement>()
  const listBem = useCallback(
    (name?: string) => (name ? 'van-list__' + name : 'van-list'),
    [],
  )

  const renderFinishedText = useCallback((): React.ReactNode => {
    if (props.finished) {
      const text = props?.renderFinished
        ? props.renderFinished
        : props.finishedText
      if (text) {
        return <View className={listBem('finished-text')}>{text}</View>
      }
    }
    return null
  }, [listBem, props.finished, props.finishedText, props.renderFinished])

  // useEffect(() => {
  //   nextTick(() => {
  //     if (props.immediateCheck) {
  //       console.log('onmount')
  //       check()
  //     }
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const renderLoading = useCallback((): React.ReactNode => {
    if (loading && !props.finished) {
      return (
        <View className={listBem('loading')}>
          {props?.renderLoading ? (
            props?.renderLoading
          ) : (
            <Loading className={listBem('loading-icon')}>
              {/* {props.loadingText || t('loading')} */}
              {props.loadingText}
            </Loading>
          )}
        </View>
      )
    }
    return null
  }, [
    listBem,
    loading,
    props.finished,
    props.loadingText,
    props?.renderLoading,
  ])
  // 如果不定高 一直下拉

  // useReachBottom(() => {
  //   doLoadMore()
  // })

  return (
    <ScrollView
      ref={scrollRef}
      className={props.className}
      style={props.style}
      scrollY
      lowerThreshold={props.offset}
      onScrollToLower={doLoadMore}
      // onScroll={onScroll}
    >
      <View className={bem()}>
        <View
          className={bem('track')}
          style={trackStyle}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onTouchStart={onTouchStart}
        >
          <View className={bem('head')} style={getHeadStyle()}>
            {renderStatus()}
          </View>
          {props.children}
          {renderLoading()}
          {renderFinishedText()}
          <View ref={placeholder} className={listBem('placeholder')} />
        </View>
      </View>
    </ScrollView>
  )
}

export default PullRefresh
