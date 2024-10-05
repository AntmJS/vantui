import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface BadgeProps extends ViewProps {
  /**
   * @description 徽标内容
   */
  content?: ReactNode
  /**
   * @description 颜色
   * @default #ff3141
   */
  color?: string
  /**
   * @description 是否显示边框
   * @default false
   */
  bordered?: boolean
  /**
   * @description
   */
  children?: ReactNode
  /**
   * @description 徽标根节点的className
   */
  wrapperClassName?: string
  /**
   * @description 徽标根节点的style
   */
  wrapperStyle?: React.CSSProperties
  /**
   * @description 徽标内容的style
   */
  style?: React.CSSProperties
}
declare const Badge: FunctionComponent<BadgeProps>

export { Badge }
