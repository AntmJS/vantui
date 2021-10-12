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

import icons from '@vant/icons'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    icons,
    active: 0,
    demoIcon: 'chat-o',
    demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
  }

  onSwitch = (event) => {
    this.setState({
      active: event.detail.index,
    })
  }

  render() {
    const { active, demoIcon, demoImage, icons } = this.state
    return (
      <Tabs active={active} color="#1989fa" onChange={this.onSwitch}>
        <Tab title="用法示例" customClass="demo-tab-pane">
          <DemoBlock title="基础用法">
            <Col customClass="col" span="6">
              <Icon name={demoIcon} size="32px" customClass="icon"></Icon>
            </Col>
            <Col customClass="col" span="6">
              <Icon name={demoImage} size="32px" customClass="icon"></Icon>
            </Col>
          </DemoBlock>
          <DemoBlock title="提示信息">
            <Col customClass="col" span="6">
              <Icon name={demoIcon} size="32px" customClass="icon" dot></Icon>
            </Col>
            <Col customClass="col" span="6">
              <Icon
                name={demoIcon}
                size="32px"
                customClass="icon"
                info="9"
              ></Icon>
            </Col>
            <Col customClass="col" span="6">
              <Icon
                name={demoIcon}
                size="32px"
                customClass="icon"
                info="99+"
              ></Icon>
            </Col>
          </DemoBlock>
          <DemoBlock title="图标颜色">
            <Col customClass="col" span="6">
              <Icon
                name={demoIcon}
                size="32px"
                customClass="icon"
                color="#1989fa"
              ></Icon>
            </Col>
            <Col customClass="col" span="6">
              <Icon
                name={demoIcon}
                size="32px"
                customClass="icon"
                color="#07c160"
              ></Icon>
            </Col>
          </DemoBlock>
          <DemoBlock title="图标大小">
            <Col customClass="col" span="6">
              <Icon name={demoIcon} size="40" customClass="icon"></Icon>
            </Col>
            <Col customClass="col" span="6">
              <Icon name={demoIcon} size="3rem" customClass="icon"></Icon>
            </Col>
          </DemoBlock>
        </Tab>
        <Tab title="基础图标" customClass="demo-tab-pane">
          {icons.basic.map((item, index) => {
            return (
              <Col key={item.index} customClass="col" span="6">
                <Icon name={item} size="32px" customClass="icon"></Icon>
                <View className="text">{item}</View>
              </Col>
            )
          })}
        </Tab>
        <Tab title="线框风格" customClass="demo-tab-pane">
          {icons.outline.map((item, index) => {
            return (
              <Col key={item.index} customClass="col" span="6">
                <Icon name={item} size="32px" customClass="icon"></Icon>
                <View className="text">{item}</View>
              </Col>
            )
          })}
        </Tab>
        <Tab title="实底风格" customClass="demo-tab-pane">
          {icons.filled.map((item, index) => {
            return (
              <Col key={item.index} customClass="col" span="6">
                <Icon name={item} size="32px" customClass="icon"></Icon>
                <View className="text">{item}</View>
              </Col>
            )
          })}
        </Tab>
      </Tabs>
    )
  }
}
