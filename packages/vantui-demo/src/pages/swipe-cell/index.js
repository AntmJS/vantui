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
  notify,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  onClose = (event) => {
    const { position, instance } = event.detail
    switch (position) {
      case 'left':
      case 'cell':
        instance.close()
        break
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？',
        }).then(() => {
          instance.close()
        })
        break
    }
  }
  onOpen = (event) => {
    const { position, name } = event.detail
    switch (position) {
      case 'left':
        notify({
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`,
        })
        break
      case 'right':
        notify({
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`,
        })
        break
    }
  }

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <SwipeCell
            rightWidth={65}
            leftWidth={65}
            renderLeft={
              <Block>
                <View className="van-swipe-cell__left">选择</View>
              </Block>
            }
            renderRight={
              <Block>
                <View className="van-swipe-cell__right">删除</View>
              </Block>
            }
          >
            <CellGroup>
              <Cell title="单元格" value="内容"></Cell>
            </CellGroup>
          </SwipeCell>
        </DemoBlock>
        <DemoBlock title="异步关闭">
          <SwipeCell
            id="swipe-cell"
            rightWidth={65}
            leftWidth={65}
            asyncClose
            onClose={this.onClose}
            renderLeft={
              <Block>
                <View className="van-swipe-cell__left">选择</View>
              </Block>
            }
            renderRight={
              <Block>
                <View className="van-swipe-cell__right">删除</View>
              </Block>
            }
          >
            <CellGroup>
              <Cell title="单元格" value="内容"></Cell>
            </CellGroup>
          </SwipeCell>
        </DemoBlock>
        <DemoBlock title="主动打开">
          <SwipeCell
            id="swipe-cell2"
            rightWidth={65}
            leftWidth={65}
            name="示例"
            onOpen={this.onOpen}
            renderLeft={
              <Block>
                <View className="van-swipe-cell__left">选择</View>
              </Block>
            }
            renderRight={
              <Block>
                <View className="van-swipe-cell__right">删除</View>
              </Block>
            }
          >
            <CellGroup>
              <Cell title="单元格" value="内容"></Cell>
            </CellGroup>
          </SwipeCell>
        </DemoBlock>
        <Dialog id="van-dialog"></Dialog>
        <Notify id="van-notify"></Notify>
      </Block>
    )
  }
}
