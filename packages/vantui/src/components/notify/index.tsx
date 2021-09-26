import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import * as utils from '../wxs/utils'
import { NotifyProps, IShowProps, INotifyRef } from '../../../types/notify'
import { WHITE } from '../common/color.js'
import { getSystemInfoSync } from '../common/utils.js'
import VanTransition from '../transition/index'
import * as computed from './wxs'

function Index(
  props: NotifyProps,
  ref: React.ForwardedRef<INotifyRef>,
): JSX.Element {
  const {
    className,
    style,
    zIndex = 10,
    color = WHITE,
    safeAreaInsetTop,
    duration = 3000,
    type = 'danger',
    background,
    top = 0,
    message,
    onOpened = () => {},
    onClose = () => {},
    onClick = () => {},
    ...others
  } = props

  const [show, setShow] = useState(false)
  const [propsState, setPropsState] = useState<IShowProps>({
    zIndex,
    color,
    safeAreaInsetTop,
    duration,
    type,
    background,
    top,
    message,
    onOpened,
    onClose,
  })
  const [statusBarHeight, setStatusBarHeight] = useState(0)
  const timer = useRef<any>()

  useEffect(
    function () {
      setPropsState({
        zIndex,
        color,
        safeAreaInsetTop,
        duration,
        type,
        background,
        top,
        message,
        onOpened,
        onClose,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props],
  )

  useEffect(function () {
    setStatusBarHeight(getSystemInfoSync().statusBarHeight)
  }, [])

  const hideAction = useCallback(
    function () {
      clearTimeout(timer.current)
      setPropsState({
        zIndex,
        color,
        safeAreaInsetTop,
        duration,
        type,
        background,
        top,
        message,
        onOpened,
        onClose,
      })
      setShow(false)
      if (onClose) Taro.nextTick(onClose)
    },
    [
      onClose,
      zIndex,
      color,
      safeAreaInsetTop,
      duration,
      type,
      background,
      top,
      message,
      onOpened,
    ],
  )

  const showAction = useCallback(
    function (options: IShowProps) {
      clearTimeout(timer.current)
      setPropsState({
        ...propsState,
        ...options,
      })
      setShow(true)
      if (onOpened) Taro.nextTick(onOpened)
      if (duration > 0 && duration !== Infinity) {
        timer.current = setTimeout(() => {
          hideAction()
        }, duration)
      }
    },
    [onOpened, duration, hideAction, propsState],
  )

  const onTap = useCallback(
    function (event) {
      if (onClick) {
        onClick(event.detail)
      }
    },
    [onClick],
  )

  useImperativeHandle(ref, function () {
    return {
      show: showAction,
      hide: hideAction,
    }
  })

  return (
    <VanTransition
      name="slide-down"
      show={show}
      className="van-notify__container"
      style={computed.rootStyle({
        zIndex: propsState.zIndex,
        top: propsState.top,
      })}
      onClick={onTap}
    >
      <View
        className={`van-notify van-notify--${propsState.type} ${className}`}
        {...others}
        style={utils.style([
          computed.notifyStyle({
            background: propsState.background,
            color: propsState.color,
          }),
          style,
        ])}
      >
        {propsState.safeAreaInsetTop && (
          <View style={'height: ' + statusBarHeight + 'px'}></View>
        )}
        <Text>{propsState.message}</Text>
      </View>
    </VanTransition>
  )
}

const IndexLast = forwardRef(Index)

export default IndexLast
