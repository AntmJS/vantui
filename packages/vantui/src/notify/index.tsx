import Taro from '@tarojs/taro'
import { useState, useEffect, useCallback } from 'react'
import { View, Text, ITouchEvent } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { NotifyProps } from '../../types/notify'
import VanTransition from '../transition/index'
import { getSystemInfoSync } from '../common/utils'
import * as computed from './wxs'
import { on, off, trigger } from './events'
import notify from './notify'

const defaultId = 'van-notify'
const defaultOptions = {
  selector: '#van-notify',
  message: '',
  background: '',
  type: 'danger',
  color: '#fff',
  duration: 3000,
  zIndex: 110,
  safeAreaInsetTop: false,
  top: 0,
  id: defaultId,
}
let timer: any = null
function parseOptions(message: any) {
  if (message == null) {
    return {}
  }
  return typeof message === 'string' ? { message } : message
}
export function Notify(props: NotifyProps) {
  const [state, setState] = useState({
    selector: '#van-notify',
    show: false,
    statusBarHeight: undefined,
    message: '',
    background: '',
    type: 'danger',
    color: '#fff',
    duration: 3000,
    zIndex: 110,
    safeAreaInsetTop: false,
    top: 0,
    id: defaultId,
    onClick: (_data: any) => {},
    onOpened: () => {},
    onClose: () => {},
  })

  const { style, className, ...others } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        id: props.id || defaultId,
      }
    })
  }, [props])

  useEffect(() => {
    const { statusBarHeight } = getSystemInfoSync()
    setState((state) => {
      return {
        ...state,
        statusBarHeight,
      }
    })
  }, [])

  useEffect(() => {
    on('notify_show', (notifyOptions) => {
      const options = Object.assign(
        Object.assign({}, defaultOptions),
        parseOptions(notifyOptions),
      )

      if (options.id === state.id || (!options.id && state.id === defaultId)) {
        setState((state) => {
          return {
            ...state,
            ...options,
          }
        })
        show(notifyOptions)
      }
    })

    on('notify_clear', (notifyOptions) => {
      hide(notifyOptions)
    })

    return () => {
      off('notify_show')
      off('notify_clear')
    }
    /* eslint-disable-next-line */
  }, [])

  const hide = useCallback((notifyOptions: any) => {
    clearTimeout(timer)
    setState((state) => {
      return {
        ...state,
        show: false,
      }
    })
    Taro.nextTick(() => {
      notifyOptions?.onClose?.()
    })
  }, [])
  const show = useCallback(
    (notifyOptions: any) => {
      clearTimeout(timer)
      setState((state) => {
        return {
          ...state,
          show: true,
        }
      })
      Taro.nextTick(() => {
        notifyOptions?.onOpened?.()
      })
      if (state.duration > 0 && state.duration !== Infinity) {
        timer = setTimeout(() => {
          // hide(notifyOptions)
          trigger('notify_clear', notifyOptions)
        }, state.duration)
      }
    },
    [state.duration],
  )
  const onTap = useCallback(
    (event: ITouchEvent) => {
      state.onClick?.(event)
    },
    [state],
  )

  return (
    <VanTransition
      name="slide-down"
      show={state.show}
      className={`van-notify__container ${className}`}
      style={utils.style([
        computed.rootStyle({
          zIndex: state.zIndex,
          top: state.top,
        }),
        style,
      ])}
      onClick={onTap}
      {...others}
    >
      <View
        className={'van-notify van-notify--' + state.type}
        style={computed.notifyStyle({
          background: state.background,
          color: state.color,
        })}
      >
        {state.safeAreaInsetTop && (
          <View style={'height: ' + state.statusBarHeight + 'px'}></View>
        )}
        <Text>{state.message}</Text>
      </View>
    </VanTransition>
  )
}

Notify.show = notify
Notify.clear = notify.clear

export default Notify
