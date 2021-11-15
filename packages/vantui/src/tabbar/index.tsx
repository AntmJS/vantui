import Taro from '@tarojs/taro'
import {
  useState,
  isValidElement,
  cloneElement,
  useEffect,
  useCallback,
} from 'react'
import toArray from 'rc-util/lib/Children/toArray'
import { View, Block } from '@tarojs/components'
import { Tabbar as InnerTabbar } from '../common/zIndex'
import * as utils from '../wxs/utils'
import { getRect } from '../common/utils'
import { TabbarProps } from '../../types/tabbar'
import { TabbarItemProps } from '../../types/tabbar-item'

function parseTabList(children: React.ReactNode): any[] {
  return toArray(children)
    .map((node: React.ReactElement<TabbarItemProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          key,
          ...node.props,
          node,
        }
      }

      return null
    })
    .filter((tab) => tab)
}

export function Tabbar(props: TabbarProps) {
  const [state, setState]: any = useState({
    height: 50,
    current: 0,
  })
  const { height, current } = state

  const {
    active,
    activeColor,
    inactiveColor,
    border = true,
    fixed = true,
    safeAreaInsetBottom = true,
    zIndex = InnerTabbar,
    placeholder,
    onChange,
    style,
    className,
    children,
    ...others
  } = props
  const _change = useCallback(
    function (data) {
      setState((pre: any) => {
        return {
          ...pre,
          current: data,
        }
      })
      onChange?.({ detail: data })
    },
    [onChange],
  )
  const tabs = parseTabList(children)
  const newChildren: any = tabs.map((tab, index) => {
    return cloneElement(tab.node, {
      key: index,
      index: index,
      active: current,
      activeColor: activeColor,
      inactiveColor: inactiveColor,
      onChange: _change,
    })
  })

  useEffect(
    function () {
      setState((pre: any) => {
        return {
          ...pre,
          current: active,
        }
      })
    },
    [active],
  )

  useEffect(
    function () {
      if (!fixed || !placeholder) {
        return
      }
      Taro.nextTick(() => {
        getRect(null, '.van-tabbar').then((res: any) => {
          setState((pre: any) => {
            return {
              ...pre,
              height: res.height,
            }
          })
        })
      })
    },
    [fixed, placeholder],
  )
  // useEffect(
  //   function () {
  //     if (!Array.isArray(children) || !children.length) {
  //       return
  //     }
  //     children.forEach((child) => child.updateFromParent())
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [active, activeColor, inactiveColor],
  // )

  return (
    <Block>
      <View
        className={
          (border ? 'van-hairline--top-bottom' : '') +
          ' ' +
          utils.bem('tabbar', {
            fixed,
            safe: safeAreaInsetBottom,
          }) +
          ' custom-class' +
          ` ${className || ''}`
        }
        style={utils.style([zIndex ? 'z-index: ' + zIndex : '', style])}
        {...others}
      >
        {newChildren}
      </View>
      {fixed && placeholder && (
        <View style={'height: ' + height + 'px;'}></View>
      )}
    </Block>
  )
}
export default Tabbar
