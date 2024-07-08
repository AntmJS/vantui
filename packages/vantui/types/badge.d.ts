import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface BadgeProps extends ViewProps {
  content?: ReactNode
  color?: string
  bordered?: boolean
  children?: ReactNode
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
  style?: React.CSSProperties
}
declare const Badge: FunctionComponent<BadgeProps>

export { Badge }
