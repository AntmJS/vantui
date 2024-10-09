import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface CircleProps extends ViewProps {
  /**
   * @description 文字
   */
  text?: ReactNode
  /**
   * @description
   */
  lineCap?: string
  /**
   * @description 当前进度
   * @default 0
   */
  value?: number
  /**
   * @description 动画速度（单位为 rate/s）
   * @default 50
   */
  speed?: number
  /**
   * @description 圆环直径，默认单位为 px
   * @default 100
   */
  size?: number
  /**
   * @description 填充颜色
   */
  fill?: string
  /**
   * @description 轨道颜色
   * @default #ffffff
   */
  layerColor?: string
  /**
   * @description 进度条颜色，传入对象格式可以定义渐变色
   * @default #1989fa
   */
  color?: string | Record<string, string>
  /**
   * @description 进度条宽度
   * @default 4
   */
  strokeWidth?: number
  /**
   * @description 	是否顺时针增加
   * @default true
   */
  clockwise?: boolean
  /**
   * @description
   */
  beginAngle?: number
  /**
   * @description 进度条中心内容 优先级低于text
   */
  children?: ReactNode
}

declare const Circle: FunctionComponent<CircleProps>

export { Circle }
