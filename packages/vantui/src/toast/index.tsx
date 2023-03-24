import { View, Text, RichText } from '@tarojs/components'
import { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import { ToastProps } from '../../types/toast'
import VanTransition from '../transition/index'
import VanOverlay from '../overlay/index'
import VanIcon from '../icon/index'
import VanLoading from '../loading/index'
import { isObj } from '../common/validator'
import { on, off, trigger } from './events'
import { createOnlyToast } from './create-only-toast'
import toast from './toast'

const defaultId = 'van-toast'
const defaultOptions = {
  show: true,
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
  const { style, className, children, zIndex, ...others } = props

  const _id = props.id || defaultId

  useLayoutEffect(() => {
    setState((state) => {
      return {
        ...state,
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

  const tShowListener = (toastOptions) => {
    const options = Object.assign(
      Object.assign({}, currentOptions),
      parseOptions(toastOptions),
    )

    if (
      options.selector === '#van-toast' ||
      options.selector.replace('#', '') === _id
    ) {
      toast.clear()
      setState((state) => {
        return {
          ...state,
          ...options,
        }
      })

      clearTimeout(timer)
      if (options.duration != null && options.duration > 0) {
        timer = setTimeout(() => {
          trigger('toast_clear', toastOptions)
        }, options.duration)
      }
    }
  }

  const tClearListener = useCallback((toastOptions) => {
    clear(toastOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tSetDftOptsListener = useCallback((options: any) => {
    currentOptions = Object.assign(currentOptions, options)
  }, [])

  const tResetDftOptsListener = useCallback(() => {
    currentOptions = Object.assign({}, defaultOptions)
  }, [])

  useEffect(() => {
    on('toast_show', tShowListener)

    on('toast_clear', tClearListener)

    on('toast_setDefaultOptions', tSetDftOptsListener)

    on('toast_resetDefaultOptions', tResetDftOptsListener)

    return () => {
      off('toast_show', tShowListener)
      off('toast_clear', tClearListener)
      off('toast_setDefaultOptions', tSetDftOptsListener)
      off('toast_resetDefaultOptions', tResetDftOptsListener)
    }
    /* eslint-disable-next-line */
  }, [])

  return (
    <View>
      {(state.mask || state.forbidClick) && (
        <VanOverlay
          show={state.show}
          zIndex={zIndex}
          style={state.mask ? '' : 'background-color: transparent;'}
        ></VanOverlay>
      )}
      <VanTransition
        show={state.show}
        style={zIndex ? { zIndex: zIndex } : {}}
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
Toast.createOnlyToast = () => createOnlyToast(Toast)

export default Toast
