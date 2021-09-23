import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { PopupProps } from './popup'
import { ButtonProps } from './button'
export interface ActionSheetItem extends Omit<ButtonProps, 'children'> {
  name?: string
  subname?: string
  color?: string
  loading?: boolean
  disabled?: boolean
  getUserProfileDesc?: string
}
export interface ActionSheetProps extends StandardProps, PopupProps {
  actions: ActionSheetItem[]
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
  onSelect?: (...args: any[]) => any
  onCancel?: (...args: any[]) => any
  onClose?: (...args: any[]) => any
  onClickOverlay?: (...args: any[]) => any
  onGetUserInfo?: (...args: any[]) => any
}
declare const ActionSheet: ComponentClass<ActionSheetProps>
export { ActionSheet }
