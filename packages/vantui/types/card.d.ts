import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image.d'

export interface CardProps extends ViewProps {
  tag?: string
  num?: string
  desc?: string
  thumb?: string
  title?: string
  price: string
  centered?: boolean
  lazyLoad?: boolean
  thumbLink?: string
  originPrice?: string
  thumbMode?: keyof ImageProps.Mode
  currency?: string
  renderFooter?: ReactNode
  renderBottom?: ReactNode
  renderNum?: ReactNode
  renderOriginPrice?: ReactNode
  renderPrice?: ReactNode
  renderPriceTop?: ReactNode
  renderTags?: ReactNode
  renderDesc?: ReactNode
  renderTitle?: ReactNode
  renderTag?: ReactNode
  renderThumb?: ReactNode
}

declare const Card: FunctionComponent<CardProps>

export { Card }
