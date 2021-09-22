import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

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
  onClickLeft?: (e: ITouchEvent) => void
  onClickRight?: (e: ITouchEvent) => void
}

declare const NavBar: ComponentClass<NavBarProps>

export { NavBar }
