import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface NoticeBarProps extends ViewProps {
  /**
   * @description 通知文本内容
   * @default ""
   */
  text?: ReactNode
  /**
   * @description 通知栏模式，可选值为 closeable link
   * @default ""
   */
  mode?: 'closeable' | 'link'
  /**
   * @description 当mode为link类型时候的url
   */
  url?: string
  /**
   * @description 当mode为link类型时候的跳转方式
   * @default navigate
   */
  openType?:
    | 'navigate'
    | 'redirect'
    | 'switchTab'
    | 'reLaunch'
    | 'navigateBack'
    | 'exit'

  /**
   * @description 动画延迟时间 (s)
   * @default 1
   */
  delay?: number
  /**
   * @description 滚动速率 (px/s)
   * @default 60
   */
  speed?: number
  /**
   * @description 是否在长度溢出时滚动播放
   * @default false
   */
  scrollable?: boolean
  /**
   * @description 左侧图标名称或图片链接，可选值见 Icon 组件
   */
  leftIcon?: string
  /**
   * @description 文本颜色
   * @default #ed6a0c
   */
  color?: string
  /**
   * @description 滚动条背景颜色
   * @default #fffbe8
   */
  backgroundColor?: string
  /**
   * @description 滚动条背景
   */
  background?: string
  /**
   * @description 是否开启文本换行，只在禁用滚动时生效
   * @default false
   */
  wrapable?: boolean
  /**
   * @description
   */
  children?: ReactNode
  /**
   * @description 自定义左侧图标
   */
  renderLeftIcon?: ReactNode
  /**
   * @description 自定义右侧图标
   */
  renderRightIcon?: ReactNode
  /**
   * @description 	点击通知栏时触发
   */
  onClick?: (event: ITouchEvent) => any
  /**
   * @description 关闭通知栏时触发
   */
  onClose?: (event: ITouchEvent) => any
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const NoticeBar: FunctionComponent<NoticeBarProps>

export { NoticeBar }
