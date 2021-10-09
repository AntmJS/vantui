import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface DropdownItemProps extends StandardProps {
  value?: string | number
  title?: string
  disabled?: boolean
  titleClass?: string
  options: Array<any>
  popupStyle?: React.CSSProperties
  direction?: string
  duration?: number
  closeOnClickOverlay?: boolean
  activeColor?: string
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (value?: number | string) => void
  children?: JSX.Element | JSX.Element[]
}

declare const DropdownItem: ComponentClass<DropdownItemProps>

export { DropdownItem }
