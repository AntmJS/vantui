import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SwipeCellProps extends StandardProps {
  disabled?: boolean
  leftWidth?: number
  rightWidth?: number
  asyncClose?: boolean
  name?: string
  catchMove?: boolean
  wrapperStyle?: React.CSSProperties
  onOpen?: (a: any) => void
  onClick?: (a: any) => void
  onClose?: (a: any) => void
  renderLeft?: React.ReactNode
  renderRight?: React.ReactNode
  children?: React.ReactNode
}

declare const SwipeCell: ComponentClass<SwipeCellProps>

export { SwipeCell }
