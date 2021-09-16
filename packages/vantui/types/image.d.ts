import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

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
  fit?: string
  showError?: boolean
  showLoading?: boolean
  renderLoading?: boolean
  renderError?: boolean
}

declare const Image: ComponentClass<ImageProps>

export { Image }
