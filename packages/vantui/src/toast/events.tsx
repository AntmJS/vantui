import _assign from 'lodash/assign'
import { ToastProps } from '../../types/toast'
import VanOverlay from '../overlay/index'
import { createExtraNode, ExtraNode } from '../wxs/extra-node'
import { Toast } from './toast'

const extraNode: ExtraNode = createExtraNode()
const overlayNode: ExtraNode = createExtraNode()
const defaultDuration = 2500
let timer: NodeJS.Timeout | null = null
let hasMask = false

const defaultToastOptions: ToastProps = {
  duration: 2500,
}

let _defaultOptions = { ...defaultToastOptions }

export function setDefaultOptions(options: ToastProps) {
  _assign(_defaultOptions, options)
}

export function resetDefaultOptions() {
  _defaultOptions = { ...defaultToastOptions }
}

export function show_(options: ToastProps) {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (!hasMask) {
    hasMask = true
    overlayNode.renderNode?.(
      <VanOverlay
        show
        zIndex={options.zIndex}
        style={options.mask ? '' : 'background-color: transparent;'}
      ></VanOverlay>,
    )
  }
  extraNode.renderNode?.(<Toast {...{ ..._defaultOptions, ...options }} />)
  if (options.duration !== 0) {
    timer = setTimeout(() => {
      clear()
      options?.onClose?.()
    }, options.duration || _defaultOptions?.duration || defaultDuration)
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
  hasMask = false
  extraNode.removeNode?.()
  overlayNode.removeNode?.()
}
