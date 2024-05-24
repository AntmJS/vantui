import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface SpaceProps extends ViewProps {
  /**
   * @default 'horizontal'
   * @description 间距方向
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @default
   * @description 交叉轴对其方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline'
  /**
   * @default
   * @description 水平轴对其方式
   */
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  /**
   * @default false
   * @description 是否换行
   */
  wrap?: boolean
  /**
   * @default false
   * @description 是否渲染为块级元素
   */
  block?: boolean
  /**
   * @default
   * @description 间距设置，同时设置水平和垂直
   */
  gap?: number
  /**
   * @default
   * @description 垂直间距设置
   */
  gapVertical?: number
  /**
   * @default
   * @description 水平间距设置
   */
  gapHorizontal?: number
  children?: ReactNode
  style?: React.CSSProperties
}

// Partial
declare const Space: FunctionComponent<SpaceProps>

export { Space }
