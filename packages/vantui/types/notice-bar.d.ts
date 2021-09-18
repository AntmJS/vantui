import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface NoticeBarProps extends StandardProps {
  text?: string
  mode?: string
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
  renderLefticon?: () => any
  renderRighticon?: () => any
  onClick?: () => any
  onClose?: (data: any) => any
}

declare const NoticeBar: ComponentClass<NoticeBarProps>

export { NoticeBar }
