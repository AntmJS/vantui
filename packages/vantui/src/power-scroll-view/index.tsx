import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  View,
  ITouchEvent,
  ScrollView,
  CustomWrapper,
} from '@tarojs/components'
import { TaroElement } from '@tarojs/runtime'
import { debounce } from 'lodash'
import { Loading } from './../loading'
import { Empty } from './../empty'
import { useTouch } from './useTouch'
import {
  scrollOffset,
  preventDefault,
  // boundingClientRect
} from './utils'
import {
  PowerScrollViewProps,
  PullRefreshStatus,
} from './../../types/power-scroll-view'
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
// const [name, bem, t] = createNamespace('pull-refresh')
// const pullRefreshBem = (name?: string) =>
//   name ? 'van-pull-refresh__' + name : 'van-pull-refresh'
const bem = (name?: string) =>
  name ? 'van-power-scroll-view__' + name : 'van-power-scroll-view'
const sleep = (t: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, t)
  })
const DEFAULT_HEAD_HEIGHT = 50
const TEXT_STATUS = ['pulling', 'loosing', 'success']

export const PullRefresh: React.FC<PowerScrollViewProps> = (props) => {
  const {
    headHeight = DEFAULT_HEAD_HEIGHT,
    successDuration = 500,
    animationDuration = 300,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    disabled,
    pullDistance = props.refresherThreshold || props.pullDistance,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRefresh,
    renderHead,
    // immediateCheck,
    successText,
    children,
    loadingText = '加载中...',
    loosingText = '释放即可刷新...',
    pullingText = '下拉即可刷新...',
    // -- list
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onLoad,
    onScroll: onScrollEvent,
    scrollTop,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    offset,
    finishedText = '没有更多了',
    renderFinished,
    renderLoading,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    finished: _finished,
    renderError,
    errorText,
    total,
    current,
    pageSize = 20,
    emptyDescription,
    emptyImage,
    //命名以scrollView 为准
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    upperThreshold,
    lowerThreshold = props.lowerThreshold || props.offset || 250,
    // 重复的属性  以 vant 为准
    refresherEnabled = props.refresherEnabled ?? props.disabled ?? true,
    onScrollToLower = props.onScrollToLower || props.onLoad,
    onScrollToUpper = props.onScrollToUpper || props.onRefresh,
    scrollY = props.scrollY ?? true,
    className,
    ...rest
  } = props
  // ==LIST=======================================
  // 是否到底了
  // const reachDownRef = useRef(false)
  // 是否显示 loading
  // ts推断
  const loadingRef = useRef(false)
  // 是否显示 报错
  const errorRef = useRef(false)
  // 分页
  const paginationRef = useRef({
    page: 0,
    pageSize,
  })

  const [finished, setFinished] = useState<boolean>(_finished || false)
  const currentCount = current ?? Array.from(children as any).length
  const listCount = useRef(0)
  useEffect(() => {
    const { pageSize } = paginationRef.current
    if (currentCount <= pageSize) {
      paginationRef.current.page = 1
      setFinished(false)
    }
    // 传入finished
    if (_finished !== undefined) {
      setFinished(_finished)
      return
    }
    // 都没有传
    if (total === undefined) {
      const addCount = currentCount - listCount.current
      if (
        currentCount === 0 ||
        (listCount.current !== 0 &&
          addCount > -1 &&
          addCount < paginationRef.current.pageSize)
      ) {
        setFinished(true)
      }
      listCount.current = currentCount
      return
    }
    // 传入total
    if (currentCount >= total) {
      setFinished(true)
    } else {
      setFinished(false)
    }
  }, [total, currentCount, _finished])

  const [isError, setError] = useState(false)
  // 是否滚动最上面了
  const reachTopRef = useRef(true)
  const [status, setState] = useState<PullRefreshStatus>('normal')
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)
  const touch = useTouch()
  const getHeadStyle = useCallback((): { height: string } | string => {
    if (headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${headHeight}px`,
      }
    }
    return ''
  }, [headHeight])

  const isTouchable = useCallback(() => {
    return (
      status !== 'loading' &&
      status !== 'success' &&
      refresherEnabled &&
      !loadingRef.current
    )
  }, [refresherEnabled, status])

  const ease = useCallback(
    (distance: number) => {
      const _pullDistance = +(pullDistance || headHeight)

      if (distance > _pullDistance) {
        if (distance < _pullDistance * 2) {
          distance = _pullDistance + (distance - _pullDistance) / 2
        } else {
          distance = _pullDistance * 1.5 + (distance - _pullDistance * 2) / 4
        }
      }

      return Math.round(distance)
    },
    [headHeight, pullDistance],
  )

  const setStatus = useCallback(
    (distance: number, isLoading?: boolean) => {
      const _pullDistance = +(pullDistance || headHeight)
      setDistance(distance)
      if (isLoading) {
        setState('loading')
        loadingRef.current = true
      } else if (distance === 0) {
        setState('normal')
        loadingRef.current = false
      } else if (distance < _pullDistance) {
        setState('pulling')
      } else {
        setState('loosing')
      }
    },
    [headHeight, pullDistance],
  )

  const getStatusText = useCallback(() => {
    if (status === 'loading') {
      return loadingText
    }
    if (status === 'loosing') {
      return loosingText
    }
    if (status === 'pulling') {
      return pullingText
    }
    if (status === 'success') {
      return successText
    }
    return ''
  }, [loadingText, loosingText, pullingText, status, successText])

  const renderStatus = useCallback((): React.ReactNode => {
    const node = renderHead?.({ status, distance })
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
  }, [distance, getStatusText, status, renderHead])

  const showSuccessTip = useCallback(async () => {
    // state.status = 'success'
    setState('success')
    await sleep(+successDuration)
  }, [successDuration])

  // 提前把reachTopRef.current的值 求出来
  const debounceScrollOffset = useMemo(() => {
    const getScrollTop = async () => {
      const { scrollTop } = await scrollOffset(scrollRef.current!)
      reachTopRef.current = scrollTop === 0
    }
    return debounce(getScrollTop, 400)
  }, [])
  // 如果这是了 scrollTop 要触发ScrollOffset计算
  useEffect(() => {
    debounceScrollOffset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTop])
  const onScroll = useCallback(
    (e) => {
      onScrollEvent?.(e)
      debounceScrollOffset()
    },
    [debounceScrollOffset, onScrollEvent],
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkPosition = useCallback(
    async (event: ITouchEvent) => {
      // const { scrollTop } = await scrollOffset(scrollRef.current!)
      // reachTopRef.current = scrollTop === 0
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
      errorRef.current = false
      setStatus(+headHeight, true)
      setError(false)
      paginationRef.current.page = 1
      const event = total === undefined ? 0 : paginationRef.current
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await onScrollToUpper?.(event)
      setDuration(+animationDuration)
      if (successText) {
        await showSuccessTip()
      }
      setStatus(0, false)
      // 阻止下拉过程中 二次触发下拉
    } catch (e) {
      setStatus(0, false)
      // throw e
    }
  }, [
    animationDuration,
    headHeight,
    onScrollToUpper,
    setStatus,
    showSuccessTip,
    successText,
    total,
  ])
  const onTouchEnd = useCallback(() => {
    // console.log('end', reachTopRef.current, touch.deltaY.current, isTouchable())
    if (reachTopRef.current && touch.deltaY.current && isTouchable()) {
      // state.duration = +animationDuration
      setDuration(+animationDuration)

      if (status === 'loosing') {
        doRefresh()
      } else {
        setStatus(0)
      }
    }
  }, [
    doRefresh,
    isTouchable,
    animationDuration,
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

  // ==LIST=======================================
  const isBanLoad = useCallback(() => {
    return (
      finished || status !== 'normal' || loadingRef.current || errorRef.current
    )
  }, [finished, status])

  const doLoadMore = useCallback(async () => {
    if (isBanLoad()) return
    try {
      loadingRef.current = true
      paginationRef.current.page += 1
      const event = total === undefined ? currentCount : paginationRef.current
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await onScrollToLower?.(event)
      loadingRef.current = false
    } catch (e) {
      paginationRef.current.page -= 1
      loadingRef.current = false
      errorRef.current = true
      setError(true)
      // 这里要主动触发刷新
      // throw e
    }
  }, [currentCount, isBanLoad, onScrollToLower, total])

  // const check = useCallback(async () => {
  //   if (!immediateCheck || !scrollY || isBanLoad()) return
  //   const scrollParentRect = await boundingClientRect(scrollRef.current!)

  //   if (!scrollParentRect?.height) {
  //     return
  //   }

  //   const placeholderRect = await boundingClientRect(placeholder.current!)
  //   const isReachEdge =
  //     placeholderRect.bottom - scrollParentRect.bottom <= lowerThreshold

  //   if (isReachEdge) {
  //     doLoadMore()
  //   } else {
  //     reachDownRef.current = true
  //   }
  // }, [immediateCheck, scrollY, isBanLoad, lowerThreshold, doLoadMore])

  // useEffect(() => {
  //   // finished || status !== 'normal' || loadingRef.current || errorRef.current
  //   if (reachDownRef.current) return
  //   check()
  //   console.log('loadingRef.current', loadingRef.current, '--change---')
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [reachDownRef.current])

  // useEffect(() => {
  //   setTimeout(() => {
  //     check()
  //   }, 500)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const placeholder = useRef<TaroElement>()

  const renderFinishedText = useCallback((): React.ReactNode => {
    if (finished) {
      const text = renderFinished ? renderFinished : finishedText
      if (text) {
        return <View className={bem('finished-text')}>{text}</View>
      }
    }
    return null
  }, [finished, renderFinished, finishedText])

  const renderLoadingText = useCallback((): React.ReactNode => {
    if (!finished && scrollY) {
      return (
        <View className={bem('loading')}>
          {renderLoading ? (
            renderLoading
          ) : (
            <Loading className={bem('loading-icon')}>
              {/* {loadingText || t('loading')} */}
              {loadingText}
            </Loading>
          )}
        </View>
      )
    }
    return null
  }, [finished, loadingText, scrollY, renderLoading])

  const clickErrorText = useCallback(() => {
    setError(false)
    errorRef.current = false
    doLoadMore()
    // web 很奇怪的问题
  }, [doLoadMore])

  const renderErrorText = useCallback((): React.ReactNode => {
    if (isError) {
      const text = renderError ? renderError : errorText
      if (text) {
        return (
          <View className={bem('error-text')} onClick={clickErrorText}>
            {text}
          </View>
        )
      }
    }
    return null
  }, [clickErrorText, isError, errorText, renderError])
  // 如果不定高 一直下拉

  const ListScrollContent = useCallback(() => {
    if (finished && currentCount === 0) {
      return <Empty description={emptyDescription} image={emptyImage} />
    }
    if (isError) {
      return renderErrorText()
    }

    if (finished) {
      return renderFinishedText()
    }

    return renderLoadingText()
  }, [
    finished,
    currentCount,
    isError,
    renderLoadingText,
    emptyDescription,
    emptyImage,
    renderErrorText,
    renderFinishedText,
  ])

  return (
    <ScrollView
      ref={scrollRef}
      lowerThreshold={lowerThreshold}
      onScroll={onScroll}
      scrollTop={scrollTop}
      onScrollToLower={doLoadMore}
      scrollY={scrollY}
      className={`${bem()} ${className || ''}`}
      {...rest}
    >
      {/* <View className={bem()}> */}
      <View
        className={bem('track')}
        style={trackStyle}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onTouchStart={onTouchStart}
      >
        <CustomWrapper>
          <View className={bem('head')} style={getHeadStyle()}>
            {renderStatus()}
          </View>
        </CustomWrapper>
        {children}
        <View ref={placeholder} className={bem('placeholder')} />
        {ListScrollContent()}
      </View>
      {/* </View> */}
    </ScrollView>
  )
}

export default PullRefresh
