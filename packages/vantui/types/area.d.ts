import { FunctionComponent } from 'react'
import { PickerProps, IPickerInstance } from './picker'

export interface AreaProps
  extends Omit<
    PickerProps,
    'columns' | 'onChange' | 'onInput' | 'idKey' | 'valueKey' | 'renderContent'
  > {
  showToolbar?: boolean
  value?: string | string[]
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
  columnsNum?: number
  columnsPlaceholder?: string[]
  onChange?: (event: {
    detail: {
      values: number[] | string[]
      picker: IPickerInstance
      index: number
    }
  }) => void
  onInput?: (event: {
    detail: {
      value: number[] | string[]
    }
  }) => void
}
declare const Area: FunctionComponent<AreaProps>

export { Area }
