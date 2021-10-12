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
import './index.scss'

@withWeapp({
  data: {
    show: false,
    name: 'fade',
    showCustom: false,
  },

  onClickFade() {
    this.trigger('fade')
  },

  onClickFadeUp() {
    this.trigger('fade-up')
  },

  onClickFadeDown() {
    this.trigger('fade-down')
  },

  onClickFadeLeft() {
    this.trigger('fade-left')
  },

  onClickFadeRight() {
    this.trigger('fade-right')
  },

  onClickSlideUp() {
    this.trigger('slide-up')
  },

  onClickSlideDown() {
    this.trigger('slide-down')
  },

  onClickSlideLeft() {
    this.trigger('slide-left')
  },

  onClickSlideRight() {
    this.trigger('slide-right')
  },

  trigger(name) {
    this.setData({ name, show: true })
    setTimeout(() => {
      this.setData({ show: false })
    }, 500)
  },

  onClickCustom() {
    this.setData({ showCustom: true })

    setTimeout(() => {
      this.setData({ showCustom: false })
    }, 1000)
  },

  onBeforeEnter() {
    console.log('before enter')
  },

  onEnter() {
    console.log('enter')
  },

  onAfterEnter() {
    console.log('after enter')
  },

  onBeforeLeave() {
    console.log('before leave')
  },

  onLeave() {
    console.log('leave')
  },

  onAfterLeave() {
    console.log('after leave')
  },
})
class _C extends React.Component {
  render() {
    const { show, name, showCustom } = this.data
    return (
      <DemoBlock title="基础用法" padding>
        <VanCell title="Fade" onClick={this.onClickFade} isLink></VanCell>
        <VanCell title="Fade Up" onClick={this.onClickFadeUp} isLink></VanCell>
        <VanCell
          title="Fade Down"
          onClick={this.onClickFadeDown}
          isLink
        ></VanCell>
        <VanCell
          title="Fade Left"
          onClick={this.onClickFadeLeft}
          isLink
        ></VanCell>
        <VanCell
          title="Fade Right"
          onClick={this.onClickFadeRight}
          isLink
        ></VanCell>
        <VanCell
          title="Slide Up"
          onClick={this.onClickSlideUp}
          isLink
        ></VanCell>
        <VanCell
          title="Slide Down"
          onClick={this.onClickSlideDown}
          isLink
        ></VanCell>
        <VanCell
          title="Slide Left"
          onClick={this.onClickSlideLeft}
          isLink
        ></VanCell>
        <VanCell
          title="Slide Right"
          onClick={this.onClickSlideRight}
          isLink
        ></VanCell>
        <VanCell title="Custom" onClick={this.onClickCustom} isLink></VanCell>
        <VanTransition
          show={show}
          name={name}
          customClass="block"
        ></VanTransition>
        <VanTransition
          show={showCustom}
          name
          duration={{
            enter: 300,
            leave: 1000,
          }}
          customClass="block"
          enterClass="van-enter-class"
          enterActiveClass="van-enter-active-class"
          leaveActiveClass="van-leave-active-class"
          leaveToClass="van-leave-to-class"
          onBeforeEnter={this.onBeforeEnter}
          onEnter={this.onEnter}
          onAfterEnter={this.onAfterEnter}
          onBeforeLeave={this.onBeforeLeave}
          onLeave={this.onLeave}
          onAfterLeave={this.onAfterLeave}
        ></VanTransition>
      </DemoBlock>
    )
  }
}

export default _C
