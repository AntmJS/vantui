import { ComponentClass } from 'react'
import { PickerProps, IPickerInstance } from './picker'

type IAnyObjectString = {
  [x: number | string]: string
}

/**
 * @desc API
 */
export interface AreaProps
  extends Omit<PickerProps, 'columns' | 'onChange'>,
    ComponentClass {
  /**
   * @default
   * @desc    地址选择的值
   */
  value?: string
  /**
   * @default
   * @desc    地区选择列表
   */
  areaList?: {
    province_list: IAnyObjectString
    city_list: IAnyObjectString
    county_list: IAnyObjectString
  }
  /**
   * @desc 多少列
   */
  columnsNum?: string | number
  /**
   * @desc 每列的展位
   */
  columnsPlaceholder?: string[]
  /**
   * @desc 触发方法
   */
  onChange: (event: {
    detail: {
      values: number[] | string[]
      picker: IPickerInstance
      index: number
    }
  }) => void
}
declare const Area: ComponentClass<AreaProps>

export { Area }
