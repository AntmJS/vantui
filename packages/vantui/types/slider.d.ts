import React, { FunctionComponent } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

type SliderEvent = {
  detail: {
    value: number
  }
}
export interface SliderProps extends ViewProps {
  range?: boolean
  disabled?: boolean
  activeColor?: string
  inactiveColor?: string
  max?: number
  min?: number
  step?: number
  value?: number | number[]
  barHeight?: number | string
  vertical?: boolean
  onDrag?: (e: ITouchEvent & SliderEvent) => void
  onChange?: (e: ITouchEvent & SliderEvent) => void
  onDragStart?: () => void
  onDragEnd?: () => void
  renderButton?: React.ReactNode
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const Slider: FunctionComponent<SliderProps>

export { Slider }
