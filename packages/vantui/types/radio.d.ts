import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface RadioProps extends ViewProps {
  /**
   * @description 标识符
   */
  name?: string | number
  /**
   * @description
   */
  value?: any
  /**
   * @description 	是否为禁用状态
   * @default false
   */
  disabled?: boolean
  /**
   * @description 选中状态颜色
   * @default #07c160
   */
  checkedColor?: string
  /**
   * @description 文本位置，可选值为 left
   * @default right
   */
  labelPosition?: string
  /**
   * @description 是否禁用文本内容点击
   * @default false
   */
  labelDisabled?: boolean
  /**
   * @description 形状，可选值为 square
   * @default round
   */
  shape?: 'round' | 'square'
  /**
   * @description 图标大小，默认单位为px
   * @default 20px
   */
  iconSize?: number | string
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

export interface RadioGroupProps extends ViewProps {
  /**
   * @description  当前选中项的标识符
   */
  value?: any
  /**
   * @description 单选框排列方向
   * @default vertical
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * @description 是否禁用所有单选框
   * @default false
   */
  disabled?: boolean
  children?: ReactNode
  /**
   * @description 当绑定值变化时触发的事件
   */
  onChange?: (event: ITouchEvent) => any
}

declare const RadioGroup: FunctionComponent<RadioGroupProps>

declare const Radio: FunctionComponent<RadioProps>

export { Radio, RadioGroup }
