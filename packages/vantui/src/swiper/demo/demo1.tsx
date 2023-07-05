/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'

const { images } = COMMON

export default function Demo() {
  const [initPage1] = react.useState(0)
  const [height, setHeight] = react.useState(200)

  react.useEffect(() => {
    setTimeout(() => {
      setHeight(220)
    }, 2000)
  })

  return (
    <View className="demo-box">
      <Swiper
        height={height}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo1${index}`}>
            <Image src={item} fit="cover" width="100%" height={`${height}px`} />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
