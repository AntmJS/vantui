import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface DropdownMenuProps extends StandardProps {
  activeColor?: string
  overlay?: boolean
  zIndex?: number
  duration?: number
  direction?: string
  closeOnClickOverlay?: boolean
  closeOnClickOutside?: boolean
  popupStyle?: React.CSSProperties
  wrapperStyle?: React.CSSProperties
  onOpen?: (a?: any) => void
  onOpened?: (a?: any) => void
  onClose?: (a?: any) => void
  onClosed?: (a?: any) => void
  options?: Array<any>
  children?: JSX.Element | JSX.Element[]
  value?: string
  disabled?: boolean
}

declare const DropdownMenu: ComponentClass<DropdownMenuProps>

export { DropdownMenu }
