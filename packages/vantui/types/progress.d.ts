import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ProgressProps extends ViewProps {
  inactive?: boolean
  percentage: number | string
  pivotText?: ReactNode
  pivotColor?: string
  trackColor?: string
  showPivot?: boolean
  color?: string
  textColor?: string
  strokeWidth?: number | string
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const Progress: FunctionComponent<ProgressProps>

export { Progress }
