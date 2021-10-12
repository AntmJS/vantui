import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'
import Notify from '../../dist/notify/notify.js'

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
  showNotify() {
    Notify('通知内容')
  },

  showCustomColor() {
    Notify({
      message: '自定义颜色',
      color: '#ad0000',
      background: '#ffe1e1',
    })

    Notify.clear()
  },

  showCustomDuration() {
    Notify({
      duration: 1000,
      message: '自定义时长',
    })
  },

  showNotifyByType(event) {
    const { type } = event.currentTarget.dataset
    Notify({
      type,
      message: '通知内容',
    })
  },

  showSafe() {
    Notify({
      message: '通知内容',
      safeAreaInsetTop: true,
    })
  },
})
class _C extends React.Component {
  render() {
    return (
      <Block>
        <DemoBlock padding title="基础用法">
          <VanButton type="danger" onClick={this.showNotify}>
            基础用法
          </VanButton>
        </DemoBlock>
        <DemoBlock padding title="通知类型">
          <View className="demo-margin-bottom">
            <VanButton
              className="demo-margin-right"
              type="info"
              data-type="primary"
              onClick={this.showNotifyByType}
            >
              主要通知
            </VanButton>
            <VanButton
              className="demo-margin-right"
              type="primary"
              data-type="success"
              onClick={this.showNotifyByType}
            >
              成功通知
            </VanButton>
          </View>
          <View className="demo-margin-bottom">
            <VanButton
              className="demo-margin-right"
              type="danger"
              data-type="danger"
              onClick={this.showNotifyByType}
            >
              危险通知
            </VanButton>
            <VanButton
              type="warning"
              data-type="warning"
              onClick={this.showNotifyByType}
            >
              警告通知
            </VanButton>
          </View>
        </DemoBlock>
        <DemoBlock padding title="自定义通知">
          <VanButton
            type="primary"
            className="demo-margin-right"
            onClick={this.showCustomColor}
          >
            自定义颜色
          </VanButton>
          <VanButton type="primary" onClick={this.showCustomDuration}>
            自定义时长
          </VanButton>
        </DemoBlock>
        <DemoBlock padding title="插入状态栏高度">
          <VanButton
            type="primary"
            className="demo-margin-right"
            onClick={this.showSafe}
          >
            插入状态栏高度
          </VanButton>
        </DemoBlock>
        <VanNotify id="van-notify"></VanNotify>
      </Block>
    )
  }
}

export default _C
