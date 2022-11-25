import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface WaterMarkProps extends ViewProps {
  /**
   * @description 水印之间的水平间距
   * @default `24`
   */
  gapX?: number
  /**
   * @description 水印之间的垂直间距
   * @default `48`
   */
  gapY?: number
  /**
   * @description 追加的水印元素的 z-index
   * @default `2000`
   */
  zIndex?: number
  /**
   * @description 水印的宽度
   * @default `120`
   */
  width?: number
  /**
   * @description 水印的高度
   * @default `64`
   */
  height?: number
  /**
   * @description 水印绘制时，旋转的角度，单位 °
   * @default `2000`
   */
  rotate?: number
  /**
   * @description 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印
   */
  image?: string
  /**
   * @description 图片宽度
   * @default `120`
   */
  imageWidth?: number
  /**
   * @description 图片高度
   * @default `64`
   */
  imageHeight?: number
  /**
   * @description 水印文字内容
   */
  content?: string
  /**
   * @description 字体颜色
   * @default `rgba(0,0,0,.15)`
   */
  fontColor?: string
  /**
   * @description 字体style
   * @default `normal`
   */
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  /**
   * @description 字体
   * @default `sans-serif`
   */
  fontFamily?: string
  /**
   * @description 字体粗细
   * @default `normal`
   */
  fontWeight?: 'normal' | 'light' | 'weight' | number
  /**
   * @description 字体大小
   * @default `14`
   */
  fontSize?: number | string
  /**
   * @description 是否沾满屏幕
   * @default true
   */
  fullPage?: boolean
}

declare const WaterMark: FunctionComponent<WaterMarkProps>

export { WaterMark }
