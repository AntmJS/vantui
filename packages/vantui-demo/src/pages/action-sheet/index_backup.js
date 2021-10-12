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
import './index.scss'

@withWeapp({
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    action1: [
      { name: '选项' },
      { name: '选项' },
      { name: '选项', subname: '描述信息' },
    ],
    action2: [
      { name: '着色选项', color: '#ee0a24' },
      { loading: true },
      { name: '禁用选项', disabled: true },
    ],
    action6: [
      { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' },
    ],
  },

  toggle(type) {
    this.setData({
      [type]: !this.data[type],
    })
  },

  toggleActionSheet1() {
    this.toggle('show1')
  },

  toggleActionSheet2() {
    this.toggle('show2')
  },

  toggleActionSheet3() {
    this.toggle('show3')
  },

  toggleActionSheet4() {
    this.toggle('show4')
  },

  toggleActionSheet5() {
    this.toggle('show5')
  },

  toggleActionSheet6() {
    this.toggle('show6')
  },

  onGetUserInfo(e) {
    console.log(e.detail)
  },
})
class _C extends React.Component {
  render() {
    const {
      show1,
      action1,
      show2,
      action2,
      show3,
      show4,
      show5,
      show6,
      action6,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法" padding>
          <VanButton type="primary" onClick={this.toggleActionSheet1}>
            弹出菜单
          </VanButton>
          <VanActionSheet
            show={show1}
            actions={action1}
            onClose={this.toggleActionSheet1}
          ></VanActionSheet>
        </DemoBlock>
        <DemoBlock title="选项状态" padding>
          <VanButton type="primary" onClick={this.toggleActionSheet2}>
            弹出菜单
          </VanButton>
          <VanActionSheet
            show={show2}
            actions={action2}
            onClose={this.toggleActionSheet2}
          ></VanActionSheet>
        </DemoBlock>
        <DemoBlock title="展示取消按钮" padding>
          <VanButton type="primary" onClick={this.toggleActionSheet3}>
            弹出菜单
          </VanButton>
          <VanActionSheet
            show={show3}
            actions={action1}
            cancelText="取消"
            onClose={this.toggleActionSheet3}
          ></VanActionSheet>
        </DemoBlock>
        <DemoBlock title="展示描述信息" padding>
          <VanButton type="primary" onClick={this.toggleActionSheet4}>
            弹出菜单
          </VanButton>
          <VanActionSheet
            show={show4}
            actions={action1}
            description="这是一段描述信息"
            onClose={this.toggleActionSheet4}
          ></VanActionSheet>
        </DemoBlock>
        <DemoBlock title="展示标题栏" padding>
          <VanButton type="primary" onClick={this.toggleActionSheet5}>
            弹出菜单
          </VanButton>
          <VanActionSheet
            show={show5}
            title="标题"
            onClose={this.toggleActionSheet5}
          >
            <View className="content">内容</View>
          </VanActionSheet>
        </DemoBlock>
        <DemoBlock title="微信开放能力" padding>
          <VanButton type="primary" onClick={this.toggleActionSheet6}>
            弹出菜单
          </VanButton>
          <VanActionSheet
            show={show6}
            title="标题"
            onClose={this.toggleActionSheet6}
            actions={action6}
            onGetuserinfo={this.onGetUserInfo}
          ></VanActionSheet>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
