import { cloneElement, useMemo } from 'react'
import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { CheckboxGroupProps } from '../../../types/checkbox-group'

export default function Index(props: CheckboxGroupProps) {
  const {
    max,
    value = [],
    disabled = false,
    direction = 'vertical',
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  const newChildren: any = useMemo(() => {
    return children?.map((child: any, index: number) => {
      return cloneElement(child, {
        key: index,
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
  }, [children, direction, disabled, max, value, onChange])

  return (
    <View
      className={
        utils.bem('checkbox-group', [
          {
            horizontal: direction === 'horizontal',
          },
        ]) + ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}
