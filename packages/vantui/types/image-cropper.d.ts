import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ImageCropperProps extends ViewProps {
  image: string
  /**
   * @description 截图操作获取新图
   */
  onCropper?: (filePath: string) => void
  /**
   * @description 宽高比，默认2/1
   * @default 2/1
   */
  scale?: number
  /**
   * @description 是否允许缩放截图框
   * @default true
   */
  allowScale?: boolean
  /**
   * @description 是否强制固定宽高的比例
   * @default false
   */
  fixScale?: boolean
}

declare const ImageCropper: FunctionComponent<ImageCropperProps>

export { ImageCropper }
