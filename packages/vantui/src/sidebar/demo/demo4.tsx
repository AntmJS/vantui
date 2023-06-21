import { Sidebar, SidebarItem, Notify } from '@antmjs/vantui'

export default function Demo() {
  return (
    <>
      <Sidebar
        activeKey={0}
        onChange={(e) =>
          Notify.show({
            type: 'primary',
            message: e.detail,
          })
        }
      >
        <SidebarItem title="标签名1" />
        <SidebarItem title="标签名2" />
        <SidebarItem title="标签名3" />
      </Sidebar>
      <Notify />
    </>
  )
}
