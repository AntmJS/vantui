import { Sidebar, SidebarItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Sidebar activeKey={0}>
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" />
    </Sidebar>
  )
}
