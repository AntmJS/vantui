import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

import { ButtonProps } from './button'
import { PopupProps } from './popup'
export interface DialogProps
  extends StandardProps,
    PopupProps,
    Omit<ButtonProps, 'children'> {
  show?: boolean
  title?: string
  width?: string | number | null
  zIndex?: number
  theme?: string
  cancelButtonColor?: string
  confirmButtonColor?: string
  onConfirm?: (action: string, dialog?: { dialog: any }) => void
  onCancel?: (action: string, dialog?: { dialog: any }) => void
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
  onBeforeClose?: (action: any) => Promise<void> | void
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

declare const Dialog: ComponentClass<DialogProps>

export { Dialog }
