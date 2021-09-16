import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface RadioGroupProps extends StandardProps {
  value?: any
  direction?: string
  disabled?: boolean
  children?: JSX.Element | JSX.Element[] | string | any
  onChange?: (data: any) => any
}

declare const RadioGroup: ComponentClass<RadioGroupProps>

export { RadioGroup }
