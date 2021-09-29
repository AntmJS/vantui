import { ComponentClass } from 'react'
import { PickerProps } from './picker'
export interface AreaProps
  extends Omit<PickerProps, 'columns'>,
    ComponentClass {
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
}
declare const Area: ComponentClass<AreaProps>

export { Area }
