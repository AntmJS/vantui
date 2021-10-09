import React, { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

type CalendarSelectType = 'selected' | 'start' | 'middle' | 'end' | 'disabled'

type CalendarType = 'single' | 'multiple' | 'range'
interface CalendarEvents extends ITouchEvent {
  detail: {
    value: Date | Date[]
  }
}

interface CalendarEventsSingle extends ITouchEvent {
  detail: {
    value: Date
  }
}

type Day = {
  date: CalendarSelectType
  type?: string
  text?: string | number
  bottomInfo?: string
  className?: string
  topInfo?: string
}

export type ICalendarInstance = {
  reset: (date?: Date | Date[]) => void
  // scrollToDate: (date: Date) => void
}
export interface CalendarProps extends StandardProps {
  title?: string
  color?: string
  show?: boolean
  formatter?: (day: Day) => Day
  confirmText?: string
  rangePrompt?: string
  showRangePrompt?: boolean
  defaultDate?: string | string[]
  allowSameDay?: boolean
  confirmDisabledText?: string
  type?: CalendarType
  minDate?: number
  maxDate?: number
  position?: 'left' | 'right' | 'bottom' | 'top'
  rowHeight?: number | string
  round?: boolean
  poppable?: boolean
  showMark?: boolean
  showTitle?: boolean
  showConfirm?: boolean
  showSubtitle?: boolean
  safeAreaInsetBottom?: boolean
  closeOnClickOverlay?: boolean
  maxRange?: number
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  onOpen?: () => void
  onClose?: () => void
  onOpened?: () => void
  onClosed?: () => void
  onConfirm?: (e: CalendarEvents) => void
  overRange?: () => void
  onUnselect?: (e: CalendarEventsSingle) => void
  onSelect?: (e: CalendarEvents) => void
  onClickSubtitle?: (a?: any) => void
  renderTitle?: React.ReactNode
  renderFooter?: React.ReactNode
}

declare const Calendar: ComponentClass<CalendarProps>

export { Calendar }
