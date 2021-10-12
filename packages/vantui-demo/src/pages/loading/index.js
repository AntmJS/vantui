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
        <DemoBlock title="加载类型" padding>
          <Loading className="demo-loading"></Loading>
          <Loading className="demo-loading" type="spinner"></Loading>
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding>
          <Loading className="demo-loading" color="#1989fa"></Loading>
          <Loading
            className="demo-loading"
            type="spinner"
            color="#1989fa"
          ></Loading>
        </DemoBlock>
        <DemoBlock title="加载文案" padding>
          <Loading className="demo-loading" size="24px">
            加载中...
          </Loading>
        </DemoBlock>
        <DemoBlock title="垂直排列" padding>
          <Loading className="demo-loading" size="24px" vertical>
            加载中...
          </Loading>
        </DemoBlock>
      </Block>
    )
  }
}
