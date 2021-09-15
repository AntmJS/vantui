import { ComponentClass } from 'react'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'

export interface ButtonProps extends Omit<TaroButtonProps, 'size' | 'type'> {
  icon?: string
  classPrefix?: string
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger'
  size?: 'small' | 'normal' | 'around' | 'full'
  block?: boolean
  round?: boolean
  square?: boolean
  loading?: boolean
  hairline?: boolean
  disabled?: boolean
  loadingText?: string
  loadingSize?: string
  customStyle?: string
  loadingType?: string
  dataset?: any
  color?: string
  children: JSX.Element | string | JSX.Element[]
}

declare const Button: ComponentClass<ButtonProps>

export { Button }
