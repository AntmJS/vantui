import { FunctionComponent, ReactNode } from 'react'
import { ViewProps, ButtonProps, ITouchEvent } from '@tarojs/components'
import { PopupProps } from './popup'
export interface ActionSheetItem
  extends Omit<ButtonProps, 'children'>,
    Record<string, any> {
  name?: ReactNode
  subname?: ReactNode
  color?: string
  loading?: boolean
  disabled?: boolean
}
export interface ActionSheetProps extends ViewProps, PopupProps {
  actions?: ActionSheetItem[]
  title?: ReactNode
  show?: boolean
  cancelText?: ReactNode
  description?: ReactNode
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
declare const ActionSheet: FunctionComponent<ActionSheetProps>
export { ActionSheet }
