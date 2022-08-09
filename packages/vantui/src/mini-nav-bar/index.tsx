import { navigateBack, reLaunch, getCurrentPages } from '@tarojs/taro'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { Icon } from '../icon'
import {
  getSystemInfoSync,
  getMenuButtonBoundingClientRect,
} from '../common/utils'
import { MiniNavBarProps } from '../../types/mini-nav-bar'
import * as computed from './wxs'

export function MiniNavBar(props: MiniNavBarProps) {
  const [state, setState] = useState({
    height: 40,
    fromTop: 44,
    fromLeft: 7,
    menuHeight: 32,
    menuWidth: 87,
    screenWidth: 375,
  })
  const {
    fixed = true,
    placeholder = true,
    border = true,
    zIndex,
    renderTitle,
    homeUrl,
    buttonColor = 'white',
    title,
    style,
    className,
    ...others
  } = props

  const { height, fromTop, fromLeft, menuHeight, menuWidth, screenWidth } =
    state

  const handleGoBack = useCallback(() => {
    navigateBack({
      delta: 1,
    })
  }, [])

  const handleGoHome = useCallback(() => {
    reLaunch({
      url: homeUrl,
    })
  }, [homeUrl])

  const [backButton, setBackButton] = useState(false)
  const [homeButton, setHomeButton] = useState(false)

  useEffect(() => {
    const pages = getCurrentPages()
    if (pages.length >= 1) {
      const ins: any = pages[pages.length - 1]
      const url = ins.route || ins.__route__ || ins['$taroPath']
      if (url !== homeUrl) {
        setHomeButton(true)
      }
      if (pages.length > 1) {
        setBackButton(true)
      }
    }
  }, [homeUrl])

  useEffect(() => {
    const sysInfo = getSystemInfoSync()
    const menuInfo = getMenuButtonBoundingClientRect()
    if (sysInfo && menuInfo) {
      setState({
        height: (menuInfo.top - sysInfo.statusBarHeight) * 2 + menuInfo.height,
        fromTop: sysInfo.statusBarHeight,
        fromLeft: sysInfo.screenWidth - menuInfo.right,
        menuHeight: menuInfo.height,
        menuWidth: menuInfo.width,
        screenWidth: sysInfo.screenWidth,
      })
    }
  }, [])

  const getMiniNavbarHeight = useMemo(() => {
    return utils.style([
      computed.barStyle({
        zIndex,
        fromTop,
        height,
        fromLeft,
      }) +
        '; ' +
        style,
    ])
  }, [zIndex, fromTop, height, fromLeft, style])

  return (
    <>
      {fixed && placeholder && <View style={getMiniNavbarHeight}></View>}
      <View
        className={
          utils.bem('mini-nav-bar', {
            fixed,
          }) +
          '  ' +
          (border ? 'van-hairline--bottom' : '') +
          ` ${className || ''}`
        }
        style={getMiniNavbarHeight}
        {...others}
      >
        <View className="van-mini-nav-bar__content">
          <View
            className="van-mini-nav-bar__left"
            style={{ left: `${fromLeft}px` }}
          >
            {backButton && (
              <View
                className={`van-mini-nav-bar__left-menu van-mini-nav-bar__left-menu-${buttonColor}`}
                onClick={handleGoBack}
                style={{
                  width: `${menuHeight}px`,
                  height: `${menuHeight}px`,
                }}
              >
                <Icon name="arrow-left" size={40} />
              </View>
            )}
            {homeButton && (
              <View
                className={`van-mini-nav-bar__left-menu van-mini-nav-bar__left-menu-${buttonColor}`}
                onClick={handleGoHome}
                style={{
                  width: `${menuHeight}px`,
                  height: `${menuHeight}px`,
                }}
              >
                <Icon name="wap-home" size={40} />
              </View>
            )}
          </View>
          <View
            className="van-mini-nav-bar__title title-class van-ellipsis"
            style={{ width: `${screenWidth - menuWidth * 2 - fromLeft * 4}px` }}
          >
            {title ? <>{title}</> : renderTitle}
          </View>
          <View className="van-mini-nav-bar__right"></View>
        </View>
      </View>
    </>
  )
}

export default MiniNavBar
