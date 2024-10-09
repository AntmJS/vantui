import { FunctionComponent } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

export interface RateProps extends ViewProps {
  /**
   * @description 当前分值
   */
  value?: number
  /**
   * @description 默认分值
   */
  defaultValue?: number
  /**
   * @description 是否只可读
   * @default false
   */
  readonly?: boolean
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @description 是否允许半选
   * @default false
   */
  allowHalf?: boolean
  /**
   * @description 图标大小，默认单位为px
   */
  size?: string | number
  /**
   * @description 自定义图标的classPrefix
   * @default van-icon
   */
  iconClassPrefix?: string
  /**
   * @description 选中图标
   * @default star
   */
  icon?: string
  /**
   * @description 未选中图标
   * @default star-o
   */
  voidIcon?: string
  /**
   * @description 选中颜色
   */
  color?: string
  /**
   * @description 未选颜色
   */
  voidColor?: string
  /**
   * @description 禁用颜色
   * @default #c8c9cc
   */
  disabledColor?: string
  /**
   * @description 总体数量
   * @default 5
   */
  count?: number
  /**
   * @description 图标间距，默认单位为 px
   */
  gutter?: string | number
  /**
   * @description 是否可以通过滑动手势选择评分
   * @default true
   */
  touchable?: boolean
  /**
   * @description 当前分值变化时触发的事件
   */
  onChange?: (e: ITouchEvent) => any
}

declare const Rate: FunctionComponent<RateProps>

export { Rate }
