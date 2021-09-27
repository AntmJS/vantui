import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { ReactNode } from 'packages/vantui-demo/node_modules/@types/react'
export interface TreeSelectProps extends StandardProps {
  items?: any[]
  activeId?: number | number[]
  mainActiveIndex?: number
  value?: number
  height?: number
  max?: number
  selectedIcon?: string
  onClickItem?: (data: {
    // 名称
    text: string
    // id，作为匹配选中状态的标识
    id: string | number
    // 禁用选项
    disabled?: boolean
  }) => void
  onClickNav?: (data: number) => void
  renderContent?: ReactNode
}
declare const TreeSelect: ComponentClass<TreeSelectProps>
export { TreeSelect }
