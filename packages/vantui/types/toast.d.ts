import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface ToastProps extends StandardProps {
  show?: boolean
  mask?: boolean
  message?: string
  forbidClick?: boolean
  zIndex?: number
  type?: string
  loadingType?: string
  position?: string
  children?: JSX.Element | JSX.Element[] | string
}

declare const Toast: ComponentClass<ToastProps>

export { Toast }
