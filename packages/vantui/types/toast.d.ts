import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import toast from '../src/components/toast/toast'

export interface ToastProps extends StandardProps {
  show?: boolean
  mask?: boolean
  message?: string
  forbidClick?: boolean
  zIndex?: number
  type?: string
  loadingType?: 'circular' | 'spinner' | undefined
  selector?: string
  position?: string
  children?: ReactNode
}

// interface toastProps {
//   loading?: (option: any) => any
//   success?: (option: any) => any
//   fail?: (option: any) => any
//   clear?: () => void
//   setDefaultOptions?: (option: any) => void
//   resetDefaultOptions?: () => void
// }

declare const Toast: ComponentClass<ToastProps>

export { Toast, toast }
