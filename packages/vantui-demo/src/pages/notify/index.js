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

  showNotify = () => {
    notify('通知内容')
  }

  showCustomColor = () => {
    notify({
      message: '自定义颜色',
      color: '#ad0000',
      background: '#ffe1e1',
    })

    notify.clear()
  }

  showCustomDuration = () => {
    notify({
      duration: 1000,
      message: '自定义时长',
    })
  }

  showNotifyByType = (event) => {
    const { type } = event.currentTarget.dataset
    notify({
      type,
      message: '通知内容',
    })
  }

  showSafe = () => {
    notify({
      message: '通知内容',
      safeAreaInsetTop: true,
    })
  }

  render() {
    return (
      <Block>
        <DemoBlock padding title="基础用法">
          <Button type="danger" onClick={this.showNotify}>
            基础用法
          </Button>
        </DemoBlock>
        <DemoBlock padding title="通知类型">
          <View className="demo-margin-bottom">
            <Button
              className="demo-margin-right"
              type="info"
              data-type="primary"
              onClick={this.showNotifyByType}
            >
              主要通知
            </Button>
            <Button
              type="primary"
              data-type="success"
              onClick={this.showNotifyByType}
            >
              成功通知
            </Button>
          </View>
          <View className="demo-margin-bottom">
            <Button
              className="demo-margin-right"
              type="danger"
              data-type="danger"
              onClick={this.showNotifyByType}
            >
              危险通知
            </Button>
            <Button
              type="warning"
              data-type="warning"
              onClick={this.showNotifyByType}
            >
              警告通知
            </Button>
          </View>
        </DemoBlock>
        <DemoBlock padding title="自定义通知">
          <Button
            type="primary"
            className="demo-margin-right"
            onClick={this.showCustomColor}
          >
            自定义颜色
          </Button>
          <Button type="primary" onClick={this.showCustomDuration}>
            自定义时长
          </Button>
        </DemoBlock>
        <DemoBlock padding title="插入状态栏高度">
          <Button
            type="primary"
            className="demo-margin-right"
            onClick={this.showSafe}
          >
            插入状态栏高度
          </Button>
        </DemoBlock>
        <Notify id="van-notify"></Notify>
      </Block>
    )
  }
}
