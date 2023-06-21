import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface SwiperProps extends ViewProps {
  /**
   * @description 轮播卡片的宽度
   * @default 窗口宽度
   */
  width?: number | string
  /**
   * @description 轮播卡片的高度
   */
  height: number | string
  /**
   * @description 动画时长（单位是ms）
   * @default 500
   */
  duration?: number | string
  /**
   * @description 初始化索引值
   */
  initPage?: number | string
  /**
   * @description 自动轮播时长，0表示不会自动轮播
   */
  autoPlay: number | string
  /**
   * @description 轮播方向,可选值horizontal,vertical
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description 分页指示器选中的颜色
   * @default #fff
   */
  paginationColor?: string
  /**
   * @description 	分页指示器是否展示
   * @default true
   */
  paginationVisible?: boolean
  /**
   * @description 是否循环轮播
   * @default true
   */
  loop?: boolean
  /**
   * @description 是否可以手动滑动
   * @default true
   */
  touchable?: boolean
  /**
   * @description 滑动过程中是否禁用默认事件
   */
  isPreventDefault?: boolean
  /**
   * @description 滑动过程中是否禁止冒泡
   */
  isStopPropagation?: boolean
  /**
   * @description 是否居中展示，必须传对应的width 和 height
   * @default false
   */
  isCenter?: boolean
  className?: string
  style?: React.CSSProperties
  /**
   * @description 自定义指示器
   */
  pageContent?: React.ReactNode
  /**
   * @description 卡片切换后的回调
   */
  onChange?: (currPage: number) => void
}

export interface SwiperInstance {
  /**
   * @description 切换到指定页
   */
  to: (index: number) => void
  /**
   * @description 切换到下一页
   */
  next: () => void
  /**
   * @description 切换到上一页
   */
  prev: () => void
}

export interface SwiperItemProps {
  direction?: string
  size?: 0
  className?: string
  children: React.ReactNode
}

declare const Swiper: FunctionComponent<SwiperProps>

declare const SwiperItem: FunctionComponent<SwiperItemProps>

export { Swiper, SwiperItem }
