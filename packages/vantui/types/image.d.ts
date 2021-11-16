import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

type ImageFit = 'contain' | 'cover' | 'fill' | 'widthFix' | 'heightFix' | 'none'

export interface ImageProps extends StandardProps {
  src: string
  round?: boolean
  width?: number
  height?: number
  radius?: number
  lazyLoad?: boolean
  showMenuByLongpress?: boolean
  fit?: ImageFit
  showError?: boolean
  showLoading?: boolean
  renderLoading?: ReactNode
  renderError?: ReactNode
}

declare const Image: ComponentClass<ImageProps>

export { Image }
