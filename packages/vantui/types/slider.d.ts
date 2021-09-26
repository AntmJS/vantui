import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

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
  barHeight?: number
  onDrag?: (a: any) => void
  onChange?: (a: any) => void
  onDragStart?: () => void
  onDragEnd?: () => void
  renderLeftbutton?: React.ReactNode
  renderRightbutton?: React.ReactNode
  renderButton?: React.ReactNode
}

declare const Slider: ComponentClass<SliderProps>

export { Slider }
