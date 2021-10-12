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

@withWeapp({
  data: {
    value: '',
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    })
  },

  onSearch() {
    if (this.data.value) {
      Taro.showToast({
        title: '搜索：' + this.data.value,
        icon: 'none',
      })
    }
  },

  onClick() {
    if (this.data.value) {
      Taro.showToast({
        title: '搜索：' + this.data.value,
        icon: 'none',
      })
    }
  },

  onCancel() {
    Taro.showToast({
      title: '取消',
      icon: 'none',
    })
  },

  onClear() {
    Taro.showToast({
      title: '清空',
      icon: 'none',
    })
  },
})
class _C extends React.Component {
  render() {
    const { value } = this.data
    return (
      <Block>
        <DemoBlock title="基本用法">
          <VanSearch
            modelValue={value}
            placeholder="请输入搜索关键词"
            onSearch={this.onSearch}
          ></VanSearch>
        </DemoBlock>
        <DemoBlock title="事件监听">
          <VanSearch
            modelValue={value}
            showAction
            placeholder="请输入搜索关键词"
            onSearch={this.onSearch}
            onCancel={this.onCancel}
            onClear={this.onClear}
          ></VanSearch>
        </DemoBlock>
        <DemoBlock title="搜索框内容对齐">
          <VanSearch
            modelValue={value}
            inputAlign="center"
            placeholder="请输入搜索关键词"
          ></VanSearch>
        </DemoBlock>
        <DemoBlock title="禁用搜索框">
          <VanSearch
            disabled
            modelValue={value}
            placeholder="请输入搜索关键词"
          ></VanSearch>
        </DemoBlock>
        <DemoBlock title="自定义背景色">
          <VanSearch
            modelValue={value}
            shape="round"
            background="#4fc08d"
            placeholder="请输入搜索关键词"
          ></VanSearch>
        </DemoBlock>
        <DemoBlock title="自定义按钮">
          <VanSearch
            modelValue={value}
            label="地址"
            shape="round"
            placeholder="请输入搜索关键词"
            useActionSlot
            onSearch={this.onSearch}
            renderAction={
              <Block>
                <View onTap={this.onClick}>搜索</View>
              </Block>
            }
          ></VanSearch>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
