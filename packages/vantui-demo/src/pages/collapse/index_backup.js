import { Block, View } from '@tarojs/components'
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
    active1: [0],
    active2: 0,
    active3: [],
    active4: [],
    title1: '有赞微商城',
    title2: '有赞零售',
    title3: '有赞美业',
    content1: '提供多样店铺模板，快速搭建网上商城',
    content2:
      '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失',
    content3: '线上拓客，随时预约，贴心顺手的开单收银',
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset
    this.setData({
      [key]: event.detail,
    })
  },

  onOpen(event) {
    Toast(`展开: ${event.detail}`)
  },

  onClose(event) {
    Toast(`关闭: ${event.detail}`)
  },
})
class _C extends React.Component {
  render() {
    const {
      active1,
      title1,
      content1,
      title2,
      content2,
      title3,
      content3,
      active2,
      active3,
      active4,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanCollapse
            value={active1}
            data-key="active1"
            onChange={this.onChange}
          >
            <VanCollapseItem title={title1}>{content1}</VanCollapseItem>
            <VanCollapseItem title={title2}>{content2}</VanCollapseItem>
            <VanCollapseItem title={title3} disabled>
              {content3}
            </VanCollapseItem>
          </VanCollapse>
        </DemoBlock>
        <DemoBlock title="手风琴">
          <VanCollapse
            value={active2}
            data-key="active2"
            accordion
            onChange={this.onChange}
          >
            <VanCollapseItem title={title1}>{content1}</VanCollapseItem>
            <VanCollapseItem title={title2}>{content2}</VanCollapseItem>
            <VanCollapseItem title={title3}>{content3}</VanCollapseItem>
          </VanCollapse>
        </DemoBlock>
        <DemoBlock title="事件监听">
          <VanCollapse
            value={active3}
            data-key="active3"
            onChange={this.onChange}
            onOpen={this.onOpen}
            onClose={this.onClose}
          >
            <VanCollapseItem title={title1}>{content1}</VanCollapseItem>
            <VanCollapseItem title={title2}>{content2}</VanCollapseItem>
            <VanCollapseItem title={title3}>{content3}</VanCollapseItem>
          </VanCollapse>
        </DemoBlock>
        <DemoBlock title="自定义标题内容">
          <VanCollapse
            value={active4}
            data-key="active4"
            onChange={this.onChange}
          >
            <VanCollapseItem
              renderTitle={
                <Block>
                  <View>
                    {title1}
                    <VanIcon
                      name="question-o"
                      customClass="van-icon-question"
                    ></VanIcon>
                  </View>
                </Block>
              }
            >
              {content1}
            </VanCollapseItem>
            <VanCollapseItem title={title2} value="内容" icon="shop-o">
              {content2}
            </VanCollapseItem>
          </VanCollapse>
        </DemoBlock>
        <VanToast id="van-toast"></VanToast>
      </Block>
    )
  }
}

export default _C
