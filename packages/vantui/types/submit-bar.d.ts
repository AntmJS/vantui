import { FunctionComponent, ReactNode } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

export interface SubmitBarProps extends ViewProps {
  tip?: string
  tipIcon?: string
  price?: number
  label?: ReactNode
  loading?: boolean
  disabled?: boolean
  buttonText?: ReactNode
  currency?: string
  buttonType?: 'default' | 'primary' | 'info' | 'warning' | 'danger'
  decimalLength?: number
  suffixLabel?: string
  safeAreaInsetBottom?: boolean
  children?: ReactNode
  renderTop?: ReactNode
  renderTip?: ReactNode
  onSubmit?: (event: ITouchEvent) => void
}

declare const SubmitBar: FunctionComponent<SubmitBarProps>

export { SubmitBar }
