import { useState, useEffect, useCallback } from 'react'
import { ToastProps } from '../../types/toast'
import VanTransition from '../transition/h5-index'
import VanOverlay from '../overlay/h5-index'
import VanIcon from '../icon/h5-index'
import VanLoading from '../loading/h5-index'
import { isObj } from '../common/validator'
import { on, off, trigger } from './h5-events'
import toast from './toast'

const defaultId = 'van-toast'
const defaultOptions = {
  show: true,
  duration: 2000,
  mask: false,
  forbidClick: false,
  type: 'span',
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
    type: 'span',
    position: 'middle',
    message: '',
    loadingType: 'circular' as any,
    selector: '#van-toast',
    id: defaultId,
  })

  /* eslint-disable-next-line */
  const { style, className, children, zIndex, ...others } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        id: props.id || defaultId,
      }
    })
  }, [props])

  const clear = useCallback((toastOptions: any) => {
    setState((state) => {
      return {
        ...state,
        show: false,
      }
    })
    toastOptions?.onClose?.()
  }, [])

  const tShowListener = useCallback((toastOptions) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tClearListener = useCallback((toastOptions) => {
    clear(toastOptions)
    // queue.forEach((toast: any) => {
    //   toast.clear()
    // })
    // queue = []
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
    <div>
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
        <div
          id="van-toast"
          className={
            'van-toast van-toast--' +
            (state.type === 'span' || state.type === 'html' ? 'span' : 'icon') +
            ` van-toast--${state.position} ${className}`
          }
          style={style as React.CSSProperties}
          {...(others as any)}
        >
          {state.type === 'span' ? (
            <span>{state.message}</span>
          ) : state.type === 'html' ? (
            <div dangerouslySetInnerHTML={{ __html: state.message }} />
          ) : (
            <div className="van-toast__box">
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
                <span className="van-toast__span">{state.message}</span>
              )}
            </div>
          )}
          {/*  with icon  */}
          {children}
        </div>
      </VanTransition>
    </div>
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
