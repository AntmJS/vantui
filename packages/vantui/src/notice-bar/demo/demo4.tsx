import { View } from '@tarojs/components'
import { NoticeBar } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      {/*  closeable 模式，在右侧显示关闭按钮  */}
      <NoticeBar mode="closeable" text="技术是开发它的人的共同灵魂。" />
      {/*  link 模式，在右侧显示链接箭头  */}
      <NoticeBar mode="link" text="技术是开发它的人的共同灵魂。" />
    </View>
  )
}
