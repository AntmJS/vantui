export interface BaseRecord {
  /**
   * 列表项的唯一标识
   * @default undefined
   * @description 列表项的唯一标识，同React中的key，必须唯一
   */
  key: string
}

export interface WaterfallFlowProps<TRecord extends BaseRecord = any> {
  /**
   * 列数
   * @default 2
   * @description 瀑布流的列数
   */
  columnNum?: number
  /**
   * 数据源
   * @default undefined
   * @description 数据源
   */
  dataSource: TRecord[]
  /**
   * 渲染项
   * @description 渲染列表项的方法
   */
  renderItem: (item: TRecord, forceResize: () => void) => React.ReactNode
  /**
   * 间距
   * @default 0
   * @description 元素间距
   */
  gutter?: number | [number, number]
  /**
   * 元素延迟计算时间
   * @default 0
   * @description 延迟计算元素尺寸的时间，单位ms
   */
  calculationDelay?: number
}
