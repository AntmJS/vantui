import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'
export default function Demo() {
  const { images } = COMMON

  return (
    <View className="demo-box">
      <Swiper
        // infinite={false}
        containerSize={375}
        autoPlay={0}
        height={60}
        width={150}
        // isCenter
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo5${index}`}>
            <Image src={item} fit="cover" width="100%" height="100%" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
