import { View } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import { Button, Notify } from '@antmjs/vantui'

export default function Demo() {
  const show = () => Notify.show('通知内容')

  return (
    <View>
      {/*  在页面内添加对应的节点  */}
      <Button onClick={show} type="danger">
        基础用法
      </Button>
      <Notify id="vanNotify" />
      <Button
        onClick={() => navigateTo({ url: '/pages/nav-bar/index' })}
        type="danger"
      >
        跳转也有Notify的页面
      </Button>
    </View>
  )
}
