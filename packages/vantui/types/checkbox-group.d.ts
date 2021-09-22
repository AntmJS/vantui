import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CheckboxGroupProps extends StandardProps {
  max?: number
  value?: Array<boolean>
  disabled?: boolean
  direction?: string
  children?: Array<ReactNode>
  onChange?: (data: any) => any
}

declare const CheckboxGroup: ComponentClass<CheckboxGroupProps>

export { CheckboxGroup }
