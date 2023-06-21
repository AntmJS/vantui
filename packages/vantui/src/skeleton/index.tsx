import { pxTransform } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { SkeletonProps } from '../../types/skeleton'

export function Skeleton(props: SkeletonProps) {
  const [state, setState] = useState({
    isArray: false,
    rowArray: [],
  })
  const { isArray, rowArray } = state
  const {
    row = 0,
    animate = true,
    avatar,
    avatarShape = 'round',
    avatarSize = pxTransform(64),
    titleWidth = '40%',
    title,
    rowWidth = '100%',
    loading = true,
    children,
    style,
    className,
    ...others
  } = props

  useEffect(
    function () {
      setState((pre: any) => {
        // @ts-ignore
        return { ...pre, rowArray: Array.from({ length: row }) }
      })
    },
    [row],
  )

  useEffect(
    function () {
      setState((pre: any) => {
        return { ...pre, isArray: (rowWidth as any) instanceof Array }
      })
    },
    [rowWidth],
  )

  return loading ? (
    <View
      className={
        ' ' +
        utils.bem('skeleton', [
          {
            animate,
          },
        ]) +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      {avatar && (
        <View
          className={
            'avatar-class ' + utils.bem('skeleton__avatar', [avatarShape])
          }
          style={'width:' + avatarSize + ';height:' + avatarSize}
        ></View>
      )}
      <View className={utils.bem('skeleton__content')}>
        {title && (
          <View
            className={'title-class ' + utils.bem('skeleton__title')}
            style={'width:' + titleWidth}
          ></View>
        )}
        {rowArray.map((_item, index) => {
          return (
            <View
              key={index}
              className={'row-class ' + utils.bem('skeleton__row')}
              style={'width:' + (isArray ? rowWidth[index] : rowWidth)}
            ></View>
          )
        })}
      </View>
    </View>
  ) : (
    <View className={utils.bem('skeleton__content')}>{children}</View>
  )
}
export default Skeleton
