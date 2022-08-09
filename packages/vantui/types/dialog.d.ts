import { FunctionComponent, ReactNode } from 'react'
import {
  StandardProps,
  ButtonProps as TaroButtonProps,
} from '@tarojs/components'

import { ButtonProps } from './button'
import { PopupProps } from './popup'
export interface DialogProps
  extends StandardProps,
    Omit<PopupProps, 'onClose' | 'children'>,
    Omit<ButtonProps, 'children'> {
  show?: boolean
  title?: ReactNode
  width?: string | number
  zIndex?: number
  theme?: 'round-button'
  cancelButtonColor?: string
  confirmButtonColor?: string
  onConfirm?: (event: {
    detail: { action: string; dialog?: { dialog: any } }
  }) => void
  onCancel?: (event: {
    detail: { action: string; dialog?: { dialog: any } }
  }) => void
  onClose?: (event: { detail: string }) => void
  message?: ReactNode
  overlay?: boolean
  selector?: string
  ariaLabel?: string
  className?: string
  style?: string
  transition?: 'fade' | 'none'
  /**
   * @deprecated use beforeClose instead
   */
  asyncClose?: boolean
  beforeClose?: (action: string) => Promise<void | boolean> | void | boolean
  messageAlign?: 'left' | 'right'
  confirmButtonText?: ReactNode
  cancelButtonText?: ReactNode
  showConfirmButton?: boolean
  showCancelButton?: boolean
  closeOnClickOverlay?: boolean
  confirmButtonOpenType?: TaroButtonProps.OpenType
  renderTitle?: ReactNode
}

interface dialog {
  alert(options: DialogProps): Promise<'confirm' | 'cancel'>
  confirm(options: DialogProps): Promise<'confirm' | 'cancel'>
  setDefaultOptions(options: DialogProps): void
  resetDefaultOptions(): void
  close(): void
  stopLoading(): void
}

// & DialogCom
declare const Dialog: FunctionComponent<DialogProps> & dialog

export { Dialog, dialog }
