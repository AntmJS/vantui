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
    show: {
      basic: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      round: false,
      closeIcon: false,
      customCloseIcon: false,
      customIconPosition: false,
    },
  },

  toggle(type, show) {
    this.setData({
      show: {
        ...this.data.show,
        [type]: show,
      },
    })
  },

  showBasic() {
    this.toggle('basic', true)
  },

  hideBasic() {
    this.toggle('basic', false)
  },

  showTop() {
    this.toggle('top', true)
  },

  hideTop() {
    this.toggle('top', false)
  },

  showLeft() {
    this.toggle('left', true)
  },

  hideLeft() {
    this.toggle('left', false)
  },

  showRight() {
    this.toggle('right', true)
  },

  hideRight() {
    this.toggle('right', false)
  },

  showBottom() {
    this.toggle('bottom', true)
  },

  hideBottom() {
    this.toggle('bottom', false)
  },

  showRound() {
    this.toggle('round', true)
  },

  hideRound() {
    this.toggle('round', false)
  },

  showCloseIcon() {
    this.toggle('closeIcon', true)
  },

  hideCloseIcon() {
    this.toggle('closeIcon', false)
  },

  showCustomCloseIcon() {
    this.toggle('customCloseIcon', true)
  },

  hideCustomCloseIcon() {
    this.toggle('customCloseIcon', false)
  },

  showCustomIconPosition() {
    this.toggle('customIconPosition', true)
  },

  hideCustomIconPosition() {
    this.toggle('customIconPosition', false)
  },
})
class _C extends React.Component {
  render() {
    const { show } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanCell title="展示弹出层" isLink onClick={this.showBasic}></VanCell>
          <VanPopup
            show={show.basic}
            customStyle="padding: 30px 50px"
            onClose={this.hideBasic}
          >
            内容
          </VanPopup>
        </DemoBlock>
        <DemoBlock title="弹出位置">
          <VanCell title="顶部弹出" isLink onClick={this.showTop}></VanCell>
          <VanCell title="底部弹出" isLink onClick={this.showBottom}></VanCell>
          <VanCell title="左侧弹出" isLink onClick={this.showLeft}></VanCell>
          <VanCell title="右侧弹出" isLink onClick={this.showRight}></VanCell>
          <VanPopup
            show={show.top}
            position="top"
            customStyle="height: 20%"
            onClose={this.hideTop}
          ></VanPopup>
          <VanPopup
            show={show.bottom}
            position="bottom"
            customStyle="height: 20%"
            onClose={this.hideBottom}
          ></VanPopup>
          <VanPopup
            show={show.left}
            position="left"
            customStyle="width: 20%; height: 100%"
            onClose={this.hideLeft}
          ></VanPopup>
          <VanPopup
            show={show.right}
            position="right"
            customStyle="width: 20%; height: 100%"
            onClose={this.hideRight}
          ></VanPopup>
        </DemoBlock>
        <DemoBlock title="关闭图标">
          <VanCell
            title="关闭图标"
            isLink
            onClick={this.showCloseIcon}
          ></VanCell>
          <VanCell
            title="自定义图标"
            isLink
            onClick={this.showCustomCloseIcon}
          ></VanCell>
          <VanCell
            title="图标位置"
            isLink
            onClick={this.showCustomIconPosition}
          ></VanCell>
          <VanPopup
            show={show.closeIcon}
            closeable
            position="bottom"
            customStyle="height: 20%"
            onClose={this.hideCloseIcon}
          ></VanPopup>
          <VanPopup
            show={show.customCloseIcon}
            closeable
            closeIcon="close"
            position="bottom"
            customStyle="height: 20%"
            onClose={this.hideCustomCloseIcon}
          ></VanPopup>
          <VanPopup
            show={show.customIconPosition}
            closeable
            closeIconPosition="top-left"
            position="bottom"
            customStyle="height: 20%"
            onClose={this.hideCustomIconPosition}
          ></VanPopup>
        </DemoBlock>
        <DemoBlock title="圆角弹窗">
          <VanCell title="圆角弹窗" isLink onClick={this.showRound}></VanCell>
          <VanPopup
            show={show.round}
            round
            position="bottom"
            customStyle="height: 20%"
            onClose={this.hideRound}
          ></VanPopup>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
