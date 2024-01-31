import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface TabsProps extends Omit<ViewProps, 'onClick'> {
  /**
   * @description 固定模式
   * @default false
   */
  sticky?: boolean
  /**
   * @description 固定模式的容器
   * @default 根元素
   */
  container?: () => any
  /**
   * @description 是否展示外边框，仅在 line 风格下生效
   * @default false
   */
  border?: boolean
  /**
   * @description 是否开启手势滑动切换
   * @default false
   */
  swipeable?: boolean
  /**
   * @description 标题选中态颜色
   */
  titleActiveColor?: string
  /**
   * @description 标题默认态颜色
   */
  titleInactiveColor?: string
  /**
   * @description 标签主题色
   */
  color?: string
  /**
   * @description 是否有切换动画
   */
  animated?: boolean
  /**
   * @description 当前选中标签的标识符
   */
  active?: number | string
  /**
   * @description 展示类型
   */
  type?: 'card' | 'line'
  /**
   * @description 内容过长，是否展示省略号
   * @default true
   */
  ellipsis?: boolean
  /**
   * @description 滑动内容的动画交互时间，type=line的动画时间需要通过css/less变量配置
   */
  duration?: number
  /**
   * @description 固定模式下的层级
   */
  zIndex?: number
  /**
   * @description 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
   */
  swipeThreshold?: number
  /**
   * @description 粘性定位布局下与顶部的最小距离，单位px
   */
  offsetTop?: number
  /**
   * @description 是否开启标签页内容延迟渲染
   * @default true
   */
  lazyRender?: boolean
  children: ReactNode
  /**
   * @description 左侧内容渲染
   */
  renderNavLeft?: ReactNode
  /**
   * @description 右侧内容渲染
   */
  renderNavRight?: ReactNode
  onScroll?: (data: {
    detail: { scrollTop?: number | null; isFixed?: boolean }
  }) => void
  onClick?: (event: TabEventDetail) => void
  onChange?: (event: TabEventDetail) => void
  onDisabled?: (event: TabEventDetail) => void
}

/**
 * @title TabEventDetail
 */
export interface TabEventDetail {
  detail: {
    index: number
    name?: string
    title?: string
  }
}

export interface TabProps extends ViewProps {
  /**
   * @description 是否显示小红点
   * @default false
   */
  dot?: boolean
  /**
   * @description 图标右上角提示信息
   */
  info?: string | number
  /**
   * @description 标题
   */
  title?: ReactNode
  disabled?: boolean
  titleStyle?: string
  /**
   * @description  标签名称，作为匹配的标识符
   */
  name?: string | number
  children?: ReactNode
}

declare const Tab: FunctionComponent<TabProps>

declare const Tabs: FunctionComponent<TabsProps>

export { Tabs, Tab }
