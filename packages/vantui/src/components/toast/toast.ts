import { isObj } from '../common/validator.js'
import { ToastProps } from '../../../types/toast'
import { trigger } from './events'

function parseOptions(message: ToastProps | string) {
  return isObj(message) ? message : { message: message as string }
}

const createMethod = (type: string) => (options: ToastProps | string) =>
  Toast(Object.assign({ type }, parseOptions(options)))

const Toast = function (options: ToastProps | string) {
  trigger('show', options)
}

Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.clear = function (options?: ToastProps) {
  trigger('clear', options)
}
Toast.setDefaultOptions = (options: ToastProps) => {
  trigger('setDefaultOptions', options)
}
Toast.resetDefaultOptions = () => {
  trigger('resetDefaultOptions')
}

export default Toast
