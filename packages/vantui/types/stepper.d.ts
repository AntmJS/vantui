import { ComponentClass, ReactNode } from 'react'
import {
  StandardProps,
  CommonEventFunction,
  InputProps,
} from '@tarojs/components'

export interface StepperProps extends StandardProps {
  name?: string
  value?: string | number
  integer?: boolean
  disabled?: boolean
  inputWidth?: string | number
  buttonSize?: string | number
  asyncChange?: boolean
  disableInput?: boolean
  decimalLength?: number
  min?: string | number
  max?: string | number
  step?: string | number
  showPlus?: boolean
  showMinus?: boolean
  disablePlus?: boolean
  disableMinus?: boolean
  longPress?: boolean
  theme?: string
  onFocus?: (
    data: CommonEventFunction<InputProps.inputForceEventDetail>,
  ) => void
  onChange?: (data: string | number) => void
  onBlur?: (data: CommonEventFunction<InputProps.inputForceEventDetail>) => void
  onOverlimit?: (data: string) => void
  onPlus?: () => void
  onMinus?: () => void
  renderMinus?: ReactNode
  renderPlus?: ReactNode
}
// Partial
declare const Stepper: ComponentClass<StepperProps>

export { Stepper }
