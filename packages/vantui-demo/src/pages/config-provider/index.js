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

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    rate: 4,
    slider: 50,
    themeVars: {
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackgroundColor: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
      buttonPrimaryBackgroundColor: '#07c160',
    },
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({
      [key]: event.detail,
    })
  }

  render() {
    const { rate, slider, themeVars } = this.state
    return (
      <Block>
        <DemoBlock title="默认主题">
          <CellGroup>
            <Field
              label="评分"
              renderInput={
                <Block>
                  <View style="width: 100%">
                    <Rate
                      modelValue={rate}
                      data-key="rate"
                      onChange={this.onChange}
                    ></Rate>
                  </View>
                </Block>
              }
            ></Field>
            <Field
              label="滑块"
              border={false}
              renderInput={
                <Block>
                  <View style="width: 100%">
                    <Slider
                      value={slider}
                      data-key="slider"
                      onChange={this.onChange}
                    ></Slider>
                  </View>
                </Block>
              }
            ></Field>
          </CellGroup>
          <View style="margin: 16px">
            <Button round block type="primary">
              提交
            </Button>
          </View>
        </DemoBlock>
        <DemoBlock title="定制主题">
          <ConfigProvider themeVars={themeVars}>
            <CellGroup>
              <Field
                label="评分"
                renderInput={
                  <Block>
                    <View style="width: 100%">
                      <Rate
                        modelValue={rate}
                        data-key="rate"
                        onChange={this.onChange}
                      ></Rate>
                    </View>
                  </Block>
                }
              ></Field>
              <Field
                label="滑块"
                border={false}
                renderInput={
                  <Block>
                    <View style="width: 100%">
                      <Slider
                        value={slider}
                        data-key="slider"
                        onChange={this.onChange}
                      ></Slider>
                    </View>
                  </Block>
                }
              ></Field>
            </CellGroup>
            <View style="margin: 16px">
              <Button round block type="primary">
                提交
              </Button>
            </View>
          </ConfigProvider>
        </DemoBlock>
      </Block>
    )
  }
}
