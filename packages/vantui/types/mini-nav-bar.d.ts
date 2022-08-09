import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface MiniNavBarProps extends StandardProps {
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
