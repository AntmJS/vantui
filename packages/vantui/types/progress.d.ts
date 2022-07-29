import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface ProgressProps extends StandardProps {
  inactive?: boolean
  percentage: number
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
