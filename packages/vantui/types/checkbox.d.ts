import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface CheckboxProps extends ViewProps {
  /**
   * @description 标识符
   */
  name?: ReactNode
  /**
   * @description 是否为选中状态
   * @default false
   */
  value?: boolean
  /**
   * @description 是否禁用复选框
   * @default false
   */
  disabled?: boolean
  /**
   * @description 选中状态颜色
   * @default #07c160
   */
  checkedColor?: string
  /**
   * @description 文本位置
   * @default right
   */
  labelPosition?: string
  /**
   * @description 是否禁用复选框文本点击
   * @default false
   */
  labelDisabled?: boolean
  /**
   * @description 形状，可选值为 square
   * @default round
   */
  shape?: 'round' | 'square'
  /**
   * @description 	图标大小，默认单位为px
   * @default 20px
   */
  iconSize?: string | number
  /**
   * @description
   */
  children?: ReactNode
  /**
   * @description 自定义图标
   */
  renderIcon?: ReactNode
  /**
   * @description 当绑定值变化时触发的事件
   */
  onChange?: (event: ITouchEvent) => any
}

export interface CheckboxGroupProps extends ViewProps {
  /**
   * @description 	最大可选数，0 为无限制
   * @default 0
   */
  max?: number
  /**
   * @description 所有选中项的标识符
   */
  value?: Array<any>
  /**
   * @description 是否禁用所有复选框
   * @default false
   */
  disabled?: boolean
  /**
   * @description 复选框排列方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description
   */
  children?: ReactNode
  /**
   * @description 当绑定值变化时触发的事件
   */
  onChange?: (event: ITouchEvent) => any
}

declare const CheckboxGroup: FunctionComponent<CheckboxGroupProps>

declare const Checkbox: FunctionComponent<CheckboxProps>

export { Checkbox, CheckboxGroup }
