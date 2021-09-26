import { View, Text, Block } from '@tarojs/components'
import { useState, useEffect } from 'react'
import { ToastProps } from '../../../types/toast'
import VanTransition from '../transition/index'
import VanOverlay from '../overlay/index'
import VanIcon from '../icon/index'
import VanLoading from '../loading/index'
import { isObj } from '../common/validator.js'
import { on, off } from './events'

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast',
}
// let queue: any = []
let currentOptions = Object.assign({}, defaultOptions)
let timer: any = null
function parseOptions(message: any) {
  return isObj(message) ? message : { message }
}

export default function Index(props: ToastProps) {
  const [state, setState] = useState({
    show: false,
    zIndex: 1000,
    mask: false,
    forbidClick: false,
    type: 'text',
    position: 'middle',
    message: '',
    loadingType: 'circular' as any,
    selector: '#van-toast',
  })

  const {
    show = false,
    zIndex = 1000,
    mask = false,
    forbidClick = false,
    type = 'text',
    position = 'middle',
    message = '',
    loadingType = 'circular',
    selector = '#van-toast',
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        show,
        zIndex,
        mask,
        forbidClick,
        type,
        position,
        message,
        loadingType,
        selector,
      }
    })
  }, [props])

  const noop = function () {}
  const clear = function (toastOptions: any) {
    setState((state) => {
      return {
        ...state,
        show: false,
      }
    })
    toastOptions?.onClose?.()
  }

  useEffect(() => {
    on('show', (toastOptions) => {
      const options = Object.assign(
        Object.assign({}, currentOptions),
        parseOptions(toastOptions),
      )

      // queue.push(toastOptions)

      setState((state) => {
        return {
          ...state,
          ...options,
        }
      })

      clearTimeout(timer)
      if (options.duration != null && options.duration > 0) {
        timer = setTimeout(() => {
          clear(toastOptions)
          // queue = queue.filter((item: any) => item.sel !== toast)
        }, options.duration)
      }
    })

    return () => {
      off('show')
    }
  }, [])

  useEffect(() => {
    on('clear', (toastOptions) => {
      clear(toastOptions)
      // queue.forEach((toast: any) => {
      //   toast.clear()
      // })
      // queue = []
    })

    return () => {
      off('clear')
    }
  }, [])

  useEffect(() => {
    on('setDefaultOptions', (options: any) => {
      currentOptions = Object.assign(currentOptions, options)

      return () => {
        off('setDefaultOptions')
      }
    })
  }, [])

  useEffect(() => {
    on('resetDefaultOptions', () => {
      currentOptions = Object.assign({}, defaultOptions)

      return () => {
        off('resetDefaultOptions')
      }
    })
  }, [])

  return (
    <View>
      {(state.mask || state.forbidClick) && (
        <VanOverlay
          show={state.show}
          zIndex={state.zIndex}
          style={state.mask ? '' : 'background-color: transparent;'}
        ></VanOverlay>
      )}
      <VanTransition
        show={state.show}
        style={'z-index: ' + state.zIndex}
        className="van-toast__container"
      >
        <View
          className={
            'van-toast van-toast--' +
            (state.type === 'text' ? 'text' : 'icon') +
            ` van-toast--${state.position} ${className}`
          }
          style={style}
          onTouchMove={noop}
          {...others}
        >
          {state.type === 'text' ? (
            <Text>{state.message}</Text>
          ) : (
            <Block>
              {state.type === 'loading' ? (
                <VanLoading
                  color="white"
                  type={state.loadingType}
                  className="van-toast__loading"
                ></VanLoading>
              ) : (
                <VanIcon
                  className="van-toast__icon"
                  name={state.type}
                ></VanIcon>
              )}
              {state.message && (
                <Text className="van-toast__text">{state.message}</Text>
              )}
            </Block>
          )}
          {/*  with icon  */}
          {children}
        </View>
      </VanTransition>
    </View>
  )
}
