import { Block } from '@tarojs/components'
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
import computed from './index.wxs.js'
import './index.scss'

@withWeapp({
  data: {
    date: {
      maxRange: [],
      selectSingle: null,
      selectRange: [],
      selectMultiple: [],
      quickSelect1: null,
      quickSelect2: [],
      customColor: [],
      customConfirm: [],
      customRange: null,
      customDayText: [],
      customPosition: null,
    },
    type: 'single',
    round: true,
    color: undefined,
    minDate: Date.now(),
    maxDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 6,
      new Date().getDate(),
    ).getTime(),
    maxRange: undefined,
    position: undefined,
    formatter: undefined,
    showConfirm: false,
    showCalendar: false,
    tiledMinDate: new Date(2012, 0, 10).getTime(),
    tiledMaxDate: new Date(2012, 2, 20).getTime(),
    confirmText: undefined,
    confirmDisabledText: undefined,
    firstDayOfWeek: 0,
  },

  onConfirm(event) {
    console.log(event)
    this.setData({ showCalendar: false })

    this.setData({
      [`date.${this.data.id}`]: Array.isArray(event.detail)
        ? event.detail.map((date) => date.valueOf())
        : event.detail.valueOf(),
    })
  },

  onSelect(event) {
    console.log(event)
  },

  onUnselect(event) {
    console.log(event)
  },

  onClose() {
    this.setData({ showCalendar: false })
  },

  onOpen() {
    console.log('open')
  },

  onOpened() {
    console.log('opened')
  },

  onClosed() {
    console.log('closed')
  },

  resetSettings() {
    this.setData({
      round: true,
      color: null,
      minDate: Date.now(),
      maxDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 6,
        new Date().getDate(),
      ).getTime(),
      maxRange: null,
      position: 'bottom',
      formatter: null,
      showConfirm: true,
      confirmText: '确定',
      confirmDisabledText: null,
    })
  },

  show(event) {
    this.resetSettings()
    const { type, id } = event.currentTarget.dataset
    const data = {
      id,
      type,
      showCalendar: true,
    }

    switch (id) {
      case 'quickSelect1':
      case 'quickSelect2':
        data.showConfirm = false
        break
      case 'customColor':
        data.color = '#07c160'
        break
      case 'customConfirm':
        data.confirmText = '完成'
        data.confirmDisabledText = '请选择结束时间'
        break
      case 'customRange':
        data.minDate = new Date(2010, 0, 1).getTime()
        data.maxDate = new Date(2010, 0, 31).getTime()
        break
      case 'customDayText':
        data.minDate = new Date(2010, 4, 1).getTime()
        data.maxDate = new Date(2010, 4, 31).getTime()
        data.formatter = this.dayFormatter
        break
      case 'customPosition':
        data.round = false
        data.position = 'right'
        break
      case 'maxRange':
        data.maxRange = 3
        break
    }

    this.setData(data)
  },

  dayFormatter(day) {
    const month = day.date.getMonth() + 1
    const date = day.date.getDate()

    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节'
      } else if (date === 4) {
        day.topInfo = '五四青年节'
      } else if (date === 11) {
        day.text = '今天'
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '入店'
    } else if (day.type === 'end') {
      day.bottomInfo = '离店'
    }

    return day
  },
})
class _C extends React.Component {
  render() {
    const {
      date,
      tiledMinDate,
      tiledMaxDate,
      firstDayOfWeek,
      showCalendar,
      type,
      color,
      round,
      position,
      minDate,
      maxDate,
      maxRange,
      formatter,
      showConfirm,
      confirmText,
      confirmDisabledText,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanCell
            isLink
            title="选择单个日期"
            data-type="single"
            data-id="selectSingle"
            value={computed.formatFullDate(date.selectSingle)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="选择多个日期"
            data-type="multiple"
            data-id="selectMultiple"
            value={computed.formatMultiple(date.selectMultiple)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="选择日期区间"
            data-type="range"
            data-id="selectRange"
            value={computed.formatRange(date.selectRange)}
            onClick={this.show}
          ></VanCell>
        </DemoBlock>
        <DemoBlock title="快捷选择">
          <VanCell
            isLink
            title="选择单个日期"
            data-type="single"
            data-id="quickSelect1"
            value={computed.formatFullDate(date.quickSelect1)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="选择日期区间"
            data-type="range"
            data-id="quickSelect2"
            value={computed.formatRange(date.quickSelect2)}
            onClick={this.show}
          ></VanCell>
        </DemoBlock>
        <DemoBlock title="自定义日历">
          <VanCell
            isLink
            title="自定义颜色"
            data-type="range"
            data-id="customColor"
            value={computed.formatRange(date.customColor)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="自定义日期范围"
            data-type="single"
            data-id="customRange"
            value={computed.formatFullDate(date.customRange)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="自定义按钮文字"
            data-type="range"
            data-id="customConfirm"
            value={computed.formatRange(date.customConfirm)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="自定义日期文案"
            data-type="range"
            data-id="customDayText"
            value={computed.formatRange(date.customDayText)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="自定义弹出位置"
            data-type="single"
            data-id="customPosition"
            value={computed.formatFullDate(date.customPosition)}
            onClick={this.show}
          ></VanCell>
          <VanCell
            isLink
            title="日期区间最大范围"
            data-type="range"
            data-id="maxRange"
            value={computed.formatRange(date.maxRange)}
            onClick={this.show}
          ></VanCell>
        </DemoBlock>
        <DemoBlock title="平铺展示">
          <VanCalendar
            title="日历"
            poppable={false}
            showConfirm={false}
            minDate={tiledMinDate}
            maxDate={tiledMaxDate}
            firstDayOfWeek={firstDayOfWeek}
            className="tiled-calendar"
          ></VanCalendar>
        </DemoBlock>
        <VanCalendar
          show={showCalendar}
          type={type}
          color={color}
          round={round}
          position={position}
          minDate={minDate}
          maxDate={maxDate}
          maxRange={maxRange}
          formatter={formatter}
          showConfirm={showConfirm}
          confirmText={confirmText}
          confirmDisabledText={confirmDisabledText}
          firstDayOfWeek={firstDayOfWeek}
          onConfirm={this.onConfirm}
          onSelect={this.onSelect}
          onUnselect={this.onUnselect}
          onOpen={this.onOpen}
          onOpened={this.onOpened}
          onClose={this.onClose}
          onClosed={this.onClosed}
        ></VanCalendar>
      </Block>
    )
  }
}

export default _C
