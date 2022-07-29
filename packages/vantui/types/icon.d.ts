import { FunctionComponent, CSSProperties } from 'react'
import { StandardProps } from '@tarojs/components'
/**
 * @description Icon Props
 */
export interface IconProps extends StandardProps {
  /**
   * @description 是否显示图标右上角小红点
   */
  dot?: boolean
  /**
   * @description 图标右上角文字提示
   * @default false
   */
  info?: number | string
  /**
   * @description 图标大小，如 20px，单位为px
   */
  size?: number | string
  /**
   * @description 图标颜色
   */
  color?: string
  /**
   * @description 自定义样式
   */
  style?: string | CSSProperties
  /**
   * @description 类名前缀
   * @default vant-icon
   */
  classPrefix?: string
  /**
   * @description 图标名称或图片链接
   */
  name?: string
}

declare const Icon: FunctionComponent<IconProps>

export { Icon }
