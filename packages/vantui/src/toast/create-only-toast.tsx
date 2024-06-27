import { ToastProps, toastProps } from '../../types/toast'

export function createOnlyToast(Toast) {
  return Toast as React.FunctionComponent<ToastProps> & toastProps
}
