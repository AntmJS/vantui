import { cloneElement, useCallback, useMemo, Children } from 'react'
import { ITouchEvent, View } from '@tarojs/components'

import { CollapseProps } from '../../types/collapse'

export function Collapse(props: CollapseProps) {
  const {
    value,
    accordion = false,
    border = true,
    onOpen,
    onClose,
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  const handleSwitch = useCallback(
    (event: ITouchEvent, name: any, expanded: any) => {
      const changeItem = name
      if (!accordion && Array.isArray(value)) {
        name = expanded
          ? (value || []).concat(name)
          : (value || []).filter((activeName) => activeName !== name)
      } else {
        name = expanded ? name : ''
      }
      Object.defineProperty(event, 'detail', {
        value: changeItem,
        writable: true,
      })
      if (expanded) {
        onOpen?.(event)
      } else {
        onClose?.(event)
      }
      event.detail = name
      onChange?.(event)
    },
    [value, accordion, onOpen, onClose, onChange],
  )

  const newChildren: any = useMemo(() => {
    return Children.map(children, (child: any, index: number) => {
      return cloneElement(child, {
        key: index,
        parent: {
          index,
          handleSwitch,
          data: {
            value,
            accordion,
          },
        },
      })
    })
  }, [children, value, accordion, handleSwitch])

  return (
    <View
      className={
        ' van-collapse ' +
        (border ? 'van-hairline--top-bottom' : '') +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}
export default Collapse
