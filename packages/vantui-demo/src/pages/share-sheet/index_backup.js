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
    show: {
      basic: false,
      withDesc: false,
      multiLine: false,
      customIcon: false,
    },
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: 'QQ', icon: 'qq' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
      { name: '小程序码', icon: 'weapp-qrcode' },
    ],

    multiLineOptions: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ],

    customIconOptions: [
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
      },
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
      },
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
      },
    ],

    optionsWithDesc: [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      {
        name: '复制链接',
        icon: 'link',
        description: '描述信息',
      },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  },

  onShowShareSheet(event) {
    this.setData({
      [`show.${event.target.dataset.type}`]: true,
    })
  },

  onClose() {
    this.setData({
      show: {
        basic: false,
        withDesc: false,
        multiLine: false,
        customIcon: false,
      },
    })
  },

  onSelect(event) {
    Toast(event.detail.name)
    this.onClose()
  },
})
class _C extends React.Component {
  render() {
    const {
      show,
      options,
      multiLineOptions,
      customIconOptions,
      optionsWithDesc,
    } = this.data
    return (
      <Block>
        <DemoBlock card title="基础用法">
          <VanCell
            isLink
            title="显示分享面板"
            data-type="basic"
            onClick={this.onShowShareSheet}
          ></VanCell>
          <VanShareSheet
            show={show.basic}
            title="立即分享给好友"
            options={options}
            onClose={this.onClose}
            onSelect={this.onSelect}
          ></VanShareSheet>
        </DemoBlock>
        <DemoBlock card title="展示多行选项">
          <VanCell
            isLink
            title="显示分享面板"
            data-type="multiLine"
            onClick={this.onShowShareSheet}
          ></VanCell>
          <VanShareSheet
            show={show.multiLine}
            title="立即分享给好友"
            options={multiLineOptions}
            onClose={this.onClose}
            onSelect={this.onSelect}
          ></VanShareSheet>
        </DemoBlock>
        <DemoBlock card title="自定义图标">
          <VanCell
            isLink
            title="显示分享面板"
            data-type="customIcon"
            onClick={this.onShowShareSheet}
          ></VanCell>
          <VanShareSheet
            show={show.customIcon}
            options={customIconOptions}
            onClose={this.onClose}
            onSelect={this.onSelect}
          ></VanShareSheet>
        </DemoBlock>
        <DemoBlock card title="展示描述信息">
          <VanCell
            isLink
            title="显示分享面板"
            data-type="withDesc"
            onClick={this.onShowShareSheet}
          ></VanCell>
          <VanShareSheet
            show={show.withDesc}
            title="立即分享给好友"
            options={optionsWithDesc}
            description="描述信息"
            onClose={this.onClose}
            onSelect={this.onSelect}
          ></VanShareSheet>
        </DemoBlock>
        <VanToast id="van-toast"></VanToast>
      </Block>
    )
  }
}

export default _C
