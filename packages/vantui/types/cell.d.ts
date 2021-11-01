import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CellProps extends StandardProps {
  url?: string
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  title?: string | number
  value?: string | number
  icon?: string
  size?: 'large'
  label?: string
  center?: boolean
  isLink?: boolean
  required?: boolean
  clickable?: boolean
  titleWidth?: string
  style?: string
  arrowDirection?: 'left' | 'up' | 'down'
  border?: boolean
  titleStyle?: string
  renderTitle?: ReactNode
  renderIcon?: ReactNode
  renderLabel?: ReactNode
  renderRightIcon?: ReactNode
  renderExtra?: ReactNode
  children?: ReactNode | JSX.Element | JSX.Element[]
}

declare const Cell: ComponentClass<CellProps>

export { Cell }
