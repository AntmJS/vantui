/* eslint-disable */
import react from 'react'
import { Tabbar, TabbarItem, Image } from '@antmjs/vantui'

export default function Demo() {
  const [active, setActive] = react.useState<string | number>('home')

  return (
    <Tabbar active={active} onChange={(e) => setActive(e.detail)}>
      <TabbarItem
        info="3"
        renderIcon={
          <Image
            src="https://img.yzcdn.cn/vant/user-inactive.png"
            fit="fill"
            style="width: 30px; height: 18px;"
          ></Image>
        }
        renderIconActive={
          <Image
            src="https://img.yzcdn.cn/vant/user-active.png"
            fit="fill"
            style="width: 30px; height: 18px;"
          ></Image>
        }
      >
        自定义
      </TabbarItem>
      <TabbarItem icon="search">标签</TabbarItem>
      <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
  )
}
