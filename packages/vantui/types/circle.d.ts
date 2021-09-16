import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CircleProps extends StandardProps {
  text?: string
  lineCap?: string
  value?: number
  speed?: number
  size?: number
  fill?: string
  layerColor?: string
  color?: string
  type?: string
  strokeWidth?: number
  clockwise?: boolean
}

declare const Circle: ComponentClass<CircleProps>

export { Circle }
