import { ViewProps } from '@tarojs/components'

export interface ImageViewerProps extends ViewProps {
  /**
   * @description 展示的图片列表
   */
  list?: string[]
  /**
   * @description 初始化展示第几张图片
   * @default 0
   */
  currentIndex?: number
}

declare const ImageViewer: {
  show: (props: ImageViewerProps) => void
  close: () => void
}

export { ImageViewer }
