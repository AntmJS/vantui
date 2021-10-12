import { Block, View } from '@tarojs/components'
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
    imageURL:
      'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
  }

  render() {
    const { imageURL } = this.state
    return (
      <View className="container">
        <DemoBlock title="基础用法">
          <Card
            num="2"
            price="2.00"
            desc="描述信息"
            title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
            thumb={imageURL}
          ></Card>
        </DemoBlock>
        <DemoBlock title="高级用法">
          <Card
            num="2"
            tag="标签"
            price="2.00"
            originPrice="10.00"
            desc="描述信息"
            title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
            thumb={imageURL}
            renderTags={
              <Block>
                <View>
                  <Tag plain type="danger" className="tag">
                    标签1
                  </Tag>
                  <Tag plain type="danger">
                    标签2
                  </Tag>
                </View>
              </Block>
            }
            renderFooter={
              <Block>
                <View className="van-card__footer">
                  <Button size="mini" round customClass="button">
                    按钮
                  </Button>
                  <Button size="mini" round>
                    按钮
                  </Button>
                </View>
              </Block>
            }
          ></Card>
        </DemoBlock>
      </View>
    )
  }
}
