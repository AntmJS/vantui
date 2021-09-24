import { isObj } from '../common/validator.js'
import { trigger } from './events'

function parseOptions(message: any) {
  return isObj(message) ? message : { message }
}

const createMethod = (type: string) => (options: any) =>
  Toast(Object.assign({ type }, parseOptions(options)))

const Toast = function (options: any) {
  trigger('show', options)
}

Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.clear = function (options: any = {}) {
  trigger('clear', options)
}
Toast.setDefaultOptions = (options: any) => {
  trigger('setDefaultOptions', options)
}
Toast.resetDefaultOptions = () => {
  trigger('resetDefaultOptions')
}

export default Toast
