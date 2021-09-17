import { cloneElement } from 'react'
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

  const newChildren: any = children.map((child: any) => {
    return cloneElement(child, {
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
