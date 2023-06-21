import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ISignatureProps extends ViewProps {
  /**
   * @description 画布元素id
   * @default spcanvas
   */
  canvasId?: string
  /**
   * @description 获取图片的类型
   * @default `png`
   */
  type?: 'jpg' | 'png'
  /**
   * @description 线条的宽度
   * @default `3`
   */
  lineWidth?: number
  /**
   * @description 绘图颜色
   * @default `#000`
   */
  strokeStyle?: string
  /**
   * @description 样式名
   */
  className?: string
}
/**
 * @title 组件实例
 */
export type ISignatureInstance = {
  /**
   * @description 获取绘制生成的图片相关数据，tempFilePath在h5为base64，小程序为临时图片，由于canvasToTempFilePath在部分小程序IDE无法调试
   */
  getImage: () => Promise<{
    base64: string
    tempFilePath: string
    canvas: HTMLCanvasElement
  }>
  /**
   * @description 清除画布方法
   */
  clear: () => void
}

declare const Signature: FunctionComponent<ISignatureProps>

export { Signature }
