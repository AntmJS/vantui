import { FunctionComponent, ReactNode } from 'react'

export interface SkuProps {
  /**
   * @description 样式名称
   * @default ''
   */
  className?: string
  /**
   * @description 默认选中的商品名称
   */
  goodsId?: number
  /**
   * @description 规格变化触发，回掉返回选中项商品，首次渲染没有传入`goodsId`，会触发
   */
  onChange?: (goods?: IGoodItem) => void
  /**
   * @description 点击sku`disabled`的属性项触发
   */
  clickAttrDisable?: (goods?: IGoodItem) => void
  /**
   * @description 不可选sku项样式名称
   */
  disabledClassName?: string
  /**
   * @description 选中sku项样式名称
   */
  activeClassName?: string
  /**
   * @description 产品包含的所有商品列表
   */
  goodsList: IGoodItem[]
  /**
   * @description 规格列表
   */
  sku: ISkuItem[]
  /**
   * @description 自定义规格项的内部渲染
   */
  itemRender?: (attr: IAttrItem) => ReactNode
  /**
   * @description 自定义当前规格项组合（即商品）是否可选, 回掉参数为空的时候直接返回true
   */
  itemDisable?: (goodsItem?: IGoodItem) => boolean
  /**
   * @description 初始化的时候是否自动选择商品
   * @default true
   */
  autoChoice?: boolean
}
/**
 * @title 商品项 IGoodItem
 * @description 其它属性不限
 */
export type IGoodItem = {
  /**
   * @description 商品ID
   */
  id: number
  /**
   * @description 对应每个sku的ID
   */
  skuIds: number[]
  /**
   * @description 是否不可选择
   */
  disabled?: boolean
} & Record<string, any>

/**
 * @title Sku项 ISkuItem
 * @description 其它属性不限， 须要保证不同类别的sku的id都是唯一的
 */
export type ISkuItem = {
  /**
   * @description Sku ID
   */
  id: number
  /**
   * @description Sku 名称
   */
  name: string
  /**
   * @description Sku 属性枚举
   */
  items: IAttrItem[]
} & Record<string, any>

/**
 * @title Sku属性项 IAttrItem
 * @description 其它属性不限
 */
export type IAttrItem = {
  /**
   * @description 属性ID
   */
  id: number
  /**
   * @description 属性名称
   */
  name: string
} & Record<string, any>

declare const Sku: FunctionComponent<SkuProps>

export { Sku }
