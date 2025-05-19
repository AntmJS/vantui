import { ToastProps } from '../../types/toast'
import { createOnlyToast } from './create-only-toast'
import {
  success,
  loading,
  fail,
  clear,
  show,
  setDefaultOptions,
  resetDefaultOptions,
} from './events'

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Toast(props: ToastProps) {
  return <></>
}

Toast.success = success
Toast.loading = loading
Toast.fail = fail
Toast.clear = clear
Toast.show = show
Toast.setDefaultOptions = setDefaultOptions
Toast.resetDefaultOptions = resetDefaultOptions
Toast.createOnlyToast = () => createOnlyToast(Toast)

export { Toast }

export default Toast
