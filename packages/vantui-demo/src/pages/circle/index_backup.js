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
const format = (rate) => Math.min(Math.max(rate, 0), 100)

@withWeapp({
  data: {
    value: 25,
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
  },

  run(e) {
    const step = parseFloat(e.currentTarget.dataset.step)
    this.setData({
      value: format(this.data.value + step),
    })
  },
})
class _C extends React.Component {
  render() {
    const { value, gradientColor } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanCircle type="2d" value={value} text={value + '%'}></VanCircle>
        </DemoBlock>
        <DemoBlock title="样式定制">
          <VanCircle value={value} strokeWidth={6} text="宽度定制"></VanCircle>
          <VanCircle
            value={value}
            layerColor="#eee"
            color="#ee0a24"
            text="颜色定制"
          ></VanCircle>
          <VanCircle
            value={value}
            color={gradientColor}
            text="渐变色"
          ></VanCircle>
          <VanCircle
            value={value}
            color="#07c160"
            clockwise={false}
            text="逆时针"
          ></VanCircle>
          <VanCircle value={value} size="120" text="大小定制"></VanCircle>
        </DemoBlock>
        <VanButton type="primary" size="small" data-step="10" onTap={this.run}>
          增加
        </VanButton>
        <VanButton type="danger" size="small" data-step="-10" onTap={this.run}>
          减少
        </VanButton>
      </Block>
    )
  }
}

export default _C
