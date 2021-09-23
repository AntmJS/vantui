import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { PickerProps } from './picker'

export interface DatetimePickerProps extends PickerProps, StandardProps {
  value?: string | number
  filter?: (a?: any, b?: any) => any
  type?: string
  showToolbar?: boolean
  formatter?: (a?: any) => any
  minDate?: number | string
  maxDate?: number | string
  minHour?: number | string
  maxHour?: number | string
  minMinute?: number | string
  maxMinute?: number | string
  onInput?: (a?: any) => void
  onChange?: (a?: any) => any
  onConfirm?: (a?: any) => void
  onCancel?: (a?: any) => void
}

declare const DatetimePicker: ComponentClass<DatetimePickerProps>

export { DatetimePicker }
