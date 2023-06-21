import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'
export default function Demo() {
  const { images } = COMMON

  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationVisible
        autoPlay={3000}
        direction="vertical"
        initPage={0}
        paginationColor="#426543"
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
