import { View } from '@tarojs/components'
import { useState } from 'react'
import { SwiperItemProps } from '../../types/swiper'
import { get } from '../default-props'

export const SwiperItem = (props: SwiperItemProps) => {
  const [d] = useState(get().InfiniteScroll)
  const { children, className, ...others } = {
    ...d,
    ...props,
  }

  return (
    <View className={`van-swiper-item ${className || ''}`} {...others}>
      {children}
    </View>
  )
}

export default SwiperItem
