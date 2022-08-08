import { FunctionComponent } from 'react'
import { PickerProps, IPickerInstance } from './picker'

export interface AreaProps extends Omit<PickerProps, 'columns' | 'onChange'> {
  showToolbar?: boolean
  value?: string
  areaList?: {
    province_list: {
      [x: number | string]: string
    }
    city_list: {
      [x: number | string]: string
    }
    county_list: {
      [x: number | string]: string
    }
  }
  columnsNum?: string | number
  columnsPlaceholder?: string[]
  onChange?: (event: {
    detail: {
      values: number[] | string[]
      picker: IPickerInstance
      index: number
    }
  }) => void
}
declare const Area: FunctionComponent<AreaProps>

export { Area }
