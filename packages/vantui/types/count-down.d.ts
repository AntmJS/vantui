import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface ICountDownRef {
  start: () => void
  pause: () => void
  reset: () => void
}

export interface CountDownProps extends StandardProps {
  useSlot?: boolean
  millisecond?: boolean
  time?: number
  format?: string
  autoStart?: boolean
  children?: ReactNode
  onChange?: (data: any) => void
  onFinish?: () => void
  cref?: React.MutableRefObject<ICountDownRef | undefined>
}

declare const CountDown: ComponentClass<CountDownProps>

export { CountDown }
