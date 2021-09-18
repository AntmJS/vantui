import { cloneElement } from 'react'
import { View } from '@tarojs/components'

import { CollapseProps } from '../../../types/collapse'

export default function Index(props: CollapseProps) {
  const {
    value,
    accordion,
    border = true,
    onOpen,
    onClose,
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  // const updateExpanded = function () {
  //   children?.forEach?.((child: any) => {
  //     child.updateExpanded()
  //   })
  // }

  const handleSwitch = function (name: any, expanded: any) {
    console.log('222: ', name, expanded)
    const changeItem = name
    if (!accordion) {
      name = expanded
        ? (value || []).concat(name)
        : (value || []).filter((activeName) => activeName !== name)
    } else {
      name = expanded ? name : ''
    }
    if (expanded) {
      onOpen?.(changeItem)
    } else {
      onClose?.(changeItem)
    }
    onChange?.(name)
  }

  const newChildren: any = children?.map((child: any, index: number) => {
    return cloneElement(child, {
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

  return (
    <View
      className={
        'custom-class van-collapse ' +
        (border ? 'van-hairline--top-bottom' : '') +
        ` ${className}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}