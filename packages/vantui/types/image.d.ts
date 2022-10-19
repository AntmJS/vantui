import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ImageProps extends ViewProps {
  /**
   * @description 	图片链接
   */
  src: string
  /**
   * @description 是否圆角
   * @default false
   */
  round?: boolean
  /**
   * @description 宽度，单位为px
   */
  width?: number | string
  /**
   * @description 高度，单位为px
   */
  height?: number | string
  /**
   * @description 圆角大小
   * @default 0
   */
  radius?: number | string
  /**
   * @description 是否懒加载
   * @default false
   */
  lazyLoad?: boolean
  /**
   * @description 是否开启长按图片显示识别小程序码菜单
   * @default false
   */
  showMenuByLongpress?: boolean
  /**
   * @description 图片填充模式
   * @default fill
   */
  fit?: 'contain' | 'cover' | 'fill' | 'widthFix' | 'heightFix' | 'none'
  /**
   * @description 是否展示图片加载失败提示
   * @default false
   */
  showError?: boolean
  /**
   * @description 是否使用 loading 状态
   * @default true
   */
  showLoading?: boolean
  /**
   * @description 渲染loading展示元素
   */
  renderLoading?: ReactNode
  /**
   * @description 渲染错误描述展示元素
   */
  renderError?: ReactNode
}

declare const Image: FunctionComponent<ImageProps>

export { Image }
