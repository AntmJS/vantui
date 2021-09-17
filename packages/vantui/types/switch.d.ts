import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SwitchProps extends StandardProps {
  checked?: boolean
  loading?: boolean
  disabled?: boolean
  activeColor?: string
  inactiveColor?: string
  size?: string
  activeValue?: null
  inactiveValue?: null
  onChange?: (data: any) => any
}

declare const Switch: ComponentClass<SwitchProps>

export { Switch }
