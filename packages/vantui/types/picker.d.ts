import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export type PickerColumn = {
  values: string[]
  defaultIndex?: number
  className?: string
  children?: PickerColumn
}

interface PickerEvents {
  detail: {
    value: number | number[]
  }
}

type PickerOptions = (string | PickerColumn)[]

interface PickerChangeEvents {
  detail: {
    value: number | number[]
    picker: IPickerInstance
    index: number
  }
}

export type IPickerInstance = {
  setColumnValues: (
    index: number,
    options: PickerOptions,
    needReset: boolean,
  ) => Promise<any>
  getColumnValues: (index: number) => (number | string)[]
  setColumnValue: (index: number, value: number | string) => any
  getColumnValue: (index: number) => number | string
  columns: PickerColumn[]
  getIndexes: () => number[]
  setIndexes: () => void
  getValues: () => number | string
  confirm: () => void
}
export interface PickerProps extends StandardProps {
  valueKey?: string
  toolbarPosition?: string
  defaultIndex?: number
  columns?: any[]
  title?: string
  cancelButtonText?: string
  confirmButtonText?: string
  loading?: boolean
  itemHeight?: string | number
  itemWidth?: string | number
  visibleItemCount?: number
  onChange?: (e: PickerChangeEvents) => void
  onCancel?: (e: PickerEvents) => void
  onConfirm?: (e: PickerEvents) => void
  showToolbar?: boolean
}

declare const Picker: ComponentClass<PickerProps>

export { Picker }
