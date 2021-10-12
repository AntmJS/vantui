import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import {
  ConfigProvider,
  ShareSheet,
  Calendar,
  Skeleton,
  DropdownItem,
  DropdownMenu,
  GridItem,
  Grid,
  IndexAnchor,
  IndexBar,
  Circle,
  Overlay,
  Picker,
  CollapseItem,
  Collapse,
  Rate,
  DatetimePicker,
  TreeSelect,
  Transition,
  Toast,
  Tag,
  TabbarItem,
  Tabbar,
  Tabs,
  Tab,
  Switch,
  Uploader,
  SwipeCell,
  SubmitBar,
  Sticky,
  Steps,
  Stepper,
  Slider,
  SidebarItem,
  Sidebar,
  Search,
  Row,
  RadioGroup,
  Radio,
  Progress,
  Popup,
  Panel,
  Notify,
  NoticeBar,
  NavBar,
  Loading,
  Image,
  Icon,
  GoodsActionButton,
  GoodsActionIcon,
  GoodsAction,
  Field,
  Empty,
  Divider,
  Dialog,
  CountDown,
  Col,
  CheckboxGroup,
  Checkbox,
  CellGroup,
  Cell,
  Card,
  Button,
  Area,
  ActionSheet,
  notify,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  onChange = (event) => {
    notify({
      type: 'primary',
      message: `切换至第${event.detail}项`,
    })
  }

  render() {
    return (
      <Block>
        <Grid columnNum={2} border={false}>
          <GridItem useSlot>
            <h3 className="demo-sidebar-title">基础用法</h3>
            <Sidebar className="custom-sidebar">
              <SidebarItem title="标签名"></SidebarItem>
              <SidebarItem title="标签名"></SidebarItem>
              <SidebarItem title="标签名"></SidebarItem>
            </Sidebar>
          </GridItem>
          <GridItem useSlot>
            <h3 className="demo-sidebar-title">徽标提示</h3>
            <Sidebar className="custom-sidebar">
              <SidebarItem title="标签名" dot></SidebarItem>
              <SidebarItem title="标签名" badge="5"></SidebarItem>
              <SidebarItem title="标签名" badge="99+"></SidebarItem>
            </Sidebar>
          </GridItem>
          <GridItem useSlot>
            <h3 className="demo-sidebar-title">禁用选项</h3>
            <Sidebar className="custom-sidebar">
              <SidebarItem title="标签名"></SidebarItem>
              <SidebarItem title="标签名" disabled></SidebarItem>
              <SidebarItem title="标签名"></SidebarItem>
            </Sidebar>
          </GridItem>
          <GridItem useSlot>
            <h3 className="demo-sidebar-title">监听切换事件</h3>
            <Sidebar className="custom-sidebar" onChange={this.onChange}>
              <SidebarItem title="标签名 1"></SidebarItem>
              <SidebarItem title="标签名 2"></SidebarItem>
              <SidebarItem title="标签名 3"></SidebarItem>
            </Sidebar>
          </GridItem>
        </Grid>
        <Notify id="van-notify"></Notify>
      </Block>
    )
  }
}
