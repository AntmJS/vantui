import { FunctionComponent, ReactNode } from 'react'
import { ButtonProps as TaroButtonProps, ITouchEvent } from '@tarojs/components'

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
  /**
   * @description loading的文案
   * @default 加载中
   */
  loadingText?: ReactNode
  loadingSize?: string
  loadingType?: 'spinner' | 'circular'
  /**
   * @description loading的模式，按钮内loading 或 Toast.loading
   * @default normal
   */
  loadingMode?: 'normal' | 'toast'
  /**
   * @description loading的蒙层,默认开启
   * @default true
   */
  loadingMask?: boolean
  color?: string
  children?: ReactNode
  onClick?: (event: ITouchEvent) => void | Promise<any>
}

declare const Button: FunctionComponent<ButtonProps>

export { Button }
