import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface ShareSheetProps extends ViewProps {
  /**
   * @description 是否展示
   */
  show?: boolean
  /**
   * @description 蒙层样式
   */
  overlayStyle?: string
  /**
   * @description 蒙层样式
   * @default 2
   */
  zIndex?: number
  /**
   * @description 标题
   */
  title?: string
  /**
   * @description 是否展示蒙层
   */
  overlay?: boolean
  /**
   * @description 是否开启底部安全区适配
   */
  safeAreaInsetBottom?: boolean
  /**
   * @description 是否点击关闭蒙层
   */
  closeOnClickOverlay?: boolean
  /**
   * @description 动画时间（ms）
   * @default 300
   */
  duration?: number | string
  onClickOverlay?: () => void
  onCancel?: () => void
  onSelect?: (event: { detail: ShareSheetOptionItem }) => void
  onClose?: () => void
  /**
   * @description 自定义渲染标题
   */
  renderTitle?: ReactNode
  /**
   * @description 自定义渲染内容
   */
  renderDescription?: ReactNode
  /**
   * @description 取消按钮名称
   */
  cancelText?: string
  /**
   * @description 描述
   */
  description?: string
  /**
   * @description 选项
   */
  options?: ShareSheetOptionItem[] | ShareSheetOptionItem[][]
}

export interface ShareSheetOptionItem {
  /**
   * @description 名称
   */
  name: string
  /**
   * @description 图标，可以是`url`
   */
  icon: string
  /**
   * @description 自定义icon位置渲染，可以覆盖icon属性
   */
  renderIcon?: ReactNode
  /**
   * @description 秒速
   */
  description?: string
  /**
   * @description 按钮 `open-type`，可用于实现分享功能，可选值为 `share`
   */
  openType?: string
}
export interface ShareSheetOption {
  showBorder?: boolean
  options: ShareSheetOptionItem[]
  onSelect?: (option: ShareSheetOptionItem, index: number) => void
}

declare const ShareSheet: FunctionComponent<ShareSheetProps>
export { ShareSheet }
