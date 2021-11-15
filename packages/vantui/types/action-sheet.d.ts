import { ComponentClass, ReactNode } from 'react'
import { StandardProps, ButtonProps, ITouchEvent } from '@tarojs/components'
import { PopupProps } from './popup'
export interface ActionSheetItem extends Omit<ButtonProps, 'children'> {
  name?: string
  subname?: string
  color?: string
  loading?: boolean
  disabled?: boolean
}
export interface ActionSheetProps extends StandardProps, PopupProps {
  actions?: ActionSheetItem[]
  title?: string
  show?: boolean
  cancelText?: string
  description?: string
  overlay?: boolean
  closeOnClickOverlay?: boolean
  closeOnClickAction?: boolean
  safeAreaInsetBottom?: boolean
  round?: boolean
  zIndex?: number
  children?: ReactNode
  onSelect?: (event: ITouchEvent & { detail: ActionSheetItem }) => void
  onCancel?: () => void
  onClose?: () => void
  onClickOverlay?: () => void
}
declare const ActionSheet: ComponentClass<ActionSheetProps>
export { ActionSheet }
