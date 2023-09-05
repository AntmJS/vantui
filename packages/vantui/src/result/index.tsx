import { View, Text } from '@tarojs/components'
import { Icon } from '../icon'
import { IResultProps } from '../../types/result'

export default function Index(props: IResultProps): JSX.Element {
  const {
    className,
    title,
    style,
    message,
    type,
    extra,
    iconSize,
    renderIcon,
  } = props

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
