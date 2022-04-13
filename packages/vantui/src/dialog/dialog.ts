import { DialogProps } from '../../types/dialog'
import { on, off, trigger } from './events'
const _defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  overlay: true,
  className: '',
  asyncClose: false,
  transition: 'scale',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
}
export default {
  defaultOptions: { ..._defaultOptions },
  alert(options: DialogProps) {
    const p = new Promise((resolve: (value: 'confirm' | 'cancel') => void) => {
      const confirmFn = () => {
        off('confirm', confirmFn)
        resolve('confirm')
      }

      const cancelFn = () => {
        off('cancel', cancelFn)
        resolve('cancel')
      }
      on('confirm', confirmFn)
      on('cancel', cancelFn)
    })

    const innerOptions =
      options?.theme === 'round-button'
        ? {
            confirmButtonColor: '#FFFFFF',
            cancelButtonColor: '#FFFFFF',
          }
        : {}
    trigger('alert', {
      ...this.defaultOptions,
      ...options,
      ...innerOptions,
      show: true,
    })
    return p
  },
  confirm(options: DialogProps) {
    return this.alert({
      ...options,
      showCancelButton: true,
    })
  },
  close() {
    off('confirm')
    off('cancel')
    trigger('close')
  },
  stopLoading() {
    trigger('stopLoading')
  },
  setDefaultOptions(options: DialogProps) {
    ;(this as any).defaultOptions = {
      ...this.defaultOptions,
      ...options,
    }
  },
  resetDefaultOptions() {
    ;(this as any).defaultOptions = { ..._defaultOptions }
  },
}
