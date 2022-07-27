import { FunctionComponent, ReactNode } from 'react'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'

export interface ButtonProps extends Omit<TaroButtonProps, 'size' | 'type'> {
  /**
   * @description 传入Icon的name值
   */
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
  loadingText?: ReactNode
  loadingSize?: string
  loadingType?: 'spinner' | 'circular'
  color?: string
  children?: ReactNode
}

declare const Button: FunctionComponent<ButtonProps>

export { Button }
