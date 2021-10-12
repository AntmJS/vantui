import { Block, View } from '@tarojs/components'
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
    tabs2: [1, 2],
    tabs3: [1, 2, 3],
    tabs4: [1, 2, 3, 4],
    tabs6: [1, 2, 3, 4, 5, 6],
    tabsWithName: [
      { name: 'a', index: 1 },
      { name: 'b', index: 2 },
      { name: 'c', index: 3 },
    ],
  }

  onClickDisabled = (event) => {
    Taro.showToast({
      title: `标签 ${event.detail.index + 1} 已被禁用`,
      icon: 'none',
    })
  }

  onChange = (event) => {
    Taro.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none',
    })
  }

  onClickNavRight = () => {
    Taro.showToast({
      title: '点击 right nav',
      icon: 'none',
    })
  }

  onClick = (event) => {
    Taro.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none',
    })
  }

  render() {
    const { tabs4, tabsWithName, tabs6, tabs3, tabs2 } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Tabs active={1} onChange={this.onChange}>
            {tabs4.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="通过名称匹配">
          <Tabs active="b">
            {tabsWithName.map((item, index) => {
              return (
                <Tab
                  key={item.index}
                  name={item.name}
                  title={'标签 ' + item.index}
                >
                  <View className="content">{'内容' + item.index}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="横向滚动">
          <Tabs>
            {tabs6.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="禁用标签">
          <Tabs onDisabled={this.onClickDisabled}>
            {tabs3.map((item, index) => {
              return (
                <Tab
                  key={item.index}
                  disabled={index === 1}
                  title={'标签 ' + item}
                >
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="样式风格">
          <Tabs type="card" tabClass="special-tab">
            {tabs3.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content-2">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="点击事件">
          <Tabs onClick={this.onClick}>
            {tabs2.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="粘性布局">
          <Tabs sticky>
            {tabs4.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="切换动画">
          <Tabs animated>
            {tabs4.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="滑动切换">
          <Tabs swipeable>
            {tabs4.map((item, index) => {
              return (
                <Tab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
        <DemoBlock title="自定义标题">
          <Tabs
            active={1}
            onChange={this.onChange}
            tabClass="special-tab"
            tabActiveClass="special-tab-active"
            renderNavright={
              <Block>
                <Icon
                  name="search"
                  customClass="right-nav"
                  onClick={this.onClickNavRight}
                ></Icon>
              </Block>
            }
          >
            {tabs4.map((item, index) => {
              return (
                <Tab
                  key={item.index}
                  title={'标签 ' + item}
                  dot={index === 1}
                  info={index === 2 ? 99 : null}
                >
                  <View className="content">{'内容' + item}</View>
                </Tab>
              )
            })}
          </Tabs>
        </DemoBlock>
      </Block>
    )
  }
}
