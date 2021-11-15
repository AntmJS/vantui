import { Component } from 'react'

import { GridItem, Grid, SidebarItem, Sidebar, Notify } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  onChange = (event) => {
    Notify.show({
      type: 'primary',
      message: `切换至第${event.detail}项`,
    })
  }

  render() {
    return (
      <DemoPage title="Sidebar 侧边导航">
        <>
          <Grid columnNum={2} border={false}>
            <GridItem>
              <h3 className="demo-sidebar-title">基础用法</h3>
              <Sidebar className="custom-sidebar" activeKey={0}>
                <SidebarItem title="标签名"></SidebarItem>
                <SidebarItem title="标签名"></SidebarItem>
                <SidebarItem title="标签名"></SidebarItem>
              </Sidebar>
            </GridItem>
            <GridItem>
              <h3 className="demo-sidebar-title">徽标提示</h3>
              <Sidebar className="custom-sidebar" activeKey={0}>
                <SidebarItem title="标签名" dot></SidebarItem>
                <SidebarItem title="标签名" badge="5"></SidebarItem>
                <SidebarItem title="标签名" badge="99+"></SidebarItem>
              </Sidebar>
            </GridItem>
            <GridItem>
              <h3 className="demo-sidebar-title">禁用选项</h3>
              <Sidebar className="custom-sidebar" activeKey={0}>
                <SidebarItem title="标签名"></SidebarItem>
                <SidebarItem title="标签名" disabled></SidebarItem>
                <SidebarItem title="标签名"></SidebarItem>
              </Sidebar>
            </GridItem>
            <GridItem>
              <h3 className="demo-sidebar-title">监听切换事件</h3>
              <Sidebar
                className="custom-sidebar"
                onChange={this.onChange}
                activeKey={0}
              >
                <SidebarItem title="标签名 1"></SidebarItem>
                <SidebarItem title="标签名 2"></SidebarItem>
                <SidebarItem title="标签名 3"></SidebarItem>
              </Sidebar>
            </GridItem>
          </Grid>
          <Notify id="van-notify"></Notify>
        </>
      </DemoPage>
    )
  }
}
