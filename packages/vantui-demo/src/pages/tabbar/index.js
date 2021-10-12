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
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    active: 0,
    active2: 'home',
    active3: 0,
    active4: 0,
    active5: 0,
    active6: 0,
    icon: {
      normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
      active: 'https://img.yzcdn.cn/vant/user-active.png',
    },
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({ [key]: event.detail })
  }

  handleChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({ [key]: event.detail })
    Taro.showToast({ title: `点击标签 ${event.detail + 1}`, icon: 'none' })
  }

  render() {
    const { active, active2, active3, active4, icon, active5, active6 } =
      this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Tabbar
            active={active}
            data-key="active"
            className="tabbar-position"
            safeAreaInsetBottom={false}
            onChange={this.onChange}
          >
            <TabbarItem icon="home-o">标签</TabbarItem>
            <TabbarItem icon="search">标签</TabbarItem>
            <TabbarItem icon="friends-o">标签</TabbarItem>
            <TabbarItem icon="setting-o">标签</TabbarItem>
          </Tabbar>
        </DemoBlock>
        <DemoBlock title="通过名称匹配">
          <Tabbar
            active={active2}
            data-key="active2"
            className="tabbar-position"
            safeAreaInsetBottom={false}
            onChange={this.onChange}
          >
            <TabbarItem name="home" icon="home-o">
              标签
            </TabbarItem>
            <TabbarItem name="search" icon="search">
              标签
            </TabbarItem>
            <TabbarItem name="friends" icon="friends-o">
              标签
            </TabbarItem>
            <TabbarItem name="setting" icon="setting-o">
              标签
            </TabbarItem>
          </Tabbar>
        </DemoBlock>
        <DemoBlock title="显示徽标">
          <Tabbar
            active={active3}
            data-key="active3"
            className="tabbar-position"
            safeAreaInsetBottom={false}
            onChange={this.onChange}
          >
            <TabbarItem icon="home-o">标签</TabbarItem>
            <TabbarItem icon="search" dot>
              标签
            </TabbarItem>
            <TabbarItem icon="friends-o" info="5">
              标签
            </TabbarItem>
            <TabbarItem icon="setting-o" info="20">
              标签
            </TabbarItem>
          </Tabbar>
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <Tabbar
            active={active4}
            data-key="active4"
            className="tabbar-position"
            safeAreaInsetBottom={false}
            onChange={this.onChange}
          >
            <TabbarItem
              info="3"
              renderIcon={
                <Block>
                  <Image
                    src={icon.normal}
                    mode="aspectFit"
                    style="width: 30px; height: 18px;"
                  ></Image>
                </Block>
              }
              renderIconactive={
                <Block>
                  <Image
                    src={icon.active}
                    mode="aspectFit"
                    style="width: 30px; height: 18px;"
                  ></Image>
                </Block>
              }
            >
              自定义
            </TabbarItem>
            <TabbarItem icon="search">标签</TabbarItem>
            <TabbarItem icon="setting-o">标签</TabbarItem>
          </Tabbar>
        </DemoBlock>
        <DemoBlock title="自定义颜色">
          <Tabbar
            active={active5}
            data-key="active5"
            className="tabbar-position"
            activeColor="#07c160"
            inactiveColor="#000"
            safeAreaInsetBottom={false}
            onChange={this.onChange}
          >
            <TabbarItem icon="home-o">标签</TabbarItem>
            <TabbarItem icon="search">标签</TabbarItem>
            <TabbarItem icon="friends-o">标签</TabbarItem>
            <TabbarItem icon="setting-o">标签</TabbarItem>
          </Tabbar>
        </DemoBlock>
        <DemoBlock title="切换标签事件">
          <Tabbar
            active={active6}
            data-key="active6"
            className="tabbar-position"
            safeAreaInsetBottom={false}
            onChange={this.handleChange}
          >
            <TabbarItem icon="home-o">标签1</TabbarItem>
            <TabbarItem icon="search">标签2</TabbarItem>
            <TabbarItem icon="friends-o">标签3</TabbarItem>
            <TabbarItem icon="setting-o">标签4</TabbarItem>
          </Tabbar>
        </DemoBlock>
      </Block>
    )
  }
}
