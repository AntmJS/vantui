import { createAnimation, useReady, nextTick } from '@tarojs/taro'
import { useState, useEffect, useRef, useCallback } from 'react'
import { View, Navigator, ITouchEvent } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { NoticeBarProps } from '../../types/notice-bar'
import { getRect, requestAnimationFrame } from '../common/utils'
import VanIcon from '../icon/index'
import * as computed from './wxs'

let NOTICE_BAR_INDEX = 0

export function NoticeBar(props: NoticeBarProps) {
  const [state, setState] = useState({
    ready: false,
    show: true,
    animationData: { actions: [] },
    unitag: 0,
  })

  const params: any = {
    animation: null,
    resetAnimation: null,
    timer: null,
    wrapWidth: undefined,
    contentWidth: undefined,
    duration: undefined,
  }

  const ref = useRef(params)

  const {
    text = '',
    mode = '',
    url = '',
    openType = 'navigate',
    delay = 1,
    speed = 60,
    scrollable = null,
    leftIcon = '',
    color = '#ed6a0c',
    backgroundColor = '#fffbe8',
    background,
    wrapable,
    renderLeftIcon,
    renderRightIcon,
    onClick,
    onClose,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        unitag: NOTICE_BAR_INDEX++,
      }
    })
  }, [])

  useReady(() => {
    if (process.env.TARO_ENV !== 'h5') {
      ref.current.resetAnimation = createAnimation({
        duration: 0,
        timingFunction: 'linear',
      })

      setState((state) => {
        return {
          ...state,
          ready: true,
        }
      })
    }
  })
  useEffect(() => {
    ref.current.resetAnimation = createAnimation({
      duration: 0,
      timingFunction: 'linear',
    })

    setState((state) => {
      return {
        ...state,
        ready: true,
      }
    })
  }, [])

  useEffect(() => {
    if (text && state.ready) {
      init()
    }

    return () => {
      /* eslint-disable-next-line */
      ref.current.timer && clearTimeout(ref.current.timer)
    }
    /* eslint-disable-next-line */
  }, [text, speed, state.ready])

  const scroll = useCallback((isInit = false) => {
    ref.current.timer && clearTimeout(ref.current.timer)
    ref.current.timer = null
    setState((state) => {
      return {
        ...state,
        animationData: ref.current.resetAnimation
          .translateX(isInit ? 0 : ref.current.wrapWidth)
          .step()
          .export(),
      }
    })
    setTimeout(() => {
      requestAnimationFrame(() => {
        setState((state) => {
          return {
            ...state,
            animationData: ref.current.animation
              .translateX(-ref.current.contentWidth)
              .step()
              .export(),
          }
        })
      })
    }, 10)
    ref.current.timer = setTimeout(() => {
      scroll()
    }, ref.current.duration)
  }, [])

  const init = useCallback(() => {
    requestAnimationFrame(() => {
      Promise.all([
        getRect(null, `.van-notice-bar__content_${state.unitag}`),
        getRect(null, `.van-notice-bar__wrap_${state.unitag}`),
      ]).then((rects) => {
        const contentRect: any = rects[0]
        const wrapRect: any = rects[1]

        if (
          contentRect == null ||
          wrapRect == null ||
          !contentRect.width ||
          !wrapRect.width ||
          scrollable === false
        ) {
          return
        }
        nextTick(() => {
          if (scrollable || wrapRect.width <= contentRect.width) {
            ref.current.wrapWidth = wrapRect.width
            ref.current.contentWidth = contentRect.width
            ref.current.duration =
              ((wrapRect.width + contentRect.width) / speed) * 1000
            ref.current.animation = createAnimation({
              duration: ref.current.duration,
              timingFunction: 'linear',
              delay,
            })
            scroll(true)
          }
        })
      })
    })
  }, [state.unitag, scrollable, speed, delay, scroll])

  const onClickIcon = useCallback(
    (event: ITouchEvent) => {
      if (mode === 'closeable') {
        ref.current.timer && clearTimeout(ref.current.timer)
        ref.current.timer = null
        setState((state) => {
          return {
            ...state,
            show: false,
          }
        })
        onClose?.(event)
      }
    },
    [mode, onClose],
  )

  return (
    state.show && (
      <View
        className={
          utils.bem('notice-bar', {
            withicon: mode,
            wrapable,
          }) + ` ${className || ''}`
        }
        style={utils.style([
          computed.rootStyle({
            color,
            backgroundColor,
            background,
          }),
          style,
        ])}
        {...others}
        onClick={onClick}
      >
        {leftIcon ? (
          <VanIcon
            name={leftIcon}
            className="van-notice-bar__left-icon"
          ></VanIcon>
        ) : (
          renderLeftIcon
        )}
        <View
          className={`van-notice-bar__wrap van-notice-bar__wrap_${state.unitag}`}
        >
          <View
            className={
              `van-notice-bar__content van-notice-bar__content_${state.unitag} ` +
              (scrollable === false && !wrapable ? 'van-ellipsis' : '')
            }
            animation={state.animationData}
          >
            {text}
            {!text && children}
          </View>
        </View>
        {mode === 'closeable' ? (
          <VanIcon
            className="van-notice-bar__right-icon"
            name="cross"
            onClick={onClickIcon}
          />
        ) : mode === 'link' ? (
          <Navigator url={url} openType={openType}>
            <VanIcon className="van-notice-bar__right-icon" name="arrow" />
          </Navigator>
        ) : (
          renderRightIcon
        )}
      </View>
    )
  )
}
export default NoticeBar
