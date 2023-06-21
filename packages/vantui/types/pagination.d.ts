import { ViewProps } from '@tarojs/components'
import { FunctionComponent, ReactNode } from 'react'

export interface PaginationProps extends ViewProps {
  /**
   * @description 默认页码
   * @default 1
   */
  defaultValue?: number
  /**
   * @description 当前页码
   * @default 1
   */
  modelValue: number
  /**
   * 展示模式
   * @default multi
   */
  mode?: 'multi' | 'simple'
  /**
   * @description 自定义上一页按钮内容
   * @default 上一页
   */
  prevText?: ReactNode
  /**
   * @description 自定义下一页按钮内容
   * @default 下一页
   */
  nextText?: ReactNode
  /**
   * @description 总页数
   * @default 传入或者根据数据量计算
   */
  pageCount?: string | number
  /**
   * @description 总记录数
   * @default 0
   */
  totalItems?: string | number
  /**
   * @description 每页数量
   * @default 10
   */
  itemsPerPage?: string | number
  /**
   * @description 显示页码个数
   * @default 5
   */
  showPageSize?: string | number
  /**
   * @description 是否展示省略号
   * @default false
   */
  forceEllipses?: boolean
  /**
   * @description 自定义渲染页码结构, 入参数为number页数、text文本、 active选中状态
   */
  pageNodeRender?: (page: {
    number: number
    text: string
    active: boolean
  }) => React.ReactNode
  /**
   * @description 页码改变的时候触发
   */
  onChange: (currPage: number) => void
  updatecurrent?: (currPage: number) => void
}

declare const Pagination: FunctionComponent<PaginationProps>

export { Pagination }
