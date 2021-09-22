import { View, Image } from '@tarojs/components'
import { EmptyProps } from '../../../types/empty'
import * as computed from './wxs'

export default function Index(props: EmptyProps) {
  const {
    image = 'default',
    description,
    renderImage,
    renderDescription,
    style,
    className,
    children,
    ...others
  } = props

  return (
    <View
      className={`custom-class van-empty ${className}`}
      style={style}
      {...others}
    >
      <View className="van-empty__image">{renderImage}</View>
      <View className="van-empty__image">
        {image && (
          <Image
            className="van-empty__image__img"
            src={computed.imageUrl(image)}
          />
        )}
      </View>
      <View className="van-empty__description">{renderDescription}</View>
      <View className="van-empty__description">{description}</View>
      <View className="van-empty__bottom">{children}</View>
    </View>
  )
}
