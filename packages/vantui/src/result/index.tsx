import { View, Text } from '@tarojs/components'
import { useState } from 'react'
import { Icon } from '../icon'
import { IResultProps } from '../../types/result'
import { get } from '../default-props'

export default function Index(props: IResultProps): JSX.Element {
  const [d] = useState(get().Result)
  const {
    className,
    title,
    style,
    message,
    type,
    extra,
    iconSize,
    renderIcon,
  } = {
    ...d,
    ...props,
  }

  return (
    <View className={`van-result ${className}`} style={style}>
      <View className="van-result-main">
        {type && !renderIcon && (
          <View className="van-result-image">
            <Icon
              name={type}
              size={iconSize || 120}
              classPrefix="van-icon-result"
            />
          </View>
        )}
        {renderIcon && <View className="van-result-image">{renderIcon}</View>}
        <View className="van-result-title">{title}</View>
        <View className="van-result-message">
          <Text>{message}</Text>
        </View>
      </View>
      {extra}
    </View>
  )
}
