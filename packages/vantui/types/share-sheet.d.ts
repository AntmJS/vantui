import { FunctionComponent, ReactNode } from 'react'
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
  duration?: number | string
  onClickOverlay?: () => void
  onCancel?: () => void
  onSelect?: (event: { detail: ShareSheetOptionItem }) => void
  onClose?: () => void
  renderTitle?: ReactNode
  renderDescription?: ReactNode
  cancelText?: string
  description?: string
  options?: ShareSheetOptionItem[] | ShareSheetOptionItem[][]
}
declare const ShareSheet: FunctionComponent<ShareSheetProps>
export { ShareSheet }
