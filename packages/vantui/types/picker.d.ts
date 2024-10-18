import { FunctionComponent, ReactNode } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'
/**
 * @title  Props API
 * @description
 */
export interface PickerProps extends ViewProps {
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @description normal为普通选择模式，content是展示选择的内容，点击展示选择项
   * @default normal
   */
  mode?: 'normal' | 'content'
  /**
   * @description 选择提示和弹窗标题
   * @default 请选择
   */
  placeholder?: string
  /**
   * @description 选择提示的样式
   * @default 请选择
   */
  placeholderColor?: string
  /**
   * @description 自定义渲染
   */
  renderContent?: (data: any[] | null) => React.ReactNode
  /**
   * @description 是否展示下拉尖头
   * @default false
   */
  showArrowDown?: boolean
  /**
   * @description 是否展示右尖头
   * @default false
   */
  showArrowRight?: boolean
  /**
   * @description 	自定义渲染右侧内容
   */
  renderContentRight?: ReactNode
  /**
   * @description 有值的时候，是否展示清除按钮
   * @default true
   */
  allowClear?: boolean
  /**
   * @description 选项为对象的时候，文字对应的 key
   * @default text
   */
  valueKey?: string
  /**
   * @description 选项为对象的时候，键值对应的 key
   * @default id
   */
  idKey?: string
  /**
   * @description 选中内容文本的className
   * @default ‘’
   */
  contentClassName?: string
  /**
   * @description 顶部栏位置，可选值为bottom
   * @default top
   */
  toolbarPosition?: string
  /**
   * @description 	单列选择器的默认选中项索引,多列选择器请参考下方的 Columns 配置
   * @default 0
   */
  defaultIndex?: number
  /**
   * @description 	单列选择器的默认选中项索引,多列选择器请参考下方的 Columns 配置
   * @default 0
   */
  value?: Array<string | number | Date> | string | number
  /**
   * @description 	每一项数据，可为字符或者对象，对象默认展示值是valueKey设置的key
   * @default []
   */
  columns?: any[]
  /**
   * @description 实时异步获取columns, 返回改变的数据和值
   * @default []
   */
  syncColumns?: (params: {
    values: Array<string | number | undefined>
    changeIndex?: number
    columns: any[]
  }) => Promise<any[]>
  /**
   * @description 	顶部栏标题
   * @default ''
   */
  title?: ReactNode
  /**
   * @description 	取消按钮文字
   * @default 取消
   */
  cancelButtonText?: ReactNode
  /**
   * @description 	确认按钮文字
   * @default 确认
   */
  confirmButtonText?: ReactNode
  /**
   * @description 	加载状态
   * @default false
   */
  loading?: boolean
  /**
   * @description 	选项高度,对应单位PX
   * @default 48
   */
  itemHeight?: string | number
  /**
   * @description 	可见的选项个数
   * @default 6
   */
  visibleItemCount?: number
  /**
   * @description 变化触发方法
   */
  onInput?: (e: { detail: Array<string | number> | string | number }) => void
  /**
   * @description 变化触发方法
   */
  onChange?: (e: PickerChangeEvents) => void
  /**
   * @description 取消触发方法
   */
  onCancel?: (e: PickerEvents) => void
  /**
   * @description 确认触发方法
   */
  onConfirm?: (e: PickerEvents) => void
  /**
   * @description 	是否显示顶部栏
   * @default       false
   */
  showToolbar?: boolean
}
/**
 * @title 事件 onConfirm 和 onCancel
 * @description 继承了Taro的ITouchEvent类型
 */
export interface PickerEvents extends ITouchEvent {
  /**
   * @description 返回选项对应的值和选项对应的下标
   */
  detail: {
    value: any
    values: number[]
    index: number | number[]
  }
}

/**
 * @title 触发事件 onChange
 * @description 继承了Taro的ITouchEvent类型
 */
export interface PickerChangeEvents extends ITouchEvent {
  /**
   * @description 返回选项对应的值、picker实例和多列返回当前第多少列、单列返回选项对应值
   */
  detail: {
    value: any
    picker: IPickerInstance
    index: number
  }
}
/**
 * @title 组件实例
 * @description 通过ref获取到的方法如下
 */
export type IPickerInstance = {
  /**
   * @description 设置每一列的数据，异步获取到最新的values
   */
  setColumnValues: (index: number, options: string[]) => Promise<any>
  /**
   * @description 获取每一列的值
   * @default
   */
  getColumnValues: (index: number[]) => any[]
  /**
   * @description 设置某一列的值
   */
  setColumnValue: (index: number, value: any) => any
  /**
   * @description 获取某一列的值
   */
  getColumnValue: (index: number) => any
  /**
   * @description 每列的数据
   */
  columns: any[]
  /**
   * @description 获取每一列展示的下标
   */
  getIndexes: () => number[]
  /**
   * @description 设置每一列展示的下标
   */
  setIndexes: (indexes: number[]) => void
  /**
   * @description 每一列展示的值
   */
  getValues: () => any
  /**
   * @description 触发确认的方法
   */
  confirm: () => void
}

declare const Picker: FunctionComponent<PickerProps>

export { Picker }
