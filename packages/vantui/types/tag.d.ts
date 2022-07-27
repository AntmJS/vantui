import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TagProps extends StandardProps {
  size?: 'large' | 'medium'
  mark?: boolean
  color?: string
  plain?: boolean
  round?: boolean
  textColor?: string
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  closeable?: boolean
  children?: ReactNode
  onClose?: (e: any) => void
}

declare const Tag: FunctionComponent<TagProps>

export { Tag }
