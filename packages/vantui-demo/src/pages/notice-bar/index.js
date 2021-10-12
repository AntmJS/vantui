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
    text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
    shortText: '技术是开发它的人的共同灵魂。',
  }

  render() {
    const { text, shortText } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <NoticeBar text={text} leftIcon="volume-o"></NoticeBar>
        </DemoBlock>
        <DemoBlock title="滚动模式">
          <NoticeBar
            scrollable
            text={shortText}
            className="demo-margin-bottom"
          ></NoticeBar>
          <NoticeBar
            scrollable={false}
            text={text}
            customClass="demo-margin-bottom"
          ></NoticeBar>
        </DemoBlock>
        <DemoBlock title="多行展示">
          <NoticeBar wrapable scrollable={false} text={text}></NoticeBar>
        </DemoBlock>
        <DemoBlock title="通知栏模式">
          <NoticeBar mode="closeable" text={shortText}></NoticeBar>
          <NoticeBar
            customClass="margin-top"
            mode="link"
            text={shortText}
          ></NoticeBar>
        </DemoBlock>
        <DemoBlock title="自定义样式">
          <NoticeBar
            text={shortText}
            color="#1989fa"
            background="#ecf9ff"
            leftIcon="info-o"
          ></NoticeBar>
        </DemoBlock>
      </Block>
    )
  }
}
