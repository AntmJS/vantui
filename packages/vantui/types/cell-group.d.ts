import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CellGroupProps extends StandardProps {
  title?: string
  border?: boolean
  inset?: boolean
  children?: ReactNode
}

declare const CellGroup: ComponentClass<CellGroupProps>

export { CellGroup }
