import { nextTick } from '@tarojs/taro'
import {
  useState,
  isValidElement,
  cloneElement,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import toArray from 'rc-util/lib/Children/toArray'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { getRect } from '../common/utils'
import { TabbarProps, TabbarItemProps } from '../../types/tabbar'

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
    zIndex,
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
  const newChildren: any = useMemo(() => {
    const tabs = parseTabList(children)
    return tabs.map((tab, index) => {
      return cloneElement(tab.node, {
        key: index,
        index: index,
        active: current,
        activeColor: activeColor,
        inactiveColor: inactiveColor,
        onChange: _change,
      })
    })
  }, [children, current, activeColor, inactiveColor, _change])

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
      nextTick(() => {
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
    <>
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
        style={utils.style([zIndex ? 'zIndex: ' + zIndex : '', style])}
        {...others}
      >
        {newChildren}
      </View>
      {fixed && placeholder && (
        <View style={'height: ' + height + 'px;'}></View>
      )}
    </>
  )
}
export default Tabbar
