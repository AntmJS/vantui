import { ToastProps } from '../../types/toast'
import { createExtraNode, ExtraNode } from '../wxs/extra-node'
import { Toast } from './toast'

const extraNode: ExtraNode = createExtraNode()
const defaultDuration = 2500
let timer: NodeJS.Timeout | null = null

export function show_(options: ToastProps) {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }

  extraNode.renderNode?.(<Toast {...options} />)

  if (options.duration !== 0) {
    timer = setTimeout(() => {
      clear()
      options?.onClose?.()
    }, options.duration || defaultDuration)
  }
}

export function createAction(params = {}) {
  return (options_: ToastProps | string) => {
    let options: ToastProps = { ...params }
    if (options_ && typeof options_ === 'string') {
      options.message = options_
    } else if (typeof options_ === 'object') {
      options = {
        ...options,
        ...options_,
      }
    }
    show_(options)
  }
}

export const show = createAction({})
export const success = createAction({ type: 'success' })
export const fail = createAction({ type: 'fail' })
export const loading = createAction({ type: 'loading', duration: 0 })

export function clear() {
  extraNode.removeNode?.()
}
