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
        <DemoBlock title="基础用法">
          <Progress className="progress-position" percentage="0"></Progress>
        </DemoBlock>
        <DemoBlock title="线条粗细">
          <Progress
            customClass="progress-position"
            strokeWidth="8"
            percentage="100"
          ></Progress>
        </DemoBlock>
        <DemoBlock title="置灰">
          <Progress
            customClass="progress-position"
            inactive
            percentage="50"
          ></Progress>
        </DemoBlock>
        <DemoBlock title="样式定制">
          <Progress
            customClass="progress-position"
            pivotText="橙色"
            color="#f2826a"
            percentage="25"
          ></Progress>
          <Progress
            customClass="progress-position"
            pivotText="红色"
            color="#ee0a24"
            percentage="50"
          ></Progress>
          <Progress
            customClass="progress-position"
            percentage="75"
            pivotText="紫色"
            pivotColor="#7232dd"
            color="linear-gradient(to right, #be99ff, #7232dd)"
          ></Progress>
        </DemoBlock>
      </Block>
    )
  }
}
