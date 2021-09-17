import { cloneElement } from 'react'
import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { CheckboxGroupProps } from '../../../types/checkbox-group'

export default function Index(props: CheckboxGroupProps) {
  const {
    max,
    value = [],
    disabled,
    direction,
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  const newChildren: any = children.map((child: any) => {
    return cloneElement(child, {
      value: value.indexOf(child.props?.name) !== -1,
      onChange,
      parent: {
        value,
        data: {
          max,
          disabled,
          direction,
        },
      },
    })
  })

  return (
    <View
      className={
        utils.bem('checkbox-group', [
          {
            horizontal: direction === 'horizontal',
          },
        ]) + ` ${className}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}
