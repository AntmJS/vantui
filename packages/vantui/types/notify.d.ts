import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
import notify from '../src/notify/notify'

export interface NotifyProps extends ViewProps {
  selector?: string
  message?: ReactNode
  background?: string
  type?: string
  color?: string
  duration?: number
  zIndex?: number
  safeAreaInsetTop?: boolean
  top?: number
  id?: string
  onClick?: (data: any) => void
  onOpened?: () => void
  onClose?: () => void
}

interface notifyProps {
  show: (options: NotifyProps | string) => any
  clear: (options?: NotifyProps) => any
  /**
   * @description 创建唯一的Notify， 命令方式调用不需要设置id和selector
   */
  createOnlyNotify: () => FunctionComponent<NotifyProps> & notifyProps
}

declare const Notify: FunctionComponent<NotifyProps> & notifyProps

export { Notify, notify }
