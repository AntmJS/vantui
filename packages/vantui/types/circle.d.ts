import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CircleProps extends StandardProps {
  text?: ReactNode
  lineCap?: string
  value?: number
  speed?: number
  size?: number
  fill?: string
  layerColor?: string
  color?: string | Record<string, string>
  type?: string
  strokeWidth?: number
  clockwise?: boolean
  children?: ReactNode
}

declare const Circle: FunctionComponent<CircleProps>

export { Circle }
