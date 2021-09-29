import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CalendarProps extends StandardProps {
  title?: string
  color?: string
  show?: boolean
  formatter?: (a: any) => any
  confirmText?: string
  rangePrompt?: string
  showRangePrompt?: boolean
  defaultDate?: string
  allowSameDay?: boolean
  confirmDisabledText?: string
  type?: string
  minDate?: number
  maxDate?: number
  position?: string
  rowHeight?: number
  round?: boolean
  poppable?: boolean
  showMark?: boolean
  showTitle?: boolean
  showConfirm?: boolean
  showSubtitle?: boolean
  safeAreaInsetBottom?: boolean
  closeOnClickOverlay?: boolean
  maxRange?: number
  firstDayOfWeek?: number
  onOpen?: () => void
  onClose?: () => void
  onOpened?: () => void
  onClosed?: () => void
  onConfirm?: (a?: any) => void
  overRange?: () => void
  onUnselect?: (a?: any) => void
  onSelect?: (a?: any) => void
  onClickSubtitle?: (a?: any) => void
  renderTitle?: React.ReactNode
  renderFooter?: React.ReactNode
}

declare const Calendar: ComponentClass<CalendarProps>

export { Calendar }
