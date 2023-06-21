import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'
export default function Demo() {
  const { images } = COMMON

  return (
    <View className="demo-box">
      <Swiper
        autoPlay={3000}
        height={150}
        paginationVisible
        width={280}
        isCenter
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo5${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
