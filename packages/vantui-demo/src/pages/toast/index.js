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

export default class Index extends React.Component {
  constructor() {
    super()
  }

  showToast = () => {
    toast('提示内容')
  }

  showLongToast = () => {
    toast('这是一条长文字提示，超过一定字数就会换行')
  }

  showLoadingToast = () => {
    toast.loading({ message: '加载中...', forbidClick: true })
  }

  showCustomLoadingToast = () => {
    toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    })
  }

  showSuccessToast = () => {
    toast.success('成功文案')
  }

  showFailToast = () => {
    toast.fail('失败提示')
  }

  showCustomizedToast = () => {
    const text = (second) => `倒计时 ${second} 秒`
    const toast = toast.loading({
      duration: 0,
      forbidClick: true,
      message: text(3),
    })

    let second = 3
    const timer = setInterval(() => {
      second--
      if (second) {
        toast.setData({ message: text(second) })
      } else {
        clearInterval(timer)
        toast.clear()
      }
    }, 1000)
  }

  render() {
    return (
      <Block>
        <DemoBlock title="文字提示" padding>
          <Button
            type="primary"
            onTap={this.showToast}
            className="demo-margin-right"
          >
            文字提示
          </Button>
          <Button type="primary" onTap={this.showLongToast}>
            长文字提示
          </Button>
        </DemoBlock>
        <DemoBlock title="加载提示" padding>
          <Button
            type="primary"
            onTap={this.showLoadingToast}
            className="demo-margin-right"
          >
            加载提示
          </Button>
          <Button type="primary" onTap={this.showCustomLoadingToast}>
            自定义加载图标
          </Button>
        </DemoBlock>
        <DemoBlock title="成功/失败提示" padding>
          <Button
            type="info"
            onTap={this.showSuccessToast}
            className="demo-margin-right"
          >
            成功提示
          </Button>
          <Button type="danger" onTap={this.showFailToast}>
            失败提示
          </Button>
        </DemoBlock>
        <DemoBlock title="动态更新提示" padding>
          <Button type="primary" onTap={this.showCustomizedToast}>
            动态更新提示
          </Button>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
