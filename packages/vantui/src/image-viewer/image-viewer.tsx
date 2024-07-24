/* eslint-disable import/no-named-as-default */
import { View } from '@tarojs/components'
import { useState } from 'react'
import Swiper from '../swiper'
import SwiperItem from '../swiper-item'
import Overlay from '../overlay'
import Image from '../image'
import { ImageViewerProps } from '../../types/index'
import { close } from './trigger'

const preCls = 'van-image-viewer'

export function ImageViewer(props: ImageViewerProps): JSX.Element {
  const { list = [], currentIndex = 0 } = props
  const [current, setCurrent] = useState(currentIndex)

  return (
    <View className={preCls} onClick={close}>
      <Overlay show />
      <View className={`${preCls}-main`}>
        <Swiper
          // width={375}
          initPage={current}
          autoPlay={0}
          onChange={(v) => setCurrent(v)}
          pageContent={
            <View className="page-desc">
              {current + 1}/{list.length}
            </View>
          }
        >
          {list.map((item, index) => (
            <SwiperItem key={`ImageViewer#${index}`}>
              <Image src={item} fit="widthFix" width="100%" height="100%" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    </View>
  )
}

export default ImageViewer
