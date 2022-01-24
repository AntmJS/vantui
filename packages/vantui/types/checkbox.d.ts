import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface CheckboxProps extends StandardProps {
  name?: string
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

export interface CheckboxGroupProps extends StandardProps {
  max?: number
  value?: Array<any>
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  children?: Array<ReactNode>
  onChange?: (event: ITouchEvent) => any
}

declare const CheckboxGroup: ComponentClass<CheckboxGroupProps>

declare const Checkbox: ComponentClass<CheckboxProps>

export { Checkbox, CheckboxGroup }
