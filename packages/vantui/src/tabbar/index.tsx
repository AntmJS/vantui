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
  const [height, setHeight] = useState(50)
  // const current = props.active != null ? props.active : currentActive

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
      onChange?.({ detail: data })
    },
    [onChange],
  )

  useEffect(
    function () {
      if (!fixed || !placeholder) {
        return
      }
      nextTick(() => {
        getRect(null, '.van-tabbar').then((res: any) => {
          setHeight(res.height)
        })
      })
    },
    [fixed, placeholder],
  )

  const newChildren = useMemo(() => {
    const tabs = parseTabList(children)
    return tabs.map((tab, index) => {
      return cloneElement(tab.node, {
        key: index,
        index: index,
        active: active,
        activeColor: activeColor,
        inactiveColor: inactiveColor,
        onChange: _change,
      })
    })
  }, [active, activeColor, inactiveColor])

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
