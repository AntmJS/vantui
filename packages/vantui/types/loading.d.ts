import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'
export interface LoadingProps extends ViewProps {
  /**
   * @description 颜色
   * @default #c8c9cc
   */
  color?: string
  /**
   * @description 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean
  /**
   * @description 类型，可选值为 spinner
   * @default circular
   */
  type?: 'spinner' | 'circular'
  /**
   * @description 加载图标大小，默认单位为px
   * @default 30px
   */
  size?: string | number
  /**
   * @description 文字大小，默认单位为px
   * @default 14px
   */
  textSize?: string | number
  /**
   * @description 加载文案
   */
  children?: React.ReactNode
}

declare const Loading: FunctionComponent<LoadingProps>

export { Loading }
