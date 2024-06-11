import { View } from '@tarojs/components'
import { SwiperItemProps } from '../../types/swiper'

export const SwiperItem = (props: SwiperItemProps) => {
  const { children, className, ...others } = props

  return (
    <View className={`van-swiper-item ${className}`} {...others}>
      {children}
    </View>
  )
}

export default SwiperItem
