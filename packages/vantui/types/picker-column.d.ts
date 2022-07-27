import { FunctionComponent } from 'react'
import { StandardProps } from '@tarojs/components'

export interface PickerColumnProps extends StandardProps {
  valueKey?: string
  className?: string
  itemHeight?: number | string
  visibleItemCount?: number
  initialOptions?: Array<any>
  defaultIndex?: number
  onChange?: (a: any) => void
  activeClass?: string
  refBase?: any
}

declare const PickerColumn: FunctionComponent<PickerColumnProps>

export { PickerColumn }
