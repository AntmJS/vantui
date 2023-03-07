import { ToastProps, toastProps } from '../../types/toast'
import { Toast } from './index'

let idIndex = 1

export function createOnlyToast() {
  const id = `van-create-toast${idIndex++}`
  const Toast_ = function Modal(props: ToastProps) {
    return <Toast {...props} id={id} />
  }

  const actionNames: Array<keyof toastProps> = [
    'show',
    'loading',
    'success',
    'fail',
    'setDefaultOptions',
    'resetDefaultOptions',
    'createOnlyToast',
  ]

  for (let i = 0; i < actionNames.length; i++) {
    const actName = actionNames[i]
    if (actName) {
      Toast_[actName] = function (props) {
        let params: any = {}
        if (typeof props === 'string') {
          params = {
            message: props,
            selector: `#${id}`,
          }
        } else params = props
        Toast[actName](params)
      }
    }
  }

  return Toast_ as React.FunctionComponent<ToastProps> & toastProps
}
