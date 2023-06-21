import { View } from '@tarojs/components'
import { NavBar, Icon } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <NavBar
        title="标题"
        leftText="返回"
        leftArrow
        safeAreaInsetTop={false}
        renderRight={<Icon name="search" className="icon" size="36"></Icon>}
      />
    </View>
  )
}
