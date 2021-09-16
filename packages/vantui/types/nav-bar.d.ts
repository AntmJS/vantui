import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface NavBarProps extends StandardProps {
  title?: string
  fixed?: boolean
  placeholder?: boolean
  leftText?: string
  rightText?: string
  customStyle?: string
  leftArrow?: boolean
  border?: boolean
  zIndex?: number
  safeAreaInsetTop?: boolean
  renderTitle?: ReactNode
  renderLeft?: ReactNode
  renderRight?: ReactNode
  onClickLeft?: () => any
  onClickRight?: () => any
}

declare const NavBar: ComponentClass<NavBarProps>

export { NavBar }
