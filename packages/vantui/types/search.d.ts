import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SearchProps extends StandardProps {
  value?: string | number
  label?: string
  focus?: boolean
  error?: boolean
  disabled?: boolean
  readonly?: boolean
  inputAlign?: string
  showAction?: boolean
  useActionSlot?: boolean
  useLeftIconSlot?: boolean
  useRightIconSlot?: boolean
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
  renderLefticon?: ReactNode
  renderRighticon?: ReactNode
  renderAction?: ReactNode
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onChange?: (value?: string | number) => void
  onClear?: (e: any) => void
  onClickInput?: (e: any) => void
  onSearch?: (e: any) => void
  onCancel?: () => void
}

declare const Search: ComponentClass<SearchProps>

export { Search }
