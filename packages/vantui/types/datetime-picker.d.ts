import { FunctionComponent } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'
import { PickerProps, IPickerInstance } from './picker'

/**
 * @title DatetimePickerProps
 * @description 继承PickerProps，'onInput' | 'onConfirm' | 'onChange'除外
 */
export interface DatetimePickerProps
  extends DefinedExculdeNoMatch<
      PickerProps,
      'onInput' | 'onConfirm' | 'onChange'
    >,
    ViewProps {
  /**
   * @description 选项的值
   * @default null
   */
  value?: string | number | Date
  /**
   * @description 对选项数组进行过滤，实现自定义时间间隔
   */
  filter?: (type: string, values: (string | number)[]) => (number | string)[]
  /**
   * @description 时间类型，不建议动态修改
   * @default datetime
   */
  type?: 'datetime' | 'date' | 'year-month' | 'time'
  /**
   * @description 是否显示顶部栏
   * @default true
   */
  showToolbar?: boolean
  /**
   * @description 选项格式化函数
   */
  formatter?: (type: string, value: string | number) => number | string
  /**
   * @description 可选的最小时间，精确到分钟
   * @default 十年前
   */
  minDate?: number | string
  /**
   * @description 可选的最大时间，精确到分钟
   * @default 十年后
   */
  maxDate?: number | string
  /**
   * @description 可选的最小小时，针对type=time
   * @default 0
   */
  minHour?: number | string
  /**
   * @description 可选的最大小时，针对type=time
   * @default 23
   */
  maxHour?: number | string
  /**
   * @description 可选的最小分钟，针对type=time
   * @default 0
   */
  minMinute?: number | string
  /**
   * @description 可选的最大分钟，针对type=time
   * @default 59
   */
  maxMinute?: number | string
  /**
   * @description 当值变化时触发的事件
   */
  onInput?: (e: DatetimePickerEventsByValue) => void
  /**
   * @description 当值变化时触发的事件
   */
  onChange?: (e: DatetimePickerEventsByInstance) => void
  /**
   * @description 点击完成按钮时触发的事件
   */
  onConfirm?: (e: DatetimePickerEventsByValue) => void
  /**
   * @description 点击取消按钮时触发的事件
   */
  onCancel?: () => void
}
/**
 * @title onInput、onConfirm的回掉参数
 * @description 继承了@taro/components的ITouchEvent
 */
export interface DatetimePickerEventsByValue extends ITouchEvent {
  /**
   * @description 选项的值
   */
  detail: {
    value?: string | number
  }
}
/**
 * @title onChange的回掉参数
 */
export type DatetimePickerEventsByInstance = {
  /**
   * @description 包含每项的值columns、当前时间innerValue、手动设置列数据setColumns、更新某列值updateColumnValue
   */
  detail: {
    datetimePicker: {
      columns: (string | number)[]
      setColumns: (columns: (string | number)[]) => void
      innerValue: Date
      updateColumnValue: (value: string) => Promise<string>
    }
  }
}

/**
 * @title 组件实例
 */
export type IDatetimePickerInstance = {
  columns: (string | number)[]
  setColumns: (columns: (string | number)[]) => void
  innerValue: Date
  updateColumnValue: (value: string) => Promise<string>
  pickerInstance: IPickerInstance
}

type DefinedExculdeNoMatch<TObject, T> = {
  [K in keyof TObject]: K extends T ? unknown : TObject[K]
}

declare const DatetimePicker: FunctionComponent<DatetimePickerProps>

export { DatetimePicker }
