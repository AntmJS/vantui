import Taro from '@tarojs/taro'
import { isObj } from '../common/validator.js'
import { Toast as ToastConst } from '../common/zIndex'
const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: ToastConst,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast',
}
let queue: any = []
let currentOptions = Object.assign({}, defaultOptions)
function parseOptions(message: any) {
  return isObj(message) ? message : { message }
}
function getContext() {
  const pages = Taro.getCurrentPages()
  return pages[pages.length - 1]
}
function Toast(toastOptions: any) {
  const options = Object.assign(
    Object.assign({}, currentOptions),
    parseOptions(toastOptions),
  )
  const context = options.context || getContext()
  const toast = context.selectComponent(options.selector)
  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确')
    return
  }
  delete options.context
  delete options.selector
  toast.clear = () => {
    toast.setData({ show: false })
    if (options.onClose) {
      options.onClose()
    }
  }
  queue.push(toast)
  toast.setData(options)
  clearTimeout(toast.timer)
  if (options.duration != null && options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear()
      queue = queue.filter((item: any) => item !== toast)
    }, options.duration)
  }
  return toast
}
const createMethod = (type: any) => (options: any) =>
  Toast(Object.assign({ type }, parseOptions(options)))
Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.clear = () => {
  queue.forEach((toast: any) => {
    toast.clear()
  })
  queue = []
}
Toast.setDefaultOptions = (options: any) => {
  Object.assign(currentOptions, options)
}
Toast.resetDefaultOptions = () => {
  currentOptions = Object.assign({}, defaultOptions)
}
export default Toast
