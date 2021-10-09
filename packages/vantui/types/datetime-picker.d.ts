import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { PickerProps } from './picker'

type DatetimePickerEventsByValue = {
  detail: {
    value?: string | number
  }
}

export type DatetimePickerEventsByInstance = {
  detail: {
    datetimePicker: {
      columns: (string | number)[]
      setColumns: (columns: (string | number)[]) => (string | number)[]
      innerValue: Date
      updateColumnValue: (value: string) => Promise<string>
    }
  }
}

type DefinedExculdeNoMatch<TObject, T> = {
  [K in keyof TObject]: K extends T ? unknown : TObject[K]
}

export interface DatetimePickerProps
  extends DefinedExculdeNoMatch<
      PickerProps,
      'onInput' | 'onConfirm' | 'onChange'
    >,
    StandardProps {
  value?: string | number
  filter?: (type: string, values: (string | number)[]) => (number | string)[]
  type?: string
  showToolbar?: boolean
  formatter?: (type: string, value: string | number) => number | string
  minDate?: number | string
  maxDate?: number | string
  minHour?: number | string
  maxHour?: number | string
  minMinute?: number | string
  maxMinute?: number | string
  onInput?: (e: DatetimePickerEventsByValue) => void
  onChange?: (e: DatetimePickerEventsByInstance) => void
  onConfirm?: (e: DatetimePickerEventsByValue) => void
  onCancel?: () => void
}

declare const DatetimePicker: ComponentClass<DatetimePickerProps>

export { DatetimePicker }
