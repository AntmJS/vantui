import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface NavBarProps extends StandardProps {
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

export interface MiniNavBarProps extends StandardProps {
  homeUrl: string
  buttonColor?: 'white' | 'black'
  title?: string
  fixed?: boolean
  placeholder?: boolean
  style?: string
  border?: boolean
  zIndex?: number
  renderTitle?: ReactNode
}

declare const MiniNavBar: FunctionComponent<MiniNavBarProps>

export { NavBar, MiniNavBar }
