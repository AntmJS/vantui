import { Block, View, Text } from '@tarojs/components'
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

  onClickButton = () => {
    toast('点击按钮')
  }
  onClickLink = () => {
    toast('修改地址')
  }

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <SubmitBar
            price={3050}
            buttonText="提交订单"
            onSubmit={this.onClickButton}
            className="van-submit-bar"
            safeAreaInsetBottom={false}
          ></SubmitBar>
        </DemoBlock>
        <DemoBlock title="禁用状态">
          <SubmitBar
            disabled
            price={3050}
            buttonText="提交订单"
            tip="您的收货地址不支持同城送, 我们已为您推荐快递"
            tipIcon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
            onSubmit={this.onClickButton}
            className="van-submit-bar"
            safeAreaInsetBottom={false}
          ></SubmitBar>
        </DemoBlock>
        <DemoBlock title="加载状态">
          <SubmitBar
            loading
            price={3050}
            buttonText="提交订单"
            onSubmit={this.onClickButton}
            className="van-submit-bar"
            safeAreaInsetBottom={false}
          ></SubmitBar>
        </DemoBlock>
        <DemoBlock title="高级用法">
          <SubmitBar
            price={3050}
            buttonText="提交订单"
            onSubmit={this.onClickButton}
            className="van-submit-bar"
            tip={true}
            safeAreaInsetBottom={false}
            renderTip={
              <Block>
                <View>
                  您的收货地址不支持同城送
                  <Text className="edit-address" onClick={this.onClickLink}>
                    修改地址
                  </Text>
                </View>
              </Block>
            }
          >
            <Tag type="primary" className="submit-tag">
              标签
            </Tag>
          </SubmitBar>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
