import React, { FunctionComponent } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

type SliderEvent = {
  detail: {
    value: number
  }
}
export interface SliderProps extends ViewProps {
  /**
   * @description
   */
  range?: boolean
  /**
   * @description 	是否禁用滑块
   * @default false
   */
  disabled?: boolean
  /**
   * @description 进度条激活态颜色
   * @default #07c160
   */
  activeColor?: string
  /**
   * @description 	进度条默认颜色
   */
  inactiveColor?: string
  /**
   * @description 	最大值
   * @default 100
   */
  max?: number
  /**
   * @description 最小值
   * @default 0
   */
  min?: number
  /**
   * @description 步长
   * @default 1
   */
  step?: number
  /**
   * @description 当前进度百分比
   * @default 0
   */
  value?: number | number[]
  /**
   * @description 进度条高度，默认单位为px
   */
  barHeight?: number | string
  /**
   * @description 是否垂直展示
   * @default false
   */
  vertical?: boolean
  /**
   * @description 拖动时触发
   */
  onDrag?: (e: ITouchEvent & SliderEvent) => void
  /**
   * @description 进度变化且结束拖动后触发
   */
  onChange?: (e: ITouchEvent & SliderEvent) => void
  /**
   * @description 开始拖动时触发
   */
  onDragStart?: () => void
  /**
   * @description 结束拖动时触发
   */
  onDragEnd?: () => void
  /**
   * @description 自定义滑动按钮
   */
  renderButton?: React.ReactNode
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const Slider: FunctionComponent<SliderProps>

export { Slider }
