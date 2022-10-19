import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface MiniNavBarProps extends ViewProps {
  homeUrl: string
  buttonColor?: 'white' | 'black'
  title?: string
  fixed?: boolean
  placeholder?: boolean
  style?: string
  border?: boolean
  zIndex?: number
  renderTitle?: ReactNode
}

declare const MiniNavBar: FunctionComponent<MiniNavBarProps>

export { MiniNavBar }
