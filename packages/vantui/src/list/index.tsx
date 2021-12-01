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
const pullRefreshBem = (name?: string) =>
  name ? 'van-pull-refresh__' + name : 'van-pull-refresh'
const listBem = (name?: string) => (name ? 'van-list__' + name : 'van-list')
const sleep = (t: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, t)
  })
const DEFAULT_HEAD_HEIGHT = 50
const TEXT_STATUS = ['pulling', 'loosing', 'success']

export const PullRefresh: React.FC<ListProps> = (props) => {
  const {
    headHeight = DEFAULT_HEAD_HEIGHT,
    successDuration = 500,
    animationDuration = 300,
    disabled,
    pullDistance,
    onRefresh,
    renderHead,
    scrollY = true,
    immediateCheck,
    successText,
    children,
    loadingText = '加载中...',
    loosingText = '释放即可刷新...',
    pullingText = '下拉即可刷新...',
    // -- list
    onLoad,
    offset = 250,

    finishedText = '没有更多了',
    renderFinished,
    renderLoading,
    finished,
    renderError,
    errorText,
    // 重复的属性  以 vant 为准
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    upperThreshold,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onScrollToLower,
    ...rest
  } = props
  // ==LIST=======================================
  // 是否到底了
  const reachDownRef = useRef(false)
  // 是否显示 loading
  const loadingRef = useRef(false)
  // 是否显示 报错
  const [isError, setError] = useState(false)
  // 是否滚动最上面了
  const reachTopRef = useRef(false)
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

  const isTouchable = useCallback(
    () =>
      status !== 'loading' &&
      status !== 'success' &&
      !disabled &&
      !loadingRef.current,
    [disabled, status],
  )

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
      } else if (distance === 0) {
        setState('normal')
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
    return ''
  }, [loadingText, loosingText, pullingText, status])

  const renderStatus = useCallback((): React.ReactNode => {
    const node = renderHead?.(status, distance)
    if (node) {
      return node
    }

    if (TEXT_STATUS.includes(status)) {
      return <View className={pullRefreshBem('text')}>{getStatusText()}</View>
    }
    if (status === 'loading') {
      return (
        <Loading className={pullRefreshBem('loading')}>
          {getStatusText()}
        </Loading>
      )
    }
    return ''
  }, [distance, getStatusText, status, renderHead])

  const showSuccessTip = useCallback(async () => {
    // state.status = 'success'
    setState('success')
    await sleep(+successDuration)
    setStatus(0)
  }, [successDuration, setStatus])

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
      setError(false)
      setStatus(+headHeight, true)
      await onRefresh?.()
      setDuration(+animationDuration)
      if (successText) {
        await showSuccessTip()
      } else {
        setStatus(0, false)
      }
      // 自动拉满屏幕
      if (immediateCheck) {
        reachDownRef.current = false
      }
    } catch (e) {
      setStatus(0, false)
      // throw e
    }
  }, [
    animationDuration,
    headHeight,
    immediateCheck,
    onRefresh,
    setStatus,
    showSuccessTip,
    successText,
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
  const doLoadMore = useCallback(async () => {
    // console.log('doLoadMore', loading, isTouchable())
    if (finished || !isTouchable()) return
    try {
      setError(false)
      loadingRef.current = true
      await onLoad?.()
      loadingRef.current = false
    } catch (e) {
      loadingRef.current = false
      setError(true)
      // 这里要主动触发刷新
      // throw e
    }
  }, [finished, isTouchable, onLoad])

  const check = useCallback(
    async (isErrorFlag?: boolean) => {
      const error = isErrorFlag !== undefined ? isErrorFlag : isError
      if (finished || !isTouchable() || error) return

      const scrollParentRect = await boundingClientRect(scrollRef.current!)

      if (!scrollParentRect?.height) {
        return
      }

      const placeholderRect = await boundingClientRect(placeholder.current!)
      const isReachEdge =
        placeholderRect.bottom - scrollParentRect.bottom <= offset

      if (isReachEdge) {
        await doLoadMore()
      } else {
        reachDownRef.current = true
      }
    },
    [doLoadMore, isError, isTouchable, finished, offset],
  )

  useEffect(() => {
    if (immediateCheck && !finished && !reachDownRef.current) {
      check()
    }
  }, [immediateCheck, finished, check])

  useEffect(() => {
    setTimeout(() => {
      check()
    }, 500)
  })
  const placeholder = useRef<TaroElement>()

  const renderFinishedText = useCallback((): React.ReactNode => {
    if (finished) {
      const text = renderFinished ? renderFinished : finishedText
      if (text) {
        return <View className={listBem('finished-text')}>{text}</View>
      }
    }
    return null
  }, [finished, renderFinished, finishedText])

  // useEffect(() => {
  //   nextTick(() => {
  //     if (immediateCheck) {
  //       console.log('onmount')
  //       check()
  //     }
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const renderLoadingText = useCallback((): React.ReactNode => {
    if (!finished) {
      return (
        <View className={listBem('loading')}>
          {renderLoading ? (
            renderLoading
          ) : (
            <Loading className={listBem('loading-icon')}>
              {/* {loadingText || t('loading')} */}
              {loadingText}
            </Loading>
          )}
        </View>
      )
    }
    return null
  }, [finished, loadingText, renderLoading])

  const clickErrorText = useCallback(() => {
    setError(false)
    check(false)
  }, [check])

  const renderErrorText = useCallback((): React.ReactNode => {
    if (isError) {
      const text = renderError ? renderError : errorText
      if (text) {
        return (
          <View className={listBem('error-text')} onClick={clickErrorText}>
            {text}
          </View>
        )
      }
    }
    return null
  }, [clickErrorText, isError, errorText, renderError])
  // 如果不定高 一直下拉

  const ListScrollContent = useCallback(() => {
    if (isError) {
      return renderErrorText()
    }

    if (finished) {
      return renderFinishedText()
    }

    return renderLoadingText()
  }, [
    isError,
    finished,
    renderErrorText,
    renderFinishedText,
    renderLoadingText,
  ])

  return (
    <ScrollView
      ref={scrollRef}
      scrollY={scrollY}
      lowerThreshold={offset}
      onScrollToLower={doLoadMore}
      {...rest}
    >
      <View className={pullRefreshBem()}>
        <View
          className={pullRefreshBem('track')}
          style={trackStyle}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onTouchStart={onTouchStart}
        >
          <View className={pullRefreshBem('head')} style={getHeadStyle()}>
            {renderStatus()}
          </View>
          {children}
          <View ref={placeholder} className={listBem('placeholder')} />
          {ListScrollContent()}
        </View>
      </View>
    </ScrollView>
  )
}

export default PullRefresh
