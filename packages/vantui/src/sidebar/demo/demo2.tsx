import { Sidebar, SidebarItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Sidebar activeKey={1}>
      <SidebarItem title="标签名" dot />
      <SidebarItem title="标签名" badge="5" />
      <SidebarItem title="标签名" badge="99+" />
    </Sidebar>
  )
}
