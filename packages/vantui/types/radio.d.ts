import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface RadioProps extends StandardProps {
  name?: string
  value?: any
  disabled?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: 'round' | 'square'
  iconSize?: number | string
  children?: ReactNode
  renderIcon?: ReactNode
  onChange?: (event: ITouchEvent) => any
}

export interface RadioGroupProps extends StandardProps {
  value?: any
  direction?: 'vertical' | 'horizontal'
  disabled?: boolean
  children?: ReactNode
  onChange?: (event: ITouchEvent) => any
}

declare const RadioGroup: FunctionComponent<RadioGroupProps>

declare const Radio: FunctionComponent<RadioProps>

export { Radio, RadioGroup }
