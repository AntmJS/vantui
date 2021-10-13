import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'

import VanConfigProvider from '../../dist/config-provider/index'
import VanShareSheet from '../../dist/share-sheet/index'
import VanCalendar from '../../dist/calendar/index'
import VanSkeleton from '../../dist/skeleton/index'
import VanDropdownItem from '../../dist/dropdown-item/index'
import VanDropdownMenu from '../../dist/dropdown-menu/index'
import VanGridItem from '../../dist/grid-item/index'
import VanGrid from '../../dist/grid/index'
import VanIndexAnchor from '../../dist/index-anchor/index'
import VanIndexBar from '../../dist/index-bar/index'
import VanCircle from '../../dist/circle/index'
import VanOverlay from '../../dist/overlay/index'
import VanPicker from '../../dist/picker/index'
import VanCollapseItem from '../../dist/collapse-item/index'
import VanCollapse from '../../dist/collapse/index'
import VanRate from '../../dist/rate/index'
import VanDatetimePicker from '../../dist/datetime-picker/index'
import VanTreeSelect from '../../dist/tree-select/index'
import VanTransition from '../../dist/transition/index'
import VanToast from '../../dist/toast/index'
import VanTag from '../../dist/tag/index'
import VanTabbarItem from '../../dist/tabbar-item/index'
import VanTabbar from '../../dist/tabbar/index'
import VanTabs from '../../dist/tabs/index'
import VanTab from '../../dist/tab/index'
import VanSwitch from '../../dist/switch/index'
import VanUploader from '../../dist/uploader/index'
import VanSwipeCell from '../../dist/swipe-cell/index'
import VanSubmitBar from '../../dist/submit-bar/index'
import VanSticky from '../../dist/sticky/index'
import VanSteps from '../../dist/steps/index'
import VanStepper from '../../dist/stepper/index'
import VanSlider from '../../dist/slider/index'
import VanSidebarItem from '../../dist/sidebar-item/index'
import VanSidebar from '../../dist/sidebar/index'
import VanSearch from '../../dist/search/index'
import VanRow from '../../dist/row/index'
import VanRadioGroup from '../../dist/radio-group/index'
import VanRadio from '../../dist/radio/index'
import VanProgress from '../../dist/progress/index'
import VanPopup from '../../dist/popup/index'
import VanPanel from '../../dist/panel/index'
import VanNotify from '../../dist/notify/index'
import VanNoticeBar from '../../dist/notice-bar/index'
import VanNavBar from '../../dist/nav-bar/index'
import VanLoading from '../../dist/loading/index'
import VanImage from '../../dist/image/index'
import VanIcon from '../../dist/icon/index'
import VanGoodsActionButton from '../../dist/goods-action-button/index'
import VanGoodsActionIcon from '../../dist/goods-action-icon/index'
import VanGoodsAction from '../../dist/goods-action/index'
import VanField from '../../dist/field/index'
import VanEmpty from '../../dist/empty/index'
import VanDivider from '../../dist/divider/index'
import VanDialog from '../../dist/dialog/index'
import VanCountDown from '../../dist/count-down/index'
import VanCol from '../../dist/col/index'
import VanCheckboxGroup from '../../dist/checkbox-group/index'
import VanCheckbox from '../../dist/checkbox/index'
import VanCellGroup from '../../dist/cell-group/index'
import VanCell from '../../dist/cell/index'
import VanCard from '../../dist/card/index'
import VanButton from '../../dist/button/index'
import VanArea from '../../dist/area/index'
import VanActionSheet from '../../dist/action-sheet/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

@withWeapp({
  data: {
    tabs2: [1, 2],
    tabs3: [1, 2, 3],
    tabs4: [1, 2, 3, 4],
    tabs6: [1, 2, 3, 4, 5, 6],
    tabsWithName: [
      { name: 'a', index: 1 },
      { name: 'b', index: 2 },
      { name: 'c', index: 3 },
    ],
  },

  onClickDisabled(event) {
    Taro.showToast({
      title: `标签 ${event.detail.index + 1} 已被禁用`,
      icon: 'none',
    })
  },

  onChange(event) {
    Taro.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none',
    })
  },

  onClickNavRight() {
    Taro.showToast({
      title: '点击 right nav',
      icon: 'none',
    })
  },

  onClick(event) {
    Taro.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none',
    })
  },
})
class _C extends React.Component {
  render() {
    const { tabs4, tabsWithName, tabs6, tabs3, tabs2 } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanTabs active={1} onChange={this.onChange}>
            {tabs4.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="通过名称匹配">
          <VanTabs active="b">
            {tabsWithName.map((item, index) => {
              return (
                <VanTab
                  key={item.index}
                  name={item.name}
                  title={'标签 ' + item.index}
                >
                  <View className="content">{'内容' + item.index}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="横向滚动">
          <VanTabs>
            {tabs6.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="禁用标签">
          <VanTabs onDisabled={this.onClickDisabled}>
            {tabs3.map((item, index) => {
              return (
                <VanTab
                  key={item.index}
                  disabled={index === 1}
                  title={'标签 ' + item}
                >
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="样式风格">
          <VanTabs type="card" tabClass="special-tab">
            {tabs3.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content-2">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="点击事件">
          <VanTabs onClick={this.onClick}>
            {tabs2.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="粘性布局">
          <VanTabs sticky>
            {tabs4.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="切换动画">
          <VanTabs animated>
            {tabs4.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="滑动切换">
          <VanTabs swipeable>
            {tabs4.map((item, index) => {
              return (
                <VanTab key={item.index} title={'标签 ' + item}>
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
        <DemoBlock title="自定义标题">
          <VanTabs
            active={1}
            onChange={this.onChange}
            tabClass="special-tab"
            tabActiveClass="special-tab-active"
            renderNavright={
              <Block>
                <VanIcon
                  name="search"
                  customClass="right-nav"
                  onClick={this.onClickNavRight}
                ></VanIcon>
              </Block>
            }
          >
            {tabs4.map((item, index) => {
              return (
                <VanTab
                  key={item.index}
                  title={'标签 ' + item}
                  dot={index === 1}
                  info={index === 2 ? 99 : null}
                >
                  <View className="content">{'内容' + item}</View>
                </VanTab>
              )
            })}
          </VanTabs>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
