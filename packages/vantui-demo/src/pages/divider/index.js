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
  state = {}

  render() {
    return (
      <Block>
        <DemoBlock className="white" title="基础用法" padding>
          <Divider></Divider>
        </DemoBlock>
        <DemoBlock className="white" title="内容位置" padding>
          <Divider contentPosition="center">文本</Divider>
          <Divider contentPosition="left">文本</Divider>
          <Divider contentPosition="right">文本</Divider>
        </DemoBlock>
        <DemoBlock className="white" title="虚线" padding>
          <Divider dashed></Divider>
        </DemoBlock>
        <DemoBlock className="white" title="自定义样式" padding>
          <Divider
            contentPosition="center"
            style="color: #1989fa;border-color: #1989fa;font-size: 18px;"
          >
            文本
          </Divider>
        </DemoBlock>
      </Block>
    )
  }
}
