import { Block, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'
import Dialog from '../../dist/dialog/dialog.js'
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
const message = '代码是写出来给人看的，附带能在机器上运行'

@withWeapp({
  data: {
    show: false,
  },

  showCustomDialog() {
    this.setData({ show: true })
  },

  getUserInfo(event) {
    console.log(event.detail)
  },

  onClickThemeAlert() {
    Dialog.alert({
      title: '标题',
      theme: 'round-button',
      message,
    })
  },

  onClickThemeAlert2() {
    Dialog.alert({
      theme: 'round-button',
      message,
    })
  },

  onClickAlert() {
    Dialog.alert({
      title: '标题',
      message,
    })
  },

  onClickAlert2() {
    Dialog.alert({
      message,
    })
  },

  onClickConfirm() {
    Dialog.confirm({
      title: '标题',
      message,
    })
  },

  onClickAsyncClose() {
    const beforeClose = (action) =>
      new Promise((resolve) => {
        setTimeout(() => {
          if (action === 'confirm') {
            resolve(true)
          } else {
            // 拦截取消操作
            resolve(false)
          }
        }, 1000)
      })

    Dialog.confirm({
      title: '标题',
      message,
      beforeClose,
    })
  },

  onClose() {
    this.setData({
      show: false,
    })
  },
})
class _C extends React.Component {
  render() {
    const { show } = this.data
    return (
      <Block>
        <DemoBlock card title="提示弹窗" padding>
          <VanCell
            title="提示弹窗"
            onClick={this.onClickAlert}
            isLink
          ></VanCell>
          <VanCell
            title="提示弹窗（无标题）"
            onClick={this.onClickAlert2}
            isLink
          ></VanCell>
          <VanCell
            title="确认弹窗"
            onClick={this.onClickConfirm}
            isLink
          ></VanCell>
        </DemoBlock>
        <DemoBlock card title="圆角按钮样式" padding>
          <VanCell
            title="提示弹窗"
            onClick={this.onClickThemeAlert}
            isLink
          ></VanCell>
          <VanCell
            title="提示弹窗（无标题）"
            onClick={this.onClickThemeAlert2}
            isLink
          ></VanCell>
        </DemoBlock>
        <DemoBlock card title="异步关闭" padding>
          <VanCell title="异步关闭" onClick={this.onClickAsyncClose}></VanCell>
        </DemoBlock>
        <DemoBlock card title="组件调用" padding>
          <VanCell title="组件调用" onClick={this.showCustomDialog}></VanCell>
        </DemoBlock>
        <VanDialog
          useSlot
          title="标题"
          show={show}
          showCancelButton
          onClose={this.onClose}
          confirmButtonOpenType="getUserInfo"
          onGetuserinfo={this.getUserInfo}
        >
          <Image
            className="demo-image"
            src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
          ></Image>
        </VanDialog>
        <VanDialog id="van-dialog"></VanDialog>
      </Block>
    )
  }
}

export default _C
