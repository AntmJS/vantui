import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface FieldProps extends StandardProps {
  value?: string | number
  placeholder?: string
  placeholderStyle?: string
  placeholderClass?: string
  disabled?: boolean
  maxlength?: number
  cursorSpacing?: number
  autoFocus?: boolean
  focus?: boolean
  cursor?: number
  selectionStart?: number
  selectionEnd?: number
  adjustPosition?: boolean
  holdKeyboard?: boolean
  type?: 'number' | 'text' | 'idcard' | 'digit' | 'textarea'
  password?: boolean
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  confirmHold?: boolean
  autoHeight?: boolean
  fixed?: boolean
  showConfirmBar?: boolean
  disableDefaultPadding?: boolean
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
  renderLefticon?: ReactNode
  renderTitle?: ReactNode
  renderInput?: ReactNode
  renderRighticon?: ReactNode
  renderIcon?: ReactNode
  renderButton?: ReactNode
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onClear?: (e: any) => void
  onConfirm?: (e: any) => void
  onChange?: (value?: string | number) => void
  onClickInput?: (e: any) => void
  onClickIcon?: (e: any) => void
  onLineChange?: (e: any) => void
  onKeyboardHeightChange?: (e: any) => void
}

declare const Field: ComponentClass<FieldProps>

export { Field }
