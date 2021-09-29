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
  theme?: string
  cancelButtonColor?: string
  confirmButtonColor?: string
  onConfirm?: (action: string, dialog?: { dialog: any }) => void
  onCancel?: (action: string, dialog?: { dialog: any }) => void
  onClose?: (event: { detail: string }) => void
  message?: string
  overlay?: boolean
  selector?: string
  ariaLabel?: string
  className?: string
  customStyle?: string
  transition?: string
  /**
   * @deprecated use beforeClose instead
   */
  asyncClose?: boolean
  beforeClose?: (action: string) => Promise<void | boolean> | void | boolean
  // businessId?: number
  // lang?: string
  // sessionFrom?: string
  // overlayStyle?: string
  // appParameter?: string
  // sendMessageImg?: string
  // showMessageCard?: boolean
  // sendMessagePath?: string
  // sendMessageTitle?: string
  messageAlign?: string
  confirmButtonText?: string
  cancelButtonText?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  closeOnClickOverlay?: boolean
  confirmButtonOpenType?: string
  renderTitle?: ReactNode
}

interface DialogCom {
  alert(options: DialogProps): Promise<void>
  confirm(options: DialogProps): Promise<void>
  setDefaultOptions(options: DialogProps): void
  resetDefaultOptions(): void
  close(): void
  stopLoading(): void
}

// & DialogCom
declare const Dialog: ComponentClass<DialogProps> & DialogCom

export { Dialog }
