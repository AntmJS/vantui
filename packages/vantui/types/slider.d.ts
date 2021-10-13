import React, { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

type SliderEvent = {
  detail: {
    value: number
  }
}
export interface SliderProps extends StandardProps {
  range?: boolean
  disabled?: boolean
  useButtonSlot?: boolean
  activeColor?: string
  inactiveColor?: string
  max?: number
  min?: number
  step?: number
  value?: number
  barHeight?: number | string
  vertical?: boolean
  onDrag?: (e: ITouchEvent & SliderEvent) => void
  onChange?: (e: ITouchEvent & SliderEvent) => void
  onDragStart?: () => void
  onDragEnd?: () => void
  renderLeftbutton?: (value: number) => React.ReactNode
  renderRightbutton?: (value: number) => React.ReactNode
  renderButton?: (value: number) => React.ReactNode
}

declare const Slider: ComponentClass<SliderProps>

export { Slider }
