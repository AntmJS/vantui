import Taro from '@tarojs/taro'
let queue: any[] = []
const defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  beforeClose: null,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
}
let currentOptions = Object.assign({}, defaultOptions)
function getContext() {
  const pages = Taro.getCurrentPages()
  return pages[pages.length - 1]
}
const Dialog = (options: any) => {
  options = Object.assign(Object.assign({}, currentOptions), options)
  return new Promise((resolve, reject) => {
    const context = options.context || getContext()
    const dialog = context.selectComponent(options.selector)
    delete options.context
    delete options.selector
    if (dialog) {
      dialog.setData(
        Object.assign(
          {
            callback: (action: any, instance: any) => {
              action === 'confirm' ? resolve(instance) : reject(instance)
            },
          },
          options,
        ),
      )
      Taro.nextTick(() => {
        dialog.setData({ show: true })
      })
      queue.push(dialog)
    } else {
      console.warn(
        '未找到 van-dialog 节点，请确认 selector 及 context 是否正确',
      )
    }
  })
}
Dialog.alert = (options: any) => Dialog(options)
Dialog.confirm = (options: any) =>
  Dialog(Object.assign({ showCancelButton: true }, options))
Dialog.close = () => {
  queue.forEach((dialog) => {
    dialog.close()
  })
  queue = []
}
Dialog.stopLoading = () => {
  queue.forEach((dialog) => {
    dialog.stopLoading()
  })
}
Dialog.currentOptions = currentOptions
Dialog.defaultOptions = defaultOptions
Dialog.setDefaultOptions = (options: any) => {
  currentOptions = Object.assign(Object.assign({}, currentOptions), options)
  Dialog.currentOptions = currentOptions
}
Dialog.resetDefaultOptions = () => {
  currentOptions = Object.assign({}, defaultOptions)
  Dialog.currentOptions = currentOptions
}
Dialog.resetDefaultOptions()
export default Dialog
