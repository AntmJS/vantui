import { cloneElement } from 'react'
import { View } from '@tarojs/components'

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

  const newChildren: any = children?.map((child: any, index: number) => {
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
