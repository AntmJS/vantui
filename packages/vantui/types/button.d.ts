import { ComponentClass, ReactNode } from 'react'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'

export interface ButtonProps extends Omit<TaroButtonProps, 'size' | 'type'> {
  icon?: string
  classPrefix?: string
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger'
  size?: 'small' | 'normal' | 'large' | 'mini'
  block?: boolean
  round?: boolean
  square?: boolean
  loading?: boolean
  hairline?: boolean
  disabled?: boolean
  loadingText?: string
  loadingSize?: string
  style?: string
  loadingType?: 'spinner' | 'circular'
  color?: string
  children?: ReactNode
}

declare const Button: ComponentClass<ButtonProps>

export { Button }
