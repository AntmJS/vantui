import { FunctionComponent, TouchEvent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
export interface TreeSelectProps extends ViewProps {
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
  activeId?: string | number | number[] | string[]
  mainActiveIndex?: number
  value?: number
  height?: number | string
  max?: number
  selectedIcon?: string
  onClickItem?: (
    event: TouchEvent & {
      detail: {
        text: string
        id: string | number
        disabled?: boolean
      }
    },
  ) => void
  onClickNav?: (event: { detail: { index: number } }) => void
  renderContent?: ReactNode
}
declare const TreeSelect: FunctionComponent<TreeSelectProps>
export { TreeSelect }
