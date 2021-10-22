import { ComponentClass, ReactNode } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

export interface SearchProps extends StandardProps {
  value?: string | number
  defaultValue?: string | number
  label?: string
  focus?: boolean
  error?: boolean
  disabled?: boolean
  readonly?: boolean
  inputAlign?: string
  showAction?: boolean
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  placeholderStyle?: string
  actionText?: string
  background?: string
  maxlength?: number
  shape?: string
  clearable?: boolean
  clearTrigger?: string
  clearIcon?: string
  renderLabel?: ReactNode
  renderLeftIcon?: ReactNode
  renderRightIcon?: ReactNode
  renderAction?: ReactNode
  onChange?: (e: ITouchEvent) => void
  onSearch?: (e: ITouchEvent) => void
  onFocus?: (e: ITouchEvent) => void
  onBlur?: (e: ITouchEvent) => void
  onClear?: () => void
  onCancel?: () => void
  onClickInput?: () => void
}

declare const Search: ComponentClass<SearchProps>

export { Search }
