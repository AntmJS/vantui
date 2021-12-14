import { View, Text, RichText } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import { ToastProps } from '../../types/toast'
import VanTransition from '../transition/index'
import VanOverlay from '../overlay/index'
import VanIcon from '../icon/index'
import VanLoading from '../loading/index'
import { isObj } from '../common/validator'
import { on, off, trigger } from './events'
import toast from './toast'

const defaultId = 'van-toast'
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
  id: defaultId,
}
// let queue: any = []
let currentOptions = Object.assign({}, defaultOptions)
let timer: any = null
function parseOptions(message: any) {
  return isObj(message) ? message : { message }
}

export function Toast(props: ToastProps) {
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
    id: defaultId,
  })

  /* eslint-disable-next-line */
  const { style, className, children, ...others } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        id: props.id || defaultId,
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
    on('toast_show', (toastOptions) => {
      const options = Object.assign(
        Object.assign({}, currentOptions),
        parseOptions(toastOptions),
      )

      if (options.id === state.id || (!options.id && state.id === defaultId)) {
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
            // clear(toastOptions)
            trigger('toast_clear', toastOptions)
            // queue = queue.filter((item: any) => item.sel !== toast)
          }, options.duration)
        }
      }
    })

    on('toast_clear', (toastOptions) => {
      clear(toastOptions)
      // queue.forEach((toast: any) => {
      //   toast.clear()
      // })
      // queue = []
    })

    on('toast_setDefaultOptions', (options: any) => {
      currentOptions = Object.assign(currentOptions, options)
    })

    on('toast_resetDefaultOptions', () => {
      currentOptions = Object.assign({}, defaultOptions)
    })

    return () => {
      off('toast_show')
      off('toast_clear')
      off('toast_setDefaultOptions')
      off('toast_resetDefaultOptions')
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
            (state.type === 'text' || state.type === 'html' ? 'text' : 'icon') +
            ` van-toast--${state.position} ${className}`
          }
          style={style}
          onTouchMove={noop}
          {...others}
        >
          {state.type === 'text' ? (
            <Text>{state.message}</Text>
          ) : state.type === 'html' ? (
            <RichText nodes={state.message} />
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

Toast.show = toast
Toast.loading = toast.loading
Toast.success = toast.success
Toast.fail = toast.fail
Toast.clear = toast.clear
Toast.setDefaultOptions = toast.setDefaultOptions
Toast.resetDefaultOptions = toast.resetDefaultOptions
export default Toast
