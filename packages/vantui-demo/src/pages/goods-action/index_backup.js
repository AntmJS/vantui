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
  onClickIcon() {
    Toast('点击图标')
  },

  onClickButton() {
    Toast('点击按钮')
  },
})
class _C extends React.Component {
  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanGoodsAction
            customClass="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <VanGoodsActionIcon
              icon="chat-o"
              text="客服"
              openType="contact"
            ></VanGoodsActionIcon>
            <VanGoodsActionIcon
              icon="cart-o"
              text="购物车"
              onClick={this.onClickIcon}
            ></VanGoodsActionIcon>
            <VanGoodsActionButton
              text="加入购物车"
              type="warning"
              onClick={this.onClickButton}
            ></VanGoodsActionButton>
            <VanGoodsActionButton
              text="立即购买"
              onClick={this.onClickButton}
            ></VanGoodsActionButton>
          </VanGoodsAction>
        </DemoBlock>
        <DemoBlock title="提示信息">
          <VanGoodsAction
            customClass="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <VanGoodsActionIcon
              icon="chat-o"
              text="客服"
              dot
            ></VanGoodsActionIcon>
            <VanGoodsActionIcon
              icon="cart-o"
              text="购物车"
              info="5"
            ></VanGoodsActionIcon>
            <VanGoodsActionIcon icon="shop-o" text="店铺"></VanGoodsActionIcon>
            <VanGoodsActionButton
              text="加入购物车"
              type="warning"
            ></VanGoodsActionButton>
            <VanGoodsActionButton text="立即购买"></VanGoodsActionButton>
          </VanGoodsAction>
        </DemoBlock>
        <DemoBlock title="自定义按钮颜色">
          <VanGoodsAction
            customClass="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <VanGoodsActionIcon icon="chat-o" text="客服"></VanGoodsActionIcon>
            <VanGoodsActionIcon icon="shop-o" text="店铺"></VanGoodsActionIcon>
            <VanGoodsActionButton
              color="#be99ff"
              type="warning"
              text="加入购物车"
            ></VanGoodsActionButton>
            <VanGoodsActionButton
              color="#7232dd"
              text="立即购买"
            ></VanGoodsActionButton>
          </VanGoodsAction>
        </DemoBlock>
        <DemoBlock title="朴素按钮">
          <VanGoodsAction
            customClass="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <VanGoodsActionIcon icon="chat-o" text="客服"></VanGoodsActionIcon>
            <VanGoodsActionIcon icon="shop-o" text="店铺"></VanGoodsActionIcon>
            <VanGoodsActionButton
              color="#7232dd"
              text="加入购物车"
              type="warning"
            ></VanGoodsActionButton>
            <VanGoodsActionButton
              plain
              color="#7232dd"
              text="立即购买"
            ></VanGoodsActionButton>
          </VanGoodsAction>
        </DemoBlock>
        <VanToast id="van-toast"></VanToast>
      </Block>
    )
  }
}

export default _C
