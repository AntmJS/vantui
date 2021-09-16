import { useState, cloneElement } from 'react'
import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { RadioGroupProps } from '../../../types/radio-group'

export default function Index(props: RadioGroupProps) {
  const {
    value = null,
    direction,
    disabled,
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  const updateChildren = function () {
    children?.forEach?.((child: any) => child.updateFromParent())
  }

  const newChildren: any = children.map((child: any, index: number) => {
    return cloneElement(child, {
      parent: {
        index,
        updateChildren,
        data: {
          value,
          disabled,
          direction,
        },
      },
    })
  })

  return (
    <View
      className={utils.bem('radio-group', [direction]) + ` ${className}`}
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}
