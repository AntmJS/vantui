import { FunctionComponent, TouchEvent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
export interface TreeSelectProps extends ViewProps {
  /**
   * @description 分类显示所需的数据
   * @default []
   */
  items?: {
    text: number | string
    badge?: number | string
    dot?: boolean
    disabled?: boolean
    children?: {
      text: number | string
      id: number | string
      disabled?: boolean
    }[]
  }[]
  /**
   * @description 右侧选中项的 id，支持传入数组
   * @default -
   */
  activeId?: string | number | number[] | string[]
  /**
   * @description 	左侧选中项的索引
   * @default 0
   */
  mainActiveIndex?: number
  /**
   * @description 高度，默认单位为px
   * @default 300
   */
  height?: number | string
  /**
   * @description 	右侧项最大选中个数
   * @default Infinity
   */
  max?: number
  /**
   * @description 	自定义右侧栏选中状态的图标
   * @default success
   */
  selectedIcon?: string
  /**
   * @description 		点击右侧选择项时触发
   */
  onClickItem?: (
    event: TouchEvent & {
      detail: {
        text: string
        id: string | number
        disabled?: boolean
      }
    },
  ) => void
  /**
   * @description 		点击左侧导航时触发
   */
  onClickNav?: (event: { detail: { index: number } }) => void
  /**
   * @description 	自定义右侧的显示内容
   */
  renderContent?: ReactNode
}
declare const TreeSelect: FunctionComponent<TreeSelectProps>
export { TreeSelect }
