import { FunctionComponent, ReactNode, CSSProperties } from 'react'
import { ViewProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'
import { OverlayProps } from './overlay'

/**
 * @title Popup Props
 */
export interface PopupProps extends TransitionProps, ViewProps, OverlayProps {
  /**
   * @description 是否显示圆角
   */
  round?: boolean
  /**
   * @description 是否显示关闭图标
   */
  closeable?: boolean
  /**
   * @description 自定义遮罩层样式
   */
  overlayStyle?: string | CSSProperties
  /**
   * @description 执行
   */
  transition?: string
  /**
   * @description 弹出层的层级
   */
  zIndex?: number
  /**
   * @description 是否显示遮罩层
   */
  overlay?: boolean
  /**
   * @description 关闭图标名称或图片链接
   */
  closeIcon?: string
  /**
   * @description 关闭图标名称或图片链接的位置
   */
  closeIconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /**
   * @description 是否在点击遮罩层后关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
  /**
   * @description 	弹出位置
   * @default center
   */
  position?: 'top' | 'bottom' | 'right' | 'left'
  /**
   * @description 是否为 iPhoneX 留出底部安全距离
   * @default true
   */
  safeAreaInsetBottom?: boolean
  /**
   * @description 是否留出顶部安全距离（状态栏高度）
   * @default false
   */
  safeAreaInsetTop?: boolean
  children?: ReactNode
  /**
   * @description 点击蒙层触发的方法
   */
  onClickOverlay?: () => void
  /**
   * @description 蒙层关闭触发的方法
   */
  onClose?: () => void
}

declare const Popup: FunctionComponent<PopupProps>

export { Popup }
