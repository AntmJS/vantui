import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface PickerProps extends StandardProps {
  valueKey?: string
  toolbarPosition?: string
  defaultIndex?: number
  columns: Array<any>
  title?: string
  cancelButtonText?: string
  confirmButtonText?: string
  loading?: boolean
  itemHeight?: string | number
  itemWidth?: string | number
  visibleItemCount?: number
  onChange?: (a: any) => void
  onCancel?: (a: any) => void
  onConfirm?: (a: any) => void
  showToolbar?: boolean
}

declare const Picker: ComponentClass<PickerProps>

export { Picker }
