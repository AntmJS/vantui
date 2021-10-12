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

  onClickLeft = () => {
    Taro.showToast({ title: '点击返回', icon: 'none' })
  }

  onClickRight = () => {
    Taro.showToast({ title: '点击按钮', icon: 'none' })
  }

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <NavBar
            title="标题"
            rightText="按钮"
            leftArrow
            onClickLeft={this.onClickLeft}
            onClickRight={this.onClickRight}
          ></NavBar>
        </DemoBlock>
        <DemoBlock title="高级用法">
          <NavBar
            title="标题"
            leftText="返回"
            leftArrow
            renderRight={
              <Block>
                <Icon name="search" customClass="icon" size="18"></Icon>
              </Block>
            }
          ></NavBar>
        </DemoBlock>
      </Block>
    )
  }
}
