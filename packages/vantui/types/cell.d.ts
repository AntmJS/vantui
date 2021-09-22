import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CellProps extends StandardProps {
  url?: string
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  title?: string
  value?: string | number
  icon?: string
  size?: string
  label?: string
  center?: boolean
  isLink?: boolean
  required?: boolean
  clickable?: boolean
  titleWidth?: string
  customStyle?: string
  arrowDirection?: string
  useLabelSlot?: boolean
  border?: boolean
  titleStyle?: string
  renderIcon?: ReactNode
  renderTitle?: ReactNode
  renderLabel?: ReactNode
  renderRighticon?: ReactNode
  renderExtra?: ReactNode
  children?: ReactNode | JSX.Element | JSX.Element[]
}

declare const Cell: ComponentClass<CellProps>

export { Cell }
