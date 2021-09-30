import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface NoticeBarProps extends StandardProps {
  text?: string
  mode?: 'closeable' | 'link'
  url?: string
  openType?: any
  delay?: number
  speed?: number
  scrollable?: boolean
  leftIcon?: string
  color?: string
  backgroundColor?: string
  background?: string
  wrapable?: boolean
  children?: ReactNode
  renderLeftIcon?: ReactNode
  renderRightIcon?: ReactNode
  onClick?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

declare const NoticeBar: ComponentClass<NoticeBarProps>

export { NoticeBar }
