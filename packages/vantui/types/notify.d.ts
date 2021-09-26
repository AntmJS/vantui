import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface INotifyRef {
  show: (options: IShowProps) => void
  hide: () => void
}

export interface IShowProps {
  message?: string
  background?: string
  type?: string // default danger
  color?: string // default White
  duration?: number // default 3000
  zIndex?: number // 10
  safeAreaInsetTop?: boolean // false
  top?: number
  onOpened?: () => void
  onClose?: () => void
}

export interface NotifyProps extends IShowProps, StandardProps {
  ref: React.ForwardedRef<INotifyRef>
}

declare const Notify: ComponentClass<NotifyProps>

export { Notify }
