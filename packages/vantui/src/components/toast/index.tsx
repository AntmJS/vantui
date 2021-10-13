import { View, Text } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import { ToastProps } from '../../../types/toast'
import VanTransition from '../transition/index'
import VanOverlay from '../overlay/index'
import VanIcon from '../icon/index'
import VanLoading from '../loading/index'
import { isObj } from '../common/validator.js'
import { on, off } from './events'
import Toast from './toast'

const defaultOptions = {
  show: true,
  zIndex: 1000,
  duration: 2000,
  mask: false,
  forbidClick: false,
  type: 'text',
  position: 'middle',
  message: '',
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
    duration: 2000,
    mask: false,
    forbidClick: false,
    type: 'text',
    position: 'middle',
    message: '',
    loadingType: 'circular' as any,
    selector: '#van-toast',
  })

  /* eslint-disable-next-line */
  const { style, className, children, ...others } = props

  useEffect(() => {
    /* eslint-disable-next-line */
    const { style, className, children, ...others } = props
    setState((state) => {
      return {
        ...state,
        ...others,
      }
    })
  }, [props])

  const noop = function () {}
  const clear = useCallback((toastOptions: any) => {
    setState((state) => {
      return {
        ...state,
        show: false,
      }
    })
    toastOptions?.onClose?.()
  }, [])

  useEffect(() => {
    on('show', (toastOptions) => {
      const action = () => {
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
      }

      action()
      // const selector = toastOptions.selector || defaultOptions.selector
      // if (process.env.TARO_ENV === 'h5') {
      //   if (document.querySelector(selector)) {
      //     action()
      //   }
      // } else {
      //   if (process.env.TARO_ENV === 'alipay') {
      //     action()
      //   } else {
      //     const query = Taro.createSelectorQuery()
      //     query.select(selector).node()
      //     query.exec((res) => {
      //       if (res?.[0]) {
      //         action()
      //       }
      //     })
      //   }
      // }
    })

    on('clear', (toastOptions) => {
      clear(toastOptions)
      // queue.forEach((toast: any) => {
      //   toast.clear()
      // })
      // queue = []
    })

    on('setDefaultOptions', (options: any) => {
      currentOptions = Object.assign(currentOptions, options)
    })

    on('resetDefaultOptions', () => {
      currentOptions = Object.assign({}, defaultOptions)
    })

    return () => {
      off('show')
      off('clear')
      off('setDefaultOptions')
      off('resetDefaultOptions')
    }
    /* eslint-disable-next-line */
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
          id="van-toast"
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
            <View className="van-toast__box">
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
            </View>
          )}
          {/*  with icon  */}
          {children}
        </View>
      </VanTransition>
    </View>
  )
}

Index.show = Toast
Index.loading = Toast.loading
Index.success = Toast.success
Index.fail = Toast.fail
Index.clear = Toast.clear
Index.setDefaultOptions = Toast.setDefaultOptions
Index.resetDefaultOptions = Toast.resetDefaultOptions
