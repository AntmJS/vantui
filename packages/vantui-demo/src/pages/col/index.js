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
        <DemoBlock title="基础用法" padding>
          <Row>
            <Col span="8" className="dark">
              span: 8
            </Col>
            <Col span="8" className="light">
              span: 8
            </Col>
            <Col span="8" className="dark">
              span: 8
            </Col>
          </Row>
          <Row>
            <Col span="4" className="dark">
              span: 4
            </Col>
            <Col span="10" offset="4" className="light">
              offset: 4, span: 10
            </Col>
          </Row>
          <Row>
            <Col offset="12" span="12" className="dark">
              offset: 12, span: 12
            </Col>
          </Row>
        </DemoBlock>
        <DemoBlock title="在列元素之间增加间距" padding>
          <Row gutter="20">
            <Col span="8" className="dark">
              span: 8
            </Col>
            <Col span="8" className="light">
              span: 8
            </Col>
            <Col span="8" className="dark">
              span: 8
            </Col>
          </Row>
        </DemoBlock>
      </Block>
    )
  }
}
