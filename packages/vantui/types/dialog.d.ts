import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

import { ButtonProps } from './button'
import { PopupProps } from './popup'
export interface DialogProps
  extends StandardProps,
    Omit<PopupProps, 'onClose'>,
    Omit<ButtonProps, 'children'> {
  show?: boolean
  title?: string
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
  message?: string
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
  confirmButtonText?: string
  cancelButtonText?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  closeOnClickOverlay?: boolean
  confirmButtonOpenType?: string
  renderTitle?: ReactNode
}

interface dialog {
  alert(options: DialogProps): Promise<void>
  confirm(options: DialogProps): Promise<void>
  setDefaultOptions(options: DialogProps): void
  resetDefaultOptions(): void
  close(): void
  stopLoading(): void
}

// & DialogCom
declare const Dialog: ComponentClass<DialogProps> & dialog

export { Dialog, dialog }
