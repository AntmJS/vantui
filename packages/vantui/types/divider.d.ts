import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface DividerProps extends StandardProps {
  dashed?: boolean
  hairline?: boolean
  contentPosition?: string
  fontSize?: string
  borderColor?: string
  textColor?: string
  customStyle?: string
  children?: ReactNode
}

declare const Divider: ComponentClass<DividerProps>

export { Divider }
