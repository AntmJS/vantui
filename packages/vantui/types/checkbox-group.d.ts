import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface CheckboxGroupProps extends StandardProps {
  max?: number
  value?: Array<any>
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  children?: Array<ReactNode>
  onChange?: (event: ITouchEvent) => any
}

declare const CheckboxGroup: ComponentClass<CheckboxGroupProps>

export { CheckboxGroup }
