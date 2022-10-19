import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface DividerProps extends ViewProps {
  dashed?: boolean
  hairline?: boolean
  contentPosition?: 'left' | 'center' | 'right'
  fontSize?: string
  borderColor?: string
  textColor?: string
  children?: ReactNode
}

declare const Divider: FunctionComponent<DividerProps>

export { Divider }
