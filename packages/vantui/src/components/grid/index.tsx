import { View } from '@tarojs/components'
import { cloneElement, useCallback, useMemo, useRef, useEffect } from 'react'
import { GridProps } from '../../../types/grid'
import * as utils from '../wxs/utils'
import * as computed from './wxs'

export default function Index(props: GridProps) {
  const {
    gutter = null,
    clickable,
    columnNum = 4,
    center = true,
    border = true,
    direction,
    iconSize,
    square,
    reverse = false,
    className = '',
    style = {},
    ...others
  } = props

  const childrenInstance = useRef<Array<any>>([])

  const updateChildren = useCallback(function () {
    childrenInstance.current.forEach((child) => {
      child.updateStyle()
    })
  }, [])

  useEffect(
    function () {
      updateChildren()
    },
    [updateChildren],
  )

  const setChildrenInstance = useCallback(function (
    index: number,
    instance: any,
  ) {
    childrenInstance.current[index] = instance
  },
  [])

  const ResetChildren = useMemo(
    function () {
      const res: Array<JSX.Element> = []
      if (others.children && Array.isArray(others.children)) {
        others.children.forEach((child, index) => {
          res.push(
            cloneElement(child as JSX.Element, {
              setChildrenInstance,
              key: index,
              index,
              parentInstance: {
                columnNum,
                border,
                square,
                gutter,
                clickable,
                center,
                direction,
                reverse,
                iconSize,
              },
            }),
          )
        })
      }
      return res
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [others.children],
  )

  return (
    <View
      className={
        'van-grid custom-class ' +
        (border && !gutter ? 'van-hairline--top' : '') +
        ' ' +
        className
      }
      style={utils.style([
        computed.rootStyle({
          gutter,
        }),
        style,
      ])}
    >
      {ResetChildren}
    </View>
  )
}
