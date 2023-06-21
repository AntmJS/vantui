import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface CascaderProps extends ViewProps {
  /**
   * @description 弹窗是否展示
   */
  visible: boolean
  /**
   * @description 选择数据
   */
  options?: CascaderOption[]
  /**
   * @description 当前值
   */
  value?: string[]
  /**
   *  @description 弹窗表单
   */
  title?: string
  /**
   *  @description 级联数据对应文本的key
   */
  textKey?: string
  /**
   *  @description 级联数据对应值的key
   */
  valueKey?: string
  /**
   *  @description 级联数据对应子级的key
   */
  childrenKey?: string
  /**
   * @description 当options为可转换为树形结构的扁平结构时，配置转换规则
   */
  convertConfig?: Record<string, string | number | null>
  /**
   * @description 是否可以手动关闭
   */
  closeable?: boolean
  /**
   * @description 关闭图标的位置
   */
  closeIconPosition?: string
  /**
   * @description 关闭图标
   */
  closeIcon?: string
  /**
   * @description 数据过多时，选中元素是否滚动到中央
   * @default true
   */
  scrollIntoView?: boolean
  /**
   * @description 是否开启动态加载
   */
  lazy?: boolean
  /**
   * @description 动态加载方法
   */
  lazyLoad?: (node: any, resolve: any) => void
  /**
   * @description 弹窗关闭
   */
  onClose?: () => void
  /**
   * @description 选中值改变时触发
   */
  onChange?: (value: any, params: any) => void
  /**
   * @description 选中项改变时触发
   */
  onPathChange?: (value: any, params: any) => void
}

/**
 * @title CascaderConfig
 * @description 默认的`options`的格式
 */
export interface CascaderConfig {
  /**
   *  @description 当前数据对应值
   */
  value?: string
  /**
   *  @description 当前数据文本
   */
  text?: string
  /**
   *  @description 下层级数据
   */
  children?: string
}

/**
 * @title CascaderOption
 * @description 异步操作时的`options`格式
 */
export interface CascaderOption extends Record<string, any> {
  /**
   *  @description 当前数据文本
   */
  text?: string
  /**
   *  @description 当前数据对应值
   */
  value?: number | string
  paneKey?: string
  /**
   * @description 是否可选择
   */
  disabled?: boolean
  /**
   *  @description 下层级数据
   */
  children?: CascaderOption[]
  /**
   * @description 是否有下级
   */
  leaf?: boolean
  /**
   *  @description 第几层
   */
  level?: number
  /**
   *  @description 是否在加载
   */
  loading?: boolean
  /**
   *  @description 是否是根节点
   */
  root?: boolean
}

export type CascaderValue = CascaderOption['value'][]
/**
 * @title convertConfig
 * @description 当options为可转换为树形结构的扁平结构时，配置转换规则
 */
export interface convertConfig {
  /**
   * @description 顶层节点的父级id
   */
  topId?: string | number | null
  /**
   * @description 节点唯一id
   */
  idKey?: string
  /**
   * @description 父节点id的属性名
   */
  pidKey?: string
  /**
   * @description 根据指定字段调用Array.prototype.sort()进行同层排序
   */
  sortKey?: string
}

declare const Cascader: FunctionComponent<CascaderProps>

export { Cascader }
