import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface NumberKeyboardProps extends ViewProps {
  /**
   * @description 是否展示
   */
  visible?: boolean
  /**
   * @description 键盘标题
   */
  title?: ReactNode
  /**
   * @description 完成按钮文案，null 不展示
   * @default null
   */
  confirmText?: ReactNode | null
  /**
   * @description  自定义按钮
   */
  customKey?: '-' | '.' | 'X'
  /**
   * @description 是否乱序键盘
   * @default false
   */
  randomOrder?: boolean
  /**
   * @description 是否展示收起键盘箭头
   * @default true
   */
  showCloseButton?: boolean
  /**
   * @description 输入内容回调
   * @default true
   */
  onInput?: (v: string) => void
  /**
   * @description 删除内容回调
   */
  onDelete?: () => void
  /**
   * @description 点击关闭时触发
   */
  onClose?: () => void
  /**
   * @description 点击确定按钮时触发
   */
  onConfirm?: () => void
  /**
   * @description 键盘完全收起回调
   */
  afterClose?: () => void
  /**
   * @description 是否在点击确定按钮时自动关闭
   * @default true
   */
  closeOnConfirm?: boolean
}

declare const NumberKeyboard: FunctionComponent<NumberKeyboardProps>

export { NumberKeyboard }
