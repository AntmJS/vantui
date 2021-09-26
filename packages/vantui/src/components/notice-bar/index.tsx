import Taro from '@tarojs/taro'
import { useState, useEffect, useRef } from 'react'
import { View, Navigator } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { NoticeBarProps } from '../../../types/notice-bar'
import { getRect, requestAnimationFrame } from '../common/utils'
import VanIcon from '../icon/index'
import * as computed from './wxs'

export default function Index(props: NoticeBarProps) {
  const [state, setState] = useState({
    show: true,
    animationData: { actions: [] },
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
    color,
    backgroundColor,
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

  Taro.useReady(() => {
    ref.current.resetAnimation = Taro.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    })
  })

  useEffect(() => {
    init()

    return () => {
      ref.current.timer && clearTimeout(ref.current.timer)
    }
  }, [text, speed])

  const init = function () {
    requestAnimationFrame(() => {
      Promise.all([
        getRect(null, '.van-notice-bar__content'),
        getRect(null, '.van-notice-bar__wrap'),
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
        if (scrollable || wrapRect.width < contentRect.width) {
          ref.current.wrapWidth = wrapRect.width
          ref.current.contentWidth = contentRect.width
          ref.current.duration =
            ((wrapRect.width + contentRect.width) / speed) * 1000
          ref.current.animation = Taro.createAnimation({
            duration: ref.current.duration,
            timingFunction: 'linear',
            delay,
          })
          scroll()
        }
      })
    })
  }

  const scroll = function () {
    ref.current.timer && clearTimeout(ref.current.timer)
    ref.current.timer = null
    setState((state) => {
      return {
        ...state,
        animationData: ref.current.resetAnimation
          .translateX(ref.current.wrapWidth)
          .step()
          .export(),
      }
    })
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
    ref.current.timer = setTimeout(() => {
      scroll()
    }, ref.current.duration)
  }

  const onClickIcon = function (event: any) {
    if (mode === 'closeable') {
      ref.current.timer && clearTimeout(ref.current.timer)
      ref.current.timer = null
      setState((state) => {
        return {
          ...state,
          show: false,
        }
      })
      onClose?.(event.detail)
    }
  }

  return (
    state.show && (
      <View
        className={
          'custom-class ' +
          utils.bem('notice-bar', {
            withicon: mode,
            wrapable,
          }) +
          ` ${className || ''}`
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
            size={16}
            name={leftIcon}
            className="van-notice-bar__left-icon"
          ></VanIcon>
        ) : (
          renderLeftIcon
        )}
        <View className="van-notice-bar__wrap">
          <View
            className={
              'van-notice-bar__content ' +
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
