import { FunctionComponent, ReactNode } from 'react'
import {
  StandardProps,
  ITouchEvent,
  CommonEventFunction,
} from '@tarojs/components'
import { TextareaProps } from '@tarojs/components/types/Textarea'

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
  type?: 'number' | 'text' | 'idcard' | 'digit' | 'textarea' | 'password'
  password?: boolean
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  confirmHold?: boolean
  autoHeight?: boolean
  fixed?: boolean
  showConfirmBar?: boolean
  disableDefaultPadding?: boolean
  size?: 'large'
  icon?: string
  /**
   * @description 输入框左侧占位元素
   */
  label?: ReactNode
  error?: boolean
  center?: boolean
  isLink?: boolean
  leftIcon?: string
  rightIcon?: string
  autosize?: boolean | Record<string, any>
  required?: boolean
  iconClass?: string
  clickable?: boolean
  inputAlign?: string
  style?: string
  errorMessage?: string
  arrowDirection?: 'left' | 'up' | 'down'
  showWordLimit?: boolean
  errorMessageAlign?: string
  alwaysEmbed?: boolean
  readonly?: boolean
  clearable?: boolean
  clearTrigger?: string
  border?: boolean
  titleWidth?: string
  clearIcon?: string
  renderLeftIcon?: ReactNode
  renderTitle?: ReactNode
  renderInput?: ReactNode
  renderRightIcon?: ReactNode
  renderIcon?: ReactNode
  renderButton?: ReactNode
  onInput?: (e: ITouchEvent) => void
  onChange?: (e: ITouchEvent) => void
  onConfirm?: (e: ITouchEvent) => void
  onClickIcon?: () => void
  onFocus?: (e: ITouchEvent) => void
  onBlur?: (e: ITouchEvent) => void
  onClear?: () => void
  onClickInput?: () => void
  onLineChange?: CommonEventFunction<TextareaProps.onLineChangeEventDetail>
  onKeyboardHeightChange?: CommonEventFunction<TextareaProps.onKeyboardHeightChangeEventDetail>
}

declare const Field: FunctionComponent<FieldProps>

export { Field }
