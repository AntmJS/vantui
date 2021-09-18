import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Navigator } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { NoticeBarProps } from '../../../types/notice-bar'
import { getRect, requestAnimationFrame } from '../common/utils'
import VanIcon from '../icon/index'
import * as computed from './wxs'

let animation: any = null
let resetAnimation: any = null
let timer: any = null
let wrapWidth: any = undefined
let contentWidth: any = undefined
let duration: any = undefined

export default function Index(props: NoticeBarProps) {
  const [state, setState] = useState({
    show: true,
    animationData: { actions: [] },
  })

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
    resetAnimation = Taro.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    })
  })

  useEffect(() => {
    init()

    return () => {
      timer && clearTimeout(timer)
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
          wrapWidth = wrapRect.width
          contentWidth = contentRect.width
          duration = ((wrapRect.width + contentRect.width) / speed) * 1000
          animation = Taro.createAnimation({
            duration,
            timingFunction: 'linear',
            delay,
          })
          scroll()
        }
      })
    })
  }

  const scroll = function () {
    timer && clearTimeout(timer)
    timer = null
    setState((state) => {
      return {
        ...state,
        animationData: resetAnimation.translateX(wrapWidth).step().export(),
      }
    })
    requestAnimationFrame(() => {
      setState((state) => {
        return {
          ...state,
          animationData: animation.translateX(-contentWidth).step().export(),
        }
      })
    })
    timer = setTimeout(() => {
      scroll()
    }, duration)
  }

  const onClickIcon = function (event: any) {
    if (mode === 'closeable') {
      timer && clearTimeout(timer)
      timer = null
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
          ` ${className}`
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
