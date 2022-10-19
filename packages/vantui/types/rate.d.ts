import { FunctionComponent } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

export interface RateProps extends ViewProps {
  value?: number
  /**
   * @description 默认值
   */
  defaultValue?: number
  /**
   * @description 是否只可读
   */
  readonly?: boolean
  /**
   * @description 是否禁用
   */
  disabled?: boolean
  /**
   * @description 是否允许选择一般
   */
  allowHalf?: boolean
  size?: string | number
  /**
   * @description 自定义图标的classPrefix
   */
  iconClassPrefix?: string
  /**
   * @description 选中图标
   */
  icon?: string
  /**
   * @description 未选中图标
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
   */
  disabledColor?: string
  /**
   * @description 总体数量
   */
  count?: number
  /**
   * @description 图标间距，默认单位为 px
   */
  gutter?: string | number
  touchable?: boolean
  onChange?: (e: ITouchEvent) => any
}

declare const Rate: FunctionComponent<RateProps>

export { Rate }
