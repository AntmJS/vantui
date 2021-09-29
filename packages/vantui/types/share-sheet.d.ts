import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface ShareSheetOptionItem {
  name: string
  icon: string
  description?: string
  openType?: string
}
export interface ShareSheetOption {
  showBorder?: boolean
  options: ShareSheetOptionItem[]
  onSelect?: (option: ShareSheetOptionItem, index: number) => void
}
export interface ShareSheetProps extends StandardProps {
  show?: boolean
  overlayStyle?: string
  zIndex?: number
  title?: string
  overlay?: boolean
  safeAreaInsetBottom?: boolean
  closeOnClickOverlay?: boolean
  duration?: number
  onClickOverlay?: () => void
  onCancel?: () => void
  onSelect?: (
    option: ShareSheetOptionItem | ShareSheetOptionItem,
    index: number,
  ) => void
  onClose?: () => void
  renderTitle?: ReactNode
  renderDescription?: ReactNode
  cancelText?: string
  description?: string
  options?: ShareSheetOptionItem[] | ShareSheetOptionItem[][]
}
declare const ShareSheet: ComponentClass<ShareSheetProps>
export { ShareSheet }
