import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'
import config from './config.js'

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
const items = [
  {
    text: config.pro1Name,
    children: config.pro1,
  },
  {
    text: config.pro2Name,
    children: config.pro2,
  },
  {
    text: config.pro3Name,
    disabled: true,
    children: config.pro3,
  },
]

@withWeapp({
  data: {
    items,
    badgeItems: items.slice(0, 2).map((item, index) => {
      if (index === 0) {
        return { ...item, dot: true }
      }
      if (index === 1) {
        return { ...item, badge: 5 }
      }

      return item
    }),
    mainActiveIndex: 0,
    activeId: 0,
    mainActiveIndexMulti: 0,
    activeIdMulti: [],
  },

  onClickNav({ detail }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    })
  },

  onClickItem({ detail }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id

    this.setData({ activeId })
  },

  onClickNavMulti({ detail }) {
    this.setData({
      mainActiveIndexMulti: detail.index || 0,
    })
  },

  onClickItemMulti({ detail }) {
    const { activeIdMulti } = this.data
    const idx = activeIdMulti.indexOf(detail.id)
    if (idx > -1) {
      activeIdMulti.splice(idx, 1)
    } else {
      activeIdMulti.push(detail.id)
    }

    this.setData({ activeIdMulti })
  },
})
class _C extends React.Component {
  render() {
    const {
      items,
      mainActiveIndex,
      activeId,
      mainActiveIndexMulti,
      activeIdMulti,
      badgeItems,
    } = this.data
    return (
      <Block>
        <DemoBlock title="单选模式">
          <VanTreeSelect
            items={items}
            mainActiveIndex={mainActiveIndex}
            activeId={activeId}
            onClickItem={this.onClickItem}
            onClickNav={this.onClickNav}
          ></VanTreeSelect>
        </DemoBlock>
        <DemoBlock title="多选模式">
          <VanTreeSelect
            max="2"
            items={items}
            mainActiveIndex={mainActiveIndexMulti}
            activeId={activeIdMulti}
            onClickItem={this.onClickItemMulti}
            onClickNav={this.onClickNavMulti}
          ></VanTreeSelect>
        </DemoBlock>
        <DemoBlock title="自定义内容">
          <VanTreeSelect
            items={[
              {
                text: '分组 1',
              },
              {
                text: '分组 2',
              },
            ]}
            height="55vw"
            mainActiveIndex={mainActiveIndex}
            activeId={activeId}
            onClickItem={this.onClickItem}
            onClickNav={this.onClickNav}
            renderContent={
              <Block>
                {mainActiveIndex === 0 ? (
                  <VanImage
                    src="https://img.yzcdn.cn/vant/apple-1.jpg"
                    width="100%"
                    height="100%"
                  ></VanImage>
                ) : (
                  mainActiveIndex === 1 && (
                    <VanImage
                      src="https://img.yzcdn.cn/vant/apple-2.jpg"
                      width="100%"
                      height="100%"
                      slot="content"
                    ></VanImage>
                  )
                )}
              </Block>
            }
          ></VanTreeSelect>
        </DemoBlock>
        <DemoBlock title="徽标提示">
          <VanTreeSelect
            items={badgeItems}
            mainActiveIndex={mainActiveIndex}
            activeId={activeId}
            onClickItem={this.onClickItem}
            onClickNav={this.onClickNav}
          ></VanTreeSelect>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
