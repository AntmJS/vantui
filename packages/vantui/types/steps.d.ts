import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface StepsProps extends StandardProps {
  icon?: string
  steps?: {
    index?: number
    desc: string
    text: string
    activeIcon?: string
    inactiveIcon?: string
  }[]
  active?: number
  direction?: string
  activeColor?: string
  inactiveColor?: string
  activeIcon?: string
  inactiveIcon?: string
  onClickStep?: (data: number) => void
}

declare const Steps: ComponentClass<StepsProps>

export { Steps }
