import { FunctionComponent } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

export interface StepsProps extends ViewProps {
  /**
   * @description icon统一class的前缀
   */
  iconClassPrefix?: string
  /**
   * @description 	Step 配置项数组
   */
  steps?: {
    index?: number
    desc: React.ReactNode
    text: string
    activeIcon?: string
    inactiveIcon?: string
  }[]
  /**
   * @description 	当前步骤
   * @default 0
   */
  active?: number
  /**
   * @description 	 显示方向
   * @default `horizontal`
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description 	 激活颜色
   * @default `#07c160`
   */
  activeColor?: string
  /**
   * @description 	 未激活颜色
   * @default `#969799`
   */
  inactiveColor?: string
  /**
   * @description 	 激活图标
   * @default `#checked`
   */
  activeIcon?: string
  /**
   * @description 	 未激活图标
   * @default `#checked`
   */
  inactiveIcon?: string
  /**
   * @description 	 点击步骤时触发的事件，event.detail当前步骤的索引
   */
  onClickStep?: (event: ITouchEvent & { detail: number }) => void
}

declare const Steps: FunctionComponent<StepsProps>

export { Steps }
