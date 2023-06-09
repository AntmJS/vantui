import { FunctionComponent } from 'react'
export interface BaseRecord {
  /**
   * @default undefined
   * @description 列表项的唯一标识，同React中的key，必须唯一
   */
  key: string
}

export interface WaterfallFlowProps<TRecord extends BaseRecord = any> {
  /**
   * @default 2
   * @description 瀑布流的列数
   */
  columnNum?: number
  /**
   * @default undefined
   * @description 数据源
   */
  dataSource: TRecord[]
  /**
   * @description 渲染列表项的方法
   */
  renderItem: (item: TRecord, forceResize: () => void) => React.ReactNode
  /**
   * @default 0
   * @description 元素间距
   */
  gutter?: number | [number, number]
  /**
   * @default 0
   * @description 延迟计算元素尺寸的时间，单位ms
   */
  calculationDelay?: number
}

declare const WaterfallFlow: FunctionComponent<WaterfallFlowProps>

export { WaterfallFlow }
