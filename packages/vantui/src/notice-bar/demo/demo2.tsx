import { View } from '@tarojs/components'
import { NoticeBar } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      {/*  文字较短时，通过设置 scrollable 属性开启滚动播放  */}
      <NoticeBar scrollable text="技术是开发它的人的共同灵魂。" />
      {/*  文字较长时，通过禁用 scrollable 属性关闭滚动播放  */}
      <NoticeBar
        scrollable={false}
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </View>
  )
}
