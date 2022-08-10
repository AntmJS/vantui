import { View } from '@tarojs/components'
import { useCallback, useState, useEffect } from 'react'
import * as utils from '../wxs/utils'
import { SidebarItemProps } from '../../types/sidebar'
import VanInfo from '../info/index'

export function SidebarItem(
  props: SidebarItemProps & {
    setChildren?: any
    index?: number
    setAction?: any
  },
) {
  const {
    dot,
    badge,
    index,
    renderTitle,
    setChildren,
    setAction,
    onClick,
    onChange,
    info,
    title,
    disabled,
    className,
    style,
    ...others
  } = props

  const [selected, setselected] = useState<any>()

  const setActive = useCallback(function (selected) {
    return setselected(selected)
  }, [])

  useEffect(
    function () {
      setChildren?.(index, { setActive, selected })
    },
    [setActive, index, setChildren, selected],
  )

  const onClick_ = useCallback(
    function () {
      if (disabled) return
      setAction(index).then(() => {
        onChange?.({ detail: index } as any)
        onClick?.(index)
      })
    },
    [disabled, index, onChange, onClick, setAction],
  )

  return (
    <View
      className={
        utils.bem('sidebar-item', {
          selected,
          disabled,
        }) +
        ' ' +
        (selected ? 'active-class' : '') +
        ' ' +
        (disabled ? 'disabled-class' : '') +
        ' custom-class' +
        ' ' +
        className
      }
      hoverClass="van-sidebar-item--hover"
      hoverStayTime={70}
      onClick={onClick_}
      style={utils.style([style])}
      {...others}
    >
      <View className="van-sidebar-item__text">
        <>
          {(badge != null || info !== null || dot) && (
            <VanInfo dot={dot} info={badge != null ? badge : info}></VanInfo>
          )}
          {title ? <View>{title}</View> : renderTitle}
        </>
      </View>
    </View>
  )
}
export default SidebarItem
