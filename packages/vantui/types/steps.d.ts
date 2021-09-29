import { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

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
  direction?: 'horizontal' | 'vertical'
  activeColor?: string
  inactiveColor?: string
  activeIcon?: string
  inactiveIcon?: string
  onClickStep?: (event: ITouchEvent & { detail: number }) => void
}

declare const Steps: ComponentClass<StepsProps>

export { Steps }
