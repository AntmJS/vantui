/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { images } = COMMON
  const [current, setCurrent] = react.useState(0)

  const style: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 46,
    height: 22,
    background: 'rgba(0,0,0,.33)',
    borderRadius: 22,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  }

  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationVisible
        paginationColor="#426543"
        autoPlay="3000"
        initPage={current}
        onChange={(e) => setCurrent(e + 1)}
        pageContent={<div style={style}> {current}/4 </div>}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo4${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
