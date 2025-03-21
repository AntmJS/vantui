import { View } from '@tarojs/components'
import { useState } from 'react'
import * as utils from '../wxs/utils'
import { TagProps } from '../../types/tag'
import { Icon } from '../icon'
import { get } from '../default-props'
import * as computed from './wxs'

export function Tag(props: TagProps) {
  const [d] = useState(get().Tag)

  const {
    type = 'default',
    size,
    mark,
    plain,
    round,
    color,
    textColor,
    closeable,
    children,
    onClose,
    style,
    className,
    ...others
  } = {
    ...d,
    ...props,
  }

  return (
    <View
      className={
        ' ' +
        utils.bem('tag', [
          type,
          size,
          {
            mark,
            plain,
            round,
          },
        ]) +
        ` ${className || ''}`
      }
      style={utils.style([
        computed.rootStyle({
          plain,
          color,
          textColor,
        }),
        style,
      ])}
      {...others}
    >
      {children}
      {closeable && (
        <Icon name="cross" className="van-tag__close" onClick={onClose}></Icon>
      )}
    </View>
  )
}
export default Tag
