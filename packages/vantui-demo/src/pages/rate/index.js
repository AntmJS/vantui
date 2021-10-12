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
  toast,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    value1: 3,
    value2: 3,
    value3: 3,
    value4: 2.5,
    value5: 4,
    value6: 3,
    value8: 2,
  }

  onChange = (event) => {
    toast('当前值：' + event.detail)
  }

  render() {
    const { value1, value2, value3, value4, value5, value6, value8 } =
      this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Rate className="rate-position" modelValue={value1}></Rate>
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <Rate
            customClass="rate-position"
            icon="like"
            voidIcon="like-o"
            modelValue={value2}
          ></Rate>
        </DemoBlock>
        <DemoBlock title="自定义样式">
          <Rate
            customClass="rate-position"
            modelValue={value3}
            size={25}
            color="#ffd21e"
            voidIcon="star"
            voidColor="#eee"
          ></Rate>
        </DemoBlock>
        <DemoBlock title="半星">
          <Rate
            customClass="rate-position"
            modelValue={value4}
            allowHalf
            voidIcon="star"
            voidColor="#eee"
          ></Rate>
        </DemoBlock>
        <DemoBlock title="自定义数量">
          <Rate
            customClass="rate-position"
            modelValue={value5}
            count={6}
          ></Rate>
        </DemoBlock>
        <DemoBlock title="禁用状态">
          <Rate customClass="rate-position" value={value6} disabled></Rate>
        </DemoBlock>
        <DemoBlock title="只读状态">
          <Rate customClass="rate-position" value={value6} readonly></Rate>
        </DemoBlock>
        <DemoBlock title="监听 change 事件">
          <Rate
            customClass="rate-position"
            value={value8}
            onChange={this.onChange}
          ></Rate>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
