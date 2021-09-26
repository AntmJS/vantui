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
  onClickItem?: (...args: any[]) => any
  onClickNav?: (...args: any[]) => any
  renderContent?: ReactNode
}
declare const TreeSelect: ComponentClass<TreeSelectProps>
export { TreeSelect }
