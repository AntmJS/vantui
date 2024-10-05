import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface TagProps extends ViewProps {
  /**
   * @description 大小, 可选值为small
   */
  size?: 'large' | 'medium'
  /**
   * @description 是否为标记样式
   * @default false
   */
  mark?: boolean
  /**
   * @description 标签颜色
   */
  color?: string
  /**
   * @description 是否为空心样式
   * @default true
   */
  plain?: boolean
  /**
   * @description 是否为圆角样式
   * @default false
   */
  round?: boolean
  /**
   * @description 文本颜色，优先级高于color属性
   */
  textColor?: string
  /**
   * @description 类型，可选值为 'primary' | 'success' | 'danger' | 'warning'
   * @default default
   */
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning'
  /**
   * @description 是否为可关闭标签
   */
  closeable?: boolean
  /**
   * @description 标签内容
   */
  children?: ReactNode
  /**
   * @description 关闭标签时触发
   */
  onClose?: (e: any) => void
}

declare const Tag: FunctionComponent<TagProps>

export { Tag }
