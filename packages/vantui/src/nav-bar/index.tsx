import { useMemo } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { getSystemInfoSync } from '../common/utils'
import { NavBarProps } from '../../types/nav-bar'
import { Icon } from '../icon'
import * as computed from './wxs'

export function NavBar(props: NavBarProps) {
  const {
    fixed,
    placeholder,
    border = true,
    zIndex,
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

  const statusBarHeight = useMemo(() => {
    const { statusBarHeight: _statusBarHeight } = getSystemInfoSync()
    if (isNaN(_statusBarHeight)) {
      return 22
    }
    return _statusBarHeight
  }, [])

  const getNavBarStyle = useMemo(() => {
    return utils.style([
      computed.barStyle({
        zIndex,
        statusBarHeight,
        safeAreaInsetTop,
        height: 50,
      }) +
        '; ' +
        style,
    ])
  }, [zIndex, statusBarHeight, safeAreaInsetTop, style])

  return (
    <>
      {fixed && placeholder && <View style={getNavBarStyle}></View>}
      <View
        className={
          utils.bem('nav-bar', {
            fixed,
          }) +
          '  ' +
          (border ? 'van-hairline--bottom' : '') +
          ` ${className || ''}`
        }
        style={getNavBarStyle}
        {...others}
      >
        <View className="van-nav-bar__content">
          <View className="van-nav-bar__left" onClick={onClickLeft}>
            {leftArrow || leftText ? (
              <>
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
              </>
            ) : (
              renderLeft
            )}
          </View>
          <View className="van-nav-bar__title van-nav-bar__title-h5  title-class van-ellipsis">
            {title ? <>{title}</> : renderTitle}
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
    </>
  )
}

export default NavBar
