import { FunctionComponent } from 'react'
import { ScrollViewProps, ViewProps } from '@tarojs/components'
import { StickyProps } from './sticky'

/**
 * @title ITableProps
 */
export interface ITableProps extends ViewProps {
  /**
   * @description 表格列配置描述
   */
  columns: IColumns[]
  /**
   * @description 数据源
   */
  dataSource: Record<string, any>[]
  /**
   * @description 表格行 key 的取值
   */
  rowKey: string // 表格行 key 的取值
  /**
   * @description 最外层包裹节点 css 类名
   */
  className?: string
  /**
   * @description 最外层包裹节点内联样式
   */
  style?: React.CSSProperties
  /**
   * @description 单元格统一样式
   */
  colStyle?: React.CSSProperties
  /**
   * @description 单元格统一类名
   */
  colClassName?: string
  /**
   * @description 行统一样式
   */
  rowStyle?: React.CSSProperties
  /**
   * @description 表格行 css 类名
   */
  rowClassName?: string
  /**
   * @description 统一设置表头样式
   */
  titleStyle?: React.CSSProperties
  /**
   * @description 统一设置表头单元格 css 类名
   */
  titleClassName?: string
  /**
   * @description 是否加载中
   * @default false
   */
  loading?: boolean
  /**
   * @description 排序变化
   * @default () => void
   */
  sortChange?: (columns: IColumns) => void
  /**
   * @description 数据为空的时候的占位字符
   * @default '--'
   */
  placeholder?: React.ReactNode

  /**
   * @description 表格是否可滚动，也可以指定滚动区域的宽、高
   */
  scroll?: {
    x?: number | string | boolean
    y?: number | string | boolean
  }
  /**
   * @description 传递给ScrollView的属性值
   */
  scrollViewProps?: ScrollViewProps
  /**
   * @description sticky模式
   */
  sticky?: boolean | StickyProps
}

/**
 * @title IColumns
 * @description 表格列配置描述
 */
export interface IColumns {
  /**
   * @description 标题
   */
  title: string | JSX.Element
  /**
   * @description 列数据在数据项中对应的路径
   */
  dataIndex: string
  /**
   * @description React组件key，可忽略
   */
  key?: string
  /**
   * @description 设置该列文本对齐方式
   */
  align?: 'left' | 'right' | 'center'
  /**
   * @description 该列单元格内联样式
   */
  style?: React.CSSProperties
  /**
   * @description 该列表头内联样式
   */
  titleStyle?: React.CSSProperties
  /**
   * @description 该列单元格 css 类名
   */
  className?: string
  /**
   * @description 设置该列表头单元格 css 类名
   */
  titleClassName?: string
  /**
   * @description 自定义渲染函数
   */
  render?: (
    text?: any,
    record?: Record<string, any>,
    index?: number,
  ) => JSX.Element | string
  /**
   * @description 列宽，单位px
   * @default 100
   */
  width?: number
  /**
   * @description 表头是否显示排序按钮
   * @default false
   */
  sort?: boolean
  /**
   * @description 排序的受控属性
   */
  sortOrder?: 'ascend' | 'descend' | undefined
  /**
   * @description 固定列
   */
  fixed?: 'left' | 'right'
  /**
   * @description 该列是否启用点击展开收起功能，默认 true
   * @default true
   */
  expandable?: boolean
}

declare const Table: FunctionComponent<ITableProps>

export { Table }
