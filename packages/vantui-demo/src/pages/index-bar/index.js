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
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
const indexList = []
const charCodeOfA = 'A'.charCodeAt(0)
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i))
}

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    activeTab: 0,
    indexList,
    customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    scrollTop: 0,
  }

  onChange = (event) => {
    this.setState({
      activeTab: event.detail.name,
    })
  }

  onPageScroll = (event) => {
    this.setState({
      scrollTop: event.scrollTop,
    })
  }

  render() {
    const { activeTab, scrollTop, indexList, customIndexList } = this.state
    return (
      <Tabs active={activeTab} onChange={this.onChange}>
        <Tab title="基础用法">
          {activeTab === 0 && (
            <IndexBar scrollTop={scrollTop}>
              {indexList.map((item, index) => {
                return (
                  <View key={item.item}>
                    <IndexAnchor index={item}></IndexAnchor>
                    <Cell title="文本"></Cell>
                    <Cell title="文本"></Cell>
                    <Cell title="文本"></Cell>
                  </View>
                )
              })}
            </IndexBar>
          )}
        </Tab>
        <Tab title="自定义索引列表">
          {activeTab === 1 && (
            <IndexBar indexList={customIndexList} scrollTop={scrollTop}>
              {customIndexList.map((item, index) => {
                return (
                  <View key={item.index}>
                    <IndexAnchor useSlot index={item}>
                      <Text>{'标题' + item}</Text>
                    </IndexAnchor>
                    <Cell title="文本"></Cell>
                    <Cell title="文本"></Cell>
                    <Cell title="文本"></Cell>
                  </View>
                )
              })}
            </IndexBar>
          )}
        </Tab>
      </Tabs>
    )
  }
}
