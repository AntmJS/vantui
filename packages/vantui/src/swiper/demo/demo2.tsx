/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Swiper, SwiperItem, Image } from '@antmjs/vantui'
import * as COMMON from './common'
export default function Demo() {
  const { images } = COMMON
  const [initPage1] = react.useState(0)
  const [list, setList] = react.useState(images)

  react.useEffect(() => {
    setTimeout(() => {
      const arr = list.slice()
      arr.splice(1, 1)
      setList(arr)
    }, 3000)
  }, [])

  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
      >
        {list.map((item, index) => {
          return (
            <SwiperItem key={`swiper#demo2${index}`}>
              <Image src={item} fit="cover" width="100%" height="200px" />
            </SwiperItem>
          )
        })}
      </Swiper>
    </View>
  )
}
