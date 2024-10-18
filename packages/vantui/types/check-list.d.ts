import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface CheckListProps extends ViewProps {
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @description 选择提示和弹窗标题
   * @default 请选择
   */
  placeholder?: string
  /**
   * @description 选择提示的颜色
   */
  placeholderColor?: string
  /**
   * @description 搜索过滤的提示
   * @default 请输入搜索关键词
   */
  searchPlaceholder?: string
  /**
   * @description 数据列表
   * @default []
   */
  data?: Array<Record<string, any>>
  /**
   * @description 选择的当前值
   * @default []
   */
  value?: Array<string | number>
  /**
   * @description 是否有全选功能
   * @default false
   */
  checkAll?: boolean
  /**
   * @description 回调方法, 参数一和其他表单统一，参数二选中的具体数据
   */
  onChange?: (
    e: { detail: Array<string | number> },
    d: Array<Record<string, any>>,
  ) => void
  /**
   * @description 选择的数量，和checkAll互斥
   * @default infinity
   */
  limit?: number
  /**
   * @description 数据对象label的key
   * @default name
   */
  labelName?: string
  /**
   * @description 数据对象值的key
   * @default id
   */
  fieldName?: string
  /**
   * @description 勾选容器的高度
   * @default 40vh
   */
  bodyHeight?: string
  /**
   * @description 自定义渲染
   */
  renderShow?: (
    data: Array<Record<string, any>>,
    setShow: () => void,
  ) => React.ReactNode
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
   * @description 是否展示搜索框
   * @default true
   */
  searchShow?: boolean
  /**
   * @description 列表数据加载的loading
   * @default false
   */
  searchLoading?: boolean
  /**
   * @description 是否可以清除
   * @default true
   */
  allowClear?: boolean
  /**
   * @description 加载列表的方法, 此时不需要手动传入`data`
   */
  searchData?: (keyWord: string) => Promise<Array<Record<string, any>>>
}

declare const CheckList: FunctionComponent<CheckListProps>

export { CheckList }
