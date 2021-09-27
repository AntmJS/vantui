import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface RadioGroupProps extends StandardProps {
  value?: any
  direction?: 'vertical' | 'horizontal'
  disabled?: boolean
  children?: Array<ReactNode>
  onChange?: (data: any) => any
}

declare const RadioGroup: ComponentClass<RadioGroupProps>

export { RadioGroup }
