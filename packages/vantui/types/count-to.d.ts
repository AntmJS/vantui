import type { ForwardRefRenderFunction } from 'react'
import { ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ICountToRef {
  /**
   * @description autoplay为false时，通过此方法启动滚动
   */
  start: () => void
  /**
   * @description 暂停滚动
   */
  pause: () => void
  /**
   * @description 暂停后重新开始滚动(从暂停前的值开始滚动)
   */
  resume: () => void
  /**
   * @description 重设至初始值
   */
  reset: () => void
}

export interface CountToProps extends ViewProps {
  /**
   * @description 滚动开始值
   * @default 0
   */
  startVal?: number
  /**
   * @description 滚动结束值
   * @default 0
   */
  endVal?: number
  /**
   * @description 滚动过程所需的时间，单位毫秒
   * @default 3000
   */
  duration?: number
  /**
   * @description 是否自动开始滚动
   * @default true
   */
  autoStart?: boolean
  /**
   * @description 要显示的小数位数
   * @default 0
   */
  decimals?: number | string
  /**
   * @description 十进制分隔
   * @default .
   */
  decimal?: string
  /**
   * @description 前缀
   */
  prefix?: string | ReactNode
  /**
   * @description 后缀
   */
  suffix?: string | ReactNode
  /**
   * @description 是否缓动结束滚动
   * @default true
   */
  useEasing?: boolean
  /**
   * @description 千分位分隔符
   */
  separator?: string
  /**
   * @description 滚动结束时触发
   */
  onFinish?: () => void
  /**
   * @description 数字滚动实例
   */
  ref?: React.MutableRefObject<ICountToRef | undefined>
}

declare const CountTo: ForwardRefRenderFunction<ICountToRef, CountToProps>

export { CountTo }
