import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'
import Toast from '../../dist/toast/toast.js'

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
    minHour: 10,
    maxHour: 20,
    minDate: new Date(2018, 0, 1).getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate1: new Date(2018, 2, 31).getTime(),
    currentDate2: null,
    currentDate3: new Date(2018, 0, 1),
    currentDate4: '12:00',
    loading: false,
  },

  formatter(type, value) {
    if (type === 'year') {
      return `${value}年`
    }
    if (type === 'month') {
      return `${value}月`
    }
    return value
  },

  filter(type, options) {
    if (type === 'minute') {
      return options.filter((option) => option % 5 === 0)
    }

    return options
  },

  onInput(event) {
    const { detail, currentTarget } = event
    const result = this.getResult(detail, currentTarget.dataset.type)

    Toast(result)
  },

  getResult(time, type) {
    const date = new Date(time)
    switch (type) {
      case 'datetime':
        return date.toLocaleString()
      case 'date':
        return date.toLocaleDateString()
      case 'year-month':
        return `${date.getFullYear()}/${date.getMonth() + 1}`
      case 'time':
        return time
      default:
        return ''
    }
  },
})
class _C extends React.Component {
  render() {
    const {
      loading,
      currentDate1,
      minDate,
      currentDate2,
      currentDate3,
      currentDate4,
      minHour,
      maxHour,
    } = this.data
    return (
      <Block>
        <DemoBlock title="选择完整时间">
          <VanDatetimePicker
            type="datetime"
            data-type="datetime"
            loading={loading}
            value={currentDate1}
            minDate={minDate}
            onInput={this.onInput}
          ></VanDatetimePicker>
        </DemoBlock>
        <DemoBlock title="选择日期（年月日）">
          <VanDatetimePicker
            type="date"
            data-type="date"
            value={currentDate2}
            minDate={minDate}
            onInput={this.onInput}
            formatter={this.formatter}
          ></VanDatetimePicker>
        </DemoBlock>
        <DemoBlock title="选择日期（年月）">
          <VanDatetimePicker
            type="year-month"
            data-type="year-month"
            value={currentDate3}
            minDate={minDate}
            onInput={this.onInput}
          ></VanDatetimePicker>
        </DemoBlock>
        <DemoBlock title="选择时间">
          <VanDatetimePicker
            type="time"
            data-type="time"
            value={currentDate4}
            minHour={minHour}
            maxHour={maxHour}
            onInput={this.onInput}
          ></VanDatetimePicker>
        </DemoBlock>
        <DemoBlock title="选项过滤器">
          <VanDatetimePicker
            type="time"
            value={currentDate4}
            filter={this.filter}
          ></VanDatetimePicker>
        </DemoBlock>
        <VanToast id="van-toast"></VanToast>
      </Block>
    )
  }
}

export default _C
