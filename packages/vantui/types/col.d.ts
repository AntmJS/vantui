import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'
/**
 * @title Col Props
 */
export interface ColProps extends ViewProps {
  /**
   * @description 列元素宽度
   */
  span: number | string
  /**
   * @description 列元素偏移距离
   */
  offset?: number | string
  /**
   * @description 列元素之间的间距（单位为 px）, 从Row上获取
   */
  gutter?: number | string
  children: React.ReactNode
}
/**
 * @title Row Props
 */
export interface RowProps extends ViewProps {
  /**
   * @description 列元素之间的间距（如查输入数字：单位为 px，如果输入字符串，可使用单位rpx）
   */
  gutter?: number | string | [number, number] | [string, string]
  children: React.ReactNode
}

declare const Col: FunctionComponent<ColProps>
declare const Row: FunctionComponent<RowProps>

export { Col, Row }
