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
}

declare const Progress: FunctionComponent<ProgressProps>

export { Progress }
