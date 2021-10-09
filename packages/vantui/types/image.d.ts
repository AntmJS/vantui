import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

type ImageFit = 'contain' | 'cover' | 'fill' | 'widthFix' | 'heightFix' | 'none'

export interface ImageProps extends StandardProps {
  src: string
  round?: boolean
  width?: number
  height?: number
  radius?: number
  lazyLoad?: boolean
  useErrorSlot?: boolean
  useLoadingSlot?: boolean
  showMenuByLongpress?: boolean
  fit?: ImageFit
  showError?: boolean
  showLoading?: boolean
  renderLoading?: boolean
  renderError?: boolean
}

declare const Image: ComponentClass<ImageProps>

export { Image }
