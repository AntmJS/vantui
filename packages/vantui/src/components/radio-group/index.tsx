import { cloneElement, useMemo } from 'react'
import { View } from '@tarojs/components'
import { isArray } from '../wxs/array'

import * as utils from '../wxs/utils'
import { RadioGroupProps } from '../../../types/radio-group'

export default function Index(props: RadioGroupProps) {
  const {
    value = null,
    direction = 'vertical',
    disabled = false,
    onChange,
    children,
    style,
    className,
    ...others
  } = props

  const newChildren: any = useMemo(() => {
    const _children = isArray(children) ? children : [children]
    return _children?.map((child: any, index: number) => {
      return cloneElement(child, {
        key: index,
        value,
        onChange,
        parent: {
          data: {
            disabled,
            direction,
          },
        },
      })
    })
  }, [children, direction, disabled, onChange, value])

  return (
    <View
      className={utils.bem('radio-group', [direction]) + ` ${className || ''}`}
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}
