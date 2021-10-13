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

@withWeapp({
  showToast() {
    Toast('提示内容')
  },

  showLongToast() {
    Toast('这是一条长文字提示，超过一定字数就会换行')
  },

  showLoadingToast() {
    Toast.loading({ message: '加载中...', forbidClick: true })
  },

  showCustomLoadingToast() {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    })
  },

  showSuccessToast() {
    Toast.success('成功文案')
  },

  showFailToast() {
    Toast.fail('失败提示')
  },

  showCustomizedToast() {
    const text = (second) => `倒计时 ${second} 秒`
    const toast = Toast.loading({
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
        Toast.clear()
      }
    }, 1000)
  },
})
class _C extends React.Component {
  render() {
    return (
      <Block>
        <DemoBlock title="文字提示" padding>
          <VanButton
            type="primary"
            onTap={this.showToast}
            className="demo-margin-right"
          >
            文字提示
          </VanButton>
          <VanButton type="primary" onTap={this.showLongToast}>
            长文字提示
          </VanButton>
        </DemoBlock>
        <DemoBlock title="加载提示" padding>
          <VanButton
            type="primary"
            onTap={this.showLoadingToast}
            className="demo-margin-right"
          >
            加载提示
          </VanButton>
          <VanButton type="primary" onTap={this.showCustomLoadingToast}>
            自定义加载图标
          </VanButton>
        </DemoBlock>
        <DemoBlock title="成功/失败提示" padding>
          <VanButton
            type="info"
            onTap={this.showSuccessToast}
            className="demo-margin-right"
          >
            成功提示
          </VanButton>
          <VanButton type="danger" onTap={this.showFailToast}>
            失败提示
          </VanButton>
        </DemoBlock>
        <DemoBlock title="动态更新提示" padding>
          <VanButton type="primary" onTap={this.showCustomizedToast}>
            动态更新提示
          </VanButton>
        </DemoBlock>
        <VanToast id="van-toast"></VanToast>
      </Block>
    )
  }
}

export default _C
