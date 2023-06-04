export interface WaterfallFlowItemSize {
  width: number
  height: number
}

export interface WaterfallFlowItemAttributes {
  key: string
  left: number
  top: number
  width: number
  height: number
  columnIndex: number // 所在列索引
}

export interface WaterfallFlowColumn {
  height: number
  items: string[]
}

export type Gutter = number | [number, number]
