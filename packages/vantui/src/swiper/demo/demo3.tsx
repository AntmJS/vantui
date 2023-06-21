import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { images } = COMMON
  return (
    <View className="demo-box">
      <Swiper
        paginationColor="#426543"
        autoPlay="3000"
        initPage={0}
        paginationVisible
        width={300}
        height={200}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo3${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
