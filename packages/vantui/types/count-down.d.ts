import type { ForwardRefRenderFunction } from 'react'
import { ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ICountDownRef {
  /**
   * @description 开始倒计时
   */
  start: () => void
  /**
   * @description 暂停倒计时
   */
  pause: () => void
  /**
   * @description 重设倒计时，若autoStart为true，重设后会自动开始倒计时
   */
  reset: () => void
}

export interface ITimeData {
  /**
   * @description 剩余天数
   */
  days: number
  /**
   * @description 剩余小时
   */
  hours: number
  /**
   * @description 剩余分钟
   */
  minutes: number
  /**
   * @description 剩余秒数
   */
  seconds: number
  /**
   * @description 	剩余毫秒
   */
  milliseconds: number
}

export interface CountDownProps extends ViewProps {
  /**
   * @description 是否开启毫秒级渲染
   * @default false
   */
  millisecond?: boolean
  /**
   * @description 倒计时时长，单位毫秒
   */
  time?: number
  /**
   * @description 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
   * @default HH：mm：ss
   */
  format?: string
  /**
   * @description 是否自动开始倒计时
   * @default true
   */
  autoStart?: boolean
  /**
   * @description 倒计时的内容
   */
  children?: ReactNode
  onChange?: (timeData: { detail: ITimeData }) => void
  /**
   * @description 倒计时结束时触发
   */
  onFinish?: () => void
  /**
   * @description 倒计时实例
   */
  ref?: React.MutableRefObject<ICountDownRef | undefined>
}

declare const CountDown: ForwardRefRenderFunction<ICountDownRef, CountDownProps>

export { CountDown }
