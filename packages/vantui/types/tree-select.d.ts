import { ComponentClass, TouchEvent } from 'react'
import { StandardProps } from '@tarojs/components'
import { ReactNode } from 'packages/vantui-demo/node_modules/@types/react'
export interface TreeSelectProps extends StandardProps {
  items?: {
    // 导航名称
    text: number | string
    // 导航名称右上角徽标，1.5.0 版本开始支持
    badge?: number | string
    // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
    dot?: boolean
    // 禁用选项
    disabled?: boolean
    // 该导航下所有的可选项
    children?: {
      // 名称
      text: number | string
      // id，作为匹配选中状态的标识
      id: number | string
      // 禁用选项
      disabled?: boolean
    }[]
  }[]
  activeId?: string | number | number[] | string[]
  mainActiveIndex?: number
  value?: number
  height?: number | string
  max?: number
  selectedIcon?: string
  onClickItem?: (
    event: TouchEvent & {
      detail: {
        // 名称
        text: string
        // id，作为匹配选中状态的标识
        id: string | number
        // 禁用选项
        disabled?: boolean
      }
    },
  ) => void
  onClickNav?: (event: { detail: { index: number } }) => void
  renderContent?: ReactNode
}
declare const TreeSelect: ComponentClass<TreeSelectProps>
export { TreeSelect }
