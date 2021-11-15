import { useState, useEffect, useCallback } from 'react'
import { View, Block } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { Navbar } from '../common/zIndex'
import { getRect, getSystemInfoSync } from '../common/utils'
import { NavBarProps } from '../../types/nav-bar'
import { Icon } from '../icon/index'
import * as computed from './wxs'

export function NavBar(props: NavBarProps) {
  const [height, setHeight] = useState(46)
  const [statusBarHeight, setStatusBarHeight] = useState(44)
  const {
    fixed,
    placeholder,
    border = true,
    zIndex = Navbar,
    safeAreaInsetTop = true,
    leftArrow,
    leftText,
    title,
    rightText,
    renderTitle,
    renderLeft,
    renderRight,
    onClickLeft,
    onClickRight,
    style,
    className,
    ...others
  } = props

  const setNextHeight = useCallback(
    function () {
      if (!fixed || !placeholder) {
        return
      }
      getRect(null, '.van-nav-bar').then((res: any) => {
        if (res && 'height' in res) {
          setHeight(res.height)
        }
      })
    },
    [fixed, placeholder],
  )

  useEffect(function () {
    const { statusBarHeight } = getSystemInfoSync()
    setHeight(46 + statusBarHeight)
    setStatusBarHeight(statusBarHeight)
  }, [])

  useEffect(
    function () {
      setNextHeight()
    },
    [setNextHeight],
  )

  return (
    <Block>
      {fixed && placeholder && (
        <View style={'height: ' + height + 'px;'}></View>
      )}
      <View
        className={
          utils.bem('nav-bar', {
            fixed,
          }) +
          '  ' +
          (border ? 'van-hairline--bottom' : '') +
          ` ${className || ''}`
        }
        style={utils.style([
          computed.barStyle({
            zIndex,
            statusBarHeight,
            safeAreaInsetTop,
          }) +
            '; ' +
            style,
        ])}
        {...others}
      >
        <View className="van-nav-bar__content">
          <View className="van-nav-bar__left" onClick={onClickLeft}>
            {leftArrow || leftText ? (
              <Block>
                {leftArrow && (
                  <Icon
                    size={64}
                    name="arrow-left"
                    className="van-nav-bar__arrow"
                  ></Icon>
                )}
                {leftText && (
                  <View
                    className="van-nav-bar__text"
                    hoverClass="van-nav-bar__text--hover"
                    hoverStayTime={70}
                  >
                    {leftText}
                  </View>
                )}
              </Block>
            ) : (
              renderLeft
            )}
          </View>
          <View className="van-nav-bar__title title-class van-ellipsis">
            {title ? <Block>{title}</Block> : renderTitle}
          </View>
          <View className="van-nav-bar__right" onClick={onClickRight}>
            {rightText ? (
              <View
                className="van-nav-bar__text"
                hoverClass="van-nav-bar__text--hover"
                hoverStayTime={70}
              >
                {rightText}
              </View>
            ) : (
              renderRight
            )}
          </View>
        </View>
      </View>
    </Block>
  )
}
export default NavBar
