import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface CircleProps extends ViewProps {
  text?: ReactNode
  lineCap?: string
  value?: number
  speed?: number
  size?: number
  fill?: string
  layerColor?: string
  color?: string | Record<string, string>
  strokeWidth?: number
  clockwise?: boolean
  beginAngle?: number
  children?: ReactNode
}

declare const Circle: FunctionComponent<CircleProps>

export { Circle }
