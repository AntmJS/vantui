import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface FieldProps extends StandardProps {
  // TESTCODE
  // ...commonProps,
  // ...inputProps,
  // ...textareaProps,
  size?: string
  icon?: string
  label?: string
  error?: boolean
  center?: boolean
  isLink?: boolean
  leftIcon?: string
  rightIcon?: string
  autosize?: null
  required?: boolean
  iconClass?: string
  clickable?: boolean
  inputAlign?: string
  customStyle?: string
  errorMessage?: string
  arrowDirection?: string
  showWordLimit?: boolean
  errorMessageAlign?: string
  readonly?: boolean
  clearable?: boolean
  clearTrigger?: string
  border?: boolean
  titleWidth?: string
  clearIcon?: string
}

declare const Field: ComponentClass<FieldProps>

export { Field }
