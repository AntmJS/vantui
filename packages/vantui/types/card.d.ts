import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image.d'

export interface CardProps extends StandardProps {
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
  thumbMode?: keyof ImageProps.mode
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

declare const Card: ComponentClass<CardProps>

export { Card }
