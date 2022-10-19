import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface NavBarProps extends ViewProps {
  title?: ReactNode
  fixed?: boolean
  placeholder?: boolean
  leftText?: ReactNode
  rightText?: ReactNode
  style?: string
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

declare const NavBar: FunctionComponent<NavBarProps>

export { NavBar }
