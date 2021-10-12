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
    activeTab: 0,
  }

  onChange = (event) => {
    this.setState({
      activeTab: event.detail.name,
    })
  }

  render() {
    const { activeTab } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法" padding>
          <Empty description="描述文字"></Empty>
        </DemoBlock>
        <DemoBlock title="图片类型">
          <Tabs active={activeTab} onChange={this.onChange}>
            <Tab title="通用错误">
              <Empty image="error" description="描述文字"></Empty>
            </Tab>
            <Tab title="网络错误">
              <Empty image="network" description="描述文字"></Empty>
            </Tab>
            <Tab title="搜索提示">
              <Empty image="search" description="描述文字"></Empty>
            </Tab>
          </Tabs>
        </DemoBlock>
        <DemoBlock title="自定义图片" padding>
          <Empty
            customClass="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="描述文字"
          ></Empty>
        </DemoBlock>
        <DemoBlock title="底部内容" padding>
          <Empty description="描述文字">
            <Button round type="danger" customClass="bottom-button">
              按钮
            </Button>
          </Empty>
        </DemoBlock>
      </Block>
    )
  }
}
