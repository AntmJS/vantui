import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TagProps extends StandardProps {
  size?: string
  mark?: boolean
  color?: string
  plain?: boolean
  round?: boolean
  textColor?: string
  type?: string
  closeable?: boolean
  children?: ReactNode
  onClose?: (e: any) => void
}

declare const Tag: ComponentClass<TagProps>

export { Tag }
