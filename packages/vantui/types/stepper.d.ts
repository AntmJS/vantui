import { FunctionComponent, ReactNode } from 'react'
import { StandardProps, CommonEventFunction } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'

export interface StepperProps extends StandardProps {
  name?: ReactNode
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
  theme?: 'round'
  alwaysEmbed?: boolean
  onFocus?: CommonEventFunction<InputProps.inputForceEventDetail>
  onChange?: (event: { detail: number | string }) => void
  onBlur?: CommonEventFunction<InputProps.inputForceEventDetail>
  onOverlimit?: () => void
  onPlus?: () => void
  onMinus?: () => void
  renderMinus?: ReactNode
  renderPlus?: ReactNode
}
// Partial
declare const Stepper: FunctionComponent<StepperProps>

export { Stepper }
