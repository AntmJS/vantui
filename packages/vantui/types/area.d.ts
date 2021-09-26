import { ComponentClass } from 'react'
import { PickerProps } from './picker'
export interface AreaProps
  extends Omit<PickerProps, 'columns'>,
    ComponentClass {
  value?: string
  areaList?: any
  columnsNum?: number
  columnsPlaceholder?: string[]
}
declare const Area: ComponentClass<AreaProps>

export { Area }
