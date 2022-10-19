import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface CheckboxProps extends ViewProps {
  name?: ReactNode
  value?: boolean
  disabled?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: 'round' | 'square'
  iconSize?: string | number
  children?: ReactNode
  renderIcon?: ReactNode
  onChange?: (event: ITouchEvent) => any
}

export interface CheckboxGroupProps extends ViewProps {
  max?: number
  value?: Array<any>
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  children?: ReactNode
  onChange?: (event: ITouchEvent) => any
}

declare const CheckboxGroup: FunctionComponent<CheckboxGroupProps>

declare const Checkbox: FunctionComponent<CheckboxProps>

export { Checkbox, CheckboxGroup }
