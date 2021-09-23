import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface StepperProps extends StandardProps {
  value?: number
  integer?: boolean
  disabled?: boolean
  inputWidth?: string
  buttonSize?: string
  asyncChange?: boolean
  disableInput?: boolean
  decimalLength?: number
  min?: number
  max?: number
  step?: number
  showPlus?: boolean
  showMinus?: boolean
  disablePlus?: boolean
  disableMinus?: boolean
  longPress?: boolean
  theme?: string
  onFocus?: (...arg: any[]) => any
  onChange?: (...arg: any[]) => any
  onBlur?: (...arg: any[]) => any
  onOverlimit?: (...arg: any[]) => any
  onPlus?: (...arg: any[]) => any
  onMinus?: (...arg: any[]) => any
  renderMinus?: ReactNode
  renderPlus?: ReactNode
}
// Partial
declare const Stepper: ComponentClass<StepperProps>

export { Stepper }
