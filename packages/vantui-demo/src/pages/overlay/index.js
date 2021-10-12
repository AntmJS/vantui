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
    show: false,
    showEmbedded: false,
  }

  onClickShow = () => {
    this.setState({ show: true })
  }

  onClickHide = () => {
    this.setState({ show: false })
  }

  onClickShowEmbedded = () => {
    this.setState({ showEmbedded: true })
  }

  onClickHideEmbedded = () => {
    this.setState({ showEmbedded: false })
  }

  noop = () => {}

  render() {
    const { show, showEmbedded } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法" padding>
          <Button type="primary" onClick={this.onClickShow}>
            显示遮罩层
          </Button>
          <Overlay show={show} onClick={this.onClickHide}></Overlay>
        </DemoBlock>
        <DemoBlock title="嵌入内容" padding>
          <Button type="primary" onClick={this.onClickShowEmbedded}>
            嵌入内容
          </Button>
          <Overlay show={showEmbedded} onClick={this.onClickHideEmbedded}>
            <View className="wrapper">
              <View className="block" onTap={this.noop}></View>
            </View>
          </Overlay>
        </DemoBlock>
      </Block>
    )
  }
}
