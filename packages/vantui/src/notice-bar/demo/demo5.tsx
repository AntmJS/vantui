import { View } from '@tarojs/components'
import { NoticeBar, Swiper, SwiperItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <NoticeBar leftIcon="volume-o" scrollable={false}>
      <Swiper
        direction="vertical"
        autoPlay={3000}
        touchable={false}
        height={30}
      >
        <SwiperItem>
          <View style={{ height: 30 }}>明月直入，无心可猜1。</View>
        </SwiperItem>
        <SwiperItem>
          <View style={{ height: 30 }}>明月直入，无心可猜2。</View>
        </SwiperItem>
        <SwiperItem>
          <View style={{ height: 30 }}>明月直入，无心可猜3。</View>
        </SwiperItem>
      </Swiper>
    </NoticeBar>
  )
}
