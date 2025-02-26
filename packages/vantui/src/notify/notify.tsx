import { useState, useEffect, useCallback } from 'react'
import { View, Text, ITouchEvent } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import * as utils from '../wxs/utils'
import { NotifyProps } from '../../types/notify'
import VanTransition from '../transition/index'
import { getSystemInfoSync } from '../common/utils'
import { get } from '../default-props'
import * as computed from './wxs'

const defaultId = 'van-notify'
const defaultOptions = {
  selector: '#van-notify',
  message: '',
  background: '',
  type: 'danger',
  color: '#fff',
  duration: 3000,
  safeAreaInsetTop: false,
  top: 0,
  id: defaultId,
}
export function Notify(props: NotifyProps) {
  const [d] = useState(get().Notify)
  const [state, setState] = useState({
    selector: '#van-notify',
    show: false,
    statusBarHeight: undefined,
    message: '',
    background: '',
    type: 'danger',
    color: '#fff',
    safeAreaInsetTop: false,
    top: 0,
    id: defaultId,
    onClick: (_data: any) => {},
    onOpened: () => {},
    onClose: () => {},
  })

  const {
    style,
    className,
    zIndex,
    message = '',
    background = '',
    type = 'danger',
    color = '#fff',
    safeAreaInsetTop = false,
    top = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    duration,
    ...others
  } = {
    ...defaultOptions,
    ...d,
    ...props,
  }

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        id: props.id || defaultId,
      }
    })
  }, [props])

  useEffect(() => {
    nextTick(() => {
      const { statusBarHeight } = getSystemInfoSync()
      setState((state) => {
        return {
          ...state,
          statusBarHeight,
        }
      })
    })
  }, [])

  const onTap = useCallback(
    (event: ITouchEvent) => {
      state.onClick?.(event)
    },
    [state],
  )

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        show: true,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <VanTransition
      name="slide-down"
      show={state.show}
      className={`van-notify__container ${className}`}
      style={utils.style([
        computed.rootStyle(
          zIndex
            ? {
                zIndex: zIndex,
                top: top,
              }
            : { top: top },
        ),
        style,
      ])}
      onClick={onTap}
      {...others}
    >
      <View
        className={'van-notify van-notify--' + type}
        style={computed.notifyStyle({
          background: background,
          color: color,
        })}
      >
        {safeAreaInsetTop && (
          <View style={'height: ' + state.statusBarHeight + 'px'}></View>
        )}
        <Text>{message}</Text>
      </View>
    </VanTransition>
  )
}

export default Notify
