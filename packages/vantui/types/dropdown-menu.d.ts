import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

type DropdownMenuOption = {
  text?: string
  value: number | string
  icon?: string
}

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
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  options?: Array<DropdownMenuOption>
  children?: React.ReactNode
  value?: string
  disabled?: boolean
}

declare const DropdownMenu: ComponentClass<DropdownMenuProps>

export { DropdownMenu }
